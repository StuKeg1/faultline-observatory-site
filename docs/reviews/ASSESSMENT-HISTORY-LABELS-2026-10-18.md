# Assessment history labels — 18 October 2026

Authority: Stuart authorised recommendation 1 from the first newcomer review: fix misleading assessment-history labels. Direct-session origin; no retrospective backlog item is invented. The other two recommendations remain separate.

Problem: RecordLineage labelled every assessment that held Pressure State as “Reassessed, no change”, even when Verification Stage changed. AI-0008 AS-004 exposed this defect. A held pair of axes also does not mean that an assessment's reasoning or evidential basis is unchanged.

Implementation: a pure presentation helper compares consecutive assessments from getAssessmentHistory, including governed historical overlays. Labels distinguish initial assessment, Pressure State change, Verification Stage change, both-axis change and assessment update with both axes unchanged. A pre-existing verification_stage_correction marker produces “correction recorded”, describing the recorded action without ratifying its merits. Stage-only changes include the prior and next code and explicitly say Pressure State is unchanged. Timeline reaffirmation styling now requires both axes to hold.

Manifest: src/data/recordReading.js; src/data/recordReading.test.js; src/pages/FrontierRecord.jsx; src/pages/frontierRecordLegacyDate.test.js; this receipt. The existing legacy-date test now checks the extracted helper and renderer connection rather than requiring a label literal in the JSX. No record, assessment, source, mutation, historical overlay, methodology, routing or stage decision changes. AI-0008's pending challenge remains visible. The newcomer HTML comparison remains frozen; its SHA-256 is 53ed29dd528ca3b74508ea5f9eac774a53635bd59899b769b8126345693661ce.

Local verification: production build and canonical validators passed; 176/176 built-output tests passed; lint and MCP typecheck passed. Focused tests cover AI-0008's governed historical sequence and both-axis/state-only/stage-only cases without mutating canonical data. Built labels checked on AI-0008 plus structural records QE-0001, AM-0001 and BT-0001. Exact production status and live verification are recorded in the Release Archive after deployment.
