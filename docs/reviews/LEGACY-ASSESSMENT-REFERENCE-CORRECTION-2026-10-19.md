# Legacy assessment-reference correction — 19 October 2026

Authority: Stuart approved the bounded metadata review's recommendation to add five explicit, append-only reference links and retain QE-0001's unlinked disposition. Direct-session origin. This release does not reassess scientific evidence or stage correctness.

## Reviewed associations

| Record | Original mutation | Assessment | Source commit |
| --- | --- | --- | --- |
| AI-0001 | M-007 | AS-002 | 62d47054e6fe16e3d9fde2776247e6b7642f7170 |
| AM-0006 | M-009 | AS-002 | 9ad09a843fab0d1c65f24cbdab49735a42a8f50b |
| AM-0006 | M-013 | AS-003 | 79e2c10534bb25b23cc704f96e98beef0714e721 |
| AM-0006 | M-015 | AS-004 | 0e06495b002d15796f5bda5356dcec5752bbc616 |
| BT-0004 | M-007 | AS-002 | 993a64c02e4b9711966f708e82c3dde916811d87 |
| QE-0001 | M-003 | No surviving target | Existing reconstruction provenance; no original assessment recovered |

Each of the five original Git diffs introduces its mutation and assessment together. The June records carry 27 June assessment/mutation dates but shipped in commits dated 28 June; neither date is changed or conflated. The two 29 August AM events are supported by separate commits, not inferred from their shared date. RELEASE-004 and TRIAL-001-OUT corroborate the June identities. Review: Legacy-Assessment-Reference-Review-2026-10-19.md (the approved decision aid).

QE-0001's approximate 2024 M-003 predates the surviving June 2026 reconstruction AS-001 and July governed AS-002. Its original assessment was lost. The explicit unlinked limitation is metadata, not a recovery or substantive reopening of its closed inquiry. QE-0001's record file remains untouched.

## Manifest and guards

- assessmentMutationReferences.js: append-only, source-backed review associations plus the explicit unlinked disposition. Each review retains the original mutation field/date/from/to/note snapshot and the separate review date. Application fails closed if the original identity changes, more than one review matches, or a linked assessment is missing, duplicated or dated differently.
- mutationClassifier.js: consults the explicit review only when the original target has no AS identifier. Existing explicit targets retain precedence; unknown or ambiguous AS identifiers cannot be overridden by a review. No narrative-note parser is added.
- AI-0001 M-016, AM-0006 M-019 and BT-0004 M-014: one new reference_corrected audit entry per affected record, dated 19 October. Original mutations and all other existing fields remain unchanged.
- FrontierRecord.jsx/CSS: the original mutation value remains visible, followed by its separately dated reviewed reference and a keyboard-focusable assessment link. QE's original value is followed by the explicit loss limitation. New anchor offset protects arrival beneath the navigation.
- mcpProjection.js: full record views expose the same validated reference reviews without replacing the original mutation targets. The separate metadata module is shared, not copied into the Worker.
- mutationClassifier.test.js/mcpProjection.test.js: reviewed identities, missing/stale/ambiguous guards, explicit QE limitation, historical qualification dates and absence of duplicate or falsely new developments.

## Downstream impact

Exactly five original mutation classifications change from unclassified. AI-0001 M-007, AM-0006 M-009/M-015 and BT-0004 M-007 become historical Verification Stage changes, eligible under the existing policy on their ORIGINAL June/August event dates. AM-0006 M-013 becomes a same-axis assessment update and stays non-qualifying. The three new audit entries are editorial corrections and do not enter Latest Developments. No qualification rule changes. No event is duplicated or redated to the review date; all events remain in the complete changelog.

Current assessments, Pressure States, Verification Stages, dates, claim/evidence content and historical overlays are unchanged. No new assessment, source admission or recovered QE assessment is created. AI-0008's challenge remains separate. The newcomer comparison is frozen (SHA-256 53ed29dd528ca3b74508ea5f9eac774a53635bd59899b769b8126345693661ce). Recommendation 3 about retained questions is not implemented here.

## Verification

Production build and canonical validators passed; 185/185 built-output tests passed; lint zero errors with one existing refresh warning; MCP typecheck passed. Object-level comparison against the pre-release records proves all pre-existing fields and mutation objects are identical, with only one audit entry prepended per affected record. Current assessments also compare identically. All five built reference links, their destinations and QE's unlinked display were checked. Live release status and exact-SHA verification are recorded in the Release Archive after deployment.
