This repository contains a minimal x402-paywalled API and an IQ AI agent client. The `server/` app proxies selected endpoints from the public IQ AI API and enforces payment using the x402 protocol. The `agent/` app is an ADK-based agent that calls the server through a payment-enabled axios client. Use the server to control pricing and access, and the agent to interact with users and tools.


