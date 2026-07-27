import requests
import base64
import json

url = "http://localhost:8080/api/v1/macro-correlation"
print(f"Consultando: {url}\n")

response = requests.get(url)
print(f"Código de estado: {response.status_code}")

if 'payment-required' in response.headers:
    print("\n¡Cabecera 'payment-required' encontrada! Decodificando instrucciones...\n")
    encoded_data = response.headers['payment-required']
    
    try:
        # Decodificar de Base64 a string, y de string a JSON
        decoded_bytes = base64.b64decode(encoded_data)
        decoded_json = json.loads(decoded_bytes)
        
        # Imprimir el JSON de forma legible
        print(json.dumps(decoded_json, indent=2))
    except Exception as e:
        print(f"Error al decodificar el payload: {e}")
else:
    print("No se encontró la cabecera 'payment-required'.")