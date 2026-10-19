# Record update semantics and compact state explanations

19 October 2026. Authority: Stuart's approval on 18 October of the scoped wording and guarded classifier implementation, continued on 19 October. Direct-session origin. This is recommendation 2 from the newcomer review, not the retained-question placement change.

## Authority and wording

- Public Methodology, Pressure State definitions: https://faultlinewatch.com/methodology/ . Operator-approved RELEASE-029 and RELEASE-030 establish the full six-state copy; those definitions are preserved exactly.
- Operational Activity Taxonomy & Qualification Policy v0.4: https://docs.google.com/document/d/1RmNgXTfY_MWQU1bueCM2ItTfNoU3UBeKMULfSKdd5Mg/edit . Type detection remains separate from homepage qualification. No qualification rule changes.
- The agreed compact wording is a rendering aid, not a new classification rule or an assessment of any record. Escalating expressly allows increasing confidence in OR pressure on a claim; it is not a success score.

## Implementation manifest

- pressureStates.js: holds existing full Methodology definitions and operator-approved compact explanations together; legacy/unknown states direct readers to the State Warrant without inventing a meaning.
- Methodology.jsx: consumes that registry for the unchanged full definitions. The definitions destination receives keyboard focus and scrolls into view after route loading.
- recordReading.js: derives all supported event types on the latest recorded mutation date, deduplicating labels without ranking their significance. Evidence counts require distinct, unambiguous, existing evidence IDs. Unknowns say “Record updated—see change log”. No separate narrative brief or update field is stored.
- FrontierRecord.jsx/CSS: visible compact explanation beside the first state badge, with a State definitions link; Latest record update plus event descriptions and change-log link; Last Assessment remains separate. No hover-only content.
- mutationClassifier.js: an assessment event target resolves only when it contains exactly one distinct AS-NNN identifier that exists in the record. Ambiguous, missing or unknown targets remain unclassified. Only genuine creation-day structural placeholders retain creation-batch classification.
- derive.js: a qualifying assessment_correction feed entry says “Assessment correction recorded”, avoiding an implication of newly observed capability.
- mutationClassifier.test.js and recordReading.test.js: exact classification exceptions, guarded targets, latest-day aggregation, real source-check and stage-correction cases, evidence-count provenance, unchanged canonical objects and all six compact explanations.

No record, assessment, evidence, source, mutation or historical overlay is changed. AI-0008's current VS-05 remains under review; this implementation does not ratify it or create AS-005. The distributed newcomer comparison is unchanged (SHA-256 53ed29dd528ca3b74508ea5f9eac774a53635bd59899b769b8126345693661ce). No experimental comprehension/referral improvement is claimed.

## Classifier impact audit

All 13 affected entries previously returned creation_batch_internal. Six become correctly identified assessment updates with unchanged axes. One becomes a Verification Stage change under existing policy. Six become explicitly unresolved; none is dropped from the changelog.

| Record / mutation | New type | Homepage eligibility change |
| --- | --- | --- |
| QE-0002 M-005 | assessment_reissued_no_state_change | None: excluded |
| AI-0008 M-009 | assessment_reissued_no_state_change | None: excluded |
| AM-0001 M-010 | assessment_reissued_no_state_change | None: excluded |
| AM-0002 M-010 | assessment_reissued_no_state_change | None: excluded |
| BT-0004 M-012 | assessment_reissued_no_state_change | None: excluded |
| BT-0005 M-008 | assessment_reissued_no_state_change | None: excluded |
| AI-0008 M-013 | assessment_verification_stage_changed | Becomes eligible; label is Assessment correction recorded |
| QE-0001 M-003 | unclassified | None: excluded |
| AI-0001 M-007 | unclassified | None: excluded |
| AM-0006 M-009, M-013, M-015 | unclassified | None: excluded |
| BT-0004 M-007 | unclassified | None: excluded |

The six unresolved events are recorded in Outstanding Work Queue as a separate metadata-reference candidate. Some use a generic ASSESSMENT-ISSUED placeholder after creation; QE-0001's entry describes an approximate historical assessment without a current target. This release does not infer links from narrative notes. QE-0001's closed inquiry is not reopened. Qualification remains fail-closed for these six entries, exactly as for any unknown type.

## Verification and handover

Production build and canonical validators passed; 181/181 built-output tests passed; lint zero errors with one existing fast-refresh warning; MCP typecheck passed. All six full Methodology definitions were compared with their pre-release literals and are identical. No canonical record files differ. Built links and output checked on AI-0007/0008, AM-0007, BT-0005 and structural records QE-0001/AM-0001/BT-0001. Public live deployment verification is recorded in the Release Archive after release.

The short latest-day block is complete for detected event TYPES, not a reconstruction of within-day order or causal relationships. The last assessment date does not automatically follow an evidence or source-review date. Retained-question prominence remains a separate approved recommendation, not implemented here.
