/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/materialUsageCatalogue.test.ts" enhancement="_blank"/>

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
  "page": "materialUsageCatalogue",
  "variant": "page11",
  "actor": "fieldCoordinator",
  "cases": [
    {
      "id": "qryListMaterialUsage.ok",
      "routine": "buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "cmdUpdateMaterialUsage.ok",
      "routine": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>",
        "projectId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "inventoryBalanceId": "<seedRef>",
        "quantity": 1,
        "usageDescription": "teste",
        "consumedOn": "teste",
        "unitCostBasis": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateMaterialUsage.quantity.required",
      "routine": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>",
        "projectId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "inventoryBalanceId": "<seedRef>",
        "usageDescription": "teste",
        "consumedOn": "teste",
        "unitCostBasis": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateMaterialUsage.usageDescription.required",
      "routine": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>",
        "projectId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "inventoryBalanceId": "<seedRef>",
        "quantity": 1,
        "consumedOn": "teste",
        "unitCostBasis": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateMaterialUsage.consumedOn.required",
      "routine": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>",
        "projectId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "inventoryBalanceId": "<seedRef>",
        "quantity": 1,
        "usageDescription": "teste",
        "unitCostBasis": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateMaterialUsage.unitCostBasis.required",
      "routine": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>",
        "projectId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "inventoryBalanceId": "<seedRef>",
        "quantity": 1,
        "usageDescription": "teste",
        "consumedOn": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdDeleteMaterialUsage.ok",
      "routine": "buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "qryInventoryBalancePicker.ok",
      "routine": "buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryInventoryItemPicker.ok",
      "routine": "buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryProjectPicker.ok",
      "routine": "buildFlowFsm.materialUsageCatalogue.qryProjectPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
