# video-analysis-agent

## Description
This agent orchestrates video analysis workflows using XState and @xstate/store.  
It simulates each workflow step with a 1-second delay and exposes a `/agent-info` endpoint for agent-to-agent discovery and documentation.

## Features
- XState v5+ state machine for workflow orchestration
- Uses @xstate/store for all state management
- Each workflow step simulates a 1-second delay
- Exposes `/agent-info` endpoint (returns agent.json)
- Ready for deployment as a Cloudflare Worker

## Installation

1. Open a terminal and navigate to this directory:
   ```sh
   cd /Users/zyahav/Documents/my_adk_project/WorkerFlow/video-analysis-agent
   ```
2. Initialize Node.js (if not already):
   ```sh
   npm init -y
   ```
3. Install required packages:
   ```sh
   npm install xstate @xstate/store
   ```

## Usage

### Run locally
```sh
node src/index.js
```

### Endpoints

- `GET /agent-info` — Returns the agent's description and instructions (from agent.json).

## Project Structure

```
video-analysis-agent/
  agent.json         # Agent description and instructions
  README.md          # This file
  src/               # Source code (index.js, etc.)
  TASKS.md           # Project task checklist
  package.json       # Node.js dependencies
  node_modules/      # Installed packages
```

## Agent Instructions
See `agent.json` for full machine-readable instructions.

## License
MIT 