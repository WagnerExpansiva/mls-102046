/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDashboardView.defs.ts" enhancement="_blank"/>

export const projectDashboardViewController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectDashboardView",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectDashboardView",
    "controllerName": "ProjectDashboardViewController",
    "ownerKind": "workspace",
    "workspaceId": "projectDashboardView",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "projectDashboardViewQryProjectDashboardViewHandler",
        "command": "qryProjectDashboardView",
        "bffId": "qryProjectDashboardView",
        "route": "buildFlowFsm.projectDashboardView.qryProjectDashboardView",
        "kind": "query",
        "usecaseRef": "inspectProjectDashboard",
        "usecaseRefs": [
          "inspectProjectDashboard"
        ],
        "inputTypeName": "InspectProjectDashboardInput",
        "inputContract": [],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "activeProjects",
              "operationId": "inspectProjectDashboard",
              "path": [
                "activeProjects"
              ],
              "fromItems": false
            },
            {
              "name": "activeProjectCount",
              "operationId": "inspectProjectDashboard",
              "path": [
                "activeProjectCount"
              ],
              "fromItems": false
            },
            {
              "name": "totalBudget",
              "operationId": "inspectProjectDashboard",
              "path": [
                "totalBudget"
              ],
              "fromItems": false
            },
            {
              "name": "totalActualCost",
              "operationId": "inspectProjectDashboard",
              "path": [
                "totalActualCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetVariance",
              "operationId": "inspectProjectDashboard",
              "path": [
                "budgetVariance"
              ],
              "fromItems": false
            },
            {
              "name": "costAttentionProjects",
              "operationId": "inspectProjectDashboard",
              "path": [
                "costAttentionProjects"
              ],
              "fromItems": false
            },
            {
              "name": "upcomingTasks",
              "operationId": "inspectProjectDashboard",
              "path": [
                "upcomingTasks"
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
        "key": "buildFlowFsm.projectDashboardView.qryProjectDashboardView",
        "handlerName": "projectDashboardViewQryProjectDashboardViewHandler"
      }
    ]
  }
} as const;

export default projectDashboardViewController;

export const pipeline = [
  {
    "id": "projectDashboardView__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDashboardView.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDashboardView.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectDashboardView.qryProjectDashboardView.defs.ts"
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
