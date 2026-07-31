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
        "x402-settle-endpoint",
        "x402-verify-endpoint",
        "Content-Type"
    ]
)

PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI"
USDC_ASA_ID = "31566704"
ALGORAND_MAINNET_CAIP2 = "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8="
PRICE = "100000"

def calculate_quant_signals(symbol: str):
    """Calcula señales de mercado usando Binance"""
    try:
        url = f"https://api.binance.com/api/v3/ticker/24hr?symbol={symbol.upper()}USDT"
        res = requests.get(url, timeout=10)
        
        if res.status_code != 200:
            return {"error": f"Símbolo {symbol} no encontrado"}
        
        data = res.json()
        price = float(data["lastPrice"])
        change_24h = float(data["priceChangePercent"])
        
        signal = "BUY" if change_24h > 1.5 else ("SELL" if change_24h < -1.5 else "HOLD")
        
        return {
            "asset": f"{symbol.upper()}/USDT",
            "price": price,
            "change_24h": change_24h,
            "recommendation": signal,
            "timestamp": int(time.time())
        }
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/v1/market-signal")
async def get_market_signal(request: Request, response: Response, symbol: str = "BTC"):
    """
    Endpoint de señales de mercado con pago x402
    
    Query params:
    - symbol: BTC, ETH, ALGO, etc. (por defecto BTC)
    """
    
    # Construir URL pública correctamente (incluyendo query params)
    host = request.headers.get("x-forwarded-host") or request.headers.get("host") or "x402-quant-signals.onrender.com"
    proto = request.headers.get("x-forwarded-proto") or "https"
    
    # ⭐ IMPORTANTE: Incluir query params en la URL pública
    query_string = f"?symbol={symbol}" if symbol else ""
    public_url = f"{proto}://{host}{request.url.path}{query_string}"
    
    print(f"\n📍 URL Pública: {public_url}")
    print(f"🔤 Símbolo solicitado: {symbol}")

    # Obtener header de autorización
    auth_header = (
        request.headers.get("Authorization") or 
        request.headers.get("PAYMENT-SIGNATURE") or 
        request.headers.get("X-PAYMENT") or
        request.headers.get("payment-signature") or
        request.headers.get("x402-payment-token")
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
            "tag": "x402-quant-signals"
        }
    }

    # ===== CASO 1: SIN PAGO =====
    if not auth_header:
        print("🔴 [402] Petición sin pago: Enviando challenge")
        
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
                "title": "AlphaSync Quant Engine",
                "name": "Market Signal API",
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
        response.headers["x402-version"] = "2"
        response.headers["x402-status"] = "payment-required"
        response.headers["Content-Type"] = "application/json"
        
        return payment_challenge

    # ===== CASO 2: CON PAGO =====
    print("\n✅ [200] Pago recibido - Verificando...")
    
    try:
        # Decodificar token de pago
        token = auth_header.replace("x402 ", "").replace("Bearer ", "").strip()
        padded_token = token + "=" * ((4 - len(token) % 4) % 4)
        
        try:
            decoded_bytes = base64.urlsafe_b64decode(padded_token)
        except:
            decoded_bytes = base64.b64decode(padded_token)
            
        x402_data = json.loads(decoded_bytes)
        print(f"🔐 Token decodificado correctamente")
        
        # Preparar payload para facilitador
        facilitator_payload = {
            "paymentPayload": x402_data, 
            "paymentRequirements": requirement_item,
            "resource": public_url,
            "description": "AlphaSync Quant Engine Market Signals"
        }
        
        # Verificar con GoPlausible
        print("🔍 Verificando pago con GoPlausible...")
        verify_url = "https://facilitator.goplausible.xyz/verify"
        verify_res = requests.post(verify_url, json=facilitator_payload, timeout=10)
        
        if verify_res.status_code != 200:
            print(f"❌ Error de verificación: {verify_res.status_code}")
            raise HTTPException(status_code=502, detail="Error communicating with facilitator")
            
        verify_result = verify_res.json()
        
        if not verify_result.get("isValid"):
            reason = verify_result.get('invalidReason', 'Unknown')
            print(f"❌ Pago inválido: {reason}")
            raise HTTPException(status_code=403, detail=f"Payment invalid: {reason}")

        # Hacer SETTLE
        print("💳 Liquidando pago...")
        settle_url = "https://facilitator.goplausible.xyz/settle"
        settle_res = requests.post(settle_url, json=facilitator_payload, timeout=10)
        
        if settle_res.status_code == 200:
            settle_result = settle_res.json()
            print(f"✅ SETTLE exitoso - TX: {settle_result.get('txId', 'N/A')}")
        else:
            print(f"⚠️ SETTLE retornó {settle_res.status_code}")

        # Calcular y devolver datos
        signal_data = calculate_quant_signals(symbol)
        
        response.status_code = 200
        response.headers["Content-Type"] = "application/json"
        
        return {
            "symbol": symbol,
            "status": "success",
            "message": f"Payment settled. Market signal for {symbol} calculated.",
            "data": signal_data
        }
        
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        print(f"💥 ERROR CRÍTICO: {str(e)}")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")


@app.get("/health")
async def health_check():
    """Endpoint de salud (sin pago requerido)"""
    return {"status": "ok", "service": "AlphaSync Quant Engine"}


@app.post("/debug")
async def debug_endpoint(request: Request):
    """Debug: Ver qué headers recibe"""
    return {
        "method": request.method,
        "path": request.url.path,
        "query": str(request.url.query),
        "headers": dict(request.headers)
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
