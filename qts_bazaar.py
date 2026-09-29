"""QTS metadata adapter for FastAPI and x402 v2; no payment execution."""
import base64
import copy
import json
import logging

NAME = "Quant Trading Signals"
DESCRIPTION = "Pay-per-call quantitative cryptocurrency market signals."
LOG = logging.getLogger("qts.metadata")


def enrich_challenge(value):
    """Return a copy of a v2 challenge, retaining all payment requirements."""
    if not isinstance(value, dict) or value.get("x402Version") != 2:
        return None
    accepts = value.get("accepts")
    if not isinstance(accepts, list) or not accepts:
        return None
    if not all(isinstance(item, dict) for item in accepts):
        return None
    result = copy.deepcopy(value)
    extensions = result.get("extensions")
    if extensions is None:
        extensions = {}
        result["extensions"] = extensions
    if not isinstance(extensions, dict):
        return None
    # A minimal valid GET declaration. Prices, assets and receivers are untouched.
    extensions["bazaar"] = {
        "info": {
            "input": {"type": "http", "method": "GET", "queryParams": {}},
            "name": NAME,
            "description": DESCRIPTION,
            "tags": ["trading", "crypto", "market-data"],
        },
        "schema": {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "type": "object",
            "required": ["input"],
            "properties": {
                "input": {
                    "type": "object",
                    "required": ["type", "method"],
                    "properties": {
                        "type": {"type": "string", "enum": ["http"]},
                        "method": {"type": "string", "enum": ["GET"]},
                        "queryParams": {"type": "object"},
                    },
                },
                "name": {"type": "string"},
                "description": {"type": "string"},
                "tags": {"type": "array", "items": {"type": "string"}},
            },
        },
    }
    extensions["x402-merchant"] = {
        "info": {"name": NAME},
        "schema": {
            "type": "object", "required": ["name"],
            "properties": {"name": {"type": "string"}},
        },
    }
    return result


def _json_bytes(value):
    return json.dumps(value, ensure_ascii=False, separators=(",", ":")).encode()


class QTSMetadataMiddleware:
    """Only decorates GET /api/v1/market-signal[/SYMBOL] HTTP 402 responses."""
    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        path = scope.get("path", "")
        prefix = "/api/v1/market-signal"
        target = path == prefix or path.startswith(prefix + "/")
        if scope.get("type") != "http" or scope.get("method") != "GET" or not target:
            return await self.app(scope, receive, send)
        start = None
        chunks = []
        size = 0
        passthrough = False

        async def decorated_send(message):
            nonlocal start, size, passthrough
            if message["type"] == "http.response.start":
                if message["status"] != 402:
                    passthrough = True
                    await send(message)
                else:
                    start = dict(message)
                return
            if passthrough or message["type"] != "http.response.body" or start is None:
                await send(message)
                return
            chunks.append(message)
            size += len(message.get("body", b""))
            # Preserve unusual, oversized or streaming responses unchanged.
            if size > 1024 * 1024:
                passthrough = True
                await send(start)
                for chunk in chunks:
                    await send(chunk)
                chunks.clear()
                return
            if message.get("more_body", False):
                return
            original = b"".join(chunk.get("body", b"") for chunk in chunks)
            headers = list(start.get("headers", []))
            header_map = {key.lower(): val for key, val in headers}
            body = original
            changed = False
            try:
                # A compressed body must be left to the existing application.
                if b"content-encoding" in header_map:
                    raise ValueError("compressed challenge")
                raw_header = header_map.get(b"payment-required")
                if raw_header:
                    decoded = json.loads(base64.b64decode(raw_header, validate=True))
                    enriched = enrich_challenge(decoded)
                    if enriched is None:
                        raise ValueError("unsupported payment challenge")
                    encoded = base64.b64encode(_json_bytes(enriched))
                    headers = [(k, encoded if k.lower() == b"payment-required" else v)
                               for k, v in headers]
                    changed = True
                try:
                    decoded_body = json.loads(original)
                except (ValueError, UnicodeError):
                    decoded_body = None
                enriched_body = enrich_challenge(decoded_body)
                if enriched_body is not None:
                    body = _json_bytes(enriched_body)
                    changed = True
                if not changed:
                    raise ValueError("no x402 v2 challenge found")
                headers = [(k, v) for k, v in headers
                           if k.lower() not in (b"content-length", b"etag", b"content-md5")]
                headers.append((b"content-length", str(len(body)).encode()))
                start["headers"] = headers
            except (ValueError, TypeError, UnicodeError):
                body = original
                LOG.warning("QTS METADATA | Response unchanged: expected an uncompressed x402 v2 challenge")
            await send(start)
            await send({"type": "http.response.body", "body": body, "more_body": False})

        await self.app(scope, receive, decorated_send)


def install_qts_metadata(app):
    """Call once after creating FastAPI app, before the server starts."""
    if getattr(app.state, "qts_metadata_installed", False):
        return
    from starlette.responses import HTMLResponse
    app.add_middleware(QTSMetadataMiddleware)
    if not any(getattr(route, "path", None) == "/" for route in app.routes):
        async def homepage():
            return HTMLResponse(
                '<!doctype html><html lang="en"><head><meta charset="utf-8">'
                f'<title>{NAME}</title><meta property="og:site_name" content="{NAME}">'
                f'<meta property="og:title" content="{NAME}">'
                f'<meta name="description" content="{DESCRIPTION}">'
                f'<meta property="og:description" content="{DESCRIPTION}">'
                f'</head><body><h1>{NAME}</h1><p>{DESCRIPTION}</p></body></html>'
            )
        app.add_api_route("/", homepage, methods=["GET"], include_in_schema=False)
    app.state.qts_metadata_installed = True
