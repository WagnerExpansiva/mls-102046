/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectExecutionOverviewView.defs.ts" enhancement="_blank"/>

export const projectExecutionOverviewViewController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectExecutionOverviewView",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectExecutionOverviewView",
    "controllerName": "ProjectExecutionOverviewViewController",
    "ownerKind": "workspace",
    "workspaceId": "projectExecutionOverviewView",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "projectExecutionOverviewViewQryProjectExecutionOverviewViewHandler",
        "command": "qryProjectExecutionOverviewView",
        "bffId": "qryProjectExecutionOverviewView",
        "route": "buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView",
        "kind": "query",
        "usecaseRef": "inspectProjectExecutionOverview",
        "usecaseRefs": [
          "inspectProjectExecutionOverview"
        ],
        "inputTypeName": "InspectProjectExecutionOverviewInput",
        "inputContract": [
          {
            "inputId": "projectExecutionOverviewProjectId",
            "fieldRef": "ProjectExecutionOverview.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Visão consolidada de execução da obra"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "projectStatus",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectStatus"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "workTaskIds"
              ],
              "fromItems": false
            },
            {
              "name": "taskSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "taskSummary"
              ],
              "fromItems": false
            },
            {
              "name": "upcomingCommitments",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "upcomingCommitments"
              ],
              "fromItems": false
            },
            {
              "name": "timeLogIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "timeLogIds"
              ],
              "fromItems": false
            },
            {
              "name": "totalLoggedHours",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "totalLoggedHours"
              ],
              "fromItems": false
            },
            {
              "name": "materialUsageIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "materialUsageIds"
              ],
              "fromItems": false
            },
            {
              "name": "materialUsageSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "materialUsageSummary"
              ],
              "fromItems": false
            },
            {
              "name": "actualLaborCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualLaborCost"
              ],
              "fromItems": false
            },
            {
              "name": "actualMaterialCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualMaterialCost"
              ],
              "fromItems": false
            },
            {
              "name": "actualCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetAmount",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "budgetAmount"
              ],
              "fromItems": false
            },
            {
              "name": "costVariance",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "costVariance"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "changeOrderIds"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderImpactSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "changeOrderImpactSummary"
              ],
              "fromItems": false
            },
            {
              "name": "calculatedAt",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "calculatedAt"
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
        "key": "buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView",
        "handlerName": "projectExecutionOverviewViewQryProjectExecutionOverviewViewHandler"
      }
    ]
  }
} as const;

export default projectExecutionOverviewViewController;

export const pipeline = [
  {
    "id": "projectExecutionOverviewView__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectExecutionOverviewView.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectExecutionOverviewView.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectExecutionOverviewView.qryProjectExecutionOverviewView.defs.ts"
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
