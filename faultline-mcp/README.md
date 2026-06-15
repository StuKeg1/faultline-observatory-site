# Faultline Observatory — Remote MCP Server

**Endpoint:** `https://mcp.faultlinewatch.com/mcp`  
**Transport:** Streamable HTTP (MCP spec 2025-03-26)  
**Runtime:** Cloudflare Workers + Durable Objects  

---

## Architecture

```
MCP Client (Codex, Claude, Inspector…)
        │  POST /mcp   (JSON-RPC)
        ▼
Cloudflare Worker  ──→  FaultlineMCP (Durable Object, McpAgent)
                                │
                         Tool handlers
                         (FCIF claim database)
```

Pattern used: **`McpAgent`** (not `createMcpHandler`), because:
- Gives a Durable Object per session (stateful tools later)
- Supports both Streamable HTTP **and** legacy SSE in one class
- Sessions survive Worker cold starts

---

## Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Local development

```bash
npm run dev
# → http://localhost:8787/mcp
```

Test with MCP Inspector:
```bash
npx @modelcontextprotocol/inspector@latest
# Open http://localhost:5173 → connect to http://localhost:8787/mcp
```

### 3. Deploy to Cloudflare

```bash
npx wrangler deploy
# → https://faultline-mcp.<your-account>.workers.dev/mcp
```

### 4. Add custom domain

In **Cloudflare Dashboard → Workers → faultline-mcp → Settings → Triggers → Custom Domains**:

- Add `mcp.faultlinewatch.com`
- Cloudflare provisions TLS automatically (your domain must be on Cloudflare DNS)

After propagation, your endpoint is live at:
```
https://mcp.faultlinewatch.com/mcp
```

---

## Connecting clients

### Codex (native remote MCP)
```json
{
  "mcpServers": {
    "faultline": {
      "url": "https://mcp.faultlinewatch.com/mcp"
    }
  }
}
```

### Claude Desktop (via mcp-remote proxy)
```json
{
  "mcpServers": {
    "faultline": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.faultlinewatch.com/mcp"]
    }
  }
}
```

### MCP Inspector
Enter `https://mcp.faultlinewatch.com/mcp` → Connect → List Tools.

---

## Tools exposed

| Tool | Description |
|------|-------------|
| `faultline_about` | Observatory overview and server capabilities |
| `fcif_lifecycle_stages` | The 7-stage FCIF claim taxonomy |
| `fcif_list_cases` | All tracked cases (filterable by domain/status) |
| `fcif_claim_status` | Full record for a specific case ID |

### Example queries
```
What is the FCIF status of LK-99?
List all Contested claims in Quantum Computing.
Explain the FCIF lifecycle stages.
```

---

## Adding new FCIF cases

Edit `src/index.ts` → `CASES` array. Each entry:

```ts
{
  id:          "unique-slug",          // used by fcif_claim_status
  title:       "Human-readable title",
  domain:      "Domain category",
  status:      "Contested",            // must be a valid ClaimStage
  summary:     "One-paragraph summary of the claim and evidence record.",
  lastUpdated: "YYYY-MM-DD",
}
```

Re-deploy:
```bash
npx wrangler deploy
```

---

## Scaling to KV persistence

When the case corpus outgrows the static array, replace the `CASES` constant with KV reads:

1. Uncomment `CLAIMS_KV` in `wrangler.jsonc`
2. Create namespace: `npx wrangler kv namespace create CLAIMS_KV`
3. Insert the KV ID into `wrangler.jsonc`
4. Replace `CASES` lookups with `await env.CLAIMS_KV.get("case:lk99", "json")`

---

## Health check

```bash
curl https://mcp.faultlinewatch.com/health
# {"status":"ok","server":"faultline-mcp"}
```

---

## No authentication (current)

This server is public — no OAuth required. Add authentication later via:
- **Cloudflare Access** (zero-config, SSO with your identity provider)
- **GitHub OAuth** template: `cloudflare/ai/demos/remote-mcp-github-oauth`
