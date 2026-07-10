import { deriveEvidenceTrajectory } from "../../data/deriveTrajectory.js";
import TrajectorySvg from "./TrajectorySvg.jsx";
import TrajectoryLegend from "./TrajectoryLegend.jsx";
import "./EvidenceTrajectory.css";

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
