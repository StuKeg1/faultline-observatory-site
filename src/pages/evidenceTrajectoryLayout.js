export const DOCUMENTARY_PHASES = [
  {
    id: "origins",
    heading: "Origins",
    subheading: "First assessments",
    footer: "Earliest recorded assessments",
    weight: 18,
  },
  {
    id: "early",
    heading: "Early evidence",
    subheading: "Initial evaluation",
    footer: "Initial evaluations & early evidence",
    weight: 22,
  },
  {
    id: "accumulating",
    heading: "Accumulating evidence",
    subheading: "Reassessment & convergence",
    footer: "Evidence accumulation & reassessments",
    weight: 25,
  },
  {
    id: "runway",
    heading: "Present runway",
    subheading: "Approach to current assessment",
    footer: "Final evaluation & convergence",
    weight: 28,
  },
];

const PHASE_BY_ID = new Map(DOCUMENTARY_PHASES.map((phase) => [phase.id, phase]));

export function assignEventsToDocumentaryPhases(history) {
  if (!history.length) return [];
  if (history.length === 1) {
    return [
      { assessment: history[0], phaseId: "origins", role: "origin", index: 0 },
      { assessment: history[0], phaseId: "today", role: "current", index: 0 },
    ];
  }
  const lastIndex = history.length - 1;
  return history.map((assessment, index) => {
    if (index === 0) return { assessment, phaseId: "origins", role: "origin", index };
    if (index === lastIndex) return { assessment, phaseId: "today", role: "current", index };

    const ordinalPosition = index / lastIndex;
    if (ordinalPosition <= 0.34) return { assessment, phaseId: "early", role: "intermediate", index };
    if (ordinalPosition <= 0.7) return { assessment, phaseId: "accumulating", role: "intermediate", index };
    return { assessment, phaseId: "runway", role: "intermediate", index };
  });
}

export function calculatePhaseCoordinates({ left, right }) {
  const totalWeight = DOCUMENTARY_PHASES.reduce((sum, phase) => sum + phase.weight, 0);
  const width = right - left;
  let cursor = left;
  return DOCUMENTARY_PHASES.map((phase) => {
    const phaseWidth = (phase.weight / totalWeight) * width;
    const next = {
      ...phase,
      left: cursor,
      right: cursor + phaseWidth,
      center: cursor + phaseWidth / 2,
      width: phaseWidth,
    };
    cursor += phaseWidth;
    return next;
  });
}

export function calculateEventX({ event, phaseCoordinates, todayX, historyLength }) {
  if (event.phaseId === "today") return todayX;
  const phase = phaseCoordinates.find((item) => item.id === event.phaseId) ?? PHASE_BY_ID.get(event.phaseId);
  if (!phase?.left && phase?.left !== 0) return todayX;
  if (event.phaseId === "origins") return phase.left + phase.width * 0.18;

  const denominator = Math.max(1, historyLength - 1);
  const ordinal = event.index / denominator;
  const phaseStart = event.phaseId === "early" ? 0.18 : event.phaseId === "accumulating" ? 0.36 : 0.72;
  const phaseEnd = event.phaseId === "early" ? 0.34 : event.phaseId === "accumulating" ? 0.7 : 0.98;
  const local = Math.max(0, Math.min(1, (ordinal - phaseStart) / Math.max(0.01, phaseEnd - phaseStart)));
  return phase.left + phase.width * (0.22 + local * 0.56);
}

export function phaseDateSummaries(trajectories) {
  const phaseDates = new Map(DOCUMENTARY_PHASES.map((phase) => [phase.id, []]));
  trajectories.forEach((trajectory) => {
    assignEventsToDocumentaryPhases(trajectory.history).forEach((event) => {
      if (event.phaseId !== "today") phaseDates.get(event.phaseId)?.push(event.assessment.date);
    });
  });
  return DOCUMENTARY_PHASES.map((phase) => {
    const dates = (phaseDates.get(phase.id) ?? []).sort();
    if (!dates.length) return { phaseId: phase.id, summary: "" };
    const first = dates[0].slice(0, 4);
    const last = dates.at(-1).slice(0, 4);
    return { phaseId: phase.id, summary: first === last ? first : `${first} - ${last}` };
  });
}

export function calculateTerminalNodeLayout({ records, yForStage, minGap = 18 }) {
  const groups = new Map();
  records.forEach((record) => {
    const stage = record.current.verificationStage;
    groups.set(stage, [...(groups.get(stage) ?? []), record]);
  });

  const layout = new Map();
  groups.forEach((items, stage) => {
    const ordered = [...items].sort((a, b) => a.record.id.localeCompare(b.record.id));
    const trueY = yForStage(stage);
    const center = (ordered.length - 1) / 2;
    ordered.forEach((item, index) => {
      const dodgeOffset = (index - center) * minGap;
      const previousStage = item.history?.at(-2)?.verificationStage ?? item.current.verificationStage;
      layout.set(item.record.id, {
        recordId: item.record.id,
        previousTrueY: yForStage(previousStage),
        trueY,
        nodeY: trueY + dodgeOffset,
        labelY: trueY + dodgeOffset,
        labelHeight: 0,
        dodgeOffset,
        order: index,
      });
    });
  });

  return layout;
}

function truncateText(text, limit) {
  if (text.length <= limit) return text;
  return `${text.slice(0, Math.max(0, limit - 3)).trimEnd()}...`;
}

