@app.get("/api/v1/market-signal")
async def get_market_signal(request: Request, response: Response, symbol: str = "BTC"):
    """
    Endpoint de señales de mercado con pago x402
    """
    
    host = request.headers.get("x-forwarded-host") or request.headers.get("host") or "x402-quant-signals.onrender.com"
    proto = request.headers.get("x-forwarded-proto") or "https"
    query_string = f"?symbol={symbol}" if symbol else ""
    public_url = f"{proto}://{host}{request.url.path}{query_string}"
    
    print(f"\n📍 URL Pública: {public_url}")
    print(f"🔤 Símbolo solicitado: {symbol}")

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

    # ===== SIN PAGO: DEVOLVER 402 =====
    if not auth_header:
        print("🔴 [402] Challenge enviado")
        
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
                "bazaar": {
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
            }
        }
        
        # ⭐ FORMATO CORRECTO PARA x402-payment-required
        # NO debe ser base64url, debe ser el JSON directamente
        req_json = json.dumps(payment_challenge)
        
        response.status_code = 402
        response.headers["x402-payment-required"] = req_json  # ⭐ JSON DIRECTO
        response.headers["x402-version"] = "2"
        response.headers["x402-status"] = "payment-required"
        response.headers["Content-Type"] = "application/json"
        
        return {}  # Cuerpo vacío para 402

    # ===== CON PAGO: VERIFICAR Y DEVOLVER DATOS =====
    print("\n✅ [200] Pago recibido - Verificando...")
    
    try:
        token = auth_header.replace("x402 ", "").replace("Bearer ", "").strip()
        padded_token = token + "=" * ((4 - len(token) % 4) % 4)
        
        try:
            decoded_bytes = base64.urlsafe_b64decode(padded_token)
        except:
            decoded_bytes = base64.b64decode(padded_token)
            
        x402_data = json.loads(decoded_bytes)
        print(f"🔐 Token decodificado")
        
        facilitator_payload = {
            "paymentPayload": x402_data, 
            "paymentRequirements": requirement_item,
            "resource": public_url,
            "description": "AlphaSync Quant Engine Market Signals"
        }
        
        print("🔍 Verificando con GoPlausible...")
        verify_url = "https://facilitator.goplausible.xyz/verify"
        verify_res = requests.post(verify_url, json=facilitator_payload, timeout=10)
        
        if verify_res.status_code != 200:
            print(f"❌ Verificación falló: {verify_res.status_code}")
            raise HTTPException(status_code=502, detail="Facilitator error")
            
        verify_result = verify_res.json()
        
        if not verify_result.get("isValid"):
            reason = verify_result.get('invalidReason', 'Unknown')
            print(f"❌ Pago inválido: {reason}")
            raise HTTPException(status_code=403, detail=f"Payment invalid: {reason}")

        print("💳 Liquidando pago...")
        settle_url = "https://facilitator.goplausible.xyz/settle"
        settle_res = requests.post(settle_url, json=facilitator_payload, timeout=10)
        
        if settle_res.status_code == 200:
            print(f"✅ SETTLE OK")

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
        print(f"💥 ERROR: {str(e)}")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")
