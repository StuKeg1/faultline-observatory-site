import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import { getRecordUpdateSummary, assessmentChangeLabel, evidencePolarity, evidenceRelationships, questionDateText, mutationFieldLabel, recordCodeExplanations, assessmentReadingView, chronologicalReadingAssessment, evidenceReadingStatus, mutationReceiptLinks } from "./recordReading.js";
import { getAssessmentHistory } from "./derive.js";
import { CURRENT_PRESSURE_STATES, getPressureStateExplanation } from "./pressureStates.js";

test("code help is contextual and change-log labels preserve field meaning", () => {
  assert.deepEqual(recordCodeExplanations("A clinical result"), []);
  assert.equal(recordCodeExplanations("LPR-001-D08 repeated LPR-001-D41").length, 1);
  assert.equal(recordCodeExplanations("RN-005 and PROG-AI").length, 2);
  assert.equal(mutationFieldLabel("provenance_review"), "Source review");
  assert.equal(mutationFieldLabel("instance_added"), "Instance added");
});

test("source-check recency is separate from the assessment and all same-day update types are retained", () => {
  const am = ALL_RECORDS.find(r => r.id === "FR-AM-0007");
  assert.deepEqual(getRecordUpdateSummary({ ...am, mutationLog: am.mutationLog.filter(m => m.date <= "2026-10-16") }), { date: "2026-10-16", labels: ["Source review completed"] });
  assert.deepEqual(getRecordUpdateSummary(am), { date: "2026-10-19", labels: ["Editorial correction recorded"] });
  assert.ok(am.assessments.at(-1).date < "2026-10-16");
  const ai = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  const before = JSON.stringify(ai);
  assert.deepEqual(getRecordUpdateSummary({ ...ai, mutationLog: ai.mutationLog.filter(m => m.date <= "2026-10-18") }).labels, ["Record annotation updated", "Editorial correction recorded", "Verification Stage correction recorded (VS-03 → VS-05); Pressure State unchanged"]);
  assert.deepEqual(getRecordUpdateSummary(ai), { date: "2026-10-19", labels: ["Editorial correction recorded"] });
  assert.equal(ai.assessments.at(-1).verificationStage, "VS-05");
  assert.equal(ai.verificationStageChallenges.at(-1).status, "awaiting_operator_decision");
  assert.equal(JSON.stringify(ai), before);
});

test("latest-day assessment activity includes corrections logged under other mutation types", () => {
  const before = JSON.stringify(ALL_RECORDS);
  const expectations = [
    ["FR-QE-0004", "2026-09-14", ["Editorial correction recorded", "Source review completed", "Assessment updated; Pressure State and Verification Stage unchanged", "Evidence entry added"]],
    ["FR-AM-0004", "2026-09-19", ["Editorial correction recorded", "Verification Stage changed (VS-03 → VS-02); Pressure State unchanged"]],
    ["FR-BT-0003", "2026-09-25", ["Editorial correction recorded", "Verification Stage changed (VS-04 → VS-03); Pressure State unchanged", "Assessment updated; Pressure State and Verification Stage unchanged", "Evidence entry added"]],
  ];
  for (const [id, date, labels] of expectations) {
    const current = ALL_RECORDS.find(r => r.id === id);
    // Preserve the September omission cases after an append-only reconciliation.
    const record = { ...current,
      assessments: current.assessments.filter(a => a.date <= date),
      mutationLog: current.mutationLog.filter(m => m.date <= date),
    };
    assert.deepEqual(getRecordUpdateSummary(record), { date, labels });
    assert.deepEqual(getRecordUpdateSummary({ ...record, mutationLog: [...record.mutationLog].reverse() }).labels.slice().sort(), [...labels].sort());
  }
  assert.deepEqual(getRecordUpdateSummary(ALL_RECORDS.find(r => r.id === "FR-AI-0009")), {
    date: "2026-10-08", labels: ["Editorial correction recorded"],
  });
  assert.equal(JSON.stringify(ALL_RECORDS), before);
});

