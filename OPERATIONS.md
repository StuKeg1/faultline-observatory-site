# Faultline Observatory — Operations Reference

**Read this first. Then read the stack. Then start.**

---

## Implementation Stack

```
OPERATIONS.md          — Current reality and what to ship next (this file)
Drive Operating Index  — Map of authority: which document governs what,
                          which copies in the Drive are not authoritative
RM-001                 — Where things live (repo map, file locations)
RM-002                 — How to make changes (runbook, phases, tiers)
Outstanding Work Queue — What work exists (backlog, queue, closed)
Release Manifests      — What exactly is shipping now, file by file
```

OPERATIONS.md is a summary view. The Outstanding Work Queue is the
authority for what exists. Release Manifests are the authority for
what is executing. The Drive Operating Index is the authority for
which document governs what, and which Drive copies do not govern
anything.

---

## Document Status Convention

Drive gives Claude no edit-in-place capability — only `create_file`,
`copy_file`, `search_files`, and `read_file_content`. Every update to
a Drive document produces a new document under the same title in the
same folder. This is a structural fact of the tool, not a workflow
defect — but it means canonicality must be declared, not assumed from
recency alone.

**Every Drive document Claude creates or updates carries this header,
immediately below the title block:**

```
Status: [CANONICAL | Superseded | Candidate vN | Draft | Dormant | Non-authoritative copy]
Supersedes: [name of the document this replaces, or "—" if none]
Source of truth as of: [date this version was generated]
```

Rules:

- Only one document of a given title may carry `Status: CANONICAL` at
  any time.
- When Claude generates a new version of an existing document, the
  new document is `CANONICAL`. The immediately preceding canonical
  version becomes `Superseded` — Stuart relabels or trashes it on
  next touch, per existing practice.
- Drive copies, drafts, or imports whose actual source of truth lives
  elsewhere (e.g. the GitHub repo) carry `Status: Non-authoritative
  copy`, with a one-line note on where the real source of truth is.
- This convention does not apply to files inside the GitHub repo —
  git history already provides canonicality there.
- This is the only addition this convention introduces. It does not
  require a new document type, review cadence, or governance layer
  beyond the Drive Operating Index.

---

## Workflow — File Replacement

**The unit of execution is the release.**
**The unit of change is the file.**
**The release is the unit of meaning. The file is the unit of execution.**

Stuart does not edit code line by line. The workflow is:

```
1. Open the Release Manifest
2. Confirm all files and admin actions before touching anything
3. For each file in the manifest:
     a. Locate the file in the repository
     b. Upload it
     c. AI produces a complete replacement file
     d. Download the replacement
     e. Overwrite the original in the repository
4. Complete any admin actions (secrets, settings, DNS)
5. Run verification (npm run dev → localhost:5173)
6. Commit the entire release as one commit
7. Push
8. Verify live at faultlinewatch.com
9. Update the queue — move items to CLOSED with commit hash
```

Stuart's role: reviewer and operator.
AI's role: file-generation layer.
Repository: receives complete approved files, not line edits.

Release grouping principle:
"If a visitor saw this release note, would the items feel like they belong together?"
Not: "Did the same tool create these files?"

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

**Next release:** Release 1 — Record Legibility.

---

## Recent Milestones

| Date | Milestone |
|---|---|
| 2026-06-10 | FM-001 published — founding milestone record live |
| 2026-06-12 | Public launch |
| 2026-06-15 | Public MCP endpoint deployed (`mcp.faultlinewatch.com/mcp`) |
| 2026-06-15 | Codex MCP verification successful (`mcp__faultline` confirmed) |
| 2026-06-15 | OPERATIONS.md created |
| 2026-06-15 | File-replacement workflow adopted |
| 2026-06-20 | Drive Operating Index created. Document Status Convention added following external IA review. |

---

## Release Plan

Full detail in Outstanding Work Queue and Release Manifests.

| Release | Purpose | Files | Admin | Manifest | Status |
|---|---|---|---|---|---|
| Release 1 | Record Legibility | 5 | none | RELEASE-001 | Ready |
| Release 2 | Institutional Identity | 4–5 | none | RELEASE-002 | Ready |
| Release 3 | Analytics Infrastructure | 4 | 3 GitHub secrets | Not yet created | Pending secrets |

---

## Key File Map

This map contains frequently-used paths only — components that have
caused friction during a real release and are likely to be touched again.

Full repo map lives in RM-001. When a path causes friction during a
release, ask: is this a recurring operational path? If yes, add it here.

Operational Promotion Rule:
  A path earns promotion into this map when:
  1. It was needed during a real release
  2. Finding it caused friction
  3. It is likely to be touched again

  If OPERATIONS grows to 50 pages, it has failed.
  RM-001 contains everything. OPERATIONS contains the 20% of paths
  that drive 80% of releases. No more.

*(Confirm exact paths via RM-001 if a path is not listed here.)*

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
| Change footer links or layout | `src/components/SiteFooter.jsx` |
| Change site navigation | `src/components/SiteNav.jsx`, `src/components/SiteNav.css` |
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

## Structural Test Records (every release)

| Record | File | Strain type |
|---|---|---|
| FR-QE-0001 | `src/data/records/FR-QE0001.js` | Quantum Advantage |
| FR-MF-0001 | `src/data/records/FR-MF0001.js` | Cold Fusion — Stage 2Z |
| FR-BT-0001 | `src/data/records/FR-BT0001.js` | Tesla FSD — convergence |

Check at `localhost:5173`: state band, warrant panel, verification matrix,
no console errors, mobile at 375px.

---

## After Every Release

1. Verify live at `faultlinewatch.com`
2. Move items to CLOSED in Outstanding Work Queue
3. Record commit hash in CLOSED entry
4. Update Current State in this file if anything changed
5. Note next entry point for next release
6. Update RM-001 if new files were added or rendering chain changed

---

*OPERATIONS.md is a summary. Outstanding Work Queue is the authority.*
*Release Manifests are the execution layer. When in doubt, read the manifest.*
*The Drive Operating Index is the authority for which document governs what.*
