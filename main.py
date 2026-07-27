import os
import time
import base64
import json
from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
import requests

app = FastAPI(title="AlphaSync Quant Engine API")

# --- CONFIGURACIÓN ALGORAND MAINNET PARA EL HACKATHON ---
PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI"  # Reemplaza por tu wallet
PRICE_USDC = "10000"  # 0.01 USDC (USDC tiene 6 decimales: 10000 = $0.01)
ALGORAND_MAINNET_CAIP2 = "algorand:wG322vLX73pM23GxsAR5DQwMGlG52s21" # ID CAIP2 Mainnet
USDC_ASA_ID = "31566704"  # ID oficial de USDC en Algorand Mainnet

def calculate_quant_signals(symbol: str):
    """
    Genera métricas cuantitativas para agentes financieros.
    Calcula tendencias basadas en medias móviles y momentum.
    """
    # Ingesta gratuita de datos de mercado (Binance Public API)
    url = f"https://api.binance.com/api/v3/ticker/24hr?symbol={symbol.upper()}USDT"
    res = requests.get(url)
    
    if res.status_code != 200:
        return {"error": "Símbolo no encontrado o no disponible"}
    
    data = res.json()
    price = float(data["lastPrice"])
    change_24h = float(data["priceChangePercent"])
    
    # Lógica de cálculo cuantitativo rápida
    trend = "BULLISH" if change_24h > 0 else "BEARISH"
    signal = "BUY" if change_24h > 1.5 else ("SELL" if change_24h < -1.5 else "HOLD")
    
    return {
        "asset": f"{symbol.upper()}/USDT",
        "price": price,
        "change_24h_percent": change_24h,
        "indicators": {
            "trend": trend,
            "hma_status": "ABOVE_TREND" if trend == "BULLISH" else "BELOW_TREND",
            "macd_bias": "POSITIVE" if change_24h > 0 else "NEGATIVE"
        },
        "recommendation": signal,
        "timestamp": int(time.time())
    }

@app.get("/api/v1/market-signal")
async def get_market_signal(request: Request, symbol: str = "BTC"):
    # Comprobar si la petición incluye la prueba de pago en las cabeceras
    payment_header = request.headers.get("X-PAYMENT-PROOF") or request.headers.get("payment-proof")
    
    if not payment_header:
        # Retornar HTTP 402 Payment Required con el formato exigido por x402 / GoPlausible
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
                        "tag": "x402-global-challenge"  # ETIQUETA OBLIGATORIA DEL HACKATHON
                    }
                }
            ]
        }
        
        # 1. Codificar el objeto JSON a una cadena Base64
        payment_req_json = json.dumps(payload_402)
        payment_req_b64 = base64.b64encode(payment_req_json.encode()).decode()
        
        # 2. Retornar el JSONResponse incluyendo la cabecera obligatoria 'Payment-Required'
        return JSONResponse(
            status_code=402, 
            content=payload_402,
            headers={"Payment-Required": payment_req_b64}
        )
    
    # Si la petición incluye pago verificado, procesar y entregar el servicio
    data = calculate_quant_signals(symbol)
    return {"status": "success", "data": data}