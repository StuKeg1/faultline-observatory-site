# Evidence-entry status notices — Batch 3 / R02

19 October 2026. Direct-session authority: Stuart instructed execution of Batches 2 and 3 in the amended corpus-audit order. This is Batch 3 only, prepared as its own reviewable PR. Merge and deployment require a separate instruction.

Base: `191939de18ae6cff548472435372120a8a682f80`.

## Decision boundary

Expose dispositions already recorded in the corpus and governed source reviews. This change makes those limitations visible before an entry's expandable description; it does not complete a pending scientific correction or create an assessment verdict.

| Record / entries | Explicit status | Retained authority |
| --- | --- | --- |
| QE-0003 IN-001–IN-004 | Correction pending | LPR-001-D15 / M-013; entry-specific factual and metric discrepancies are recorded there; record outcome remains discrepancies_found / pending. |
| BT-0001 IN-004 | Legacy attribution withdrawn | LPR-001-D25 / M-009; corrected description and vector withdraw the unsupported trial bundle and distinguish MILES sirolimus from D+Q. |
| AI-0006 IN-005 | Excluded from current evidence basis | LPR-001-D06 / M-012; unsupported geometry attribution withdrawn, not retrofitted to new sources. |
| AI-0007 IN-005 | Excluded from current evidence basis | LPR-001-D07 / M-016; bundled institutional-restructuring attribution withdrawn. |
| AI-0001 IN-003 | Unverified legacy attribution | LPR-001-D33 / M-012; [retained correction receipt](./../provenance/LPR-001-D33-FR-AI-0001-CORRECTION.md) records that attribution, problems and scoring could not be recovered. |
| AI-0008 IN-005 | Excluded from current evidence basis — existing control | LPR-001-D08 / M-008; already displayed by a record-specific helper. Its existing public notice is preserved verbatim through the generalized mechanism. |

All authorities above were checked against the current canonical descriptions, vectors and retained mutations. The purpose is status visibility, so no fresh scientific finding is inferred and no publication is labelled retracted. Later passing record-wide reviews do not erase an explicitly retained entry-level exclusion or unresolved attribution.

## Implementation manifest

- Add `evidenceStatus: { kind, reviewId, mutationId }` to the nine specified entries in six records. The review and mutation identify the existing authority, rather than fabricating a fresh source or copying scientific summaries into another field.
- `evidenceReadingStatus` renders a fixed plain-language notice for the four explicit kinds: `pending_correction`, `withdrawn_attribution`, `excluded`, `unverified`. It requires record membership, a review reference and an existing mutation ID. Missing/unknown status kinds or broken mutation references return no inferred notice.
- Source absence, polarity tags and narrative wording do not classify status. Adding a citation alone does not clear a governed exclusion; an authorised review must explicitly update the status metadata and its authority.
- The withdrawal notice explicitly concerns the legacy attribution, not withdrawal/retraction of the cited publication. This matters for BT-0001: its valid MILES registration identifies a different intervention and does not substantiate the old senolytic-trial bundle.
- Existing list-level status paragraph is reused; no new component, CSS or page ordering. Notices remain outside each entry's inner scientific-description disclosure and use visible text rather than color alone.
- Append editorial `reference_corrected` metadata mutations: QE-0003 M-014; BT-0001 M-012; AI-0006 M-023; AI-0007 M-025; AI-0001 M-017; AI-0008 M-017. These are not new assessments or scientific activity-feed events under the existing classifier.
- The historical provenance checkpoint helper strips only later receipt-backed status metadata before comparing original scientific-content hashes. Original hashes remain unchanged. The older AI-0007 admissions test is pinned to its 17 October mutation cutoff and additionally verifies that today's status annotation is editorial-only.

The metadata is part of the record's structured content and therefore travels through the existing full MCP projection. It adds no separate MCP judgment, summary or alternate source of assessment authority.

## Explicit exclusions

- Do not complete QE-0003's pending correction, guess its citations or change its current assessment.
- Preserve BT-0001 IN-004's title exactly. Correcting that historical title requires its own editorial scope; the status notice does not disguise a title rewrite.
- No substitute citations for unresolved AI entries, changes to scientific descriptions, entry counts, source lists, assessments, dates, claims, stages, Pressure States, review outcomes or historical overlays.
- No mutation classifier/feed policy, layout, newcomer instruction or test-assignment change. Batch 2 continuity relationships are a separate PR.

## Validation

- Node 22 / npm 10; full build, canonical validation and 62-page prerender pass.
- Full suite: 196 tests pass against built output; focused reading tests 19/19 pass.
- Lint passes with no errors; one existing unrelated Fast Refresh warning remains.
- Corpus-wide before/after comparison confirms only nine explicit status objects and six appended mutations changed. All 32 records' assessments, scientific descriptions, titles, sources, counts and prior mutations compare identically.
- Tests cover each status class, unknown kinds, missing mutation targets, prototype-like unknown keys, citation additions that do not silently clear an exclusion, and source/polarity changes that must not create one.
- Built HTML checks verify exactly one notice for each of the nine entries, outside its inner expandable description; AI-0008 retains the existing notice. There is no doubled notice or new title label masquerading as an assessment.
- `git diff --check` passes. No merge or production deployment executed.

## Maintenance and remaining work

When a future governed review resolves or changes an entry's limitation, explicitly update/remove its status and record that decision in a new mutation. The helper deliberately does not infer resolution from a new citation or from a passing whole-record source review.

Status visibility closes the audit's presentation gap, not the underlying provenance debt. Pending QE corrections, excluded/unverified source recovery and BT-0001 title wording retain their separate decision boundaries. The active newcomer material remains unchanged; AI-0008's existing control notice is preserved.
