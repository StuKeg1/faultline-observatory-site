import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import { getAssessmentHistory, getCurrentAssessment, getTransitionFeed } from "./derive.js";
import { REGISTERS, getRegisterRow, getRegisterRows, resolveRegister } from "./registerProjection.js";

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

test("FR-AM-0001 retains its recorded-at-opening marker", () => {
  const record = ALL_RECORDS.find((item) => item.id === "FR-AM-0001");
  assert.match(getRegisterRow(record, "full").reason, /\(recorded at opening\)/);
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
