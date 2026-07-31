import base64
import json
import requests
import traceback
import time
from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AlphaSync Quant Engine API")

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
        "X-PAYMENT-RESPONSE",
        "x402-version",
        "x402-status",
        "Content-Type"
    ]
)

# ✅ RUTA PARA AGENT CARD
@app.get("/.well-known/agent-card.json")
async def get_agent_card():
    """Sirve el Agent Card para x402 Discovery"""
    return {
        "name": "Toni Trading Signals",
        "description": "Quant Signals Trading Agent",
        "version": "1.0.0",
        "icon": "https://i.imgur.com/qEmbipv.jpeg",
        "url": "https://x402-quant-signals.onrender.com",
        "capabilities": {
            "streaming": False,
            "pushNotifications": False
        },
        "supportedInterfaces": [
            {
                "url": "https://x402-quant-signals.onrender.com/api/v1/market-signal",
                "protocolBinding": "JSONRPC",
                "protocolVersion": "1.0"
            }
        ],
        "defaultInputModes": ["text/plain"],
        "defaultOutputModes": ["application/json"],
        "skills": [
            {
                "id": "market-signal",
                "name": "Market Signal",
                "description": "Provides quantitative trading signals and market analysis"
            }
        ],
        "provider": {
            "name": "x402-quant-signals"
        }
    }

PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI"
USDC_ASA_ID = "31566704"
ALGORAND_MAINNET_CAIP2 = "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8="
PRICE = "100000"

def calculate_quant_signals(symbol: str):
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
async def get_market_signal(request: Request, response: Response, symbol: str = "BTC"):
    
    host = request.headers.get("x-forwarded-host") or request.headers.get("host") or "x402-quant-signals.onrender.com"
    proto = request.headers.get("x-forwarded-proto") or "https"
    public_url = f"{proto}://{host}{request.url.path}"

    auth_header = (
        request.headers.get("Authorization") or 
        request.headers.get("PAYMENT-SIGNATURE") or 
        request.headers.get("X-PAYMENT") or
        request.headers.get("payment-signature")
    )

    requirement_item = {
        "scheme": "exact",
        "network": ALGORAND_MAINNET_CAIP2,
        "asset": USDC_ASA_ID,
        "amount": PRICE,
        "payTo": PAYTO_ADDRESS,
        "maxTimeoutSeconds": 300,
        "extra": {
            "decimals": 6,
            "tag": "x402-global-challenge"
        }
    }

    if not auth_header:
        print("-> Petición sin pago: Enviando 402 Challenge con Bazaar Discovery")
        
        # ⭐ BAZAAR EXTENSION PARA DISCOVERY
        bazaar_extension = {
            "info": {
                "symbol": "string (BTC, ETH, ALGO, etc.)"
            },
            "schema": {
                "type": "object",
                "properties": {
                    "symbol": {
                        "type": "string",
                        "description": "Cryptocurrency symbol for market signal",
                        "examples": ["BTC", "ETH", "ALGO"]
                    }
                },
                "required": ["symbol"]
            }
        }
        
        payment_challenge = {
            "x402Version": 2,
            "resource": {
                "title": "AlphaSync Quant Engine",  # ⭐ Intenta con "title"
                "name": "AlphaSync Quant Engine",  # ⭐ AQUÍ VA EL NOMBRE DEL PROYECTO
                "url": public_url,
                "description": "Real-time Market Signals & Crypto Analysis",
                "mimeType": "application/json"
            },
            "accepts": [requirement_item],
            "extensions": {
                "bazaar": bazaar_extension
            }
        }
        
        req_json = json.dumps(payment_challenge, separators=(',', ':'))
        encoded_req = base64.urlsafe_b64encode(req_json.encode()).decode().rstrip("=")
        
        response.status_code = 402
        response.headers["x402-payment-required"] = encoded_req
        response.headers["payment-required"] = encoded_req
        response.headers["x402-version"] = "2"
        response.headers["x402-status"] = "payment-required"
        response.headers["Content-Type"] = "application/json"
        
        return payment_challenge

    print("\n=== NUEVO INTENTO DE PAGO RECIBIDO ===")
    
    try:
        token = auth_header.replace("x402 ", "").replace("Bearer ", "").strip()
        padded_token = token + "=" * ((4 - len(token) % 4) % 4)
        
        try:
            decoded_bytes = base64.urlsafe_b64decode(padded_token)
        except:
            decoded_bytes = base64.b64decode(padded_token)
            
        x402_data = json.loads(decoded_bytes)
        
        facilitator_payload = {
            "paymentPayload": x402_data, 
            "paymentRequirements": requirement_item,
            "resource": public_url,
            "description": "AlphaSync Quant Engine Market Signals"
        }
        
        verify_url = "https://facilitator.goplausible.xyz/verify"
        facilitator_res = requests.post(verify_url, json=facilitator_payload)
        
        if facilitator_res.status_code != 200:
            raise HTTPException(status_code=502, detail="Error de comunicación con GoPlausible")
            
        verify_result = facilitator_res.json()
        
        if not verify_result.get("isValid"):
            print(f"-> ❌ VERIFICACIÓN FALLIDA: {verify_result.get('invalidReason')}")
            raise HTTPException(status_code=403, detail=f"Pago inválido: {verify_result.get('invalidReason')}")

        print("-> ✅ VERIFICACIÓN OK. Procediendo a hacer SETTLE...")
        
        settle_url = "https://facilitator.goplausible.xyz/settle"
        settle_res = requests.post(settle_url, json=facilitator_payload)
        
        if settle_res.status_code == 200:
            print(f"-> ✅ SETTLE COMPLETADO")

        data = calculate_quant_signals(symbol)
        
        return {
            "symbol": symbol,
            "status": "success",
            "message": "Transacción liquidada e indexada en el x402 Global Challenge.",
            "data": data
        }
        
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        print("💥 ERROR INTERNO CRÍTICO DETECTADO:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Error interno: {str(e)}")

@app.get("/health")
async def health_check():
    """Endpoint de salud (sin pago requerido)"""
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
