import os
import logging
import traceback
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware

# --- CONFIGURACIÓN DE LOGGING ---
logging.basicConfig(level=logging.DEBUG, format='🚨 %(name)s - %(levelname)s - %(message)s')

# --- IMPORTACIONES DE x402 ---
from x402.server import x402ResourceServer
from x402.http import HTTPFacilitatorClient, FacilitatorConfig, PaymentOption
from x402.http.types import RouteConfig
from x402.http.middleware.fastapi import PaymentMiddlewareASGI

# 1. CAMBIO: Importamos el esquema EVM, ya que Python no soporta AVM
from x402.mechanisms.evm.exact import ExactEvmServerScheme 

class DebugMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        try:
            return await call_next(request)
        except Exception as e:
            print("\n" + "="*50)
            print("🚨 ERROR CRÍTICO CAPTURADO EN LA CAPA MIDDLEWARE 🚨")
            print("="*50)
            traceback.print_exc()
            print("="*50 + "\n")
            raise e

app = FastAPI(title="AlphaSync Data Suite", debug=True)

# 2. CAMBIO: Dirección de prueba EVM y red Base Sepolia (soportada por Python)
MERCHANT_PAY_TO = os.environ.get("PAY_TO_ADDRESS", "0x640718F98CcAFcEdA2e3527aAD947B17DC0741Fe")
EVM_NETWORK = "eip155:84532"

facilitator = HTTPFacilitatorClient(
    FacilitatorConfig(url="https://x402.org/facilitator")
)
server = x402ResourceServer(facilitator)

# 3. CAMBIO: Registramos el esquema EVM en el servidor
server.register(EVM_NETWORK, ExactEvmServerScheme())

# 4. CAMBIO: Volvemos a los precios con "$" y usamos la red EVM
routes = {
    "GET /api/v1/macro-correlation": RouteConfig(
        accepts=[
            PaymentOption(
                scheme="exact",   
                network=EVM_NETWORK, 
                pay_to=MERCHANT_PAY_TO,
                price="$0.05"
            )
        ],
        description="Matriz de correlaciones macroeconómicas en tiempo real entre índices globales y criptoactivos."
    ),
    "GET /api/v1/liquidity-alert": RouteConfig(
        accepts=[
            PaymentOption(
                scheme="exact",  
                network=EVM_NETWORK, 
                pay_to=MERCHANT_PAY_TO,
                price="$0.02"
            )
        ],
        description="Escaneo de profundidad de liquidez y score de volatilidad instantáneo."
    )
}

app.add_middleware(PaymentMiddlewareASGI, routes=routes, server=server)
app.add_middleware(DebugMiddleware)

@app.get("/api/v1/macro-correlation")
async def get_macro_correlation(request: Request):
    mock_data = {
        "status": "success",
        "data": {
            "btc_vs_fed_rate": -0.75,
            "eth_vs_sp500": 0.82,
            "timestamp": "2026-07-26T13:55:58Z"
        }
    }
    return JSONResponse(content=mock_data)

@app.get("/api/v1/liquidity-alert")
async def get_liquidity_alert(request: Request, pair: str = "ALGO-USDC"):
    mock_data = {
        "status": "success",
        "pair": pair,
        "data": {
            "volatility_score": 8.5,
            "liquidity_depth": "moderate",
            "action_recommended": "hold"
        }
    }
    return JSONResponse(content=mock_data)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080, log_level="debug")