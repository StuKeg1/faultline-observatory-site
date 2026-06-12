# Faultline Observatory

Custodian of The Frontier Record.

A permanent public record of frontier claims and how evidence changes their assessment over time.

---

## Local Development

**Requirements:** Node.js 18 or later.

```bash
# Install dependencies (once)
npm install

# Start local dev server
npm run dev
```

Opens at **http://localhost:5173**

Hot reload is active — changes to any source file update immediately in the browser.

---

## Build for Deployment

```bash
npm run build
```

Produces a `dist/` folder. This is what Cloudflare Pages deploys.

To preview the production build locally:

```bash
npm run preview
```

Opens at **http://localhost:4173**

---

## Cloudflare Pages Setup

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | 18 |

SPA routing is handled by `public/_redirects`. All routes resolve to `index.html`.

---

## Project Structure

```
src/
  components/       Shared UI components (SiteNav, StateBadge, RecordCard…)
  data/
    records/        One file per Frontier Record (FR-QE-0001.js, …)
    notes/          One file per Institutional Note (FM-001.js, …)
    corpus.js       All records + programme declarations
    notes.js        All notes index
    derive.js       Pure derived accessors — never stored state
  pages/            One file per page template
  styles/
    tokens.css          Colour palette, fonts, state colours (locked)
    design-tokens.css   Visual tuning layer — sizes, weights, spacing
    global.css          Base resets and shared utilities
  App.jsx           Router
  main.jsx          Entry point
public/
  _redirects        SPA routing for Cloudflare Pages
  favicon.ico       Mark C — converted from SVG
  robots.txt
```

---

## Adding a Frontier Record

1. Create `src/data/records/FR-XX-NNNN.js` following the shape of `FR-QE-0001.js`
2. Add the import and entry to `src/data/corpus.js`
3. No other changes required — the record appears in `/the-record/`, its programme page, and the homepage activity feed automatically

**Constitutional rules enforced by shape:**
- `currentAssessment` is never stored — derived at render time as `assessments[last]`
- `transitionFeed` is never stored — derived from consecutive assessments where pressureState changed
- `mutationLog` is append-only, newest first
- `assessments` is append-only, oldest first

## Adding an Institutional Note

1. Create `src/data/notes/XX-NNN.js` following the shape of `FM-001.js`
2. Add the import and entry to `src/data/notes.js`
3. Note appears at `/notes/xx-nnn/` automatically

---

## Visual Tuning

All major visual controls are in one file:

```
src/styles/design-tokens.css
```

Change values there. Nothing else needs editing for typography, spacing, or layout adjustments.

---

## MCP Server — Corpus Query Tool

A local MCP server lets Claude Desktop read and query the FCIF corpus directly — no copy-paste required.

**Start the server:**
```bash
node mcp-server.js
```

**Configure Claude Desktop** — add to `~/.config/claude/claude_desktop_config.json` (Mac/Linux) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "faultline-observatory": {
      "command": "node",
      "args": ["/absolute/path/to/faultline-observatory/mcp-server.js"]
    }
  }
}
```

Replace `/absolute/path/to/faultline-observatory/` with the actual path on your machine.

**Restart Claude Desktop** after editing the config.

**Three tools are exposed:**

| Tool | What it does |
|---|---|
| `list_records` | Lists all Frontier Records with state, programme, last mutation |
| `read_record` | Opens a record by ID — full content, assessment history, metrics |
| `search_records` | Searches across all records for a term |

**Example questions to ask Claude:**

- *"Which Frontier Records currently have the weakest verification state?"*
- *"Show me all records with a mutation log entry in the last 30 days."*
- *"For FR-QE-0001, summarise the current verification gap and cite the relevant record fields."*
- *"What changed in the Frontier Record?"*
- *"Search for all records mentioning replication barriers."*

The server is read-only. It cannot modify records.

---

Cloudflare Pages — static build, GitHub-backed.
Domain: faultlinewatch.com
