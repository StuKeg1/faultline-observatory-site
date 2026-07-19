# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Faultline Observatory — a Vite + React SPA that publishes a public record of frontier scientific/technological claims ("Frontier Records") and how evidence changes their assessment over time. Deployed as a static build to Cloudflare Pages at `faultlinewatch.com`. Repo: `StuKeg1/faultline-observatory-site`, branch `main`.

## Commands

```bash
npm install          # install deps (Node >=18; CI uses Node 20)
npm run dev          # dev server at localhost:5173, hot reload
npm run build        # prebuild (validate:all, generate:redirects, generate:sitemap), then vite build -> dist/
npm run preview      # serve the production build at localhost:4173
npm run lint         # eslint .
npm run test         # node --test — structural tests for redirects/sitemap generation + evidence trajectory layout
npm run smoke:live   # live HTTP check against a deployed URL (defaults to production) — see OPERATIONS.md's Live Routing Smoke Gate
npm run validate:events   # validates events/**/*.json against schema/event-schema.json
```

CI (`.github/workflows/ci.yml`) runs `npm run lint` and `npm run build` on push/PR to `main`; it does not currently run `npm test` or `npm run smoke:live`. Treat a clean lint + build as the CI correctness bar, but for routing/Function changes specifically, `npm run smoke:live` against the live deploy is a required manual gate before the release is closed (OPERATIONS.md).

There is no `dist/` deploy step to run locally — Cloudflare Pages builds and deploys automatically on push to `main`.

PRs also show a **Cloudflare Workers Builds** check. This is a separate, mis-scoped Cloudflare integration (different account ID than the real Cloudflare Pages deploy) that fails regardless of what changed. Ignore failures on this check — the checks that matter are GitHub Actions CI and the **Cloudflare Pages** deploy check.

## Architecture

### Data pipeline (the core of the app)

```
src/data/records/FR-*.js  →  src/data/corpus.js  →  src/data/derive.js  →  pages/components  →  CSS
```

