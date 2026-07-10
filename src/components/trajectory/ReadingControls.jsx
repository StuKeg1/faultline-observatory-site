import StateBadge from "../StateBadge.jsx";

/**
 * ReadingControls — the atlas's only exploration surface. Toggling a chip
 * adds or removes one Lens value from the active Reading; nothing here
 * ever removes a trajectory from the chart below, it only changes which
 * composition of Lenses is active (see deriveReading.js). Comparison
 * isn't a separate mode — selecting a second programme chip is the same
 * toggle as the first, so a Reading naturally grows from single-programme
 * focus into comparison without a dedicated "compare" control.
 */
export default function ReadingControls({
  programmeOptions,
  stateOptions,
  activeProgrammes,
  activeStates,
  onToggleProgramme,
  onToggleState,
  onClear,
  hasActiveReading,
}) {
  return (
    <div className="reading-controls" aria-label="Reading lenses">
      <div className="reading-lens-group" role="group" aria-label="Read a programme">
        <span className="reading-lens-group-label">Programme</span>
        {programmeOptions.map((p) => (
          <button
            key={p.id}
            type="button"
            className="reading-chip"
            aria-pressed={activeProgrammes.includes(p.id)}
            data-active={activeProgrammes.includes(p.id) || undefined}
            onClick={() => onToggleProgramme(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="reading-lens-group" role="group" aria-label="Read current assessment">
        <span className="reading-lens-group-label">Current assessment</span>
        {stateOptions.map((s) => (
          <button
            key={s.value}
            type="button"
            className="reading-chip reading-chip--state"
            aria-pressed={activeStates.includes(s.value)}
            data-active={activeStates.includes(s.value) || undefined}
            onClick={() => onToggleState(s.value)}
          >
            <StateBadge pressureState={s.value} />
          </button>
        ))}
      </div>
      {hasActiveReading && (
        <button type="button" className="reading-clear" onClick={onClear}>
          Clear reading
        </button>
      )}
    </div>
  );
}
