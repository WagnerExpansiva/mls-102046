/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/issueProjectInvoice.defs.ts" enhancement="_blank"/>

export const issueProjectInvoiceWorkspace = {
  "workspaceId": "issueProjectInvoice",
  "title": "Emitir fatura da obra",
  "actors": [
    "billingStaff"
  ],
  "kind": "workflow",
  "entity": "Invoice",
  "workflowId": "invoiceLifecycle",
  "bffCalls": [
    {
      "bffId": "qryLocateClient",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateClient"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "clientId",
            "from": "locateClient.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientName",
            "from": "locateClient.$items.clientName",
            "type": "string",
            "required": true
          },
          {
            "name": "contactEmail",
            "from": "locateClient.$items.contactEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "contactPhone",
            "from": "locateClient.$items.contactPhone",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.issueProjectInvoice.qryLocateClient"
    },
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.issueProjectInvoice.qryLocateProject"
    },
    {
      "bffId": "qryInspectClientBillingSummary",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectClientBillingSummary"
        }
      ],
      "input": [
        {
          "name": "clientBillingSummaryClientId",
          "from": "inspectClientBillingSummary.clientBillingSummaryClientId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientId",
            "from": "inspectClientBillingSummary.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "inspectClientBillingSummary.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "approvedChangeOrderReferences",
            "from": "inspectClientBillingSummary.approvedChangeOrderReferences",
            "type": "string",
            "required": false
          },
          {
            "name": "invoiceReferences",
            "from": "inspectClientBillingSummary.invoiceReferences",
            "type": "string",
            "required": false
          },
          {
            "name": "approvedChangeOrderAmount",
            "from": "inspectClientBillingSummary.approvedChangeOrderAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "billableAmount",
            "from": "inspectClientBillingSummary.billableAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "invoicedAmount",
            "from": "inspectClientBillingSummary.invoicedAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "clientAvailableAmount",
            "from": "inspectClientBillingSummary.clientAvailableAmount",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary"
    },
    {
      "bffId": "cmdCreateInvoice",
      "kind": "command",
      "uses": [
        {
          "operationId": "createInvoice"
        }
      ],
      "input": [
        {
          "name": "clientClientId",
          "from": "createInvoice.clientClientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryLocateClient",
          "type": "string"
        },
        {
          "name": "projectProjectId",
          "from": "createInvoice.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "commercialReference",
          "from": "createInvoice.commercialReference",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "amount",
          "from": "createInvoice.amount",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceId",
            "from": "createInvoice.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "createInvoice.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "createInvoice.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "createInvoice.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "createInvoice.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "createInvoice.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.issueProjectInvoice.cmdCreateInvoice"
    },
    {
      "bffId": "cmdHandoffInvoiceToClient",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffInvoiceToClient"
        }
      ],
      "input": [
        {
          "name": "invoiceInvoiceId",
          "from": "handoffInvoiceToClient.invoiceInvoiceId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "commercialReference",
          "from": "handoffInvoiceToClient.commercialReference",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "amount",
          "from": "handoffInvoiceToClient.amount",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceId",
            "from": "handoffInvoiceToClient.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "handoffInvoiceToClient.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "handoffInvoiceToClient.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "handoffInvoiceToClient.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "handoffInvoiceToClient.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "handoffInvoiceToClient.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient"
    }
  ],
  "sections": [
    {
      "sectionId": "locateClient",
      "intent": "Um cliente do catálogo compartilhado está selecionado.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateClient",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "locateProject",
      "intent": "Uma obra do cliente selecionado está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "inspectClientBillingSummary",
      "intent": "Faturas, ordens aprovadas e valores estão consolidados.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectClientBillingSummary"
        }
      ]
    },
    {
      "sectionId": "createInvoice",
      "intent": "Uma fatura vinculada ao cliente e à obra fica registrada.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateInvoice"
        }
      ]
    },
    {
      "sectionId": "handoffInvoiceToClient",
      "intent": "O cliente recebe a fatura para consulta.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffInvoiceToClient"
        }
      ]
    }
  ],
  "operationIds": [
    "createInvoice",
    "handoffInvoiceToClient",
    "inspectClientBillingSummary",
    "locateClient",
    "locateProject"
  ],
  "purpose": "Emitir uma fatura para o cliente com base no resumo de faturamento da obra.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:c2c8d2ae"
} as const;

export default issueProjectInvoiceWorkspace;
