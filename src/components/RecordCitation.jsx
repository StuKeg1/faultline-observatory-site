import { useState } from "react";
import { currentAssessmentCitation, evidenceInstanceCitation, recordCitation } from "../data/recordCitation.js";
import "./RecordCitation.css";

/** Disclosure only: does not change record, assessment, source, or site metadata. */
export default function RecordCitation({ record, disclosureRef }) {
  const [kind, setKind] = useState("assessment");
  const [instanceId, setInstanceId] = useState(record.instances?.[0]?.id ?? "");
  const [status, setStatus] = useState("");
  const citation = kind === "record"
    ? recordCitation(record)
    : kind === "evidence"
      ? evidenceInstanceCitation(record, instanceId)
      : currentAssessmentCitation(record);

  async function copyCitation() {
    if (!citation) return;
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(citation);
      setStatus("Citation copied.");
    } catch {
      setStatus("Copy unavailable. Select and copy the citation text below.");
    }
  }

  return (
    <details ref={disclosureRef} className="record-citation">
      <summary>Cite this record</summary>
      <div className="record-citation-content">
        <label htmlFor="record-citation-type">Citation type</label>
        <select
          id="record-citation-type"
          value={kind}
          onChange={(event) => { setKind(event.target.value); setStatus(""); }}
        >
          <option value="record">Frontier Record</option>
          <option value="assessment">Current assessment</option>
          {record.instances?.length > 0 && <option value="evidence">Evidence instance</option>}
        </select>
        {kind === "evidence" && (
          <>
            <label htmlFor="record-citation-instance">Evidence entry</label>
            <select id="record-citation-instance" value={instanceId} onChange={(event) => { setInstanceId(event.target.value); setStatus(""); }}>
              {record.instances.map((instance) => <option key={instance.id} value={instance.id}>{instance.id} — {instance.qualifiedEvent ?? "Evidence entry"}</option>)}
            </select>
          </>
        )}
        <textarea
          className="record-citation-text"
          aria-label="Citation text"
          readOnly
          rows={4}
          value={citation ?? ""}
          onFocus={(event) => event.target.select()}
        />
        <button className="record-citation-copy" type="button" onClick={copyCitation} disabled={!citation}>Copy citation</button>
        <span className="record-citation-status" role="status" aria-live="polite">{status}</span>
        <p className="record-citation-note">
          This URL always opens the current living record, not a preserved copy of the cited mutation state. Use the Mutation Log to review subsequent changes; an M-ID identifies a logged change, not a retrievable historical snapshot. Assessment citations refer to the identified assessment, not the latest record update.
          {kind === "evidence" && " Cite the underlying research separately when relying on its results; the Observatory's interpretation is distinct."}
        </p>
      </div>
    </details>
  );
}
