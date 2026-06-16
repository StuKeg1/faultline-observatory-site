import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import StateBadge from "../components/StateBadge.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS } from "../data/corpus.js";
import {
  getCurrentAssessment,
  getTransitionFeed,
  getAssessmentHistory,
  getVerificationStages,
  getPressureStateLabel,
  getStateBadgeClass,
} from "../data/derive.js";
import "./FrontierRecord.css";

const VS_STAGES = ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"];

// ─── WARRANT PANEL ───────────────────────────────────────────
// Driven entirely by getCurrentAssessment(record). No schema additions.
// Main rationale: assessorNote if present, otherwise summary.
// Assessment summary row only rendered when assessorNote is present.
function WarrantPanel({ current }) {
  const rationale = current.assessorNote || current.summary;
  return (
    <div className="warrant-panel" aria-label="State warrant">
      <div className="wp-row">
        <span className="wp-label">Current state</span>
        <span className="wp-value wp-state">
          <StateBadge pressureState={current.pressureState} />
          <span className="wp-vs-code">{current.verificationStage}</span>
        </span>
      </div>
      <div className="wp-row wp-row-rationale">
        <span className="wp-label">Why this state?</span>
        <span className="wp-value">{rationale}</span>
      </div>
      {current.assessorNote && (
        <div className="wp-row">
          <span className="wp-label">Assessment summary</span>
          <span className="wp-value">{current.summary}</span>
        </div>
      )}
      <div className="wp-row">
        <span className="wp-label">In this state since</span>
        <span className="wp-value">{current.date}</span>
      </div>
    </div>
  );
}

// ─── VERIFICATION MATRIX ────────────────────────────────────
function VerificationMatrix({ record }) {
  const current = getCurrentAssessment(record);
  const stages = getVerificationStages(record);

  return (
    <div>
      <div className="verification-matrix" role="list" aria-label="Verification stages">
        {stages.map(({ vsCode, label, date, status }) => {
          const stageClass = status === "current" ? "current" : status === "reached" ? "reached" : "";
          return (
            <div key={vsCode} className={`vm-stage ${stageClass}`} role="listitem"
              aria-label={`${vsCode} ${label}: ${status}`}
              aria-current={status === "current" ? "true" : undefined}>
              <div className="vm-indicator" aria-hidden="true" />
              <div className="vm-stage-code" title={`Verification Stage ${vsCode.slice(3)}`}>{vsCode}</div>
              <div className="vm-stage-name">{label}</div>
              <div className="vm-stage-date">
                {status === "current" ? `${date} — present` : date ?? "—"}
              </div>
            </div>
          );
        })}
      </div>
      <div className="vm-legend" aria-label="Matrix legend">
        <span><span className="dot dot-reached" aria-hidden="true" /> State reached</span>
        <span><span className="dot dot-current" aria-hidden="true" /> Current state</span>
        <span><span className="dot dot-pending" aria-hidden="true" /> Not yet reached</span>
      </div>
    </div>
  );
}

