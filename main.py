import base64
import json
import requests
from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="x402 Server")

# Configuración CORS esencial para x402
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=[
        "x402-payment-required",
        "payment-required",
        "Payment-Required",
        "PAYMENT-RESPONSE",
        "X-PAYMENT-RESPONSE"
    ]
)

# === CONFIGURACIÓN OFICIAL DE TU COBRO ===
PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI"
USDC_ASA_ID = "31566704"
ALGORAND_MAINNET_CAIP2 = "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8="
PRICE = "100000"                                  # 0.1 USDC en micro-unidades

@app.get("/api/v1/market-signal")
async def get_market_signal(symbol: str, request: Request, response: Response):
    # Intentamos leer la firma/autorización desde cualquiera de las cabeceras estándar
    auth_header = (
        request.headers.get("Authorization") or 
        request.headers.get("PAYMENT-SIGNATURE") or 
        request.headers.get("X-PAYMENT")
    )

    # 1. SI NO HAY PAGO -> Devolver HTTP 402 estructurado para @x402/core
    if not auth_header:
        requirement_item = {
            "scheme": "exact",
            "network": ALGORAND_MAINNET_CAIP2,
            "asset": USDC_ASA_ID,
            "amount": PRICE,
            "payTo": PAYTO_ADDRESS,
            "tag": "x402-global-challenge"
        }

        # Estructura compatible V1 / V2
        payment_challenge = {
            "x402Version": 2,
            "accepts": [requirement_item]
        }
        
        req_json = json.dumps(payment_challenge, separators=(',', ':'))
        encoded_req = base64.urlsafe_b64encode(req_json.encode()).decode().rstrip("=")
        
        response.status_code = 402
        # Ponemos la cabecera en los 2 nombres comunes (compatibilidad antigua y nueva)
        response.headers["x402-payment-required"] = encoded_req
        response.headers["payment-required"] = encoded_req
        
        # IMPORTANTE: Devolvemos la estructura completa en el BODY
        # para que httpClient.getPaymentRequiredResponse(getHeader, body) lo lea bien.
        return payment_challenge

    # 2. SI HAY PAGO -> Interceptamos y validamos con GoPlausible
    try:
        token = auth_header.replace("x402 ", "").replace("Bearer ", "").strip()
        padded_token = token + "=" * ((4 - len(token) % 4) % 4)
        decoded_bytes = base64.urlsafe_b64decode(padded_token)
        x402_data = json.loads(decoded_bytes)
        
        facilitator_payload = {
            "paymentPayload": x402_data.get("paymentPayload", {}),
            "paymentRequirements": x402_data.get("paymentRequirements", {})
        }
        
        verify_url = "https://facilitator.goplausible.xyz/verify"
        facilitator_res = requests.post(verify_url, json=facilitator_payload)
        
        if facilitator_res.status_code != 200:
            raise HTTPException(status_code=502, detail="Error de comunicación con GoPlausible")
            
        verify_result = facilitator_res.json()
        
        if not verify_result.get("isValid"):
            raise HTTPException(status_code=403, detail=f"Pago inválido: {verify_result.get('invalidReason')}")

        # 3. PAGO VALIDADO -> Entregar la señal de mercado
        return {
            "symbol": symbol,
            "status": "success",
            "message": "Transacción verificada e indexada en GoPlausible.",
            "data": {
                "signal": "BUY",
                "price": 65000.00
            }
        }
        
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="El token x402 no es un JSON válido")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interno: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
