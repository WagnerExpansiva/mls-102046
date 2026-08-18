/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectTimelineView",
  "pageName": "Cronograma da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectTimelineViewBase",
  "routePattern": "/buildFlowFsm/projectTimelineView",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:projectTimelineView",
    "contract:buildFlowFsm.projectTimelineView.qryProjectTimelineView"
  ],
  "operationIds": [
    "inspectProjectTimeline"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectTimelineView",
    "workspaceKind": "landing",
    "actor": "fieldCoordinator",
    "entity": "ProjectTimeline",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectProjectTimeline",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectTimeline.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "inspectProjectTimeline",
          "commandName": "qryInspectProjectTimeline",
          "steps": [
            "Consultar o cronograma da obra",
            "A sequência de tarefas e prazos está visível para planejamento."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/projectTimelineView.ts",
    "contracts": [
      {
        "commandName": "qryProjectTimelineView",
        "routeConst": "qryProjectTimelineViewRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectTimelineView.defs.ts",
    "layoutId": "projectTimelineView-split-detail"
  },
  "states": [
    {
      "stateKey": "ui.projectTimelineView.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectTimelineView.action.qryProjectTimelineView.status",
      "name": "qryProjectTimelineViewState",
      "kind": "actionStatus",
      "actionRef": "qryProjectTimelineView",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId",
      "name": "qryProjectTimelineViewProjectTimelineProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryProjectTimelineView",
        "direction": "input",
        "field": "projectTimelineProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectTimelineView.data.qryProjectTimelineView",
      "name": "qryProjectTimelineViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectTimelineView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "qryProjectTimelineView",
      "kind": "query",
      "commandRef": "qryProjectTimelineView",
      "routeKey": "buildFlowFsm.projectTimelineView.qryProjectTimelineView",
      "purpose": "Consultar o cronograma da obra",
      "methodName": "loadQryProjectTimelineView",
      "handlerName": "handleQryProjectTimelineViewClick",
      "inputStateKeys": [
        "ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId"
      ],
      "outputStateKeys": [
        "ui.projectTimelineView.data.qryProjectTimelineView"
      ],
      "statusStateKey": "ui.projectTimelineView.action.qryProjectTimelineView.status"
    },
    {
      "actionId": "set.qryProjectTimelineViewProjectTimelineProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId",
      "methodName": "setQryProjectTimelineViewProjectTimelineProjectId",
      "handlerName": "handleQryProjectTimelineViewProjectTimelineProjectIdChange"
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
    "section.projectTimelineView.overview.title": "Visão geral do cronograma",
    "organism.projectTimelineView.qryProjectTimelineView.title": "Consultar o cronograma da obra",
    "intent.projectTimelineView.qryProjectTimelineView.list.title": "Consultar o cronograma da obra",
    "intent.projectTimelineView.qryProjectTimelineView.list.empty": "Nenhum registro encontrado",
    "intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label": "Project Id",
    "intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label": "Work Tasks",
    "intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label": "Schedule Entries"
  },
  "automation": {
    "statePrefix": "ui.projectTimelineView",
    "stateKeys": [
      "ui.projectTimelineView.status",
      "ui.projectTimelineView.action.qryProjectTimelineView.status",
      "ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId",
      "ui.projectTimelineView.data.qryProjectTimelineView"
    ],
    "actionIds": [
      "qryProjectTimelineView",
      "set.qryProjectTimelineViewProjectTimelineProjectId"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectTimelineView__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/projectTimelineView.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
