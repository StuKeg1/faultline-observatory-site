import { getStateBadgeClass, getPressureStateLabel } from "../data/derive.js";

/**
 * StateBadge — renders a semantic pressure-state badge.
 * Class is derived from pressureState; never manually assigned.
 */
export default function StateBadge({ pressureState, size = "default", variant = "default" }) {
  const cls = getStateBadgeClass(pressureState);
  const label = getPressureStateLabel(pressureState);
  return (
    <span
      className={`state-badge ${cls}${variant === "vd-003" ? " state-badge--vd-003" : ""}`}
      style={size === "large" ? { fontSize: "11px", padding: "3px 10px 3px 8px" } : {}}
      title={label}
      aria-label={`State: ${label}`}
    >
      {label}
    </span>
  );
}
