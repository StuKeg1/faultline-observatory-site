import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import { getAssessmentHistory, getCurrentAssessment, getTransitionFeed } from "./derive.js";
import { REGISTERS, getRegisterRow, getRegisterRows, resolveRegister, sortKey } from "./registerProjection.js";

const forbidden = /\b(advancement|regression|oscillation|oscillating|endurance|enduring|stagnation|supportive-dominant|contesting-dominant|deferred-resolution|early-support-then-stall|escalating-contradiction)\b/i;

test("each record has one current state and one current stage register", () => {
  const states = REGISTERS.filter((register) => register.group === "State" && !register.legacy);
  const stages = REGISTERS.filter((register) => register.group === "Stage");
  for (const record of ALL_RECORDS) {
    assert.equal(states.filter((register) => register.matches(record)).length, 1, record.id);
    assert.equal(stages.filter((register) => register.matches(record)).length, 1, record.id);
  }
  assert.equal(states.reduce((sum, register) => sum + getRegisterRows(ALL_RECORDS, register.id).length, 0), ALL_RECORDS.length);
  assert.equal(stages.reduce((sum, register) => sum + getRegisterRows(ALL_RECORDS, register.id).length, 0), ALL_RECORDS.length);
});

test("register reasons use assessment values and dates", () => {
  for (const register of REGISTERS) {
    for (const row of getRegisterRows(ALL_RECORDS, register.id)) {
      const history = getAssessmentHistory(row.record);
      const dates = history.flatMap((assessment) => [assessment.date, assessment.recordedDate]).filter(Boolean);
      assert.equal(forbidden.test(row.reason), false, `${register.id}: ${row.reason}`);
      assert.equal(/\bResolved\b/.test(row.reason), false, `${register.id}: ${row.reason}`);
      assert.ok(row.reason.includes(row.stateEnteredDate) || row.reason.includes(row.stageReachedDate) || dates.some((date) => row.reason.includes(date)), `${register.id}: ${row.record.id}`);
      assert.equal(row.current.date, getCurrentAssessment(row.record).date);
    }
  }
});

test("reasons never expose a stored date when LAD-001 supplies a different display date", () => {
  for (const register of REGISTERS) {
    for (const row of getRegisterRows(ALL_RECORDS, register.id)) {
      const history = getAssessmentHistory(row.record);
      row.record.assessments.forEach((stored, index) => {
        if (stored.date !== history[index].date) assert.equal(row.reason.includes(stored.date), false, `${register.id}: ${row.record.id}`);
      });
    }
  }
});

test("FR-AM-0001 changed reason uses its LAD-001 date", () => {
  const record = ALL_RECORDS.find((item) => item.id === "FR-AM-0001");
  const row = getRegisterRows([record], "changed")[0];
  assert.match(row.reason, /2004 or earlier/);
  assert.doesNotMatch(row.reason, /2024-01-15/);
});

test("no reason carries a recorded-at-opening suffix", () => {
  for (const register of REGISTERS) {
    for (const row of getRegisterRows(ALL_RECORDS, register.id)) assert.doesNotMatch(row.reason, /\(recorded at opening\)/);
  }
});

test("register rows are sorted by their register-specific display date", () => {
  for (const register of REGISTERS) {
    const rows = getRegisterRows(ALL_RECORDS, register.id);
    for (let index = 1; index < rows.length; index += 1) {
      assert.ok(sortKey(rows[index - 1].sortDate) >= sortKey(rows[index].sortDate), register.id);
    }
  }
});

test("legacy and compatible register ids resolve without inventing a fallback", () => {
  assert.equal(resolveRegister("audit").id, "state-audit");
  assert.equal(resolveRegister("changed").id, "changed");
  for (const register of REGISTERS.filter((item) => item.group === "Programme")) assert.equal(resolveRegister(register.id).id, register.id);
  assert.equal(resolveRegister("not-a-register").id, "full");
});

test("state change register remains derived from its transition feed", () => {
  for (const row of getRegisterRows(ALL_RECORDS, "changed")) assert.ok(getTransitionFeed(row.record).length > 0, row.record.id);
});

test("stage change register uses stored assessment stages rather than reviewed stages", () => {
  assert.deepEqual(
    getRegisterRows(ALL_RECORDS, "stage-changed").map((row) => row.record.id).sort(),
    ["FR-QE-0001", "FR-QE-0003", "FR-AI-0001", "FR-AI-0008", "FR-AM-0001", "FR-AM-0004", "FR-AM-0006", "FR-BT-0003", "FR-BT-0004"].sort(),
  );
});

test("stage correction is not described as a newly observed capability advance", () => {
  for (const [id, stage] of [["FR-AI-0008", "05"], ["FR-AM-0004", "03"], ["FR-BT-0003", "04"]]) {
    const record = ALL_RECORDS.find(r => r.id === id);
    assert.match(getRegisterRow(record, `stage-vs-${stage}`).reason, /Stage corrected|Stage correction/);
    assert.match(getRegisterRow(record, "stage-changed").reason, /Stage correction/);
  }
});
