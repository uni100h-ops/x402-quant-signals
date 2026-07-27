import os
import time
import base64
import json
import uuid
import requests
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

app = FastAPI(title="AlphaSync Quant Engine API")

# --- CONFIGURACIÓN ALGORAND ---
PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI"
PRICE_USDC = "10000"
ALGORAND_MAINNET_CAIP2 = "algorand:wG322vLX73pM23GxsAR5DQwMGlG52s21"
USDC_ASA_ID = "31566704"

def calculate_quant_signals(symbol: str):
    # Ingesta de datos de mercado
    url = f"https://api.binance.com/api/v3/ticker/24hr?symbol={symbol.upper()}USDT"
    res = requests.get(url)
    
    if res.status_code != 200:
        return {"error": "Símbolo no encontrado"}
    
    data = res.json()
    price = float(data["lastPrice"])
    change_24h = float(data["priceChangePercent"])
    
    # Lógica cuantitativa
    trend = "BULLISH" if change_24h > 0 else "BEARISH"
    signal = "BUY" if change_24h > 1.5 else ("SELL" if change_24h < -1.5 else "HOLD")
    
    return {
        "asset": f"{symbol.upper()}/USDT",
        "price": price,
        "recommendation": signal,
        "timestamp": int(time.time())
    }

@app.get("/api/v1/market-signal")
async def get_market_signal(request: Request, symbol: str = "BTC"):
    # Comprobar si la petición incluye la prueba de pago
    payment_header = request.headers.get("X-PAYMENT-PROOF") or request.headers.get("payment-proof")
    
    # Si no hay pago, devolvemos el 402 "Payment Required"
    if not payment_header:
        # Añadimos un nonce (imprescindible en esquemas x402 para validación del cliente)
        payload_402 = {
            "x402Version": 2,
            "error": "Payment required",
            "nonce": str(uuid.uuid4()),  # <-- NUEVO: Evita que el validador del cliente falle
            "resource": {
                "url": str(request.url),
                "description": "Señales analíticas y cuantitativas.",
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
                    "extra": {"name": "USDC", "version": "1", "tag": "x402-global-challenge"}
                }
            ]
        }
        
        # Usar Base64 URL-safe y sin padding (el estándar esperado para cabeceras)
        payment_req_json = json.dumps(payload_402)
        payment_req_b64 = base64.urlsafe_b64encode(payment_req_json.encode()).decode().rstrip('=')
        
        return JSONResponse(
            status_code=402, 
            content=payload_402,
            headers={"payment-required": payment_req_b64}
        )
    
    # Si llega hasta aquí, hay pago, procesamos la señal
    data = calculate_quant_signals(symbol)
    return {"status": "success", "data": data}
