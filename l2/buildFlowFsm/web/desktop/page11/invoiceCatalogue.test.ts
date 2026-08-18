/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/invoiceCatalogue.test.ts" enhancement="_blank"/>

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
  "page": "invoiceCatalogue",
  "variant": "page11",
  "actor": "billingStaff",
  "cases": [
    {
      "id": "qryListInvoice.ok",
      "routine": "buildFlowFsm.invoiceCatalogue.qryListInvoice",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "cmdUpdateInvoice.ok",
      "routine": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
      "params": {
        "invoiceId": "<seedRef>",
        "clientId": "<seedRef>",
        "projectId": "<seedRef>",
        "commercialReference": "teste",
        "amount": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateInvoice.commercialReference.required",
      "routine": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
      "params": {
        "invoiceId": "<seedRef>",
        "clientId": "<seedRef>",
        "projectId": "<seedRef>",
        "amount": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateInvoice.amount.required",
      "routine": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
      "params": {
        "invoiceId": "<seedRef>",
        "clientId": "<seedRef>",
        "projectId": "<seedRef>",
        "commercialReference": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdDeleteInvoice.ok",
      "routine": "buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice",
      "params": {
        "invoiceId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "qryClientPicker.ok",
      "routine": "buildFlowFsm.invoiceCatalogue.qryClientPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "qryProjectPicker.ok",
      "routine": "buildFlowFsm.invoiceCatalogue.qryProjectPicker",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
