# FIP-A02 — Proposed four-record LAD-001 patch (PREPARATION ONLY)
Date: 2026-11-15
Status: PREPARED — DECISION REQUIRED before implementation.
User authorisation: prepare exact sidecar overlays, public impact assessment and validation tests. **No source-code changes, merge or deployment authorised.**
Base file: `src/data/verificationStageReviews.js`, blob `e0182c960fdf96b824aa4d769776b20bdb683af2`.
Test file: `src/data/verificationStageReviews.test.js`, blob `0e0544bdfaa27b708558f7e291ebbf6473144bd8`.
Source cohort register: `docs/reviews/LEGACY-DATE-CLASSIFICATION-INCREMENT-1-2026-10-19.json` (original issue date UNKNOWN for each).
Precedent: `docs/reviews/LEGACY-DATE-PILOT-STEP-5B-2026-10-19.md` (three individual prior qualifications).

## 1. Precisely proposed sidecar additions
Insert the following four objects **immediately after the FR-BT-0004 entry and before the existing FR-AI-0008 entry** inside `HISTORICAL_EFFECTIVE_DATES`. These are literal source proposals, not committed source changes:

```js
  {
    recordId: "FR-QE-0003",
    assessmentId: "AS-001",
    value: "date uncertain (legacy)",
    precision: "unknown",
    basis: ["IN-005"],
    note: "Original HTML records ISSUED: 2024-01-15 and triggering INST-005, but no contemporaneous issue packet verifies that date. The retained AS-001 assessment references the later Google Willow 2024 evidence. IN-005 identifies the assessment's cited trigger, not its issuance date. Preserve the canonical stored date; do not infer an issue date from Willow's publication. FIP-A02 four-record LAD-001 preparation, 15 November 2026; implementation subject to separate approval.",
  },
  {
    recordId: "FR-QE-0008",
    assessmentId: "AS-001",
    value: "date uncertain (legacy)",
    precision: "unknown",
    basis: ["IN-003"],
    note: "Original HTML records ISSUED: 2024-01-15 and triggering INST-003, without independent proof of the actual issue date. AS-001 references Google Willow evidence published later in 2024. The cited instance identifies the evidential trigger only, not a valid issue date. Preserve the stored literal and historical stage interpretation; do not invent a replacement date. FIP-A02 four-record LAD-001 preparation, 15 November 2026; implementation subject to separate approval.",
  },
  {
    recordId: "FR-AI-0001",
    assessmentId: "AS-001",
    value: "date uncertain (legacy)",
    precision: "unknown",
    basis: ["IN-005"],
    note: "Original HTML records ISSUED: 2024-01-15 and triggering INST-005; no original issue date was verified. The retained AS-001 discusses o3's ARC-AGI result publicised in December 2024. IN-005 names the source trigger, not the issue date. Preserve the canonical stored value and the historical assessment without substituting the announcement date. FIP-A02 four-record LAD-001 preparation, 15 November 2026; implementation subject to separate approval.",
  },
  {
    recordId: "FR-QE-0005",
    assessmentId: "AS-001",
    value: "date uncertain (legacy)",
    precision: "unknown",
    basis: ["IN-003"],
    note: "Original HTML records ISSUED: 2024-01-15 and triggering INST-003; original issue date remains unverified. The retained AS-001 also cites NIST's finalisation of post-quantum standards in August 2024. IN-003 is the recorded trigger, while that subsequent NIST evidence cannot date the earlier assessment. Preserve the stored literal and do not reconstruct a new issue date. FIP-A02 four-record LAD-001 preparation, 15 November 2026; implementation subject to separate approval.",
  },
```

All four basis instance IDs are present in the source records. No object overwrites an existing LAD-001 key. Four entries increase the overlay table length from **7 to 11**. The cohort classification remains 23 UNKNOWN, with 7 qualified by this and the previous three-record pilot if implemented; **16** of the 23 remain unqualified. The separate FR-AI-0008 and FR-AM-0001 historical overlays remain untouched.

## 2. Exact required test modifications
File `src/data/verificationStageReviews.test.js`.

A. In `test("LAD-001 historical dates carry bounded precision and evidence-instance provenance" ...)` change the expected length `7` to `11`; change expected keys array to:
```js
[
  "FR-QE-0002:AS-001",
  "FR-AM-0003:AS-001",
  "FR-BT-0004:AS-001",
  "FR-QE-0003:AS-001",
  "FR-QE-0008:AS-001",
  "FR-AI-0001:AS-001",
  "FR-QE-0005:AS-001",
  "FR-AI-0008:AS-001",
  "FR-AM-0001:AS-001",
  "FR-AM-0001:AS-002",
  "FR-AM-0001:AS-003",
]
```

B. In `test("three-record date pilot qualifies history while preserving every canonical record field" ...)`, retain its frozen pilot test unchanged **except** replace its final expectation that other overlay records are exactly `["FR-AI-0008", "FR-AM-0001"]` with:
```js
assert.deepEqual(
  [...new Set(otherRecords.map(entry => entry.recordId))].sort(),
  ["FR-AI-0001", "FR-AI-0008", "FR-AM-0001",
   "FR-QE-0003", "FR-QE-0005", "FR-QE-0008"].sort(),
);
```
Preserve the original pilot's historical record hash assertions; no rewrites of its precedent receipt.

