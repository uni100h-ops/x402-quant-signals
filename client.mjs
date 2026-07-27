import { wrapFetchWithPayment, x402HTTPClient } from "@x402/fetch";
import { x402Client } from "@x402/core/client";
import { ExactAvmScheme, toClientAvmSigner } from "@x402/avm";

// 1. Configura tu clave privada de Algorand (en formato Base64 de 64 bytes)
const AVM_PRIVATE_KEY = process.env.AVM_PRIVATE_KEY || "K8ochqpKdaZq4K9O2mr4NljYnLSdVBt/BZA+f4jm89yRlzo8AvzUZTW3U18NQyIX2pksCsZ+77XGMB97BLmblw==";

// 2. Crear el firmador oficial de Algorand (AVM)
const avmSigner = toClientAvmSigner(AVM_PRIVATE_KEY);

// 3. Inicializar el cliente x402 y registrar el esquema de pagos para la red Algorand
const client = new x402Client();
client.register("algorand:*", new ExactAvmScheme(avmSigner));

// 4. Envolver fetch para interceptar automáticamente las respuestas 402 y gestionarlas
const fetchWithPayment = wrapFetchWithPayment(fetch, client);
const httpClient = new x402HTTPClient(client);

async function executePaymentTest() {
  // Apunta al endpoint de tu API en Render (o /signals según tu ruta)
  const endpoint = "https://x402-quant-signals.onrender.com/api/v1/market-signal?symbol=BTC";

  console.log(`🚀 Iniciando petición a ${endpoint}...`);

  try {
    // Hace el GET. Si el servidor devuelve 402 Payment Required, firma la transacción
    // de USDC en Algorand y reenvía el token de pago en la cabecera.
    const response = await fetchWithPayment(endpoint, {
      method: "GET",
    });

    const result = await httpClient.processResponse(response);

    console.log(`\n📌 Estado HTTP final: ${response.status}`);
    console.log("📊 Datos recibidos del endpoint:", result.body);

    if (result.paymentStatus === "settled") {
      console.log("\n✅ ¡Pago asentado con éxito en Algorand Mainnet!");
      console.log("Detalles del Header de pago:", result.header);
    } else if (result.paymentStatus === "settle_failed") {
      console.error("\n❌ Falló el asentamiento del pago:", result.header);
    }
  } catch (error) {
    console.error("\n💥 Error en la comunicación o en la firma de la transacción:", error);
  }
}

executePaymentTest();