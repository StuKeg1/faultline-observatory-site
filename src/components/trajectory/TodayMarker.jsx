/**
 * TodayMarker — the point on the trajectory representing "as of now,"
 * not an assessment. Distinct from CurrentAssessmentMarker: it carries
 * no institutional finding of its own, it just shows how much time has
 * elapsed since the last assessment reached its stage.
 */
export default function TodayMarker({ marker }) {
  return (
    <g className="trajectory-today-marker">
      <line x1={marker.x} y1={marker.y - 6} x2={marker.x} y2={marker.y + 6} />
      <title>{`Today — ${marker.date}, no assessment since`}</title>
    </g>
  );
}
