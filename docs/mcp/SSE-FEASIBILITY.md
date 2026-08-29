# `/sse` Route — Feasibility Review

Status: Review — scope only, no route added, no code shipped
Layer: MCP interface (`faultline-mcp/`)
Source: Item 4 of `MCP Capability Repair` ticket, following up on
`docs/mcp/BGPT-GAP-ANALYSIS.md`'s §3 "gap worth scoping before committing to"
finding.

## What this answers

BGPT exposes both `/mcp/sse` and `/mcp/stream`. Faultline's Worker routes only
`/`, `/health`, and `/mcp` (Streamable HTTP) — there is no `/sse` route
(`faultline-mcp/src/index.ts`). The current Claude Desktop config
(`faultline-mcp/README.md`) works around this with a local `npx mcp-remote`
bridge process rather than a native SSE connection. This reviews what adding an
`/sse` route would require and whether it's worth doing. No route is added in
this pass.

## Finding 1 — the SDK's SSE transport is deprecated, in favor of the transport this Worker already uses

`@modelcontextprotocol/sdk` (`faultline-mcp/node_modules/@modelcontextprotocol/sdk/dist/esm/server/sse.d.ts:35`)
ships `SSEServerTransport`, but its own doc comment reads:

> `@deprecated` SSEServerTransport is deprecated. Use StreamableHTTPServerTransport instead.

That is: the SDK's own position is that the transport this item asks about
scoping is the one being phased out, in favor of the transport Faultline
already runs at `/mcp`. Any `/sse` route built on the SDK's shipped
implementation would be adding a route to a deprecated protocol on top of an
already-current one — not catching up to a gap so much as adding a
legacy-compatibility surface.

## Finding 2 — the SDK's SSE transport is Node-only; nothing Workers-shaped ships for it

`SSEServerTransport`'s constructor signature is:

```ts
constructor(_endpoint: string, res: ServerResponse, options?: SSEServerTransportOptions)
```

`ServerResponse` here is `node:http`'s `ServerResponse` — the transport is built
around Node's request/response socket model, not the Web Standard
`Request`/`Response` objects a Cloudflare Workers `fetch` handler receives and
returns. Contrast this with what the Worker already uses for Streamable HTTP:
`WebStandardStreamableHTTPServerTransport`, whose own header comment states it
"can run on any runtime that supports Web Standards: Node.js 18+, Cloudflare
Workers, Deno, Bun, etc." — and separately, `StreamableHTTPServerTransport`
"wraps this transport" for Node/Express compatibility. The SDK ships a
Web-Standard streaming transport and a Node-oriented one for Streamable HTTP;
for SSE it ships only the Node-oriented one. There is no drop-in Workers-native
SSE transport to route to — building one means either adapting the Node
transport through `nodejs_compat`'s partial `node:http` polyfill (unproven for
this specific class's socket-level API against a Workers `fetch` handler) or
writing a Web Standard SSE transport from scratch against the legacy protocol's
wire format. Neither is a routing change; both are a transport implementation
project.

## Finding 3 — session state, and why that's not a paperwork detail here

`SSEServerTransport` exposes `get sessionId(): string`, documented as usable
"to route incoming POST requests" — the legacy SSE protocol is inherently
two-endpoint: a client opens a long-lived `GET` connection to receive the SSE
stream, and sends messages via separate `POST` requests correlated to that
open connection by session ID. That correlation requires the server to hold
open, addressable per-session state somewhere — exactly the shape of state
`sessionIdGenerator: undefined` on the current `/mcp` route was configured to
avoid (`faultline-mcp/src/index.ts`'s comment: *"stateless"*).

This is not a hypothetical concern for this repository specifically:
`faultline-mcp/wrangler.jsonc`'s `migrations` block records that a
`FaultlineMCP` Durable Object class was created (`v1`) and then explicitly
deleted (`v2`, `"Required to tell Cloudflare to delete the old FaultlineMCP DO
class"`) as the Worker moved to its current stateless `fetch`-handler design.
An `/sse` route built on the SDK's session-correlated transport would mean
re-introducing a Durable Object (or equivalent addressable per-session store)
to hold open SSE connections and route POSTs to them — reversing a migration
this project already made deliberately, not extending the current design.

## Finding 4 — the gap this is meant to close may already be closed

Streamable HTTP itself is not "no streaming" — a client that sends
`Accept: text/event-stream` to `/mcp` can receive a server-initiated SSE
stream over the same endpoint the Worker already serves (this is why the raw
HTTP example in `faultline-mcp/README.md` and `MCPAccess.jsx` sends that
Accept header). Most of what an "SSE-native" client actually wants — a
streaming response, not a polled one — is already available at `/mcp` today
without a separate route. The genuinely unmet need is narrower: only clients
whose MCP client library hardcodes the legacy two-endpoint SSE transport (a
`GET .../sse` to open the stream, at that literal path) would fail to connect
to `/mcp` today. That's a real but smaller population than "clients that want
streaming."

## Finding 5 — the assumed payoff (dropping `mcp-remote` for Claude Desktop) is not established

The premise for wanting this is that adding `/sse` would let Claude Desktop
connect natively without the `npx mcp-remote` bridge. That's plausible but
unverified: `mcp-remote` bridges a remote HTTP-based MCP server into a local
stdio process, which is also the shape needed by any client built around
launching local stdio servers rather than connecting to remote URLs directly —
a constraint that may be about the client's process model, not about which
wire transport the remote server speaks. If that's the actual reason the
bridge is there, adding a legacy `/sse` route changes nothing about Desktop's
need for it. Confirming this — what specifically makes Desktop unable to hit
`/mcp` directly today — is a prerequisite for claiming the payoff, and hasn't
been done as part of this review.

## Effort estimate

Not a routing-only change. Realistic scope if pursued:

- Either adapt the deprecated Node-oriented `SSEServerTransport` through
  `nodejs_compat` (unproven for this API shape in Workers) or write a
  Web-Standard-compatible implementation of the legacy SSE wire protocol from
  scratch — no existing SDK export to route to directly.
- Reintroduce an addressable per-session store (Durable Object, most likely,
  matching the architecture this Worker already had and removed) to correlate
  the SSE `GET` stream with subsequent `POST` messages.
- Re-plumb `wrangler.jsonc` bindings and a new migration to bring a Durable
  Object class back.
- New route logic in `faultline-mcp/src/index.ts`'s `fetch` handler for the
  `GET`/`POST` split, plus tests for session lifecycle (open, message, close,
  expiry) that don't exist today because the current design has no session
  lifecycle to test.

Rough estimate: several days of implementation and testing, not a small
addition — and that estimate is before Finding 5 is resolved, which could
remove the motivating reason to do it at all.

## Verdict

**Do not build `/sse` on the current evidence.** The transport it would serve
is the one the SDK itself is deprecating in favor of what Faultline already
runs; building it would require reversing a stateless-architecture migration
this project already completed deliberately (Finding 3); the SDK offers no
Workers-native implementation to build on (Finding 2); the streaming capability
this item is nominally chasing already exists at `/mcp` for `Accept:
text/event-stream` clients (Finding 4); and the specific payoff motivating this
— removing Claude Desktop's `mcp-remote` bridge — is unconfirmed and may not
actually depend on transport choice (Finding 5).

If a future concrete client is identified that can only speak the legacy
two-endpoint SSE protocol and cannot be bridged another way, re-open this
review with that client named and its actual constraint verified, rather than
building `/sse` speculatively against an assumed compatibility need.
