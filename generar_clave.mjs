import algosdk from 'algosdk';

// Sustituye esto por las 25 palabras reales separadas por espacios
const fraseSemilla = "earth industry drink primary tunnel praise addict quiz endorse problem label lock radar cheese unit fee toddler bicycle elite view axis whale travel absorb draw"; 

try {
    const cuenta = algosdk.mnemonicToSecretKey(fraseSemilla);
    
    // Extrae los 64 bytes (cuenta.sk) y los convierte a formato Base64
    const claveBase64 = Buffer.from(cuenta.sk).toString('base64');
    
    console.log("📌 Dirección Algorand:", cuenta.addr);
    console.log("\n🔑 Tu AVM_PRIVATE_KEY en Base64 es:");
    console.log(claveBase64);
} catch (error) {
    console.error("❌ Error al procesar la frase semilla:", error.message);
}