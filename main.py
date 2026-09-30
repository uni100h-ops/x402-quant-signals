import base64
import json
import requests
import traceback
import time
import os 
from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.responses import FileResponse 
from fastapi.middleware.cors import CORSMiddleware
from qts_bazaar import install_qts_metadata, enrich_challenge, NAME

app = FastAPI(title=NAME)
install_qts_metadata(app)

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
@app.get("/.well-known/x402.json")
async def x402_manifest():
    """Serve the x402 discovery manifest"""
    file_path = os.path.join(os.path.dirname(__file__), "x402.json")
    return FileResponse(file_path, media_type="application/json")

PAYTO_ADDRESS = "SGLTUPAC7TKGKNNXKNPQ2QZCC7NJSLAKYZ7O7NOGGAPXWBFZTOLTPMSPPI"
USDC_ASA_ID = "31566704"
ALGORAND_MAINNET_CAIP2 = "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8="
PRICE = "100000"

def calculate_quant_signals(symbol: str):
    url = f"https://api.binance.com/api/v3/klines?symbol={symbol.upper()}USDT&interval=1m&limit=2"
    res = requests.get(url, timeout=(10, 20))
    
    if res.status_code != 200:
        return {"error": "Symbol not found"}
    
    data = res.json()
    print(f"MARKET DATA | {symbol.upper()}")
    print(f"✅ {data}\n")
    
    # klines devuelve array de arrays: [[timestamp, open, high, low, close, volume, ...]]
    if len(data) < 1:
        return {"error": "No market data available"}
    
    # Obtener el último candle (índice -1) y el anterior (índice -2 si existe)
    last_candle = data[-1]
    price = float(last_candle[4])  # close price
    
    # Calcular cambio de precio comparando con el candle anterior
    if len(data) >= 2:
        prev_candle = data[-2]
        prev_price = float(prev_candle[4])
        change_percent = ((price - prev_price) / prev_price) * 100
    else:
        change_percent = 0
    
    signal = "BUY" if change_percent > 1.5 else ("SELL" if change_percent < -1.5 else "HOLD")
    
    return {
        "asset": f"{symbol.upper()}/USDT",
        "price": price,
        "change_percent": change_percent,
        "recommendation": signal,
        "timestamp": int(time.time()),
        "raw_api_response": data
    }

@app.get("/api/v1/market-signal/{symbol}")
async def get_market_signal(request: Request, response: Response, symbol: str):
    
    public_url = "https://x402-quant-signals.onrender.com" + request.url.path

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

    # One authoritative challenge for the body, both headers and settlement.
    payment_challenge = enrich_challenge({
        "x402Version": 2,
        "resource": {
            "title": NAME,
            "name": NAME,
            "url": public_url,
            "description": "Quantitative cryptocurrency market signals",
            "mimeType": "application/json"
        },
        "accepts": [requirement_item]
    })

    if not auth_header:
        print("PAYMENT REQUIRED | Quant Trading Signals | Bazaar metadata attached")
        encoded_req = base64.b64encode(
            json.dumps(payment_challenge, ensure_ascii=False, separators=(",", ":")).encode()
        ).decode()
        response.status_code = 402
        response.headers["payment-required"] = encoded_req
        response.headers["x402-payment-required"] = encoded_req
        response.headers["x402-version"] = "2"
        response.headers["x402-status"] = "payment-required"
        response.headers["Content-Type"] = "application/json"
        response.headers["Cache-Control"] = "no-store"
        return payment_challenge

    print("PAYMENT REQUEST RECEIVED")
    
    try:
        token = auth_header.replace("x402 ", "").replace("Bearer ", "").strip()
        padded_token = token + "=" * ((4 - len(token) % 4) % 4)
        
        try:
            decoded_bytes = base64.urlsafe_b64decode(padded_token)
        except:
            decoded_bytes = base64.b64decode(padded_token)
            
        x402_data = json.loads(decoded_bytes)
        if not isinstance(x402_data, dict) or x402_data.get("x402Version") != 2:
            raise HTTPException(status_code=400, detail="Expected an x402 v2 payment payload")
        client_resource = x402_data.get("resource") or {}
        if not isinstance(client_resource, dict) or client_resource.get("url") not in (None, public_url):
            raise HTTPException(status_code=400, detail="Payment resource does not match this endpoint")
        # Some older clients omit extensions. Send the SERVER declaration in both
        # /verify and /settle, instead of relying on client-supplied discovery data.
        client_extensions = x402_data.get("extensions") or {}
        if not isinstance(client_extensions, dict):
            raise HTTPException(status_code=400, detail="Invalid payment extensions")
        x402_data["resource"] = payment_challenge["resource"]
        x402_data["extensions"] = {**client_extensions, **payment_challenge["extensions"]}
        
        facilitator_payload = {
            "x402Version": 2,
            "paymentPayload": x402_data, 
            "paymentRequirements": requirement_item,
            "resource": public_url,
            "description": "Quant Trading Signals"
        }
        
        verify_url = "https://facilitator.goplausible.xyz/verify"
        facilitator_res = requests.post(verify_url, json=facilitator_payload, timeout=(10, 45))
        
        if facilitator_res.status_code != 200:
            raise HTTPException(status_code=502, detail="GoPlausible verification service unavailable")
            
        verify_result = facilitator_res.json()
        
        if not verify_result.get("isValid"):
            print(f"PAYMENT VERIFICATION FAILED | {verify_result.get('invalidReason')}")
            raise HTTPException(status_code=403, detail=f"Invalid payment: {verify_result.get('invalidReason')}")

        print("PAYMENT VERIFIED | submitting settlement")
        
        settle_url = "https://facilitator.goplausible.xyz/settle"
        settle_res = requests.post(settle_url, json=facilitator_payload, timeout=(10, 60))
        
        if settle_res.status_code != 200:
            raise HTTPException(status_code=502,
                detail="Settlement not confirmed. Check the existing transaction before paying again.")
        settlement = settle_res.json()
        if not isinstance(settlement, dict) or settlement.get("success") is not True or not settlement.get("transaction"):
            raise HTTPException(status_code=502,
                detail="Settlement not confirmed. Check the existing transaction before paying again.")
        print("PAYMENT SETTLED | " + str(settlement["transaction"]))
        receipt = base64.b64encode(json.dumps(settlement, separators=(",", ":")).encode()).decode()
        response.headers["PAYMENT-RESPONSE"] = receipt
        response.headers["X-PAYMENT-RESPONSE"] = receipt
        response.headers["Cache-Control"] = "no-store"

        data = calculate_quant_signals(symbol)
        
        return {
            "symbol": symbol,
            "status": "success",
            "message": "Payment settled. Bazaar metadata submitted to the facilitator.",
            "transaction": settlement["transaction"],
            "data": data
        }
        
    except (requests.Timeout, requests.ConnectionError):
        raise HTTPException(status_code=502,
            detail="Confirmation unavailable. Check the existing transaction before paying again.") from None
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        print("INTERNAL ERROR")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Internal request error; inspect the server log before retrying payment")

@app.get("/health")
async def health_check():
    """Endpoint de salud (sin pago requerido)"""
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
