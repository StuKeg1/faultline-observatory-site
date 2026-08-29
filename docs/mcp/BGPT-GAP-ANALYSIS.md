# BGPT MCP Offering vs. Faultline Observatory MCP Worker — Gap Analysis

Status: Reference — not a spec
Layer: MCP interface (`faultline-mcp/`)
Scope: Gap analysis only. This document does not propose new tools, schema
changes, or a monetization plan — it identifies where those would be
low-effort if pursued later, and where the current design is a deliberate
tradeoff rather than a gap.

## What this compares

**BGPT** (`https://bgpt.pro/mcp/`, fetched 2026-08-29): a commercial MCP
server over a paper/evidence corpus. Its implementation is not open source;
everything below about BGPT comes from its public docs page as transcribed
in the originating brief, not from independent verification against its
source or a live re-fetch in this session. Treat any BGPT claim here as
"as documented," not confirmed.

**Faultline**: the actual deployed Worker at `mcp.faultlinewatch.com`,
source at `faultline-mcp/src/index.ts` (`WebStandardStreamableHTTPServerTransport`,
stateless — `sessionIdGenerator: undefined`), read against the live corpus
via `src/data/corpus.js` / `src/data/derive.js`. Findings below cite file
and line so they can be checked directly rather than taken on faith.

---

## 1. Tool surface

**BGPT**: two tools — `search_papers`, `lookup_paper`.

**Faultline**: five tools, all namespaced `faultline_*`
(`faultline-mcp/src/index.ts:103-214`):

| Tool | Purpose |
|---|---|
| `faultline_about` | Interface metadata, canonical-source declaration |
| `faultline_programmes` | Programme metadata + live record counts |
| `faultline_list_records` | Filtered listing (programme/status/pressureState/verificationStage) |
| `faultline_read_record` | Full record by ID |
| `faultline_search_records` | Free-text search across the full record object |

**Where we match or exceed**: five tools with one clear job each is not
sprawl — it reflects real structure BGPT's domain doesn't have (programmes
as a first-class filterable dimension; no BGPT analogue). The `faultline_`
prefix is a small but real advantage over BGPT's bare `search_papers` /
`lookup_paper`: in a client with multiple MCP servers attached, unprefixed
names collide more easily. Parameter names and descriptions are
self-explanatory to a calling model without external docs.

**Concrete, low-effort gap**: `faultline_about` duplicates information the
MCP `McpServer` handshake can already carry as server metadata/instructions
rather than as a callable tool the model has to decide to invoke. Moving
that content into the server's `instructions` field (supported by the SDK's
`McpServer` constructor) would drop the callable surface from five tools to
four without losing any information — a client sees it automatically on
connect instead of spending a tool call to learn it.

**Deliberate tradeoff, not worth closing**: BGPT's two-tool surface works
because their domain reduces cleanly to "search" and "look up by ID."
Collapsing `faultline_list_records` and `faultline_search_records` into one
tool to mirror that shape would lose the ability to filter without a query
string (e.g. "everything in PROG-AI currently `fragmenting`") — a real,
commonly-useful query shape ours supports and a forced merge would degrade.

---

## 2. Response schema — the highest-value comparison

This is the one section where the shape of what comes back, not just
whether a feature exists, matters most.

**Where we exceed BGPT's documented schema**:

- `faultline_read_record` returns `canonicalRecordView()`
  (`faultline-mcp/src/index.ts:33-46`) — the full record plus three
  *derived* fields the corpus never stores: `currentAssessment`,
  `transitionFeed` (state-change history, computed from consecutive
  assessments — `src/data/derive.js:35-45`), and `programmeMetadata`. BGPT's
  documented schema is a snapshot of a paper; it has no equivalent of a
  trajectory that is recomputed live rather than cached. Our `mechanisms[]`
  (typed `RESISTANCE MECHANISM` / `BOTTLENECK` / `ATTRACTOR`, see
  `src/data/records/FR-AI-0001.js:91-112`) and append-only `mutationLog[]`
  give a governed audit trail BGPT's public schema doesn't name anything
  comparable to — BGPT normalizes to a point-in-time paper record, not an
  institutional change history.

**Concrete, low-effort gap**: BGPT's `output_format` tiering
(`evidence`/`full`/`legacy`) is *conceptually* mirrored in our own code —
`faultline_list_records` and `faultline_search_records` both call
`recordSummary()` (`faultline-mcp/src/index.ts:48-68`), a deliberately thin
projection (no `instances`, no `mechanisms`, no `openQuestions` text, just
counts). But unlike BGPT, we don't expose that tiering as a caller-facing
parameter — search and list results are *always* thin. The MCP Access guide
itself advertises cross-record queries that need the rich view per result
("Which records have accumulated the strongest contradictory evidence?" —
`src/pages/guides/MCPAccess.jsx:152`), which today requires
`faultline_search_records` followed by one `faultline_read_record` call per
hit. Adding an optional `detail: "summary" | "full"` parameter to
`faultline_list_records` / `faultline_search_records` that returns
`canonicalRecordView()` per matched record would close this gap directly
and is a small, additive change to `faultline-mcp/src/index.ts` — no corpus
or schema change required.

**Concrete, moderate-effort gap**: BGPT's `provenance[]` is passage-level —
section, figure/table, exact source text (bounded to 320 chars/passage),
plus a `record_provenance` block (source hash, extraction timestamp,
truncation flag). Our `instances[]` (`src/data/records/FR-AI-0001.js:26-69`)
carry `qualifiedEvent` / `description` / `vectors` / `date` but no
structured pointer into the source document — no page/section anchor, no
quoted-passage-with-offset, no source hash. This is a real gap, but not a
server-side one: it would mean re-authoring the corpus's evidence-instance
shape, which is a canonical-data change (`src/data/records/FR-*.js`), not a
Worker change — flag as non-trivial, not "low effort."

