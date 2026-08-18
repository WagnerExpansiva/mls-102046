/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const operationDeleteInvoiceChangeOrder = {
  "operationId": "deleteInvoiceChangeOrder",
  "title": "Excluir Aplicação de ordem de mudança na fatura",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "InvoiceChangeOrder",
  "kind": "delete",
  "reads": [
    "InvoiceChangeOrder"
  ],
  "writes": [
    "InvoiceChangeOrder"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Aplicação de ordem de mudança na fatura",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Aplicação de ordem de mudança na fatura",
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
    }
  ],
  "pageId": "invoiceChangeOrderCatalogue",
  "commandName": "cmdDeleteInvoiceChangeOrder",
  "bffName": "cmdDeleteInvoiceChangeOrder"
} as const;

export default operationDeleteInvoiceChangeOrder;
