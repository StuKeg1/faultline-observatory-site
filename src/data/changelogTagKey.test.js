import assert from "node:assert/strict";
import test from "node:test";

import { getChangelogTagKey } from "./changelogTagKey.js";
import { ALL_RECORDS } from "./corpus.js";
import { getInstitutionalChangelog } from "./derive.js";

test("Institutional Changelog key explains every live taxonomy class", () => {
  const rows = getInstitutionalChangelog(ALL_RECORDS);
  const classes = new Set(rows.map(({ taxonomyClass }) => taxonomyClass));

  for (const taxonomyClass of classes) {
    assert.ok(
      getChangelogTagKey(taxonomyClass),
      `Institutional Changelog key is missing ${taxonomyClass}`
    );
  }

  assert.match(
    getChangelogTagKey("UNKNOWN").description,
    /excluded from Latest Developments and flagged for review/i
  );
});