**Concrete, low-effort gap**: `vectors` (e.g.
`"supportive--strongest-instance-to-date"`,
`"contesting--mechanism-disclosed-partially-decoupled-from-verbalised-reasoning"`
in `FR-AI-0001.js:59,65`) is unconstrained free text with an appended
description suffix, not a small closed enum — harder for a calling model to
group or filter on mechanically than BGPT's
`relation_to_central_claim: supports | qualifies | challenges | independent`.
A normalization step in `faultline-mcp/src/index.ts` that maps the leading
token of each `vectors` entry to a closed enum before returning MCP
responses (without touching how `vectors` is authored in the corpus) would
close this without a canonical-data change.

**Deliberate tradeoff, not a gap**: BGPT surfaces `extraction_status` /
`normalization_warnings` because their pipeline machine-extracts structured
fields from PDFs and can fail partway. Our records are hand-authored,
governed prose (`OPERATIONS.md`'s file-by-file release model) — there is no
extraction step to flag as incomplete, so there's no real analogue to
build. Our closest equivalent of a trust signal is `mutationLog` +
`assessorNote`, which is a different (institutional-governance, not
extraction-confidence) axis and shouldn't be forced to look like BGPT's.

---

## 3. Onboarding / activation friction

**Where we match**: no signup, no API key, no auth step — confirmed in
`faultline-mcp/src/index.ts` (no auth check anywhere in the `fetch`
handler) and stated plainly on `src/pages/guides/MCPAccess.jsx:116-121`.
Per-client copy-paste config tabs already exist
(`src/pages/guides/MCPAccess.jsx:7-26`: Codex, Claude Desktop, MCP
Inspector) — same pattern as BGPT's tabbed config blocks.

**Concrete, low-effort gap**: BGPT documents a one-line Claude Code CLI
command (`claude mcp add bgpt --transport sse ...`). Neither
`MCPAccess.jsx` nor `faultline-mcp/README.md` has a Claude Code tab. Adding
one (`claude mcp add faultline --transport http https://mcp.faultlinewatch.com/mcp`,
transport value to be confirmed against the current CLI flag for
Streamable HTTP) is a docs-only change to both files.

**Concrete, low-effort gap**: BGPT documents a raw-HTTP fallback with a
working Python snippet for callers not using an MCP client at all. Our
guide states access is public/read-only but gives no request/response
snippet for hand-rolled HTTP against `/mcp`. Since the endpoint is a single
stateless POST (`sessionIdGenerator: undefined`,
`faultline-mcp/src/index.ts:246-253`), a short `curl`/Python example would
be cheap to add and directly closes this gap.

**Gap worth scoping before committing to, not asserting as trivial**: BGPT
exposes both SSE (`/mcp/sse`) and Streamable HTTP (`/mcp/stream`)
endpoints. Faultline's Worker only routes `/`, `/health`, and `/mcp`
(Streamable HTTP) — there is no `/sse` route
(`faultline-mcp/src/index.ts:219-256`); anything else 404s. Our own Claude
Desktop config works around this by shelling through a local `npx
mcp-remote` bridge process (`MCPAccess.jsx:18`) rather than connecting
Claude Desktop directly, which is exactly the extra moving part BGPT's
dual-endpoint design avoids for SSE-native clients. The MCP SDK does ship
an SSE server transport, so adding an `/sse` route is plausible, but the
actual effort (session-state handling differs between the two transports)
should be scoped before treating it as a quick win.

---

## 4. Monetization model

Out of scope as a build decision per the brief; noted here only as the
architectural delta if metered access were ever adopted. None of the
following exists in the repo today — this is a from-zero list, not a
partial gap:

- **Key issuance/validation**: the Worker's `fetch` handler has no auth
  check at all (`faultline-mcp/src/index.ts:220-256`); every request to
  `/mcp` is served unconditionally. A metered model needs a key-validation
  step before `buildServer()`/`transport.handleRequest()` runs.
- **Usage metering keyed to "results returned," not requests**: BGPT bills
  per result actually returned, not per call. Our tool handlers
  (`recordSummary`/`canonicalRecordView` mappers) would need a counting
  wrapper around their return arrays — nothing today counts objects
  returned per call.
- **Stripe checkout → config with an embedded key**: no billing surface
  exists; would be new infrastructure end to end (checkout, webhook, config
  generation, key embedding).
- **Self-service billing portal**: same — nothing to extend, would be net
  new.

---

## What this analysis could not verify

- Every specific about BGPT (field names, the three `output_format` tiers,
  pricing, the "50 free results" threshold, endpoint URLs) is taken from
  the brief's transcription of `bgpt.pro/mcp/` as fetched 2026-08-29. This
  session did not independently re-fetch that page or inspect BGPT's
  implementation — it isn't open source. Treat BGPT-side claims above as
  "as documented in the brief," not confirmed.
- This analysis reasoned only from `faultline-mcp/src/index.ts` and the
  corpus source in this repo — it did not exercise the live
  `mcp.faultlinewatch.com` endpoint. Any Cloudflare-level configuration
  outside the repo (WAF rules, rate limiting, edge caching) is invisible to
  this analysis; `MCPAccess.jsx:119-120`'s "reasonable rate limits may
  apply" is the only trace of such a policy in-repo, and it isn't backed by
  code found in `faultline-mcp/`.
