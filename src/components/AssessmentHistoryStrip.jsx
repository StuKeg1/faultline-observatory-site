import { getPressureStateLabel } from "../data/derive.js";
import { getCardAssessmentHistory } from "../data/cardAssessmentHistory.js";
import "./AssessmentHistoryStrip.css";

export default function AssessmentHistoryStrip({ record, compact = false }) {
  const history = getCardAssessmentHistory(record);
  const assessmentWord = history.assessmentCount === 1 ? "assessment" : "assessments";

  return (
    <span className={`assessment-history-strip${compact ? " assessment-history-strip--compact" : ""}`} aria-label={`Assessment history: ${history.assessmentCount} ${assessmentWord}, last assessed ${history.currentDate}`}>
      {!compact && <span className="ahs-label">Assessment history</span>}
      {history.assessmentCount === 1 ? (
        <span className="ahs-summary">1 assessment · since {history.currentDate}</span>
      ) : history.isReaffirmed ? (
        <span className="ahs-summary">{history.assessmentCount} assessments · {getPressureStateLabel(history.states[0].pressureState)} reaffirmed · last assessed {history.currentDate}</span>
      ) : (
        <>
          <span className="ahs-count">{history.assessmentCount} assessments</span>
          <span className="ahs-states">{history.states.map((state, index) => (
            <span key={`${state.pressureState}-${state.date}`}>
              {index > 0 && <span className="ahs-arrow" aria-hidden="true">→</span>}
              {getPressureStateLabel(state.pressureState)}
            </span>
          ))}</span>
          <span className="ahs-date">last assessed {history.currentDate}</span>
        </>
      )}
    </span>
  );
}
