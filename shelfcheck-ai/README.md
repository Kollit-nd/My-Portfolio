# ShelfCheck AI

Problem statement: Users cannot quickly know if a grocery product is available in nearby dark stores before opening multiple apps.

Solution: ShelfCheck AI uses a mock MCP-style flow to interpret a natural-language query and return stock visibility from nearby stores.

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Frontend | Angular (standalone components) | Query input and result UI |
| Backend | Node.js + Express | Mock stock-check endpoint |
| AI Orchestration | Claude AI | Natural-language intent handling (demo context) |
| Integration Protocol | MCP | Agent-to-tool interaction model (mocked) |
| Data Layer | Redis | Low-latency cache strategy for inventory lookups (planned) |

## Architecture Diagram Description

1. User enters a query in the Angular ShelfCheck component.
2. Frontend sends a POST request to `/api/check-stock`.
3. Node.js Express server matches query keywords against `mock-data.json`.
4. Server returns product availability, store, distance, and ETA.
5. Frontend renders a response card with stock status.

⚠️ Mock demo — awaiting Swiggy Builders Club MCP API access

## Setup

### 1) Backend

```bash
cd shelfcheck-ai/backend
npm install
node server.js
```

Server runs at `http://localhost:4000`.

### 2) Frontend

Place the standalone component from `shelfcheck-ai/frontend/shelfcheck/` into an Angular app route/page, then run:

```bash
cd portfolio
npm install
ng serve
```

Frontend dev server runs at `http://localhost:4200`.
