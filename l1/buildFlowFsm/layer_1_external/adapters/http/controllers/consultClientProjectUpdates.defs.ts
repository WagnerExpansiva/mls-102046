/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultClientProjectUpdates.defs.ts" enhancement="_blank"/>

export const consultClientProjectUpdatesController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "consultClientProjectUpdates",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "consultClientProjectUpdates",
    "controllerName": "ConsultClientProjectUpdatesController",
    "ownerKind": "workspace",
    "workspaceId": "consultClientProjectUpdates",
    "actors": [
      "client"
    ],
    "allowedScopes": [
      "external"
    ],
    "handlers": [
      {
        "handlerName": "consultClientProjectUpdatesQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.consultClientProjectUpdates.qryLocateProject",
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
        "handlerName": "consultClientProjectUpdatesQryInspectStatusReportHandler",
        "command": "qryInspectStatusReport",
        "bffId": "qryInspectStatusReport",
        "route": "buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport",
        "kind": "query",
        "usecaseRef": "inspectStatusReport",
        "usecaseRefs": [
          "inspectStatusReport"
        ],
        "inputTypeName": "InspectStatusReportInput",
        "inputContract": [
          {
            "inputId": "statusReportStatusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "selectedEntity",
            "description": "Relatório de status"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "inspectStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "inspectStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "inspectStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "inspectStatusReport",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "content",
              "operationId": "inspectStatusReport",
              "path": [
                "content"
              ],
              "fromItems": false
            },
            {
              "name": "communicatedRisks",
              "operationId": "inspectStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "inspectStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "generatedByUserId",
              "operationId": "inspectStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "publishedAt",
              "operationId": "inspectStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": false
            },
            {
              "name": "publishedByUserId",
              "operationId": "inspectStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "withdrawnAt",
              "operationId": "inspectStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "consultClientProjectUpdatesQryInspectClientBillingSummaryHandler",
        "command": "qryInspectClientBillingSummary",
        "bffId": "qryInspectClientBillingSummary",
        "route": "buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary",
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
        "key": "buildFlowFsm.consultClientProjectUpdates.qryLocateProject",
        "handlerName": "consultClientProjectUpdatesQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport",
        "handlerName": "consultClientProjectUpdatesQryInspectStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary",
        "handlerName": "consultClientProjectUpdatesQryInspectClientBillingSummaryHandler"
      }
    ]
  }
} as const;

export default consultClientProjectUpdatesController;

export const pipeline = [
  {
    "id": "consultClientProjectUpdates__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultClientProjectUpdates.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultClientProjectUpdates.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/consultClientProjectUpdates.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/consultClientProjectUpdates.qryInspectStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/consultClientProjectUpdates.qryInspectClientBillingSummary.defs.ts"
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
