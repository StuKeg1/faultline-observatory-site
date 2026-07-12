import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import StateBadge from "../components/StateBadge.jsx";
import { ALL_RECORDS, PROGRAMMES } from "../data/corpus.js";
import {
  getAssessmentHistory,
  getCurrentAssessment,
  getPressureStateLabel,
  getRecordUrl,
  getTransitionFeed,
} from "../data/derive.js";
import {
  DOCUMENTARY_PHASES,
  assignEventsToDocumentaryPhases,
  calculateEventX,
  calculatePhaseCoordinates,
  calculateStageRegisterGroups,
  phaseDateSummaries,
} from "./evidenceTrajectoryLayout.js";
import "./EvidenceTrajectories.css";

const STAGE_ORDER = ["VS-05", "VS-04", "VS-03", "VS-02", "VS-01"];

const STAGE_LABELS = {
  "VS-05": "Stable",
  "VS-04": "Audit",
  "VS-03": "Converging",
  "VS-02": "Fragmenting",
  "VS-01": "Emerging",
};


const STATE_TONES = {
  audit: "audit",
  escalating: "escalating",
  collapsed: "collapsed",
  fragmenting: "fragmenting",
  resolving: "resolving",
};

const LENSES = [
  {
    id: "full",
    label: "Full archive",
    description: "All Frontier Records remain present.",
    matches: () => true,
  },
  {
    id: "changed",
    label: "Changed assessments",
    description: "Records whose institutional assessment changed at least once.",
    matches: (record) => getTransitionFeed(record).length > 0,
  },
  {
    id: "audit",
    label: "Current audit records",
    description: "Records now held in Audit, with the archive still visible around them.",
    matches: (record) => getCurrentAssessment(record).pressureState === "audit",
  },
  ...PROGRAMMES.map((programme) => ({
    id: programme.id,
    label: programme.name,
    description: `${programme.shortId} records are brought forward within the full archive.`,
    matches: (record) => record.programme === programme.id,
  })),
];


function formatState(state) {
  return getPressureStateLabel(state);
}

function getProgramme(record) {
  return PROGRAMMES.find((programme) => programme.id === record.programme);
}

function buildTrajectory(record) {
  const history = getAssessmentHistory(record);
  return {
    record,
    history,
    transitions: getTransitionFeed(record),
    current: getCurrentAssessment(record),
  };
}

function getTone(pressureState) {
  return STATE_TONES[pressureState] ?? "neutral";
}

function shortRegisterTitle(label, limit = 48) {
  const primary = label.split(/\s+[—-]\s+/)[0] || label;
  return primary.length > limit ? `${primary.slice(0, limit - 3).trimEnd()}...` : primary;
}

