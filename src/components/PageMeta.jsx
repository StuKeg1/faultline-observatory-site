import { Helmet } from "react-helmet-async";

const SITE_NAME = "Faultline Observatory";
const BASE_URL  = "https://faultlinewatch.com";
const DEFAULT_DESC =
  "Custodian of The Frontier Record. A permanent public record of frontier claims " +
  "and how evidence changes their assessment over time.";

/**
 * PageMeta — sets <title>, <meta description>, and <link rel="canonical">
 * per route. Wrap every page with this component.
 *
 * Usage:
 *   <PageMeta
 *     title="Quantum Advantage — FR-QE-0001"
 *     description="..."
 *     path="/the-record/fr-qe-0001/"
 *   />
 */
export default function PageMeta({ title, description, path }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description || DEFAULT_DESC;
  const canonical = path ? `${BASE_URL}${path}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url"         content={canonical} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
