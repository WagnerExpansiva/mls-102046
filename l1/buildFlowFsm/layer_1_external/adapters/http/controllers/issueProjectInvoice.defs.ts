/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/issueProjectInvoice.defs.ts" enhancement="_blank"/>

export const issueProjectInvoiceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "issueProjectInvoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "issueProjectInvoice",
    "controllerName": "IssueProjectInvoiceController",
    "ownerKind": "workspace",
    "workspaceId": "issueProjectInvoice",
    "actors": [
      "billingStaff"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "issueProjectInvoiceQryLocateClientHandler",
        "command": "qryLocateClient",
        "bffId": "qryLocateClient",
        "route": "buildFlowFsm.issueProjectInvoice.qryLocateClient",
        "kind": "query",
        "usecaseRef": "locateClient",
        "usecaseRefs": [
          "locateClient"
        ],
        "inputTypeName": "LocateClientInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "clientId",
              "operationId": "locateClient",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "clientName",
              "operationId": "locateClient",
              "path": [
                "clientName"
              ],
              "fromItems": true
            },
            {
              "name": "contactEmail",
              "operationId": "locateClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": true
            },
            {
              "name": "contactPhone",
              "operationId": "locateClient",
              "path": [
                "contactPhone"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "issueProjectInvoiceQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.issueProjectInvoice.qryLocateProject",
        "kind": "query",
        "usecaseRef": "locateProject",
        "usecaseRefs": [
          "locateProject"
        ],
        "inputTypeName": "LocateProjectInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "locateProject",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "locateProject",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "locateProject",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "address",
              "operationId": "locateProject",
              "path": [
                "address"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "locateProject",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "authorizedBudget",
              "operationId": "locateProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": true
            },
            {
              "name": "plannedStartDate",
              "operationId": "locateProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": true
            },
            {
              "name": "plannedEndDate",
              "operationId": "locateProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "issueProjectInvoiceQryInspectClientBillingSummaryHandler",
        "command": "qryInspectClientBillingSummary",
        "bffId": "qryInspectClientBillingSummary",
        "route": "buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary",
        "kind": "query",
        "usecaseRef": "inspectClientBillingSummary",
        "usecaseRefs": [
          "inspectClientBillingSummary"
        ],
        "inputTypeName": "InspectClientBillingSummaryInput",
        "inputContract": [
          {
            "inputId": "clientBillingSummaryClientId",
            "fieldRef": "ClientBillingSummary.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Resumo de faturamento do cliente"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "approvedChangeOrderReferences",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "approvedChangeOrderReferences"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceReferences",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "invoiceReferences"
              ],
              "fromItems": false
            },
            {
              "name": "approvedChangeOrderAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "approvedChangeOrderAmount"
              ],
              "fromItems": false
            },
            {
              "name": "billableAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "billableAmount"
              ],
              "fromItems": false
            },
            {
              "name": "invoicedAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "invoicedAmount"
              ],
              "fromItems": false
            },
            {
              "name": "clientAvailableAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "clientAvailableAmount"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "issueProjectInvoiceCmdCreateInvoiceHandler",
        "command": "cmdCreateInvoice",
        "bffId": "cmdCreateInvoice",
        "route": "buildFlowFsm.issueProjectInvoice.cmdCreateInvoice",
        "kind": "command",
        "usecaseRef": "createInvoice",
        "usecaseRefs": [
          "createInvoice"
        ],
        "inputTypeName": "CreateInvoiceInput",
        "inputContract": [
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
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "createInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "createInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "commercialReference",
              "operationId": "createInvoice",
              "path": [
                "commercialReference"
              ],
              "fromItems": false
            },
            {
              "name": "amount",
              "operationId": "createInvoice",
              "path": [
                "amount"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createInvoice",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "issueProjectInvoiceCmdHandoffInvoiceToClientHandler",
        "command": "cmdHandoffInvoiceToClient",
        "bffId": "cmdHandoffInvoiceToClient",
        "route": "buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient",
        "kind": "command",
        "usecaseRef": "handoffInvoiceToClient",
        "usecaseRefs": [
          "handoffInvoiceToClient"
        ],
        "inputTypeName": "HandoffInvoiceToClientInput",
        "inputContract": [
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
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "handoffInvoiceToClient",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "handoffInvoiceToClient",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "handoffInvoiceToClient",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "commercialReference",
              "operationId": "handoffInvoiceToClient",
              "path": [
                "commercialReference"
              ],
              "fromItems": false
            },
            {
              "name": "amount",
              "operationId": "handoffInvoiceToClient",
              "path": [
                "amount"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffInvoiceToClient",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.issueProjectInvoice.qryLocateClient",
        "handlerName": "issueProjectInvoiceQryLocateClientHandler"
      },
      {
        "key": "buildFlowFsm.issueProjectInvoice.qryLocateProject",
        "handlerName": "issueProjectInvoiceQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary",
        "handlerName": "issueProjectInvoiceQryInspectClientBillingSummaryHandler"
      },
      {
        "key": "buildFlowFsm.issueProjectInvoice.cmdCreateInvoice",
        "handlerName": "issueProjectInvoiceCmdCreateInvoiceHandler"
      },
      {
        "key": "buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient",
        "handlerName": "issueProjectInvoiceCmdHandoffInvoiceToClientHandler"
      }
    ]
  }
} as const;

export default issueProjectInvoiceController;

export const pipeline = [
  {
    "id": "issueProjectInvoice__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/issueProjectInvoice.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/issueProjectInvoice.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/issueProjectInvoice.qryLocateClient.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/issueProjectInvoice.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/issueProjectInvoice.qryInspectClientBillingSummary.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/issueProjectInvoice.cmdCreateInvoice.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffInvoiceToClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/issueProjectInvoice.cmdHandoffInvoiceToClient.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
