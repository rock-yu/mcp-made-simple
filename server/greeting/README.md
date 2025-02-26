# Hello World MCP Server

A simple Model Context Protocol (MCP) server that demonstrates basic functionality using the TypeScript SDK.

## Features

This server provides two tools:

1. **Greeting Tool**: Returns a personalized greeting message
2. **Calculator Tool**: Performs basic arithmetic operations (add, subtract, multiply, divide)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd hello-world-mcp

# Install dependencies
npm install
```

## Usage

```bash
# Build the project
npm run build

# Run the server
npm start
```

## Integration with Cursor

The server is already configured to work with Cursor. When using the tools in Cursor:

1. The greeting tool is available as `mcp_greeting`
2. The calculator tool is available as `mcp_calculator`

### Tool Usage Examples

#### Greeting Tool

```javascript
// Example usage in Cursor
mcp_greeting({
  name: "Your Name",
});
```

#### Calculator Tool

```javascript
// Example usage in Cursor
mcp_calculator({
  operation: "add",
  a: 5,
  b: 7,
});
```

### Modifying the Server

If you make changes to the server code:

1. Build the project with `npm run build`
2. Restart Cursor or refresh the MCP server connection in Cursor's settings

### Cursor MCP Server Configuration

In Cursor, the server is configured with:

- Name: hello-world-mcp
- Transport: stdio
- Command: node /Users/chong-u/Projects/10m-ai-gamedev/mcp/hello-world-mcp/build/index.js

## Troubleshooting

If you encounter issues with the tools:

1. Make sure the server is built correctly with `npm run build`
2. Check that the tool names in your code match what Cursor expects (`mcp_greeting` and `mcp_calculator`)
3. Ensure the response format includes a `content` array with the appropriate text objects

## License

MIT
