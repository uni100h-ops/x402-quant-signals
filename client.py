import os
from algosdk import mnemonic
from algosdk.v2client import algod
from x402.client import x402ClientSync

# Importaciones adaptadas para el protocolo en Algorand
from x402.mechanisms.algorand.signers import AlgorandAccountSigner
from x402.mechanisms.algorand.exact import ExactAlgorandScheme
from x402.http.clients import x402_requests

# 1. Configuración de credenciales de Algorand
# Sustituye este string por la frase mnemónica de tu hot wallet fondeada
algorand_mnemonic = "tu frase semilla de veinticinco palabras va aqui..."
private_key = mnemonic.to_private_key(algorand_mnemonic)
address = mnemonic.to_public_key(algorand_mnemonic)

# Conexión al nodo de Algorand Mainnet (usando el proveedor público AlgoNode)
algod_url = "https://mainnet-api.algonode.cloud"
algod_client = algod.AlgodClient("", algod_url)

signer = AlgorandAccountSigner(private_key)

print(f"Iniciando cliente de AlphaSync Data Suite con la cuenta: {address}")

# 2. Inicializar el cliente x402
client = x402ClientSync()

# 3. Registro corregido para Algorand Mainnet
# Usamos el identificador de red exacto que tu API pide
client.register("algorand:wG322vLX73pM23GxsAR5DQwMGlG52s21", ExactAlgorandScheme(signer, algod_client))

# 4. Crear la sesión envuelta
session = x402_requests(client)

# 5. Ejecutar petición a tu endpoint de Render
url = "https://x402-quant-signals.onrender.com/api/v1/market-signal?symbol=BTC"

try:
    print(f"Ejecutando petición hacia {url}...")
    response = session.get(url)
    
    print("\n--- Respuesta de la API ---")
    print(f"Código de estado: {response.status_code}")
    print(f"Datos recibidos: {response.text}")
    
except Exception as e:
    print(f"\nError durante la ejecución: {e}")