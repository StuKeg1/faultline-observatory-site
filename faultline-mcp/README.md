# Faultline Observatory — Remote MCP Server

**Endpoint:** `https://mcp.faultlinewatch.com/mcp`  
**Transport:** Streamable HTTP  
**Runtime:** Cloudflare Workers

## Canonical architecture

The remote MCP server is a read-only interface over the same canonical Frontier Record corpus used by the website.

```text
src/data/records/FR-*.js
        ↓
src/data/corpus.js
        ↓
src/data/derive.js
        ↓
faultline-mcp/src/index.ts
        ↓
MCP clients
```

The MCP project must not maintain a second case database, separate lifecycle taxonomy, or independently authored record summaries. New records and governed changes are made in the canonical corpus and become available to the MCP interface through the shared imports.

## Tools

| Tool | Description |
|---|---|
| `faultline_about` | Interface metadata and canonical-source declaration |
| `faultline_programmes` | Canonical programme metadata and live record counts |
| `faultline_list_records` | List/filter canonical Frontier Records with current Pressure State and Verification Stage |
| `faultline_read_record` | Full canonical record, including evidence, assessment history, current assessment, mechanisms, lineage, open questions and mutation history |
| `faultline_search_records` | Search across the complete canonical record objects |

Example questions:

```text
Read FR-AM-0005 and explain why its current Pressure State remains Collapsed.
What evidence instances are recorded for FR-AI-0009?
Which PROG-AI records are currently Fragmenting?
Search the corpus for "reopening".
What changed in FR-AM-0005 after AS-001?
```

## Connecting clients

### Codex

```toml
[mcp_servers.faultline]
url = "https://mcp.faultlinewatch.com/mcp"
```

### Claude Desktop

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

Use transport `Streamable HTTP` and endpoint:

```text
https://mcp.faultlinewatch.com/mcp
```

## Local development and deployment

From `faultline-mcp/`:

```bash
npm install
npm run dev
npm run deploy
```

The Worker is deployed separately from the main Cloudflare Pages site. A commit to the website repository does not by itself redeploy the MCP Worker.

## Health check

```bash
curl https://mcp.faultlinewatch.com/health
```

A correctly aligned deployment reports `canonical: true` and a `recordCount` derived from `ALL_RECORDS`.

## Access

The public interface is read-only and currently requires no authentication. MCP clients can inspect the institutional record but cannot mutate it.
