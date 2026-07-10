import SegmentLayer from "./SegmentLayer.jsx";
import MutationTickLayer from "./MutationTickLayer.jsx";
import NodeLayer from "./NodeLayer.jsx";
import CurrentAssessmentMarker from "./CurrentAssessmentMarker.jsx";

/**
 * RecordTrajectoryLayer — one record's trajectory within the shared
 * landscape canvas. Composes the same layers as the single-record
 * trajectory, in the same paint order (segments, then ticks, then
 * nodes, then the current-assessment ring) — this is the reused
 * visual language, not a landscape-specific redraw of it. Date labels
 * are off here (see NodeLayer); with many records sharing one canvas,
 * always-on per-node text would be unreadable — the date is still in
 * each node's hover tooltip.
 *
 * Wrapped in a group carrying data-record-id so CSS can dim every
 * other record's group on hover (see EvidenceTrajectory.css), letting
 * a reader isolate one line without a filtering interaction.
 */
export default function RecordTrajectoryLayer({ trajectory }) {
  return (
    <g className="record-group" data-record-id={trajectory.recordId}>
      <SegmentLayer segments={trajectory.segments} projectedSegment={trajectory.projectedSegment} />
      <MutationTickLayer ticks={trajectory.mutationTicks} />
      <NodeLayer nodes={trajectory.nodes} showDateLabels={false} />
      <CurrentAssessmentMarker node={trajectory.currentNode} />
    </g>
  );
}
