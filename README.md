# Quant Trading Signals

COMMERCIAL WEBSITE: https://quanttrading-signals.com/
Offial video: https://youtu.be/9dbpDODJvEA

**5-minute technicals. Optional daily news on the web.**

Get a **BUY, SELL or HOLD** report with a chart, technical indicators and an explanation. Web reports include relevant news when available. API reports never query news. Each report costs **0.10 USDC on Algorand**, paid through x402.

[Open the app](https://x402-quant-signals.onrender.com/) · [API documentation](https://x402-quant-signals.onrender.com/docs)

## Get started

1. Install and unlock [Kibisis](https://kibis.is/) in a supported desktop browser.
2. Select **Algorand Mainnet**, enable USDC (**asset 31566704**) and fund your wallet with at least **0.10 USDC**. Keep enough ALGO for the account and asset minimum balance.
3. Choose a cryptocurrency and click **Connect Kibisis**.
4. Selecting the asset checks news availability and displays any news warning in red below the selector. Click **Check signal** to buy a report; missing news does not prevent payment. The previous report is cleared immediately.
5. Approve **0.10 USDC** in your wallet and read your report.

The website never requests your seed phrase or private key. The language menu offers **English, Español, Français and Deutsch**. English is the default; your choice is remembered.

## Your report

- A clear **BUY, SELL or HOLD** signal.
- A 5-minute chart, EMA 20/50, RSI, MACD, ADX and ATR readings.
- For web purchases, relevant news from the current UTC day when available, with a source link.
- An explanation, timestamp, downloadable JSON report and on-chain payment receipt.

Signals use **closed Binance 5-minute candles** and rule-based news filtering. News opposing a directional technical signal changes it to HOLD. Headlines remain in their source language.

The catalog retains 68 asset routes; availability depends on supported markets. Missing or invalid market data blocks checkout before payment. Missing news, provider errors, missing GNews credentials or exhausted news quota do not block it: the report then uses only technical indicators and explicitly says so. USDT is not sold as a directional signal.

## Payments

| Item | Cost |
| --- | --- |
| One report, including HOLD | **0.10 USDC** |
| Report payment network fee | Sponsored by the x402 facilitator |
| Extra application fee | None |

Use **USDC on Algorand**, not another network. Initial wallet funding and USDC opt-in are not sponsored.

Payments go to the project merchant through x402. Metadata includes Bazaar discovery information and the `x402-global-challenge` tag. The report price is a service payment, not a separate Algorand Foundation fee.

If confirmation is interrupted, click **Resume confirmation** and keep your browser data. This reuses the same signed payment request. A new check after a completed report is a new purchase.

## Deploy on Render

Keep these files at the repository root:

| File | Purpose |
| --- | --- |
| `main.py` | Web server, API, payments and receipts. |
| `signals.py` | Market data, news and signal rules. |
| `index.html` | Website and report display. |
| `wallet.js` | Kibisis connection and payment validation. |
| `requirements.txt` | Python dependencies. |
| `README.md` | This guide. |

Use a **Python web service**, **one instance**, and a persistent disk mounted at `/var/data`.

**Build command**

```sh
pip install -r requirements.txt
```

**Start command**

```sh
uvicorn main:app --host 0.0.0.0 --port $PORT --workers 1
```

**Health check:** `/health`

| Environment variable | Value |
| --- | --- |
| `PYTHON_VERSION` | `3.12.14` |
| `PUBLIC_URL` | `https://x402-quant-signals.onrender.com` |
| `DATABASE_PATH` | `/var/data/qts.sqlite3` |
| `GNEWS_API_KEY` | Optional private [GNews API key](https://gnews.io/register), used only for web news checks and web reports. |
| `NEWS_DAILY_LIMIT` | `90`, or a lower cap within your provider allowance. |
| `NEWS_REQUEST_INTERVAL_SECONDS` | `1.1` by default; news requests are serialized across assets and cached. |

Use a GNews plan suitable for your intended use and current-day news. Save API keys in Render, never in GitHub.

Deploy the latest commit. Check that `/health` returns `status: "ok"` and `version: "3.1.0"`. `news_configured: false` is supported. No Node build is required. Preserve the database across deployments and keep **one worker and one instance**. The old `NEWS_ENABLED` setting is not used: report mode is chosen explicitly per request.

## API and troubleshooting

Reports are available at `GET /api/v1/market-signal/{symbol}`, for example `BTC`, `UNI` or `AVAX`. An unpaid request returns **HTTP 402 Payment Required**. Opening the URL alone does not pay. See [API documentation](https://x402-quant-signals.onrender.com/docs) for the payment flow.

Direct API purchases and checkout calls without `source` use technical indicators only. They never call GNews, even if web requests previously cached news for that asset. A checkout body may explicitly set `source: "web"` to request optional news; the browser does this automatically. This is a report preference, not a browser authentication mechanism.

The web calls `GET /api/v1/news-status/{symbol}` when an asset is selected. This returns only availability, a status code and a check timestamp, never a headline, article link or signal. News checks and web checkout share the cache. Web checkout returns a quote with an immutable report snapshot; payment retrieves that exact report. Reports without news use `news: null`, `analysis_mode: "technical_only"` and a `news_status` object.

- **Wallet error:** refresh with **Ctrl + F5**, check that `wallet.js` is deployed, and unlock Kibisis in the same browser.
- **News unavailable:** buying remains available. A red message is displayed below the asset selector; the report uses technical indicators only.
- **Payment pending:** use **Resume confirmation** instead of another purchase.
- **Startup failure:** check the persistent disk, `DATABASE_PATH` and start command.

## Tests

Install the Python requirements, then run `python -m unittest discover -s tests`.
For the web flow, run `npm install --prefix tests` and `npm test --prefix tests` with a current Node.js release. Node.js is needed only for this test, not for deployment. The tests use fake market/news providers and payment responses; they do not make real payments.

This app provides market analysis and does not execute trades. It makes no profit or backtest guarantee. Reports are saved snapshots; later purchases may give different signals as new candles and news arrive.
