/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createInvoice.defs.ts" enhancement="_blank"/>

export const operationCreateInvoice = {
  "operationId": "createInvoice",
  "title": "Emitir a fatura",
  "actors": [
    "billingStaff"
  ],
  "entity": "Invoice",
  "kind": "commandInput",
  "reads": [
    "ChangeOrder",
    "Client",
    "Invoice",
    "InvoiceChangeOrder",
    "Project"
  ],
  "writes": [
    "Invoice"
  ],
  "rulesApplied": [
    "invoiceIncludesApprovedChangeOrdersOnly",
    "invoiceRequiresClientAndProject"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Emitir a fatura",
    "steps": [
      "Emitir a fatura",
      "Uma fatura vinculada ao cliente e à obra fica registrada."
    ],
    "outcome": "Uma fatura vinculada ao cliente e à obra fica registrada."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Emitir a fatura",
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
      "inputId": "clientClientId",
      "fieldRef": "Client.clientId",
      "required": true,
      "source": "selectedEntity",
      "description": "Cliente"
    },
    {
      "inputId": "projectProjectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Obra"
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
  "pageId": "invoiceCatalogue",
  "commandName": "cmdCreateInvoice",
  "bffName": "cmdCreateInvoice"
} as const;

export default operationCreateInvoice;
