import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import "./PoliticalRumourAccuracyPilot.css";

const claimRows = [
  ["13 Jun", "The Times", "Burnham’s aides want Mahmood to be his chancellor", "Aides’ preference", "D — Advocacy", "Not scored"],
  ["23 Jun", "The Guardian", "Miliband was among the possibilities; Streeting was tipped", "Allies and general speculation", "C — Consideration", "Not scored"],
  ["25 Jun", "The Times", "Miliband was said to be in the running", "Unnamed reporting", "C — Consideration", "Not scored"],
  ["1 Jul", "The Independent", "Mahmood was among the leading contenders; Healey was discussed for the Home Office", "Westminster sources and expert discussion", "C — Consideration", "Not scored"],
  ["3 Jul", "The Times", "Burnham had not decided; Miliband remained part of the discussion", "Reported absence of a decision", "C — Consideration", "Not scored"],
  ["10 Jul", "The Telegraph", "Miliband was tipped for Chancellor", "Private advice and circulating speculation", "C — Consideration", "Not scored"],
  ["13 Jul", "Morningstar", "Miliband was the marginal front-runner, according to oddsmakers", "Betting-market ranking", "B — Probabilistic", "Not scored"],
  ["14 Jul", "The Times", "Allies believed Miliband had been blocked; Mahmood was the frontrunner, but no final decision had been taken", "Three figures around Burnham; counterstatement from a source close to him", "B — Probabilistic", "Not scored"],
  ["15 Jul", "Financial Times", "Mahmood was set to become Chancellor; one briefed source said it was definitely happening", "Three people briefed on Burnham’s thinking", "A1 — Definite", "Miss"],
  ["15 Jul", "The Guardian", "Mahmood was expected to be named Chancellor", "Senior Labour figures said to know Burnham’s thinking", "A2 — Strong", "Miss"],
  ["15 Jul", "The Telegraph", "Mahmood was the front-runner", "Source-based political reporting", "B — Probabilistic", "Not scored"],
  ["16 Jul", "The Times", "Labour faced revolt over Burnham’s plan to choose Mahmood over Miliband", "Political reporting about the proposed appointment", "A2 — Strong", "Miss"],
  ["19 Jul", "Financial Times", "Burnham was expected to appoint Mahmood", "Reporting immediately before taking office", "A2 — Strong", "Miss"],
];

