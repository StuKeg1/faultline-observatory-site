import assert from "node:assert/strict";
import test from "node:test";

import {
  assignEventsToDocumentaryPhases,
  calculateRegisterLayout,
  calculateStageRegisterGroups,
  calculateTerminalNodeLayout,
  estimateRegisterLabelMetrics,
} from "./evidenceTrajectoryLayout.js";

function assessment(id, date, verificationStage = "VS-03") {
  return { id, date, verificationStage, pressureState: "escalating" };
}

function trajectory(id, stage, previousStage = stage) {
  return {
    record: { id, claim: { shortLabel: id } },
    history: [
      { verificationStage: previousStage },
      { verificationStage: stage },
    ],
    current: { verificationStage: stage },
  };
}

test("single-assessment histories retain an origin and a Today endpoint", () => {
  const history = [assessment("a1", "2026-01-01", "VS-02")];
  const events = assignEventsToDocumentaryPhases(history);

  assert.deepEqual(events.map((event) => event.phaseId), ["origins", "today"]);
  assert.equal(events[0].assessment.date, "2026-01-01");
  assert.equal(events[1].assessment.date, "2026-01-01");
});

test("documentary phase allocation follows event order, not equal calendar spacing", () => {
  const history = [
    assessment("a1", "2010-01-01"),
    assessment("a2", "2011-01-01"),
    assessment("a3", "2017-01-01"),
    assessment("a4", "2022-01-01"),
    assessment("a5", "2026-01-01"),
  ];

  const events = assignEventsToDocumentaryPhases(history);

  assert.deepEqual(events.map((event) => event.phaseId), [
    "origins",
    "early",
    "accumulating",
    "runway",
    "today",
  ]);
  assert.deepEqual(events.map((event) => event.assessment.date), history.map((item) => item.date));
});

test("terminal dodge is stable and grouped by the true current verification stage", () => {
  const records = [
    trajectory("FR-QE-0003", "VS-03"),
    trajectory("FR-AI-0002", "VS-03"),
    trajectory("FR-BT-0004", "VS-05"),
  ];
  const yForStage = (stage) => ({ "VS-05": 80, "VS-03": 220 }[stage]);
  const layout = calculateTerminalNodeLayout({ records, yForStage, minGap: 20 });

  assert.equal(layout.get("FR-AI-0002").trueY, 220);
  assert.equal(layout.get("FR-QE-0003").trueY, 220);
  assert.equal(layout.get("FR-AI-0002").nodeY, 210);
  assert.equal(layout.get("FR-QE-0003").nodeY, 230);
  assert.equal(layout.get("FR-BT-0004").nodeY, 80);
});

test("terminal layout preserves previous and current true coordinates separately", () => {
  const records = [trajectory("FR-QE-0001", "VS-03", "VS-02")];
  const yForStage = (stage) => ({ "VS-02": 160, "VS-03": 240 }[stage]);
  const layout = calculateTerminalNodeLayout({ records, yForStage, minGap: 20 });
  const item = layout.get("FR-QE-0001");

  assert.equal(item.previousTrueY, 160);
  assert.equal(item.trueY, 240);
  assert.equal(item.nodeY, 240);
});

test("semantic current endpoint remains trueY even when the current ring is dodged", () => {
  const records = [
    trajectory("FR-QE-0001", "VS-03", "VS-02"),
    trajectory("FR-QE-0002", "VS-03", "VS-03"),
  ];
  const yForStage = (stage) => ({ "VS-02": 160, "VS-03": 240 }[stage]);
  const layout = calculateTerminalNodeLayout({ records, yForStage, minGap: 20 });
  const item = layout.get("FR-QE-0001");

  assert.notEqual(item.nodeY, item.trueY);
  assert.equal(item.trueY, 240);
});

