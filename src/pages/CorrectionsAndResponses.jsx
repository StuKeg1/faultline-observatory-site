import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import "./DocumentationRequests.css";

const CONTACT = "mailto:hello@faultlinewatch.com?subject=Comments%2C%20questions%20or%20suggestions";

export default function CorrectionsAndResponses() {
  return (
    <>
      <PageMeta
        title="Contact the Observatory"
        description="Contact Faultline Observatory with questions, comments, suggestions, new evidence or requests for correction and response."
        path="/contact/"
      />
      <div className="documentation-requests-page">
        <header className="documentation-requests-header">
          <div className="documentation-requests-inner">
            <div className="documentation-requests-eyebrow">Faultline Observatory</div>
            <h1>Contact the Observatory</h1>
            <p>Questions, comments, suggestions and new evidence are welcome. You can also request a correction or submit a reasoned response concerning a Frontier Record.</p>
          </div>
        </header>

        <main className="documentation-requests-body">
          <div className="documentation-requests-inner">
            <section>
              <h2>Get in touch</h2>
              <p>Email <a href={CONTACT}>hello@faultlinewatch.com</a> with the subject <strong>Comments, questions or suggestions</strong>. For general enquiries, tell us what you would like to discuss. For a Frontier Record question or correction, where possible include the record ID or link, the relevant statement, your reason and links or citations to supporting evidence.</p>
            </section>
            <a className="documentation-request-action" href={CONTACT}>Email your comments, questions or suggestions</a>
            <section>
              <h2>Corrections and responses</h2>
              <p>Readers, researchers, organisations and people whose claims are discussed may submit corrections, new evidence or a reasoned response to a Frontier Record. The process below explains how those submissions are considered.</p>
            </section>
            <section>
              <h2>How submissions are reviewed</h2>
              <p>The Observatory distinguishes factual corrections, new evidence and disagreements with its interpretation. Submissions are reviewed against the available sources and the <Link to="/methodology/">Frontier Claim Intelligence Framework (FCIF)</Link>. Actionable requests may be acknowledged or returned for clarification; no fixed response time is promised.</p>
            </section>
            <section>
              <h2>Decisions and changes</h2>
              <p>The founder retains responsibility for substantive editorial decisions. A submission may be accepted, partly accepted, declined with reasons, or held pending further evidence. A disagreement or response does not itself require a change of Pressure State, Verification Stage or assessment. Where a change is warranted, the Observatory uses its governed assessment and correction mechanisms, preserving the record&apos;s history.</p>
            </section>
            <section>
              <h2>Responses and reconsideration</h2>
              <p>A person or organisation discussed in a Frontier Record may ask the Observatory to consider a reasoned response. Submission does not guarantee publication or editorial agreement. Relevant new evidence or a material factual or review error may justify reconsideration. The Observatory has no independent appeals panel.</p>
            </section>
            <section>
              <h2>Privacy and publication</h2>
              <p>Correspondence and submissions are not automatically made public. The Observatory may refer to evidence and decisions in the <Link to="/institutional-changelog/">public record</Link> when appropriate, but will not automatically publish personal contact details, private correspondence or unverified allegations. Any proposed public quotation or attribution is considered separately.</p>
            </section>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
