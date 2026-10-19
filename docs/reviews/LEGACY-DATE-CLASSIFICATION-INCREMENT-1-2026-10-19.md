# Legacy date classification — increment 1

Date: 19 October 2026. Base: `5194d6b90ed192eb9b931430e9f577cbee60fef2`.

## Result

Inspected the retained original HTML for all 23 unqualified legacy AS-001 entries: QE-0002–0008, AI-0001–0007, AM-0002–0006 and BT-0001–0004. Each original already says `ISSUED: 2024-01-15`; each also has that literal in RECORD OPENED. None establishes when the assessment was actually issued. Classification: **23 unknown; zero verified dates; zero demonstrated converter substitutions in this cohort**. This is a provenance finding, not a declaration that the dates are genuine.

The [23 July ratification](https://docs.google.com/document/d/1aDpuzdV01cWV9ZOZ17r_R1UbrUDJqUPoKH6b359kJhA/edit) identifies the notional cohort as sharing a common converter fallback and says their storage dates remain provenance-suspect. The retained inputs reveal an additional distinction: the placeholder was already present before the converter version inspected here. Its earlier origin remains unestablished. Do not dismiss the ratified limitation merely because the literal predates conversion, and do not attribute every literal to a substitution this converter did not perform.

Positive control outside the 23: AM-0001 AS-001 says “notional — March 1989” and AS-002 says “notional — mid-1989”. `extractAssessments` demonstrably converts both to 2024-01-15. Their existing individually reviewed historical overlays remain untouched; AS-003 contains the literal and is not another demonstrated substitution.

## Review evidence and boundaries

The companion JSON records each source file ID/URL, retrieval metadata, assessment metadata excerpt, classification, reason and next action. `restorationReceiptTextSha256` refers to the earlier restoration receipt, where available; it is not claimed as a new hash of the current download. Source modification timestamps are not treated as assessment dates. The inspection retrieved readable HTML through authenticated Drive access; no source file was changed.

No dates, questions, claims, mutations, assessments, stage rulings, derivation helpers or runtime overlays are changed by this PR. The register is review material, not a new canonical date authority. The existing AI-0008 and AM-0001 overlays are outside the migration scope. Verification Stage reconstructability does not establish a date.

## Next bounded increment

Seek contemporaneous authoring or decision provenance for a small group first. If no actual date can be recovered, consider individually reviewed date-uncertain display overlays using the existing mechanism. Keep stored dates append-only and distinguish record-opened, assessment-issued, state-entry and question-raised semantics. Do not blanket replace dates, borrow a publication date as an assessment date, or migrate the 23 from this classification alone.

## Validation

Checked all 23 rows against current AS-001 storage values and retained source excerpts; checked unique IDs and classification counts. Verified the positive control against the converter rule. Git diff contains these two review documents only, so production content and rendering are unchanged.