test("dated assessment labels replace generic mutation labels and preserve record opening", () => {
  const initial = { id: "AS-001", date: "2026-10-01", pressureState: "emerging", verificationStage: "VS-02" };
  const record = { id: "test", assessments: [initial], mutationLog: [
    { date: initial.date, field: "record_created", to: "test" },
    { date: initial.date, field: "assessment_issued", to: "AS-001" },
  ] };
  assert.deepEqual(getRecordUpdateSummary(record), { date: initial.date, labels: ["Record opened"] });
  const reassessed = { ...record, assessments: [initial, { ...initial, id: "AS-002" }], mutationLog: [
    ...record.mutationLog,
    { date: initial.date, field: "assessment_issued", to: "AS-002" },
    { date: initial.date, field: "assessment_issued", to: "AS-002" },
  ] };
  assert.deepEqual(getRecordUpdateSummary(reassessed).labels, ["Record opened", "Assessment updated; Pressure State and Verification Stage unchanged"]);
  assert.deepEqual(getRecordUpdateSummary({ ...record, mutationLog: record.mutationLog.slice(1) }).labels, ["Initial assessment"]);
  assert.deepEqual(getRecordUpdateSummary({ ...record, mutationLog: [] }), { date: null, labels: ["No dated update recorded"] });
});

test("post-assessment admissions count distinct known entries without inventing a reassessment", () => {
  const ai = ALL_RECORDS.find(r => r.id === "FR-AI-0007");
  assert.deepEqual(getRecordUpdateSummary({ ...ai, mutationLog: ai.mutationLog.filter(m => m.date <= "2026-10-17") }), { date: "2026-10-17", labels: ["4 evidence entries added"] });
  assert.deepEqual(getRecordUpdateSummary(ai), { date: "2026-10-19", labels: ["Editorial correction recorded"] });
  assert.ok(ai.assessments.at(-1).date < "2026-10-17");
});

test("latest-day summaries retain mixed events and unknowns without relying on mutation order", () => {
  const r = { instances: [{ id: "IN-001" }], assessments: [
    { id: "AS-001", pressureState: "emerging", verificationStage: "VS-02" },
    { id: "AS-002", pressureState: "emerging", verificationStage: "VS-02" },
  ], mutationLog: [
    { date: "2026-09-01", field: "provenance_review", to: "LPR-001" },
    { date: "2026-10-01", field: "instance_added", to: "IN-001" },
    { date: "2026-10-01", field: "assessment_issued", to: "AS-002 / retained" },
    { date: "2026-10-01", field: "future_unknown_event", to: "Unknown" },
    { date: "2026-10-01", field: "instance_added", to: "IN-001" },
  ] };
  assert.deepEqual(getRecordUpdateSummary(r), { date: "2026-10-01", labels: ["Assessment updated", "Record updated—see change log", "Evidence entry added"] });
  assert.equal(getRecordUpdateSummary({ mutationLog: [] }).date, null);
});

test("all current states have compact explanations and full Methodology definitions", () => {
  for (const state of CURRENT_PRESSURE_STATES) {
    assert.ok(state.definition.length > state.explanation.length);
    assert.equal(getPressureStateExplanation(state.value), state.explanation);
  }
  assert.match(getPressureStateExplanation("escalating"), /confidence in—or pressure on/);
  assert.match(getPressureStateExplanation("audit"), /Legacy or unrecognised/);
});

test("AI-0008 history distinguishes a recorded stage correction from unchanged axes", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  const before = JSON.stringify(record);
  const history = getAssessmentHistory(record);
  assert.equal(assessmentChangeLabel(null, history[0]), "Initial assessment");
  assert.equal(assessmentChangeLabel(history[0], history[1]), "Verification Stage changed (VS-05 → VS-03); Pressure State unchanged");
  assert.equal(assessmentChangeLabel(history[1], history[2]), "Assessment updated; Pressure State and Verification Stage unchanged");
  assert.equal(assessmentChangeLabel(history[2], history[3]), "Verification Stage correction recorded (VS-03 → VS-05); Pressure State unchanged");
  assert.equal(JSON.stringify(record), before);
});

test("history labels distinguish changes to either or both assessment axes", () => {
  const previous = { pressureState: "emerging", verificationStage: "VS-02" };
  assert.equal(assessmentChangeLabel(previous, { ...previous, pressureState: "escalating" }), "Pressure State changed");
  assert.equal(assessmentChangeLabel(previous, { pressureState: "escalating", verificationStage: "VS-03" }), "Pressure State and Verification Stage changed (VS-02 → VS-03)");
  assert.equal(assessmentChangeLabel(previous, { ...previous, verificationStage: "VS-03" }), "Verification Stage changed (VS-02 → VS-03); Pressure State unchanged");
});

