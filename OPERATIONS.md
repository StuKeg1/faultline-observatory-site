# Faultline Observatory — Operations Reference

**Read this first. Then read the stack. Then start.**

---

## Implementation Stack

```
OPERATIONS.md          — Current reality and what to ship next (this file)
RM-001                 — Where things live (repo map, file locations)
RM-002                 — How to make changes (runbook, phases, tiers)
Outstanding Work Queue — Source of truth for all pending work
```

OPERATIONS.md is a summary view. The Outstanding Work Queue is the
authority. When they conflict, the Queue wins.

---

## Repository

| | |
|---|---|
| Repo | `StuKeg1/faultline-observatory-site` |
| Branch | `main` |
| Framework | Vite + React (SPA) |
| Deploy | Cloudflare Pages — auto on push to `main` |
| Live site | `https://faultlinewatch.com` |
| Preview URL | `https://faultline-observatory-site.sjoerdkeg.workers.dev` |
| Local dev | `npm run dev` → `localhost:5173` |

## Cloudflare Account

| | |
|---|---|
| Account ID | `145fa3f7c38e336aaa0b1713a658cf89` |
| Zone | `faultlinewatch.com` |
| MCP endpoint | `https://mcp.faultlinewatch.com/mcp` |
| MCP Worker | `faultline-mcp` (Cloudflare Worker, stateless) |

---

## Current State

| Component | Status |
|---|---|
| Live site | Operational |
| Corpus | 26 records, 4 programmes, 30 assessments |
| MCP endpoint | Operational — `mcp.faultlinewatch.com/mcp` |
| Codex MCP connection | Verified 2026-06-15 |
| Cloudflare Analytics | Pending — pipeline not yet built |
| Institutional Health page | Live — visitor/pageview counts show placeholder values |

**Highest-priority unfinished implementation:** Cloudflare Analytics pipeline (Session 4).
**Next scheduled session:** Session 1 — Record Legibility.

---

## Recent Milestones

| Date | Milestone |
|---|---|
| 2026-06-10 | FM-001 published — founding milestone record live |
| 2026-06-12 | Public launch |
| 2026-06-15 | Public MCP endpoint deployed (`mcp.faultlinewatch.com/mcp`) |
| 2026-06-15 | Codex MCP verification successful (`mcp__faultline` confirmed) |
| 2026-06-15 | OPERATIONS.md created |

---

## Approved Session Plan

Full detail in the Outstanding Work Queue (Google Drive → faultline folder).
This is a summary view only.

---

### Session 1 — Record Legibility
*"Improve record legibility."*
**Expected duration: 30–60 minutes**

| Item | Tier | Status |
|---|---|---|
| A1: Warrant label → "WHY THIS STATE?" | 1 | Ready |
| A2: Warrant panel v1 | 2 | Design validated |
| A3: Apple touch icon *(piggyback)* | 1 | Asset ready |

**Done when:**
- WHY THIS STATE? label visible on record pages
- Warrant panel renders correctly
- StateBadge and RecordCard unaffected
- Mobile layout passes at 375px
- No console errors
- Build succeeds and commit pushed

**Tool: Cowork**

Why:
- Needs direct visibility into `FrontierRecord.jsx` and `FrontierRecord.css`
- Needs to run `npm run dev` and validate at `localhost:5173`
- Needs to check mobile layout at 375px in the browser
- Lowest-friction path for supervised Tier 1–2 UI work on known files

Avoid:
- Claude web chat — cannot see the repo or run local dev server
- Codex autonomous mode — changes need review before commit; visual
  validation is part of the definition of done here

---

### Session 2 — Institutional History
*"Improve institutional history."*
**Expected duration: 15–30 minutes**

| Item | Tier | Status |
|---|---|---|
| B1: FM-001 author attribution | 1 | Draft complete |
| B2: FM-001 body text rewrite | 1 | Draft complete |

**Done when:**
- FM-001 subtitle opens with author attribution and correct LinkedIn link
- Body text matches approved draft (fm001-draft.html)
- LinkedIn link opens correctly
- Mobile layout intact
- Commit pushed

**Tool: Manual (VS Code)**

Why:
- Both changes are content-only — approved text already written
- Target is a single JS data record, not a component
- No design decisions required — draft is the spec
- Fastest path is open file, paste approved text, save, commit

Avoid:
- Any agentic tool — adds friction without adding value here

Limitation:
- Confirm exact file path via RM-001 before opening anything
- LinkedIn link may need JSX formatting depending on how the field renders

---

### Session 3 — MCP Onboarding
*"Improve MCP onboarding."*
**Expected duration: 45–90 minutes**

| Item | Tier | Status |
|---|---|---|
| C1: MCP guide migration `/guides/mcp-access` | 2 | Draft complete |

