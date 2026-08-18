/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryBalanceCatalogue.test.ts" enhancement="_blank"/>

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
  "page": "inventoryBalanceCatalogue",
  "variant": "page11",
  "actor": "billingStaff",
  "cases": [
    {
      "id": "qryListInventoryBalance.ok",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "cmdCreateInventoryBalance.ok",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
      "params": {
        "inventoryItemId": "<seedRef>",
        "physicalQuantity": 1,
        "applicableUnitCost": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdCreateInventoryBalance.physicalQuantity.required",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
      "params": {
        "inventoryItemId": "<seedRef>",
        "applicableUnitCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateInventoryBalance.applicableUnitCost.required",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
      "params": {
        "inventoryItemId": "<seedRef>",
        "physicalQuantity": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateInventoryBalance.ok",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
      "params": {
        "inventoryBalanceId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "physicalQuantity": 1,
        "applicableUnitCost": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateInventoryBalance.physicalQuantity.required",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
      "params": {
        "inventoryBalanceId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "applicableUnitCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateInventoryBalance.applicableUnitCost.required",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
      "params": {
        "inventoryBalanceId": "<seedRef>",
        "inventoryItemId": "<seedRef>",
        "physicalQuantity": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdDeleteInventoryBalance.ok",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
      "params": {
        "inventoryBalanceId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "qryInventoryItemPicker.ok",
      "routine": "buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
