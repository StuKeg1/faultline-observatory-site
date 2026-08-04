import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import "./PoliticalRumourAccuracyPilot.css";

const scoredSources = [
  ["Financial Times — Mahmood set to be named Chancellor, 15 July", "https://www.ft.com/content/54d17925-a1d3-4bae-a1bc-a325df7577dd"],
  ["The Guardian — Mahmood expected to be named Chancellor, 15 July", "https://www.theguardian.com/politics/2026/jul/15/shabana-mahmood-andy-burnham-chancellor"],
  ["The Times — Burnham faces revolt if Mahmood made Chancellor, 16 July", "https://www.thetimes.com/uk/politics/article/andy-burnham-labour-party-appoint-mahmood-miliband-fsz0hf7bg"],
  ["Financial Times — Burnham plans beefed-up Downing Street control centre, 19 July", "https://www.ft.com/content/1370d477-fc16-408a-b9ed-d9c19c076ca3"],
  ["Financial Times — Burnham surprises Labour MPs by choosing Healey, 20 July", "https://www.ft.com/content/740f0449-f367-46e0-92a6-43251f56f974"],
];

export default function PoliticalRumourAccuracyPilot() {
  return (
    <>
      <PageMeta
        title="Who would Andy Burnham appoint as Chancellor?"
        description="A public-web pilot testing what political reporting knew about Andy Burnham’s choice of Chancellor—and what its sources could actually support."
        path="/political-rumour-accuracy-pilot/"
      />

      <article className="rumour-pilot-page">
        <header className="rumour-pilot-hero">
          <div className="rumour-pilot-wide">
            <div className="rumour-pilot-eyebrow">Independent method pilot</div>
            <h1>Who would Andy Burnham appoint as Chancellor?</h1>
            <p className="rumour-pilot-deck">
              A test of what political reporting knew—and what its sources could actually support.
            </p>

            <p className="rumour-pilot-provenance">
              Prompted by <a href="https://shkspr.mobi/blog/2026/07/are-political-journalists-always-wrong/" target="_blank" rel="noreferrer">Terence Eden’s challenge</a>, I deliberately narrowed the pilot to one resolvable case: press claims about Andy Burnham’s choice of Chancellor, tested against the eventual appointment. ChatGPT Work (GPT-5.6 Sol, medium reasoning) helped locate, classify and assess the contemporaneous reports.
            </p>
          </div>
        </header>

        <main>
          <section className="rumour-pilot-opening">
            <div className="rumour-pilot-inner">
              <div className="rumour-pilot-scope-note">
                This pilot sits outside the Observatory’s scientific and technological record. It is published as an independent application of its claim-analysis method.
              </div>

              <p className="rumour-pilot-lead">
                Four press reports made sufficiently definite, outcome-testable claims about Andy Burnham’s choice of Chancellor. All four named Shabana Mahmood. John Healey was appointed.
              </p>
              <p>
                The interesting finding is not simply that the reports were wrong. They appear to have converted evidence about factional lobbying—or a provisional plan—into apparent knowledge of the final decision.
              </p>

              <div className="rumour-score" aria-label="Pilot result: four outcome-testable reports, zero correct, four missed">
                <div><strong>4</strong><span>Outcome-testable reports</span></div>
                <div><strong>0</strong><span>Correct</span></div>
                <div className="rumour-score-missed"><strong>4</strong><span>Missed</span></div>
              </div>

              <blockquote>
                Westminster sources were better evidence of who factions wanted than of what the incoming prime minister would ultimately do.
              </blockquote>

              <details className="rumour-method">
                <summary>Method and sources</summary>
                <div className="rumour-method-body">
                  <p>
                    Reports were scored only where their published wording made a definite or strongly expected appointment claim. Four reports met that threshold: two from the Financial Times, one from The Guardian and one from The Times. All named Shabana Mahmood. John Healey was appointed.
                  </p>
                  <p>
                    This was a public-web pilot, not an archive-complete study. The unit of analysis was the published claim, not the journalist. A “miss” means that a scored claim named someone other than the person appointed; it does not establish a publication or journalist accuracy rate.
                  </p>
                  <ol>
                    {scoredSources.map(([label, href]) => (
                      <li key={href}>
                        <a href={href} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            </div>
          </section>

          <aside className="rumour-pilot-observatory">
            <div className="rumour-pilot-observatory-layout">
              <div>
                <div className="rumour-pilot-eyebrow">Continue into the Observatory</div>
                <h2>Interested in the other claims the Observatory is tracking?</h2>
                <p>Follow consequential science and technology claims as their evidence develops.</p>
              </div>
              <Link className="rumour-primary-action" to="/">
                Explore the Faultline Observatory <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </main>
      </article>
      <SiteFooter />
    </>
  );
}