// ─── RECORD LINEAGE TIMELINE ────────────────────────────────
function RecordLineage({ record }) {
  const history = getAssessmentHistory(record);
  const lastIndex = history.length - 1;
  return (
    <div className="timeline" role="list">
      {history.map((a, i) => {
        const isFirst = i === 0;
        const isLast = i === lastIndex;
        const dotClass = isFirst ? "major" : isLast ? "current" : "";
        return (
          <div key={a.id} className="timeline-entry" role="listitem">
            <div className="tl-date">{a.date}</div>
            <div className={`tl-dot ${dotClass}`} aria-hidden="true" />
            <div className="tl-content">
              <div className="tl-event">
                {isFirst ? "Record opened — " : "Assessment updated — "}
                <StateBadge pressureState={a.pressureState} />
              </div>
              <div className="tl-detail">{a.summary}</div>
              {a.assessorNote && (
                <div className="tl-assessor-note">{a.assessorNote}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── MUTATION LOG ────────────────────────────────────────────
function MutationLog({ record }) {
  return (
    <table className="mutation-table" aria-label="Record mutations">
      <thead>
        <tr>
          <th>Mutation</th>
          <th>Date</th>
          <th>Field</th>
          <th>Prior value</th>
          <th>Current value</th>
        </tr>
      </thead>
      <tbody>
        {record.mutationLog.map((m) => (
          <tr key={m.id}>
            <td className="mut-id">{m.id}</td>
            <td>{m.date}</td>
            <td className="mut-field">{m.field}</td>
            <td className="mut-from">{m.from}</td>
            <td className="mut-to">{m.to}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ─── EVIDENCE SOURCES ────────────────────────────────────────
function EvidenceSources({ record }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button
        className="evidence-toggle-bar"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{record.evidence.length} sources on record</span>
        <span className="evidence-toggle-label">
          {expanded ? "Hide ↑" : "Show sources ↓"}
        </span>
      </button>
      {expanded && (
        <div className="evidence-list" role="list">
          {record.evidence.map((ev) => (
            <div key={ev.id} className="evidence-entry" role="listitem">
              <span className="ev-code">{ev.id}</span>
              <span className="ev-citation">{ev.citation}</span>
              <span className={`ev-weight ${ev.weight === "primary" ? "primary" : ev.weight === "counter" ? "counter" : ev.weight === "contested" ? "contested" : ""}`}>
                {ev.weight}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── RELATED RECORDS ─────────────────────────────────────────
function RelatedRecords({ lineage }) {
  if (!lineage.relatedRecords || lineage.relatedRecords.length === 0) return null;
  return (
    <div className="related-grid" role="list">
      {lineage.relatedRecords.map((rel) => (
        <Link key={rel.id} to={`/the-record/${rel.id.toLowerCase()}/`} className="related-card" role="listitem">
          <div className="rc-id">{rel.id}</div>
          <div className="rc-title">{rel.note.split(" — ")[0]}</div>
          <div className="rc-rel">{rel.relationship} — {rel.note}</div>
        </Link>
      ))}
    </div>
  );
}

// ─── SCROLLSPY TABS ──────────────────────────────────────────
const SECTIONS = [
  { id: "s-matrix",    label: "Verification Matrix" },
  { id: "s-warrant",   label: "State Warrant" },
  { id: "s-lineage",   label: "Record Lineage" },
  { id: "s-mutations", label: "Mutation Log" },
  { id: "s-evidence",  label: "Evidence Sources" },
  { id: "s-related",   label: "Related Records" },
];

function RecordTabs({ activeSection }) {
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }
  return (
    <nav className="record-tabs" role="tablist" aria-label="Record sections">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          className={`record-tab${activeSection === s.id ? " active" : ""}`}
          role="tab"
          aria-selected={activeSection === s.id}
          onClick={() => scrollTo(s.id)}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────
export default function FrontierRecord() {
  const { recordId } = useParams();
  const record = ALL_RECORDS.find(
    (r) => r.id.toLowerCase() === recordId?.toLowerCase()
  );

  const [activeSection, setActiveSection] = useState("s-matrix");

  // Scrollspy
  useEffect(() => {
    const offset = 44 + 44 + 24; // nav + tabs + buffer
    function onScroll() {
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < offset) current = s.id;
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!record) return <Navigate to="/the-record" replace />;

  const current = getCurrentAssessment(record);
  const url = `/the-record/${record.id.toLowerCase()}/`;

  return (
    <>
      <PageMeta
        title={`${record.claim.shortLabel} — ${record.id}`}
        description={`${record.claim.statement.substring(0, 140)} Current state: ${current.pressureState}.`}
        path={url}
      />
      <div className="frontier-record-page">
        {/* Record header */}
        <header id="record-header">
          <div className="record-breadcrumb">
            <Link to="/">← Observatory</Link>
            <span> › </span>
            <Link to="/the-record">The Record</Link>
            <span> › </span>
            <span className="bc-current">{record.id}</span>
          </div>

          <div className="record-passport">
            <div className="rp-main">
              <div className="rp-id-block">
                <div className="rp-programme">{record.programme}</div>
                <div className="rp-record-id">{record.id}</div>
              </div>
              <h1 className="rp-title">{record.claim.shortLabel}</h1>
              <p className="rp-definition">{record.claim.statement}</p>
            </div>
            <aside className="rp-meta-panel" aria-label="Record metadata">
              <div className="rp-meta-row">
                <span className="rp-status-label">Record Opened</span>
                <span className="rp-status-value">{record.claim.openedDate}</span>
              </div>
              <div className="rp-meta-row">
                <span className="rp-status-label">Last Mutation</span>
                <span className="rp-status-value">{record.mutationLog[0]?.date ?? "—"}</span>
              </div>
              <div className="rp-meta-row">
                <span className="rp-status-label">Mutation Count</span>
                <span className="rp-status-value">{record.mutationLog.length}</span>
              </div>
              <div className="rp-meta-row">
                <span className="rp-status-label">Status</span>
                <span className="rp-status-value" style={{ textTransform: "capitalize" }}>{record.status}</span>
              </div>
            </aside>
          </div>

          {/* Current state band */}
          <div className="record-state-band" role="status" aria-label="Current record state">
            <div className="rsb-inner">
              <div className="rsb-left">
                <div className="rsb-label">Current Record State</div>
                <div className="rsb-state">
                  <StateBadge pressureState={current.pressureState} size="large" />
                  <span className="rsb-vs-code">{current.verificationStage}</span>
                </div>
              </div>
              <div className="rsb-centre rsb-summary">
                <div className="rsb-warrant-label">Why this state?</div>
                <div>{current.assessorNote || current.summary}</div>
              </div>
              <div className="rsb-right">
                <div className="rsb-since-label">In this state since</div>
                <div className="rsb-since-value">{current.date}</div>
              </div>
            </div>
          </div>

          <RecordTabs activeSection={activeSection} />
        </header>

        {/* Record body */}
        <div id="record-body">

          <section className="record-section-inner" id="s-matrix">
            <div className="rs-header">Verification Matrix</div>
            <VerificationMatrix record={record} />
          </section>

          <section className="record-section-inner" id="s-warrant">
            <div className="rs-header">State Warrant</div>
            <WarrantPanel current={current} />
          </section>

          <section className="record-section-inner" id="s-lineage">
            <div className="rs-header">Record Lineage — Chronological</div>
            <RecordLineage record={record} />
          </section>

          <section className="record-section-inner" id="s-mutations">
            <div className="rs-header">Mutation Log</div>
            <MutationLog record={record} />
          </section>

          <section className="record-section-inner" id="s-evidence">
            <div className="rs-header">Evidence Sources</div>
            <EvidenceSources record={record} />
          </section>

          {record.lineage?.relatedRecords?.length > 0 && (
            <section className="record-section-inner" id="s-related">
              <div className="rs-header">Related Records</div>
              <RelatedRecords lineage={record.lineage} />
            </section>
          )}

        </div>
      </div>
      <SiteFooter />
    </>
  );
}
