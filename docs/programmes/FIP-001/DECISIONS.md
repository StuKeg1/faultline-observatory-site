# FIP-001 — Decision log
| Date | Decision | Authority | Scope | Evidence / condition |
|---|---|---|---|---|
| 2026-11-15 | FIP-001 M0 formally AUTHORISED | User in ChatGPT | Establish programme controls only | No authority to amend records, FCIF or public website |
| 2026-11-15 | Six packages; four waves; eight Claude steps preserved as source references | Planning decision | Control architecture | Subject to refinement as verified findings arrive |
| 2026-11-15 | Step 8 corrections prevail over unsupported Step 1–7 statements | Planning decision | Audit triage | Step 5 was not run; all findings require independent verification |
| 2026-11-15 | Initial finding classifications are provisional | Planning decision | FINDINGS.csv | They are recommendations, not operator approvals |
| 2026-11-15 | A01 is first recommended execution item | Planning decision | W1 | Separate authorisation required before any repair |

## Decision log rules
Always append a dated row with the original item ID, options considered, decision owner and rationale; do not overwrite prior judgements. A separate record must approve any material change in scope. If a finding is declined or already solved, mark CLOSED with reason; do not count it as an accepted implementation.

| 2026-11-15 | M0 ACCEPTED | Verified GitHub main readback | Documentation-only setup | PR #253, merge 1b408959; receipt receipts/M0-2026-11-15.md |

| 2026-11-15 | FIP-A01 review completed; DECISION REQUIRED | Evidence-only user request | Review [A01-2026-11-15](reviews/A01-2026-11-15.md) | Production snapshots not same-time; MCP response inaccessible; no repair authorised |
| 2026-11-15 | FIP-A01 bounded diagnostic follow-up AUTHORISED | User explicit approval | Fresh production/deployed SHA, existing validators, live MCP checks; evidence-only | No code changes, redeployment or canonical mutations; repair proposal requires separate approval |
| 2026-11-15 | FIP-A01 bounded diagnostic follow-up concluded at access limits; four-assessment source-integrity repair proposed | Evidence review under prior user authorisation | [A01 review supplement](reviews/A01-2026-11-15.md) | Current site surfaces 109 and main 105; four missing AS objects independently corroborated by mutation logs and governed receipts; no code/redeploy authorised |
| 2026-11-15 | FIP-A01 FALSE-POSITIVE CORRECTION: four previously reported missing assessments are present in main; proposed restoration withdrawn | Evidence-driven corrective audit | [Superseding A01 addendum](reviews/A01-2026-11-15.md) | Original regular expression missed quoted object keys; 32 records/109 assessments; no code patch or merge; live deployment and MCP parity remain unverified |
| 2026-11-15 | FIP-A01 ACCEPTED WITH EXCEPTIONS; false-positive restoration CLOSED — NO REPAIR | User explicit approval | [A01 closure receipt](receipts/A01-2026-11-15.md) | 109-assessment canonical/public reconciliation accepted; deployed SHA and MCP parity remain unverified |
| 2026-11-15 | FIP-A02 opened IN REVIEW | User explicit approval | Historical baseline dating evidence-only audit | No record or FCIF changes without separate approval |
| 2026-11-15 | FIP-A02 evidence audit completed; DECISION REQUIRED | Evidence-only scope authorised by user | [A02 review](reviews/A02-2026-11-15.md) | Existing 23 unknown date classification + three-record pilot; 20 unqualified; recommend four-record preparation only; no canonical change |
| 2026-11-15 | FIP-A02 four-record LAD-001 preparation AUTHORISED and prepared | User explicit preparation-only approval | [Exact proposal](proposals/A02-LAD001-four-record-2026-11-15.md) | Four overlays + test adjustments drafted as non-canonical proposal; no application code, record, FCIF, merge or deployment changes |
| 2026-11-15 | FIP-A02 branch implementation AUTHORISED and performed; merge/deployment NOT AUTHORISED | User explicit bounded approval | [Unmerged implementation receipt](reviews/A02-IMPLEMENTATION-2026-11-15.md) | Branch `fip-a02-lad001-four-legacy-dates` modifies only overlay + two test files; static checks pass, executable Node/CI unavailable; remains unaccepted pending validation |
| 2026-11-15 | FIP-A02 targeted executable validation PASSED; HOLD MERGE pending full CI | Evidence review, respecting user no-merge/no-deploy limit | [Validation supplement](reviews/A02-IMPLEMENTATION-2026-11-15.md) | 40 + 32 isolated JS assertions passed; PR-only CI trigger and possible Cloudflare preview makes auto-PR inappropriate; no merge or deploy |
