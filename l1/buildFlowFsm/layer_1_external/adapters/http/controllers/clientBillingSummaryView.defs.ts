/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingSummaryView.defs.ts" enhancement="_blank"/>

export const clientBillingSummaryViewController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "clientBillingSummaryView",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "clientBillingSummaryView",
    "controllerName": "ClientBillingSummaryViewController",
    "ownerKind": "workspace",
    "workspaceId": "clientBillingSummaryView",
    "actors": [
      "billingStaff"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "clientBillingSummaryViewQryClientBillingSummaryViewHandler",
        "command": "qryClientBillingSummaryView",
        "bffId": "qryClientBillingSummaryView",
        "route": "buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView",
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
        "key": "buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView",
        "handlerName": "clientBillingSummaryViewQryClientBillingSummaryViewHandler"
      }
    ]
  }
} as const;

export default clientBillingSummaryViewController;

export const pipeline = [
  {
    "id": "clientBillingSummaryView__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingSummaryView.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingSummaryView.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientBillingSummaryView.qryClientBillingSummaryView.defs.ts"
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
