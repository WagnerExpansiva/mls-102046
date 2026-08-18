/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listInvoice.defs.ts" enhancement="_blank"/>

export const operationListInvoice = {
  "operationId": "listInvoice",
  "title": "Listar Fatura",
  "actors": [
    "billingStaff"
  ],
  "entity": "Invoice",
  "kind": "query",
  "reads": [
    "Invoice"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Fatura",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Fatura",
    "entity": "Invoice",
    "keyField": "Invoice.invoiceId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Invoice.invoiceId",
      "Invoice.clientId",
      "Invoice.projectId",
      "Invoice.commercialReference",
      "Invoice.amount",
      "Invoice.status"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "invoiceId",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.invoiceId"
      },
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.clientId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.projectId"
      },
      {
        "name": "commercialReference",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.commercialReference"
      },
      {
        "name": "amount",
        "type": "number",
        "required": true,
        "fieldRef": "Invoice.amount"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.status"
      }
    ]
  },
  "inputs": [],
  "pageId": "invoiceCatalogue",
  "commandName": "qryListInvoice",
  "bffName": "qryListInvoice"
} as const;

export default operationListInvoice;
