import base64
import json
import requests
import traceback
from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="x402 Server")

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

PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI"
USDC_ASA_ID = "31566704"
ALGORAND_MAINNET_CAIP2 = "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8="
PRICE = "100000"

@app.get("/api/v1/market-signal")
async def get_market_signal(symbol: str, request: Request, response: Response):
    # Intentamos capturar el header en cualquiera de sus formas comunes
    auth_header = (
        request.headers.get("Authorization") or 
        request.headers.get("PAYMENT-SIGNATURE") or 
        request.headers.get("X-PAYMENT")
    )

    # 1. SI NO HAY PAGO: DEVOLVER EL 402 CHALLENGE
    if not auth_header:
        print("-> Petición sin pago: Enviando 402 Challenge")
        requirement_item = {
            "scheme": "exact",
            "network": ALGORAND_MAINNET_CAIP2,
            "asset": USDC_ASA_ID,
            "amount": PRICE,
            "payTo": PAYTO_ADDRESS,
            "tag": "x402-global-challenge"
        }

        payment_challenge = {
            "x402Version": 2,
            "accepts": [requirement_item]
        }
        
        req_json = json.dumps(payment_challenge, separators=(',', ':'))
        encoded_req = base64.urlsafe_b64encode(req_json.encode()).decode().rstrip("=")
        
        response.status_code = 402
        response.headers["x402-payment-required"] = encoded_req
        response.headers["payment-required"] = encoded_req
        return payment_challenge

    # 2. SI HAY PAGO: INICIAR EL PROCESO DE VERIFICACIÓN
    print("\n=== NUEVO INTENTO DE PAGO RECIBIDO ===")
    print(f"Header crudo detectado: {auth_header[:50]}...")

    try:
        # Limpieza del token
        token = auth_header.replace("x402 ", "").replace("Bearer ", "").strip()
        padded_token = token + "=" * ((4 - len(token) % 4) % 4)
        
        # Decodificación Base64 (UrlSafe primero, Estándar después)
        try:
            decoded_bytes = base64.urlsafe_b64decode(padded_token)
        except:
            decoded_bytes = base64.b64decode(padded_token)
            
        x402_data = json.loads(decoded_bytes)
        print("-> Payload decodificado correctamente")
        
        # Extracción segura del payload del cliente
        client_payload = x402_data.get("paymentPayload") or x402_data.get("payload") or x402_data
        
        # Definición estricta de las reglas del servidor (Objeto directo, no array)
        server_requirements = {
            "scheme": "exact",
            "network": ALGORAND_MAINNET_CAIP2,
            "asset": USDC_ASA_ID,
            "amount": PRICE,
            "payTo": PAYTO_ADDRESS,
            "tag": "x402-global-challenge"
        }
        
        # Construcción del payload final para GoPlausible incluyendo la versión x402
        facilitator_payload = {
            "x402Version": 2,
            "paymentPayload": client_payload,
            "paymentRequirements": server_requirements
        }
        
        verify_url = "https://facilitator.goplausible.xyz/verify"
        
        print(f"-> Enviando JSON a GoPlausible: {json.dumps(facilitator_payload)}")
        
        # Petición HTTP a GoPlausible
        facilitator_res = requests.post(verify_url, json=facilitator_payload)
        print(f"-> Respuesta GoPlausible Status: {facilitator_res.status_code}")
        
        if facilitator_res.status_code != 200:
            print(f"-> Error del facilitador: {facilitator_res.text}")
            raise HTTPException(status_code=502, detail="Error de comunicación con GoPlausible")
            
        verify_result = facilitator_res.json()
        print(f"-> Resultado verificación: {verify_result}")
        
        if not verify_result.get("isValid"):
            raise HTTPException(status_code=403, detail=f"Pago inválido: {verify_result.get('invalidReason')}")

        # 3. PAGO VERIFICADO CORRECTAMENTE: SERVIR EL RECURSO
        print("-> ✅ PAGO ACEPTADO. Enviando señal.")
        return {
            "symbol": symbol,
            "status": "success",
            "message": "Transacción verificada e indexada en GoPlausible.",
            "data": {
                "signal": "BUY",
                "price": 65000.00
            }
        }
        
    except HTTPException as http_exc:
        # Dejar pasar los errores controlados (403, 502, 400) para que lleguen al cliente
        raise http_exc
    except json.JSONDecodeError:
        print("-> Error: El token no era un JSON válido tras decodificar el Base64")
        raise HTTPException(status_code=400, detail="El token x402 no es un JSON válido")
    except Exception as e:
        print("💥 ERROR INTERNO CRÍTICO DETECTADO:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Error interno: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
