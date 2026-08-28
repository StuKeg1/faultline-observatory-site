import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import StateBadge from "../components/StateBadge.jsx";
import { ALL_RECORDS } from "../data/corpus.js";
import { getCurrentAssessment, getRecordUrl } from "../data/derive.js";
import "./VisualDiscoverabilityExperiment.css";

const CASES = [
  {
    id: "FR-AM-0005",
    question: "Whatever happened to room-temperature superconductors?",
    purpose: "Concrete object",
  },
  {
    id: "FR-AI-0007",
    question: "Can AI independently make valid scientific discoveries?",
    purpose: "Abstract capability",
  },
  {
    id: "FR-QE-0007",
    question: "Has a quantum computer achieved practical advantage yet?",
    purpose: "Experimental middle case",
  },
];

function getRecord(id) {
  const record = ALL_RECORDS.find((candidate) => candidate.id === id);
  if (!record) throw new Error(`VD-001A: representative record ${id} not found`);
  return record;
}

function assessmentExcerpt(summary) {
  if (!summary) return "No current assessment summary available.";
  const firstSentence = summary.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  return firstSentence || summary;
}

function CurrentCard({ record, question }) {
  return (
    <Link to={getRecordUrl(record)} className="vd-current-card">
      <span className="vd-current-icon" aria-hidden="true">◌</span>
      <h4>{question}</h4>
      <div className="vd-current-foot">
        <span>{record.id}</span><span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

function DiscoveryCard({ record, question, refined = false }) {
  const current = getCurrentAssessment(record);
  return (
    <Link
      to={getRecordUrl(record)}
      className={refined ? "vd-discovery-card vd-discovery-card--refined" : "vd-discovery-card"}
    >
      <div className="vd-discovery-copy">
        <div className="vd-card-topline">
          <span className="vd-record-id">{record.id}</span>
          <StateBadge pressureState={current.pressureState} />
        </div>
        <h4>{question}</h4>
        <p className="vd-canonical-title">{record.claim.shortLabel}</p>
        <p className="vd-assessment">{assessmentExcerpt(current.summary)}</p>
        <div className="vd-card-foot">
          <span>{record.programme}</span><span aria-hidden="true">Open record →</span>
        </div>
      </div>
    </Link>
  );
}

function VariantSet({ item, mobile = false }) {
  const record = getRecord(item.id);
  return (
    <div className={mobile ? "vd-variant-set vd-variant-set--mobile" : "vd-variant-set"}>
      <section>
        <div className="vd-variant-label"><span>Current</span><small>Question-led card</small></div>
        <CurrentCard record={record} question={item.question} />
      </section>
      <section>
        <div className="vd-variant-label"><span>Variant A</span><small>Initial enhanced hierarchy</small></div>
        <DiscoveryCard record={record} question={item.question} />
      </section>
      <section>
        <div className="vd-variant-label"><span>Refined A</span><small>Candidate discovery card</small></div>
        <DiscoveryCard record={record} question={item.question} refined />
      </section>
    </div>
  );
}

export default function VisualDiscoverabilityExperiment() {
  return (
    <>
      <PageMeta
        title="VD-001A Visual Discoverability Refinement"
        description="Internal refinement comparison for Frontier Record discovery cards."
        path="/experiments/vd-001/"
        noindex
      />
      <main className="vd-page">
        <header className="vd-header">
          <p className="vd-eyebrow">Bounded experiment · VD-001A</p>
          <h1>Frontier Record discovery-card refinement</h1>
          <p className="vd-intro">VD-001 found that information hierarchy improved discoverability while decorative visual anchors did not generalise. This refinement keeps the same three records and compares the current card, the original text-only Variant A, and a tighter Refined A candidate. Canonical identity, Pressure State and assessment remain corpus-derived.</p>
          <div className="vd-guardrail">Prototype only · unlinked · Variant B retired from decision surface</div>
        </header>

        {CASES.map((item) => {
          const record = getRecord(item.id);
          return (
            <article className="vd-case" key={item.id}>
              <div className="vd-case-heading">
                <div>
                  <span className="vd-case-id">{item.id}</span>
                  <h2>{record.claim.shortLabel}</h2>
                </div>
                <span className="vd-case-purpose">{item.purpose}</span>
              </div>

              <div className="vd-width-label">Desktop comparison</div>
              <div className="vd-desktop-frame"><VariantSet item={item} /></div>

              <div className="vd-width-label">Mobile comparison · 390 px</div>
              <div className="vd-mobile-frame"><VariantSet item={item} mobile /></div>
            </article>
          );
        })}

        <section className="vd-gates" aria-labelledby="vd-gates-title">
          <p className="vd-eyebrow">VD-001A evaluation frame</p>
          <h2 id="vd-gates-title">Refinement gates</h2>
          <ol>
            <li><strong>Hierarchy</strong><span>Question remains the entry point; record identity and state are immediately legible.</span></li>
            <li><strong>Density</strong><span>Assessment adds value without turning the card into a miniature record page.</span></li>
            <li><strong>Mobile fit</strong><span>The 390 px card scans as one compact object with no avoidable dead space.</span></li>
            <li><strong>Institutional character</strong><span>Canonical metadata is visible but does not overpower the reader-facing question.</span></li>
            <li><strong>Generalisability</strong><span>The same pattern works for AM, AI and QE without record-specific styling.</span></li>
          </ol>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