const sources = [
  ["The Times — Burnham’s aides want Mahmood to be his chancellor, 13 June", "https://www.thetimes.com/uk/politics/article/andy-burnham-makerfield-byelection-future-cabinet-pnzp79b6p"],
  ["The Guardian — Who is likely to be in or out of a Burnham cabinet?, 23 June", "https://www.theguardian.com/politics/2026/jun/23/in-or-out-burnham-cabinet-ed-miliband-shabana-mahmood-wes-streeting"],
  ["The Times — Ed Miliband takes key economic role in Burnham’s backroom team, 25 June", "https://www.thetimes.com/uk/politics/article/ed-miliband-economic-policies-andy-burnham-x88w9vglk"],
  ["The Independent — Mahmood tipped for Chancellor as Healey in frame for Home Office, 1 July", "https://www.independent.co.uk/news/uk/politics/andy-burnham-chancellor-shabana-mahmoud-b3005808.html"],
  ["The Times — Making Ed Miliband Chancellor would be a mistake, 3 July", "https://www.thetimes.com/uk/politics/article/trump-us-allies-ed-miliband-sqncl5zjw"],
  ["The Telegraph — How do you solve a problem like Chancellor Miliband?, 10 July", "https://www.telegraph.co.uk/politics/2026/07/10/how-do-you-solve-a-problem-like-chancellor-miliband/"],
  ["Morningstar — Who will be Andy Burnham’s Chancellor?, 13 July", "https://global.morningstar.com/en-gb/economy/who-will-be-andy-burnhams-chancellor"],
  ["The Times — Burnham’s allies block Miliband from becoming Chancellor, 14 July", "https://www.thetimes.com/uk/politics/article/andy-burnham-cabinet-rumours-ed-miliband-shabana-mahmood-llpb56bk2"],
  ["Financial Times — Mahmood set to be named Chancellor, 15 July", "https://www.ft.com/content/54d17925-a1d3-4bae-a1bc-a325df7577dd"],
  ["The Guardian — Mahmood expected to be named Chancellor, 15 July", "https://www.theguardian.com/politics/2026/jul/15/shabana-mahmood-andy-burnham-chancellor"],
  ["The Telegraph — Mahmood front-runner to be next Chancellor, 15 July", "https://www.telegraph.co.uk/politics/2026/07/15/burnhams-allies-urge-him-to-name-cooper-as-next-chancellor/"],
  ["The Times — Burnham faces revolt if Mahmood made Chancellor, 16 July", "https://www.thetimes.com/uk/politics/article/andy-burnham-labour-party-appoint-mahmood-miliband-fsz0hf7bg"],
  ["Financial Times — Burnham plans beefed-up Downing Street control centre, 19 July", "https://www.ft.com/content/1370d477-fc16-408a-b9ed-d9c19c076ca3"],
  ["Reuters — Pound rises on report Mahmood may become Chancellor, 15 July", "https://www.reuters.com/world/uk/sterling-steadies-near-one-year-high-against-euro-2026-07-15/"],
  ["Reuters — Sterling dips as Burnham poised for power, 17 July", "https://www.reuters.com/world/uk/sterling-dips-track-weekly-rise-burnham-poised-power-2026-07-17/"],
  ["Financial Times — Burnham surprises Labour MPs by choosing Healey, 20 July", "https://www.ft.com/content/740f0449-f367-46e0-92a6-43251f56f974"],
  ["The Guardian — Briefing wars: how ministers tried and failed to get the Chancellorship, 20 July", "https://www.theguardian.com/politics/2026/jul/20/briefing-wars-labour-ministers-tried-failed-burnham-cabinet-miliband-mahmood"],
  ["Reuters — Key ministers in Burnham’s Cabinet, 20 July", "https://www.reuters.com/business/finance/key-ministers-new-uk-leader-burnhams-cabinet-2026-07-20/"],
  ["The Telegraph — Why Burnham chose John Healey, 20 July", "https://www.telegraph.co.uk/politics/2026/07/20/john-healey-is-shrewd-choice-of-chancellor-by-andy-burnham/"],
];

