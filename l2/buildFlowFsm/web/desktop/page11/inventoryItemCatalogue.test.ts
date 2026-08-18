/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryItemCatalogue.test.ts" enhancement="_blank"/>

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
  "page": "inventoryItemCatalogue",
  "variant": "page11",
  "actor": "fieldWorker",
  "cases": [
    {
      "id": "qryListInventoryItem.ok",
      "routine": "buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "cmdCreateInventoryItem.ok",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
      "params": {
        "name": "teste",
        "unitOfMeasure": "teste",
        "referenceUnitCost": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdCreateInventoryItem.name.required",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
      "params": {
        "unitOfMeasure": "teste",
        "referenceUnitCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateInventoryItem.unitOfMeasure.required",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
      "params": {
        "name": "teste",
        "referenceUnitCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateInventoryItem.referenceUnitCost.required",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
      "params": {
        "name": "teste",
        "unitOfMeasure": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateInventoryItem.ok",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "params": {
        "inventoryItemId": "<seedRef>",
        "name": "teste",
        "unitOfMeasure": "teste",
        "referenceUnitCost": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateInventoryItem.name.required",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "params": {
        "inventoryItemId": "<seedRef>",
        "unitOfMeasure": "teste",
        "referenceUnitCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateInventoryItem.unitOfMeasure.required",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "params": {
        "inventoryItemId": "<seedRef>",
        "name": "teste",
        "referenceUnitCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateInventoryItem.referenceUnitCost.required",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "params": {
        "inventoryItemId": "<seedRef>",
        "name": "teste",
        "unitOfMeasure": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdDeleteInventoryItem.ok",
      "routine": "buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem",
      "params": {
        "inventoryItemId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    }
  ]
} as const;
