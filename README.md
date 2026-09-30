# Quant Trading Signals

**5-minute technicals. Daily news.**

Get a **BUY, SELL or HOLD** report with a chart, technical indicators, relevant news and an explanation. Each report costs **0.10 USDC on Algorand**, paid through x402.

[Open the app](https://x402-quant-signals.onrender.com/) · [API documentation](https://x402-quant-signals.onrender.com/docs)

## Get started

1. Install and unlock [Kibisis](https://kibis.is/) in a supported desktop browser.
2. Select **Algorand Mainnet**, enable USDC (**asset 31566704**) and fund your wallet with at least **0.10 USDC**. Keep enough ALGO for the account and asset minimum balance.
3. Choose a cryptocurrency and click **Connect Kibisis**.
4. Click **Check signal**. The app checks market data and news before requesting payment.
5. Approve **0.10 USDC** in your wallet and read your report.

The website never requests your seed phrase or private key. The language menu offers **English, Español, Français and Deutsch**. English is the default; your choice is remembered.

## Your report

- A clear **BUY, SELL or HOLD** signal.
- A 5-minute chart, EMA 20/50, RSI, MACD, ADX and ATR readings.
- Relevant news from the current UTC day, with a source link.
- An explanation, timestamp, downloadable JSON report and on-chain payment receipt.

Signals use **closed Binance 5-minute candles** and rule-based news filtering. News opposing a directional technical signal changes it to HOLD. Headlines remain in their source language.

The catalog retains 68 asset routes; availability depends on supported markets. Missing market data or relevant news blocks checkout before payment. USDT is not sold as a directional signal.

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
| `GNEWS_API_KEY` | Your private [GNews API key](https://gnews.io/register). |
| `NEWS_DAILY_LIMIT` | `90`, or a lower cap within your provider allowance. |

Use a GNews plan suitable for your intended use and current-day news. Save API keys in Render, never in GitHub.

Deploy the latest commit. Check that `/health` returns `status: "ok"` and `news_configured: true`, then test the website. No Node build is required. Preserve the database across deployments and keep **one worker and one instance**.

## API and troubleshooting

Reports are available at `GET /api/v1/market-signal/{symbol}`, for example `BTC`, `UNI` or `AVAX`. An unpaid request returns **HTTP 402 Payment Required**. Opening the URL alone does not pay. See [API documentation](https://x402-quant-signals.onrender.com/docs) for the payment flow.

- **Wallet error:** refresh with **Ctrl + F5**, check that `wallet.js` is deployed, and unlock Kibisis in the same browser.
- **News unavailable:** no payment is requested; check the GNews key, plan and quota.
- **Payment pending:** use **Resume confirmation** instead of another purchase.
- **Startup failure:** check the persistent disk, `DATABASE_PATH` and start command.

This app provides market analysis and does not execute trades. It makes no profit or backtest guarantee. Reports are saved snapshots; later purchases may give different signals as new candles and news arrive.

