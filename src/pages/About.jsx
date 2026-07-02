import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import "./Institutional.css";

function InstitutionalPage({ eyebrow, title, children }) {
 return (
 <>
 <div className="inst-page">
 <header className="inst-header">
 <div className="inst-header-inner">
 {eyebrow && <div className="inst-eyebrow">{eyebrow}</div>}
 <h1 className="inst-title">{title}</h1>
 </div>
 </header>
 <main className="inst-body">
 <div className="inst-body-inner">
 {children}
 </div>
 </main>
 </div>
 <SiteFooter />
 </>
 );
}

const ABOUT_BLOCKS = [
 {
 heading: "Mission",
 body: "Custodian of The Frontier Record. The Observatory maintains a permanent public record of frontier claims and how evidence changes their assessment over time.",
 },
 {
 heading: "Purpose",
 body: "Frontier claims — in science, engineering, and technology — routinely outrun their evidence. They are announced, celebrated, contested, and sometimes quietly abandoned. The Observatory exists to hold the record of that process in full. It tracks scientific and technology claims from announcement through replication, audit, and operational evidence.",
 },
 {
 heading: "Origins",
 body: "The Faultline Observatory did not begin as an institution. It began as a series of conversations about scientific and technological claims, an attempt to understand how evidence changes over time, and a search for a record that did not seem to exist. As the project evolved, those conversations gradually became a methodology, a public record, and eventually an institution. The full account has been preserved as part of the Observatory's institutional history.",
 link: {
 to: "/about/origins",
 label: "Before the Observatory Had a Name →",
 },
 },
 {
 heading: "The Record",
 body: "The Frontier Record is not a database of outcomes. It is a record of trajectories — how claims were stated, what evidence tested them, and how the evidentiary position evolved. Records are never closed by editorial judgement. They close only when the observable facts warrant closure. Each record is citable, permanent, and append-only.",
 },
 {
 heading: "FCIF",
 body: "Observation is governed by the Frontier Claim Intelligence Framework. FCIF defines how claims are identified, how instances are qualified, how assessments are formed, and how pressure states are assigned. The methodology is public and append-only.",
 },
 {
 heading: "Institutional Principle",
 body: "Observation Before Interpretation. The Observatory records what is observable before forming interpretive positions. This is not a statement of neutrality — it is a statement of sequence.",
 },
 {
 heading: "Who the Record Serves",
 body: "The Frontier Record is maintained for those with an interest in how frontier claims evolve through time rather than how they are announced. Researchers, journalists, investors, policy analysts, historians of technology, and technically literate observers may find it useful as a permanent, structured archive of claim and evidence trajectories. The Observatory does not address general news readers or those seeking current product or technology information — other institutions serve that purpose better.",
 },
];

export default function About() {
 return (
 <InstitutionalPage eyebrow="Faultline Observatory" title="About the Observatory">
 <PageMeta
 title="About the Observatory"
 description="Faultline Observatory is a public scientific observatory and publication of record. It maintains a permanent archive of frontier claims in science and technology, tracking how evidence changes their assessment over time."
 path="/about/"
 />
 <div className="inst-about-sections">
 {ABOUT_BLOCKS.map(({ heading, body, link }) => (
 <div key={heading} className="inst-about-block">
 <div className="inst-about-heading">{heading}</div>
 <p className="inst-about-body">{body}</p>
 {link && (
 <p className="inst-about-body" style={{ marginTop: "0.75rem" }}>
 <Link to={link.to} style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent-dim)" }}>
 {link.label}
 </Link>
 </p>
 )}
 </div>
 ))}
 </div>
 </InstitutionalPage>
 );
}
