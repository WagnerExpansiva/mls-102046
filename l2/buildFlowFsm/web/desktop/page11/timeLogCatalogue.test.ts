/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/timeLogCatalogue.test.ts" enhancement="_blank"/>

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
  "page": "timeLogCatalogue",
  "variant": "page11",
  "actor": "fieldCoordinator",
  "cases": [
    {
      "id": "qryListTimeLog.ok",
      "routine": "buildFlowFsm.timeLogCatalogue.qryListTimeLog",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "cmdUpdateTimeLog.ok",
      "routine": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
      "params": {
        "timeLogId": "<seedRef>",
        "workTaskId": "<seedRef>",
        "workDate": "2026-01-01",
        "hoursWorked": 1,
        "hourlyLaborCost": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateTimeLog.workDate.required",
      "routine": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
      "params": {
        "timeLogId": "<seedRef>",
        "workTaskId": "<seedRef>",
        "hoursWorked": 1,
        "hourlyLaborCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateTimeLog.hoursWorked.required",
      "routine": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
      "params": {
        "timeLogId": "<seedRef>",
        "workTaskId": "<seedRef>",
        "workDate": "2026-01-01",
        "hourlyLaborCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateTimeLog.hourlyLaborCost.required",
      "routine": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
      "params": {
        "timeLogId": "<seedRef>",
        "workTaskId": "<seedRef>",
        "workDate": "2026-01-01",
        "hoursWorked": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdDeleteTimeLog.ok",
      "routine": "buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog",
      "params": {
        "timeLogId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "qryWorkTaskPicker.ok",
      "routine": "buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
