import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import "./PoliticalRumourAccuracyPilot.css";

const pilotSources = [
  ["The Times — Burnham’s aides want Mahmood to be his chancellor, 13 June", "https://www.thetimes.com/uk/politics/article/andy-burnham-makerfield-byelection-future-cabinet-pnzp79b6p"],
  ["The Times — Ed Miliband takes key economic role in Burnham’s backroom team, 25 June", "https://www.thetimes.com/uk/politics/article/ed-miliband-economic-policies-andy-burnham-x88w9vglk"],
  ["Financial Times — Mahmood set to be named Chancellor, 15 July", "https://www.ft.com/content/54d17925-a1d3-4bae-a1bc-a325df7577dd"],
  ["The Guardian — Mahmood expected to be named Chancellor, 15 July", "https://www.theguardian.com/politics/2026/jul/15/shabana-mahmood-andy-burnham-chancellor"],
  ["The Times — Burnham faces revolt if Mahmood made Chancellor, 16 July", "https://www.thetimes.com/uk/politics/article/andy-burnham-labour-party-appoint-mahmood-miliband-fsz0hf7bg"],
  ["Financial Times — Burnham plans beefed-up Downing Street control centre, 19 July", "https://www.ft.com/content/1370d477-fc16-408a-b9ed-d9c19c076ca3"],
  ["Financial Times — Burnham surprises Labour MPs by choosing Healey, 20 July", "https://www.ft.com/content/740f0449-f367-46e0-92a6-43251f56f974"],
  ["The Guardian — Briefing wars: how ministers tried and failed to get the Chancellorship, 20 July", "https://www.theguardian.com/politics/2026/jul/20/briefing-wars-labour-ministers-tried-failed-burnham-cabinet-miliband-mahmood"],
  ["The Telegraph — Why Burnham chose John Healey, 20 July", "https://www.telegraph.co.uk/politics/2026/07/20/john-healey-is-shrewd-choice-of-chancellor-by-andy-burnham/"],
];

const claimTypes = [
  ["Preference", "A faction wants Mahmood."],
  ["Probability", "Mahmood is considered the frontrunner."],
  ["Intent", "Burnham plans to appoint Mahmood."],
  ["Decision", "Mahmood has been selected."],
  ["Outcome", "Mahmood is appointed."],
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

              <p className="rumour-rate-caveat">
                The raw scored-report hit rate is <strong>0/4</strong>. That figure describes only this one episode. It must not be presented as a publication or journalist accuracy rate.
              </p>

              <blockquote>
                The reports look like one Westminster briefing cascade. They accurately detected a factional battle, but converted evidence about who insiders wanted into apparent knowledge of what Burnham would do.
              </blockquote>
            </div>
          </section>

          <section className="rumour-analysis" aria-labelledby="rumour-analysis-title">
            <div className="rumour-pilot-wide">
              <div className="rumour-pilot-eyebrow">Interpretation</div>
              <h2 id="rumour-analysis-title">What the reporting actually captured</h2>
              <div className="rumour-analysis-grid">
                <article>
                  <span>01</span>
                  <h3>A real contest was visible</h3>
                  <p>
                    The reporting consistently identified Ed Miliband and Shabana Mahmood as the principal publicly discussed candidates. It also captured factional opposition to Miliband and a City preference for Mahmood. That part was not invented: post-appointment accounts described intense briefing by competing camps.
                  </p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Advocacy was repeatedly converted into apparent intent</h3>
                  <p>
                    Early articles were relatively careful: aides wanted Mahmood; Miliband was in the running; several people were tipped. By 15 July, this had hardened into “set to become”, “expected to be named” and even “definitely happening”. The evidence visible to readers did not harden in the same way. It remained anonymous and contested.
                  </p>
                </article>
                <article>
                  <span>03</span>
                  <h3>The articles contained their own warning labels</h3>
                  <p>
                    The Guardian’s 15 July report said Burnham’s team insisted that no final decision had been made. It quoted a source describing a world in which people were being briefed into and out of jobs by people who probably did not know. The Financial Times also recorded Burnham’s spokesperson calling the reports speculation, while colleagues of Mahmood said she had not been told she was moving to the Treasury.
                  </p>
                  <p>
                    Those caveats matter editorially—but they do not cancel headlines and leads that presented the appointment as expected or settled.
                  </p>
                </article>
                <article>
                  <span>04</span>
                  <h3>The miss may have been caused by error or by change</h3>
                  <p>
                    The eventual choice of Healey was described as a surprise. Subsequent Telegraph reporting quoted a source saying Mahmood had been “nailed on” as recently as the preceding Friday before “something changed”. This supports two live interpretations:
                  </p>
                  <ul>
                    <li>the sources never knew Burnham’s settled intention; or</li>
                    <li>Mahmood genuinely was the provisional choice and Burnham changed course.</li>
                  </ul>
                  <p>
                    Public evidence cannot adjudicate between them. Therefore the audit scores the <strong>published outcome claim</strong> as a miss, not the underlying source as a lie.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="rumour-institutional" aria-labelledby="rumour-institutional-title">
            <div className="rumour-pilot-wide">
              <div className="rumour-pilot-eyebrow">Institutional lesson</div>
              <h2 id="rumour-institutional-title">The key failure was a collapse of claim types.</h2>
              <p className="rumour-institutional-intro">It was not simply that journalists guessed the wrong name.</p>
              <ol className="rumour-claim-types">
                {claimTypes.map(([type, description], index) => (
                  <li key={type}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{type}</strong>
                    <small>{description}</small>
                  </li>
                ))}
              </ol>
              <div className="rumour-institutional-copy">
                <p>
                  The coverage moved from stages 1–2 toward stages 3–4 without publicly observable evidence of a corresponding increase in source authority. The eventual outcome then falsified the strongest public formulation.
                </p>
                <p>
                  This suggests that any larger study should measure more than hits and misses. It should test whether journalists preserve—or erase—the distance between advocacy, expectation, intention, decision and outcome.
                </p>
              </div>
            </div>
          </section>

          <section className="rumour-disclosures">
            <div className="rumour-pilot-inner">
              <details className="rumour-method">
                <summary>Why there is no journalist leaderboard</summary>
                <div className="rumour-method-body">
                  <p>This pilot cannot support one because:</p>
                  <ul>
                    <li>the sample contains only one resolved appointment;</li>
                    <li>several stories had multiple bylines;</li>
                    <li>headlines may not be written by the reporters;</li>
                    <li>the same briefing can appear across several outlets;</li>
                    <li>reporting a faction’s lobbying can be accurate even when its candidate loses;</li>
                    <li>a real provisional decision can change after publication; and</li>
                    <li>reporters with cautious wording would be unfairly compared with reporters making categorical claims.</li>
                  </ul>
                  <p>
                    A defensible leaderboard would require a preregistered protocol, archived article versions and roughly 30–50 independent, resolvable claims per journalist. Scores should reward calibration, not merely count correct names.
                  </p>
                </div>
              </details>

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
                    {pilotSources.map(([label, href]) => (
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
