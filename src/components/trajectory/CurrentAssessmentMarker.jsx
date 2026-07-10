/**
 * CurrentAssessmentMarker — highlights the node representing
 * assessments[last]. Current Assessment remains canonical; this is a
 * rendering pointer to it, not a second source of truth.
 */
export default function CurrentAssessmentMarker({ node }) {
  return (
    <circle
      cx={node.x}
      cy={node.y}
      r={9}
      className="trajectory-current-marker"
      stroke={node.color}
      fill="none"
    >
      <title>{`Current assessment — ${node.pressureLabel} since ${node.date}`}</title>
    </circle>
  );
}
