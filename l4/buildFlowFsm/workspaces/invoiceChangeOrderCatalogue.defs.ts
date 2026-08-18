/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/invoiceChangeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const invoiceChangeOrderCatalogueWorkspace = {
  "workspaceId": "invoiceChangeOrderCatalogue",
  "title": "Aplicação de ordem de mudança na fatura",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "InvoiceChangeOrder",
  "bffCalls": [
    {
      "bffId": "qryListInvoiceChangeOrder",
      "kind": "query",
      "uses": [
        {
          "operationId": "listInvoiceChangeOrder"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "invoiceChangeOrderId",
            "from": "listInvoiceChangeOrder.$items.invoiceChangeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "invoiceId",
            "from": "listInvoiceChangeOrder.$items.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrderId",
            "from": "listInvoiceChangeOrder.$items.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "billedAmount",
            "from": "listInvoiceChangeOrder.$items.billedAmount",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder"
    },
    {
      "bffId": "cmdCreateInvoiceChangeOrder",
      "kind": "command",
      "uses": [
        {
          "operationId": "createInvoiceChangeOrder"
        }
      ],
      "input": [
        {
          "name": "invoiceId",
          "from": "createInvoiceChangeOrder.invoiceId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInvoicePicker",
          "type": "string"
        },
        {
          "name": "changeOrderId",
          "from": "createInvoiceChangeOrder.changeOrderId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryChangeOrderPicker",
          "type": "string"
        },
        {
          "name": "billedAmount",
          "from": "createInvoiceChangeOrder.billedAmount",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceChangeOrderId",
            "from": "createInvoiceChangeOrder.invoiceChangeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "invoiceId",
            "from": "createInvoiceChangeOrder.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrderId",
            "from": "createInvoiceChangeOrder.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "billedAmount",
            "from": "createInvoiceChangeOrder.billedAmount",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder"
    },
    {
      "bffId": "cmdUpdateInvoiceChangeOrder",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateInvoiceChangeOrder"
        }
      ],
      "input": [
        {
          "name": "invoiceChangeOrderId",
          "from": "updateInvoiceChangeOrder.invoiceChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "invoiceId",
          "from": "updateInvoiceChangeOrder.invoiceId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInvoicePicker",
          "type": "string"
        },
        {
          "name": "changeOrderId",
          "from": "updateInvoiceChangeOrder.changeOrderId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryChangeOrderPicker",
          "type": "string"
        },
        {
          "name": "billedAmount",
          "from": "updateInvoiceChangeOrder.billedAmount",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceChangeOrderId",
            "from": "updateInvoiceChangeOrder.invoiceChangeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "invoiceId",
            "from": "updateInvoiceChangeOrder.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrderId",
            "from": "updateInvoiceChangeOrder.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "billedAmount",
            "from": "updateInvoiceChangeOrder.billedAmount",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder"
    },
    {
      "bffId": "cmdDeleteInvoiceChangeOrder",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteInvoiceChangeOrder"
        }
      ],
      "input": [
        {
          "name": "invoiceChangeOrderId",
          "from": "deleteInvoiceChangeOrder.invoiceChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceChangeOrderId",
            "from": "deleteInvoiceChangeOrder.invoiceChangeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "invoiceId",
            "from": "deleteInvoiceChangeOrder.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrderId",
            "from": "deleteInvoiceChangeOrder.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "billedAmount",
            "from": "deleteInvoiceChangeOrder.billedAmount",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder"
    },
    {
      "bffId": "qryInvoicePicker",
      "kind": "query",
      "uses": [
        {
          "operationId": "listInvoice"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "invoiceId",
            "from": "listInvoice.$items.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listInvoice.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listInvoice.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "listInvoice.$items.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "listInvoice.$items.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "listInvoice.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker"
    },
    {
      "bffId": "qryChangeOrderPicker",
      "kind": "query",
      "uses": [
        {
          "operationId": "listChangeOrder"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "listChangeOrder.$items.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "listChangeOrder.$items.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "listChangeOrder.$items.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "listChangeOrder.$items.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "listChangeOrder.$items.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "listChangeOrder.$items.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "listChangeOrder.$items.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "listChangeOrder.$items.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "listChangeOrder.$items.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "listChangeOrder.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Aplicação de ordem de mudança na fatura.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListInvoiceChangeOrder"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteInvoiceChangeOrder"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Aplicação de ordem de mudança na fatura.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateInvoiceChangeOrder"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateInvoiceChangeOrder"
        },
        {
          "role": "filterControl",
          "dataSource": "qryInvoicePicker",
          "usage": "picker"
        },
        {
          "role": "filterControl",
          "dataSource": "qryChangeOrderPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createInvoiceChangeOrder",
    "deleteInvoiceChangeOrder",
    "listChangeOrder",
    "listInvoice",
    "listInvoiceChangeOrder",
    "updateInvoiceChangeOrder"
  ],
  "purpose": "Cadastro de Aplicação de ordem de mudança na fatura.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:76641bd7"
} as const;

export default invoiceChangeOrderCatalogueWorkspace;
