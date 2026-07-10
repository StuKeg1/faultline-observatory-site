/**
 * NodeLayer — draws one marker per assessment. A native SVG <title>
 * provides the only interaction (hover tooltip); nothing else.
 */
export default function NodeLayer({ nodes }) {
  return (
    <g className="trajectory-node-layer">
      {nodes.map((node) => (
        <g key={node.assessmentId} className="trajectory-node">
          <circle cx={node.x} cy={node.y} r={5} fill={node.color} />
          <title>
            {`${node.date} — ${node.pressureLabel} (${node.verificationStage})`}
          </title>
          <text x={node.x} y={node.y - 10} className="trajectory-node-date" textAnchor="middle">
            {node.date}
          </text>
        </g>
      ))}
    </g>
  );
}
