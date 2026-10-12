import { useMemo } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS } from "../data/corpus.js";
import {
  CHANGELOG_TAG_KEY,
  getChangelogTagDescription,
} from "../data/changelogTagKey.js";
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
      title={getChangelogTagDescription(taxonomyClass, qualifies)}
    >
      {taxonomyClass}
