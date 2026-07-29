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
    expose_headers=["x402-payment-required"]
)

# === CONFIGURACIÓN OFICIAL DE TU COBRO ===
PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI" # Pon aquí tu wallet de recepción
USDC_ASA_ID = "31566704"
ALGORAND_MAINNET_CAIP2 = "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8="
PRICE = "100000"                          # 0.1 USDC en micro-unidades

@app.get("/api/v1/market-signal")
async def get_market_signal(symbol: str, request: Request, response: Response):
    auth_header = request.headers.get("Authorization")

    # 1. SI NO HAY PAGO -> Devolver HTTP 402 con los requerimientos en formato CAIP-2
    if not auth_header or not auth_header.startswith("x402 "):
        payment_requirements = [{
            "network": ALGORAND_MAINNET_CAIP2,
            "asset": USDC_ASA_ID,
            "amount": PRICE,
            "payTo": PAYTO_ADDRESS,
            "tag": "x402-global-challenge"
        }]
        
        req_json = json.dumps(payment_requirements, separators=(',', ':'))
        encoded_req = base64.urlsafe_b64encode(req_json.encode()).decode().rstrip("=")
        
        response.status_code = 402
        response.headers["x402-payment-required"] = encoded_req
        return {"error": "Payment Required"}

    # 2. SI HAY PAGO -> Interceptar y validar con el facilitador GoPlausible
    try:
        token = auth_header.split(" ")[1]
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

        # 3. PAGO VALIDADO E INDEXADO -> Entregar la señal de mercado
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
