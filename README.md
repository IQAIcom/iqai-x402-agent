<div align="center">
 <img src="https://files.catbox.moe/vumztw.png" alt="ADK TypeScript Logo" width="100" />
 <br/>
 <h1>ADK-TS x402 Agent Template</h1>
 <b>Starter template for creating monetized AI Agents with ADK-TS and x402 protocol</b>
 <br/>
  <i>LLM-powered • Micropayments • API Monetization • TypeScript</i>
</div>

---

# x402 Agent Template - Monetized AI Agents with Micropayments

A template showing how to build AI agents that can access premium API endpoints through the x402 micropayment protocol. The agent pays for API calls automatically using cryptocurrency, enabling new business models for AI-powered services.

**Built with [ADK-TS](https://adk.iqai.com/) - Agent Development Kit (ADK) for TypeScript**

## 🎯 What This Template Shows

This template demonstrates how to build **monetized AI-powered applications** that:

1. **🤖 Uses AI Agents** (built with ADK-TS) to interact with premium APIs:
   - **IQ ATP Agent**: Specializes in IQAI's Agent Tokenization Platform insights
   - **Pricing Agent**: Fetches current pricing for all premium endpoints
   - **Data Tools**: Access agent stats, holdings, and market data

2. **💰 Enables micropayments** using the x402 protocol for API access

3. **🔐 Automatic payment handling** with Web3 wallet integration

4. **🌐 Provides monetized API server** that proxies premium endpoints

## 🏗️ How It Works

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────────┐
│   AI Agent      │    │   x402 Server    │    │   IQ AI API         │
│   (ADK-TS)      │    │                  │    │                     │
│ • Wallet Client │───▶│ • Payment Gates  │───▶│ • Premium Endpoints │
│ • Premium Tools │    │ • Proxy Routes   │    │ • ATP Data          │
│ • Auto Payment  │    │ • Price Config   │    │ • Agent Analytics   │
└─────────────────┘    └──────────────────┘    └─────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- A Google account (for free AI API access)
- A Web3 wallet with Base Sepolia ETH
- Basic understanding of cryptocurrency/Web3

## Step 1: Create Project Using ADK CLI

```bash
# Create a new project with the x402 Agent template (replace "my-x402-agent" with your desired project name)
npx @iqai/adk-cli new --template x402-agent my-x402-agent

# Navigate to your project and install dependencies
cd my-x402-agent
pnpm install
```

### Step 2: Get Your API Keys

#### 🔑 Google AI API Key (Required)

1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key

#### 🔑 Web3 Wallet Setup (Required)

**Create a new wallet for testing:**

1. Generate a new private key (never use your main wallet)
2. You can use tools like MetaMask or generate programmatically
3. Fund it with Base Sepolia ETH from [Base faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)

> **⚠️ Security Warning:**
>
> - Only use test wallets with small amounts
> - Never share your private key
> - Use Base Sepolia (testnet) for development

### Step 3: Configure Environment

#### Server Configuration

```bash
# Navigate to server directory and copy environment file
cd server
cp .env.example .env
```

Edit `server/.env`:

```env
FACILITATOR_URL="https://x402.org/facilitator"
ADDRESS=0x1234567890123456789012345678901234567890  # Your wallet address (to receive payments)
NETWORK=base-sepolia
```

#### Agent Configuration

```bash
# Navigate to agent directory and copy environment file
cd ../agent
cp .env.example .env
```

Edit `agent/.env`:

```env
WALLET_PRIVATE_KEY=your_wallet_private_key_here
GOOGLE_API_KEY=your_google_api_key_here
```

### Step 4: Start the Applications

```bash
# From the root directory, start both server and agent
pnpm dev
```

This will start:

- **Server** on `http://localhost:3001` (x402 payment-gated API)
- **Agent** on `http://localhost:3000` (ADK web interface)

### Step 5: Fund Your Wallet

Your agent needs Base Sepolia ETH to pay for API calls:

1. **Get Base Sepolia ETH** from [Coinbase faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)
2. **Verify your balance** is sufficient for testing (small amounts needed)

## 🧪 Testing Your Template

### Check Server Status

```bash
# Check if your server is running and view pricing
curl http://localhost:3001/api/get-prices

# Expected response:
# {
#   "prices": {
#     "/api/prices": {"price": "$0.01", "network": "base-sepolia"},
#     "/api/holdings": {"price": "$0.05", "network": "base-sepolia"},
#     "/api/agents/info": {"price": "$0.05", "network": "base-sepolia"},
#     "/api/agents/stats": {"price": "$0.05", "network": "base-sepolia"},
#     "/api/agents/top": {"price": "$0.10", "network": "base-sepolia"}
#   }
# }
```

### Test Agent Interaction

1. **Open the agent interface** at `http://localhost:3000`
2. **Greet the agent** with "Hello" - it should:
   - Fetch current pricing automatically
   - Display available premium tools
   - Ask for permission before making paid calls
3. **Try premium tools** like:
   - "Get top agents by market cap"
   - "Show me agent stats for [address]"
   - "What are my holdings?"

### Example Agent Interactions

```
User: Hello!

Agent: Hi there, I'm your friendly IQAI ATP bot that can assist you finding your next token investment, but that will cost you some serious funds 😏

Current x402 endpoint prices:
- Get Prices: $0.01
- Holdings: $0.05  
- Agent Info: $0.05
- Agent Stats: $0.05
- Top Agents: $0.10

What would you like to explore?

User: Show me the top 5 agents by market cap

Agent: I can get the top agents data for you, but this will cost $0.10 (paid via x402 protocol). Would you like me to proceed?

User: Yes, go ahead

Agent: [Calls GET_TOP_AGENTS tool with payment]
Here are the top 5 agents by market cap: ...
```

## 🛠️ Development and Testing

### Test Components Separately

```bash
# Test just the server
cd server && pnpm dev

# Test just the agent (in another terminal)
cd agent && pnpm dev

# Test agent without web interface
cd agent && npx @iqai/adk-cli run
```

### Payment Flow Testing

1. **Start with small amounts** - test with minimal Base Sepolia ETH
2. **Monitor transactions** - check Base Sepolia explorer
3. **Test error handling** - try calls without sufficient funds
4. **Verify pricing** - ensure costs match your configuration

### API Endpoint Details

The server proxies these IQAI ATP endpoints:

- **`/api/prices`** ($0.01) - Get current token prices
- **`/api/holdings`** ($0.05) - Get wallet holdings for agents
- **`/api/agents/info`** ($0.05) - Get agent metadata by address
- **`/api/agents/stats`** ($0.05) - Get agent statistics by address
- **`/api/agents/top`** ($0.10) - Get top agents list (sorted by mcap/holders/inferences)

## 📁 Template Structure

```
├── agent/                           # ADK-TS Agent Application
│   ├── src/
│   │   ├── agents/
│   │   │   └── IQ-x402/
│   │   │       ├── agent.ts         # Main agent definition
│   │   │       └── tools.ts         # x402-enabled API tools
│   │   └── env.ts                   # Environment configuration
│   └── package.json
├── server/                          # x402 Payment Server
│   ├── src/
│   │   └── index.ts                 # Hono server with x402 middleware
│   └── package.json
└── package.json                     # Root workspace configuration
```

## 🔧 Customizing the Template

### Adjusting Pricing

Edit the pricing in `server/src/index.ts`:

```typescript
const PAID_ROUTES: Record<string, { price: string; network: Network }> = {
 "/api/prices": { price: "$0.01", network },        // Change prices here
 "/api/holdings": { price: "$0.05", network },      // Format: "$X.XX"
 "/api/agents/info": { price: "$0.05", network },
 "/api/agents/stats": { price: "$0.05", network },
 "/api/agents/top": { price: "$0.10", network },
};
```

### Adding New Premium Endpoints

1. **Add to server** (`server/src/index.ts`):

```typescript
// Add to PAID_ROUTES
"/api/new-endpoint": { price: "$0.03", network },

// Add route handler
app.get("/api/new-endpoint", async (c) => {
 // Your endpoint logic here
});
```

2. **Add to agent tools** (`agent/src/agents/IQ-x402/tools.ts`):

```typescript
const newTool = createTool({
 name: "NEW_TOOL",
 description: "Description of what this tool does",
 schema: z.object({
  // Define parameters
 }),
 fn: async (params) => {
  const response = await apiClient.get("/api/new-endpoint", { params });
  return response.data;
 },
});
```

### Changing Networks

To use different blockchain networks, update:

1. **Server**: Change `NETWORK` in `.env`
2. **Agent**: Update chain in `tools.ts`:

```typescript
import { mainnet, polygon, arbitrum } from "viem/chains";

const account = privateKeyToAccount(env.WALLET_PRIVATE_KEY as Address);
return createWalletClient({
 account,
 chain: polygon, // Change network here
 transport: http(),
});
```

### Customizing Agent Behaviour

Edit the agent instructions in `agent/src/agents/IQ-x402/agent.ts`:

```typescript
.withInstruction(
 dedent`
  Your custom agent instructions here.
  Remember to ask for permission before paid calls.
  Explain pricing to users clearly.
 `,
)
```

## 🐛 Troubleshooting

### "Insufficient funds" errors

- Ensure your wallet has Base Sepolia ETH
- Check that you're using the correct network (testnet)
- Verify the wallet address matches your private key

### "Payment failed" errors

- Confirm your private key is correct and properly formatted
- Check that the x402 facilitator is accessible
- Ensure network connectivity to Base Sepolia

### "Upstream error" from server

- Verify the IQAI API is accessible
- Check that your server configuration is correct
- Ensure your `ADDRESS` in server/.env is valid

### Agent not showing pricing

- Verify the server is running on port 3001
- Check that the GET_PRICES tool is working
- Ensure CORS is properly configured

### "Tool calls are charged" warnings

This is normal behaviour - the agent warns users before making paid API calls.

## 📚 Learn More

### x402 Protocol Resources

- [x402 Protocol Documentation](https://x402.org/)
- [x402-axios Client](https://www.npmjs.com/package/x402-axios)
- [x402-hono Middleware](https://www.npmjs.com/package/x402-hono)

### ADK-TS Resources

- [ADK-TS Documentation](https://adk.iqai.com/)
- [ADK-TS CLI Documentation](https://adk.iqai.com/docs/cli)
- [GitHub Repository](https://github.com/IQAICOM/adk-ts)

### IQ AI ATP Resources

- [IQ AI Platform](https://app.iqai.com/)
- [ATP API Documentation](https://app.iqai.com/api)

### Web3 Development

- [Viem Documentation](https://viem.sh/)
- [Base Network](https://base.org/)
- [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)

## 🤝 Contributing

This [template](https://github.com/IQAIcom/adk-ts/tree/main/apps/starter-templates/x402-agent) is open source and contributions are welcome! Feel free to:

- Report bugs or suggest improvements
- Add new agent examples
- Improve documentation
- Share your customizations

---

**💰 Ready to monetize?** This template gives you everything you need to start building profitable AI-powered applications with micropayments!