function wrapText(text, maxCharsPerLine, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const proposed = current ? `${current} ${word}` : word;
    if (proposed.length <= maxCharsPerLine) {
      current = proposed;
      return;
    }
    if (current) lines.push(current);
    current = word;
  });
  if (current) lines.push(current);

  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  kept[maxLines - 1] = truncateText(kept[maxLines - 1], maxCharsPerLine);
  return kept;
}

export function estimateRegisterLabelMetrics(title, options = {}) {
  const {
    maxCharsPerLine = 34,
    maxTitleLines = 1,
    idLineHeight = 11,
    titleLineHeight = 10,
    lineGap = 3,
    verticalPadding = 2,
  } = options;
  const normalized = String(title ?? "").replace(/\s+/g, " ").trim();
  const titleLines = maxTitleLines <= 1
    ? [truncateText(normalized, maxCharsPerLine)]
    : wrapText(normalized, maxCharsPerLine, maxTitleLines);
  return {
    titleLines,
    labelHeight: idLineHeight + lineGap + titleLines.length * titleLineHeight + verticalPadding,
  };
}

export function calculateRegisterLayout({
  terminalItems,
  top,
  bottom,
  minGap = 4,
  defaultLabelHeight = 26,
  labelGap = 0,
}) {
  const ordered = [...terminalItems].sort((a, b) => {
    if (a.nodeY !== b.nodeY) return a.nodeY - b.nodeY;
    if (a.trueY !== b.trueY) return a.trueY - b.trueY;
    return a.recordId.localeCompare(b.recordId);
  });

  const rows = ordered.map((item, index) => ({
    ...item,
    order: index,
    desiredLabelY: item.nodeY,
    labelY: item.nodeY,
    labelHeight: item.labelHeight || defaultLabelHeight,
  }));

  rows.forEach((row, index) => {
    const minCenter = top + row.labelHeight / 2;
    if (index === 0) {
      row.labelY = Math.max(row.desiredLabelY, minCenter);
      return;
    }
    const previous = rows[index - 1];
    const previousBottom = previous.labelY + previous.labelHeight / 2;
    row.labelY = Math.max(row.desiredLabelY, previousBottom + minGap + row.labelHeight / 2);
  });

  const last = rows.at(-1);
  const overflow = last ? Math.max(0, last.labelY + last.labelHeight / 2 - bottom) : 0;
  if (overflow) rows.forEach((row) => { row.labelY -= overflow; });

  for (let index = rows.length - 2; index >= 0; index -= 1) {
    const next = rows[index + 1];
    const maxCenter = next.labelY - next.labelHeight / 2 - minGap - rows[index].labelHeight / 2;
    rows[index].labelY = Math.min(rows[index].labelY, maxCenter);
  }

  const first = rows[0];
  const underflow = first ? Math.max(0, top - (first.labelY - first.labelHeight / 2)) : 0;
  if (underflow) rows.forEach((row) => { row.labelY += underflow; });

  const layout = new Map();
  rows.forEach((row) => {
    layout.set(row.recordId, {
      ...row,
      needsBaselineLeader: Math.abs(row.nodeY - row.trueY) > 2,
      needsLabelLeader: Math.abs(row.labelY - row.nodeY) > labelGap,
      overflowTop: row.labelY - row.labelHeight / 2 < top,
      overflowBottom: row.labelY + row.labelHeight / 2 > bottom,
    });
  });
  return layout;
}
export function calculateStageRegisterGroups({
  records,
  stageOrder,
  yForStage,
  top,
  bottom,
  rowHeight = 20,
  headerHeight = 30,
  groupGap = 12,
}) {
  const groups = stageOrder.map((stage) => {
    const rows = records
      .filter((record) => record.current.verificationStage === stage)
      .sort((a, b) => a.record.id.localeCompare(b.record.id))
      .map((record, index) => ({
        recordId: record.record.id,
        labelY: 0,
        title: record.record.claim.shortLabel,
        order: index,
      }));
    const displayRowCount = Math.max(1, rows.length);
    const groupHeight = headerHeight + displayRowCount * rowHeight;
    const trueY = yForStage(stage);
    return {
      stage,
      trueY,
      desiredTop: trueY - groupHeight / 2,
      groupTop: 0,
      groupHeight,
      rowHeight,
      headerHeight,
      emptyLabelY: 0,
      rows,
    };
  });

  let cursor = 0;
  groups.forEach((group, index) => {
    group.relativeTop = cursor;
    cursor += group.groupHeight + (index < groups.length - 1 ? groupGap : 0);
  });

  const stackHeight = cursor;
  const availableHeight = bottom - top;
  const maxOffset = Math.max(top, bottom - stackHeight);
  const desiredOffset = groups.length
    ? groups.reduce((sum, group) => sum + group.desiredTop - group.relativeTop, 0) / groups.length
    : top;
  const offset = Math.max(top, Math.min(maxOffset, desiredOffset));

  groups.forEach((group) => {
    group.groupTop = offset + group.relativeTop;
    group.emptyLabelY = group.groupTop + group.headerHeight + group.rowHeight / 2;
    group.rows = group.rows.map((row, index) => ({
      ...row,
      labelY: group.groupTop + group.headerHeight + index * group.rowHeight + group.rowHeight / 2,
    }));
    delete group.relativeTop;
  });

  const rowLayout = new Map();
  groups.forEach((group) => {
    group.rows.forEach((row) => {
      rowLayout.set(row.recordId, {
        ...row,
        stage: group.stage,
        trueY: group.trueY,
        groupTop: group.groupTop,
      });
    });
  });

  return { groups, rowLayout, stackHeight, availableHeight };
}