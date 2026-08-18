/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderCatalogue.test.ts" enhancement="_blank"/>

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
  "page": "changeOrderCatalogue",
  "variant": "page11",
  "actor": "client",
  "cases": [
    {
      "id": "qryListChangeOrder.ok",
      "routine": "buildFlowFsm.changeOrderCatalogue.qryListChangeOrder",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "cmdUpdateChangeOrder.ok",
      "routine": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "clientRef": "teste",
        "projectRef": "teste",
        "description": "teste",
        "scopeImpact": "teste",
        "scheduleImpact": "teste",
        "changeAmount": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateChangeOrder.description.required",
      "routine": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "clientRef": "teste",
        "projectRef": "teste",
        "scopeImpact": "teste",
        "scheduleImpact": "teste",
        "changeAmount": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrder.scopeImpact.required",
      "routine": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "clientRef": "teste",
        "projectRef": "teste",
        "description": "teste",
        "scheduleImpact": "teste",
        "changeAmount": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrder.scheduleImpact.required",
      "routine": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "clientRef": "teste",
        "projectRef": "teste",
        "description": "teste",
        "scopeImpact": "teste",
        "changeAmount": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrder.changeAmount.required",
      "routine": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "clientRef": "teste",
        "projectRef": "teste",
        "description": "teste",
        "scopeImpact": "teste",
        "scheduleImpact": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdDeleteChangeOrder.ok",
      "routine": "buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "qryClientPicker.ok",
      "routine": "buildFlowFsm.changeOrderCatalogue.qryClientPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryProjectPicker.ok",
      "routine": "buildFlowFsm.changeOrderCatalogue.qryProjectPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
