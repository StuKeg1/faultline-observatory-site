/**
 * deriveEvidenceLandscape.js — Evidence Trajectories, Prototype 002
 *
 * Derives a rendering projection for many Frontier Records plotted on
 * one shared time axis and one shared verification-stage axis. This
 * reuses the exact per-node visual language established by
 * deriveTrajectory.js (filled/hollow nodes, transition/reaffirm
 * segments, mutation ticks, a projected tail to "today") — moving from
 * one record to many changes only the coordinate space nodes are
 * plotted into (shared, not per-record), not what a node/segment/tick
 * means. Colour continues to encode pressureState, exactly as in the
 * single-record view — it does not encode which record a line belongs
 * to. Record identity is read from hover (every node/tick title is
 * prefixed with its record id) or the CurrentTrajectoryIndex list next
 * to the chart.
 *
 * Same rules as the single-record derivation: never mutates a record,
 * never duplicates assessment/mutation history, produces only the
 * positions the SVG renderer needs.
 *
 * Dodge: this corpus has batch-authored assessments, so it is common
 * for several records to share the exact same (date, verificationStage)
 * — a real coincidence, not a rendering artefact. Rendered literally,
 * those nodes would sit exactly on top of each other. Each such group
 * is nudged apart by a small fixed vertical offset (DODGE_STEP) purely
 * for legibility; it changes no data, and hovering any node still
 * reports its true date and stage.
 */

import { getAssessmentHistory, getPressureStateLabel, getStateBadgeClass } from "./derive.js";
import { VS_STAGES, getStateColor, yForStage } from "./trajectoryVisuals.js";

const VIEWBOX_WIDTH = 960;
const VIEWBOX_HEIGHT = 340;
const MARGIN = { top: 24, right: 40, bottom: 40, left: 56 };
const plotWidth = VIEWBOX_WIDTH - MARGIN.left - MARGIN.right;
const plotHeight = VIEWBOX_HEIGHT - MARGIN.top - MARGIN.bottom;

// Vertical offset per member of a same-(date, verificationStage) group.
// At this chart's stage spacing (plotHeight / 4 ≈ 69px between stages),
// the largest group in the current corpus (6 records) spreads to ±20px
// — comfortably inside the band without approaching the neighbouring
// stage's gridline.
const DODGE_STEP = 8;

function xForTime(time, domainStart, domainSpan) {
  if (domainSpan === 0) return MARGIN.left;
  return MARGIN.left + ((time - domainStart) / domainSpan) * plotWidth;
}

function yForVS(vsCode) {
  return yForStage(vsCode, MARGIN.top, plotHeight);
}

/**
 * Finds the node in effect at a given time: pressureState/
 * verificationStage is a step function over time, holding at whatever
 * the most recent assessment set it to. A mutation after the last
 * assessment still belongs at the current stage.
 */
function nodeInEffectAt(time, nodes) {
  let node = nodes[0];
  for (const candidate of nodes) {
    if (candidate.time > time) break;
    node = candidate;
  }
  return node;
}

