import { X402Client } from '@goplausible/x402-client';
import algosdk from 'algosdk';

// === CONFIGURACIÓN DE WALLET DEL CLIENTE ===
// IMPORTANTE: Esta debe ser una wallet DISTINTA a PAYTO_ADDRESS del main.py
const clientMnemonic = "TU_MNEMONIC_DE_CLIENTE_AQUI_25_PALABRAS";
const clientAccount = algosdk.mnemonicToSecretKey(clientMnemonic);

// Inicializar cliente x402 apuntando al facilitador
const x402Client = new X402Client({
    facilitatorUrl: "https://facilitator.goplausible.xyz"
});

// URL de tu servidor FastAPI (Render o Local)
const API_URL = "http://127.0.0.1:8080/api/data";

async function makeRequest() {
    console.log(`Iniciando petición a ${API_URL}...`);
    
    try {
        // 1. Configurar los parámetros de la transacción con la wallet del cliente
        const signerParams = {
            network: 'algorand-mainnet',
            signer: async (txns) => {
                const signedTxns = txns.map(txnStr => {
                    const txn = algosdk.decodeUnsignedTransaction(Buffer.from(txnStr, 'base64'));
                    const signedTxn = txn.signTxn(clientAccount.sk);
                    return Buffer.from(signedTxn).toString('base64');
                });
                return signedTxns;
            },
            sender: clientAccount.addr
        };

        // 2. Usar el cliente x402 para envolver el fetch estándar. 
        // Esto intercepta el 402, procesa el pago on-chain y reintenta con el token.
        const response = await x402Client.fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }, signerParams);

        if (!response.ok) {
            throw new Error(`Error en el servidor: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("✅ Éxito. Datos recibidos del servidor:");
        console.log(JSON.stringify(data, null, 2));

    } catch (error) {
        console.error("❌ Fallo en la ejecución del cliente:", error.message);
    }
}

makeRequest();
