/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteInvoice.defs.ts" enhancement="_blank"/>

export const operationDeleteInvoice = {
  "operationId": "deleteInvoice",
  "title": "Excluir Fatura",
  "actors": [
    "billingStaff"
  ],
  "entity": "Invoice",
  "kind": "delete",
  "reads": [
    "Invoice"
  ],
  "writes": [
    "Invoice"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Fatura",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Fatura",
    "entity": "Invoice",
    "keyField": "Invoice.invoiceId",
    "pagination": "none",
    "selection": "none",
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
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "invoiceId",
      "fieldRef": "Invoice.invoiceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada."
    }
  ],
  "pageId": "invoiceCatalogue",
  "commandName": "cmdDeleteInvoice",
  "bffName": "cmdDeleteInvoice"
} as const;

export default operationDeleteInvoice;
