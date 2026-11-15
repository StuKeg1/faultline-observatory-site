# FIP-A03 W-01/W-02 — Append-only administrative issuance clarification design

**Prepared:** 2026-11-15  
**Status:** DESIGN PREPARED — NOT AUTHORISED FOR IMPLEMENTATION, MERGE, OR DEPLOYMENT  
**Scope:** Two temporally misleading preparation/approval qualifiers in *already issued* FIP-A03 assessments and corresponding mutations. This file is programme administration; it does not change the canonical corpus.  
**Authority:** Operator authorised **design preparation** and separate W-03 PR status comment, but expressly withheld authority to change the records, FCIF or deployments. [Bounded finding review](../reviews/A03-POSTMERGE-WORDING-REVIEW-2026-11-15.md).  
**Production baseline:** [PR #255](https://github.com/StuKeg1/faultline-observatory-site/pull/255), merge `2a4b2f7c2623fb66f800e45e60aabd94eff88456`. [W-03 additive status comment](https://github.com/StuKeg1/faultline-observatory-site/pull/255#issuecomment-6902176617) is **already posted**; the original draft PR description remains untouched.

## 1. Exact immutable source anchors

| Finding | Record / canonical file | Assessment anchor, immutable field | Mutation anchor, immutable field | Current source blob |
| --- | --- | --- | --- | --- |
| W-01 | `FR-AM-0001`, `src/data/records/FR-AM-0001.js` | `assessments.find(a => a.id === "AS-006").assessorNote`; begins **“Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation.”** | `mutationLog.find(m => m.id === "M-017").note`; begins **“Operator-ratified FIP-A03 current-stage reconciliation, if separately authorised for implementation.”** | `197bfdbfc978b38a007b58238ea1562320729164` |
| W-02 | `FR-AM-0005`, `src/data/records/FR-AM-0005.js` | `assessments.find(a => a.id === "AS-005").assessorNote`; same opening prospective wording | `mutationLog.find(m => m.id === "M-022").note`; begins **“Operator-ratified FIP-A03 current-stage semantic correction, if separately authorised for implementation.”** | `ab98c513e69a9f52e03b9a4deda99a1ce7053a98` |

**Immutable baseline invariants:**
- FR-AM-0001 latest `AS-006` / `M-017`, date `2026-11-15`, `collapsed / VS-04`; preceding AS-005 remains `collapsed / VS-05`. Six assessments and 17 mutations.
- FR-AM-0005 latest `AS-005` / `M-022`, date `2026-11-15`, `collapsed / VS-04`; preceding AS-004 remains `collapsed / VS-05`. Five assessments and 22 mutations.
- Original notes, all older assessments and mutations, instances and sources, claim, FCIF, July `verificationStageReviews.js`, and other record fields remain byte-for-byte unchanged. No new AS/M ID and no change in scientific warrant.
- All three live retrieval surfaces (website, Worker full-record read, list/search `detail:full`) should expose **the original text alongside an expressly later qualification**, not rewrite the original field.

## 2. Chosen design: derived, bounded, append-only administrative annotation

**Recommendation:** Create an independently stored, immutable **administrative clarification overlay** keyed to a single record and both immutable source-entry IDs; *do not* add another scientific assessment or mutation. The model follows the precedent of `src/data/assessmentMutationReferences.js` and `src/data/verificationStageReviews.js`, but it is *not* a Verification Stage reconstruction or a mutation-reference reassignment.

### Proposed source file (not created in this design action)

`src/data/assessmentIssuanceClarifications.js` exports `ASSESSMENT_ISSUANCE_CLARIFICATIONS` and `getAssessmentIssuanceClarifications(record)`, with **exactly two frozen entries**, no generic rewrite engine. Proposed conceptual schema:

```js
{
  id: "FIP-A03-W01", // stable annotation ID, NOT AS/M
  recordId: "FR-AM-0001",
  assessmentId: "AS-006",
  assessmentField: "assessorNote",
  mutationId: "M-017",
  mutationField: "note",
  reviewDate: "2026-11-15", // the actual issued clarification date on implementation
  kind: "post_issuance_administrative_clarification",
  issue: "Conditional preparation-stage language retained after issue",
  originalSourceBlobSha: "197bfdbfc978b38a007b58238ea1562320729164",
  expectedAssessmentNotePrefix: "Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation.",
  expectedMutationNotePrefix: "Operator-ratified FIP-A03 current-stage reconciliation, if separately authorised for implementation.",
  text: "The conditional wording above records the earlier proposal and authorisation gate. This assessment and associated mutation were subsequently issued on 2026-11-15 and merged in PR #255. They are not awaiting authorisation. The original text is retained unchanged. This is an administrative status clarification, not a new assessment, scientific result, change in Verification Stage or Pressure State.",
  approvalReference: "docs/programmes/FIP-001/DECISIONS.md",
  mergeCommit: "2a4b2f7c2623fb66f800e45e60aabd94eff88456"
}
```

The second entry `FIP-A03-W02` uses `FR-AM-0005`, `AS-005`, `M-022`, original blob `ab98c513e69a9f52e03b9a4deda99a1ce7053a98`, the same assessment-note opening, and mutation prefix **“Operator-ratified FIP-A03 current-stage semantic correction, if separately authorised for implementation.”**

**Important temporal detail:** The illustration uses the programme's 2026-11-15 review date for convenience. When implementation occurs, use the **actual new clarification issuance date** and never backdate the newly published annotation. Keep the historical assessment and mutation dates at 2026-11-15 regardless. Generate the final two objects only after confirming this date and source state.

**Frozen source SHA nuance:** `originalSourceBlobSha` documents the *reviewed canonical input*, not a perpetual constraint on unrelated future valid additions. At implementation, additionally snapshot exact `assessorNote` and `mutation.note` strings or their secure hashes and guard them at runtime/test time; fail closed if either cited source value differs. A note-prefix check alone is insufficient to detect an unrelated source edit that changes the qualifier's context. A new unrelated record mutation should not by itself invalidate the annotation.

### Read-only applicability contract
1. Match `record.id` and **exactly one** `assessment.id` and `mutation.id`; fail on duplicates or missing targets.
2. Confirm assessment `date`, `changeKind`, `pressureState`, `verificationStage`, and mutation `date`, `field`, `from` and `to` match the reviewed A03 issuance; assert `AS-006/M-017` and `AS-005/M-022` respectively.
3. Confirm exact stored note text (or collision-resistant stored hash) and the expected preparation-stage phrase in the relevant field. On mismatch **do not display a potentially misleading qualification** and fail an explicit corpus integrity test. No silent fallback to an unrelated assessment.
4. Return an *immutable separate annotation projection*, never a mutated copy of `record.assessments[]` or `record.mutationLog[]` that replaces original author wording. A derived view may attach a separate `issuanceClarifications` property; preserve original fields and IDs.
5. Return empty for unrelated records. All annotations must be backed by a specific approval reference. No auto-generation by matching generic words “proposed”/“if authorised”.

## 3. Exact proposed public presentation

Current source is in `src/pages/FrontierRecord.jsx`:
- Current State Warrant displays `assessmentReadingView(record, current).assessorNote` as **Assessment context** at about lines 82–93.
- Assessment History's `RecordLineage` displays each `assessorNote` at about lines 286–300; the historical entry has stable anchor `#assessment-AS-006` or `#assessment-AS-005`.
- `MutationLog` displays the original `m.note` under **“What this update recorded”**, about lines 339–358. `data-mutation-id` identifies the source row.

**Render a compact, neutrally labelled “Post-issuance clarification · [actual date]” immediately *beside* the original note for only the two reviewed target entries** in all three contexts: State Warrant current assessor context, the matching Assessment History entry, and the matching mutation detail. E.g.:

> **Post-issuance clarification — [date]**: The conditional language above belongs to the proposal-stage text retained for historical traceability. The AS/M entry was authorised and issued on 15 November 2026 and merged via PR #255. This is not a new scientific reassessment; the current record remains COLLAPSED / VS-04.

- Keep the original note visibly accessible without modifying it. Do **not** substitute a rewritten assessor note in `assessmentReadingView` or `chronologicalReadingAssessment`.
- Link to the other affected entry (`#assessment-AS-006` for W-01 or `#assessment-AS-005` for W-02; mutation-row linkage should use a stable `id` attribute added to the row if implementation is approved, without changing its hover/pin behavior). A visible link to the FIP status receipt may be included with clearly different authority (administrative vs evidence).
- Do not imply there was a new Pressure State transition, evidence admission or a new scientific `AS` mutation. No “stage revised again” label.
- Ensure the annotation remains intelligible without the CSS styling and is keyboard/screen-reader navigable. Avoid duplicating an enormous paragraph in a top-level status badge.

## 4. Exact proposed MCP presentation

The live Worker imports `canonicalRecordView` from `src/data/mcpProjection.js` and returns it through `faultline_read_record`, `faultline_list_records({detail:"full"})`, and `faultline_search_records({detail:"full"})`. The current projection spreads the stored record and adds effective history and metadata.

**Proposed:** In `canonicalRecordView(record)` add `...(matches.length ? { issuanceClarifications: matches } : {})`. Retain `assessments`, `mutationLog` and `currentAssessment` exactly as previously projected. Each separate annotation carries stable `id`, `recordId`, `assessmentId`, `mutationId`, `assessmentField`, `mutationField`, `reviewDate`, `kind`, `text`, and PR/decision links.

- **Full read parity:** `faultline_read_record` and `list_records/search_records detail:"full"` must return the **same** `issuanceClarifications` array for each record. Verify both client protocol surfaces, not only a local function.
- **Summary policy:** `recordSummary(record)` should remain thin and unchanged; stage `VS-04`, state `collapsed`, dates, counts and claims must not be replaced by annotations.
- **Search:** existing search index may be left unexpanded for the initial bounded implementation; if users search the issue phrase, ensure that historical matches continue to be marked as history, never current scientific endorsement. Do not silently change search ranking or add the annotations to scientific source evidence.
- **Provenance:** Clarification text is *administrative metadata*, distinct from canonical scientific evidence and original `assessorNote` provenance. If the Worker is not redeployed, MCP parity for this new overlay must remain **unverified** and cannot be asserted from the website alone.

## 5. Proposed focused tests / release gate

| Test group | Required executable assertion |
| --- | --- |
| Target uniqueness | Exactly two entries, unique `FIP-A03-W01/W02` IDs, one each for W-01/W-02; correct immutable `recordId` + `AS` + `M` + field paths; no other record qualifies. |
| Fail-closed guard | Both source notes match exact frozen text (or hashes); wrong/missing/duplicated AS/M, altered source text, wrong date/stage/from-to reject; unrelated record addition does not hide valid clarification. |
| Preservation | Deep comparison to pre-change `FR-AM-0001.js`, `FR-AM-0005.js`: **zero diff**; unchanged `verificationStageReviews.js`, FCIF, evidence/source and assessment/mutation arrays. |
| Assessment history | Both old VS-05 assessments retained; current stages VS-04, both states COLLAPSED, count 6/5, mutation counts 17/22. No new AS/M ID, stage transition, or evidence admission. |
| Public presentation | W-01/02 shown adjacent to target original notes in current warrant/history/mutation log; nowhere else; links resolve; accessible markup; no original text lost. |
| MCP full parity | Full read, list full and search full show exactly the same annotation IDs/text/targets for both records; summary unchanged, third-party records untouched. |
| Frozen receipts | Historical checkpoint and source-integrity receipts still validate without rewriting source history. |
| Production | CI validation, lint, unit/structural tests, build + prerender, built-output tests, MCP Worker typecheck, and *separately authorised* website/Worker deployment followed by direct live browser and MCP field readback. |

**Regressions explicitly forbidden:** Any modification to `src/data/records/FR-AM-0001.js`, `src/data/records/FR-AM-0005.js`, `src/data/verificationStageReviews.js`, FCIF methodology, existing stage/pressure summary, or published PR #255 draft-body text; any newly asserted independent evidence, assessment or mutation.

## 6. Option comparison and decision required

| Option | Benefit | Cost / compromise | Recommendation |
| --- | --- | --- | --- |
| Separate guarded derived overlay (above) | Preserves stored history, provides linked public clarification and full MCP parity | Bounded frontend/projection code change, tests, separate release/Worker verification | **Preferred design**, pending independent implementation authorisation |
| Governance/PR addendum only | No canonical or runtime changes | Leaves misleading standalone public notes and MCP fields as-is | Fallback if display change declined |
| Direct in-place note rewrites | Simplest apparent text difference | Rewrites historical issued assessment and mutation objects; weakens append-only auditability | **Do not choose** without exceptional separate authority |

**Approval boundary:** This document **does not authorise** coding, PR, merging, Cloudflare deployment, full MCP Worker deployment, field rewriting, AS/M assignment or A03 acceptance. A future bounded implementation authority should name the exact two record IDs, overlay approach, actual annotation date, output surfaces, tests and isolation/no-merge gate. No A02 `date`/`recordedDate` parity test is implied.

## 7. Status of W-03 and following programme work

W-03 is **COMPLETED** via additive PR #255 [comment 6902176617](https://github.com/StuKeg1/faultline-observatory-site/pull/255#issuecomment-6902176617); the original CI-only PR description is preserved. W-01 and W-02 remain **design prepared, implementation not authorised**.

FIP-A03 live Pages and independently reported MCP data-parity evidence is unchanged, but **formal A03 ACCEPTED** awaits its distinct operator action. FIP-A02 MCP `date`/`recordedDate` parity remains deliberately **deferred and NOT ACCEPTED**. FIP-A04 remains the next separate public-history wording package after A03 disposition.
