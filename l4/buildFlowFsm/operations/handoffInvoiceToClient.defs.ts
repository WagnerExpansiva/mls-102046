/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/handoffInvoiceToClient.defs.ts" enhancement="_blank"/>

export const operationHandoffInvoiceToClient = {
  "operationId": "handoffInvoiceToClient",
  "title": "Disponibilizar a fatura ao cliente",
  "actors": [
    "billingStaff"
  ],
  "entity": "Invoice",
  "kind": "commandInput",
  "reads": [
    "Invoice"
  ],
  "writes": [
    "Invoice"
  ],
  "rulesApplied": [
    "clientVisibleInvoice"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Disponibilizar a fatura ao cliente",
    "steps": [
      "Disponibilizar a fatura ao cliente",
      "O cliente recebe a fatura para consulta."
    ],
    "outcome": "O cliente recebe a fatura para consulta."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Disponibilizar a fatura ao cliente",
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
      "inputId": "invoiceInvoiceId",
      "fieldRef": "Invoice.invoiceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Fatura"
    },
    {
      "inputId": "commercialReference",
      "fieldRef": "Invoice.commercialReference",
      "required": true,
      "source": "userInput",
      "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente."
    },
    {
      "inputId": "amount",
      "fieldRef": "Invoice.amount",
      "required": true,
      "source": "userInput",
      "description": "Valor comercial total faturado para a obra."
    }
  ],
  "pageId": "issueProjectInvoice",
  "commandName": "cmdHandoffInvoiceToClient",
  "bffName": "cmdHandoffInvoiceToClient"
} as const;

export default operationHandoffInvoiceToClient;
