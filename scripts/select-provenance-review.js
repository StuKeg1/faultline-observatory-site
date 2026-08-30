import { ALL_RECORDS } from "../src/data/corpus.js";
import { getNextProvenanceReviewRecord } from "../src/data/provenanceReviewQueue.js";

const next = getNextProvenanceReviewRecord(ALL_RECORDS);

if (!next) {
  console.error("No Frontier Records are available for provenance review.");
  process.exit(1);
}

console.log(`${next.id}\t${next.lastProvenanceReview ?? "never reviewed"}`);
