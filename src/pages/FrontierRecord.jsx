import { useState, useEffect, Fragment } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import StateBadge from "../components/StateBadge.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import EvidenceTrajectory from "../components/trajectory/EvidenceTrajectory.jsx";
import { MutationHighlightProvider, useMutationHighlight } from "../components/trajectory/MutationHighlightContext.jsx";
import { ALL_RECORDS } from "../data/corpus.js";
import {
  getCurrentAssessment,
  getTransitionFeed,
  getAssessmentHistory,
  getVerificationStages,
  getStateEnteredDate,
  getRecordMetaDescription,
} from "../data/derive.js";
import "./FrontierRecord.css";

const VS_STAGES = ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"];

// ─── WARRANT PANEL ───────────────────────────────────────────
// Driven entirely by getCurrentAssessment(record) and
// getStateEnteredDate(record). No schema additions.
// Main rationale: assessorNote if present, otherwise summary.
// Assessment summary row only rendered when assessorNote is present.
//
// A record can be reaffirmed at the same pressureState across several
// assessments (new evidence appended, stage unchanged). In that case
// current.date is the date of the most recent reaffirmation, not the
// date the state was entered — showing only current.date as "in this
// state since" reads as if the state just changed. The entered-date row
// is only shown when it differs from the last-verified date.
function WarrantPanel({ current, record }) {
  const rationale = current.assessorNote || current.summary;
  const enteredDate = getStateEnteredDate(record);
  const wasReaffirmed = enteredDate !== current.date;
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
      {wasReaffirmed && (
        <div className="wp-row">
          <span className="wp-label">State entered</span>
          <span className="wp-value">{enteredDate}</span>
        </div>
      )}
      <div className="wp-row">
        <span className="wp-label">{wasReaffirmed ? "Last reaffirmed" : "In this state since"}</span>
        <span className="wp-value">{current.date}</span>
      </div>
      {current.provenanceNote && (
        <div className="wp-row wp-row-provenance">
          <span className="wp-label">Assessment provenance</span>
          <span className="wp-value">{current.provenanceNote}</span>
        </div>
      )}
      {current.verificationStageProvenance && (
        <div className="wp-row wp-row-provenance">
          <span className="wp-label">Stage provenance</span>
          <span className="wp-value">
            {current.verificationStageProvenance.disposition === "historically-unverified"
              ? `Stored ${current.verificationStageProvenance.storedStage}; historically unverified after legacy review.`
              : `Ratified ${current.verificationStageProvenance.effectiveStage}; stored historical code ${current.verificationStageProvenance.storedStage} preserved.`}
            {" "}
            <a href={current.verificationStageProvenance.authorityUrl}>
              Review authority
            </a>
          </span>
        </div>
      )}
      {record.reconstruction?.provenanceNote && (
        <div className="wp-row wp-row-provenance">
          <span className="wp-label">Record provenance</span>
          <span className="wp-value">{record.reconstruction.provenanceNote}</span>
        </div>
      )}
    </div>
  );
}

// ─── EXPERIMENTAL ANNOTATIONS ────────────────────────────────
// Pilot render (2026-07). Renders record.experimentalAnnotations if present;
// renders nothing for the other records in the corpus, which do not have
// this field. Deliberately separate from WarrantPanel's assessment
// rationale — this is a distinct, explicitly experimental observation
// genre, not an assessment finding. No schema dependency beyond the
// optional array itself; safe to delete this component and its call site
// with no effect on any other record if the pilot does not prove useful.
function ExperimentalAnnotations({ record }) {
  const annotations = record.experimentalAnnotations ?? [];
  if (annotations.length === 0) return null;
  return (
    <div className="experimental-annotations" aria-label="Experimental observations">
      {annotations.map((a, i) => (
        <div key={i} className="experimental-annotation">
          <div className="ea-header">
            <span className="ea-label">{a.label}</span>
            <span className="ea-date">{a.date}</span>
          </div>
          <p className="ea-text">{a.text}</p>
        </div>
      ))}
    </div>
  );
}

