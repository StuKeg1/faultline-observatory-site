import SegmentLayer from "./SegmentLayer.jsx";
import NodeLayer from "./NodeLayer.jsx";
import CurrentAssessmentMarker from "./CurrentAssessmentMarker.jsx";

/**
 * TrajectoryLayer — groups the trajectory's drawable content: segments
 * beneath nodes, current assessment marked last so it sits on top.
 */
export default function TrajectoryLayer({ projection }) {
  return (
    <g className="trajectory-layer">
      <SegmentLayer segments={projection.segments} />
      <NodeLayer nodes={projection.nodes} />
      <CurrentAssessmentMarker node={projection.currentNode} />
    </g>
  );
}
