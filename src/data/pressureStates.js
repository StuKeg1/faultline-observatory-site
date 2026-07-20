/**
 * Canonical public pressure-state vocabulary.
 *
 * Audit is a supported legacy value retained for FR-QE-0001. It remains
 * selectable without being promoted into the current six-state vocabulary.
 */
export const CURRENT_PRESSURE_STATES = [
  { value: "emerging", label: "Emerging" },
  { value: "escalating", label: "Escalating" },
  { value: "stabilising", label: "Stabilising" },
  { value: "fragmenting", label: "Fragmenting" },
  { value: "resolving", label: "Resolving" },
  { value: "collapsed", label: "Collapsed" },
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
