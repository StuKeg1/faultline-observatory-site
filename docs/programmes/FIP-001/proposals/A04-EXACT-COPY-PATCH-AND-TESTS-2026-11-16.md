# FIP-A04 — Exact public copy patch and regression-test proposal

**Prepared:** 2026-11-16  
**Status:** PROPOSAL PREPARED — DECISION REQUIRED; **NOT IMPLEMENTED**  
**Authority:** User approved *preparation* of bounded copy-only changes for P1 Home, P2 Methodology, P3 Institutional Changelog, and **optional** P4 About; preserve Welcome; defer full prior-value diffs. No permission to modify application code, tests, canonical records, FCIF, merge or deploy.  
**Branch:** `fip-a04-copy-proposal-20261116`; base `c8b581569c2f3a1007be8a871ca332112335f242`.  
**Evidence:** [FIP-A04 review](../reviews/A04-APPEND-ONLY-PUBLIC-WORDING-2026-11-16.md), Claude finding F3-03, exact source files read from baseline main.

## Governing distinction

**Assessment history is append-only:** prior assessments remain visible. **Other record fields may be corrected under governance:** change events are logged, but mutation entries do not always reproduce complete previous field text. A record-wide guarantee that nothing is ever rewritten would be inaccurate. Public copy should be precise without promising a complete word-for-word field revision archive that the site does not guarantee.

The following are *textual patches to prepare*, **not changes already applied**. The exact source anchor must be re-read at implementation. If the anchor is absent, duplicated or changed, stop rather than applying a fuzzy replacement.

## P1 — Homepage (RECOMMEND INCLUDE)

**Path:** `src/pages/Home.jsx`; baseline Git blob `d5ca3dd472626c0f88cc0ce6bb9968122edef789`; lines 229–233; `home-trust-card` > Methodology paragraph.

**Exact existing JSX:**
```jsx
<p className="htc-block-text">
  Each record tracks a scientific or technology claim over time.
  It&apos;s only ever added to, never rewritten — updates are dated,
  so the full history of an assessment stays visible.
</p>
```

**Proposed replacement JSX:**
```jsx
<p className="htc-block-text">
  Each record tracks a scientific or technology claim over time.
  Assessments are added without overwriting earlier judgements.
  Evidence descriptions and other record details may be corrected,
  with dated changes recorded in the Mutation Log.
</p>
```

**Rationale:** removes the demonstrably overbroad claim of record-wide immutability; keeps permanent assessment history and honest mutation logging. No statement that exact prior field values are always shown publicly.

## P2 — Methodology glossary (RECOMMEND INCLUDE)

**Path:** `src/pages/Methodology.jsx`; baseline Git blob `93fc2a6ec1125cd6120b86d2d869e57b1e080416`; lines 131–136, `ARCHITECTURE_INDEX`. Two tightly scoped definitions should change together to avoid contradictory terminology. The `Assessment` and `Transition Feed` definitions must remain exactly unchanged.

**Existing `Frontier Record` entry (exact):**
```js
{ term: "Frontier Record",              def: "The atomic unit of institutional memory. Each record preserves a claim under observation, its instances, its full assessment history, its evidence trail, and its mutation log. Records are permanent, citable, and append-only." },
```

**Proposed entry:**
```js
{ term: "Frontier Record",              def: "The atomic unit of institutional memory. Each record preserves a claim under observation, its evidence trail, assessment history, and dated mutation log. Assessments are append-only; governed corrections to other record fields are logged." },
```

**Existing `Mutation Log` entry (exact):**
```js
{ term: "Mutation Log",                 def: "An append-only log of every structural change to a record. Nothing is deleted; changes are recorded and the prior state is preserved." },
```

**Proposed entry:**
```js
{ term: "Mutation Log",                 def: "A dated, append-only log of recorded changes to a Frontier Record, including corrections to existing fields. Entries describe what changed; some link to supporting review receipts. They do not necessarily reproduce the complete earlier field wording." },
```

**Rationale:** expresses separate guarantees for immutable judgement history and logged change events. The narrower phrase "recorded changes" avoids implying that all code/database edits are necessarily part of the mutation log. Do not silently modify authoritative FCIF text; this proposal changes website glossary copy only.

## P3 — Institutional Changelog (RECOMMEND INCLUDE)

**Path:** `src/pages/InstitutionalChangelog.jsx`; baseline Git blob `a635ff26c2bd22c3246396a6aec1d895a84469b1`; lines 58–63, first `ichl-intro` paragraph.

**Exact existing JSX:**
```jsx
<p className="ichl-intro">
  Every mutation to every Frontier Record, in full, chronological order.
  Nothing here is deleted, hidden, or summarised away — this is the
  complete operational history the Observatory's append-only obligation
  requires it to keep.
</p>
```

**Proposed replacement JSX:**
```jsx
<p className="ichl-intro">
  Recorded mutation entries for Frontier Records, presented in chronological order.
  They document changes, including corrections to existing fields.
  An entry may summarise a correction rather than reproduce the complete earlier wording.
</p>
```

**Rationale:** does not assert that every underlying historical field version survives as full public page text; does not make an untested guarantee of complete coverage of all operational changes. Leave the following paragraph explaining that the homepage shows a filtered feed versus the complete mutation register **unchanged**; any separately discovered issue in that paragraph requires separate evidence.

## P4 — About page (OPTIONAL, RECOMMEND INCLUDE FOR CONSISTENCY)

