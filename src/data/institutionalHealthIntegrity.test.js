import test from "node:test";
import assert from "node:assert/strict";

import { ALL_RECORDS } from "./corpus.js";
import {
  getSilentMutationFindings,
  getOpenQuestionSilentClosureFindings,
} from "./metrics.js";

test("institutional health: no corpus-visible silent mutation findings", () => {
  assert.deepEqual(getSilentMutationFindings(ALL_RECORDS), []);
});

test("institutional health: no unexplained open-question silent closures", () => {
  assert.deepEqual(getOpenQuestionSilentClosureFindings(ALL_RECORDS), []);
});
