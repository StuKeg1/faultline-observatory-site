# FIP-A03 — W-01/W-02 append-only issuance-status clarification design

**Date:** 2026-11-15  
**Status:** DESIGN PREPARED ON NON-PRODUCTION BRANCH; NO IMPLEMENTATION OR DEPLOYMENT AUTHORISED  
**Authority:** Operator approved preparation of a bounded administrative clarification design for W-01/W-02 with exact assessment/mutation locators, source preservation, public and MCP presentation, and tests. Separately authorised the W-03 PR #255 post-merge comment, now posted. This does not authorise code implementation, changes to canonical records, FCIF or deployment.  
**Review basis:** [W-01–W-03 evidence-only review](../reviews/A03-POSTMERGE-WORDING-REVIEW-2026-11-15.md).  
**Base:** canonical `main` `00fded4e1f45e6e49f99f3fc00326b18c5b10119` (at design branch creation).

## 1. Problem and non-goals

The issued 2026-11-15 stage-correction objects contain preparatory language: `Proposed FIP-A03 ... issuance date to be confirmed at implementation` and `if separately authorised for implementation`. The operator later authorised implementation and separately authorised merge; [PR #255](https://github.com/StuKeg1/faultline-observatory-site/pull/255) merged at `2a4b2f7c2623fb66f800e45e60aabd94eff88456`. The literal source wording is historical truth about the preparatory phase, but without an adjacent dated qualifier its presentation makes final issuance sound unresolved. This is an **administrative presentation defect**, not a new scientific claim, evidence admission, assessment, mutation or change of Pressure State/Verification Stage.

**Strict non-goals:** No rewrite of assessment summaries or assessor notes, no alteration of existing `mutationLog` entries, no new AS-/M- identifiers, no changes to evidence instances, source provenance, claim boundaries, prior assessment chronology, July `verificationStageReviews.js`, FCIF rules, or FIP-A02 MCP `date`/`recordedDate` parity. No automatic FIP-A03 ACCEPTED transition.

## 2. Four exact immutable source locators

| Case | Source path | Canonical subobject + field | Original text to recognise | Reviewed blob at design time |
| --- | --- | --- | --- | --- |
| W-01a | `src/data/records/FR-AM-0001.js` | `assessments[].id === "AS-006"` → `assessorNote` | `Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation.` | `197bfdbfc978b38a007b58238ea1562320729164` |
| W-01b | same | `mutationLog[].id === "M-017"` → `note` | `Operator-ratified FIP-A03 current-stage reconciliation, if separately authorised for implementation.` | same |
| W-02a | `src/data/records/FR-AM-0005.js` | `assessments[].id === "AS-005"` → `assessorNote` | `Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation.` | `ab98c513e69a9f52e03b9a4deda99a1ce7053a98` |
| W-02b | same | `mutationLog[].id === "M-022"` → `note` | `Operator-ratified FIP-A03 current-stage semantic correction, if separately authorised for implementation.` | same |

**Snapshot assertion:** before any future implementation, re-fetch `main` and validate each object is unique and still contains the quoted exact prefix. Reject implementation if drift is detected. Use full exact source string (not only prefix) as the binding snapshot: otherwise the annotation could silently attach to a revised assessment or a different mutation. The reviewed source blobs above are a provenance baseline, not a license to override concurrent changes.

## 3. Proposed append-only, read-only metadata

**Preferred design: a small independent correction-annotation register**, modelled after the repository's existing derived review mechanisms (`src/data/assessmentMutationReferences.js` and `src/data/verificationStageReviews.js`), but with **distinct administrative semantics**.

Proposed new module: `src/data/issuanceStatusClarifications.js`. This is a *designated administrative annotation store*; it must not be merged into canonical `assessments` or `mutationLog` and must never masquerade as an evidential stage review.

Proposed minimal data structure (illustrative only; **not executable or committed code**):

```js
export const ISSUANCE_STATUS_CLARIFICATIONS = [
  {
    id: "FIP-A03-ISC-001", // annotation ID, NOT a canonical AS or M ID
    recordId: "FR-AM-0001",
    assessmentId: "AS-006",
    mutationId: "M-017",
    reviewDate: "2026-11-15",
    scope: "issuance_authority_status_only",
    expectedAssessmentNote: "<exact complete canonical AS-006 assessorNote text>",
    expectedMutationNote: "<exact complete canonical M-017 note text>",
    mergeCommit: "2a4b2f7c2623fb66f800e45e60aabd94eff88456",
    text: "This assessment and mutation were issued on 2026-11-15 after separate operator approvals. Their prospective wording records the earlier preparation gate; it does not mean the issued correction remains proposed or unauthorised. No scientific or historical determination is changed."
  },
  {
    id: "FIP-A03-ISC-002",
    recordId: "FR-AM-0005",
    assessmentId: "AS-005",
    mutationId: "M-022",
    reviewDate: "2026-11-15",
    scope: "issuance_authority_status_only",
    expectedAssessmentNote: "<exact complete canonical AS-005 assessorNote text>",
    expectedMutationNote: "<exact complete canonical M-022 note text>",
    mergeCommit: "2a4b2f7c2623fb66f800e45e60aabd94eff88456",
    text: "This assessment and mutation were issued on 2026-11-15 after separate operator approvals. Their prospective wording records the earlier preparation gate; it does not mean the issued correction remains proposed or unauthorised. No scientific or historical determination is changed."
  }
];
```

The proposed IDs are annotations only; they do not imply authorisation to assign any canonical mutation or assessment IDs. At implementation, verify annotation ID uniqueness against any existing register. If an equivalent governed administrative overlay already exists, reuse it instead of creating a second parallel system; this design is based on the existing references inspected on 2026-11-15.

**Fail-closed lookup rules:** `getIssuanceStatusClarification(record, {assessmentId, mutationId})` must return a clarification only if precisely one annotation matches `record.id`, both target IDs exist exactly once, the full `assessorNote` and `mutation.note` equal the stored exact expected snapshots, the assessment and mutation dates are `2026-11-15`, `changeKind` is `verification_stage_correction`, `pressureState` is `collapsed`, `verificationStage` is `VS-04`, and the mutation's `from`/`to` string is the expected VS-05 → VS-04 transition. Otherwise **suppress the clarification, fail an associated validation test and surface a diagnostic**. Do not rewrite the source to fit the annotation.

## 4. Public presentation contract

Relevant actual renderer: `src/pages/FrontierRecord.jsx`.
- `WarrantPanel` at lines approximately 82–93 renders `reading.assessorNote`.
- `RecordLineage` at lines approximately 273–310 renders assessment history and historical assessor notes.
- `MutationLog` at lines approximately 324–359 renders original mutation text in an expandable `details` block.

Design three bounded, **additive** placements, all driven by the *same* validated annotation lookup: (a) immediately after current assessment context in the State Warrant; (b) directly below each identified assessment's note in the Assessment History; (c) immediately after the identified mutation's original `note` within its existing disclosure. Suggested visible label: **"Post-issuance clarification (15 Nov 2026)"**. Explicit text: original prospective/conditional language is retained verbatim, but the operator subsequently authorised issuance and merge, so the correction **is not pending**. Link to PR #255 merge/receipt, not to external third-party claims.

Do **not** replace `reading.assessorNote`, `summary`, `note`, any stage badge or timeline date, or modify historical `OriginalAssessmentWording` semantics. Do not attach this overlay to other records; no global replacement of phrases. Ensure accessible text without hover dependence; keep it compact and visually subordinate to the original assessment. If possible, use a single reusable component and a single lookup helper across all placements, not three independent hand-authored strings.

## 5. MCP presentation contract

Actual projection: `src/data/mcpProjection.js` exports `canonicalRecordView(record)` and `recordSummary(record)`, importing `getAssessmentHistory` / `getCurrentAssessment`. The remote Worker `faultline_read_record` and full `faultline_list_records` / `faultline_search_records` rely on that derived projection.

**Preferred addition to full view only:** optional top-level `issuanceStatusClarifications: [{id, recordId, assessmentId, mutationId, reviewDate, scope, text, mergeCommit}]` derived from the same validated overlay, present only for the two eligible records. Do not modify or replace `assessments[]`, `currentAssessment`, `mutationLog[]`, `transitionFeed`, stage/status, or existing `assessmentMutationReferenceReviews`. Exclude the `expectedAssessmentNote` and `expectedMutationNote` internal matching snapshots from the public payload unless explicitly required for audit; original text remains visible in the unaltered record.

**Summary view** (`recordSummary`): retain existing field contract unchanged; no extra status field or unreviewed counting changes. **Search:** full results inherit the clarification via `canonicalRecordView`; summary search stays unchanged. Check tool discovery/documentation and update only as required for the new optional full-record field. Do not change A02 historical date classification or implementation.

**Rollout note:** GitHub merging a future code implementation can trigger Pages and Worker deployment. This design does **not** authorise such deployment, even on a non-production branch. Future tests need both a build/preview gate and independently checked live Pages and MCP projections after a separately authorised merge.

## 6. Exact proposed tests and acceptance gates

1. **Source immutability:** compare the two complete record source blobs and canonical objects before/after implementation; assert both `src/data/records/FR-AM-0001.js` and `src/data/records/FR-AM-0005.js` byte-identical to their reviewed baseline (unless separate changes explicitly authorised, in which case stop for reconciliation). All original AS/M IDs, dates, notes, evidence, July overlays and FCIF files unchanged.
2. **Overlay binding:** positive matches only for the two exact `recordId + assessmentId + mutationId` triples; no match for other records, older assessments or mutations. Validate uniqueness, expected text, scope, dates, exact `from/to` and current `collapsed / VS-04`. On any forged/missing/stale target, lookup returns no annotation and a validation test fails.
3. **Current status invariants:** current AS-006/M-017 and AS-005/M-022 remain `collapsed / VS-04`, prior AS-005/AS-004 remain `collapsed / VS-05`; assessment/mutation counts remain **6/17** and **5/22**. No mutation chronology or latest-update date changes.
4. **Public rendering:** for each record, the post-issuance clarification renders in State Warrant, Assessment History and matching Mutation Log detail, while the historical original conditional wording remains available. Non-target records show no qualifier. Keyboard and screen-reader discoverability tested.
5. **MCP parity:** `faultline_read_record` and full `faultline_list_records` / `faultline_search_records` include the same two optional clarification objects. All other existing full-record fields, including assessment history, exactly match unmodified canonical source. Summary/search thin views remain unchanged. No additional annotation appears on unrelated records.
6. **Build/release:** GitHub Actions corpus validation, LPR queue, lint, unit/structural tests, build/prerender, built-output assertions and Worker typecheck all PASS. Diff must show only annotation source, targeted renderer/MCP projection and narrow regression tests / operator-governed docs. Verify production only after separate merger/deployment authority.
7. **Evidence of original authorisation:** PR #255 is already closed/merged and [W-03 additive post-merge comment](https://github.com/StuKeg1/faultline-observatory-site/pull/255#issuecomment-6902176617) is published; original PR body intentionally preserved. No W-03 source modification required.

## 7. Risks and choices to ratify before implementation

- **Preferred:** one overlay entry per record covering both fields, one shared lookup, optional full-MCP field, local display near originals. This is proportionate, reversible, low-impact and audit-friendly.
- **Alternative:** documentation/PR comment only (zero production code) leaves live readers and MCP clients exposed to unresolved-sounding wording. Do not select without explicit operator decision.
- **Rejected as default:** direct in-place note rewrites (would destroy original issued text); new AS or M entries (would falsely imply a new stage/evidence or mutate history); a second independently authored scientific state.
- **Compatibility:** the public site contains pre-existing editorial rendering helpers; reuse existing styling where appropriate without conflating this administrative status with scientific editorial interpretation. MCP full views are explicitly derived; avoid maintaining a parallel version of the record in the annotation.
- **Fail-closed behavior:** absent/mismatched snapshot must be visible to CI as a regression, not masked by string matching or the absence of a user-facing annotation.

## 8. Status and hand-off

**Prepared only; no code, canonical records, FCIF, PR body, assessments, mutations, live MCP Worker or public website altered by this design.** Design branch: `fip-a03-wording-clarification-design-20261115`, originating from canonical `00fded4e1f45e6e49f99f3fc00326b18c5b10119`.

**Next distinct operator decision:** approve *implementation of the narrowly specified append-only administrative annotation on a non-production branch*, and whether a draft PR for CI/preview is permitted. Approval of this design alone does not authorise merging or production deployment. Preserve FIP-A02 historical `date`/`recordedDate` MCP parity as deferred and never report FIP-A03 formal acceptance without its separate operator disposition.
