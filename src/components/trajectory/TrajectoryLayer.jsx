import MutationTickLayer from "./MutationTickLayer.jsx";
import SegmentLayer from "./SegmentLayer.jsx";
import NodeLayer from "./NodeLayer.jsx";
import TodayMarker from "./TodayMarker.jsx";
import CurrentAssessmentMarker from "./CurrentAssessmentMarker.jsx";

/**
 * TrajectoryLayer — groups the trajectory's drawable content, back to
 * front: mutation ticks and segments beneath nodes, current assessment
 * and today marker drawn last so they sit on top.
 */
export default function TrajectoryLayer({ projection }) {
  return (
    <g className="trajectory-layer">
      <MutationTickLayer ticks={projection.mutationTicks} />
      <SegmentLayer segments={projection.segments} projectedSegment={projection.projectedSegment} />
      <NodeLayer nodes={projection.nodes} />
      {projection.todayMarker && <TodayMarker marker={projection.todayMarker} />}
      <CurrentAssessmentMarker node={projection.currentNode} />
    </g>
  );
}
