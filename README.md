# MCP Hello World

The simplest and easiest-to-understand example of the Model Context Protocol (MCP) implementation.

## What is MCP?

The Model Context Protocol (MCP) is a standardized interface that allows AI assistants to interact with external tools and services. It enables AI models to:

- Discover available tools
- Call tools with structured inputs
- Receive structured outputs

This repository serves as a minimal, beginner-friendly example for developers looking to understand and implement MCP in their own applications.

## Repository Structure

This project consists of two main components:

### 1. Server (`/server`)

A simple TypeScript MCP server that implements:
- A single "greeting" tool that takes a name and returns a personalized greeting
- Standard MCP interfaces for tool discovery and execution
- Uses the official `@modelcontextprotocol/sdk` package

### 2. Client (`/client`)

A minimal React application that demonstrates the frontend part of the application. This is intended to be a dummy app, which represents the main app that you would be working on, whether it's a website, landing page, saas, etc.

## Getting Started

### Server Setup

```bash
cd server/greeting
npm install
npm run build
npm start
```

### Client Setup

```bash
cd client
npm install
npm run dev
```

## How It Works

1. The MCP server defines and exposes a "greeting" tool
2. When called, the tool takes a name parameter and returns a formatted greeting
3. This simple example demonstrates the core MCP concepts:
   - Tool definition with schemas
   - Tool discovery
   - Tool execution
   - Structured input/output

## Why This Repository?

This repository is designed to be the simplest possible implementation of MCP, making it ideal for:

- Developers new to MCP
- Integration with AI assistants like Cursor, Windsurf, and Cline
- Learning the fundamentals without unnecessary complexity
- Using as a starting point for your own MCP implementations

## Further Resources

- [MCP GitHub Repository](https://github.com/modelcontextprotocol/protocol)
- [MCP Documentation](https://modelcontextprotocol.ai/)
- [MCP SDK Package](https://www.npmjs.com/package/@modelcontextprotocol/sdk)

## License

The MCP Hello World repository is licensed under the MIT License.
