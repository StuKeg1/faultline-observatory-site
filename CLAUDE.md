# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Faultline Observatory — a Vite + React SPA that publishes a public record of frontier scientific/technological claims ("Frontier Records") and how evidence changes their assessment over time. Deployed as a static build to Cloudflare Pages at `faultlinewatch.com`. Repo: `StuKeg1/faultline-observatory-site`, branch `main`.

## Commands

```bash
npm install          # install deps (Node >=18; CI uses Node 20)
npm run dev          # dev server at localhost:5173, hot reload
npm run build        # runs validate:events first (prebuild), then vite build -> dist/
npm run preview      # serve the production build at localhost:4173
npm run lint         # eslint .
npm run validate:events   # validates events/**/*.json against schema/event-schema.json
```

There is no test runner in this repo — CI (`.github/workflows/ci.yml`) only runs `npm run lint` and `npm run build` on push/PR to `main`. Treat a clean lint + build as the correctness bar.

There is no `dist/` deploy step to run locally — Cloudflare Pages builds and deploys automatically on push to `main`.

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

`src/App.jsx` is the router. Home, top-level stubs, and About load eagerly; everything else (`TheRecord`, `FrontierRecord`, `Programme`, notes, events, `InstitutionalHealth`, guides, `Origins`, `Welcome`) is lazy-loaded via `React.lazy` — Vite code-splits these automatically. `RecordRedirect` handles the legacy `FR-MF-*` → `FR-AM-*` id migration (Release 006); a corresponding `/programmes/prog-mf` → `/programmes/prog-am` redirect exists too. Follow this pattern for future record/programme id migrations rather than mutating historical ids in place.

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
