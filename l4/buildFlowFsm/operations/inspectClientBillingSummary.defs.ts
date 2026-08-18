/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectClientBillingSummary.defs.ts" enhancement="_blank"/>

export const operationInspectClientBillingSummary = {
  "operationId": "inspectClientBillingSummary",
  "title": "Consultar o resumo de faturamento",
  "actors": [
    "billingStaff"
  ],
  "entity": "ClientBillingSummary",
  "kind": "query",
  "reads": [
    "ChangeOrder",
    "Client",
    "ClientBillingSummary",
    "Invoice",
    "Project"
  ],
  "writes": [],
  "rulesApplied": [
    "invoiceIncludesApprovedChangeOrdersOnly"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Consultar o resumo de faturamento",
    "steps": [
      "Consultar o reflexo no faturamento",
      "O resumo apresenta alterações aprovadas, faturas e valores."
    ],
    "outcome": "O resumo apresenta alterações aprovadas, faturas e valores."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar o resumo de faturamento",
    "entity": "ClientBillingSummary",
    "keyField": "ClientBillingSummary.clientId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ClientBillingSummary.clientId",
      "ClientBillingSummary.projectId",
      "ClientBillingSummary.approvedChangeOrderReferences",
      "ClientBillingSummary.invoiceReferences",
      "ClientBillingSummary.approvedChangeOrderAmount",
      "ClientBillingSummary.billableAmount",
      "ClientBillingSummary.invoicedAmount",
      "ClientBillingSummary.clientAvailableAmount"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "ClientBillingSummary.clientId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "ClientBillingSummary.projectId"
      },
      {
        "name": "approvedChangeOrderReferences",
        "type": "string",
        "required": false,
        "fieldRef": "ClientBillingSummary.approvedChangeOrderReferences"
      },
      {
        "name": "invoiceReferences",
        "type": "string",
        "required": false,
        "fieldRef": "ClientBillingSummary.invoiceReferences"
      },
      {
        "name": "approvedChangeOrderAmount",
        "type": "number",
        "required": true,
        "fieldRef": "ClientBillingSummary.approvedChangeOrderAmount"
      },
      {
        "name": "billableAmount",
        "type": "number",
        "required": true,
        "fieldRef": "ClientBillingSummary.billableAmount"
      },
      {
        "name": "invoicedAmount",
        "type": "number",
        "required": true,
        "fieldRef": "ClientBillingSummary.invoicedAmount"
      },
      {
        "name": "clientAvailableAmount",
        "type": "number",
        "required": true,
        "fieldRef": "ClientBillingSummary.clientAvailableAmount"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "clientBillingSummaryClientId",
      "fieldRef": "ClientBillingSummary.clientId",
      "required": true,
      "source": "selectedEntity",
      "description": "Resumo de faturamento do cliente"
    }
  ],
  "pageId": "clientBillingSummaryView",
  "commandName": "qryClientBillingSummaryView",
  "bffName": "qryClientBillingSummaryView"
} as const;

export default operationInspectClientBillingSummary;
