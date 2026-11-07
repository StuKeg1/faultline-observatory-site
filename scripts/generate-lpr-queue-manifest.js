import fs from "node:fs";
import { ALL_RECORDS } from "../src/data/corpus.js";
import { getNextProvenanceReviewRecord, sortProvenanceReviewQueue } from "../src/data/provenanceReviewQueue.js";

const path = new URL("../data/lpr-queue-manifest.json", import.meta.url);
const records = sortProvenanceReviewQueue(ALL_RECORDS).map(({ id, lastProvenanceReview }) => ({ id, lastProvenanceReview: lastProvenanceReview ?? null }));
const manifest = {
  schemaVersion: 1,
  source: "src/data/corpus.js",
  selectionRule: "never-reviewed, oldest lastProvenanceReview, Record ID",
  nextRecordId: getNextProvenanceReviewRecord(ALL_RECORDS)?.id ?? null,
  records,
};
const expected = JSON.stringify(manifest, null, 2) + "\n";
if (process.argv.includes("--check")) {
  const actual = fs.readFileSync(path, "utf8");
  if (actual !== expected) {
    console.error("LPR queue manifest stale: run node scripts/generate-lpr-queue-manifest.js and commit the result with the record update.");
    process.exit(1);
  }
  console.log("LPR queue manifest verified:", manifest.nextRecordId);
} else {
  fs.writeFileSync(path, expected);
  console.log("LPR queue manifest updated:", manifest.nextRecordId);
}
