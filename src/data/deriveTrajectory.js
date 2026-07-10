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
import { VS_STAGES, getStateColor, yForStage as yForStageIn } from "./trajectoryVisuals.js";

const VIEWBOX_WIDTH = 720;
const VIEWBOX_HEIGHT = 260;
const MARGIN = { top: 20, right: 32, bottom: 32, left: 48 };

const plotWidth = VIEWBOX_WIDTH - MARGIN.left - MARGIN.right;
const plotHeight = VIEWBOX_HEIGHT - MARGIN.top - MARGIN.bottom;

// Minimum pixel width reserved for the "since last assessment" projected
// segment. On a long-running record, the true elapsed-time proportion
// since the last assessment can be a few pixels wide next to years of
// prior history — a strict linear scale would render it as effectively
// invisible. This floor only ever adds width: if the real elapsed-time
// proportion is already this wide or wider, the floor does nothing and
// the true proportional width is used.
const MIN_PROJECTED_SEGMENT_WIDTH = 28;

/**
 * Positions a date along the trajectory's time axis — a strict linear
 * time-scale over [domainStart, domainStart + domainSpan], drawn into a
 * plot region of the given width. Not a shared or reusable timeline
 * engine, just this trajectory's coordinate space.
 */
function xForTime(time, domainStart, domainSpan, regionWidth) {
  if (domainSpan === 0) return MARGIN.left;
  return MARGIN.left + ((time - domainStart) / domainSpan) * regionWidth;
}

function clamp01(fraction) {
  return Math.min(Math.max(fraction, 0), 1);
}

/** Positions a verification stage on this trajectory's vertical axis. */
function yForStage(vsCode) {
  return yForStageIn(vsCode, MARGIN.top, plotHeight);
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
  const historySpan = lastAssessmentTime - firstTime;

  const showsProjection = asOfTime > lastAssessmentTime;

  // The chart is split into two regions: real assessment history, and
  // (when applicable) the projected run from the last assessment to
  // today. Each region is its own strict linear time-scale — history is
  // never distorted to fit the projection, and the projection is never
  // distorted to fit history. The only adjustment is how much of the
  // chart's total width each region gets, per MIN_PROJECTED_SEGMENT_WIDTH
  // above.
  let projectedWidth = 0;
  if (showsProjection) {
    const domainSpan = asOfTime - firstTime;
    const naturalProjectedWidth = domainSpan > 0 ? ((asOfTime - lastAssessmentTime) / domainSpan) * plotWidth : plotWidth;
    projectedWidth = Math.max(naturalProjectedWidth, MIN_PROJECTED_SEGMENT_WIDTH);
  }
  const historyPlotWidth = plotWidth - projectedWidth;

  const nodes = history.map((assessment, index) => ({
    assessmentId: assessment.id,
    date: assessment.date,
    pressureState: assessment.pressureState,
    pressureLabel: getPressureStateLabel(assessment.pressureState),
    stateBadgeClass: getStateBadgeClass(assessment.pressureState),
    verificationStage: assessment.verificationStage,
    color: getStateColor(assessment.pressureState),
    x: xForTime(Date.parse(assessment.date), firstTime, historySpan, historyPlotWidth),
    y: yForStage(assessment.verificationStage),
    isCurrent: index === history.length - 1,
    // First assessment establishes the state, same visual language as a
    // transition. Every later assessment is a transition only if
    // pressureState actually changed from the one before it — otherwise
    // it's a reaffirmation (new evidence logged, stage held).
    isTransition: index === 0 || history[index - 1].pressureState !== assessment.pressureState,
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
  const todayMarker = showsProjection
    ? { date: asOfDate, x: lastNode.x + projectedWidth, y: lastNode.y }
    : null;
  const projectedSegment = showsProjection
    ? { x1: lastNode.x, y1: lastNode.y, x2: todayMarker.x, y2: todayMarker.y }
    : null;

  const mutationTicks = (record.mutationLog ?? []).map((mutation) => {
    const time = Date.parse(mutation.date);
    const isProjected = showsProjection && time > lastAssessmentTime;
    const x = isProjected
      ? lastNode.x + clamp01((time - lastAssessmentTime) / (asOfTime - lastAssessmentTime)) * projectedWidth
      : xForTime(time, firstTime, historySpan, historyPlotWidth);
    return {
      mutationId: mutation.id,
      date: mutation.date,
      field: mutation.field,
      note: mutation.note,
      x,
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
