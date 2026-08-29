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

### `detail` parameter on `faultline_list_records` / `faultline_search_records`

Both tools accept an optional `detail: "summary" | "full"` parameter.

- `"summary"` (default, unchanged behavior) — one thin projection per record: id, programme,
  claim, status, current Pressure State/Verification Stage, and counts of instances/assessments/
  open questions. No corpus fields beyond that projection.
- `"full"` — the same complete canonical view `faultline_read_record` returns
  (`instances`, `mechanisms`, `openQuestions`, full `assessments` history, `transitionFeed`,
  `mutationLog`, `programmeMetadata`) for every matched record, instead of one
  `faultline_read_record` call per hit.

Existing callers that don't pass `detail` see no change in output shape.

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

**Recommended: Custom Connectors (bridge-free).** In Claude Desktop, open **Settings → Connectors → Add custom connector** and paste:

```text
https://mcp.faultlinewatch.com/mcp
```

This connects Claude directly to the remote Streamable HTTP endpoint. No local bridge process or `claude_desktop_config.json` edit is required.

**Fallback: config-file-based setup.** If you specifically need a `claude_desktop_config.json` workflow for automation or another local configuration reason, `mcp-remote` can bridge Claude Desktop's local stdio configuration to the remote endpoint:

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

### Claude Code

```bash
claude mcp add --transport http faultline https://mcp.faultlinewatch.com/mcp
```

`--transport http` is Claude Code's flag for Streamable HTTP (as opposed to `--transport sse`),
confirmed against `claude mcp add --help` on Claude Code 2.1.251.

### Raw HTTP

`/mcp` is a single stateless POST endpoint (`sessionIdGenerator: undefined` — no session
handshake or cookie state between calls), so a plain JSON-RPC request works without an MCP
client library:

```bash
curl -s https://mcp.faultlinewatch.com/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "faultline_search_records",
      "arguments": { "query": "room-temperature superconductivity", "limit": 1 }
    }
  }'
```

Response (generated from the live corpus data, not fabricated — the tool's
`recordSummary()` projection for `FR-AM-0005`):

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "{\n  \"query\": \"room-temperature superconductivity\",\n  \"count\": 1,\n  \"records\": [\n    {\n      \"id\": \"FR-AM-0005\",\n      \"programme\": \"PROG-AM\",\n      \"programmeName\": \"Advanced Materials, Physics & Energy\",\n      \"claim\": \"Room-Temperature Superconductivity — Reproducibility Under Laboratory Conditions\",\n      \"status\": \"closed\",\n      \"pressureState\": \"collapsed\",\n      \"verificationStage\": \"VS-04\",\n      \"assessmentDate\": \"2026-06-29\",\n      \"openedDate\": \"2024-01-15\",\n      \"lastMutationDate\": \"2026-07-09\",\n      \"evidenceInstances\": 6,\n      \"assessments\": 2,\n      \"openQuestions\": 4,\n      \"canonicalUrl\": \"https://faultlinewatch.com/the-record/fr-am-0005/\"\n    }\n  ]\n}"
      }
    ]
  }
}
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