- `src/data/records/FR-XX-NNNN.js` — one file per Frontier Record, the raw source of truth.
- `src/data/corpus.js` — imports every record into `ALL_RECORDS`, and declares programme metadata (id, name, `shortDescription`/`scopeStatement`/`thresholdStatement` — each serves a different surface, don't collapse them).
- `src/data/derive.js` — **pure, stateless accessors only**. Nothing here mutates or caches; every summary stat, badge, or feed is recomputed from `ALL_RECORDS` on each call.
- Pages/components consume `derive.js` functions rather than reading record shape directly.

Constitutional rules enforced by shape (violating these breaks the record model, not just style):
- `currentAssessment` is never stored on a record — always `assessments[last]`, via `getCurrentAssessment()`.
- `transitionFeed` is never stored — always derived from consecutive assessments where `pressureState` changed, via `getTransitionFeed()`.
- `mutationLog` is append-only, newest first. `assessments` is append-only, oldest first.
- `getRecentActivity()` in `derive.js` is the single qualified source for "most recent institutional activity" (it excludes a record's own creation-date mutation from counting as recent activity) — don't reimplement this sort elsewhere.

To add a Frontier Record: create `src/data/records/FR-XX-NNNN.js` following an existing record's shape, then add the import + entry to `corpus.js`. It appears in `/the-record/`, its programme page, and the homepage feed automatically — no other wiring needed.

To add an Institutional Note: create `src/data/notes/XX-NNN.js` following `FM-001.js`'s shape, add it to `src/data/notes.js`. Appears at `/notes/xx-nnn/` automatically.

### Events

`events/**/*.json` files are the canonical source of truth for the Event Archive (not a hand-maintained manifest). `src/data/events.js` glob-imports them all via `import.meta.glob` and derives `ALL_EVENTS`. Schema is `schema/event-schema.json`; `scripts/validate-events.js` enforces it and runs automatically before every build (`prebuild`). See `docs/events/EVENT-IMPLEMENTATION.md` and `docs/events/STABILITY-CHECK.md` for the event model's design detail.

### Routing and rendering

`src/App.jsx` is the router. Home, top-level stubs, and About load eagerly; everything else (`TheRecord`, `FrontierRecord`, `Programme`, notes, events, `InstitutionalHealth`, guides, `Origins`, `Welcome`) is lazy-loaded via `React.lazy` — Vite code-splits these automatically. `App.jsx` still has a client-side `RecordRedirect` component and a `/programmes/prog-mf` route as defense-in-depth, but the id-migration redirect itself is no longer what serves those URLs in production — see below.

### Server-side routing: `_redirects`, `sitemap.xml`, and the record Function

`public/_redirects` and `public/sitemap.xml` are both **generated**, not hand-maintained — `scripts/generate-redirects.js` and `scripts/generate-sitemap.js` run in `prebuild`, reading routes live from `scripts/route-manifest.js` (which itself reads `corpus.js`/`notes.js`/`programmeNotes.js`/`landscapeEssays.js`/`events/**/*.json`). Don't hand-edit either generated file — edit `route-manifest.js` or the underlying data instead.

`/the-record/*` is the one exception: `functions/the-record/[[recordId]].js` is a rest-segment Cloudflare Pages Function match that claims every request under that prefix, and Cloudflare gives a matched Function routing precedence over `_redirects` for the same path — a `_redirects` rule there is not reliably applied. That Function therefore owns its entire subtree directly: SPA-shell serving (via `env.ASSETS.fetch`, fetching `/` and `/404` — not `/index.html`/`/404.html`, which Cloudflare 308s as non-canonical aliases), slash/case canonicalization, the `FR-MF-*` → `FR-AM-*` legacy redirect (one hop, straight to the final canonical URL), unknown-id 404s, and crawler-UA OG/Twitter tag rewriting. `route-manifest.js`'s `getRedirectsManagedRoutes()` excludes this subtree from what `_redirects` generates; `getAllCanonicalRoutes()`/`getSitemapRoutes()` still include it, since the Function-vs-`_redirects` split is a serving-mechanism detail, not a public-URL one. Follow this Function-owns-its-subtree pattern for any future path that needs both a Pages Function and rewrite/redirect behavior, rather than assuming `_redirects` will apply.

Any change to routing (`App.jsx`, `route-manifest.js`, `generate-redirects.js`, or anything under `functions/`) must pass `npm run smoke:live` against the live deploy before the release is considered closed — see OPERATIONS.md's Live Routing Smoke Gate. Local `wrangler pages dev` does not reliably reproduce `_redirects` 200-rewrite behavior; it is useful for iterating but not a substitute for the live check.

### Styles

- `src/styles/tokens.css` — colour palette, fonts, state colours. Locked; don't casually edit.
- `src/styles/design-tokens.css` — the visual tuning layer (sizes, weights, spacing). This is where typography/spacing/layout adjustments belong.
- `src/styles/global.css` — base resets and shared utilities.

### Analytics data

`src/data/generated/institutional-health-analytics.json` is generated, not hand-edited — `.github/workflows/update-analytics.yml` runs weekly (and on manual dispatch), executing `scripts/update-analytics.js` against the Cloudflare GraphQL Analytics API and committing the result if changed.

### Two separate MCP servers — do not conflate them

- `mcp-server.js` (repo root) — local, stdio, read-only query tool over the Frontier Record corpus (`list_records`/`read_record`/`search_records`) for Claude Desktop. Excluded from eslint.
- `faultline-mcp/` — a **separate deployable project** (its own `package.json`, Cloudflare Worker + Durable Object via `McpAgent`, deployed with `wrangler`) serving a different dataset (FCIF case tracker, `CASES` array in `faultline-mcp/src/index.ts`) at `https://mcp.faultlinewatch.com/mcp`. Changes here need `npx wrangler deploy` from within `faultline-mcp/`, independent of the main site build.

### eslint config shape

`eslint.config.js` splits rules by file group: `src/**/*.{js,jsx}` gets the full React/browser ruleset; root-level `*.js` and `scripts/**/*.js` are treated as permissive Node scripts (`no-unused-vars`/`no-undef` off) since they're one-off utilities, not application code.

## Operating model (relevant when making changes)

This repo is operated file-by-file rather than via incremental line edits — see `OPERATIONS.md` for the full workflow (canonical doc ownership, release process, key file map). In short: changes are grouped into releases, the repo receives complete replacement files, and a release is normally committed as one commit and pushed to `main`. `OPERATIONS.md` owns process only — current work queues, release history, and architectural learning live in Drive documents referenced there, not in this repo.

`OPERATIONS-NAS.md` documents a **separate, private, tailnet-only** deployment on a Synology NAS (different repo, static HTML, no build step, no MCP endpoint). It is not part of the public `faultlinewatch.com` pipeline — don't conflate the two when reasoning about deploys.

Structural test records worth checking after any change touching record rendering, corpus derivation, or programme/state display (per `OPERATIONS.md`): `FR-QE-0001` (multi-assessment/transition behaviour), `FR-AM-0001` (post-migration multi-assessment), `FR-BT-0001` (programme identity baseline).
