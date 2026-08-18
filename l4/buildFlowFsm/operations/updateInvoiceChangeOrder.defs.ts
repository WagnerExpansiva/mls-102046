/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const operationUpdateInvoiceChangeOrder = {
  "operationId": "updateInvoiceChangeOrder",
  "title": "Atualizar Aplicação de ordem de mudança na fatura",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "InvoiceChangeOrder",
  "kind": "update",
  "reads": [
    "ChangeOrder",
    "Invoice",
    "InvoiceChangeOrder"
  ],
  "writes": [
    "InvoiceChangeOrder"
  ],
  "rulesApplied": [
    "invoiceIncludesApprovedChangeOrdersOnly"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Atualizar Aplicação de ordem de mudança na fatura",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Aplicação de ordem de mudança na fatura",
    "entity": "InvoiceChangeOrder",
    "keyField": "InvoiceChangeOrder.invoiceChangeOrderId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "InvoiceChangeOrder.invoiceChangeOrderId",
      "InvoiceChangeOrder.invoiceId",
      "InvoiceChangeOrder.changeOrderId",
      "InvoiceChangeOrder.billedAmount"
    ]
  },
  "outputShape": {
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "invoiceChangeOrderId",
      "fieldRef": "InvoiceChangeOrder.invoiceChangeOrderId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada."
    },
    {
      "inputId": "invoiceId",
      "fieldRef": "InvoiceChangeOrder.invoiceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança."
    },
    {
      "inputId": "changeOrderId",
      "fieldRef": "InvoiceChangeOrder.changeOrderId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura."
    },
    {
      "inputId": "billedAmount",
      "fieldRef": "InvoiceChangeOrder.billedAmount",
      "required": true,
      "source": "userInput",
      "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada."
    }
  ],
  "pageId": "invoiceChangeOrderCatalogue",
  "commandName": "cmdUpdateInvoiceChangeOrder",
  "bffName": "cmdUpdateInvoiceChangeOrder"
} as const;

export default operationUpdateInvoiceChangeOrder;