function DataTable({ label, headers, rows, compact = false }) {
  return (
    <div className={`rumour-table-wrap${compact ? " rumour-table-wrap--compact" : ""}`} role="region" aria-label={label} tabIndex="0">
      <table>
        <caption>{label}</caption>
        <thead>
          <tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${row[1]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={cell === "Miss" ? "rumour-table-miss" : ""}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

            <div className="rumour-pilot-dates" aria-label="Study dates">
              <div><span>Research window</span>13 June–19 July 2026</div>
              <div><span>Resolution event</span>John Healey appointed Chancellor, 20 July 2026</div>
              <div><span>Completed</span>31 July 2026</div>
            </div>
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
                The press accurately detected an organised contest over the Chancellorship, but the strongest reports mistook factional briefing—or a provisional plan—for the final appointment. In this episode, Westminster sources were better evidence of who factions wanted than of what the incoming prime minister would ultimately do.
              </blockquote>
            </div>
          </section>

          <section className="rumour-pilot-section">
            <div className="rumour-pilot-inner">
              <div className="rumour-section-number">01</div>
              <h2>What was tested</h2>
              <p>
                This is a public-web pilot, not an archive-complete study. It searched contemporaneous, publicly discoverable coverage from national UK news publications and relevant financial-news outlets. Paywalled reports were included only where their headline, standfirst or indexed text exposed enough of the claim to classify it. No claim was strengthened beyond the wording visible in the source.
              </p>
              <p>
                The unit of analysis is the <strong>published claim</strong>, not the journalist. Co-bylines, headline editing and repeated sourcing make individual attribution unsafe at this scale.
              </p>

              <h3>Classification rules</h3>
              <DataTable
                label="Classification rules"
                headers={["Class", "Typical language", "Outcome scored?", "Reason"]}
                rows={[
                  ["A1 — Definite", "will; set to; nailed down", "Yes", "Represents an appointment as effectively decided"],
                  ["A2 — Strong expectation", "expected to; plans to appoint", "Yes", "Makes a clear directional prediction"],
                  ["B — Probabilistic ranking", "likely; frontrunner; favourite", "No", "A frontrunner can lose; no probability is supplied"],
                  ["C — Consideration", "tipped; in the frame; among contenders", "No", "Establishes candidacy, not an outcome"],
                  ["D — Advocacy", "allies want; should appoint", "No", "Reports a preference, not prime-ministerial intent"],
                ]}
              />
              <p className="rumour-pilot-note">
                “Hit” means the named person received the Chancellorship on 20 July. “Miss” means a scored claim named someone else. The study does not label unscored claims false.
              </p>
            </div>
          </section>

          <section className="rumour-pilot-section rumour-pilot-section--wide">
            <div className="rumour-pilot-wide">
              <div className="rumour-section-number">02</div>
              <h2>Claim register</h2>
              <DataTable
                label="Published claims considered in the pilot"
                headers={["Date", "Publication", "Published claim", "Source basis as presented", "Class", "Result"]}
                rows={claimRows}
              />
              <div className="rumour-amplification">
                <h3>Secondary amplification—not additional forecasts</h3>
                <p>
                  Reuters reported on 15 July that <em>The i</em> said Mahmood was likely to head the Treasury and that the Financial Times called her the frontrunner. On 17 July it again described newspapers as reporting that Mahmood was likely to be chosen. These reports are important evidence of amplification and market impact, but they are not counted as new, independently sourced Reuters predictions.
                </p>
              </div>
            </div>
          </section>

          <section className="rumour-pilot-section">
            <div className="rumour-pilot-inner">
              <div className="rumour-section-number">03</div>
              <h2>Results</h2>
              <DataTable
                compact
                label="Results by confidence class"
                headers={["Confidence class", "Claims", "Hits", "Misses"]}
                rows={[
                  ["A1 — Definite", "1", "0", "1"],
                  ["A2 — Strong expectation", "3", "0", "3"],
                  ["Total", "4", "0", "4"],
                ]}
              />
              <DataTable
                label="Results by publication"
                headers={["Publication", "Scored reports", "Hits", "Misses", "Important qualification"]}
                rows={[
                  ["Financial Times", "2", "0", "2", "Two reports of the same evolving appointment story, not necessarily independent forecasts"],
                  ["The Guardian", "1", "0", "1", "The report itself included strong warnings that no decision was final"],
                  ["The Times", "1", "0", "1", "Other Times reporting was more cautious and therefore excluded"],
                ]}
              />
              <p>
                The raw scored-report hit rate is <strong>0/4</strong>. That figure describes only this one episode. It must not be presented as a publication or journalist accuracy rate.
              </p>
            </div>
          </section>

          <section className="rumour-pilot-section">
            <div className="rumour-pilot-inner">
              <div className="rumour-section-number">04</div>
              <h2>What the reporting actually captured</h2>

              <h3>1. A real contest was visible</h3>
              <p>
                The reporting consistently identified Ed Miliband and Shabana Mahmood as the principal publicly discussed candidates. It also captured factional opposition to Miliband and a City preference for Mahmood. That part was not invented: post-appointment accounts described intense briefing by competing camps.
              </p>

              <h3>2. Advocacy was repeatedly converted into apparent intent</h3>
              <p>
                Early articles were relatively careful: aides wanted Mahmood; Miliband was in the running; several people were tipped. By 15 July, this had hardened into “set to become”, “expected to be named” and even “definitely happening”. The evidence visible to readers did not harden in the same way. It remained anonymous and contested.
              </p>

              <h3>3. The articles contained their own warning labels</h3>
              <p>
                The Guardian’s 15 July report said Burnham’s team insisted that no final decision had been made. It quoted a source describing a world in which people were being briefed into and out of jobs by people who probably did not know. The Financial Times also recorded Burnham’s spokesperson calling the reports speculation, while colleagues of Mahmood said she had not been told she was moving to the Treasury.
              </p>
              <p>
                Those caveats matter editorially—but they do not cancel headlines and leads that presented the appointment as expected or settled.
              </p>

              <h3>4. The miss may have been caused by error or by change</h3>
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
            </div>
          </section>

          <section className="rumour-pilot-section rumour-pilot-lesson">
            <div className="rumour-pilot-inner">
              <div className="rumour-section-number">05</div>
              <h2>The institutional lesson</h2>
              <p>The key failure was not simply “journalists guessed the wrong name”. It was a collapse of claim types:</p>
              <ol className="rumour-claim-ladder">
                <li><span>1</span><div><strong>Preference</strong><small>A faction wants Mahmood.</small></div></li>
                <li><span>2</span><div><strong>Probability</strong><small>Mahmood is considered the frontrunner.</small></div></li>
                <li><span>3</span><div><strong>Intent</strong><small>Burnham plans to appoint Mahmood.</small></div></li>
                <li><span>4</span><div><strong>Decision</strong><small>Mahmood has been selected.</small></div></li>
                <li><span>5</span><div><strong>Outcome</strong><small>Mahmood is appointed.</small></div></li>
              </ol>
              <p>
                The coverage moved from stages 1–2 toward stages 3–4 without publicly observable evidence of a corresponding increase in source authority. The eventual outcome then falsified the strongest public formulation.
              </p>
              <p>
                This suggests that any larger study should measure more than hits and misses. It should test whether journalists preserve—or erase—the distance between advocacy, expectation, intention, decision and outcome.
              </p>
            </div>
          </section>

          <section className="rumour-pilot-section">
            <div className="rumour-pilot-inner">
              <div className="rumour-section-number">06</div>
              <h2>Why there is no journalist leaderboard</h2>
              <p>This pilot cannot support one because:</p>
              <ul>
                <li>the sample contains only one resolved appointment;</li>
                <li>several stories had multiple bylines;</li>
                <li>headlines may not be written by the reporters;</li>
                <li>the same briefing can appear across several outlets;</li>
                <li>reporting a faction’s lobbying can be accurate even when its candidate loses;</li>
                <li>a real provisional decision can change after publication; and</li>
                <li>reporters using cautious wording would be unfairly compared with reporters making categorical claims.</li>
              </ul>
              <p>
                A defensible leaderboard would require a preregistered protocol, archived article versions and roughly 30–50 independent, resolvable claims per journalist. Scores should reward calibration, not merely count correct names.
              </p>
            </div>
          </section>

          <section className="rumour-pilot-section rumour-pilot-sources">
            <div className="rumour-pilot-inner">
              <div className="rumour-section-number">07</div>
              <h2>Sources</h2>
              <ol>
                {sources.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <aside className="rumour-pilot-observatory">
            <div className="rumour-pilot-inner">
              <div className="rumour-pilot-eyebrow">Why this appears on Faultline Observatory</div>
              <h2>Claims should be judged at the level of what they actually committed to.</h2>
              <p>
                This was a small, independent test of a method central to the Observatory: identifying exactly what a public claim commits to, distinguishing evidence from interpretation, and waiting for a resolution event before judging the result.
              </p>
              <p>
                Faultline Observatory applies that discipline over longer periods to consequential scientific and technological claims.
              </p>
              <div className="rumour-pilot-actions">
                <Link className="rumour-primary-action" to="/">Explore the Faultline Observatory <span aria-hidden="true">→</span></Link>
                <Link className="rumour-secondary-action" to="/welcome/">Start with the five-minute primer <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </aside>
        </main>
      </article>
      <SiteFooter />
    </>
  );
}
