/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "scheduleRiskAssessmentView",
  "pageName": "Avaliação de risco de atraso",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmScheduleRiskAssessmentViewBase",
  "routePattern": "/buildFlowFsm/scheduleRiskAssessmentView",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:scheduleRiskAssessmentView",
    "contract:buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView"
  ],
  "operationIds": [
    "inspectScheduleRiskAssessment"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "scheduleRiskAssessmentView",
    "workspaceKind": "landing",
    "actor": "projectManager",
    "entity": "ScheduleRiskAssessment",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectScheduleRiskAssessment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectScheduleRiskAssessment.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "inspectScheduleRiskAssessment",
          "commandName": "qryInspectScheduleRiskAssessment",
          "steps": [
            "Consultar tarefas em risco de atraso",
            "Tarefas em risco e seus indicadores estão identificados."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/scheduleRiskAssessmentView.ts",
    "contracts": [
      {
        "commandName": "qryScheduleRiskAssessmentView",
        "routeConst": "qryScheduleRiskAssessmentViewRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/scheduleRiskAssessmentView.defs.ts",
    "layoutId": "scheduleRiskAssessmentView_split_detail"
  },
  "states": [
    {
      "stateKey": "ui.scheduleRiskAssessmentView.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status",
      "name": "qryScheduleRiskAssessmentViewState",
      "kind": "actionStatus",
      "actionRef": "qryScheduleRiskAssessmentView",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
      "name": "qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryScheduleRiskAssessmentView",
        "direction": "input",
        "field": "scheduleRiskAssessmentProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView",
      "name": "qryScheduleRiskAssessmentViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryScheduleRiskAssessmentView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "qryScheduleRiskAssessmentView",
      "kind": "query",
      "commandRef": "qryScheduleRiskAssessmentView",
      "routeKey": "buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView",
      "purpose": "Consultar tarefas em risco de atraso",
      "methodName": "loadQryScheduleRiskAssessmentView",
      "handlerName": "handleQryScheduleRiskAssessmentViewClick",
      "inputStateKeys": [
        "ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId"
      ],
      "outputStateKeys": [
        "ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView"
      ],
      "statusStateKey": "ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status"
    },
    {
      "actionId": "set.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
      "methodName": "setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId",
      "handlerName": "handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange"
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
    "section.scheduleRiskAssessmentView.overview.title": "Tarefas em risco",
    "organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title": "Consultar tarefas em risco de atraso",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title": "Consultar tarefas em risco de atraso",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty": "Nenhum registro encontrado",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label": "Project Id",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label": "Work Task Id",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label": "Task Status",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label": "Due Date",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label": "Progress Percent",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label": "Risk Indicators",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label": "Risk Explanation",
    "intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label": "Assessed At"
  },
  "automation": {
    "statePrefix": "ui.scheduleRiskAssessmentView",
    "stateKeys": [
      "ui.scheduleRiskAssessmentView.status",
      "ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status",
      "ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
      "ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView"
    ],
    "actionIds": [
      "qryScheduleRiskAssessmentView",
      "set.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId"
    ]
  }
};

export const pipeline = [
  {
    "id": "scheduleRiskAssessmentView__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/scheduleRiskAssessmentView.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "unfinishedWorkTask"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
