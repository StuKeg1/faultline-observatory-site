/** FIP-A04: copy-only contract for P1 Home, P2 Methodology, P3 Changelog, P4 About. */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const readSource = filename => readFileSync(new URL(filename, import.meta.url), "utf8");
const home = readSource("./Home.jsx");
const methodology = readSource("./Methodology.jsx");
const changelog = readSource("./InstitutionalChangelog.jsx");
const about = readSource("./About.jsx");
const welcome = readSource("./Welcome.jsx");
const count = (text, phrase) => text.split(phrase).length - 1;

const preservedAssessmentDefinition =
  'term: "Assessment",                   def: "A dated, append-only entry recording the Observatory\'s position on a record at a point in time. The current assessment is always the last entry — never stored separately."';
const preservedWelcomeSentence =
  "Earlier assessments are never rewritten or removed. Instead, the Record preserves the complete trajectory, allowing readers to see how understanding developed over time.";
const preservedAboutPrefix =
  "The Frontier Record is not a database of outcomes. It is a record of trajectories — how claims were stated, what evidence tested them, and how the evidentiary position evolved. Records are never closed by editorial judgement. They close only when the observable facts warrant closure.";

test("FIP-A04 P1: homepage distinguishes assessment history from corrected record fields", () => {
  assert.equal(count(home, "Assessments are added without overwriting earlier judgements."), 1);
  assert.equal(count(home, "Evidence descriptions and other record details may be corrected,"), 1);
  assert.equal(count(home, "with dated changes recorded in the Mutation Log."), 1);
  assert.doesNotMatch(home, /only ever added to, never rewritten/);
});

test("FIP-A04 P2: glossary differentiates preserved assessments from logged changes", () => {
  assert.equal(count(methodology, "Assessments are append-only; governed corrections to other record fields are logged."), 1);
  assert.equal(count(methodology, "They do not necessarily reproduce the complete earlier field wording."), 1);
  assert.equal(count(methodology, 'term: "Frontier Record"'), 1);
  assert.equal(count(methodology, 'term: "Mutation Log"'), 1);
  assert.equal(count(methodology, preservedAssessmentDefinition), 1);
  assert.doesNotMatch(methodology, /Nothing is deleted; changes are recorded and the prior state is preserved/);
});

test("FIP-A04 P3: changelog states that individual corrections can be summarised", () => {
  assert.equal(count(changelog, "Recorded mutation entries for Frontier Records, presented in chronological order."), 1);
  assert.equal(count(changelog, "An entry may summarise a correction rather than reproduce the complete earlier wording."), 1);
  assert.doesNotMatch(changelog, /Nothing here is deleted, hidden, or summarised away/);
  assert.match(changelog, /The homepage shows a filtered subset/);
  assert.match(changelog, /Latest Developments/);
});

test("FIP-A04 P4: About preserves the original trajectory and closure wording", () => {
  assert.equal(count(about, preservedAboutPrefix), 1);
  assert.equal(count(about,
    "Each record has a permanent identifier and preserves its assessment history and dated mutation log; corrections to other record fields are recorded."), 1);
  assert.doesNotMatch(about, /Each record is citable, permanent, and append-only\./);
});

test("FIP-A04: Welcome's original assessment history statement stays untouched", () => {
  assert.equal(count(welcome, preservedWelcomeSentence), 1);
  assert.match(welcome, /The Observatory preserves trajectories rather than verdicts/);
});

const output = new URL("../../dist/index.html", import.meta.url);
const buildAvailable = existsSync(output);
const readPage = route => readFileSync(new URL(`../../dist/${route}index.html`, import.meta.url), "utf8");
const renderedSkip = buildAvailable ? false : "dist/ absent: prerender assertions run after npm run build";

test("FIP-A04: all four revised public copies survive SSR/prerender", { skip: renderedSkip }, () => {
  const homeHtml = readPage("");
  assert.match(homeHtml, /Assessments are added without overwriting earlier judgements/);
  assert.match(homeHtml, /with dated changes recorded in the Mutation Log/);
  assert.doesNotMatch(homeHtml, /only ever added to, never rewritten/);

  const methodologyHtml = readPage("methodology/");
  assert.match(methodologyHtml, /Assessments are append-only; governed corrections to other record fields are logged/);
  assert.match(methodologyHtml, /They do not necessarily reproduce the complete earlier field wording/);
  assert.match(methodologyHtml, /The current assessment is always the last entry/);
  assert.doesNotMatch(methodologyHtml, /Nothing is deleted; changes are recorded and the prior state is preserved/);

  const changelogHtml = readPage("institutional-changelog/");
  assert.match(changelogHtml, /An entry may summarise a correction rather than reproduce the complete earlier wording/);
  assert.match(changelogHtml, /The homepage shows a filtered subset/);
  assert.doesNotMatch(changelogHtml, /Nothing here is deleted, hidden, or summarised away/);

  const aboutHtml = readPage("about/");
  assert.match(aboutHtml, /Each record has a permanent identifier and preserves its assessment history and dated mutation log/);
  assert.match(aboutHtml, /Records are never closed by editorial judgement/);

  const welcomeHtml = readPage("welcome/");
  assert.match(welcomeHtml, /Earlier assessments are never rewritten or removed/);
});
