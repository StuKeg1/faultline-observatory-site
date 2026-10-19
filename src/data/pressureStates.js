/**
 * Canonical public pressure-state vocabulary.
 *
 * Audit is a supported legacy value retained for FR-QE-0001. It remains
 * selectable without being promoted into the current six-state vocabulary.
 */
export const CURRENT_PRESSURE_STATES = [
  { value: "emerging", label: "Emerging",
    definition: "The claim has entered the Observatory with credible evidence or a well-defined scientific question, but the evidence remains early, limited, or largely untested. The central uncertainty is still taking shape.",
    explanation: "Credible evidence or a defined scientific question is present, but the evidence remains early or largely untested." },
  { value: "escalating", label: "Escalating",
    definition: "Evidence is accumulating in a consistent direction and materially increasing confidence—or materially increasing pressure on the claim. Important developments are occurring, but significant uncertainties remain and the claim is still actively contested.",
    explanation: "Evidence is materially increasing confidence in—or pressure on—the claim; significant uncertainty remains." },
  { value: "stabilising", label: "Stabilising",
    definition: "The evidentiary picture has become relatively stable. New evidence continues to appear, but it largely reinforces the existing assessment rather than substantially changing it. The claim remains under active observation.",
    explanation: "New evidence largely reinforces the existing assessment; observation continues." },
  { value: "fragmenting", label: "Fragmenting",
    definition: "The evidence no longer points in a single direction. Different aspects of the claim begin to diverge, competing explanations emerge, or apparent progress in one area is offset by uncertainty in another. The claim requires deeper interpretation rather than a simple increase or decrease in confidence.",
    explanation: "Different aspects of the evidence point in different directions or support competing explanations." },
  { value: "resolving", label: "Resolving",
    definition: "The central uncertainty is approaching resolution. The remaining questions are narrower than those that originally defined the claim, and the evidence is converging toward a clear outcome. The claim has not yet been confirmed or closed.",
    explanation: "Evidence is converging toward an answer; the remaining questions are narrower, but resolution is incomplete." },
  { value: "collapsed", label: "Collapsed",
    definition: "The claim is no longer supported under current evidence. Critical evidence has failed, key assumptions have been overturned, or repeated investigation has left the central claim unsupported. The record remains part of the Observatory as a permanent account of how the evidence evolved.",
    explanation: "The claim is no longer supported by current evidence; its history remains available." },
];

export const LEGACY_PRESSURE_STATES = [
  { value: "audit", label: "Audit", legacy: true },
];

export const PRESSURE_STATE_FILTERS = [
  ...CURRENT_PRESSURE_STATES,
  ...LEGACY_PRESSURE_STATES,
];

const SUPPORTED_PRESSURE_STATES = new Set(
  PRESSURE_STATE_FILTERS.map(({ value }) => value)
);

export function isSupportedPressureState(value) {
  return SUPPORTED_PRESSURE_STATES.has(value);
}

export function assertSupportedPressureStates(records, getCurrentAssessment) {
  const unsupported = records
    .map((record) => ({ record, state: getCurrentAssessment(record).pressureState }))
    .filter(({ state }) => !isSupportedPressureState(state));

  if (unsupported.length > 0) {
    const details = unsupported
      .map(({ record, state }) => `${record.id}: ${state}`)
      .join(", ");
    throw new Error(`Unsupported current pressure state(s): ${details}`);
  }
}

/** Compact operator-approved rendering of the public Methodology definitions. */
export function getPressureStateExplanation(state) {
  return CURRENT_PRESSURE_STATES.find((entry) => entry.value === state)?.explanation
    ?? "Legacy or unrecognised state label; read the State Warrant for its recorded meaning.";
}
