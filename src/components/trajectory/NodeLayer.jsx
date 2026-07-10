/**
 * NodeLayer — draws one marker per assessment. A filled dot means this
 * assessment set or changed the pressureState; a hollow dot means it
 * reaffirmed the existing state (new evidence logged, stage held). A
 * native SVG <title> provides the only interaction (hover tooltip).
 */
export default function NodeLayer({ nodes }) {
  return (
    <g className="trajectory-node-layer">
      {nodes.map((node) => (
        <g key={node.assessmentId} className="trajectory-node">
          <circle
            cx={node.x}
            cy={node.y}
            r={5}
            fill={node.isTransition ? node.color : "var(--paper)"}
            stroke={node.color}
            strokeWidth={node.isTransition ? 0 : 2}
          />
          <title>
            {`${node.date} — ${node.pressureLabel} (${node.verificationStage})` +
              (node.isTransition ? "" : ", reaffirmed — no state change")}
          </title>
          <text x={node.x} y={node.y - 10} className="trajectory-node-date" textAnchor="middle">
            {node.date}
          </text>
        </g>
      ))}
    </g>
  );
}
