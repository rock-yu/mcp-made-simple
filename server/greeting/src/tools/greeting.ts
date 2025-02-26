import { z } from "zod";

// Define tool schema
export const GreetingToolSchema = z.object({
  name: z.string(),
});

// Tool definition for listing
export const greetingToolDefinition = {
  name: "greeting",
  description: "Returns a greeting message",
  inputSchema: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name to greet",
      },
    },
    required: ["name"],
  },
};

// Tool implementation
export const handleGreeting = (args: unknown) => {
  const validated = GreetingToolSchema.parse(args);
  const { name } = validated;

  return {
    content: [
      {
        type: "text",
        text: `Hello, ${name}! Welcome to the Model Context Protocol.`,
      },
    ],
  };
};
