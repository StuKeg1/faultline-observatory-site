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
    visual: "materials",
    visualLabel: "Schematic crystal lattice and current path",
  },
  {
    id: "FR-AI-0007",
    question: "Can AI independently make valid scientific discoveries?",
    visual: "ai",
    visualLabel: "Schematic research loop with an unresolved judgment boundary",
  },
  {
    id: "FR-QE-0007",
    question: "Has a quantum computer achieved practical advantage yet?",
    visual: "quantum",
    visualLabel: "Schematic comparison between quantum and classical performance",
  },
];

function getRecord(id) {
  const record = ALL_RECORDS.find((candidate) => candidate.id === id);
  if (!record) throw new Error(`VD-001: representative record ${id} not found`);
  return record;
}

function assessmentExcerpt(summary) {
  if (!summary) return "No current assessment summary available.";
  const firstSentence = summary.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  return firstSentence || summary;
}

function VisualAnchor({ type, label }) {
  return (
    <div className="vd-anchor" role="img" aria-label={label}>
      {type === "materials" ? (
        <svg viewBox="0 0 240 150" aria-hidden="true">
          <g className="vd-anchor-lines">
            <path d="M30 35h180M30 75h180M30 115h180" />
            <path d="M55 20v110M100 20v110M145 20v110M190 20v110" />
          </g>
          <g className="vd-anchor-nodes">
            {[55, 100, 145, 190].flatMap((x) => [35, 75, 115].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />))}
          </g>
          <path className="vd-anchor-emphasis" d="M32 126c32-18 58-18 86 0s56 18 90-3" />
        </svg>
      ) : null}
      {type === "ai" ? (
        <svg viewBox="0 0 240 150" aria-hidden="true">
          <g className="vd-anchor-lines">
            <circle cx="120" cy="75" r="48" />
            <path d="M120 27v22M168 75h-22M120 123v-22M72 75h22" />
          </g>
          <g className="vd-anchor-nodes">
            <circle cx="120" cy="27" r="7" />
            <circle cx="168" cy="75" r="7" />
            <circle cx="120" cy="123" r="7" />
            <circle cx="72" cy="75" r="7" />
          </g>
          <path className="vd-anchor-emphasis" d="M98 75h44" />
          <path className="vd-anchor-emphasis" d="m132 65 10 10-10 10" />
          <path className="vd-anchor-dashed" d="M105 54 90 39M135 96l15 15" />
        </svg>
      ) : null}
      {type === "quantum" ? (
        <svg viewBox="0 0 240 150" aria-hidden="true">
          <path className="vd-anchor-lines" d="M25 122h190M42 122V28" />
          <path className="vd-anchor-muted" d="M42 105c40-10 72-26 98-46 22-17 42-24 67-27" />
          <path className="vd-anchor-emphasis" d="M42 112c44-4 77-14 105-32 24-16 42-35 60-57" />
          <circle className="vd-anchor-node-emphasis" cx="174" cy="59" r="6" />
          <path className="vd-anchor-dashed" d="M174 59v63" />
        </svg>
      ) : null}
      <span className="vd-anchor-caption">Observatory schematic · navigation only</span>
    </div>
  );
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

function DiscoveryCard({ record, question, visual, visualLabel, withVisual }) {
  const current = getCurrentAssessment(record);
  return (
    <Link to={getRecordUrl(record)} className={`vd-discovery-card${withVisual ? " vd-discovery-card--visual" : ""}`}>
      {withVisual ? <VisualAnchor type={visual} label={visualLabel} /> : null}
      <div className="vd-discovery-copy">
        <div className="vd-card-topline">
          <span>{record.id}</span>
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
        <div className="vd-variant-label"><span>Variant A</span><small>Enhanced text hierarchy</small></div>
        <DiscoveryCard record={record} question={item.question} />
      </section>
      <section>
        <div className="vd-variant-label"><span>Variant B</span><small>Text + visual anchor</small></div>
        <DiscoveryCard record={record} question={item.question} visual={item.visual} visualLabel={item.visualLabel} withVisual />
      </section>
    </div>
  );
}

export default function VisualDiscoverabilityExperiment() {
  return (
    <>
      <PageMeta
        title="VD-001 Visual Discoverability Experiment"
        description="Internal comparison prototype for Frontier Record discovery cards."
        path="/experiments/vd-001/"
        noindex
      />
      <main className="vd-page">
        <header className="vd-header">
          <p className="vd-eyebrow">Bounded experiment · VD-001</p>
          <h1>Frontier Record visual discoverability</h1>
          <p className="vd-intro">Three representative records are shown as the current question-led pattern, an enhanced text hierarchy, and the same hierarchy with a restrained Observatory-created visual anchor. Canonical records are read directly from the corpus; this page does not mutate record data.</p>
          <div className="vd-guardrail">Prototype only · unlinked · no production rollout decision</div>
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
                <span className="vd-case-purpose">{item.visual === "materials" ? "Concrete object" : item.visual === "ai" ? "Abstract capability" : "Experimental middle case"}</span>
              </div>

              <div className="vd-width-label">Desktop comparison</div>
              <div className="vd-desktop-frame"><VariantSet item={item} /></div>

              <div className="vd-width-label">Mobile comparison · 390 px</div>
              <div className="vd-mobile-frame"><VariantSet item={item} mobile /></div>
            </article>
          );
        })}

        <section className="vd-gates" aria-labelledby="vd-gates-title">
          <p className="vd-eyebrow">Evaluation frame</p>
          <h2 id="vd-gates-title">Acceptance gates</h2>
          <ol>
            <li><strong>Comprehension</strong><span>Question is understandable before canonical terminology.</span></li>
            <li><strong>Canonical integrity</strong><span>ID, title, state and assessment remain corpus-derived.</span></li>
            <li><strong>Institutional character</strong><span>Still reads as a maintained public record, not a science magazine.</span></li>
            <li><strong>Visual utility</strong><span>Variant B must improve recognition or scanning, not merely decoration.</span></li>
            <li><strong>Generalisability</strong><span>The pattern must survive concrete, abstract and experimental records.</span></li>
          </ol>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
