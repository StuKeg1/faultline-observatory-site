/**
 * SegmentLayer — draws the line between each pair of consecutive
 * assessment nodes. Segments where pressureState changed are styled
 * distinctly from reaffirmation segments. An optional projectedSegment
 * (last assessment to "today") renders dashed — it's a rendering
 * extension, not a segment between two real assessments.
 */
export default function SegmentLayer({ segments, projectedSegment }) {
  return (
    <g className="trajectory-segment-layer">
      {segments.map((segment) => (
        <line
          key={segment.id}
          x1={segment.x1}
          y1={segment.y1}
          x2={segment.x2}
          y2={segment.y2}
          className={
            segment.stateChanged
              ? "trajectory-segment trajectory-segment-transition"
              : "trajectory-segment"
          }
        />
      ))}
      {projectedSegment && (
        <line
          x1={projectedSegment.x1}
          y1={projectedSegment.y1}
          x2={projectedSegment.x2}
          y2={projectedSegment.y2}
          className="trajectory-segment trajectory-segment-projected"
        />
      )}
    </g>
  );
}
