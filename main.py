"""FastAPI resource server accepting USDC payments on Algorand Mainnet via x402."""

import os
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from pydantic import BaseModel

from x402.http import FacilitatorConfig, HTTPFacilitatorClient, PaymentOption
from x402.http.middleware.fastapi import PaymentMiddlewareASGI
from x402.http.types import RouteConfig
from x402.mechanisms.avm import ALGORAND_MAINNET_CAIP2, USDC_MAINNET_ASA_ID
from x402.mechanisms.avm.exact import ExactAvmServerScheme
from x402.server import x402ResourceServer
from x402.schemas import AssetAmount

load_dotenv()

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

PAYTO_ADDRESS = os.getenv("PAYTO_ADDRESS", "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI")
FACILITATOR_URL = os.getenv("FACILITATOR_URL", "https://facilitator.goplausible.xyz")

# ---------------------------------------------------------------------------
# Response Models
# ---------------------------------------------------------------------------

class MarketSignalData(BaseModel):
    asset: str
    price: float
    recommendation: str
    timestamp: int

class MarketSignalResponse(BaseModel):
    symbol: str
    status: str
    message: str
    data: MarketSignalData

# ---------------------------------------------------------------------------
# App & Middleware Setup
# ---------------------------------------------------------------------------

app = FastAPI(title="AlphaSync Quant Engine API")

# Create async facilitator client and resource server
facilitator = HTTPFacilitatorClient(
    FacilitatorConfig(url=FACILITATOR_URL)
)
server = x402ResourceServer(facilitator)

# Register AVM server scheme for Algorand Mainnet
server.register(ALGORAND_MAINNET_CAIP2, ExactAvmServerScheme())

# Define payment-protected routes
routes = {
    "GET /api/v1/market-signal": RouteConfig(
        accepts=PaymentOption(
            scheme="exact",
            pay_to=PAYTO_ADDRESS,
            price=AssetAmount(
                amount="100000",  # 100000 microUSDC = $0.10
                asset=str(USDC_MAINNET_ASA_ID),  # 31566704
                extra={
                    "decimals": 6,
                    "tag": "x402-global-challenge",
                    "name": "USDC"
                },
            ),
            network=ALGORAND_MAINNET_CAIP2,
        ),
        mime_type="application/json",
        description="AlphaSync Quant Engine Market Signals",
        resource="https://x402-quant-signals.onrender.com/api/v1/market-signal",
    ),
}

# Register ASGI middleware - This handles ALL payment logic
app.add_middleware(PaymentMiddlewareASGI, routes=routes, server=server)

# ---------------------------------------------------------------------------
# Route Handlers
# ---------------------------------------------------------------------------

@app.get("/health")
async def health_check() -> dict[str, str]:
    """Health check endpoint (no payment required)."""
    return {"status": "ok"}

def calculate_quant_signals(symbol: str):
    """Calculate market signals from Binance."""
    import time
    import requests
    
    url = f"https://api.binance.com/api/v3/ticker/24hr?symbol={symbol.upper()}USDT"
    res = requests.get(url)
    
    if res.status_code != 200:
        return {"error": "Símbolo no encontrado"}
    
    data = res.json()
    price = float(data["lastPrice"])
    change_24h = float(data["priceChangePercent"])
    
    signal = "BUY" if change_24h > 1.5 else ("SELL" if change_24h < -1.5 else "HOLD")
    
    return {
        "asset": f"{symbol.upper()}/USDT",
        "price": price,
        "recommendation": signal,
        "timestamp": int(time.time())
    }

@app.get("/api/v1/market-signal")
async def get_market_signal(request: Request, symbol: str = "BTC") -> MarketSignalResponse:
    """
    Market signal endpoint (requires USDC payment on Algorand).
    The middleware automatically handles payment verification.
    """
    data = calculate_quant_signals(symbol)
    
    return MarketSignalResponse(
        symbol=symbol,
        status="success",
        message="Transacción liquidada e indexada en el x402 Global Challenge.",
        data=MarketSignalData(**data)
    )

# ---------------------------------------------------------------------------
# Entry Point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
