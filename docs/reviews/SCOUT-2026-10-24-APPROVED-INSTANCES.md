# Approved Scout instances — 24 October 2026

## Authority and implementation manifest

The operator completed Post-Scout Human Record Review v1.6 in original flag order, choosing INSTANCE for each, then explicitly issued:

> AUTHORISE CORPUS IMPLEMENTATION FOR ALL APPROVED 24 OCTOBER 2026 FLAGS.

Canonical decision and implementation queue: [Cycle Completion Record](https://docs.google.com/document/d/1u0JZ2VoGNq3RJy4KCrGD6RM__0i_Pr1zsFuC24sme2Q/edit), §§8–11.

Completed source report: [24 October Frontline Scout](https://docs.google.com/document/d/1fMfICeaaJ7Xd5hL2N8HpAQ9IzFpRpAjsT3JeT2UpcEM/edit).

Pinned review SHA and freshly verified implementation base: `accbbbe0846d0555117065f743fe0f85343c2e82`. No intervening drift. The release changes the two approved record files, this implementation receipt and a necessary metadata-only prerequisite repair in FR-BT-0006. No infrastructure, secrets, settings or manual deployment actions are required; main automatically triggers Pages and canonical MCP deployment.

| Flag | Source | Approved target and new object | Mutation | Orientation |
| --- | --- | --- | --- | --- |
| 2026-10-24-01 | [NeST, arXiv:2610.28538v1](https://arxiv.org/abs/2610.28538v1) | FR-QE-0008 / IN-010 | M-020 | NEUTRAL: model-level architecture and suppression pathway |
| 2026-10-24-02 | [ExpEvolve, arXiv:2610.29303v1](https://arxiv.org/abs/2610.29303v1) | FR-AI-0007 / IN-015 | M-026 | NEUTRAL: bounded supplied-evaluator search |
| 2026-10-24-03 | [RIDAR, arXiv:2610.31372v1](https://arxiv.org/abs/2610.31372v1) | FR-AI-0007 / IN-016 | M-027 | PARTIAL: integrity failures and partial runtime mitigation |

Both QE targets survived direct mapping, but the operator approved an instance only in FR-QE-0008. FR-QE-0004 is unchanged. NeST's simulated timing and extrapolated logical error are not hardware measurements; the tenfold shuttling-improvement assumption remains explicit. ExpEvolve is an extension of March CausalEvolve, not independent corroboration; benchmark improvement is not independently verified novel science. RIDAR's detector-defined findings, same-detector endpoint, selected tasks, deliberately unenforced limits, interested authorship and incomplete repair are retained. No intent or universal failure-rate inference is made.

All existing instances and mutations remain intact. All assessments, canonical claims, mechanisms, questions, lineage, provenance review metadata and status remain intact. FR-QE-0008 retains AS-005 / RESOLVING / VS-04; FR-AI-0007 retains AS-004 / FRAGMENTING / VS-03. Historical AI IN-010 / AS-005 / M-020 remain reserved; this release does not implement their separate recovery. The identical identifier strings used in QE-0008 belong to a different record namespace.

## Validation

Validation results are recorded below before commit. Deployment status and source-post discovery are recorded in the durable Cycle Completion Record after main and live verification; this committed receipt does not pre-assert a deployment outcome.

## Build-blocking prerequisite repair

The initial full-corpus validation failed on the unchanged baseline: FR-BT-0006 had two M-007 identifiers. Commit d84d4bd (PR #194) added the 22 October LPR-001-D58 mutation using the identifier already assigned to the 19 October shared-source mutation. No existing external or relationship reference to the newer M-007 was found. The newer entry is re-identified as unused M-008 with originalId M-007 preserved; date, event fields and full note are unchanged. A new M-009 dated 24 October explicitly records the correction. This is an identifier correction necessary to unblock the required build, not new evidence or reassessment. FR-BT-0006 evidence, assessments, claim, state/stage, provenance outcome and other content remain unchanged. No validator exception or relaxed gate is introduced.

## Historical receipt and test maintenance

New machine-readable whole-record receipts cover the two approved appends and the identifier repair. They validate current content and reconstruct the exact prior hashes, rather than replacing frozen hashes or relaxing historical integrity tests. Historical D58 and D60 metadata-only review receipts were also needed because those pre-existing reviews had advanced provenance metadata beyond earlier frozen checkpoints. The D32 correction test now checks D32 at its historical checkpoint and D60 as current. The update-summary test retains the 17/19 October cases and checks that two 24 October instances do not imply a reassessment. Two test files and five JSON receipts are therefore included in the implementation manifest. Generated record sitemap dates are included; deployment.json remains build-generated and uncommitted.

## Completed local verification

- Node 22.23.4 / npm 10.9.9; clean locked dependency installs.
- Full canonical validation passed, including structured provenance and canonical MCP alignment. Three pre-existing mutation-order warnings remain unchanged.
- Production build passed, including dependency coherence and prerendering all 62 indexable pages. Existing bundle-size warning retained.
- All 208 built-output tests passed with zero skips; lint passed with zero errors and one existing Fast Refresh warning; MCP typecheck passed.
- Exact comparison against the implementation base confirms all pre-existing QE-0008 and AI-0007 instances/mutations and every other field are unchanged. New-instance removal and logged-mutation removal reconstruct the original objects exactly. BT-0006 likewise reconstructs exactly by reversing only the explicit identifier correction.
- Derived current assessment, complete assessment history, transition feed and compact trajectory remain identical; each affected record appears once in the Current Register and all 32 records remain indexed. No new assessment node is expected in graph, Current Register, Trajectory Records or chronological equivalent.
- Built HTML contains NeST with extrapolation limits, ExpEvolve with CausalEvolve lineage, and RIDAR with mitigation limits. Both affected trajectory cards, graph membership and chronological assessment counts verified. No layout or interaction code changed; no new visual/responsive claim is made.
