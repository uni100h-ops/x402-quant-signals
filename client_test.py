import os
from eth_account import Account
from x402.client import x402ClientSync
from x402.mechanisms.evm.signers import EthAccountSigner
from x402.mechanisms.evm.exact import ExactEvmScheme
from x402.http.clients import x402_requests
from web3 import Web3 # Asegúrate de tener web3 instalado

# 1. Configuración de credenciales
private_key = "896b9db10f7a6f8d03386149cd42c2f49ecef7493b6bff66966df9922427de2e"
rpc_url = "https://sepolia.base.org" # Nodo público de Base Sepolia
w3 = Web3(Web3.HTTPProvider(rpc_url))
account = Account.from_key(private_key)
signer = EthAccountSigner(account)

print(f"Iniciando cliente de AlphaSync Data Suite con la cuenta: {account.address}")

# 2. Inicializar el cliente x402
client = x402ClientSync()

# 3. Registro corregido: el esquema ExactEvmScheme solo espera el signer
#client.register("eip155:*", ExactEvmScheme(signer))
client.register("eip155:84532", ExactEvmScheme(signer))

# 4. Crear la sesión envuelta
session = x402_requests(client)

# 5. Ejecutar petición
url = "https://x402-quant-signals.onrender.com/api/v1/market-signal?symbol=BTC"

try:
    print(f"Ejecutando petición hacia {url}...")
    response = session.get(url)
    
    print("\n--- Respuesta de la API ---")
    print(f"Código de estado: {response.status_code}")
    print(f"Datos recibidos: {response.text}")
    
except Exception as e:
    print(f"\nError durante la ejecución: {e}")