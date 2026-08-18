/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectDashboardView",
  "pageName": "Painel de portfólio de obras",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectDashboardViewBase",
  "routePattern": "/buildFlowFsm/projectDashboardView",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:projectDashboardView",
    "contract:buildFlowFsm.projectDashboardView.qryProjectDashboardView"
  ],
  "operationIds": [
    "inspectProjectDashboard"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectDashboardView",
    "workspaceKind": "landing",
    "actor": "projectManager",
    "entity": "ProjectDashboard",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectProjectDashboard",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectDashboard.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "inspectProjectDashboard",
          "commandName": "qryProjectDashboardView",
          "steps": [
            "Consultar o painel de obras",
            "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/projectDashboardView.ts",
    "contracts": [
      {
        "commandName": "qryProjectDashboardView",
        "routeConst": "qryProjectDashboardViewRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectDashboardView.defs.ts",
    "layoutId": "project-dashboard-overview"
  },
  "states": [
    {
      "stateKey": "ui.projectDashboardView.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDashboardView.action.qryProjectDashboardView.status",
      "name": "qryProjectDashboardViewState",
      "kind": "actionStatus",
      "actionRef": "qryProjectDashboardView",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDashboardView.data.qryProjectDashboardView",
      "name": "qryProjectDashboardViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectDashboardView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "qryProjectDashboardView",
      "kind": "query",
      "commandRef": "qryProjectDashboardView",
      "routeKey": "buildFlowFsm.projectDashboardView.qryProjectDashboardView",
      "purpose": "Consultar o painel de obras",
      "methodName": "loadQryProjectDashboardView",
      "handlerName": "handleQryProjectDashboardViewClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectDashboardView.data.qryProjectDashboardView"
      ],
      "statusStateKey": "ui.projectDashboardView.action.qryProjectDashboardView.status"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryProjectDashboardView",
      "stateKey": "ui.projectDashboardView.data.qryProjectDashboardView"
    }
  ],
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
    "section.projectDashboardView.overview.title": "Visão geral do portfólio",
    "organism.projectDashboardView.qryProjectDashboardView.title": "Consultar o painel de obras",
    "intent.projectDashboardView.qryProjectDashboardView.list.title": "Consultar o painel de obras",
    "intent.projectDashboardView.qryProjectDashboardView.list.empty": "Nenhum registro encontrado",
    "intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjects.label": "Active Projects",
    "intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjectCount.label": "Active Project Count",
    "intent.projectDashboardView.qryProjectDashboardView.list.column.totalBudget.label": "Total Budget",
    "intent.projectDashboardView.qryProjectDashboardView.list.column.totalActualCost.label": "Total Actual Cost",
    "intent.projectDashboardView.qryProjectDashboardView.list.column.budgetVariance.label": "Budget Variance",
    "intent.projectDashboardView.qryProjectDashboardView.list.column.costAttentionProjects.label": "Cost Attention Projects",
    "intent.projectDashboardView.qryProjectDashboardView.list.column.upcomingTasks.label": "Upcoming Tasks"
  },
  "automation": {
    "statePrefix": "ui.projectDashboardView",
    "stateKeys": [
      "ui.projectDashboardView.status",
      "ui.projectDashboardView.action.qryProjectDashboardView.status",
      "ui.projectDashboardView.data.qryProjectDashboardView"
    ],
    "actionIds": [
      "qryProjectDashboardView"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectDashboardView__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/projectDashboardView.ts",
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
