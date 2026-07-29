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

# === CONFIGURACIÓN DE TU COBRO ===
PAYTO_ADDRESS = "TU_WALLET_SERVIDOR_AQUI" # Tu wallet de recepcion
ASSET_ID = "31566704"                     # USDC en Algorand
PRICE = "100000"                          # Precio en micro-unidades (ej: 0.1 USDC)
NETWORK = "algorand-mainnet"

@app.get("/api/v1/market-signal")
async def get_protected_data(request: Request, response: Response, symbol: str = "BTC"):
    auth_header = request.headers.get("Authorization")

    # 1. SI NO HAY PAGO -> Devolver HTTP 402
    if not auth_header or not auth_header.startswith("x402 "):
        payment_requirements = {
            "network": NETWORK,
            "asset": ASSET_ID,
            "amount": PRICE,
            "payTo": PAYTO_ADDRESS,
            "tag": "x402-global-challenge"
        }
        
        req_json = json.dumps(payment_requirements, separators=(',', ':'))
        encoded_req = base64.urlsafe_b64encode(req_json.encode()).decode().rstrip("=")
        
        response.status_code = 402
        response.headers["x402-payment-required"] = encoded_req
        return {"error": "Payment Required"}

    # 2. SI HAY PAGO -> Validar con GoPlausible
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
            raise HTTPException(status_code=502, detail="Error con GoPlausible")
            
        verify_result = facilitator_res.json()
        
        if not verify_result.get("isValid"):
            raise HTTPException(status_code=403, detail=f"Pago invalido: {verify_result.get('invalidReason')}")

        # 3. PAGO VALIDADO
        return {
            "status": "success",
            "message": "Transaccion verificada e indexada.",
            "data": "Tus datos aqui"
        }
        
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Token no es JSON valido")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interno: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
