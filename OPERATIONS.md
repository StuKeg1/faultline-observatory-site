# Faultline Observatory — Operations Handbook

**Purpose:** describe how the Observatory operates.

OPERATIONS.md is the operational handbook for the Faultline Observatory website and its public implementation workflow. It should be timeless wherever possible.

It does not own current work, release history, architectural observations, or institutional learning. Those have separate canonical homes.

---

## Canonical Documentation Architecture

The Observatory uses a set of canonical documents, each with one clear institutional responsibility.

| Document | Location | Owns | Never owns |
|---|---|---|---|
| CLAUDE.md | GitHub | AI coding-agent guidance: commands, architecture, data pipeline, CI quirks. Read this first when starting AI-assisted work in the repo. | Operating workflow, release process (see OPERATIONS.md) |
| OPERATIONS.md | GitHub | Operating workflow, repo facts, release process, implementation rules | Current work, shipped history, observations |
| Outstanding Work Queue | Drive | What work currently exists | Historical implementation detail, architectural reasoning |
| Release Archive | Drive | What the Observatory has shipped | Open work, future planning |
| Institutional Learning Register | Drive `architecture/observations/` | What the institution has learned but not yet implemented | Tasks, release plans, implementation decisions |

Architecture rule: every fact has exactly one owner. Other documents may reference it, but should not duplicate it.

---
## Operational Document Structure

Operational documents are organised by institutional responsibility rather than document size.

Documents may be separated where distinct operational responsibilities or maintenance cadences would otherwise create unnecessary friction.

The release workflow is intentionally separated into distinct operational documents:

- **Outstanding Work Queue** — identifies and prioritises current work.
- **Active Release Queue** — tracks approved releases awaiting implementation.
- **Release Governance** — owns release references, review guidance, and migration support.

These documents are maintained independently because they support different operational activities and evolve at different cadences.

The exact operational document structure is not constitutional. It may evolve through observed operational experience, provided institutional responsibilities remain clear and every fact continues to have one canonical owner.
---

## Information Flow

```text
Diagnosis
  ↓
Institutional Learning Register
  ↓
Outstanding Work Queue
  ↓
Release Manifest
  ↓
GitHub Implementation
  ↓
Release Archive
```

OPERATIONS.md governs the workflow.

Release Manifests are temporary execution documents. They coordinate a single release and cease to be authoritative once the release has been recorded in the Release Archive. They are not part of the permanent documentation architecture.

---

## Document Status Convention — Drive Documents

Drive documents created or updated through AI assistance must declare their canonical status immediately below the title block:

```text
Status: [CANONICAL | Superseded | Candidate vN | Draft | Dormant | Non-authoritative copy]
Supersedes: [name of the document this replaces, or "—" if none]
Source of truth as of: [date this version was generated]
```

Rules:

- Only one document of a given title should carry `Status: CANONICAL` at any time.
- When a new version of an existing Drive document is generated, the new document becomes `CANONICAL`; the immediately preceding canonical version becomes `Superseded` on next touch.
- Drive copies, drafts, or imports whose source of truth lives elsewhere carry `Status: Non-authoritative copy`, with a one-line note naming the real source of truth.
- This convention does not apply to files inside the GitHub repo; git history already provides canonicality.

---

## Workflow — File Replacement

**The unit of execution is the release.**

**The unit of change is the file.**

**The release is the unit of meaning. The file is the unit of execution.**

Stuart does not edit code line by line. The workflow is:

```text
1. Confirm the relevant work item in the Outstanding Work Queue.
2. Create or open the Release Manifest.
3. Confirm all files and admin actions before touching anything.
4. For each file in the manifest:
   a. Locate the file in the repository.
   b. Fetch or upload the current file.
   c. AI produces a complete replacement file.
   d. Review the complete replacement.
   e. Overwrite the original in the repository.
5. Complete any admin actions such as secrets, settings, or DNS.
6. Run verification locally where required.
7. Commit the entire release as one commit where practical.
8. Push to main.
9. Verify live at faultlinewatch.com.
10. Update documentation ownership:
    - Outstanding Work Queue: remove/move actionable work.
    - Release Archive: record shipped history.
    - Institutional Learning Register: preserve any learning not yet implemented.
```

Stuart's role: reviewer and operator.

AI's role: file-generation and implementation-support layer.

Repository: receives complete approved files, not line edits.

Release grouping principle:

> If a visitor saw this release note, would the items feel like they belong together?

Not:

> Did the same tool create these files?

---

## Repository

| | |
|---|---|
| Repo | `StuKeg1/faultline-observatory-site` |
| Branch | `main` |
| Framework | Vite + React SPA |
| Deploy | Cloudflare Pages — auto-deploy on push to `main` |
| Live site | `https://faultlinewatch.com` |
| Preview URL | `https://faultline-observatory-site.sjoerdkeg.workers.dev` |
| Local dev | `npm run dev` → `localhost:5173` |

