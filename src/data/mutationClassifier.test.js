import test from "node:test";
import assert from "node:assert/strict";

import { getLatestDevelopments } from "./derive.js";
import {
  detectMutationType,
  qualifiesForHomepage,
} from "./mutationClassifier.js";

const mutation = {
  id: "M-006",
  date: "2026-08-22",
  field: "instance_added",
  from: null,
  to: "IN-008",
  reason: "New evidentiary instance admitted.",
};

const record = {
  id: "FR-AI-0009",
  title: "World Models / Physical AI",
  status: "open",
  assessments: [],
  mutationLog: [
    mutation,
    {
      id: "M-001",
      date: "2026-08-19",
      field: "record_created",
      from: null,
      to: "FR-AI-0009",
      reason: "Record admitted.",
    },
  ],
};

test("instance_added is a qualifying Class A development", () => {
  const mutationType = detectMutationType(mutation, record);
  assert.equal(mutationType, "instance_added");

  const qualification = qualifiesForHomepage(mutationType);
  assert.equal(qualification.qualifies, true);
  assert.equal(qualification.taxonomyClass, "A");
});

test("instance_added appears in Latest Developments", () => {
  const developments = getLatestDevelopments([record], 3);

  assert.equal(developments.length, 1);
  assert.equal(developments[0].record.id, "FR-AI-0009");
  assert.equal(developments[0].mutation.id, "M-006");
  assert.equal(developments[0].mutationType, "instance_added");
  assert.equal(developments[0].taxonomyClass, "A");
});
