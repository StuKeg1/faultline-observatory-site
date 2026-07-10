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
      <div className="reading-lens-rows">
        <div className="reading-lens-group" role="group" aria-label="Read a programme">
          <span className="reading-lens-group-label">Programme</span>
          {programmeOptions.map((p) => {
            const active = activeProgrammes.includes(p.id);
            return (
              <button
                key={p.id}
                type="button"
                className="reading-chip"
                aria-pressed={active}
                data-active={active || undefined}
                onClick={() => onToggleProgramme(p.id)}
              >
                {p.name}
                {active && (
                  <span className="reading-chip-remove" aria-hidden="true">
                    ×
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div className="reading-lens-group" role="group" aria-label="Read current assessment">
          <span className="reading-lens-group-label">Current assessment</span>
          {stateOptions.map((s) => {
            const active = activeStates.includes(s.value);
            return (
              <button
                key={s.value}
                type="button"
                className="reading-chip reading-chip--state"
                aria-pressed={active}
                data-active={active || undefined}
                onClick={() => onToggleState(s.value)}
              >
                <StateBadge pressureState={s.value} />
                {active && (
                  <span className="reading-chip-remove" aria-hidden="true">
                    ×
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* Appears whenever either axis has an active chip (see
          EvidenceLandscape's hasActiveReading = focused !== null) — the
          escape hatch out of any composed Reading, always in the same
          bottom-right spot regardless of how many chips are active or
          how the rows above have wrapped. */}
      {hasActiveReading && (
        <div className="reading-clear-row">
          <button type="button" className="reading-clear" onClick={onClear}>
            Clear reading
          </button>
        </div>
      )}
    </div>
  );
}
