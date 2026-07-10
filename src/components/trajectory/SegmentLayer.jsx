/**
 * SegmentLayer — draws the line between each pair of consecutive
 * assessment nodes. Segments where pressureState changed are styled
 * distinctly from reaffirmation segments.
 */
export default function SegmentLayer({ segments }) {
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
    </g>
  );
}