export function deriveEvidenceLandscape(records, asOfDate = new Date().toISOString().slice(0, 10)) {
  const perRecordHistory = records.map((record) => ({ record, history: getAssessmentHistory(record) }));

  const allTimes = perRecordHistory.flatMap(({ history }) => history.map((a) => Date.parse(a.date)));
  const firstTime = Math.min(...allTimes);
  const lastAssessmentTime = Math.max(...allTimes);
  const asOfTime = Date.parse(asOfDate);
  const domainEnd = Math.max(lastAssessmentTime, asOfTime);
  const domainSpan = domainEnd - firstTime;

  // Pass 1 — raw node positions per record, before dodge.
  const nodesByRecord = perRecordHistory.map(({ record, history }) =>
    history.map((assessment, index) => ({
      recordId: record.id,
      assessmentId: assessment.id,
      date: assessment.date,
      time: Date.parse(assessment.date),
      pressureState: assessment.pressureState,
      pressureLabel: getPressureStateLabel(assessment.pressureState),
      stateBadgeClass: getStateBadgeClass(assessment.pressureState),
      verificationStage: assessment.verificationStage,
      color: getStateColor(assessment.pressureState),
      x: xForTime(Date.parse(assessment.date), firstTime, domainSpan),
      y: yForVS(assessment.verificationStage),
      isCurrent: index === history.length - 1,
      isTransition: index === 0 || history[index - 1].pressureState !== assessment.pressureState,
    }))
  );

  // Pass 2 — group every node across every record by exact (date, stage)
  // coincidence; dodge each group apart, centred on the true position.
  const collisionGroups = new Map();
  for (const nodes of nodesByRecord) {
    for (const node of nodes) {
      const key = `${node.date}|${node.verificationStage}`;
      if (!collisionGroups.has(key)) collisionGroups.set(key, []);
      collisionGroups.get(key).push(node);
    }
  }
  for (const group of collisionGroups.values()) {
    if (group.length < 2) continue;
    group.sort((a, b) => a.recordId.localeCompare(b.recordId));
    const center = (group.length - 1) / 2;
    group.forEach((node, i) => {
      node.y += (i - center) * DODGE_STEP;
    });
  }

  // Pass 3 — segments, mutation ticks, and the projected tail per
  // record, from the (possibly dodged) node positions.
  const recordTrajectories = perRecordHistory.map(({ record }, i) => {
    const nodes = nodesByRecord[i];
    const lastNode = nodes[nodes.length - 1];

    const segments = [];
    for (let j = 1; j < nodes.length; j++) {
      const from = nodes[j - 1];
      const to = nodes[j];
      segments.push({
        id: `${from.assessmentId}-${to.assessmentId}`,
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y,
        stateChanged: from.pressureState !== to.pressureState,
      });
    }

    const showsProjection = asOfTime > lastNode.time;
    const projectedSegment = showsProjection
      ? { x1: lastNode.x, y1: lastNode.y, x2: xForTime(domainEnd, firstTime, domainSpan), y2: lastNode.y }
      : null;

    const mutationTicks = (record.mutationLog ?? []).map((mutation) => {
      const time = Date.parse(mutation.date);
      const controllingNode = nodeInEffectAt(time, nodes);
      return {
        mutationId: mutation.id,
        recordId: record.id,
        date: mutation.date,
        field: mutation.field,
        note: mutation.note,
        x: xForTime(time, firstTime, domainSpan),
        y: controllingNode.y,
      };
    });

    return {
      recordId: record.id,
      recordLabel: record.claim.shortLabel,
      programme: record.programme,
      recordUrl: `/the-record/${record.id.toLowerCase()}/`,
      nodes,
      segments,
      projectedSegment,
      mutationTicks,
      currentNode: lastNode,
    };
  });

  // Year gridlines — a static, always-visible breadcrumb so a point
  // deep in the chart can still be read against the calendar without
  // needing a hover-tracking interaction.
  const years = [];
  const startYear = new Date(firstTime).getUTCFullYear();
  const endYear = new Date(domainEnd).getUTCFullYear();
  for (let year = startYear; year <= endYear; year++) {
    const time = Date.UTC(year, 0, 1);
    if (time < firstTime || time > domainEnd) continue;
    years.push({ year, x: xForTime(time, firstTime, domainSpan) });
  }

  return {
    viewBox: { width: VIEWBOX_WIDTH, height: VIEWBOX_HEIGHT },
    axis: {
      stages: VS_STAGES.map((vsCode) => ({ vsCode, y: yForVS(vsCode) })),
      years,
      x1: 0,
      x2: VIEWBOX_WIDTH,
      plotTop: MARGIN.top,
      plotBottom: MARGIN.top + plotHeight,
    },
    today: { x: xForTime(domainEnd, firstTime, domainSpan) },
    records: recordTrajectories,
  };
}
