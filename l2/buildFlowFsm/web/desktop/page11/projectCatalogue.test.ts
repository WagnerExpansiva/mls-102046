/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectCatalogue.test.ts" enhancement="_blank"/>

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
  "page": "projectCatalogue",
  "variant": "page11",
  "actor": "billingStaff",
  "cases": [
    {
      "id": "qryListProject.ok",
      "routine": "buildFlowFsm.projectCatalogue.qryListProject",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "cmdCreateProject.ok",
      "routine": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "params": {
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdCreateProject.clientId.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "params": {
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateProject.name.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "params": {
        "clientId": "<seedRef>",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateProject.address.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "params": {
        "clientId": "<seedRef>",
        "name": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateProject.authorizedBudget.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "params": {
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateProject.plannedStartDate.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "params": {
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateProject.plannedEndDate.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "params": {
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateProject.ok",
      "routine": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "params": {
        "projectId": "<seedRef>",
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateProject.clientId.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "params": {
        "projectId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateProject.name.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "params": {
        "projectId": "<seedRef>",
        "clientId": "<seedRef>",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateProject.address.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "params": {
        "projectId": "<seedRef>",
        "clientId": "<seedRef>",
        "name": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateProject.authorizedBudget.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "params": {
        "projectId": "<seedRef>",
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "plannedStartDate": "2026-01-01",
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateProject.plannedStartDate.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "params": {
        "projectId": "<seedRef>",
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedEndDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateProject.plannedEndDate.required",
      "routine": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "params": {
        "projectId": "<seedRef>",
        "clientId": "<seedRef>",
        "name": "teste",
        "address": "teste",
        "authorizedBudget": 1,
        "plannedStartDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdDeleteProject.ok",
      "routine": "buildFlowFsm.projectCatalogue.cmdDeleteProject",
      "params": {
        "projectId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "qryClientPicker.ok",
      "routine": "buildFlowFsm.projectCatalogue.qryClientPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
