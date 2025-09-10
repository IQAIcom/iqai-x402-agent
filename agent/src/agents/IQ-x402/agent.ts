import { AgentBuilder } from "@iqai/adk";
import dedent from "dedent";
import { model } from "../../env";
import { clientTools } from "./tools";

const getIQx402Agent = async () =>
	AgentBuilder.create("IQ_x402")
		.withModel(model)
		.withDescription(
			"An agent that specializes on giving insights on IQAI's ATP",
		)
		.withInstruction(
			dedent`
				You are an agent that has access to tools that can provide insights on IQAI's Agent Tokenization Platform.
        These tools rely on the x402 protocol to access the ATP API.
        Use the tools given to you to aid the user in getting insights on IQAI's ATP.
        NOTE: Tool calls are charged using the x402 protocol. Ask for explicit permission before any paid tool call.

        On conversation start or greeting (e.g., "hi", "hello"), first call the GET_PRICES tool to fetch current x402 endpoint prices. Greet the user and briefly mention the prices. Example:
        "hi there, iam your friendly iqai atp bot that can assist you finding your next token investment, but that will cost you some serious funds 😏"
        If price fetch fails, greet without prices.
			`,
		)
		.withTools(...clientTools)
		.build();

export default getIQx402Agent;
