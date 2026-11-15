# FIP-001 — Active hand-off (isolated FIP-A03 branch)
**As-of:** 2026-11-15
**Scope of this hand-off:** This version exists on the non-production branch `fip-a03-am-stage-reconciliations-20261115` **only**. The authoritative `main` hand-off is intentionally unchanged, since pushing to main could automatically deploy Cloudflare Pages and the operator forbade deployments in this action. Reconcile on main only after appropriate release authorisation.
**Programme:** FIP-001 / Wave 1
**Current milestone:** M0 ACCEPTED; FIP-A01 ACCEPTED WITH EXCEPTIONS; FIP-A02 MERGED / PUBLIC SITE 4/4 VERIFIED / MCP PARITY DEFERRED (NOT ACCEPTED); **FIP-A03 IMPLEMENTED ON ISOLATED BRANCH; TARGETED CHECKS PASSED; FULL CI NOT RUN; MERGE AND DEPLOYMENT NOT AUTHORISED**.

## Branch source of truth
**Detailed implementation and tests:** [A03 isolated implementation receipt](reviews/A03-ISOLATED-IMPLEMENTATION-2026-11-15.md).
**Original proposal:** [Exact A03 correction objects](proposals/A03-TWO-RECORD-APPEND-ONLY-STAGE-CORRECTIONS-2026-11-15.md).
**Authority:** User explicitly authorised implementation on isolated branch only, focused tests and executable validation; prohibited merge/deployment.

- Base main commit `d909510267b43f4aca943255a72c84f9687ae4d2`; branch `fip-a03-am-stage-reconciliations-20261115`.
- FR-AM-0001: append AS-006 and prepend M-017 on 2026-11-15. Current **COLLAPSED / VS-04** only on branch. Former AS-005 **COLLAPSED / VS-05** retained; cold-fusion independent null replication warrants stage, 2025/26 beam-driven fusion does not satisfy autonomous-cell operation.
- FR-AM-0005: append AS-005 and prepend M-022 on 2026-11-15. Current **COLLAPSED / VS-04** only on branch. Former AS-004 **COLLAPSED / VS-05** retained; LK-99 adversarial reproduction warrants VS-04 while LaSc₂H₂₄ synthesis-equivalence caveat prevents universal null. No new evidence.
- Exactly two canonical record files plus four test-only files changed, with 34 canonical lines added and zero removed; no FCIF, July overlay, other records or production code projection changes. Test-only 24-Oct checkpoint adapter handles AM-0005's later append-only correction for frozen comparison.
- Targeted executable V8 checks **30/30 PASSED**; exact new focused tests executed under V8 adapter **3 cases / 84 assertions PASSED**; six changed source/test paths syntax checked. Existing historical test expectations updated on branch. **Full Node npm tests, lint, validation, build, typecheck and GitHub CI NOT RUN**; local checkout inaccessible.
- No PR opened, no merge to main, no site/MCP production deployment. [Complete GitHub branch diff](https://github.com/StuKeg1/faultline-observatory-site/compare/d909510267b43f4aca943255a72c84f9687ae4d2...fip-a03-am-stage-reconciliations-20261115).
- FR-AI-0008 VSC-001 remains a separate unresolved stage challenge. Public copy clarification A03-05 and A04 are not bundled.

## A02 deliberately outstanding
[PR #254](https://github.com/StuKeg1/faultline-observatory-site/pull/254) merged `8b624e6af97822515ec3f98a44e70c2226d6a7d5`, Pages build shown, 4/4 public assessment histories verified directly. Live MCP deployment SHA and full `date`/`recordedDate` parity **deferred by operator**, not verified, A02 **not accepted**. [A02 receipt](receipts/A02-2026-11-15-POSTMERGE-BLOCKED.md).

## Exactly one next recommended action
Seek **separate permission to open a draft PR solely for GitHub Actions CI and, only if explicitly permitted, automatic Cloudflare preview**. This does not authorise production merge/deployment. Inspect complete CI and proposed diff, then request a fresh merge decision. If no PR permission, retain branch and note full suite outstanding. Preserve all current historical source files and case-specific wording.

After release decision, A04 is the next programme audit. Never mark FIP-A03 ACCEPTED before independent production verification including MCP if applicable.