test("same-recipient follow-up is explicit in both directions without merging entries", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-BT-0005");
  assert.equal(record.instances.length, 8);
  const original = record.instances.find(i => i.id === "IN-003");
  const followup = record.instances.find(i => i.id === "IN-008");
  assert.equal(evidenceRelationships(record, original)[0].targetId, "IN-008");
  assert.equal(evidenceRelationships(record, followup)[0].targetId, "IN-003");
  assert.match(evidenceRelationships(record, followup)[0].text, /not another patient/);
  for (const r of ALL_RECORDS) for (const i of r.instances) for (const relationship of evidenceRelationships(r, i)) {
    assert.ok(r.instances.some(target => target.id === relationship.targetId));
  }
});

test("MASAI reports link the same trial in both directions without implying replication", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  assert.equal(record.instances.length, 6);
  for (const [id, target] of [["IN-004", "IN-006"], ["IN-006", "IN-004"]]) {
    const rows = evidenceRelationships(record, record.instances.find(i => i.id === id));
    assert.equal(rows.length, 1);
    assert.equal(rows[0].targetId, target);
    assert.match(rows[0].text, /not (an independent replication|independent replications)/);
  }
  const instance = { id: "IN-001", relationship: { type: "same_trial_report", relatedInstanceId: "missing", note: "Invalid" } };
  assert.deepEqual(evidenceRelationships({ instances: [instance] }, instance), []);
  assert.equal(record.assessments.at(-1).verificationStage, "VS-05");
  assert.equal(record.verificationStageChallenges[0].status, "awaiting_operator_decision");
});

test("partial publication overlap is guarded by both sources and does not erase distinct antimony evidence", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-AM-0007");
  for (const id of ["IN-001", "IN-002"]) {
    const rows = evidenceRelationships(record, record.instances.find(i => i.id === id));
    assert.equal(rows.length, 1);
    assert.match(rows[0].text, /antimony/);
    assert.match(rows[0].text, /not (an independent replication|independent replications)/);
  }
  const copy = structuredClone(record);
  copy.instances[0].sources = copy.instances[0].sources.filter(s => s.doi !== "10.1073/pnas.2108938118");
  assert.deepEqual(evidenceRelationships(copy, copy.instances[0]), []);
  assert.deepEqual(evidenceRelationships(copy, copy.instances[1]), []);
  assert.equal(record.instances[0].sources.length, 2);
});

test("immune profiling is explicitly the first recipient and historical notes do not alter assessments", () => {
  const kidney = ALL_RECORDS.find(r => r.id === "FR-BT-0005");
  assert.equal(evidenceRelationships(kidney, kidney.instances.find(i => i.id === "IN-004"))[0].targetId, "IN-002");
  assert.match(evidenceRelationships(kidney, kidney.instances.find(i => i.id === "IN-002"))[0].text, /not an additional patient/);
  const world = ALL_RECORDS.find(r => r.id === "FR-AI-0009");
  const before = JSON.stringify(world.assessments);
  assert.match(assessmentReadingView(world, world.assessments[0]).summary, /A separate study, DreamerV3/);
  assert.equal(JSON.stringify(world.assessments), before);
  assert.match(recordCodeExplanations("FCIF Admission Review")[0], /not external scientific peer review/);
});

test("editorial reading removes confusing phrases while preserving originals and reviewed stage authority", () => {
  const before = JSON.stringify(ALL_RECORDS);
  const world = ALL_RECORDS.find(r => r.id === "FR-AI-0009");
  const reading = assessmentReadingView(world, world.assessments[0]);
  assert.ok(reading.changed);
  assert.doesNotMatch(reading.summary, /independently shows/);
  assert.doesNotMatch(reading.assessorNote, /recorded in Drive/);
  assert.match(world.assessments[0].assessorNote, /recorded in Drive/);
  const kidney = ALL_RECORDS.find(r => r.id === "FR-BT-0005");
  assert.doesNotMatch(assessmentReadingView(kidney, kidney.assessments.at(-1)).assessorNote, /held outside LPR/);
  const imaging = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  const history = getAssessmentHistory(imaging);
  const chronology = history.map(a => chronologicalReadingAssessment(imaging, a));
  assert.deepEqual(chronology.map(a => a.verificationStage), ["VS-03", "VS-03", "VS-03", "VS-05"]);
  assert.equal(history[0].verificationStage, "VS-05");
  assert.equal(chronology[0].verificationStageProvenance.effectiveStage, "VS-05");
  assert.doesNotMatch(assessmentReadingView(imaging, imaging.assessments.at(-1)).assessorNote, /converter date/);
  assert.equal(recordCodeExplanations("VSC-001").length, 1);
  assert.equal(JSON.stringify(ALL_RECORDS), before);
});

