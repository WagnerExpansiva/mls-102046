/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const operationListInvoiceChangeOrder = {
  "operationId": "listInvoiceChangeOrder",
  "title": "Listar Aplicação de ordem de mudança na fatura",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "InvoiceChangeOrder",
  "kind": "query",
  "reads": [
    "InvoiceChangeOrder"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Aplicação de ordem de mudança na fatura",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Aplicação de ordem de mudança na fatura",
    "entity": "InvoiceChangeOrder",
    "keyField": "InvoiceChangeOrder.invoiceChangeOrderId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "InvoiceChangeOrder.invoiceChangeOrderId",
      "InvoiceChangeOrder.invoiceId",
      "InvoiceChangeOrder.changeOrderId",
      "InvoiceChangeOrder.billedAmount"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "invoiceChangeOrderId",
        "type": "string",
        "required": true,
        "fieldRef": "InvoiceChangeOrder.invoiceChangeOrderId"
      },
      {
        "name": "invoiceId",
        "type": "string",
        "required": true,
        "fieldRef": "InvoiceChangeOrder.invoiceId"
      },
      {
        "name": "changeOrderId",
        "type": "string",
        "required": true,
        "fieldRef": "InvoiceChangeOrder.changeOrderId"
      },
      {
        "name": "billedAmount",
        "type": "number",
        "required": true,
        "fieldRef": "InvoiceChangeOrder.billedAmount"
      }
    ]
  },
  "inputs": [],
  "pageId": "invoiceChangeOrderCatalogue",
  "commandName": "qryListInvoiceChangeOrder",
  "bffName": "qryListInvoiceChangeOrder"
} as const;

export default operationListInvoiceChangeOrder;
