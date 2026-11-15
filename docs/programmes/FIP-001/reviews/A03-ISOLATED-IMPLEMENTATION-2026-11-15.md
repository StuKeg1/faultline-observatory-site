# FIP-A03 — Isolated implementation and validation receipt
**Date:** 2026-11-15 (21:10 GMT authorisation; implementation same date)
**Status:** ISOLATED BRANCH IMPLEMENTED; TARGETED VALIDATION PASSED; FULL CI NOT RUN; MERGE / PRODUCTION DEPLOYMENT NOT AUTHORISED.
**Authority:** Operator explicitly authorised bounded branch implementation of two exact append-only current-stage corrections, executable validation, focused tests, complete diff and FIP controls, but forbade merge or deployment. The approval in principle and exact proposed text are in [A03 proposal](../proposals/A03-TWO-RECORD-APPEND-ONLY-STAGE-CORRECTIONS-2026-11-15.md).

## Baseline and branch
- Repository: `StuKeg1/faultline-observatory-site`; source branch `fip-a03-am-stage-reconciliations-20261115`, created from canonical main commit `d909510267b43f4aca943255a72c84f9687ae4d2`.
- [Full branch comparison](https://github.com/StuKeg1/faultline-observatory-site/compare/d909510267b43f4aca943255a72c84f9687ae4d2...fip-a03-am-stage-reconciliations-20261115) is the complete reviewable GitHub diff, including tests and programme controls.
- Revalidated baseline main before writing: FR-AM-0001 file blob `df5f00ae6ff645075f0f2afaa09c9bccc7459bd4`; FR-AM-0005 `ded52d16d22a7089ff64fbd33c93e70a71a68ee7`; July `src/data/verificationStageReviews.js` `69b47e2e68c9fa776f875daff31945da49b41f41`. Original main SHA subsequently re-read unchanged after branch implementation.
- Preflight extracted all canonical assessment and mutation IDs: AM-0001 AS-001–005/M-001–016, AM-0005 AS-001–004/M-001–021. No duplicates; selected the next numbers per record. Both latest prepatch assessments stored **COLLAPSED / VS-05**.
- Source proposal code blocks matched exact object IDs and issuance date 2026-11-15. These were parsed before modifying code. No new evidence admitted.

## Exact canonical delta — source only, append-only
| File | New assessment (append only) | New mutation (prepend only) | Recorded after isolated implementation |
| --- | --- | --- | --- |
| [FR-AM-0001.js](https://github.com/StuKeg1/faultline-observatory-site/commit/02eaaee65bacafc726f5340bc1af3eb065bc9469) | AS-006, 2026-11-15, `collapsed / VS-04`, `changeKind: verification_stage_correction` | M-017, `assessment_correction`, AS-005 / COLLAPSED / VS-05 → AS-006 / COLLAPSED / VS-04 | 6 assessments, 17 mutations |
| [FR-AM-0005.js](https://github.com/StuKeg1/faultline-observatory-site/commit/82669900b4928f5966f536b98f4509f9858f8669) | AS-005, 2026-11-15, `collapsed / VS-04`, `changeKind: verification_stage_correction` | M-022, `assessment_correction`, AS-004 / COLLAPSED / VS-05 → AS-005 / COLLAPSED / VS-04 | 5 assessments, 22 mutations |

Each source file diff is **17 inserted lines, 0 deleted lines**, with the proposal's assessment summary and note and the corresponding mutation. Pre/post object comparison asserted every existing assessment object and prior mutation identical by JSON value and checked every other top-level canonical field, including claim, instances and sources, lineage, pressure-state metadata, mechanisms, questions and status. Historical July overlays are untouched. This is a current-stage semantics correction on previously admitted evidence **not new science**; historical VS-05 reaffirmations are retained.

## Focused regression diff (four test-only paths)
- `src/data/verificationStageReviews.test.js`: changes only current AM-0001 AS / stage assertions and derived LAD-001 chronology and matrix status to reflect new AS-006; earlier `recordedDate` and interpreted history preserved. [Exact commit](https://github.com/StuKeg1/faultline-observatory-site/commit/8047f5ed6491184876ad54abd7f84bc52838d6f7).
- `src/data/registerProjection.test.js`: adds FR-AM-0005 to stored-assessment stage-change register expectations. [Exact commit](https://github.com/StuKeg1/faultline-observatory-site/commit/060c2353a914ce848b8316f352e454aa85b15994).
- New `src/data/fipA03StageCorrections.test.js`: 3 focused tests for append-only current-stage correction, effective vs historical stage, preservation of historical July overlays, unchanged Pressure State, timeline/matrix dates, stage register, MCP full and summary projection. [Exact commit](https://github.com/StuKeg1/faultline-observatory-site/commit/9b51f553d0fe3262669e4e2900b103f33b82c449).
- `src/data/historicalCheckpointTestSupport.js`: test-only checkpoint adapter removes exactly the new AM-0005 AS-005/M-022 from *historical fixture comparison*, with explicit assertions about IDs, stages and earlier heads. Leaves runtime canonical data untouched; preserves the frozen original historical receipt. [Exact commit](https://github.com/StuKeg1/faultline-observatory-site/commit/b782e30240eaf78fc49f7a8c53d1ff670dd8cdad).

## Executed validation and honest limits
**PASS:**
1. Prior-to-write comparison: both selected IDs free and source blobs exactly match reviewed proposal; both source objects parsed.
2. After-write in-memory source/object comparison: preserved **all prior assessment objects, mutations and all other top-level record fields** for both cases. No Pressure State changed. No edits to `verificationStageReviews.js`.
3. **30** targeted executable V8 assertions against branch-source derived accessors, July stage overlay, Verification Matrix, register projection and MCP full/summary projection, all passed.
4. **3 exact new focused test bodies, 84 assertions**, executed in V8 with a lightweight `node:test` / `node:assert` adapter and real branch-source projection functions. Passed. This is **not** a claim that the full Node test runner executed.
5. Six branch source/test paths compiled under V8 syntax checking (imports isolated and `import.meta` substituted in syntax-only mode), all passed.
6. GitHub compare independently confirmed the two canonical source files each have 17 added / 0 removed lines. All source commits have navigable reviewable diffs. Main original two record blobs and July overlay re-read unchanged.

**NOT RUN / NOT CLAIMED:** `npm ci`, `npm run validate:all`, LPR manifest check, `npm run lint`, full `npm test` under Node before/after build, `npm run build` / prerender, `npm run typecheck:mcp`, GitHub Actions CI and production browser/MCP parity. The local container does not have the repository checkout or DNS access to GitHub. PR-triggered CI was intentionally **not** invoked because no PR/deployment was authorised. These remain explicit pre-merge gates; do not label the branch “CI green.”

## Status and next gate
**Isolated implementation exists only on named branch.** No pull request was opened, no source changes were applied to `main`, no merge and no production deployment authorised or initiated. All control documents and this receipt are committed **on the isolated branch** so that changing `main` cannot incidentally trigger an automatic Cloudflare Pages build contrary to the operator's no-deployment instruction. Main's handoff is not prematurely changed. When a future PR/merge is authorised, reconcile programme controls onto canonical main as part of the governed action.

**Next single decision:** authorise a *draft PR solely for GitHub Actions CI*, allowing any automatic **preview** build only if separately permitted; **still no production merge/deployment**, then review CI and diff before a distinct merge authority. Alternatively, retain branch without a PR and mark full CI outstanding. Do not imply that branch-level V8 tests satisfy release acceptance.

**A02 remains deferred:** 4/4 site assessment dates verified in browser; live MCP deployed-source and `date`/`recordedDate` parity explicitly deferred, NOT verified, A02 NOT accepted.
