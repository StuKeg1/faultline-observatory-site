/**
 * TodayMarker — the point on the trajectory representing "as of now,"
 * not an assessment. Distinct from CurrentAssessmentMarker: it carries
 * no institutional finding of its own, it just shows how much time has
 * elapsed since the last assessment reached its stage. Labeled with its
 * date so the trailing dashed segment reads as "the record runs to
 * here," not as a line that trails off into nothing. Labeled below the
 * axis rather than above it, since node date labels sit above and the
 * floor width leaves too little room for both without colliding.
 */
export default function TodayMarker({ marker }) {
  return (
    <g className="trajectory-today-marker">
      <line x1={marker.x} y1={marker.y - 6} x2={marker.x} y2={marker.y + 6} />
      <title>{`Today — ${marker.date}, no assessment since`}</title>
      <text x={marker.x} y={marker.y + 18} className="trajectory-today-label" textAnchor="middle">
        Today
      </text>
    </g>
  );
}
