/**
 * TrajectoryLegend — explains the node visual language once, rather than
 * requiring it be inferred from the chart. Plain HTML below the SVG, not
 * part of the render itself. Shared by the single-record trajectory and
 * the multi-record landscape — the visual language is the same in both.
 */
export default function TrajectoryLegend() {
  return (
    <div className="trajectory-legend" aria-label="Trajectory legend">
      <span className="trajectory-legend-item">
        <svg width="10" height="10" className="trajectory-legend-swatch" aria-hidden="true">
          <circle cx="5" cy="5" r="4" fill="var(--ink-mid)" />
        </svg>
        Filled — state transition
      </span>
      <span className="trajectory-legend-item">
        <svg width="10" height="10" className="trajectory-legend-swatch" aria-hidden="true">
          <circle cx="5" cy="5" r="3.5" fill="var(--paper)" stroke="var(--ink-mid)" strokeWidth="1.5" />
        </svg>
        Hollow — reaffirmation, no state change
      </span>
      <span className="trajectory-legend-item">
        <svg width="14" height="14" className="trajectory-legend-swatch" aria-hidden="true">
          <circle cx="7" cy="7" r="5.5" fill="none" stroke="var(--ink-mid)" strokeWidth="1.5" />
        </svg>
        Ring — current assessment
      </span>
    </div>
  );
}
