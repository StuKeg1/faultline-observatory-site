/**
 * MutationTickLayer — draws one small, non-clickable tick per mutation
 * log entry, positioned at the verification stage in effect on that
 * mutation's date. Makes clear that a flat run between two assessments
 * isn't a gap in institutional attention — it's ongoing observation
 * that didn't move the stage. Drawn beneath the node/segment layers.
 */
export default function MutationTickLayer({ ticks }) {
  return (
    <g className="trajectory-mutation-layer">
      {ticks.map((tick) => (
        <circle key={tick.mutationId} cx={tick.x} cy={tick.y} r={1.75} className="trajectory-mutation-tick">
          <title>{`${tick.date} — ${tick.field} (${tick.mutationId})`}</title>
        </circle>
      ))}
    </g>
  );
}
