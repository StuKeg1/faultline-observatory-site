import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { ALL_RECORDS, PROGRAMMES } from "../data/corpus.js";
import institutionalHealthCurrent from "../data/institutional-health-current.json";
import "./Institutional.css";

function formatNumber(value) {
  return new Intl.NumberFormat("en-GB").format(value);
}

export default function InstitutionalHealth() {
  const contextual = {
    period: institutionalHealthCurrent.period || "Current week",
    status: institutionalHealthCurrent.status || "Baseline period",
    visitors: institutionalHealthCurrent.visitors ?? null,
    pageViews: institutionalHealthCurrent.pageViews ?? null,
    recordCount: ALL_RECORDS.length,
    programmeCount: PROGRAMMES.length,
  };

  return (
    <>
      <div className="inst-page">
        <header className="inst-header">
          <div className="inst-header-inner">
            <div className="inst-eyebrow">Faultline Observatory</div>
            <h1 className="inst-title">Institutional Health</h1>
            <p className="inst-intro">
              Constitutional Fidelity remains the principal frame for institutional interpretation.
              The weekly figures below are contextual only and are not presented as health signals.
            </p>
          </div>
        </header>

        <main className="inst-body">
          <div className="inst-body-inner">
            <PageMeta
              title="Institutional Health"
              description="Institutional Health page for Faultline Observatory with contextual weekly statistics and static constitutional framing."
              path="/institutional-health/"
            />

            <section className="inst-health-grid">
              <article className="inst-health-card inst-health-card--contextual">
                <div className="inst-health-kicker">Metrics</div>
                <h2 className="inst-health-title">Weekly contextual statistics — not health metrics</h2>
                <p className="inst-health-copy">
                  Visitors and page views are sourced from Cloudflare Analytics where available.
                  Record and programme counts are derived from the local corpus registry.
                </p>

                <div className="inst-context-grid">
                  <article className="inst-context-card">
                    <span className="inst-context-label">Visitors</span>
                    <strong className="inst-context-value">
                      {contextual.visitors === null ? "Baseline period" : formatNumber(contextual.visitors)}
                    </strong>
                  </article>
                  <article className="inst-context-card">
                    <span className="inst-context-label">Page views</span>
                    <strong className="inst-context-value">
                      {contextual.pageViews === null ? "Baseline period" : formatNumber(contextual.pageViews)}
                    </strong>
                  </article>
                  <article className="inst-context-card">
                    <span className="inst-context-label">Record count</span>
                    <strong className="inst-context-value">{contextual.recordCount}</strong>
                  </article>
                  <article className="inst-context-card">
                    <span className="inst-context-label">Programme count</span>
                    <strong className="inst-context-value">{contextual.programmeCount}</strong>
                  </article>
                </div>

                <p className="inst-context-footnote">
                  {contextual.period}. {contextual.status}.
                </p>
              </article>

              <article className="inst-health-card inst-health-card--primary">
                <h2 className="inst-health-title">Constitutional Fidelity</h2>
                <p className="inst-health-copy">
                  Constitutional metrics remain static and manual for now. This page keeps those values separate from the contextual figures below.
                </p>
                <ul className="inst-health-note-list">
                  <li>Manual constitutional review remains the authoritative institutional frame.</li>
                  <li>Weekly contextual figures are informational only.</li>
                  <li>No traffic thresholds or optimisation framing are applied here.</li>
                </ul>
              </article>
            </section>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
