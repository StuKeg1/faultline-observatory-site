/**
 * deriveTrajectory.js — Evidence Trajectories, Prototype 001
 *
 * Derives a rendering projection for one Frontier Record's trajectory
 * from its canonical assessments[] and mutationLog[]. This is a view
 * model, not a second data model:
 * - never mutates the FCIF record
 * - never duplicates assessment or mutation history — reads them via
 *   getAssessmentHistory() and record.mutationLog
 * - produces only the positions/labels the SVG renderer needs
 *
 * Current Assessment remains canonical (assessments[last]); the
 * "current node" here is a rendering pointer to it, not a second
 * source of truth. Likewise the "today" marker is a rendering-only
 * reference point — it asserts nothing about the record's state,
 * it just shows how much time has passed since the last assessment.
 */

import {
  getAssessmentHistory,
  getStateBadgeClass,
  getPressureStateLabel,
} from "./derive.js";

const VS_STAGES = ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"];

const VIEWBOX_WIDTH = 720;
const VIEWBOX_HEIGHT = 260;
const MARGIN = { top: 20, right: 32, bottom: 32, left: 48 };

const STATE_COLOR_VAR = {
  assertion: "--state-assertion",
  published: "--state-published",
  audit: "--state-audit",
  replication: "--state-replication",
  operation: "--state-operation",
  validated: "--state-validated",
  contested: "--state-contested",
  emerging: "--state-emerging",
  escalating: "--state-escalating",
  stabilising: "--state-stabilising",
  fragmenting: "--state-fragmenting",
  resolving: "--state-resolving",
  collapsed: "--state-collapsed",
};

function getStateColor(pressureState) {
  const variable = STATE_COLOR_VAR[pressureState] ?? "--state-assertion";
  return `var(${variable})`;
}

const plotWidth = VIEWBOX_WIDTH - MARGIN.left - MARGIN.right;
const plotHeight = VIEWBOX_HEIGHT - MARGIN.top - MARGIN.bottom;

/**
 * Positions a date along the trajectory's time axis — a strict linear
 * time-scale over [domainStart, domainStart + domainSpan]. Not a shared
 * or reusable timeline engine, just this trajectory's coordinate space.
 */
function xForTime(time, domainStart, domainSpan) {
  if (domainSpan === 0) return MARGIN.left;
  return MARGIN.left + ((time - domainStart) / domainSpan) * plotWidth;
}

/** Positions a verification stage on the vertical axis — VS-01 low, VS-05 high. */
function yForStage(vsCode) {
  const rank = VS_STAGES.indexOf(vsCode);
  const step = plotHeight / (VS_STAGES.length - 1);
  return MARGIN.top + plotHeight - rank * step;
}

/**
 * Finds the y position a mutation belongs at: the verification stage in
 * effect on the mutation's date. pressureState/verificationStage is a
 * step function over time — it holds at whatever the most recent
 * assessment set it to, not an interpolation between assessments. A
 * mutation after the last assessment (e.g. one dated after the record's
 * newest assessment) still belongs at the current stage, since nothing
 * has moved it since.
 */
function stageInEffectAt(time, nodes) {
  let node = nodes[0];
  for (const candidate of nodes) {
    if (Date.parse(candidate.date) > time) break;
    node = candidate;
  }
  return node.y;
}

/**
 * Derives an Evidence Trajectory rendering projection from one Frontier
 * Record. Entirely derived from record.assessments and record.mutationLog;
 * the record itself is never modified.
 *
 * asOfDate defaults to the real current date — this is the one
 * intentionally impure boundary in an otherwise pure derivation: the
 * trajectory needs to know "how long has it been" to render an honest
 * gap since the last assessment. Pass an explicit asOfDate to keep a
 * render deterministic (tests, screenshots).
 */
export function deriveEvidenceTrajectory(record, asOfDate = new Date().toISOString().slice(0, 10)) {
  const history = getAssessmentHistory(record);

  const firstTime = Date.parse(history[0].date);
  const lastAssessmentTime = Date.parse(history[history.length - 1].date);
  const asOfTime = Date.parse(asOfDate);

  // Domain extends to "today" whenever today is later than the last
  // assessment, so the flat run since the last assessment is visible
  // as a real gap rather than the chart ending at its own last point.
  const domainEnd = Math.max(lastAssessmentTime, asOfTime);
  const domainSpan = domainEnd - firstTime;

  const nodes = history.map((assessment, index) => ({
    assessmentId: assessment.id,
    date: assessment.date,
    pressureState: assessment.pressureState,
    pressureLabel: getPressureStateLabel(assessment.pressureState),
    stateBadgeClass: getStateBadgeClass(assessment.pressureState),
    verificationStage: assessment.verificationStage,
    color: getStateColor(assessment.pressureState),
    x: xForTime(Date.parse(assessment.date), firstTime, domainSpan),
    y: yForStage(assessment.verificationStage),
    isCurrent: index === history.length - 1,
  }));

  const segments = [];
  for (let i = 1; i < nodes.length; i++) {
    const from = nodes[i - 1];
    const to = nodes[i];
    segments.push({
      id: `${from.assessmentId}-${to.assessmentId}`,
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      stateChanged: from.pressureState !== to.pressureState,
    });
  }

  const lastNode = nodes[nodes.length - 1];

  // Projected segment + today marker: only rendered when "today" is
  // actually later than the last assessment. Shows the last assessment
  // was a milestone reached on its way, not the end of the record's story.
  const showsProjection = asOfTime > lastAssessmentTime;
  const todayMarker = showsProjection
    ? {
        date: asOfDate,
        x: xForTime(asOfTime, firstTime, domainSpan),
        y: lastNode.y,
      }
    : null;
  const projectedSegment = showsProjection
    ? { x1: lastNode.x, y1: lastNode.y, x2: todayMarker.x, y2: todayMarker.y }
    : null;

  const mutationTicks = (record.mutationLog ?? []).map((mutation) => {
    const time = Date.parse(mutation.date);
    return {
      mutationId: mutation.id,
      date: mutation.date,
      field: mutation.field,
      x: xForTime(time, firstTime, domainSpan),
      y: stageInEffectAt(time, nodes),
    };
  });

  return {
    recordId: record.id,
    recordLabel: record.claim.shortLabel,
    viewBox: { width: VIEWBOX_WIDTH, height: VIEWBOX_HEIGHT },
    axis: {
      stages: VS_STAGES.map((vsCode) => ({ vsCode, y: yForStage(vsCode) })),
      x1: 0,
      x2: VIEWBOX_WIDTH,
    },
    nodes,
    segments,
    projectedSegment,
    todayMarker,
    mutationTicks,
    currentNode: lastNode,
  };
}
