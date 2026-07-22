/**
 * trajectoryVisuals.js — shared visual mapping for Evidence Trajectories.
 *
 * Used by both the single-record trajectory (deriveTrajectory.js) and
 * the multi-record landscape (deriveEvidenceLandscape.js) so the two
 * views render pressureState/verificationStage identically — same
 * colors, same vertical stage positions. Nothing here is specific to
 * either view's layout (margins, widths); callers supply their own
 * plot geometry.
 */

export const VS_STAGES = ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"];

export const VS_STAGE_LABELS = Object.freeze({
  "VS-01": "Assertion",
  "VS-02": "Published",
  "VS-03": "Audit",
  "VS-04": "Replication",
  "VS-05": "Operation",
});

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

export function getStateColor(pressureState) {
  const variable = STATE_COLOR_VAR[pressureState] ?? "--state-assertion";
  return `var(${variable})`;
}

/** Positions a verification stage within a vertical plot region — VS-01 low, VS-05 high. */
export function yForStage(vsCode, plotTop, plotHeight) {
  const rank = VS_STAGES.indexOf(vsCode);
  const step = plotHeight / (VS_STAGES.length - 1);
  return plotTop + plotHeight - rank * step;
}
