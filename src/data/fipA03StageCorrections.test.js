import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import {
  getAssessmentHistory,
  getCurrentAssessment,
  getStateEnteredDate,
  getTransitionFeed,
  getVerificationStages,
} from "./derive.js";
import { getVerificationStageReview } from "./verificationStageReviews.js";
import { getRegisterRow, getRegisterRows } from "./registerProjection.js";
import { canonicalRecordView, recordSummary } from "./mcpProjection.js";

const cases = [
  {
    id: "FR-AM-0001",
    previousAssessment: "AS-005",
    correction: "AS-006",
    mutation: "M-017",
    firstAssessmentStage: "VS-01",
    historyStages: ["VS-01", "VS-04", "VS-04", "VS-05", "VS-05", "VS-04"],
    oldReviewId: "AS-003",
    oldReviewStage: "VS-04",
    evidenceCount: 9,
    previousMutation: "M-016",
  },
  {
    id: "FR-AM-0005",
    previousAssessment: "AS-004",
    correction: "AS-005",
    mutation: "M-022",
    firstAssessmentStage: "VS-04",
    historyStages: ["VS-04", "VS-04", "VS-05", "VS-05", "VS-04"],
    oldReviewId: "AS-002",
    oldReviewStage: "VS-04",
    evidenceCount: 7,
    previousMutation: "M-021",
  },
];

for (const entry of cases) {
  test(`FIP-A03 ${entry.id}: append-only current stage correction preserves scientific judgment and prior history`, () => {
    const record = ALL_RECORDS.find((item) => item.id === entry.id);
    assert.ok(record, entry.id);
    assert.equal(record.assessments.at(-2).id, entry.previousAssessment);
    assert.equal(record.assessments.at(-2).verificationStage, "VS-05");
    assert.equal(record.assessments.at(-2).pressureState, "collapsed");

    const latest = record.assessments.at(-1);
    assert.equal(latest.id, entry.correction);
    assert.equal(latest.date, "2026-11-15");
    assert.equal(latest.verificationStage, "VS-04");
    assert.equal(latest.pressureState, "collapsed");
    assert.equal(latest.changeKind, "verification_stage_correction");
    assert.match(latest.summary, /not a new|not the observation of a new/i);
    assert.match(latest.summary, /July/i);
    assert.equal(getCurrentAssessment(record).verificationStage, "VS-04");
    assert.equal(getCurrentAssessment(record).pressureState, "collapsed");
    assert.equal(getTransitionFeed(record).at(-1)?.to.pressureState ?? "collapsed", "collapsed");

    assert.equal(record.instances.length, entry.evidenceCount);
    assert.equal(record.mutationLog[0].id, entry.mutation);
    assert.equal(record.mutationLog[0].field, "assessment_correction");
    assert.equal(record.mutationLog[0].from, `${entry.previousAssessment} / COLLAPSED / VS-05`);
    assert.equal(record.mutationLog[0].to, `${entry.correction} / COLLAPSED / VS-04`);
    assert.equal(record.mutationLog[1].id, entry.previousMutation);
    assert.deepEqual(record.assessments.map(a => a.id),
      Array.from({ length: entry.historyStages.length }, (_, i) => `AS-${String(i+1).padStart(3,"0")}`));

    const history = getAssessmentHistory(record);
    assert.deepEqual(history.map(a => a.verificationStage), entry.historyStages);
    assert.equal(record.assessments.find(a => a.id === entry.oldReviewId).verificationStage, "VS-05");
    assert.equal(getVerificationStageReview(entry.id, entry.oldReviewId).reconstructedStage, entry.oldReviewStage);
    assert.equal(history.find(a => a.id === entry.oldReviewId).verificationStage, entry.oldReviewStage);
    assert.equal(history.at(-1).verificationStageProvenance, undefined);
    assert.equal(getStateEnteredDate(record), entry.id === "FR-AM-0001" ? "2004 or earlier" : "2024-01-15");

    const stages = getVerificationStages(record);
    assert.equal(stages.find(s => s.vsCode === "VS-04").status, "current");
    assert.equal(stages.find(s => s.vsCode === "VS-04").date, "2026-11-15");
    assert.equal(stages.find(s => s.vsCode === "VS-05").status, "reached");
    assert.match(getRegisterRow(record, "stage-vs-04").reason, /Stage corrected/);
    assert.match(getRegisterRow(record, "stage-changed").reason, /Stage correction/);

    const mcp = canonicalRecordView(record);
    const summary = recordSummary(record);
    assert.equal(mcp.assessments.at(-1).id, entry.correction);
    assert.equal(mcp.currentAssessment.verificationStage, "VS-04");
    assert.equal(mcp.currentAssessment.pressureState, "collapsed");
    assert.equal(summary.verificationStage, "VS-04");
    assert.equal(summary.pressureState, "collapsed");
    assert.equal(summary.assessments, record.assessments.length);
    assert.equal(mcp.mutationLog[0].id, entry.mutation);
  });
}

test("FIP-A03 stage changes never create new Pressure State transitions or alter July overlays", () => {
  const rows = getRegisterRows(ALL_RECORDS, "stage-changed");
  for (const { id, oldReviewId, oldReviewStage } of cases) {
    assert.equal(rows.filter(row => row.record.id === id).length, 1);
    const record = ALL_RECORDS.find(r => r.id === id);
    const history = getAssessmentHistory(record);
    assert.equal(history.find(a => a.id === oldReviewId).verificationStage, oldReviewStage);
    const lastTwo = record.assessments.slice(-2);
    assert.deepEqual(lastTwo.map(a => a.pressureState), ["collapsed", "collapsed"]);
  }
});
