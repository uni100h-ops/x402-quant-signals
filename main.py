import os
import time
import base64
import json
from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
import requests

app = FastAPI(title="AlphaSync Quant Engine API")

# ... (mantén tus constantes de configuración aquí igual)

@app.get("/api/v1/market-signal")
@app.get("/api/v1/market-signal")
async def get_market_signal(request: Request, symbol: str = "BTC"):
    # 1. Definir la cabecera
    payment_header = request.headers.get("X-PAYMENT-PROOF") or request.headers.get("payment-proof")
    
    # 2. Comprobar si la petición incluye la prueba de pago
    if not payment_header:
        # Definir el payload correctamente dentro del ámbito
        payload_402 = {
            "x402Version": 2,
            "error": "Payment required",
            "resource": {
                "url": str(request.url),
                "description": "Señales analíticas y cuantitativas en tiempo real para bots de trading (HMA, EMA, MACD bias).",
                "mimeType": "application/json"
            },
            "accepts": [
                {
                    "scheme": "exact",
                    "network": ALGORAND_MAINNET_CAIP2,
                    "asset": USDC_ASA_ID,
                    "amount": PRICE_USDC,
                    "payTo": PAYTO_ADDRESS,
                    "maxTimeoutSeconds": 300,
                    "extra": {
                        "name": "USDC",
                        "version": "1",
                        "tag": "x402-global-challenge"
                    }
                }
            ]
        }
        
        # 3. Codificar el objeto JSON a una cadena Base64 limpia
        payment_req_json = json.dumps(payload_402)
        payment_req_b64 = base64.b64encode(payment_req_json.encode()).decode().replace('\n', '')
        
        # 4. Retornar el JSONResponse incluyendo la cabecera
        return JSONResponse(
            status_code=402, 
            content=payload_402,
            headers={"payment-required": payment_req_b64}
        )
    
    # Si la petición incluye pago verificado, procesar y entregar el servicio
    data = calculate_quant_signals(symbol)
    return {"status": "success", "data": data}
