# Approved Scout instances — 31 October 2026

Operator approved INSTANCE only for both flags and explicitly authorised implementation. Review authority: Post-Scout Human Record Review v1.6. Durable queue: https://docs.google.com/document/d/1gyImRJO3PT17bSnowwyy3gWPf3rrjV7o-s9gawrBjgU/edit .

Base: 26439b4135ebff7b24a06f4bd8f535af21b06036. Both records match the reviewed head; no intervening target drift or duplicate source. Scout snapshot remains d55abcb6c0d1f2902fe031a032fd570ffa85be57.

| Flag | Target | Instance | Mutation | Orientation |
| --- | --- | --- | --- | --- |
| 2026-10-31-01 | FR-QE-0008 | IN-011 | M-021 | PARTIAL: theoretical correlation constraint and modeled mitigation |
| 2026-10-31-02 | FR-AI-0002 | IN-009 | M-016 | PARTIAL: benchmark cost/reliability constraints and feedback-dependent adaptation |

No new assessment. QE retains AS-005 / RESOLVING / VS-04; AI retains AS-003 / ESCALATING / VS-02. Every prior instance/mutation and all other record fields reconstruct byte-equivalently at the parsed-object level by removing only the added instance and mutation. Whole-record SHA256 receipts extend the existing historical reconstruction chain without replacing frozen hashes.

## Evidence boundaries

Wang et al., arXiv:2610.36963v1: protocol-level theory/modeling, not measured distance-scaling failure; higher-order input correlations can reverse gain and modeled controls may restore it. Hardware validation, delivered resource yield, source/circuit/storage assumptions and direct-preparation comparator remain explicit.

Sun et al., arXiv:2610.34491v1: cost and externally evaluated tasks, not deployed workplace ROI or measured supervision requirement. Single-run reversals are not systematic higher-effort harm; repeated-run/chance caveat retained. Corrected versus original SWE-Bench and external-feedback requirements remain explicit; Together AI source interest preserved.

## Validation and current blocker

Event, mutation and assessment validators pass (32 records, 106 unchanged assessments; three pre-existing ordering warnings). Focused integrity receipt reconstruction and current assessment tests pass. Comparing the same 49-test subset on pristine main and this change produces identical 12 failures, all outside the new instance appends; 37 pass in both runs.

Full provenance validation fails on unchanged main: FR-QE-0004 has discrepancies_found with a non-pending repair status. Latest main CI run 41184187530 also failed Canonical corpus validation, and production-verification run 41184187468 failed; lint/build steps were skipped upstream. No gate is waived. PR is held unmerged pending baseline repair and green CI. No deployment or live verification is claimed; source-post discovery remains Not triggered until verified live.

