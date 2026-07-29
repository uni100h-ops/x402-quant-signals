import base64
import json
import requests
import traceback
import time
from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

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
        "X-PAYMENT-RESPONSE"
    ]
)

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
    
    trend = "BULLISH" if change_24h > 0 else "BEARISH"
    signal = "BUY" if change_24h > 1.5 else ("SELL" if change_24h < -1.5 else "HOLD")
    
    return {
        "asset": f"{symbol.upper()}/USDT",
        "price": price,
        "recommendation": signal,
        "timestamp": int(time.time())
    }

@app.get("/api/v1/market-signal")
async def get_market_signal(request: Request, response: Response, symbol: str = "BTC"):
    # Capturar la cabecera real
    auth_header = (
        request.headers.get("Authorization") or 
        request.headers.get("PAYMENT-SIGNATURE") or 
        request.headers.get("X-PAYMENT") or
        request.headers.get("payment-signature")
    )

    if not auth_header:
        print("-> Petición sin pago: Enviando 402 Challenge")
        requirement_item = {
            "scheme": "exact",
            "network": ALGORAND_MAINNET_CAIP2,
            "asset": USDC_ASA_ID,
            "amount": PRICE,
            "payTo": PAYTO_ADDRESS,
            "tag": "x402-global-challenge"
        }

        payment_challenge = {
            "x402Version": 2,
            "accepts": [requirement_item]
        }
        
        req_json = json.dumps(payment_challenge, separators=(',', ':'))
        encoded_req = base64.urlsafe_b64encode(req_json.encode()).decode().rstrip("=")
        
        response.status_code = 402
        response.headers["x402-payment-required"] = encoded_req
        response.headers["payment-required"] = encoded_req
        return payment_challenge

    print("\n=== NUEVO INTENTO DE PAGO RECIBIDO ===")
    
    try:
        # Decodificación segura del Base64
        token = auth_header.replace("x402 ", "").replace("Bearer ", "").strip()
        padded_token = token + "=" * ((4 - len(token) % 4) % 4)
        
        try:
            decoded_bytes = base64.urlsafe_b64decode(padded_token)
        except:
            decoded_bytes = base64.b64decode(padded_token)
            
        x402_data = json.loads(decoded_bytes)
        print("-> Payload decodificado correctamente")
        
        server_requirements = {
            "scheme": "exact",
            "network": ALGORAND_MAINNET_CAIP2,
            "asset": USDC_ASA_ID,
            "amount": PRICE,
            "payTo": PAYTO_ADDRESS,
            "tag": "x402-global-challenge"
        }
        
        # CORRECCIÓN DEFINITIVA: 
        # El protocolo exige pasar el PaymentPayload intacto del cliente, 
        # ya que contiene su propio "x402Version". No se extraen ni modifican campos.
        facilitator_payload = {
            "paymentPayload": x402_data, 
            "paymentRequirements": server_requirements
        }
        
        verify_url = "https://facilitator.goplausible.xyz/verify"
        print(f"-> Enviando JSON a GoPlausible: {json.dumps(facilitator_payload)}")
        
        facilitator_res = requests.post(verify_url, json=facilitator_payload)
        print(f"-> Respuesta GoPlausible Status: {facilitator_res.status_code}")
        
        if facilitator_res.status_code != 200:
            print(f"-> Error del facilitador: {facilitator_res.text}")
            raise HTTPException(status_code=502, detail="Error de comunicación con GoPlausible")
            
        verify_result = facilitator_res.json()
        print(f"-> Resultado verificación: {verify_result}")
        
        if not verify_result.get("isValid"):
            raise HTTPException(status_code=403, detail=f"Pago inválido: {verify_result.get('invalidReason')}")

        print("-> ✅ PAGO ACEPTADO. Enviando señal.")
        data = calculate_quant_signals(symbol)
        
        return {
            "symbol": symbol,
            "status": "success",
            "message": "Transacción verificada e indexada en GoPlausible.",
            "data": data
        }
        
    except HTTPException as http_exc:
        raise http_exc
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="El token x402 no es un JSON válido")
    except Exception as e:
        print("💥 ERROR INTERNO CRÍTICO DETECTADO:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Error interno: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
