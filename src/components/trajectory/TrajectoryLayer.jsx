import MutationTickLayer from "./MutationTickLayer.jsx";
import SegmentLayer from "./SegmentLayer.jsx";
import NodeLayer from "./NodeLayer.jsx";
import TodayMarker from "./TodayMarker.jsx";
import CurrentAssessmentMarker from "./CurrentAssessmentMarker.jsx";

/**
 * TrajectoryLayer — groups the trajectory's drawable content, back to
 * front: segments beneath mutation ticks beneath nodes, current
 * assessment and today marker drawn last so they sit on top. Mutation
 * ticks must be painted after segments — a tick's y often coincides
 * exactly with the flat segment it sits on, and the later element in
 * document order wins pointer capture at that shared point. Painting
 * ticks first would leave their (larger, invisible) hover target
 * permanently occluded by the segment line drawn on top of it.
 */
export default function TrajectoryLayer({ projection }) {
  return (
    <g className="trajectory-layer">
      <SegmentLayer segments={projection.segments} projectedSegment={projection.projectedSegment} />
      <MutationTickLayer ticks={projection.mutationTicks} />
      <NodeLayer nodes={projection.nodes} />
      {projection.todayMarker && <TodayMarker marker={projection.todayMarker} />}
      <CurrentAssessmentMarker node={projection.currentNode} />
    </g>
  );
}
