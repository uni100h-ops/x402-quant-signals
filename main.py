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
async def get_market_signal(request: Request, symbol: str = "BTC"):
    # --- ESTA LÍNEA ES LA QUE FALTA ---
    payment_header = request.headers.get("X-PAYMENT-PROOF") or request.headers.get("payment-proof")
    
    if not payment_header:
        # ... (mantén tu payload_402 aquí igual)
        
        # 1. Codificar el objeto JSON a una cadena Base64 limpia
        payment_req_json = json.dumps(payload_402)
        payment_req_b64 = base64.b64encode(payment_req_json.encode()).decode().replace('\n', '')
        
        # 2. Retornar el JSONResponse incluyendo la cabecera en minúsculas
        return JSONResponse(
            status_code=402, 
            content=payload_402,
            headers={"payment-required": payment_req_b64}
        )
    
    # Si la petición incluye pago verificado, procesar y entregar el servicio
    data = calculate_quant_signals(symbol)
    return {"status": "success", "data": data}
