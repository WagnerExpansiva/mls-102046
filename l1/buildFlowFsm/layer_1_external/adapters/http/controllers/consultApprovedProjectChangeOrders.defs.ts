/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultApprovedProjectChangeOrders.defs.ts" enhancement="_blank"/>

export const consultApprovedProjectChangeOrdersController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "consultApprovedProjectChangeOrders",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "consultApprovedProjectChangeOrders",
    "controllerName": "ConsultApprovedProjectChangeOrdersController",
    "ownerKind": "workspace",
    "workspaceId": "consultApprovedProjectChangeOrders",
    "actors": [
      "client"
    ],
    "allowedScopes": [
      "external"
    ],
    "handlers": [
      {
        "handlerName": "consultApprovedProjectChangeOrdersQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject",
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
        "handlerName": "consultApprovedProjectChangeOrdersQryInspectApprovedChangeOrdersHandler",
        "command": "qryInspectApprovedChangeOrders",
        "bffId": "qryInspectApprovedChangeOrders",
        "route": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders",
        "kind": "query",
        "usecaseRef": "inspectApprovedChangeOrders",
        "usecaseRefs": [
          "inspectApprovedChangeOrders"
        ],
        "inputTypeName": "InspectApprovedChangeOrderInput",
        "inputContract": [
          {
            "inputId": "changeOrderChangeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Ordem de mudança"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "inspectApprovedChangeOrders",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "inspectApprovedChangeOrders",
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
        "handlerName": "consultApprovedProjectChangeOrdersQryInspectClientBillingSummaryHandler",
        "command": "qryInspectClientBillingSummary",
        "bffId": "qryInspectClientBillingSummary",
        "route": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary",
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
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject",
        "handlerName": "consultApprovedProjectChangeOrdersQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders",
        "handlerName": "consultApprovedProjectChangeOrdersQryInspectApprovedChangeOrdersHandler"
      },
      {
        "key": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary",
        "handlerName": "consultApprovedProjectChangeOrdersQryInspectClientBillingSummaryHandler"
      }
    ]
  }
} as const;

export default consultApprovedProjectChangeOrdersController;

export const pipeline = [
  {
    "id": "consultApprovedProjectChangeOrders__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultApprovedProjectChangeOrders.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultApprovedProjectChangeOrders.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/consultApprovedProjectChangeOrders.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectApprovedChangeOrders.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.defs.ts"
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
