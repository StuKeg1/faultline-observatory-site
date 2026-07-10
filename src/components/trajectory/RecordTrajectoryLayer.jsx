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
 *
 * emphasis (Prototype 003) is "focused" | "context" | null, from the
 * active Reading (see EvidenceLandscape/deriveReading.js). It only adds
 * a class — hover's own isolate/peek behaviour is untouched CSS, see
 * EvidenceTrajectory.css.
 *
 * Deliberately not a click-through to the record's own page. In the
 * "Today" convergence cluster, unrelated records' nodes can land only a
 * few px apart (observed live: two different records' nodes ~5.5px
 * apart, well inside each other's hit area) — a click there could
 * silently misroute to the wrong record. The index list below is the
 * reliable deep-link until that's addressed; see conversation notes.
 */
export default function RecordTrajectoryLayer({ trajectory, emphasis }) {
  return (
    <g
      className={`record-group${emphasis ? ` record-group--${emphasis}` : ""}`}
      data-record-id={trajectory.recordId}
    >
      <SegmentLayer segments={trajectory.segments} projectedSegment={trajectory.projectedSegment} />
      <MutationTickLayer ticks={trajectory.mutationTicks} />
      <NodeLayer nodes={trajectory.nodes} showDateLabels={false} />
      <CurrentAssessmentMarker node={trajectory.currentNode} />
    </g>
  );
}