function footerCaptionLines(label) {
  const fixedLines = {
    "Earliest recorded assessments": ["Earliest recorded", "assessments"],
    "Initial evaluations & early evidence": ["Initial evaluations", "& early evidence"],
    "Evidence accumulation & reassessments": ["Evidence accumulation", "& reassessments"],
    "Final evaluation & convergence": ["Final evaluation", "& convergence"],
    "Current institutional assessment": ["Current institutional", "assessment"],
  };
  return fixedLines[label] ?? [label];
}
function EvidenceChart({
  trajectories,
  selectedId,
  hoveredId,
  lensId,
  onSelect,
  onHover,
}) {
  const selectedLens = LENSES.find((lens) => lens.id === lensId) ?? LENSES[0];
  const focusIds = useMemo(() => {
    if (selectedId) return new Set([selectedId]);
    if (lensId === "full") return new Set();
    return new Set(
      trajectories
        .filter((trajectory) => selectedLens.matches(trajectory.record))
        .map((trajectory) => trajectory.record.id)
    );
  }, [lensId, selectedId, selectedLens, trajectories]);
  const trajectoryById = useMemo(
    () => new Map(trajectories.map((trajectory) => [trajectory.record.id, trajectory])),
    [trajectories]
  );

  const geometry = useMemo(() => {
    const width = 1360;
    const height = 940;
    const pad = { top: 86, right: 440, bottom: 92, left: 130 };
    const axisLeft = 32;
    const plotLeft = pad.left;
    const todayX = width - pad.right;
    const registerX = todayX + 38;
    const plotBottom = height - pad.bottom;
    const chartHeight = plotBottom - pad.top;
    const phaseCoordinates = calculatePhaseCoordinates({ left: plotLeft, right: todayX });
    const phaseSummaries = phaseDateSummaries(trajectories);

    const yForStage = (stage) => {
      const index = STAGE_ORDER.indexOf(stage);
      const safeIndex = index === -1 ? STAGE_ORDER.length - 1 : index;
      return pad.top + (safeIndex / (STAGE_ORDER.length - 1)) * chartHeight;
    };

    const stageRegister = calculateStageRegisterGroups({
      records: trajectories,
      stageOrder: STAGE_ORDER,
      yForStage,
      top: pad.top + 4,
      bottom: plotBottom - 4,
      rowHeight: 19,
      headerHeight: 32,
      groupGap: 12,
    });

    const registerColumns = {
      stageX: registerX,
      ringX: registerX + 44,
      idX: registerX + 58,
      idRightX: registerX + 130,
      titleX: registerX + 142,
      rightX: width - 28,
    };
    const registerTitleLimit = Math.max(
      24,
      Math.floor((registerColumns.rightX - registerColumns.titleX) / 5.2),
    );

    return {
      width,
      height,
      pad,
      axisLeft,
      plotLeft,
      plotBottom,
      todayX,
      registerX,
      registerColumns,
      registerTitleLimit,
      phaseCoordinates,
      phaseSummaries,
      yForStage,
      stageRegister,
    };
  }, [trajectories]);

  return (
    <div className="et-chart-shell">
      <svg
        className="et-chart"
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        role="img"
        aria-labelledby="et-chart-title et-chart-desc"
      >
        <title id="et-chart-title">Evidence Trajectories</title>
        <desc id="et-chart-desc">
          Evidence Trajectories arranges documented assessments across four evidence-history phases. Horizontal spacing represents documentary sequence rather than equal calendar time. The Current Register is grouped by current verification stage.
        </desc>

        <g className="et-phase-guides" aria-hidden="true">
          {geometry.phaseCoordinates.slice(1).map((phase) => (
            <line key={phase.id} x1={phase.left} x2={phase.left} y1={geometry.pad.top - 48} y2={geometry.plotBottom + 28} />
          ))}
          <line x1={geometry.todayX} x2={geometry.todayX} y1={geometry.pad.top - 34} y2={geometry.plotBottom + 34} />
        </g>

        <g className="et-chart-headings" aria-hidden="true">
          {geometry.phaseCoordinates.map((phase) => (
            <g key={phase.id}>
              <text className="et-phase-heading" x={phase.center} y="26">{phase.heading}</text>
              <text className="et-phase-subheading" x={phase.center} y="43">{phase.subheading}</text>
            </g>
          ))}
          <text className="et-phase-heading" x={geometry.registerX + 146} y="26">Current Register</text>
          <text className="et-phase-subheading" x={geometry.registerX + 146} y="43">Assessment : today</text>
        </g>

        <g className="et-grid" aria-hidden="true">
          <text className="et-axis-title" x={geometry.axisLeft} y="54">Institutional assessment</text>
          {STAGE_ORDER.map((stage) => {
            const y = geometry.yForStage(stage);
            return (
              <g key={stage}>
                <line x1={geometry.plotLeft} x2={geometry.todayX + 38} y1={y} y2={y} />
                <text className="et-stage-code" x={geometry.axisLeft} y={y + 4}>{stage}</text>
                <text className="et-stage-name" x={geometry.axisLeft + 50} y={y + 4}>{STAGE_LABELS[stage]}</text>
              </g>
            );
          })}
        </g>

        {trajectories.map((trajectory) => {
          const record = trajectory.record;
          const isSelected = selectedId === record.id;
          const isHovered = hoveredId === record.id;
          const isLensFocus = focusIds.has(record.id);
          const isContext = Boolean(selectedId || lensId !== "full") && !isLensFocus;
          const tone = getTone(trajectory.current.pressureState);
          const events = assignEventsToDocumentaryPhases(trajectory.history);
          const eventPoints = events.map((event) => ({
            ...event,
            x: calculateEventX({
              event,
              phaseCoordinates: geometry.phaseCoordinates,
              todayX: geometry.todayX,
              historyLength: trajectory.history.length,
            }),
            y: geometry.yForStage(event.assessment.verificationStage),
            trueY: geometry.yForStage(event.assessment.verificationStage),
          }));
          const path = eventPoints
            .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
            .join(" ");

          return (
            <g
              key={record.id}
              className={[
                "et-trajectory",
                `tone-${tone}`,
                isContext ? "is-context" : "",
                isLensFocus ? "is-lens-focus" : "",
                isHovered ? "is-hovered" : "",
                isSelected ? "is-selected" : "",
              ].join(" ")}
              onMouseEnter={() => onHover(record.id)}
              onMouseLeave={() => onHover(null)}
            >
              <path
                className="et-semantic-path"
                d={path}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`${record.id}: ${record.claim.shortLabel}. Documentary trajectory through ${trajectory.history.length} actual assessment${trajectory.history.length === 1 ? "" : "s"}. Press Enter to hold this trajectory for reading.`}
                onClick={() => onSelect(record.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelect(record.id);
                  }
                  if (event.key === "Escape") onSelect(null);
                }}
              />
              {eventPoints.map((point, index) => {
                const isCurrent = point.phaseId === "today";
                const previous = index > 0 ? eventPoints[index - 1] : null;
                const isTransition = !previous || previous.assessment.pressureState !== point.assessment.pressureState;
                return (
                  <circle
                    key={`${record.id}-${point.assessment.id}-${point.phaseId}`}
                    className={isCurrent ? "is-current-ring" : isTransition ? "is-transition" : "is-reaffirmation"}
                    cx={point.x}
                    cy={point.y}
                    r={isCurrent ? 4.2 : isLensFocus || isSelected || isHovered ? 4.8 : 3.6}
                    tabIndex={isLensFocus || isSelected ? 0 : -1}
                    role="button"
                    aria-label={`${record.id}, ${point.assessment.date}, true stage ${point.assessment.verificationStage}, ${formatState(point.assessment.pressureState)}.`}
                    onClick={(event) => {
                      event.stopPropagation();
                      onSelect(record.id);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelect(record.id);
                      }
                    }}
                  />
                );
              })}
            </g>
          );
        })}

        <g className="et-stage-register" aria-label="Current Register grouped by current verification stage">
          {geometry.stageRegister.groups.map((group, groupIndex) => {
            const bridgeY = group.groupTop + 14;
            return (
              <g key={group.stage} className="et-register-group">
                {groupIndex > 0 && (
                  <line
                    className="et-register-group-separator"
                    x1={geometry.registerColumns.stageX}
                    x2={geometry.registerColumns.rightX}
                    y1={group.groupTop - 6}
                    y2={group.groupTop - 6}
                    aria-hidden="true"
                  />
                )}
                <path
                  className="et-stage-register-bridge"
                  d={`M ${geometry.todayX + 10} ${group.trueY} H ${geometry.registerX - 24} V ${bridgeY} H ${geometry.registerX - 8}`}
                  aria-hidden="true"
                />
                <text className="et-register-stage-code" x={geometry.registerColumns.stageX} y={group.groupTop + 10}>{group.stage}</text>
                <text className="et-register-stage-name" x={geometry.registerColumns.ringX} y={group.groupTop + 10}>{STAGE_LABELS[group.stage]}</text>
                {group.rows.length === 0 && (
                  <text className="et-register-empty" x={geometry.registerColumns.idX} y={group.emptyLabelY + 3}>No current records</text>
                )}
                {group.rows.map((row) => {
                  const trajectory = trajectoryById.get(row.recordId);
                  const record = trajectory.record;
                  const tone = getTone(trajectory.current.pressureState);
                  const isSelected = selectedId === record.id;
                  const isHovered = hoveredId === record.id;
                  const isContext = Boolean(selectedId || lensId !== "full") && !focusIds.has(record.id);
                  return (
                    <g
                      key={record.id}
                      className={[
                        "et-register-row",
                        `tone-${tone}`,
                        isContext ? "is-context" : "",
                        isHovered ? "is-hovered" : "",
                        isSelected ? "is-selected" : "",
                      ].join(" ")}
                      tabIndex={0}
                      role="button"
                      aria-label={`${record.id}: ${record.claim.shortLabel}. Current assessment ${group.stage} ${STAGE_LABELS[group.stage]}.`}
                      onMouseEnter={() => onHover(record.id)}
                      onMouseLeave={() => onHover(null)}
                      onClick={() => onSelect(record.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          onSelect(record.id);
                        }
                      }}
                    >
                      <title>{record.claim.shortLabel}</title>
                      <circle className="et-register-row-ring" cx={geometry.registerColumns.ringX} cy={row.labelY} r="4.4" />
                      <text className="et-register-id" x={geometry.registerColumns.idX} y={row.labelY + 3}>{record.id}</text>
                      <text className="et-register-title" x={geometry.registerColumns.titleX} y={row.labelY + 3}>{shortRegisterTitle(record.claim.shortLabel, geometry.registerTitleLimit)}</text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </g>

        <g className="et-phase-footers" aria-hidden="true">
          {geometry.phaseCoordinates.map((phase, index) => {
            const summary = geometry.phaseSummaries.find((item) => item.phaseId === phase.id)?.summary;
            return (
              <g key={phase.id}>
                <text className="et-phase-range" x={phase.center} y={geometry.height - 46}>{summary}</text>
                <text className="et-phase-footer" x={phase.center} y={geometry.height - 30}>
                  {footerCaptionLines(phase.footer).map((line, lineIndex) => (
                    <tspan key={line} x={phase.center} dy={lineIndex === 0 ? 0 : 12}>{line}</tspan>
                  ))}
                </text>
                {index < DOCUMENTARY_PHASES.length - 1 && <text className="et-phase-arrow" x={phase.right} y={geometry.height - 36}>{"->"}</text>}
              </g>
            );
          })}
          <text className="et-phase-range" x={geometry.todayX} y={geometry.height - 46}>Today</text>
          <text className="et-phase-footer" x={geometry.todayX} y={geometry.height - 30}>
            {footerCaptionLines("Current institutional assessment").map((line, lineIndex) => (
              <tspan key={line} x={geometry.todayX} dy={lineIndex === 0 ? 0 : 12}>{line}</tspan>
            ))}
          </text>
          <text className="et-history-axis" x={(geometry.plotLeft + geometry.todayX) / 2} y={geometry.height - 8}>{"Evidence history ->"}</text>
        </g>
      </svg>
    </div>
  );
}
function TrajectoryRecordCard({ trajectory, isSelected, isLensFocus, onSelect }) {
  const { record, history, current, transitions } = trajectory;
  const programme = getProgramme(record);
  const stateChanges = transitions.length;

  return (
    <article
      id={`record-${record.id}`}
      className={[
        "et-record-card",
        isSelected ? "is-selected" : "",
        isLensFocus ? "is-lens-focus" : "",
      ].join(" ")}
    >
      <button
        type="button"
        className="et-record-select"
        onClick={() => onSelect(record.id)}
        aria-pressed={isSelected}
      >
        <span>{record.id}</span>
        <span>{record.claim.shortLabel}</span>
        <small>{record.claim.statement}</small>
        <em>
          {programme?.shortId ?? record.programme} · {history.length} assessments · {stateChanges} documented state change{stateChanges === 1 ? "" : "s"}
        </em>
      </button>
      <div className="et-card-current">
        <StateBadge pressureState={current.pressureState} />
        <span>since {current.date}</span>
        <details>
          <summary>Assessment history</summary>
          <ol className="et-history-list">
            {history.map((assessment) => (
              <li key={assessment.id}>
                <span>{assessment.date}</span>
                <span>{formatState(assessment.pressureState)}</span>
                <p>{assessment.summary}</p>
              </li>
            ))}
          </ol>
        </details>
      </div>
      <div className="et-card-links">
        <Link to={getRecordUrl(record)}>Read the complete Frontier Record</Link>
        <Link to={`/evidence-trajectories/?record=${record.id}`}>View this record in Evidence Trajectories</Link>
      </div>
    </article>
  );
}

export default function EvidenceTrajectories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedLens = searchParams.get("lens") ?? (searchParams.get("programme") || "full");
  const lensId = LENSES.some((lens) => lens.id === requestedLens) ? requestedLens : "full";
  const selectedId = searchParams.get("record");
  const [hoveredId, setHoveredId] = useState(null);

  const trajectories = useMemo(() => ALL_RECORDS.map(buildTrajectory), []);
  const selectedLens = LENSES.find((lens) => lens.id === lensId) ?? LENSES[0];

  function selectRecord(recordId) {
    const next = {};
    if (lensId !== "full") next.lens = lensId;
    if (recordId) next.record = recordId;
    setSearchParams(next, { replace: false });
    if (recordId) {
      window.setTimeout(() => {
        document.getElementById(`record-${recordId}`)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "nearest",
        });
      }, 0);
    }
  }

  return (
    <>
      <PageMeta
        title="Evidence Trajectories"
        description="Follow how the Observatory's judgement of technology claims has changed as evidence accumulated."
        path="/evidence-trajectories/"
      />
      <div className="evidence-trajectories-page">
        <header className="et-hero">
          <div className="et-hero-inner">
            <div className="et-eyebrow">The Frontier Record</div>
            <h1>Evidence Trajectories</h1>
            <p className="et-proposition">
              Follow how the Observatory's judgement of technology claims has changed as evidence accumulated.
            </p>
            <p className="et-instruction">
              Each line represents one Frontier Record. Select a reading to bring related trajectories forward; the full archive remains present.
            </p>
            <details className="et-how-to-read">
              <summary>How to read this page</summary>
              <ol>
                <li><b>Read across</b> - time moves from left to right.</li>
                <li><b>Read vertically</b> - position indicates the Observatory's assessment at that moment.</li>
                <li><b>Read the register</b> - the right column names the current assessment at Today.</li>
                <li><b>Open the record</b> - every trajectory can be traced back to its documentary history.</li>
              </ol>
            </details>
          </div>
        </header>

        <main className="et-main">
          <section className="et-reading-field" aria-label="Evidence Trajectories reading field">
            <EvidenceChart
              trajectories={trajectories}
              selectedId={selectedId}
              hoveredId={hoveredId}
              lensId={lensId}
              onSelect={selectRecord}
              onHover={setHoveredId}
            />
          </section>

          <p className="et-transition">
            The trajectories above are derived from the assessment histories below.
          </p>

          <section className="et-records" aria-labelledby="et-records-title">
            <div className="et-section-heading">
              <h2 id="et-records-title">Trajectory records</h2>
              <p>
                SHOWING THE FULL ARCHIVE · {selectedLens.label !== "Full archive" ? `${selectedLens.label} records are emphasised.` : "NO READING IS PRESELECTED."}
              </p>
            </div>
            <div className="et-record-list">
              {trajectories.map((trajectory) => (
                <TrajectoryRecordCard
                  key={trajectory.record.id}
                  trajectory={trajectory}
                  isSelected={selectedId === trajectory.record.id}
                  isLensFocus={selectedLens.matches(trajectory.record)}
                  onSelect={selectRecord}
                />
              ))}
            </div>
          </section>

          <section className="et-accessible" aria-labelledby="et-accessible-title">
            <h2 id="et-accessible-title">Chronological record of trajectories</h2>
            <p>
              A text-based equivalent of the visual reading above, preserving each record's assessment history without requiring the chart.
            </p>
            <details className="et-text-index">
              <summary>{"View the full chronological trajectory index ->"}</summary>
              <div>
                {trajectories.map(({ record, history }) => (
                  <details key={record.id}>
                    <summary>{record.id} - {record.claim.shortLabel}</summary>
                    <ol>
                      {history.map((assessment) => (
                        <li key={assessment.id}>
                          <span>{assessment.date}</span>{" "}
                          <strong>{formatState(assessment.pressureState)}</strong>{" "}
                          {assessment.summary}
                        </li>
                      ))}
                    </ol>
                    <Link to={getRecordUrl(record)}>Read complete Frontier Record</Link>
                  </details>
                ))}
              </div>
            </details>
          </section>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