test("register rows inherit terminal ordering and remain collision-free", () => {
  const terminalItems = [
    { recordId: "A", trueY: 100, nodeY: 100, labelHeight: 24 },
    { recordId: "B", trueY: 100, nodeY: 106, labelHeight: 32 },
    { recordId: "C", trueY: 100, nodeY: 112, labelHeight: 24 },
    { recordId: "D", trueY: 220, nodeY: 220, labelHeight: 28 },
  ];
  const layout = calculateRegisterLayout({
    terminalItems,
    top: 90,
    bottom: 280,
    minGap: 4,
    labelGap: 4,
  });
  const rows = [...layout.values()].sort((a, b) => a.order - b.order);

  assert.deepEqual(rows.map((row) => row.recordId), ["A", "B", "C", "D"]);
  rows.slice(1).forEach((row, index) => {
    const previous = rows[index];
    const previousBottom = previous.labelY + previous.labelHeight / 2;
    const currentTop = row.labelY - row.labelHeight / 2;
    assert.ok(currentTop - previousBottom >= 4);
  });
  assert.ok(rows[0].labelY - rows[0].labelHeight / 2 >= 90);
  assert.ok(rows.at(-1).labelY + rows.at(-1).labelHeight / 2 <= 280);
  assert.equal(layout.size, terminalItems.length);
  assert.equal(layout.get("B").needsLabelLeader, true);
});

test("register label metrics truncate long titles into controlled title lines", () => {
  const metrics = estimateRegisterLabelMetrics(
    "Fault-Tolerant Logical Qubits - Error Rate Scaling with Code Distance",
    { maxCharsPerLine: 24, maxTitleLines: 1 }
  );

  assert.equal(metrics.titleLines.length, 1);
  assert.ok(metrics.titleLines[0].endsWith("..."));
  assert.ok(metrics.labelHeight >= 24);
});
test("stage register groups preserve VS order and pack without group overlap", () => {
  const records = [
    trajectory("R1", "VS-02"),
    trajectory("R2", "VS-02"),
    trajectory("R3", "VS-02"),
    trajectory("R4", "VS-03"),
    trajectory("R5", "VS-05"),
  ];
  const stageOrder = ["VS-05", "VS-04", "VS-03", "VS-02", "VS-01"];
  const yForStage = (stage) => ({ "VS-05": 100, "VS-04": 200, "VS-03": 300, "VS-02": 400, "VS-01": 500 }[stage]);
  const { groups, rowLayout } = calculateStageRegisterGroups({
    records,
    stageOrder,
    yForStage,
    top: 80,
    bottom: 560,
    rowHeight: 20,
    headerHeight: 30,
    groupGap: 12,
  });

  assert.deepEqual(groups.map((group) => group.stage), stageOrder);
  groups.slice(1).forEach((group, index) => {
    const previous = groups[index];
    assert.ok(group.groupTop >= previous.groupTop + previous.groupHeight + 12);
  });
  assert.equal(rowLayout.size, records.length);
  assert.equal(groups.find((group) => group.stage === "VS-02").rows.length, 3);
  groups.slice(1).forEach((group, index) => {
    const previous = groups[index];
    const actualGap = group.groupTop - (previous.groupTop + previous.groupHeight);
    assert.equal(Math.round(actualGap), 12);
  });
});

test("dense stage register groups can exceed the narrow canonical row band", () => {
  const records = Array.from({ length: 12 }, (_, index) => trajectory(`R${index}`, "VS-02"));
  const stageOrder = ["VS-05", "VS-04", "VS-03", "VS-02", "VS-01"];
  const yForStage = (stage) => ({ "VS-05": 100, "VS-04": 180, "VS-03": 260, "VS-02": 340, "VS-01": 420 }[stage]);
  const { groups } = calculateStageRegisterGroups({
    records,
    stageOrder,
    yForStage,
    top: 80,
    bottom: 620,
    rowHeight: 20,
    headerHeight: 30,
    groupGap: 10,
  });
  const dense = groups.find((group) => group.stage === "VS-02");

  assert.ok(dense.groupHeight > 80);
  assert.equal(dense.rows.length, 12);
  assert.ok(dense.groupTop + dense.groupHeight <= 620);
});