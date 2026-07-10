import { Link } from "react-router-dom";
import { deriveEvidenceLandscape } from "../../data/deriveEvidenceLandscape.js";
import LandscapeSvg from "./LandscapeSvg.jsx";
import TrajectoryLegend from "./TrajectoryLegend.jsx";
import StateBadge from "../StateBadge.jsx";
import "./EvidenceTrajectory.css";

/**
 * TrajectoryIndex — the reliable way to tell which line is which:
 * colour on this chart encodes pressureState (the same visual language
 * as the single-record view), not record identity, so a list is the
 * fallback alongside hover tooltips and hover-to-isolate.
 */
function TrajectoryIndex({ records }) {
  return (
    <ul className="landscape-index" aria-label="Records in this landscape">
      {records.map((trajectory) => (
        <li
          key={trajectory.recordId}
          className="landscape-index-item"
          data-record-id={trajectory.recordId}
        >
          <Link to={trajectory.recordUrl} className="landscape-index-link">
            <span className="landscape-index-id">{trajectory.recordId}</span>
            <span className="landscape-index-label">{trajectory.recordLabel}</span>
            <StateBadge pressureState={trajectory.currentNode.pressureState} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * EvidenceLandscape — top-level wrapper for Prototype 002. Derives the
 * shared-axis rendering projection from many Frontier Records and
 * renders it as one static SVG landscape, reusing the exact node/
 * segment/tick visual language from the single-record trajectory.
 */
export default function EvidenceLandscape({ records }) {
  const projection = deriveEvidenceLandscape(records);
  return (
    <div className="evidence-trajectory evidence-landscape">
      <div className="trajectory-scroll">
        <LandscapeSvg projection={projection} />
      </div>
      <p className="landscape-dodge-note">
        Nodes stacked vertically at the same point — including the current-assessment rings along the
        "Today" line — share an exact assessment date and verification stage. The spread is a legibility
        offset only, not sub-stages within VS-01–VS-05. Hover any node for its true date and stage.
      </p>
      <TrajectoryLegend />
      <TrajectoryIndex records={projection.records} />
    </div>
  );
}
