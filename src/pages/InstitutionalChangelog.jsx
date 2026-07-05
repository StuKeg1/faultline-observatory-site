import { useMemo } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS } from "../data/corpus.js";
import { getInstitutionalChangelog, getRecordUrl } from "../data/derive.js";
import "./InstitutionalChangelog.css";

// ─── INSTITUTIONAL CHANGELOG ─────────────────────────────────
//
// Governance basis: Activity Taxonomy & Qualification Policy v0.3
// (Piloted, operational). Drive: institution/ —
// 1vhlnJYz5UBkOngaxs8nKLo_qJJNRJP1FAniXMuvFO4g
//
// This page is the complete audit trail: every mutation across the
// corpus, unfiltered, chronological. Nothing here is excluded, hidden,
// or summarised away. It exists specifically so that "Latest
// Developments" on the homepage can filter without that filtering
// becoming a suppression — every entry excluded from the homepage feed
// is still fully visible here, tagged with why.
//
// This is a derived view over the same mutationLog[] the homepage reads
// — not a second data store, per Policy §5 / the Canonical Reality
// Principle (CP-004).

function TaxonomyTag({ qualifies, taxonomyClass }) {
  return (
    <span
      className={`ichl-tag ${qualifies ? "ichl-tag--qualifies" : "ichl-tag--excluded"}`}
      title={qualifies ? "Appears in Latest Developments" : "Changelog only"}
    >
      {taxonomyClass}
    </span>
  );
}

export default function InstitutionalChangelog() {
  const entries = useMemo(() => getInstitutionalChangelog(ALL_RECORDS), []);

  const qualifyingCount = entries.filter((e) => e.qualifies).length;

  return (
    <>
      <PageMeta
        title="Institutional Changelog"
        description="The complete, unfiltered mutation history of every Frontier Record in the corpus — the Observatory's full operational audit trail."
        path="/institutional-changelog/"
      />
      <div className="ichl-page">
        <header className="ichl-header">
          <div className="ichl-header-inner">
            <div className="ichl-eyebrow">Faultline Observatory</div>
            <h1 className="ichl-title">Institutional Changelog</h1>
            <p className="ichl-intro">
              Every mutation to every Frontier Record, in full, chronological order.
              Nothing here is deleted, hidden, or summarised away — this is the
              complete operational history the Observatory's append-only obligation
              requires it to keep.
            </p>
            <p className="ichl-intro">
              The homepage shows a filtered subset,{" "}
              <Link to="/">Latest Developments</Link>, governed by the{" "}
              Activity Taxonomy &amp; Qualification Policy. Filtering there is a
              routing decision, not a suppression one: every entry excluded from
              that feed is still here, in full, tagged below.
            </p>
            <div className="ichl-stats">
              <span>
                <strong>{entries.length}</strong> total mutations
              </span>
              <span className="ichl-stats-sep">·</span>
              <span>
                <strong>{qualifyingCount}</strong> appear in Latest Developments
              </span>
              <span className="ichl-stats-sep">·</span>
              <span>
                <strong>{entries.length - qualifyingCount}</strong> changelog-only
              </span>
            </div>
          </div>
        </header>

        <main className="ichl-body">
          <div className="ichl-body-inner">
            <div className="ichl-list" role="feed" aria-label="Institutional Changelog">
              {entries.map(({ record, mutation, mutationType, qualifies, taxonomyClass }) => (
                <div key={`${record.id}-${mutation.id}`} className="ichl-row">
                  <span className="ichl-date">{mutation.date}</span>
                  <Link to={getRecordUrl(record)} className="ichl-record-id">
                    {record.id}
                  </Link>
                  <span className="ichl-note">{mutation.note}</span>
                  <span className="ichl-field" title="Raw mutationLog field name">
                    {mutation.field}
                  </span>
                  <TaxonomyTag qualifies={qualifies} taxonomyClass={taxonomyClass} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
