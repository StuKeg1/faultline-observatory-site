import { useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import EvidenceLandscape from "../components/trajectory/EvidenceLandscape.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS, PROGRAMMES } from "../data/corpus.js";
import "./EvidenceTrajectories.css";

// Prototype 002. A record only has a trajectory to render if it has been
// reassessed at least once — a single-assessment record is a point, not
// a line. 12 of the corpus's 26 records currently qualify.
const TRAJECTORY_RECORDS = ALL_RECORDS.filter((r) => r.assessments.length >= 2);

export default function EvidenceTrajectories() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeProgrammes = searchParams.getAll("programme");
  const activeStates = searchParams.getAll("state");

  // Prototype 003. A Reading is a durable composition of Lenses, so it
  // lives in the URL (not component state) — shareable and stable across
  // back navigation, the same reason TheRecord's filters live in the URL.
  // Unlike TheRecord's filters, toggling a value here never removes a
  // trajectory from the page; see deriveReading.js.
  const toggleLensValue = useCallback(
    (key, value) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          const values = next.getAll(key);
          next.delete(key);
          const nextValues = values.includes(value)
            ? values.filter((v) => v !== value)
            : [...values, value];
          for (const v of nextValues) next.append(key, v);
          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  const toggleProgramme = (id) => toggleLensValue("programme", id);
  const toggleState = (state) => toggleLensValue("state", state);
  const clearReading = () =>
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete("programme");
        next.delete("state");
        return next;
      },
      { replace: true }
    );

  return (
    <>
      <PageMeta
        title="Evidence Trajectories"
        description="Every reassessed Frontier Record, plotted on one shared time axis and verification-stage axis."
        path="/evidence-trajectories/"
      />
      <div className="evidence-trajectories-page">
        <header>
          <div className="et-breadcrumb">
            <Link to="/">← Observatory</Link>
            <span> › </span>
            <span className="bc-current">Evidence Trajectories</span>
          </div>
          <h1>Evidence Trajectories</h1>
          <p className="et-intro">
            {TRAJECTORY_RECORDS.length} of {ALL_RECORDS.length} Frontier Records have been reassessed at
            least once — each one has a trajectory, not just a point. Plotted here on one shared time axis
            and verification-stage axis, derived directly from each record's own assessment history and
            mutation log.
          </p>
        </header>
        <EvidenceLandscape
          records={TRAJECTORY_RECORDS}
          programmes={PROGRAMMES}
          activeProgrammes={activeProgrammes}
          activeStates={activeStates}
          onToggleProgramme={toggleProgramme}
          onToggleState={toggleState}
          onClearReading={clearReading}
        />
      </div>
      <SiteFooter />
    </>
  );
}
