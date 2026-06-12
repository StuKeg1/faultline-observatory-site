import StateBadge from "../components/StateBadge.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { ALL_NOTES, NOTE_TYPE_LABELS } from "../data/notes.js";
import "./TokenPreview.css";

const PRESSURE_STATES = [
  "assertion", "published", "audit", "replication", "operation", "validated", "contested",
];

const NOTE_TYPES = Object.keys(NOTE_TYPE_LABELS);

const COLOURS = [
  { token: "--ink",        label: "Ink" },
  { token: "--ink-mid",    label: "Ink Mid" },
  { token: "--ink-light",  label: "Ink Light" },
  { token: "--ink-faint",  label: "Ink Faint" },
  { token: "--paper",      label: "Paper" },
  { token: "--paper-warm", label: "Paper Warm" },
  { token: "--paper-card", label: "Paper Card" },
  { token: "--rule",       label: "Rule" },
  { token: "--accent",     label: "Accent" },
  { token: "--accent-mid", label: "Accent Mid" },
  { token: "--accent-dim", label: "Accent Dim" },
  { token: "--danger",     label: "Danger" },
];

const DESIGN_TOKENS = [
  "--foyer-title-size", "--foyer-title-weight", "--foyer-title-tracking",
  "--foyer-top-padding", "--snapshot-number-size", "--snapshot-activity-size",
  "--section-title-size", "--section-gap", "--page-title-size",
  "--body-text-size", "--body-text-color", "--muted-text-color",
  "--record-id-size", "--record-id-weight", "--record-id-tracking",
  "--activity-note-size", "--activity-note-weight",
  "--width-content", "--width-foyer", "--nav-font-size",
];

function Swatch({ token, label }) {
  return (
    <div className="tp-swatch">
      <div className="tp-swatch-block" style={{ background: `var(${token})`, border: "1px solid var(--rule)" }} />
      <div className="tp-swatch-token">{token}</div>
      <div className="tp-swatch-label">{label}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="tp-section">
      <h2 className="tp-section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function TokenPreview() {
  return (
    <>
      <div className="tp-page">
        <header className="tp-header">
          <div className="tp-header-inner">
            <div className="tp-eyebrow">Design System</div>
            <h1 className="tp-title">Token Preview</h1>
            <p className="tp-subtitle">
              Live rendering of all design tokens. Edit <code>src/styles/design-tokens.css</code> and reload to see changes.
            </p>
          </div>
        </header>

        <div className="tp-body">

          {/* ── Colour palette ── */}
          <Section title="Colour Palette">
            <div className="tp-swatches">
              {COLOURS.map((c) => <Swatch key={c.token} {...c} />)}
            </div>
          </Section>

          {/* ── State badges ── */}
          <Section title="State Badges — Pressure States">
            <div className="tp-badges">
              {PRESSURE_STATES.map((s) => (
                <div key={s} className="tp-badge-row">
                  <StateBadge pressureState={s} />
                  <span className="tp-badge-label">{s}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Note type badges ── */}
          <Section title="Note Type Badges">
            <div className="tp-badges">
              {NOTE_TYPES.map((t) => (
                <div key={t} className="tp-badge-row">
                  <span className={`note-type-badge ntb-${t}`}>{NOTE_TYPE_LABELS[t]}</span>
                  <span className="tp-badge-label">{t}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Typography ── */}
          <Section title="Typography Scale">
            <div className="tp-type-scale">
              <div className="tp-type-row">
                <span className="tp-type-label">Foyer Title</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: "var(--foyer-title-size)", fontWeight: "var(--foyer-title-weight)", letterSpacing: "var(--foyer-title-tracking)" }}>
                  Faultline Observatory
                </span>
              </div>
              <div className="tp-type-row">
                <span className="tp-type-label">Page Title</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: "var(--page-title-size)", fontWeight: "var(--page-title-weight)" }}>
                  The Frontier Record
                </span>
              </div>
              <div className="tp-type-row">
                <span className="tp-type-label">Section Title</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: "var(--section-title-size)", fontWeight: 400 }}>
                  Archive Activity
                </span>
              </div>
              <div className="tp-type-row">
                <span className="tp-type-label">Body Text</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: "var(--body-text-size)", fontWeight: 300, color: "var(--body-text-color)", lineHeight: "var(--body-line-height)" }}>
                  Frontier claims routinely outrun their evidence. The Observatory maintains the record of what happens next.
                </span>
              </div>
              <div className="tp-type-row">
                <span className="tp-type-label">Record ID</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "var(--record-id-size)", fontWeight: "var(--record-id-weight)", letterSpacing: "var(--record-id-tracking)", color: "var(--accent)" }}>
                  FR-QE-0001
                </span>
              </div>
              <div className="tp-type-row">
                <span className="tp-type-label">Mono Label</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "var(--label-size)", letterSpacing: "var(--label-tracking)", textTransform: "uppercase", color: "var(--ink-mid)" }}>
                  Archive State
                </span>
              </div>
            </div>
          </Section>

          {/* ── Design token values ── */}
          <Section title="Design Token Values">
            <table className="tp-token-table">
              <thead>
                <tr><th>Token</th><th>Computed value</th></tr>
              </thead>
              <tbody>
                {DESIGN_TOKENS.map((t) => (
                  <tr key={t}>
                    <td className="tp-token-name">{t}</td>
                    <td className="tp-token-value" id={`tv-${t.replace(/--/g, "").replace(/-/g, "_")}`}>
                      <TokenValue token={t} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

        </div>
      </div>
      <SiteFooter />
    </>
  );
}

// Reads computed CSS variable value from :root at render time
function TokenValue({ token }) {
  const value = typeof window !== "undefined"
    ? getComputedStyle(document.documentElement).getPropertyValue(token).trim()
    : "—";
  return <span>{value || "—"}</span>;
}
