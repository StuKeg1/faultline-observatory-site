import { deriveEvidenceTrajectory } from "../../data/deriveTrajectory.js";
import TrajectorySvg from "./TrajectorySvg.jsx";
import "./EvidenceTrajectory.css";

/**
 * TrajectoryLegend — explains the node visual language once, rather than
 * requiring it be inferred from the chart. Plain HTML below the SVG, not
 * part of the render itself.
 */
function TrajectoryLegend() {
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

/**
 * EvidenceTrajectory — top-level wrapper. Derives the rendering
 * projection from one Frontier Record and renders it as a static SVG
 * trajectory. Prototype 001: one record, one trajectory, no interaction
 * beyond node/tick hover.
 */
export default function EvidenceTrajectory({ record }) {
  const projection = deriveEvidenceTrajectory(record);
  return (
    <div className="evidence-trajectory">
      <div className="trajectory-scroll">
        <TrajectorySvg projection={projection} />
      </div>
      <TrajectoryLegend />
    </div>
  );
}
