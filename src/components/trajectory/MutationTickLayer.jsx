/**
 * MutationTickLayer — draws one small, non-clickable tick per mutation
 * log entry, positioned at the verification stage in effect on that
 * mutation's date. Makes clear that a flat run between two assessments
 * isn't a gap in institutional attention — it's ongoing observation
 * that didn't move the stage. Drawn beneath the node/segment layers.
 *
 * Each tick pairs a small visible dot with a larger invisible circle on
 * top of it — the visible mark stays subtle against the mutation-dense
 * flat runs it sits on, while the invisible circle gives the mouse a
 * real target to hover, growing the visible dot on :hover (CSS) and
 * surfacing the mutation's own note text as the tooltip, not just its
 * field name.
 */
export default function MutationTickLayer({ ticks }) {
  return (
    <g className="trajectory-mutation-layer">
      {ticks.map((tick) => (
        <g key={tick.mutationId} className="trajectory-mutation-tick-group">
          <circle cx={tick.x} cy={tick.y} r={1.75} className="trajectory-mutation-tick" />
          <circle cx={tick.x} cy={tick.y} r={6} className="trajectory-mutation-tick-hit">
            <title>{(tick.recordId ? `${tick.recordId} — ` : "") + `${tick.date} — ${tick.mutationId}: ${tick.note ?? tick.field}`}</title>
          </circle>
        </g>
      ))}
    </g>
  );
}
