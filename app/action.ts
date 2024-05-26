"use server";

import { actionClient } from "@/lib/safe-action";
import { z } from "zod";

const schema = z.object({
	username: z.string().min(3).max(20),
});

export const testAction = actionClient
	.schema(schema)
	.action(async ({ parsedInput }) => {
		console.log("Executing action...");
		return {
			username: parsedInput.username,
			userId: crypto.randomUUID(),
		};
	});