// ─── VERIFICATION MATRIX ────────────────────────────────────
function VerificationMatrix({ record }) {
 
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
// RELEASE-013: distinguishes a genuine state transition from a
// reaffirmation (state held) using the existing getTransitionFeed(),
// already correctly computed in derive.js but never called from any
// view before this release. No new derived function added.
function RecordLineage({ record }) {
  const history = getAssessmentHistory(record);
  const transitionIds = new Set(getTransitionFeed(record).map((t) => t.to.id));
  const lastIndex = history.length - 1;
  return (
    <div className="timeline" role="list">
      {history.map((a, i) => {
        const isFirst = i === 0;
        const isLast = i === lastIndex;
        const isTransition = transitionIds.has(a.id);
        const dotClass = isFirst ? "major" : isLast ? "current" : "";
        const eventLabel = isFirst
          ? "Record opened — "
          : isTransition
          ? "State changed — "
          : "Reassessed, no change — ";
        return (
          <div key={a.id} className="timeline-entry" role="listitem">
            <div className="tl-date">{a.date}</div>
            <div className={`tl-dot ${dotClass}`} aria-hidden="true" />
            <div className="tl-content">
              <div className={`tl-event${!isFirst && !isTransition ? " tl-event-reaffirmed" : ""}`}>
                {eventLabel}
                <StateBadge pressureState={a.pressureState} />
              </div>
              <div className="tl-detail">{a.summary}</div>
              {a.assessorNote && (
                <div className="tl-assessor-note">{a.assessorNote}</div>
              )}
              {a.verificationStageProvenance && (
                <div className="tl-assessor-note">
                  Verification Stage:{" "}
                  {a.verificationStageProvenance.disposition === "historically-unverified"
                    ? `${a.verificationStageProvenance.storedStage} preserved — historically unverified`
                    : `${a.verificationStageProvenance.effectiveStage} after ratified review (stored code ${a.verificationStageProvenance.storedStage} preserved)`}
                  .{" "}
                  <a href={a.verificationStageProvenance.authorityUrl}>Review authority</a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── MUTATION LOG ────────────────────────────────────────────
// Cross-highlighted with EvidenceTrajectory's chart ticks via
// MutationHighlightContext where that provider is present (FR-QE-0001
// today — see the record-body wrap below). useMutationHighlight() is
// optional-chained so this table renders and behaves exactly as before
// for every other record, where no provider wraps it.
function MutationLog({ record }) {
  const highlight = useMutationHighlight();
  return (
    <div className="mutation-table-scroll" ref={highlight?.tableRef}>
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
          {record.mutationLog.map((m) => {
            const isActive = highlight?.activeMutationId === m.id;
            return (
              <tr
                key={m.id}
                data-mutation-id={m.id}
                className={isActive ? "mutation-row--active" : undefined}
                onMouseEnter={() => highlight?.hoverMutation(m.id)}
                onMouseLeave={() => highlight?.hoverMutation(null)}
                onClick={() => highlight?.pinFromRow(m.id)}
              >
                <td className="mut-id">{m.id}</td>
                <td>{m.date}</td>
                <td className="mut-field">{m.field}</td>
                <td className="mut-from">{m.from}</td>
                <td className="mut-to">{m.to}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── EVIDENCE SOURCES ────────────────────────────────────────
// RELEASE-019 fix: rendered from record.instances[] — the corpus's actual
// evidentiary field — instead of record.evidence[], which existed on only
// one record in the entire corpus (FR-QE-0001) and left every other record
// page throwing on render. instances[] has no citation/weight; it has
// qualifiedEvent/description/vectors/date. Polarity (supportive/contesting/
// neutral/partial) is read from the prefix of vectors[0] and mapped onto
// the existing ev-weight badge classes for visual continuity. Full
// description text is intentionally not shown in this compact list — only
// the id, qualifiedEvent label, and polarity — to keep row layout and
// height consistent with the prior design. No CSS changes required.
function getInstancePolarity(instance) {
  const vector = instance.vectors?.[0] ?? "";
  const [polarity] = vector.split("--");
  return polarity || "neutral";
}

function getPolarityBadgeClass(polarity) {
  const map = {
    supportive: "primary",
    contesting: "counter",
    partial: "contested",
  };
  return map[polarity] ?? "";
}

function EvidenceSources({ record }) {
  const [expanded, setExpanded] = useState(false);
  const instances = record.instances ?? [];
  const showFullS4Content = record.id === "FR-QE-0001";
  return (
    <div>
      <button
        className="evidence-toggle-bar"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{instances.length} instances on record</span>
        <span className="evidence-toggle-label">
          {expanded ? "Hide ↑" : "Show sources ↓"}
        </span>
      </button>
      {expanded && (
        <div className="evidence-list" role="list">
          {instances.map((inst) => {
            const polarity = getInstancePolarity(inst);
            return (
              <div key={inst.id} className="evidence-entry" role="listitem">
                <span className="ev-code">
                  {inst.id}{inst.sourceId ? ` ← ${inst.sourceId}` : ""}
                </span>
                <span className="ev-citation">
                  <span className="ev-title">{inst.qualifiedEvent}</span>
                  {showFullS4Content && inst.description && (
                    <span className="ev-description">{inst.description}</span>
                  )}
                  {showFullS4Content && inst.sourceReference && (
                    <span className="ev-source-reference">{inst.sourceReference}</span>
                  )}
                </span>
                <span className={`ev-weight ${getPolarityBadgeClass(polarity)}`}>
                  {polarity}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── RENDER-PILOT-001 ────────────────────────────────────────
// Combined pilot (scope note: RENDER-PILOT-001, 2026-07-09), governing
// ADR-00X (mechanisms), ADR-00Y (open questions), ADR-00Z (claim lineage
// narrative). Deliberately scoped to exactly these two records — per the
// EP-001 precedent, one combined pilot rather than three isolated ones,
// so interaction effects between the three objects can actually be
// observed on a real page. NOT a corpus-wide rollout: every other record
// in the corpus has the same mechanisms[]/openQuestions[]/lineage.items[]
// data already, but renders none of it until this pilot is reviewed.
// Removing an ID from this set, or deleting it entirely, fully reverts
// the affected record(s) to the pre-pilot rendering with no other change
// required anywhere in this file.
const RENDER_PILOT_001_RECORDS = new Set(["FR-QE-0004", "FR-AI-0007"]);

// ─── MECHANISMS ──────────────────────────────────────────────
// ADR-00X. Renders record.mechanisms[] — Resistance Mechanisms, Bottlenecks,
// Attractors, Collapse Mechanisms — the causal account behind a pressure
// state. Previously entirely unrendered; the public page asserted a state
// (e.g. RESOLVING, FRAGMENTING) without exposing why. Type labels/classes
// are a first-pass plain-language gloss only — ADR-00X explicitly left
// terminology treatment to implementation; revisit if the pilot review
// finds the FCIF codes still read as jargon.
const MECH_TYPE_LABELS = {
  "RESISTANCE MECHANISM": "Resistance Mechanism",
  "BOTTLENECK": "Bottleneck",
  "ATTRACTOR": "Attractor",
  "COLLAPSE MECHANISM": "Collapse Mechanism",
};
const MECH_TYPE_CLASS = {
  "RESISTANCE MECHANISM": "mech-resistance",
  "BOTTLENECK": "mech-bottleneck",
  "ATTRACTOR": "mech-attractor",
  "COLLAPSE MECHANISM": "mech-collapse",
};

function Mechanisms({ record }) {
  const mechanisms = record.mechanisms ?? [];
  if (mechanisms.length === 0) return null;
  return (
    <div className="mechanisms-list" role="list" aria-label="Record mechanisms">
      {mechanisms.map((m) => (
        <div key={m.id} className="mechanism-entry" role="listitem">
          <div className="mech-header">
            <span className={`mech-type-badge ${MECH_TYPE_CLASS[m.type] ?? ""}`}>
              {MECH_TYPE_LABELS[m.type] ?? m.type}
            </span>
            <span className="mech-id">{m.id}</span>
          </div>
          <p className="mech-description">{m.description}</p>
        </div>
      ))}
    </div>
  );
}

// ─── CLAIM LINEAGE (NARRATIVE) ───────────────────────────────
// ADR-00Z. Renders record.lineage.items[] — the schema's actual narrative
// trajectory, era by era, in the assessor's own prose. Distinct from the
// "Assessment History" section below, which is derived from assessments[]
// (a state-change log) and, prior to this pilot, was the section labeled
// "Record Lineage" corpus-wide despite not sourcing lineage.items at all
// — see RN-00X Finding RN-02. That relabeling is applied here only for
// pilot records (see getSections below); every other record keeps its
// current "Record Lineage — Chronological" label and assessment-derived
// content completely unchanged until a corpus-wide decision is made.
function ClaimLineage({ record }) {
  const items = record.lineage?.items ?? [];
  if (items.length === 0) return null;
  return (
    <div className="claim-lineage-list" role="list" aria-label="Claim lineage narrative">
      {items.map((item, i) => (
        <div key={i} className="claim-lineage-entry" role="listitem">
          <div className="cl-year">{item.year}</div>
          <div className="cl-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

// ─── OPEN QUESTIONS ──────────────────────────────────────────
// ADR-00Y. Renders record.openQuestions[] — closes the documentation/
// implementation divergence named in RN-00X Finding RN-01: the public
// How to Read a Frontier Record guide already instructs readers to "read
// the open questions," but no record page has ever rendered them. This
// is the first.
function OpenQuestions({ record }) {
  const questions = record.openQuestions ?? [];
  if (questions.length === 0) return null;
  return (
    <div className="open-questions-list" role="list" aria-label="Open questions">
      {questions.map((q) => (
        <div key={q.id} className="open-question-entry" role="listitem">
          <span className="oq-id">{q.id}</span>
          <div className="oq-body">
            <p className="oq-text">{q.question}</p>
            <span className="oq-date">Raised {q.raisedDate}</span>
          </div>
        </div>
      ))}
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
// getSections branches per-record rather than using one static list, so
// that RENDER-PILOT-001's three additions (and the "Record Lineage" →
// "Assessment History" relabel that resolving RN-02 required — see
// ClaimLineage above) apply only to the two pilot records. Every other
// record's tab list, section order, and labels are byte-for-byte what
// they were before this pilot.
function getSections(record) {
  const isPilot = RENDER_PILOT_001_RECORDS.has(record.id);
  const hasGovernedNarrative = isPilot || record.id === "FR-QE-0001";
  const hasRelated = record.lineage?.relatedRecords?.length > 0;

  if (!hasGovernedNarrative) {
    return [
      { id: "s-matrix",    label: "Verification Matrix" },
      { id: "s-warrant",   label: "State Warrant" },
      { id: "s-lineage",   label: "Record Lineage" },
      { id: "s-mutations", label: "Mutation Log" },
      { id: "s-evidence",  label: "Evidence Sources" },
      ...(hasRelated ? [{ id: "s-related", label: "Related Records" }] : []),
    ];
  }

  return [
    { id: "s-matrix",             label: "Verification Matrix" },
    { id: "s-warrant",            label: "State Warrant" },
    { id: "s-mechanisms",         label: "Mechanisms" },
    { id: "s-assessment-history", label: "Assessment History" },
    { id: "s-claim-lineage",      label: "Claim Lineage" },
    { id: "s-open-questions",     label: "Open Questions" },
    { id: "s-mutations",          label: "Mutation Log" },
    { id: "s-evidence",           label: "Evidence Sources" },
    ...(hasRelated ? [{ id: "s-related", label: "Related Records" }] : []),
  ];
}

function RecordTabs({ sections, activeSection }) {
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }
  return (
    <nav className="record-tabs" role="tablist" aria-label="Record sections">
      {sections.map((s) => (
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

  // Scrollspy — guards on `record` since this hook runs before the
  // not-found early return below; sections are computed per-record
  // (RENDER-PILOT-001), so this can no longer read a module-level list.
  useEffect(() => {
    if (!record) return;
    const sections = getSections(record);
    const offset = 44 + 44 + 24; // nav + tabs + buffer
    function onScroll() {
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < offset) current = s.id;
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [record]);

  if (!record) return <Navigate to="/the-record" replace />;

  const current = getCurrentAssessment(record);
  const url = `/the-record/${record.id.toLowerCase()}/`;
  const sections = getSections(record);
  const isPilot = RENDER_PILOT_001_RECORDS.has(record.id);
  const hasGovernedNarrative = isPilot || record.id === "FR-QE-0001";
  // Cross-highlight between EvidenceTrajectory's ticks and MutationLog's
  // rows only exists where EvidenceTrajectory itself renders (see
  // record-body below) — Fragment elsewhere is a true no-op, not an
  // empty provider, so every other record's page is byte-for-byte
  // unchanged.
  const MutationHighlightWrapper = record.id === "FR-QE-0001" ? MutationHighlightProvider : Fragment;

  return (
    <>
      <PageMeta
        title={`${record.claim.shortLabel} — ${record.id}`}
        description={getRecordMetaDescription(record)}
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
                <Link
                  to={`/programmes/${record.programme.toLowerCase()}`}
                  className="rp-programme rp-programme-link"
                >
                  {record.programme}
                </Link>
                <div className="rp-record-id">{record.id}</div>
              </div>
              <h1 className="rp-title">{record.claim.shortLabel}</h1>
              <p className="rp-definition">{record.claim.statement}</p>
              {/* RELEASE-021: replaces the dark record-state-band. Same status
                  info (state, VS code, since-date) in one compact line instead
                  of a separate full-bleed dark section; full rationale now
                  appears exactly once, in the State Warrant section below,
                  instead of being duplicated here as well. */}
              <div className="rp-status-row" role="status" aria-label="Current record state">
                <StateBadge pressureState={current.pressureState} />
                <span className="rp-status-vs">{current.verificationStage}</span>
                <span className="rp-status-sep">·</span>
                <span className="rp-status-since">since {current.date}</span>
                {current.provenanceNote && (
                  <span className="rp-status-provenance">S4 reconstruction · not reaffirmed by realignment</span>
                )}
              </div>
            </div>
            <aside className="rp-meta-panel" aria-label="Record metadata">
              <div className="rp-meta-row">
                <span className="rp-status-label">Record Opened</span>
                <span className="rp-status-value">
                  {record.claim.openedDate}
                  {record.claim.openedDateQualifier ? ` · ${record.claim.openedDateQualifier}` : ""}
                </span>
              </div>
              {record.claim.subject && (
                <div className="rp-meta-row">
                  <span className="rp-status-label">Claim Subject</span>
                  <span className="rp-status-value">{record.claim.subject}</span>
                </div>
              )}
              {record.claim.claimClass && (
                <div className="rp-meta-row">
                  <span className="rp-status-label">Claim Class</span>
                  <span className="rp-status-value">{record.claim.claimClass}</span>
                </div>
              )}
              {record.reconstruction?.effectiveCreationDate && (
                <div className="rp-meta-row">
                  <span className="rp-status-label">Effective Reconstruction</span>
                  <span className="rp-status-value">{record.reconstruction.effectiveCreationDate} · S4</span>
                </div>
              )}
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
              <Link
                to={`/evidence-trajectories/?record=${record.id}`}
                className="rp-trajectory-link"
              >
                View this record in Evidence Trajectories
              </Link>
            </aside>
          </div>

          <RecordTabs sections={sections} activeSection={activeSection} />
        </header>

        {/* Record body */}
        <MutationHighlightWrapper>
        <div id="record-body">

          <section className="record-section-inner" id="s-matrix">
            <div className="rs-header">Verification Matrix</div>
            <VerificationMatrix record={record} />
          </section>

          <section className="record-section-inner" id="s-warrant">
            <div className="rs-header">State Warrant</div>
            <WarrantPanel current={current} record={record} />
            <ExperimentalAnnotations record={record} />
          </section>

          {/* Evidence Trajectories — Prototype 001. Scoped to FR-QE-0001
              only, the corpus's designated multi-assessment/transition
              test record (per CLAUDE.md). Renders assessments[] as a
              static SVG trajectory — a rendering projection derived from
              the canonical corpus (see src/data/deriveTrajectory.js),
              never a second data model. Not wired into the scrollspy tab
              list; this is a vertical-slice prototype, not a corpus-wide
              feature. */}
          {record.id === "FR-QE-0001" && (
            <section className="record-section-inner" id="s-trajectory">
              <div className="rs-header">Evidence Trajectory</div>
              <EvidenceTrajectory record={record} />
            </section>
          )}

          {/* RENDER-PILOT-001 / ADR-00X. Pilot records only. */}
          {hasGovernedNarrative && (
            <section className="record-section-inner" id="s-mechanisms">
              <div className="rs-header">Mechanisms</div>
              <Mechanisms record={record} />
            </section>
          )}

          {/* RN-00X Finding RN-02: this section is sourced from
              assessments[] (a state-change log), not record.lineage.items[]
              — it was labeled "Record Lineage" corpus-wide despite that.
              For pilot records, it is relabeled "Assessment History" (its
              accurate name) and the actual lineage narrative is rendered
              separately just below, resolving the label/source mismatch.
              Every non-pilot record keeps the original id, label, and
              content exactly as before — unchanged pending a corpus-wide
              decision informed by this pilot. */}
          <section
            className="record-section-inner"
            id={hasGovernedNarrative ? "s-assessment-history" : "s-lineage"}
          >
            <div className="rs-header">
              {hasGovernedNarrative ? "Assessment History" : "Record Lineage — Chronological"}
            </div>
            <RecordLineage record={record} />
          </section>

          {/* RENDER-PILOT-001 / ADR-00Z. Pilot records only. */}
          {hasGovernedNarrative && (
            <section className="record-section-inner" id="s-claim-lineage">
              <div className="rs-header">Claim Lineage</div>
              <ClaimLineage record={record} />
            </section>
          )}

          {/* RENDER-PILOT-001 / ADR-00Y. Pilot records only. */}
          {hasGovernedNarrative && (
            <section className="record-section-inner" id="s-open-questions">
              <div className="rs-header">Open Questions</div>
              <OpenQuestions record={record} />
            </section>
          )}

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
        </MutationHighlightWrapper>
      </div>
      <SiteFooter />
    </>
  );
}
