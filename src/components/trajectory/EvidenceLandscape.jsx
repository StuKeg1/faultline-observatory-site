import { Link } from "react-router-dom";
import { deriveEvidenceLandscape } from "../../data/deriveEvidenceLandscape.js";
import { getProgrammeLensOptions, getStateLensOptions, computeReading } from "../../data/deriveReading.js";
import LandscapeSvg from "./LandscapeSvg.jsx";
import TrajectoryLegend from "./TrajectoryLegend.jsx";
import ReadingControls from "./ReadingControls.jsx";
import StateBadge from "../StateBadge.jsx";
import "./EvidenceTrajectory.css";

/**
 * TrajectoryIndex — the reliable way to tell which line is which:
 * colour on this chart encodes pressureState (the same visual language
 * as the single-record view), not record identity, so a list is the
 * fallback alongside hover tooltips and hover-to-isolate. Mirrors the
 * chart's Reading (Prototype 003): a Context row fades to match its
 * dimmed trajectory, so the list stays a map of what's emphasized, not
 * just a static id lookup.
 */
function TrajectoryIndex({ records, focused }) {
  return (
    <ul className="landscape-index" aria-label="Records in this landscape">
      {records.map((trajectory) => {
        const emphasis = !focused ? null : focused.has(trajectory.recordId) ? "focused" : "context";
        return (
          <li
            key={trajectory.recordId}
            className={`landscape-index-item${emphasis === "context" ? " landscape-index-item--context" : ""}`}
            data-record-id={trajectory.recordId}
          >
            <Link to={trajectory.recordUrl} className="landscape-index-link">
              <span className="landscape-index-id">{trajectory.recordId}</span>
              <span className="landscape-index-label">{trajectory.recordLabel}</span>
              <StateBadge pressureState={trajectory.currentNode.pressureState} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * EvidenceLandscape — top-level wrapper for Prototype 002/003. Derives
 * the shared-axis rendering projection from many Frontier Records and
 * renders it as one static SVG landscape, reusing the exact node/
 * segment/tick visual language from the single-record trajectory.
 *
 * Prototype 003 adds a Reading State layer on top: activeProgrammes/
 * activeStates (owned by the page, URL-encoded) are composed into a
 * Focused/Context classification via computeReading, then threaded down
 * as emphasis — the projection and its rendering are otherwise
 * untouched. See deriveReading.js for the Lens/Reading model.
 */
export default function EvidenceLandscape({
  records,
  programmes,
  activeProgrammes,
  activeStates,
  onToggleProgramme,
  onToggleState,
  onClearReading,
}) {
  const projection = deriveEvidenceLandscape(records);

  const programmeOptions = getProgrammeLensOptions(projection.records, programmes);
  const stateOptions = getStateLensOptions(projection.records);
  const focused = computeReading(projection.records, [
    { key: "programme", values: activeProgrammes, matches: (t, v) => t.programme === v },
    { key: "state", values: activeStates, matches: (t, v) => t.currentNode.pressureState === v },
  ]);

  return (
    <div className="evidence-trajectory evidence-landscape">
      <ReadingControls
        programmeOptions={programmeOptions}
        stateOptions={stateOptions}
        activeProgrammes={activeProgrammes}
        activeStates={activeStates}
        onToggleProgramme={onToggleProgramme}
        onToggleState={onToggleState}
        onClear={onClearReading}
        hasActiveReading={focused !== null}
      />
      <div className="trajectory-scroll">
        <LandscapeSvg projection={projection} focused={focused} />
      </div>
      <p className="landscape-dodge-note">
        Nodes stacked vertically at the same point — including the current-assessment rings along the
        "Today" line — share an exact assessment date and verification stage. The spread is a legibility
        offset only, not sub-stages within VS-01–VS-05. Hover any node for its true date and stage.
      </p>
      <TrajectoryLegend />
      <TrajectoryIndex records={projection.records} focused={focused} />
    </div>
  );
}
