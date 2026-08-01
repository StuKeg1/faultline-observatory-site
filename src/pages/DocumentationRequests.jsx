import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import "./DocumentationRequests.css";

const REQUEST_EMAIL = "mailto:hello@faultlinewatch.com?subject=Documentation%20request";

export default function DocumentationRequests() {
  return (
    <>
      <PageMeta
        title="Documentation requests"
        description="How to request an inspection copy of underlying Faultline Observatory review or ratification documentation."
        path="/documentation-requests/"
      />
      <div className="documentation-requests-page">
        <header className="documentation-requests-header">
          <div className="documentation-requests-inner">
            <div className="documentation-requests-eyebrow">Faultline Observatory</div>
            <h1>Documentation requests</h1>
            <p>
              The Observatory occasionally refers to underlying review or ratification documentation that is not published on this website. You may request an inspection copy by email.
            </p>
          </div>
        </header>

        <main className="documentation-requests-body">
          <div className="documentation-requests-inner">
            <section>
              <h2>What to include</h2>
              <p>
                Please include the Frontier Record ID and, where possible, the assessment date, assessment ID or provenance statement. If you do not know those details, describe the material you are trying to inspect.
              </p>
            </section>

            <a className="documentation-request-action" href={REQUEST_EMAIL}>
              Email a documentation request
            </a>

            <section>
              <h2>What happens next</h2>
              <p>
                Requests are handled manually. The Observatory will acknowledge an actionable request and will either supply an approved copy, ask for clarification, explain that the material is unavailable, or explain any withholding or redaction. No fixed response time is promised.
              </p>
            </section>

            <section>
              <h2>Availability boundary</h2>
              <p>
                Approved disclosure copies are normally supplied as read-only PDFs. The canonical internal document remains authoritative. A request does not provide editable access, comments, version history or unrestricted access to internal working material.
              </p>
            </section>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
