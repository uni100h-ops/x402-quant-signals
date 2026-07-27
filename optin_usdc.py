from algosdk.v2client import algod
from algosdk import account, mnemonic, transaction

# 1. Pega aquí tu frase semilla generada anteriormente
frase_semilla = "earth industry drink primary tunnel praise addict quiz endorse problem label lock radar cheese unit fee toddler bicycle elite view axis whale travel absorb draw"
private_key = mnemonic.to_private_key(frase_semilla)
my_address = account.address_from_private_key(private_key)

# 2. Conectar a un nodo público gratuito de TestNet (AlgoNode)
algod_address = "https://testnet-api.algonode.cloud"
algod_client = algod.AlgodClient("", algod_address)

# 3. Preparar la transacción de Opt-In para USDC (Asset ID: 10458941 según el challenge)
sp = algod_client.suggested_params()
asset_id = 10458941

print(f"Haciendo opt-in al token USDC ({asset_id}) desde la cuenta:\n{my_address}\n")

# Un opt-in es simplemente enviarte 0 tokens de ese activo a ti mismo
txn = transaction.AssetTransferTxn(
    sender=my_address,
    sp=sp,
    receiver=my_address,
    amt=0,
    index=asset_id
)

# 4. Firmar con tu clave privada y enviar a la red
signed_txn = txn.sign(private_key)
try:
    txid = algod_client.send_transaction(signed_txn)
    print(f"Transacción enviada. ID: {txid}")
    print("Esperando confirmación en la blockchain...")
    
    # Esperar hasta 4 bloques a que se confirme
    transaction.wait_for_confirmation(algod_client, txid, 4)
    print("\n¡Opt-in completado con éxito! Tu cuenta ya puede recibir USDC.")
except Exception as e:
    print(f"\nError al enviar la transacción: {e}")