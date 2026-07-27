import urllib.request
import json

try:
    print("Consultando configuración del Facilitador x402...\n")
    # Hacemos la llamada usando la librería nativa de Python
    req = urllib.request.Request("https://x402.org/facilitator", headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        datos = json.loads(response.read().decode('utf-8'))
        print(json.dumps(datos, indent=2))
except Exception as e:
    print(f"Error en la llamada: {e}")