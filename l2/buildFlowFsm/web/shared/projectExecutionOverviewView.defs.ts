/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectExecutionOverviewView",
  "pageName": "Visão consolidada de execução da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectExecutionOverviewViewBase",
  "routePattern": "/buildFlowFsm/projectExecutionOverviewView",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:projectExecutionOverviewView",
    "contract:buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView"
  ],
  "operationIds": [
    "inspectProjectExecutionOverview"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectExecutionOverviewView",
    "workspaceKind": "landing",
    "actor": "projectManager",
    "entity": "ProjectExecutionOverview",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectProjectExecutionOverview",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectExecutionOverview.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "inspectProjectExecutionOverview",
          "commandName": "qryInspectProjectExecutionOverview",
          "steps": [
            "Acompanhar a execução com os registros diários",
            "Andamento, registros e próximos prazos estão consolidados."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/projectExecutionOverviewView.ts",
    "contracts": [
      {
        "commandName": "qryProjectExecutionOverviewView",
        "routeConst": "qryProjectExecutionOverviewViewRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectExecutionOverviewView.defs.ts",
    "layoutId": "projectExecutionOverviewView-split-detail"
  },
  "states": [
    {
      "stateKey": "ui.projectExecutionOverviewView.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status",
      "name": "qryProjectExecutionOverviewViewState",
      "kind": "actionStatus",
      "actionRef": "qryProjectExecutionOverviewView",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
      "name": "qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryProjectExecutionOverviewView",
        "direction": "input",
        "field": "projectExecutionOverviewProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView",
      "name": "qryProjectExecutionOverviewViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectExecutionOverviewView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "qryProjectExecutionOverviewView",
      "kind": "query",
      "commandRef": "qryProjectExecutionOverviewView",
      "routeKey": "buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView",
      "purpose": "Analisar a execução da obra",
      "methodName": "loadQryProjectExecutionOverviewView",
      "handlerName": "handleQryProjectExecutionOverviewViewClick",
      "inputStateKeys": [
        "ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId"
      ],
      "outputStateKeys": [
        "ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView"
      ],
      "statusStateKey": "ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status"
    },
    {
      "actionId": "set.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
      "methodName": "setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId",
      "handlerName": "handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange"
    }
  ],
  "initialLoads": [],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en",
      "es"
    ],
    "runtimeLocales": [
      "pt-br",
      "en",
      "es"
    ]
  },
  "i18n": {
    "section.projectExecutionOverviewView.overview.title": "Visão consolidada da execução",
    "organism.projectExecutionOverviewView.qryProjectExecutionOverviewView.title": "Analisar a execução da obra",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.title": "Analisar a execução da obra",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.empty": "Nenhum registro encontrado",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectId.label": "Project Id",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectName.label": "Project Name",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectStatus.label": "Project Status",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.workTaskIds.label": "Work Task Ids",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label": "Task Summary",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label": "Upcoming Commitments",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.timeLogIds.label": "Time Log Ids",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label": "Total Logged Hours",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageIds.label": "Material Usage Ids",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label": "Material Usage Summary",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label": "Actual Labor Cost",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label": "Actual Material Cost",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label": "Actual Cost",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label": "Budget Amount",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label": "Cost Variance",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderIds.label": "Change Order Ids",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label": "Change Order Impact Summary",
    "intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label": "Calculated At"
  },
  "automation": {
    "statePrefix": "ui.projectExecutionOverviewView",
    "stateKeys": [
      "ui.projectExecutionOverviewView.status",
      "ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status",
      "ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
      "ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView"
    ],
    "actionIds": [
      "qryProjectExecutionOverviewView",
      "set.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectExecutionOverviewView__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/projectExecutionOverviewView.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeProjectCostVisibility"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
