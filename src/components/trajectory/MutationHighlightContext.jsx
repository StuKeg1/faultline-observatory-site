import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const MutationHighlightContext = createContext(null);

/**
 * MutationHighlightContext — cross-highlights one mutation between
 * EvidenceTrajectory's chart ticks and the MutationLog table below it,
 * without lifting state onto FrontierRecord itself (which would
 * re-render every unrelated section — Mechanisms, Claim Lineage, Open
 * Questions, Evidence Sources, Related Records — on every hover). Only
 * components that call useMutationHighlight() re-render when the active
 * mutation changes; MutationTickLayer reads it directly, with no prop
 * threading through TrajectorySvg/TrajectoryLayer.
 *
 * hovered is transient — a peek, never scrolls, cleared on mouseleave.
 * pinned is click-set and persists. hovered always wins so a peek never
 * has to fight a stale pin; falling back to pinned keeps a prior
 * selection visible as an anchor once the pointer moves on.
 *
 * Not corpus-wide: only wrapped where EvidenceTrajectory itself is
 * rendered (FR-QE-0001 today — see FrontierRecord.jsx). Consumers use
 * optional chaining so MutationTickLayer stays safe to reuse from the
 * multi-record landscape too, which never wraps this provider.
 */
export function MutationHighlightProvider({ children }) {
  const [hoveredMutationId, setHoveredMutationId] = useState(null);
  const [pinnedMutationId, setPinnedMutationId] = useState(null);
  const tableRef = useRef(null);

  const activeMutationId = hoveredMutationId ?? pinnedMutationId;

  const pinFromTick = useCallback((mutationId) => {
    setPinnedMutationId(mutationId);
    const row = tableRef.current?.querySelector(`[data-mutation-id="${mutationId}"]`);
    row?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  const value = useMemo(
    () => ({
      activeMutationId,
      tableRef,
      hoverMutation: setHoveredMutationId,
      pinFromTick,
      pinFromRow: setPinnedMutationId,
    }),
    [activeMutationId, pinFromTick]
  );

  return <MutationHighlightContext.Provider value={value}>{children}</MutationHighlightContext.Provider>;
}

export function useMutationHighlight() {
  return useContext(MutationHighlightContext);
}
