import time
import requests
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AlphaSync Quant Engine API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["x402-payment-required", "payment-required"]
)

def calculate_quant_signals(symbol: str):
    url = f"https://api.binance.com/api/v3/ticker/24hr?symbol={symbol.upper()}USDT"
    res = requests.get(url)
    
    if res.status_code != 200:
        return {"error": "Símbolo no encontrado"}
    
    data = res.json()
    price = float(data["lastPrice"])
    change_24h = float(data["priceChangePercent"])
    
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
    # Comprobamos si el cliente ya nos envía el recibo de pago
    receipt = request.headers.get("x402-receipt")
    
    # Si no hay recibo, devolvemos el payload del protocolo 402
    if not receipt:
        x402_payload = {
            "requirement": {
                "scheme": "exact",
                "network": "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",
                "asset": "31566704",
                "amount": "100000",
                "payTo": "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI",
                "maxTimeoutSeconds": 300,
                "extra": {
                    "decimals": 6, 
                    "tag": "x402-global-challenge"
                }
            },
            "bazaar": {
                "description": "AlphaSync Quant Engine Market Signals",
                "method": "GET",
                "input": {"symbol": "BTC"},
                "output": {
                    "example": {
                        "asset": "BTC/USDT",
                        "price": 64777.38,
                        "recommendation": "BUY",
                        "timestamp": 1785445577
                    }
                }
            }
        }
        
        # El protocolo x402 exige un código HTTP 402 y devolver el esquema
        return JSONResponse(
            status_code=status.HTTP_402_PAYMENT_REQUIRED,
            content=x402_payload,
            headers={"x402-payment-required": "true"}
        )
    
    # Si hay recibo (pago completado on-chain), servimos los datos reales
    data = calculate_quant_signals(symbol)
    return {
        "symbol": symbol,
        "status": "success",
        "data": data
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
