import time
import requests
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

# Importaciones del SDK oficial (ajusta los nombres exactos si la doc del SDK varía ligeramente)
from x402_avm.middleware import X402Middleware
from x402_avm.models import PaymentRequirement, BazaarInfo

app = FastAPI(title="AlphaSync Quant Engine API")

# 1. Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["x402-payment-required", "payment-required"]
)

# 2. Configuración del Middleware x402 (Esto reemplaza todo tu código manual)
app.add_middleware(
    X402Middleware,
    requirement=PaymentRequirement(
        scheme="exact",
        network="algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",
        asset="31566704",
        amount="100000",
        payTo="SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI",
        maxTimeoutSeconds=300,
        extra={
            "decimals": 6, 
            "tag": "x402-global-challenge"
        }
    ),
    bazaar=BazaarInfo(
        description="AlphaSync Quant Engine Market Signals",
        method="GET",
        input={"symbol": "BTC"},
        output={
            "example": {
                "asset": "BTC/USDT",
                "price": 64777.38,
                "recommendation": "BUY",
                "timestamp": 1785445577
            }
        }
    )
)

def calculate_quant_signals(symbol: str):
    url = f"https://api.binance.com/api/v3/ticker/24hr?symbol={symbol.upper()}USDT"
    res = requests.get(url)
    
    if res.status_code != 200:
        return {"error": "Símbolo no encontrado"}
    
    data = res.json()
    price = float(data["lastPrice"])
    change_24h = float(data["priceChangePercent"])
    
    # Lógica de señales
    trend = "BULLISH" if change_24h > 0 else "BEARISH"
    signal = "BUY" if change_24h > 1.5 else ("SELL" if change_24h < -1.5 else "HOLD")
    
    return {
        "asset": f"{symbol.upper()}/USDT",
        "price": price,
        "recommendation": signal,
        "timestamp": int(time.time())
    }

# 3. Tu endpoint completamente limpio
@app.get("/api/v1/market-signal")
async def get_market_signal(symbol: str = "BTC"):
    # Si la ejecución llega a este punto, el middleware x402-avm 
    # ya ha interceptado la llamada, enviado el HTTP 402, 
    # validado el pago on-chain y gestionado la indexación en Bazaar.
    
    data = calculate_quant_signals(symbol)
    
    return {
        "symbol": symbol,
        "status": "success",
        "message": "Transacción liquidada automáticamente por x402-avm.",
        "data": data
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
