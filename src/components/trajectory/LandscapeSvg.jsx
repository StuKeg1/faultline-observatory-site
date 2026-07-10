import RecordTrajectoryLayer from "./RecordTrajectoryLayer.jsx";
import TodayAxisLine from "./TodayAxisLine.jsx";

/**
 * LandscapeSvg — static SVG root for the multi-record landscape. Two
 * gridline systems: horizontal verification-stage rows (same as the
 * single-record trajectory) and vertical year lines (new here — a
 * dense multi-record chart needs a static calendar breadcrumb so a
 * point deep in the chart can still be read against a year without a
 * hover-tracking interaction). No animation, zoom, pan, or responsive
 * behaviour — desktop-only, fixed viewBox, same as Prototype 001.
 */
// focused (Prototype 003) is the Reading's Focused/Context classification
// — a Set of recordIds, or null when no Lens is active. It only ever adds
// a data-derived emphasis class per record group (see
// RecordTrajectoryLayer); it never changes which trajectories are drawn.
export default function LandscapeSvg({ projection, focused }) {
  const { viewBox, axis, today, records } = projection;
  return (
    <svg
      className="trajectory-svg landscape-svg"
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      width={viewBox.width}
      height={viewBox.height}
      role="img"
      aria-label="Evidence trajectories across the Frontier Record corpus"
    >
      {axis.stages.map((stage) => (
        <g key={stage.vsCode} className="trajectory-axis-row">
          <line x1={axis.x1} y1={stage.y} x2={axis.x2} y2={stage.y} className="trajectory-axis-line" />
          <text x={4} y={stage.y} dominantBaseline="middle" className="trajectory-axis-label">
            {stage.vsCode}
          </text>
        </g>
      ))}

      {axis.years.map((tick) => (
        <g key={tick.year} className="landscape-year-row">
          <line x1={tick.x} y1={axis.plotTop} x2={tick.x} y2={axis.plotBottom} className="landscape-year-line" />
          <text x={tick.x} y={axis.plotBottom + 14} textAnchor="middle" className="landscape-year-label">
            {tick.year}
          </text>
        </g>
      ))}

      <g className={`landscape-records${focused ? " has-reading" : ""}`}>
        {records.map((trajectory) => {
          const emphasis = !focused ? null : focused.has(trajectory.recordId) ? "focused" : "context";
          return <RecordTrajectoryLayer key={trajectory.recordId} trajectory={trajectory} emphasis={emphasis} />;
        })}
      </g>

      <TodayAxisLine today={today} plotTop={axis.plotTop} plotBottom={axis.plotBottom} />
    </svg>
  );
}
