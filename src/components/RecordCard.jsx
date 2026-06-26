import { Link } from "react-router-dom";
import StateBadge from "./StateBadge.jsx";
import { getCurrentAssessment, getRecordUrl } from "../data/derive.js";
import "./RecordCard.css";

export default function RecordCard({ record }) {
  const current = getCurrentAssessment(record);
  const url = getRecordUrl(record);

  return (
    <Link to={url} className="record-card" aria-label={`${record.id}: ${record.claim.shortLabel}`}>
      <div className="rc-header">
        <span className="rc-id">{record.id}</span>
        <StateBadge pressureState={current.pressureState} />
      </div>
      <div className="rc-title">{record.claim.shortLabel}</div>
      <div className="rc-claim">{record.claim.statement}</div>
      <div className="rc-meta">
        <span className="rc-programme">{record.programme}</span>
        <span className="rc-date">Opened {record.claim.openedDate}</span>
        <span className="rc-assessments">
          {record.assessments.length} assessment{record.assessments.length !== 1 ? "s" : ""}
        </span>
      </div>
    </Link>
  );
}
