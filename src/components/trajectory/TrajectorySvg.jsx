import TrajectoryLayer from "./TrajectoryLayer.jsx";

/**
 * TrajectorySvg — static SVG root. Renders the verification-stage axis
 * and the trajectory layer. No animation, zoom, pan, or responsive
 * behaviour — desktop-only, fixed viewBox.
 */
export default function TrajectorySvg({ projection }) {
  const { viewBox, axis } = projection;
  return (
    <svg
      className="trajectory-svg"
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      width={viewBox.width}
      height={viewBox.height}
      role="img"
      aria-label={`Evidence trajectory for ${projection.recordLabel}`}
    >
      {axis.stages.map((stage) => (
        <g key={stage.vsCode} className="trajectory-axis-row">
          <line
            x1={axis.x1}
            y1={stage.y}
            x2={axis.x2}
            y2={stage.y}
            className="trajectory-axis-line"
          />
          <text x={4} y={stage.y} dominantBaseline="middle" className="trajectory-axis-label">
            {stage.vsCode}
          </text>
        </g>
      ))}
      <TrajectoryLayer projection={projection} />
    </svg>
  );
}
