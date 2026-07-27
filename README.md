# x402-quant-signals
# AlphaSync Quant Engine 📈
**x402 Global Challenge Entry - Algorand Mainnet**

## Overview
This project is a pay-per-call API designed for the agentic economy. It provides autonomous trading bots and AI agents with real-time quantitative market signals, eliminating the need for heavy local processing.

Instead of relying on monthly API subscriptions, this endpoint utilizes the **x402 protocol** on Algorand Mainnet. It charges a micro-transaction of 0.01 USDC per scan, returning actionable technical data instantly.

## Technical Capabilities
* **Real-time Data Ingestion:** Fetches live ticker data directly from exchange public APIs.
* **Algorithmic Analytics:** Calculates momentum, volatility status, and moving average biases (HMA, EMA, MACD).
* **Agent-Ready JSON:** Delivers clean, structured data tailored for automated execution and order placement.

## x402 Configuration
* **Network:** ALGORAND_Mainnet_CAIP2
* **Payment Asset:** USDC (ASA ID: 31566704)
* **Cost Per Call:** 0.01 USDC
* **Hackathon Tag:** `x402-global-challenge`

## How it works
When a client requests a market signal without payment, the server returns an `HTTP 402 Payment Required` with the exact Algorand payment parameters. Once the GoPlausible facilitator settles the USDC transaction to the merchant's payTo address, the API releases the quantitative analysis JSON.