C. Add a distinct test:
```js
test("FIP-A02 four legacy dates are qualified without changing canonical records or stage judgements", () => {
  const ids = ["FR-QE-0003", "FR-QE-0008", "FR-AI-0001", "FR-QE-0005"];
  for (const id of ids) {
    const record = ALL_RECORDS.find(r => r.id === id);
    const before = JSON.stringify(record);
    const canonicalFirst = record.assessments[0];
    const expectedState = canonicalFirst.pressureState;
    const expectedStage = getVerificationStageReview(id, "AS-001")?.reconstructedStage
      ?? canonicalFirst.verificationStage;
    const beforeTransitions = getTransitionFeed(record);
    const overlay = getHistoricalEffectiveDate(id, "AS-001");
    const first = getAssessmentHistory(record)[0];
    assert.equal(overlay.precision, "unknown");
    assert.equal(first.id, "AS-001");
    assert.equal(first.date, "date uncertain (legacy)");
    assert.equal(first.recordedDate, "2024-01-15");
    assert.equal(first.pressureState, expectedState);
    assert.equal(first.verificationStage, expectedStage);
    assert.equal(record.assessments[0].date, "2024-01-15");
    assert.deepEqual(getTransitionFeed(record), beforeTransitions);
    assert.equal(JSON.stringify(record), before);
    if (record.assessments.length > 1) {
      assert.equal(getCurrentAssessment(record).date, record.assessments.at(-1).date);
    }
    assert.equal(getCardAssessmentHistory(record).states[0].date, "date uncertain (legacy)");
    assert.ok(getVerificationStages(record).some(stage => stage.date === "date uncertain (legacy)"));
    assert.doesNotMatch(getRegisterRow(record).reason, /2024-01-15/);
  }
});
```

D. Add explicit MCP parity/unit assertion (prefer `src/data/mcpProjection.test.js` if existing; otherwise append to an existing `mcpProjection.test.js` after inspecting imports):
```js
const full = canonicalRecordView(record);
assert.equal(full.assessments[0].date, "date uncertain (legacy)");
assert.equal(full.assessments[0].recordedDate, "2024-01-15");
assert.equal(full.currentAssessment.id, record.assessments.at(-1).id);
```
Repeat for four records; ensure `recordSummary(record)` retains `openedDate`, number of assessments, current state/stage, and last assessment date. **Do not claim the MCP production endpoint was tested by these unit assertions.**

E. HTML/prerender integration expectations for all four record routes, three directory/trajectory surfaces and register views: find qualified AS-001 label; do not show raw `2024-01-15` **as the AS-001 issuance or state-entry date**, though the separate record-opened/question dates may legitimately contain that value. Check no NaN/Infinity for unknown dates. Preserve historical VS overlays and latest dated assessments. Confirm the date labels in /evidence-trajectories/ and /programmes/ do not present invented elapsed time. The full tests and actual HTML checks remain **unexecuted**.

## 3. Predicted surface impact matrix
| Surface / code | Expected change | Explicit non-change / risk |
|---|---|---|
| Record detail: history, State Warrant, Matrix | AS-001 shown as `date uncertain (legacy)`; `recordedDate` retained in derived history | Do not change AS-001 summary/stage/pressure |
| Record compact trajectory, history cards | First historical step labelled uncertain | Timeline order retained; don't turn uncertainty into year 2024 |
| Evidence Trajectories and registers | Inherited derived historical dates and reasons where those use AS-001 | Register sort key for an unknown date empty; other records may reorder; inspect per register |
| Programme rows | Derived latest assessment dates unchanged for these multi-assessment records | Programme counts and opening dates unchanged |
| Directory and Public Record | Counts remain 32 records and 109 assessments; latest assessments unchanged | Date of opening might still read 2024-01-15: intentionally out of scope |
| MCP full record projection | `assessments[0].date` qualified; `recordedDate` preserves storage literal | MCP summary's openedDate and latest assessment date unchanged; requires independent live MCP deployment verification |
| Mutation log and original question-date displays | No change by LAD-001 | Historical `2024-01-15` may remain on these independent fields; separate audit if desired |

## 4. Preconditions and no-change protections
1. Re-fetch source files and pin HEAD before implementation; abort on drift.
2. Compare proposed keys to existing `HISTORICAL_EFFECTIVE_DATES` for duplicates.
3. Inspect active source consumers and avoid changing the interpretation of historical state or stage events.
4. Preserve all 32 `src/data/records/*.js` files byte-for-byte; preserve `src/data/corpus.js` and FCIF authorities.
5. Execute existing `validate:all`, tests, build/prerender, and targeted HTML regression checks **only after separate implementation approval and in a suitable runtime**; no test has been executed in this preparation.
6. Prepare a bounded source diff and submit before merge; implementation, merge and deployment remain distinct decision gates.

## 5. Preparation disposition
**Ready for operator decision on implementation scope**, subject to test-file import inspection and pinned-ref check at execution. No source patch committed. Only this non-canonical preparation record and the programme's control metadata are authorised in this turn.
