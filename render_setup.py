"""Temporary Render setup server. No payments, database or market requests.

Start: python render_setup.py
After attaching /var/data and setting DATABASE_PATH, restore:
uvicorn main:app --host 0.0.0.0 --port $PORT --workers 1
"""

import json
import os
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit


class SetupHandler(BaseHTTPRequestHandler):
    def respond(self):
        healthy = self.command in {"GET", "HEAD"} and urlsplit(self.path).path == "/health"
        body = json.dumps({
            "service": "Quant Trading Signals",
            "status": "setup_only" if healthy else "maintenance",
            "payments_enabled": False,
            "message": "Persistent storage setup in progress. No payments are accepted.",
        }).encode()
        self.send_response(200 if healthy else 503)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Connection", "close")
        if not healthy:
            self.send_header("Retry-After", "300")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)
        self.close_connection = True

    do_GET = respond
    do_HEAD = respond
    do_POST = respond
    do_PUT = respond
    do_PATCH = respond
    do_DELETE = respond
    do_OPTIONS = respond

    def log_message(self, fmt, *args):
        # Do not log paths, query strings, signatures or request headers.
        stamp = datetime.now(timezone.utc).isoformat(timespec="seconds")
        print(f"{stamp} | SETUP MODE | Request handled; payments disabled", flush=True)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "10000"))
    print(f"{datetime.now(timezone.utc).isoformat(timespec='seconds')} | "
          f"QTS SETUP MODE | Listening on port {port} | Payments disabled", flush=True)
    ThreadingHTTPServer(("0.0.0.0", port), SetupHandler).serve_forever()
