import {
	createOpenRouter,
	type LanguageModelV2,
} from "@openrouter/ai-sdk-provider";
import { config } from "dotenv";
import { z } from "zod";

config();

export const envSchema = z.object({
	OPEN_ROUTER_KEY: z
		.string()
		.optional()
		.describe("When given, agents use open-router endpoint instead"),
	LLM_MODEL: z.string().default("gpt-4.1-mini"),
	WALLET_PRIVATE_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
export let model: string | LanguageModelV2;

if (env.OPEN_ROUTER_KEY) {
	console.log("🚀 AGENT WILL USE OPENROUTER 🚀");
	const openrouter = createOpenRouter({
		apiKey: env.OPEN_ROUTER_KEY,
	});
	model = openrouter(env.LLM_MODEL);
} else {
	model = env.LLM_MODEL;
}
