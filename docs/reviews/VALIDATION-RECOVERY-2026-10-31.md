# Validation recovery — 31 October 2026

Authorised by the operator's instruction to fix the blocked implementation. No scientific evidence or assessment from the baseline is edited.

## Provenance status
FR-QE-0004 M-020 already records completed, operator-approved D65 corrections. Current discrepancies_found/completed is an invalid pair. Outcome is reconciled to discrepancies_corrected with new M-022; the historical finding remains preserved. All other fields reconstruct to baseline.

## Historical integrity
Frozen tests incorrectly assumed late-October reviews had not advanced the records. Test-only reconstruction now uses field-level previous/current receipts anchored to last-24-October main 8d8968ef683118f00b43f05df7d646d3b7fb84dc and current pre-implementation main 26439b4135ebff7b24a06f4bd8f535af21b06036, plus the explicit QE-0004 marker repair. Exact current and historical whole-record hashes are checked. Original frozen hashes are unchanged. Runtime corpus is not replaced; current provenance validation and a dedicated current-to-checkpoint assertion remain mandatory. Historical correction/status/overlay tests use their historical checkpoint; current QE-0003 completion is tested separately.

## Mutation classification
Explicit evidence/historical-consistency/syntax correction fields map to editorial correction; provenance status/marker repairs map to review housekeeping. normal_record_review shares record_review's explicit instance-ID route; count-based legacy entries qualify only for a one-instance increment bounded by actual record length. Unknown/malformed values fail closed. No assessment chronology or pressure is inferred from those count strings. Regression tests exercise malformed and impossible transitions.

## Verification
All 122 local data tests: 121 pass, one existing built-output test deferred until CI build; zero failures. Event/mutation/assessment/provenance validators pass, 32 records and 106 assessments. Three existing mutation-order warnings unchanged. Full dependency install, lint, build, built-output suite and MCP typecheck run in repository CI before merge. Source/assessment appends from the two approved Scout flags remain instance-only. Deployment/live/discovery outcomes are recorded in the cycle record after actual verification.

