/**
 * deriveTrajectory.js — Evidence Trajectories, Prototype 001
 *
 * Derives a rendering projection for one Frontier Record's trajectory
 * from its canonical assessments[]. This is a view model, not a second
 * data model:
 * - never mutates the FCIF record
 * - never duplicates assessment history — reads getAssessmentHistory()
 * - produces only the positions/labels the SVG renderer needs
 *
 * Current Assessment remains canonical (assessments[last]); the
 * "current node" here is a rendering pointer to it, not a second
 * source of truth.
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
 * Positions a date along the trajectory's time axis. The axis spans the
 * record's own first-to-last assessment dates — it is not a shared or
 * reusable timeline engine, just this trajectory's coordinate space.
 */
function xForDate(date, firstTime, timeSpan) {
  const t = Date.parse(date);
  if (timeSpan === 0) return MARGIN.left;
  return MARGIN.left + ((t - firstTime) / timeSpan) * plotWidth;
}

/** Positions a verification stage on the vertical axis — VS-01 low, VS-05 high. */
function yForStage(vsCode) {
  const rank = VS_STAGES.indexOf(vsCode);
  const step = plotHeight / (VS_STAGES.length - 1);
  return MARGIN.top + plotHeight - rank * step;
}

/**
 * Derives an Evidence Trajectory rendering projection from one Frontier
 * Record. Entirely derived from record.assessments via getAssessmentHistory();
 * the record itself is never modified.
 */
export function deriveEvidenceTrajectory(record) {
  const history = getAssessmentHistory(record);

  const firstTime = Date.parse(history[0].date);
  const lastTime = Date.parse(history[history.length - 1].date);
  const timeSpan = lastTime - firstTime;

  const nodes = history.map((assessment, index) => ({
    assessmentId: assessment.id,
    date: assessment.date,
    pressureState: assessment.pressureState,
    pressureLabel: getPressureStateLabel(assessment.pressureState),
    stateBadgeClass: getStateBadgeClass(assessment.pressureState),
    verificationStage: assessment.verificationStage,
    color: getStateColor(assessment.pressureState),
    x: xForDate(assessment.date, firstTime, timeSpan),
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

  return {
    recordId: record.id,
    recordLabel: record.claim.shortLabel,
    viewBox: { width: VIEWBOX_WIDTH, height: VIEWBOX_HEIGHT },
    axis: {
      stages: VS_STAGES.map((vsCode) => ({ vsCode, y: yForStage(vsCode) })),
      x1: MARGIN.left,
      x2: VIEWBOX_WIDTH - MARGIN.right,
    },
    nodes,
    segments,
    currentNode: nodes[nodes.length - 1],
  };
}