**Path:** `src/pages/About.jsx`; baseline Git blob `86688741e24f8191cda82e083c64412ca1c958bb`; the `The Record` section, line ~50.

**Exact existing value (source string):**
```js
body: "The Frontier Record is not a database of outcomes. It is a record of trajectories — how claims were stated, what evidence tested them, and how the evidentiary position evolved. Records are never closed by editorial judgement. They close only when the observable facts warrant closure. Each record is citable, permanent, and append-only.",
```

**Proposed replacement (replace the last sentence only):**
```js
body: "The Frontier Record is not a database of outcomes. It is a record of trajectories — how claims were stated, what evidence tested them, and how the evidentiary position evolved. Records are never closed by editorial judgement. They close only when the observable facts warrant closure. Each record has a permanent identifier and preserves its assessment history and dated mutation log; corrections to other record fields are recorded.",
```

**Rationale:** makes About consistent with the distinction introduced in Home and Methodology. Avoids changing the meaning of the preceding "closed" sentences (out of scope). Because P4 was approved as an *optional proposal*, operator should explicitly elect INCLUDE/DEFER when authorising implementation; it is not automatically in a future release.

## Deliberately retained and deferred

- **Welcome:** `src/pages/Welcome.jsx`, baseline blob `cddb24988f5242c14b92d6244c0d1fcf562cd683`. Preserve verbatim: `Earlier assessments are never rewritten or removed. Instead, the Record preserves the complete trajectory, allowing readers to see how understanding developed over time.` This already scopes the historical guarantee correctly.
- **Methodology Assessment glossary:** keep its original dated append-only definition and current-last-entry semantics; no methodological or FCIF rule change.
- **Canonical record arrays, mutation histories, overlays, source references and MCP:** entirely outside A04.
- **Full historical prior-value diffs:** specifically DEFERRED as a separate provenance design, not a precondition for the four copy fixes.
- **FIP-A02:** the historical `date`/`recordedDate` MCP parity check is still DEFERRED, NOT ACCEPTED.

## Regression tests to create *if separate implementation is authorised*

No test source file is created by this proposal. This is the exact intended **test contract** for later implementation:

1. **Anchor protection:** assert each of the four page modules contains exactly the expected source anchor once at implementation start, including the two Methodology glossary keys; abort on mismatches rather than silently changing unrelated copy. Record baseline and changed blob SHAs in the implementation receipt.
2. **P1 rendered output:** homepage prerender (`dist/index.html`) contains the new "Assessments are added without overwriting earlier judgements" and "dated changes recorded in the Mutation Log" wording; no occurrence of `only ever added to, never rewritten` remains in that rendered paragraph.
3. **P2 rendered output:** Methodology prerender (`dist/methodology/index.html`) contains both new glossary texts, still contains the unchanged `Assessment` glossary, and does not show the outdated `Nothing is deleted; changes are recorded and the prior state is preserved` sentence.
4. **P3 rendered output:** Institutional Changelog prerender (`dist/institutional-changelog/index.html`) contains `An entry may summarise a correction rather than reproduce the complete earlier wording.` and retains the following existing paragraph concerning homepage filtering; no prior "Nothing here is deleted, hidden, or summarised away" claim in the introduction.
5. **P4 only if elected:** About prerender (`dist/about/index.html`) contains the new precise assessment/mutation distinction; previous section text before the last sentence is exactly unchanged. If excluded, About file blob and displayed copy must remain unchanged.
6. **Welcome invariance:** `src/pages/Welcome.jsx` blob remains unchanged and prerendered Welcome continues to contain the exact `Earlier assessments are never rewritten or removed` sentence.
7. **Non-content invariants:** no edits to `src/data/records/`, `src/data/derive.js`, `src/data/mcpProjection.js`, `faultline-mcp/` (except an independently justified documentation note, not proposed), FCIF rules or verification-stage overlays. No change to `assessments` counts, states, mutation log chronology or institutional data.
8. **Full CI:** run dependency checks, canonical data validation, LPR manifest validation, lint, `npm test`, build/prerender and post-build tests, MCP Worker typecheck; verify the generated public output *and* PR diff before any merge.
9. **Live release gates, separately authorised:** confirm Pages production commit; fetch Home, Methodology, Institutional Changelog and About (only if changed); compare exact visible text, check no duplicate sentences or layout overflow, and ensure Welcome remains intact. MCP code should be unchanged; no unrelated A02 parity test is needed for copy-only A04.

**Implementation test-file design:** add a bounded `src/pages/fipA04Copy.test.js` (or extend existing relevant page/prerender tests) using Node's built-in `node:test` and `node:assert/strict`. Prefer *rendered content assertions* over brittle source-string grep where existing testing infrastructure permits; maintain source blob/anchor checks to guard the original diff and ensure the optional P4 selection is explicit. Register any new test in `package.json` `scripts.test`; prebuild-only assertions must be appropriately skipped before the build and enforced post-build.

## Decision and governance

**Proposal prepared only.** None of the code blocks above has been applied to `src/pages/` and no regression test files have been created. No PR or CI trigger, no merge and no deployment. There is no A04 implementation acceptance claim.

**Single next decision:** authorise bounded branch implementation of P1/P2/P3 with P4 marked either INCLUDED or DEFERRED, and creation of the tests above, permitting or withholding draft PR/preview CI separately. Preserve Welcome and all canonical scientific sources. This decision is separate from merge and production release authority; FIP-A05 follows only after A04 receives its own disposition.
