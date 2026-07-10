/**
 * TodayAxisLine — one shared "as of now" reference line for the whole
 * landscape, spanning every verification-stage band. Distinct from the
 * single-record TodayMarker: with many records on one shared axis,
 * "today" is a single, meaningful vertical position, not a per-record
 * point — every record's projected tail (see RecordTrajectoryLayer)
 * runs to this same line, honestly showing how recently each was last
 * assessed relative to the others.
 */
export default function TodayAxisLine({ today, plotTop, plotBottom }) {
  return (
    <g className="trajectory-today-axis">
      <line x1={today.x} y1={plotTop} x2={today.x} y2={plotBottom} />
      <text x={today.x} y={plotTop - 8} textAnchor="middle" className="trajectory-today-axis-label">
        Today
      </text>
    </g>
  );
}
