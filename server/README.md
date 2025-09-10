This service proxies a few IQ AI API endpoints and protects them with x402 payments. Clients call the `/api/*` routes here instead of the public API. Pricing is configured in code and exposed via `/api/get-prices` so the agent can inform users of costs. Run in dev with `pnpm dev`, set `ADDRESS` (wallet to receive payments), `NETWORK`, and optionally `FACILITATOR_URL`.