test("withdrawn legacy evidence has an explicit status without guessing a citation", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  const legacy = record.instances.find(i => i.id === "IN-005");
  assert.match(evidenceReadingStatus(record, legacy), /excluded from the current evidence basis/);
  // A citation alone cannot silently supersede a governed exclusion.
  assert.match(evidenceReadingStatus(record, { ...legacy, sources: [{ citation: "Newly verified" }] }), /excluded/);
  assert.equal(evidenceReadingStatus(record, { ...legacy, evidenceStatus: undefined }), null);
  assert.equal(evidenceReadingStatus(record, record.instances[0]), null);
});

test("reviewed entry statuses are explicit, distinct and backed by existing mutations", () => {
  const before = JSON.stringify(ALL_RECORDS);
  const expected = [
    ["FR-QE-0003", ["IN-001", "IN-002", "IN-003", "IN-004"], /Correction pending/],
    ["FR-BT-0001", ["IN-004"], /Legacy attribution withdrawn/],
    ["FR-AI-0006", ["IN-005"], /excluded from the current evidence basis/],
    ["FR-AI-0007", ["IN-005"], /excluded from the current evidence basis/],
    ["FR-AI-0001", ["IN-003"], /Unverified legacy attribution/],
  ];
  for (const [id, ids, notice] of expected) {
    const record = ALL_RECORDS.find(r => r.id === id);
    for (const entryId of ids) {
      const entry = record.instances.find(i => i.id === entryId);
      assert.match(evidenceReadingStatus(record, entry), notice);
      assert.match(entry.evidenceStatus.reviewId, /^LPR-001-D\d+$/);
      assert.equal(evidenceReadingStatus(record, { ...entry, evidenceStatus: { ...entry.evidenceStatus, kind: "future_unknown" } }), null);
      assert.equal(evidenceReadingStatus(record, { ...entry, evidenceStatus: { ...entry.evidenceStatus, mutationId: "M-999" } }), null);
    }
  }
  const unrelated = ALL_RECORDS.find(r => r.id === "FR-AI-0009");
  assert.equal(evidenceReadingStatus(unrelated, { ...unrelated.instances[0], sources: [], sourceReference: undefined, vectors: ["partial--unverified"] }), null);
  assert.equal(evidenceReadingStatus(unrelated, { ...unrelated.instances[0], evidenceStatus: { kind: "toString", reviewId: "LPR-001-D00", mutationId: unrelated.mutationLog[0].id } }), null);
  assert.equal(JSON.stringify(ALL_RECORDS), before);
});

test("correction receipt links are allowlisted and process terms get one explanation each", () => {
  assert.deepEqual(mutationReceiptLinks({ note: "docs/reviews/nonexistent.json" }), []);
  const record = ALL_RECORDS.find(r => r.id === "FR-AI-0009");
  const mutation = record.mutationLog.find(m => m.note?.includes("MCP-CLARIFICATION-REPAIR-2026-10-08.json"));
  assert.equal(mutationReceiptLinks(mutation).length, 1);
  assert.match(mutationReceiptLinks(mutation)[0].href, /18c771128a8b85a3e62a65444f22c30ce8e7da1a/);
  assert.equal(recordCodeExplanations("Expanded Access Expanded Access Normal Record Review").length, 2);
});

test("partial remains an evidential relation, not a quality verdict or reassignment", () => {
  const instance = ALL_RECORDS.find(r => r.id === "FR-AI-0009").instances.find(i => i.id === "IN-009");
  const before = JSON.stringify(instance);
  assert.deepEqual(evidencePolarity(instance), { key: "partial", label: "Partial" });
  assert.equal(JSON.stringify(instance), before);
  assert.deepEqual(evidencePolarity({ vectors: ["SUPPORTIVE--bounded"] }), { key: "supportive", label: "Supportive" });
});

test("known wording revision does not inherit the elapsed age of a legacy question", () => {
  const q = ALL_RECORDS.find(r => r.id === "FR-AI-0008").openQuestions.find(q => q.id === "OQ-003");
  assert.equal(q.raisedDate, "2024-01-15");
  assert.equal(questionDateText(q), "Original date uncertain (legacy) · wording revised 2026-09-06");
  assert.equal(questionDateText({ raisedDate: "2026-09-28" }), "Question recorded 2026-09-28");
});
