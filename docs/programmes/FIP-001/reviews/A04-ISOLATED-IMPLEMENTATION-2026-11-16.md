# FIP-A04 — Bounded copy-only isolated implementation receipt

**Date:** 2026-11-16  
**Status:** IMPLEMENTED ON ISOLATED BRANCH — CI/PR AND PRODUCTION GATES CLOSED  
**Authority:** The operator expressly authorised P1 Homepage, P2 Methodology, P3 Institutional Changelog and P4 About on a branch, plus the approved regression tests. **No PR, merge, production deployment or unscheduled site change is authorised.**  
**Branch:** `fip-a04-copy-proposal-20261116`, branched from `main` at `c8b581569c2f3a1007be8a871ca332112335f242`.  
**Source proposal:** [Exact copy patch and test contract](../proposals/A04-EXACT-COPY-PATCH-AND-TESTS-2026-11-16.md).

## Implemented modifications

| Item | File | Exact change | Original Git blob | New Git blob |
| --- | --- | --- | --- | --- |
| P1 | `src/pages/Home.jsx` | Replace the absolute `only ever added to, never rewritten` text with preserved assessment-history and dated-correction distinction | `d5ca3dd472626c0f88cc0ce6bb9968122edef789` | `6852c6953848c730f729540297a0409c45e38daf` |
| P2 | `src/pages/Methodology.jsx` | Replace exactly two `ARCHITECTURE_INDEX` definitions: `Frontier Record` and `Mutation Log`. Leave `Assessment` and `Transition Feed` definitions intact | `93fc2a6ec1125cd6120b86d2d869e57b1e080416` | `f271160d27beaf57b8f61305986ef52bf57dbaa6` |
| P3 | `src/pages/InstitutionalChangelog.jsx` | Replace first `ichl-intro` paragraph to clarify that listed mutation entries can summarise a correction rather than reproduce complete prior wording | `a635ff26c2bd22c3246396a6aec1d895a84469b1` | `8d4fc29cb99b8013edefc29c3e70c783d3c1ba9c` |
| P4 | `src/pages/About.jsx` | Replace the last sentence of `The Record` section with precise permanent-ID, assessment history and mutation-log language | `86688741e24f8191cda82e083c64412ca1c958bb` | `bb71d56f870c7661cf5981181a68d46a93b84c98` |

Original substrings matched **exactly once** when changed; no fuzzy text transformations were used.

## Tests added — prepared, not claimed as executed

- New `src/pages/fipA04Copy.test.js` registers five prebuild source-level assertions covering all P1–P4 wording, retained Methodology `Assessment` definition, preceding About trajectory and closure text, retained Changelog homepage-filter paragraph, and exact Welcome wording.
- A sixth test checks public HTML from `dist/index.html`, `dist/methodology/index.html`, `dist/institutional-changelog/index.html`, `dist/about/index.html` and `dist/welcome/index.html` **only when a completed `dist/` build is available**. Otherwise it skips intentionally, consistent with existing prerebuild tests. After `npm run build`, it must run and PASS, not skip.
- The new file is appended to `package.json` `scripts.test`, preserving existing test entries.
- **Execution limits:** GitHub file writes/reads and commit diff review are available; no local Node/build checkout or GitHub Actions run was executed as part of this branch-only authorisation. No assertion of passing npm tests, canonical validation, lint, build, prerender, or Worker typecheck is made.

## Preservation and release boundary

The comparison of this branch with current `main` showed 10 total changed paths: four copy modules, one new regression file, `package.json`, and four FIP proposal/control documents. No changes to:
- `src/pages/Welcome.jsx`, baseline Git blob `cddb24988f5242c14b92d6244c0d1fcf562cd683`
- `src/data/records/*`, canonical assessments, mutations, claim sources or stage assignments
- FCIF definitions, `src/data/derive.js`, `src/data/mcpProjection.js`, or `faultline-mcp/*`
- public website or live MCP deployments

FIP-A02 historical `date`/`recordedDate` MCP parity remains **DEFERRED / NOT ACCEPTED**. Full prior-value diffs are deferred to a distinct provenance design. FIP-A03 remains ACCEPTED.

## Remaining gates and one next action

**Next operator decision:** authorise opening a **draft, CI-only PR** for this bounded branch (with ordinary Cloudflare preview allowed but no production merge/deploy) so GitHub can run the full workflow: dependency verification, canonical validators, LPR manifest, lint, source tests, build/prerender, postbuild tests and MCP Worker typecheck.

Before approving any later merge, inspect CI outputs, record the exact 4-page change diff and unchanged Welcome/record files; independently verify the deployed public copy only after a separately authorised production merge. FIP-A04 remains **IMPLEMENTED (branch only), NOT ACCEPTED**.
