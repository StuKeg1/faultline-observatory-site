import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import "./Institutional.css";

// Methodology outgrew the "Stubs are small — no benefit splitting them" call
// in App.jsx (see the removed comment there) once this page picked up a
// dedicated Pressure State layout, an architecture index, and an Evidence
// Review pipeline. Split out on that basis, not because Stubs.jsx itself was
// unwieldy — Programmes/Search/HowToRead/GuidesIndex stay there unchanged.
//
// InstitutionalPage is duplicated here rather than extracted into a shared
// component, per the scoped brief's own preference: avoid a broader
// component refactor for this release. Keep it in sync with the copy in
// Stubs.jsx if the shared template ever changes.
//
// `wide` adds the inst-body-inner--wide modifier (max-width: var(--width-wide),
// an existing, previously-unused design token — "future: full-bleed sections
// if needed") — scoped to this page only via the modifier class, so the
// shared .inst-body-inner max-width used by Programmes/About/Search/etc. is
// untouched.
function InstitutionalPage({ eyebrow, title, wide, children }) {
  return (
    <>
      <div className="inst-page">
        <header className="inst-header">
          <div className="inst-header-inner">
            {eyebrow && <div className="inst-eyebrow">{eyebrow}</div>}
            <h1 className="inst-title">{title}</h1>
          </div>
        </header>
        <main className="inst-body">
          <div className={wide ? "inst-body-inner inst-body-inner--wide" : "inst-body-inner"}>
            {children}
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

// ─── ICONS ────────────────────────────────────────────────────────
// Hand-drawn inline SVG, not an icon library — this repo's package.json
// wasn't confirmed to include one (e.g. lucide-react), so no new dependency
// added. Minimal, thin-stroke, inherit color via currentColor.
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="10.2" y1="10.2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function ReviewIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="2.5" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 8.2l1.8 1.8L11 6.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10.5 2.5l3 3-8 8-3.4.5.5-3.4 8-8z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
const STEP_ICONS = [SearchIcon, ReviewIcon, EditIcon];

// ─── EPISTEMIC FOUNDATION ───────────────────────────────────────
// Unchanged from RELEASE-029 — plain term/def rows remain the right
// treatment here; these are prose concepts, not system components.
const FOUNDATION_BLOCKS = [
  { term: "FCIF",                          def: "The Frontier Claim Intelligence Framework. The Observatory's observation methodology — governing how scientific and technology claims are identified, assessed, and tracked through time as evidence accumulates." },
  { term: "Observation Before Interpretation", def: "The founding epistemic principle. The Observatory records what is observable before forming interpretive positions. Assessments are derived from evidence, not from prior conclusions." },
];

// ─── PRESSURE STATE ──────────────────────────────────────────────
// Copy unchanged from RELEASE-029 (full text supplied by Stuart) — restored
// verbatim here after the Codex mockup's shortened/altered wording. Layout
// changed to a real <table>, per the new reference mockup.
const PRESSURE_STATE_INTRO = [
  "A Pressure State records the Observatory's current assessment of a claim's evidentiary trajectory.",
  "It is not a verdict, and it is not generated automatically.",
  "Each Assessment reviews the accumulated evidence and determines which Pressure State best describes the claim at that point in time. The reasoning for that judgment is recorded in the Assessment itself.",
  "As new evidence accumulates, later Assessments may retain or change the Pressure State while preserving the complete history of earlier judgments.",
];

const PRESSURE_STATES = [
  { name: "Emerging", body: "The claim has entered the Observatory with credible evidence or a well-defined scientific question, but the evidence remains early, limited, or largely untested. The central uncertainty is still taking shape." },
  { name: "Escalating", body: "Evidence is accumulating in a consistent direction and materially increasing confidence—or materially increasing pressure on the claim. Important developments are occurring, but significant uncertainties remain and the claim is still actively contested." },
  { name: "Stabilising", body: "The evidentiary picture has become relatively stable. New evidence continues to appear, but it largely reinforces the existing assessment rather than substantially changing it. The claim remains under active observation." },
  { name: "Fragmenting", body: "The evidence no longer points in a single direction. Different aspects of the claim begin to diverge, competing explanations emerge, or apparent progress in one area is offset by uncertainty in another. The claim requires deeper interpretation rather than a simple increase or decrease in confidence." },
  { name: "Resolving", body: "The central uncertainty is approaching resolution. The remaining questions are narrower than those that originally defined the claim, and the evidence is converging toward a clear outcome. The claim has not yet been confirmed or closed." },
  { name: "Collapsed", body: "The claim is no longer supported under current evidence. Critical evidence has failed, key assumptions have been overturned, or repeated investigation has left the central claim unsupported. The record remains part of the Observatory as a permanent account of how the evidence evolved." },
];

const PRESSURE_STATE_NOTE = "Pressure States are descriptive, not procedural. They do not represent a mandatory sequence of stages. A record may remain in one state for many years, return to an earlier state if the evidentiary picture changes, or move directly between states when the evidence warrants it. Every change in Pressure State is justified by an Assessment and preserved as part of the record's permanent history.";

const PRESSURE_STATE_CLOSING = "Pressure States describe the condition of the evidence, not the eventual outcome of the claim.";

// ─── ARCHITECTURE INDEX ──────────────────────────────────────────
// Same five terms/definitions as RELEASE-029, unchanged copy — including
// "its instances" (not "its verification stages", as the Codex mockup had
// it; those are different fields in the actual data model, not
// interchangeable wording).
const ARCHITECTURE_INDEX = [
  { term: "Verification Stage",           def: "A discrete stage in the formal verification sequence (VS-01 through VS-05). The current stage is derived from assessments; it is never stored as a verdict. Mirrors the progression from initial scientific claim to independently replicated and operationally validated result." },
  { term: "Frontier Record",              def: "The atomic unit of institutional memory. Each record preserves a claim under observation, its instances, its full assessment history, its evidence trail, and its mutation log. Records are permanent, citable, and append-only." },
  { term: "Assessment",                   def: "A dated, append-only entry recording the Observatory's position on a record at a point in time. The current assessment is always the last entry — never stored separately." },
  { term: "Mutation Log",                 def: "An append-only log of every structural change to a record. Nothing is deleted; changes are recorded and the prior state is preserved." },
  { term: "Transition Feed",              def: "A derived sequence of state changes — computed from consecutive assessments where the pressure state changed. Not stored; always derived from the record's assessment history." },
];

// ─── EVIDENCE REVIEW ──────────────────────────────────────────────
// Copy unchanged from RELEASE-029.
const EVIDENCE_REVIEW_STEPS = [
  { step: "01", term: "Finding evidence",     def: "Identifying potentially relevant publications, announcements, datasets and other developments." },
  { step: "02", term: "Reviewing evidence",   def: "Evaluating whether new information materially changes the state of an existing Frontier Record." },
  { step: "03", term: "Changing assessments", def: "Updating the public record only when the accumulated evidence justifies a different judgement." },
];

export default function Methodology() {
  return (
    <InstitutionalPage eyebrow="FCIF — Frontier Claim Intelligence Framework" title="Methodology" wide>
      <PageMeta
        title="Methodology — FCIF"
        description="The Frontier Claim Intelligence Framework. How Faultline Observatory identifies, assesses, and tracks scientific and technology claims through evidence over time. Observation before interpretation."
        path="/methodology/"
      />
      <div className="inst-method-preface">
        <p className="inst-method-intro">
          The methodology sits behind the archive. Records justify the methodology;
          the methodology does not justify the records.
        </p>
      </div>

      <div className="inst-method-overview">
        <p className="inst-method-overview__heading">This methodology is organised into three parts.</p>
        <div className="inst-method-overview-list">
          <div className="inst-method-overview-entry">
            <div className="inst-method-overview-entry__title">Foundations</div>
            <div className="inst-method-overview-entry__sub">Constitutional principles</div>
          </div>
          <div className="inst-method-overview-entry">
            <div className="inst-method-overview-entry__title">Judgement</div>
            <div className="inst-method-overview-entry__sub">Institutional judgement</div>
          </div>
          <div className="inst-method-overview-entry">
            <div className="inst-method-overview-entry__title">Record Architecture</div>
            <div className="inst-method-overview-entry__sub">Institutional memory</div>
          </div>
        </div>
      </div>

      {/* ── Part I — Foundations ── */}
      <div className="inst-methodology-part inst-methodology-part--foundations">
        <div className="inst-methodology-part-label">
          <div className="inst-methodology-part-eyebrow">Part I</div>
          <div className="inst-methodology-part-title">Foundations</div>
          <p className="inst-methodology-part-desc">Foundational principles.</p>
        </div>
        <div className="inst-methodology-part-content">
          {FOUNDATION_BLOCKS.map((b, i) => (
            <div key={b.term}>
              <div className={i === 0 ? "inst-methodology-subsection-label" : "inst-methodology-subsection-label inst-methodology-subsection-label--spaced"}>
                {b.term}
              </div>
              <div className="inst-methodology-prose">
                <p>{b.def}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Part II — Judgement (Pressure State, Evidence Review) ── */}
      <div className="inst-methodology-part inst-methodology-part--judgement">
        <div className="inst-methodology-part-label">
          <div className="inst-methodology-part-eyebrow">Part II</div>
          <div className="inst-methodology-part-title">Judgement</div>
          <p className="inst-methodology-part-desc">Institutional judgement.</p>
        </div>
        <div className="inst-methodology-part-content">

          <div className="inst-methodology-subsection-label">Pressure State</div>
          <div className="inst-methodology-prose">
            {PRESSURE_STATE_INTRO.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="inst-methodology-table-wrap">
            <table className="inst-methodology-pressure-table">
              <thead>
                <tr>
                  <th>Pressure State</th>
                  <th>Definition</th>
                </tr>
              </thead>
              <tbody>
                {PRESSURE_STATES.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td>{s.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="inst-pressure-note">
            <span className="inst-methodology-note-icon" aria-hidden="true">i</span>
            <div>
              <div className="inst-pressure-note__heading">Important Note</div>
              <div className="inst-pressure-note__body">{PRESSURE_STATE_NOTE}</div>
            </div>
          </div>
          <div className="inst-methodology-prose">
            <p>{PRESSURE_STATE_CLOSING}</p>
          </div>

          <div className="inst-methodology-subsection-label inst-methodology-subsection-label--spaced">Evidence Review</div>
          <div className="inst-methodology-prose">
            <p>Finding new evidence is not the same as changing an assessment.</p>
            <p>The Faultline Observatory deliberately separates three distinct activities:</p>
          </div>

          <div className="inst-methodology-pipeline">
            {EVIDENCE_REVIEW_STEPS.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={s.term} className="inst-methodology-pipeline-step-wrap">
                  <div className="inst-methodology-pipeline-step">
                    <div className="inst-methodology-pipeline-step__top">
                      <span className="inst-methodology-pipeline-step__number">{s.step}</span>
                      <span className="inst-methodology-pipeline-step__icon"><Icon /></span>
                    </div>
                    <div className="inst-methodology-pipeline-step__term">{s.term}</div>
                    <div className="inst-methodology-pipeline-step__def">{s.def}</div>
                  </div>
                  {i < EVIDENCE_REVIEW_STEPS.length - 1 && (
                    <div className="inst-methodology-pipeline-arrow" aria-hidden="true">→</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="inst-methodology-prose">
            <p>This separation is intentional.</p>
            <p>
              Most new evidence does not change a Frontier Record. Many papers confirm existing
              understanding. Some introduce uncertainty without resolving it. Others strengthen
              confidence without changing the overall assessment. Only evidence that materially
              changes the state of a claim results in a new assessment.
            </p>
            <p>
              This approach helps preserve the distinction between activity and progress. The
              Observatory records changes in evidence, not simply the passage of time.
            </p>
          </div>
        </div>
      </div>

      {/* ── Part III — Record Architecture ── */}
      <div className="inst-methodology-part inst-methodology-part--architecture">
        <div className="inst-methodology-part-label">
          <div className="inst-methodology-part-eyebrow">Part III</div>
          <div className="inst-methodology-part-title">Record Architecture</div>
          <p className="inst-methodology-part-desc">Institutional memory.</p>
        </div>
        <div className="inst-methodology-part-content">
          <div className="inst-methodology-prose">
            <p>These are the permanent structures used to preserve institutional judgement over time.</p>
          </div>
          <div className="inst-methodology-index">
            {ARCHITECTURE_INDEX.map((b) => (
              <div key={b.term} className="inst-methodology-index-row">
                <div className="inst-methodology-index-term">{b.term}</div>
                <div className="inst-methodology-index-def">{b.def}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </InstitutionalPage>
  );
}