**Done when:**
- `/guides/mcp-access` exists and renders approved content
- `/guides/using-with-claude` redirects or is removed
- All internal links to old route updated
- Tab switching (Codex / Claude Desktop / MCP Inspector) works
- Mobile layout passes at 375px
- Build succeeds and commit pushed

**Tool: Codex**

Why:
- Task is mechanical: convert approved HTML draft to JSX, extract CSS, wire route
- Codex is already connected to `mcp__faultline` — can verify the onboarding
  flow directly during implementation
- Can test MCP queries mid-session to confirm guide content is accurate
- Autonomous execution appropriate — spec is complete, output is predictable

Avoid:
- Claude web chat for execution — cannot see repo or wire routes
- Cowork — suited for supervised UI iteration, not mechanical conversion

Limitation:
- Do not redesign the page during this session — the draft is approved
- If content questions arise, pause and resolve in Claude before continuing

---

### Session 4 — Analytics Infrastructure
*"Implement Cloudflare Analytics pipeline."*
**Expected duration: 2–4 hours**

| Item | Tier | Status |
|---|---|---|
| D1: Cloudflare Analytics integration | 2–3 | Architecture complete |

**Done when:**
- GitHub Action runs on schedule and generates `institutional-health-analytics.json`
- `InstitutionalHealth.jsx` reads from generated file, not placeholders
- Visitor and pageview counts display correctly on live site
- No runtime API calls, no client-side secrets
- Build succeeds and commit pushed

**Tool: Codex + Claude**

Why:
- Codex implements the GitHub Action workflow and Node.js fetch script
- Claude useful for validating the Cloudflare Analytics GraphQL query before
  it goes into automation — test the query manually first
- Two distinct phases: query design (reasoning) then script implementation
  (execution) — different tools suit each phase

Avoid:
- Codex alone for the query design phase — GraphQL API has gotchas that
  benefit from a reasoning pass first
- Claude web chat alone for implementation — cannot write and commit
  the GitHub Action

Limitation:
- Do not re-litigate the analytics architecture — it is approved
- Pre-session action required: create GitHub secrets `CF_API_TOKEN`,
  `CF_ACCOUNT_ID`, `CF_ZONE_ID` before opening Codex

---

## Key File Map

*(Confirm exact paths via RM-001 before touching anything.)*

| Need to... | File |
|---|---|
| Change how a record page renders | `src/pages/FrontierRecord.jsx` |
| Change record page styles | `src/pages/FrontierRecord.css` |
| Change what data is derived | `src/data/derive.js` |
| Change a specific record's data | `src/data/records/FR-*.js` |
| Change the record list/archive | `src/pages/TheRecord.jsx` |
| Change state badge appearance | `src/components/StateBadge.jsx` |
| Change record card in lists | `src/components/RecordCard.jsx` |
| Change global styles | `src/styles/global.css` |
| Change design tokens | `src/styles/design-tokens.css` |
| Add a new record | `src/data/records/` + `src/data/corpus.js` |
| Change site routing | `src/App.jsx` |
| Add static assets | `public/` |
| Change HTML head | `index.html` |

**Rendering chain:**
```
FR-*.js → corpus.js → derive.js → FrontierRecord.jsx → FrontierRecord.css
```

**Constitutional derive.js rules — never violate:**
- `getCurrentAssessment()` always returns `assessments[last]` — never stored
- `getTransitionFeed()` is always derived — never stored
- All summary statistics derived from live corpus

---

## Structural Test Set (RM-002 Phase 4)

| Record | File | Strain type |
|---|---|---|
| FR-QE-0001 | `src/data/records/FR-QE0001.js` | Quantum Advantage — threshold crossing |
| FR-MF-0001 | `src/data/records/FR-MF0001.js` | Cold Fusion — Stage 2Z / drift |
| FR-BT-0001 | `src/data/records/FR-BT0001.js` | Tesla FSD — convergence |

Check at `localhost:5173`: state band, warrant panel, verification matrix,
no console errors, mobile at 375px.

---

## Implementation Protocol (summary)

Full detail in RM-002. Follow Phase 1–6 in order. Never skip phases.

**Tier classification:**

| Tier | Type |
|---|---|
| 1 | Presentation only — one file |
| 2 | Component logic — JSX + CSS |
| 3 | Data model — FR-*.js + derive.js + renderer |

Never treat a Tier 3 change as Tier 1.
Always read the target file before editing (RM-002 Phase 2).

**Commit format:**
```
[scope] brief description
- specific change 1
- specific change 2
Why: one sentence
```

**After every session:** update the Outstanding Work Queue, record commit
hash, note next entry point. Update RM-001 if files were added or
rendering chain changed.

---

*OPERATIONS.md is a summary. Outstanding Work Queue is the authority.*
*When they conflict, the Queue wins. Update both after every session.*