---

## Cloudflare / Public Infrastructure

| | |
|---|---|
| Zone | `faultlinewatch.com` |
| MCP endpoint | `https://mcp.faultlinewatch.com/mcp` |
| MCP Worker | `faultline-mcp` — stateless Cloudflare Worker |

Secrets and account-level credentials are not recorded in OPERATIONS.md. If a release requires Cloudflare or GitHub secrets, the Release Manifest must name the required secret keys but not their values.

---

## Key File Map

This map contains frequently used paths only: components that have caused friction during a real release and are likely to be touched again.

If a path causes friction during a release, ask: is this a recurring operational path? If yes, add it here.

Operational Promotion Rule: a path earns promotion into this map when:

1. It was needed during a real release.
2. Finding it caused friction.
3. It is likely to be touched again.

If OPERATIONS.md grows into a full repository map, it has failed. OPERATIONS.md contains the recurring operational 20%; detailed release-specific files belong in Release Manifests.

| Need to... | File |
|---|---|
| Change site routing | `src/App.jsx` |
| Change homepage structure | `src/pages/Home.jsx` |
| Change homepage styles | `src/pages/Home.css` |
| Change the record list/archive | `src/pages/TheRecord.jsx` |
| Change how a record card renders | `src/components/RecordCard.jsx` |
| Change how a record page renders | `src/pages/FrontierRecord.jsx` |
| Change record page styles | `src/pages/FrontierRecord.css` |
| Change what data is derived | `src/data/derive.js` |
| Change a specific record's data | `src/data/records/FR-*.js` |
| Change programme definitions | `src/data/corpus.js` |
| Change a programme page | `src/pages/Programme.jsx` |
| Change programme page styles | `src/pages/Programme.css` |
| Change site navigation | `src/components/SiteNav.jsx`, `src/components/SiteNav.css` |
| Change footer links or layout | `src/components/SiteFooter.jsx` |
| Change global styles | `src/styles/global.css` |
| Change design tokens | `src/styles/design-tokens.css` |
| Add static assets | `public/` |
| Change HTML head | `index.html` |
| Change GitHub automation | `.github/workflows/` |
| Change analytics update logic | `scripts/` and `src/data/generated/` |

Rendering chain:

```text
FR-*.js → corpus.js → derive.js → page/component renderer → CSS
```

---

## Constitutional Implementation Rules

Never violate these rules during implementation:

- `getCurrentAssessment()` always returns `assessments[last]`; current assessment is never stored separately.
- `getTransitionFeed()` is always derived; transition history is never manually stored.
- Summary statistics are derived from the live corpus unless explicitly documented otherwise.
- Evidence Trajectories (`EvidenceTrajectories.jsx`) renders only from `corpus.js`/`derive.js` — no independent trajectory storage (ADR-004).
- The Outstanding Work Queue owns current actionable work.
- The Release Archive owns shipped implementation history.
- The Institutional Learning Register owns preserved institutional learning that has not yet become work.
- OPERATIONS.md owns process only.

---

## Structural Test Records

Every release that affects record rendering, corpus derivation, programme rendering, or state/assessment display should test the structural records most likely to strain the system.

| Record | File | Why it matters |
|---|---|---|
| FR-QE-0001 | `src/data/records/FR-QE-0001.js` | Multi-assessment quantum record; transition/reassessment behaviour |
| FR-AM-0001 | `src/data/records/FR-AM-0001.js` | Advanced Materials record after MF→AM migration; multi-assessment behaviour |
| FR-BT-0001 | `src/data/records/FR-BT-0001.js` | Biotechnology baseline record; programme identity check |

Minimum checks at `localhost:5173` where relevant:

- state band renders correctly;
- warrant panel renders correctly;
- verification matrix renders correctly;
- programme pages render correct programme identity;
- archive/list cards render expected metadata;
- mobile layout holds at 375px;
- no console errors.

---

## After Every Release

After a release ships:

1. Verify live at `faultlinewatch.com`.
2. Move or remove shipped actionable work from the Outstanding Work Queue.
3. Add the shipped release to the Release Archive with objective, manifest reference, commit hash, implementation notes, and historical rationale.
4. Preserve any non-implemented institutional learning in the Institutional Learning Register.
5. Update OPERATIONS.md only if the operating workflow, repository map, file map, or implementation rules changed.

---

## Operating Principle

OPERATIONS.md should be boring, stable, and re-enterable.

If a future edit adds current status, release chronology, long diagnosis, or historical explanation, the edit probably belongs somewhere else.
