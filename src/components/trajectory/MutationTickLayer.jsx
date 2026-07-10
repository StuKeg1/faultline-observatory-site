import { useMutationHighlight } from "./MutationHighlightContext.jsx";

/**
 * MutationTickLayer — draws one small tick per mutation log entry,
 * positioned at the verification stage in effect on that mutation's
 * date. Makes clear that a flat run between two assessments isn't a gap
 * in institutional attention — it's ongoing observation that didn't
 * move the stage. Drawn beneath the node/segment layers.
 *
 * Each tick pairs a small visible dot with a larger invisible circle on
 * top of it — the visible mark stays subtle against the mutation-dense
 * flat runs it sits on, while the invisible circle gives the mouse a
 * real target to hover, growing the visible dot on :hover (CSS) and
 * surfacing the mutation's own note text as the tooltip, not just its
 * field name.
 *
 * useMutationHighlight() is optional-chained throughout: this component
 * is shared with the multi-record landscape (RecordTrajectoryLayer),
 * which never wraps MutationHighlightProvider — there, the hooks below
 * are all safe no-ops and ticks behave exactly as before.
 */
export default function MutationTickLayer({ ticks }) {
  const highlight = useMutationHighlight();
  return (
    <g className="trajectory-mutation-layer">
      {ticks.map((tick) => {
        const isActive = highlight?.activeMutationId === tick.mutationId;
        return (
          <g
            key={tick.mutationId}
            className={`trajectory-mutation-tick-group${isActive ? " trajectory-mutation-tick-group--active" : ""}`}
            data-mutation-id={tick.mutationId}
          >
            <circle cx={tick.x} cy={tick.y} r={1.75} className="trajectory-mutation-tick" />
            <circle
              cx={tick.x}
              cy={tick.y}
              r={6}
              className="trajectory-mutation-tick-hit"
              onMouseEnter={() => highlight?.hoverMutation(tick.mutationId)}
              onMouseLeave={() => highlight?.hoverMutation(null)}
              onClick={() => highlight?.pinFromTick(tick.mutationId)}
            >
              <title>{(tick.recordId ? `${tick.recordId} — ` : "") + `${tick.date} — ${tick.mutationId}: ${tick.note ?? tick.field}`}</title>
            </circle>
          </g>
        );
      })}
    </g>
  );
}
