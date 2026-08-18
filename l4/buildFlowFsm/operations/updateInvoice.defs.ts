/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateInvoice.defs.ts" enhancement="_blank"/>

export const operationUpdateInvoice = {
  "operationId": "updateInvoice",
  "title": "Atualizar Fatura",
  "actors": [
    "billingStaff"
  ],
  "entity": "Invoice",
  "kind": "update",
  "reads": [
    "Client",
    "Invoice",
    "Project"
  ],
  "writes": [
    "Invoice"
  ],
  "rulesApplied": [
    "invoiceRequiresClientAndProject",
    "invoiceIncludesApprovedChangeOrdersOnly",
    "clientVisibleInvoice"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Atualizar Fatura",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Fatura",
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
    },
    {
      "inputId": "clientId",
      "fieldRef": "Invoice.clientId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto ao cliente para o qual a fatura é emitida."
    },
    {
      "inputId": "projectId",
      "fieldRef": "Invoice.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto à obra faturável à qual a fatura está vinculada."
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
    },
    {
      "inputId": "status",
      "fieldRef": "Invoice.status",
      "required": true,
      "source": "systemDefault",
      "description": "Situação da fatura, incluindo sua disponibilidade para consulta externa pelo cliente."
    }
  ],
  "pageId": "invoiceCatalogue",
  "commandName": "cmdUpdateInvoice",
  "bffName": "cmdUpdateInvoice"
} as const;

export default operationUpdateInvoice;
