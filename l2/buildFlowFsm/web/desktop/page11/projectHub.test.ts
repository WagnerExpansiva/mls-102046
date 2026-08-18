/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectHub.test.ts" enhancement="_blank"/>

// GENERATED — declarative BFF test cases run server-side by the monitor Tests runner (wherever
// TESTS_ENABLED is on).
// Data, not a runnable test module: no node:test import, so scripts/run-tests.mjs never captures it.
// Params valued "<seedRef>" are ENTITY IDS this page itself reads: the runner resolves them at
// run time from the harvested output of this page's read queries (including the rows of any array in
// the envelope). Every other param is a deterministic literal valid for its declared l4 type, because
// a "<seedRef>" on a domain field is unsolvable and the command would die in VALIDATION_ERROR
// before testing anything. expect.itemsKey names the collection the wire returns for a paginated
// query (the runner assumes "items" when it is absent). "actor" is this page's l4 actor: the run
// executes these cases as the seeded platform identity of that actor, so a route that reads the
// actor id from the session is runnable headless.
export const pageTests = {
  "moduleName": "buildFlowFsm",
  "page": "projectHub",
  "variant": "page11",
  "actor": "billingStaff",
  "cases": [
    {
      "id": "qryListProject.ok",
      "routine": "buildFlowFsm.projectHub.qryListProject",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryProjectDashboardView.ok",
      "routine": "buildFlowFsm.projectHub.qryProjectDashboardView",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "object"
      }
    },
    {
      "id": "qryListChangeOrder.ok",
      "routine": "buildFlowFsm.projectHub.qryListChangeOrder",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryListInvoice.ok",
      "routine": "buildFlowFsm.projectHub.qryListInvoice",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryListMaterialUsage.ok",
      "routine": "buildFlowFsm.projectHub.qryListMaterialUsage",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryListProjectCoordinationAssignment.ok",
      "routine": "buildFlowFsm.projectHub.qryListProjectCoordinationAssignment",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryListStatusReport.ok",
      "routine": "buildFlowFsm.projectHub.qryListStatusReport",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryListWorkTask.ok",
      "routine": "buildFlowFsm.projectHub.qryListWorkTask",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
