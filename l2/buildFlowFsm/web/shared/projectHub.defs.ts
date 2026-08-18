/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectHub.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectHub",
  "pageName": "Obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectHubBase",
  "routePattern": "/buildFlowFsm/projectHub",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:projectHub",
    "contract:buildFlowFsm.projectHub.qryListProject",
    "contract:buildFlowFsm.projectHub.qryClientBillingSummaryView",
    "contract:buildFlowFsm.projectHub.qryProjectDashboardView",
    "contract:buildFlowFsm.projectHub.qryProjectExecutionOverviewView",
    "contract:buildFlowFsm.projectHub.qryProjectTimelineView",
    "contract:buildFlowFsm.projectHub.qryScheduleRiskAssessmentView",
    "contract:buildFlowFsm.projectHub.qryListChangeOrder",
    "contract:buildFlowFsm.projectHub.qryListInvoice",
    "contract:buildFlowFsm.projectHub.qryListMaterialUsage",
    "contract:buildFlowFsm.projectHub.qryListProjectCoordinationAssignment",
    "contract:buildFlowFsm.projectHub.qryListStatusReport",
    "contract:buildFlowFsm.projectHub.qryListWorkTask"
  ],
  "operationIds": [
    "inspectClientBillingSummary",
    "inspectProjectDashboard",
    "inspectProjectExecutionOverview",
    "inspectProjectTimeline",
    "inspectScheduleRiskAssessment",
    "listChangeOrder",
    "listInvoice",
    "listMaterialUsage",
    "listProject",
    "listProjectCoordinationAssignment",
    "listStatusReport",
    "listWorkTask"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectHub",
    "workspaceKind": "landing",
    "actor": "billingStaff",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectClientBillingSummary",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectClientBillingSummary.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectDashboard",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectDashboard.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectExecutionOverview",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectExecutionOverview.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectTimeline",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectTimeline.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectScheduleRiskAssessment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectScheduleRiskAssessment.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInvoice",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listMaterialUsage",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listMaterialUsage.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProjectCoordinationAssignment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProjectCoordinationAssignment.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listStatusReport.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listWorkTask.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "inspectClientBillingSummary",
          "commandName": "qryClientBillingSummaryView",
          "steps": [
            "Consultar o reflexo no faturamento",
            "O resumo apresenta alterações aprovadas, faturas e valores."
          ]
        },
        {
          "operationId": "inspectProjectDashboard",
          "commandName": "qryProjectDashboardView",
          "steps": [
            "Consultar o painel de obras",
            "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis."
          ]
        },
        {
          "operationId": "inspectProjectExecutionOverview",
          "commandName": "qryInspectProjectExecutionOverview",
          "steps": [
            "Acompanhar a execução com os registros diários",
            "Andamento, registros e próximos prazos estão consolidados."
          ]
        },
        {
          "operationId": "inspectProjectTimeline",
          "commandName": "qryInspectProjectTimeline",
          "steps": [
            "Consultar o cronograma da obra",
            "A sequência de tarefas e prazos está visível para planejamento."
          ]
        },
        {
          "operationId": "inspectScheduleRiskAssessment",
          "commandName": "qryInspectScheduleRiskAssessment",
          "steps": [
            "Consultar tarefas em risco de atraso",
            "Tarefas em risco e seus indicadores estão identificados."
          ]
        },
        {
          "operationId": "listChangeOrder",
          "commandName": "qryListChangeOrder",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listInvoice",
          "commandName": "qryListInvoice",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listMaterialUsage",
          "commandName": "qryListMaterialUsage",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listProject",
          "commandName": "qryProjectPicker",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listProjectCoordinationAssignment",
          "commandName": "qryListProjectCoordinationAssignment",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listStatusReport",
          "commandName": "qryListStatusReport",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listWorkTask",
          "commandName": "qryListWorkTask",
          "steps": [
            "Encontrar o registro."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/projectHub.ts",
    "contracts": [
      {
        "commandName": "qryListProject",
        "routeConst": "qryListProjectRoute"
      },
      {
        "commandName": "qryClientBillingSummaryView",
        "routeConst": "qryClientBillingSummaryViewRoute"
      },
      {
        "commandName": "qryProjectDashboardView",
        "routeConst": "qryProjectDashboardViewRoute"
      },
      {
        "commandName": "qryProjectExecutionOverviewView",
        "routeConst": "qryProjectExecutionOverviewViewRoute"
      },
      {
        "commandName": "qryProjectTimelineView",
        "routeConst": "qryProjectTimelineViewRoute"
      },
      {
        "commandName": "qryScheduleRiskAssessmentView",
        "routeConst": "qryScheduleRiskAssessmentViewRoute"
      },
      {
        "commandName": "qryListChangeOrder",
        "routeConst": "qryListChangeOrderRoute"
      },
      {
        "commandName": "qryListInvoice",
        "routeConst": "qryListInvoiceRoute"
      },
      {
        "commandName": "qryListMaterialUsage",
        "routeConst": "qryListMaterialUsageRoute"
      },
      {
        "commandName": "qryListProjectCoordinationAssignment",
        "routeConst": "qryListProjectCoordinationAssignmentRoute"
      },
      {
        "commandName": "qryListStatusReport",
        "routeConst": "qryListStatusReportRoute"
      },
      {
        "commandName": "qryListWorkTask",
        "routeConst": "qryListWorkTaskRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectHub.defs.ts",
    "layoutId": "projectHub-status-overview"
  },
  "states": [
    {
      "stateKey": "ui.projectHub.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectHub.action.qryListProject.status",
      "name": "qryListProjectState",
      "kind": "actionStatus",
      "actionRef": "qryListProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.data.qryListProject",
      "name": "qryListProjectData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListProject",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectHub.action.qryClientBillingSummaryView.status",
      "name": "qryClientBillingSummaryViewState",
      "kind": "actionStatus",
      "actionRef": "qryClientBillingSummaryView",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
      "name": "qryClientBillingSummaryViewClientBillingSummaryClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryClientBillingSummaryView",
        "direction": "input",
        "field": "clientBillingSummaryClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectHub.data.qryClientBillingSummaryView",
      "name": "qryClientBillingSummaryViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryClientBillingSummaryView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectHub.action.qryProjectDashboardView.status",
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
      "stateKey": "ui.projectHub.data.qryProjectDashboardView",
      "name": "qryProjectDashboardViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectDashboardView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectHub.action.qryProjectExecutionOverviewView.status",
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
      "stateKey": "ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
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
      "stateKey": "ui.projectHub.data.qryProjectExecutionOverviewView",
      "name": "qryProjectExecutionOverviewViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectExecutionOverviewView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectHub.action.qryProjectTimelineView.status",
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
      "stateKey": "ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId",
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
      "stateKey": "ui.projectHub.data.qryProjectTimelineView",
      "name": "qryProjectTimelineViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectTimelineView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectHub.action.qryScheduleRiskAssessmentView.status",
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
      "stateKey": "ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
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
      "stateKey": "ui.projectHub.data.qryScheduleRiskAssessmentView",
      "name": "qryScheduleRiskAssessmentViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryScheduleRiskAssessmentView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectHub.action.qryListChangeOrder.status",
      "name": "qryListChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "qryListChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.data.qryListChangeOrder",
      "name": "qryListChangeOrderData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListChangeOrder",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectHub.action.qryListInvoice.status",
      "name": "qryListInvoiceState",
      "kind": "actionStatus",
      "actionRef": "qryListInvoice",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.data.qryListInvoice",
      "name": "qryListInvoiceData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListInvoice",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectHub.action.qryListMaterialUsage.status",
      "name": "qryListMaterialUsageState",
      "kind": "actionStatus",
      "actionRef": "qryListMaterialUsage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.data.qryListMaterialUsage",
      "name": "qryListMaterialUsageData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListMaterialUsage",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectHub.action.qryListProjectCoordinationAssignment.status",
      "name": "qryListProjectCoordinationAssignmentState",
      "kind": "actionStatus",
      "actionRef": "qryListProjectCoordinationAssignment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.data.qryListProjectCoordinationAssignment",
      "name": "qryListProjectCoordinationAssignmentData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListProjectCoordinationAssignment",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectHub.action.qryListStatusReport.status",
      "name": "qryListStatusReportState",
      "kind": "actionStatus",
      "actionRef": "qryListStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.data.qryListStatusReport",
      "name": "qryListStatusReportData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListStatusReport",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectHub.action.qryListWorkTask.status",
      "name": "qryListWorkTaskState",
      "kind": "actionStatus",
      "actionRef": "qryListWorkTask",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectHub.data.qryListWorkTask",
      "name": "qryListWorkTaskData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListWorkTask",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListProject",
      "kind": "query",
      "commandRef": "qryListProject",
      "routeKey": "buildFlowFsm.projectHub.qryListProject",
      "purpose": "Listar Obra",
      "methodName": "loadQryListProject",
      "handlerName": "handleQryListProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryListProject"
      ],
      "statusStateKey": "ui.projectHub.action.qryListProject.status"
    },
    {
      "actionId": "qryClientBillingSummaryView",
      "kind": "query",
      "commandRef": "qryClientBillingSummaryView",
      "routeKey": "buildFlowFsm.projectHub.qryClientBillingSummaryView",
      "purpose": "Consultar o resumo de faturamento",
      "methodName": "loadQryClientBillingSummaryView",
      "handlerName": "handleQryClientBillingSummaryViewClick",
      "inputStateKeys": [
        "ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId"
      ],
      "outputStateKeys": [
        "ui.projectHub.data.qryClientBillingSummaryView"
      ],
      "statusStateKey": "ui.projectHub.action.qryClientBillingSummaryView.status"
    },
    {
      "actionId": "qryProjectDashboardView",
      "kind": "query",
      "commandRef": "qryProjectDashboardView",
      "routeKey": "buildFlowFsm.projectHub.qryProjectDashboardView",
      "purpose": "Consultar o painel de obras",
      "methodName": "loadQryProjectDashboardView",
      "handlerName": "handleQryProjectDashboardViewClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryProjectDashboardView"
      ],
      "statusStateKey": "ui.projectHub.action.qryProjectDashboardView.status"
    },
    {
      "actionId": "qryProjectExecutionOverviewView",
      "kind": "query",
      "commandRef": "qryProjectExecutionOverviewView",
      "routeKey": "buildFlowFsm.projectHub.qryProjectExecutionOverviewView",
      "purpose": "Analisar a execução da obra",
      "methodName": "loadQryProjectExecutionOverviewView",
      "handlerName": "handleQryProjectExecutionOverviewViewClick",
      "inputStateKeys": [
        "ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId"
      ],
      "outputStateKeys": [
        "ui.projectHub.data.qryProjectExecutionOverviewView"
      ],
      "statusStateKey": "ui.projectHub.action.qryProjectExecutionOverviewView.status"
    },
    {
      "actionId": "qryProjectTimelineView",
      "kind": "query",
      "commandRef": "qryProjectTimelineView",
      "routeKey": "buildFlowFsm.projectHub.qryProjectTimelineView",
      "purpose": "Consultar o cronograma da obra",
      "methodName": "loadQryProjectTimelineView",
      "handlerName": "handleQryProjectTimelineViewClick",
      "inputStateKeys": [
        "ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId"
      ],
      "outputStateKeys": [
        "ui.projectHub.data.qryProjectTimelineView"
      ],
      "statusStateKey": "ui.projectHub.action.qryProjectTimelineView.status"
    },
    {
      "actionId": "qryScheduleRiskAssessmentView",
      "kind": "query",
      "commandRef": "qryScheduleRiskAssessmentView",
      "routeKey": "buildFlowFsm.projectHub.qryScheduleRiskAssessmentView",
      "purpose": "Consultar tarefas em risco de atraso",
      "methodName": "loadQryScheduleRiskAssessmentView",
      "handlerName": "handleQryScheduleRiskAssessmentViewClick",
      "inputStateKeys": [
        "ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId"
      ],
      "outputStateKeys": [
        "ui.projectHub.data.qryScheduleRiskAssessmentView"
      ],
      "statusStateKey": "ui.projectHub.action.qryScheduleRiskAssessmentView.status"
    },
    {
      "actionId": "qryListChangeOrder",
      "kind": "query",
      "commandRef": "qryListChangeOrder",
      "routeKey": "buildFlowFsm.projectHub.qryListChangeOrder",
      "purpose": "Listar Ordem de mudança",
      "methodName": "loadQryListChangeOrder",
      "handlerName": "handleQryListChangeOrderClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryListChangeOrder"
      ],
      "statusStateKey": "ui.projectHub.action.qryListChangeOrder.status"
    },
    {
      "actionId": "qryListInvoice",
      "kind": "query",
      "commandRef": "qryListInvoice",
      "routeKey": "buildFlowFsm.projectHub.qryListInvoice",
      "purpose": "Listar Fatura",
      "methodName": "loadQryListInvoice",
      "handlerName": "handleQryListInvoiceClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryListInvoice"
      ],
      "statusStateKey": "ui.projectHub.action.qryListInvoice.status"
    },
    {
      "actionId": "qryListMaterialUsage",
      "kind": "query",
      "commandRef": "qryListMaterialUsage",
      "routeKey": "buildFlowFsm.projectHub.qryListMaterialUsage",
      "purpose": "Listar Consumo de material",
      "methodName": "loadQryListMaterialUsage",
      "handlerName": "handleQryListMaterialUsageClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryListMaterialUsage"
      ],
      "statusStateKey": "ui.projectHub.action.qryListMaterialUsage.status"
    },
    {
      "actionId": "qryListProjectCoordinationAssignment",
      "kind": "query",
      "commandRef": "qryListProjectCoordinationAssignment",
      "routeKey": "buildFlowFsm.projectHub.qryListProjectCoordinationAssignment",
      "purpose": "Listar Atribuição de coordenação da obra",
      "methodName": "loadQryListProjectCoordinationAssignment",
      "handlerName": "handleQryListProjectCoordinationAssignmentClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryListProjectCoordinationAssignment"
      ],
      "statusStateKey": "ui.projectHub.action.qryListProjectCoordinationAssignment.status"
    },
    {
      "actionId": "qryListStatusReport",
      "kind": "query",
      "commandRef": "qryListStatusReport",
      "routeKey": "buildFlowFsm.projectHub.qryListStatusReport",
      "purpose": "Listar Relatório de status",
      "methodName": "loadQryListStatusReport",
      "handlerName": "handleQryListStatusReportClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryListStatusReport"
      ],
      "statusStateKey": "ui.projectHub.action.qryListStatusReport.status"
    },
    {
      "actionId": "qryListWorkTask",
      "kind": "query",
      "commandRef": "qryListWorkTask",
      "routeKey": "buildFlowFsm.projectHub.qryListWorkTask",
      "purpose": "Listar Tarefa de trabalho",
      "methodName": "loadQryListWorkTask",
      "handlerName": "handleQryListWorkTaskClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectHub.data.qryListWorkTask"
      ],
      "statusStateKey": "ui.projectHub.action.qryListWorkTask.status"
    },
    {
      "actionId": "set.qryClientBillingSummaryViewClientBillingSummaryClientId",
      "kind": "stateSetter",
      "stateKey": "ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
      "methodName": "setQryClientBillingSummaryViewClientBillingSummaryClientId",
      "handlerName": "handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange"
    },
    {
      "actionId": "set.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
      "methodName": "setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId",
      "handlerName": "handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange"
    },
    {
      "actionId": "set.qryProjectTimelineViewProjectTimelineProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId",
      "methodName": "setQryProjectTimelineViewProjectTimelineProjectId",
      "handlerName": "handleQryProjectTimelineViewProjectTimelineProjectIdChange"
    },
    {
      "actionId": "set.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
      "methodName": "setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId",
      "handlerName": "handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListProject",
      "stateKey": "ui.projectHub.data.qryListProject"
    },
    {
      "actionId": "qryProjectDashboardView",
      "stateKey": "ui.projectHub.data.qryProjectDashboardView"
    },
    {
      "actionId": "qryListChangeOrder",
      "stateKey": "ui.projectHub.data.qryListChangeOrder"
    },
    {
      "actionId": "qryListInvoice",
      "stateKey": "ui.projectHub.data.qryListInvoice"
    },
    {
      "actionId": "qryListMaterialUsage",
      "stateKey": "ui.projectHub.data.qryListMaterialUsage"
    },
    {
      "actionId": "qryListProjectCoordinationAssignment",
      "stateKey": "ui.projectHub.data.qryListProjectCoordinationAssignment"
    },
    {
      "actionId": "qryListStatusReport",
      "stateKey": "ui.projectHub.data.qryListStatusReport"
    },
    {
      "actionId": "qryListWorkTask",
      "stateKey": "ui.projectHub.data.qryListWorkTask"
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
    "section.projectHub.collection.title": "Carteira e busca",
    "organism.projectHub.qryListProject.title": "Listar Obra",
    "intent.projectHub.qryListProject.list.title": "Listar Obra",
    "intent.projectHub.qryListProject.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryListProject.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryListProject.list.column.clientId.label": "Client Id",
    "intent.projectHub.qryListProject.list.column.name.label": "Name",
    "intent.projectHub.qryListProject.list.column.address.label": "Address",
    "intent.projectHub.qryListProject.list.column.status.label": "Status",
    "intent.projectHub.qryListProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.projectHub.qryListProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.projectHub.qryListProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.projectHub.record.title": "Registro selecionado e contexto operacional",
    "organism.projectHub.qryClientBillingSummaryView.title": "Consultar o resumo de faturamento",
    "intent.projectHub.qryClientBillingSummaryView.list.title": "Consultar o resumo de faturamento",
    "intent.projectHub.qryClientBillingSummaryView.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryClientBillingSummaryView.list.column.clientId.label": "Client Id",
    "intent.projectHub.qryClientBillingSummaryView.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label": "Approved Change Order References",
    "intent.projectHub.qryClientBillingSummaryView.list.column.invoiceReferences.label": "Invoice References",
    "intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label": "Approved Change Order Amount",
    "intent.projectHub.qryClientBillingSummaryView.list.column.billableAmount.label": "Billable Amount",
    "intent.projectHub.qryClientBillingSummaryView.list.column.invoicedAmount.label": "Invoiced Amount",
    "intent.projectHub.qryClientBillingSummaryView.list.column.clientAvailableAmount.label": "Client Available Amount",
    "organism.projectHub.qryProjectDashboardView.title": "Consultar o painel de obras",
    "intent.projectHub.qryProjectDashboardView.list.title": "Consultar o painel de obras",
    "intent.projectHub.qryProjectDashboardView.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryProjectDashboardView.list.column.activeProjects.label": "Active Projects",
    "intent.projectHub.qryProjectDashboardView.list.column.activeProjectCount.label": "Active Project Count",
    "intent.projectHub.qryProjectDashboardView.list.column.totalBudget.label": "Total Budget",
    "intent.projectHub.qryProjectDashboardView.list.column.totalActualCost.label": "Total Actual Cost",
    "intent.projectHub.qryProjectDashboardView.list.column.budgetVariance.label": "Budget Variance",
    "intent.projectHub.qryProjectDashboardView.list.column.costAttentionProjects.label": "Cost Attention Projects",
    "intent.projectHub.qryProjectDashboardView.list.column.upcomingTasks.label": "Upcoming Tasks",
    "organism.projectHub.qryProjectExecutionOverviewView.title": "Analisar a execução da obra",
    "intent.projectHub.qryProjectExecutionOverviewView.list.title": "Analisar a execução da obra",
    "intent.projectHub.qryProjectExecutionOverviewView.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.projectName.label": "Project Name",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.projectStatus.label": "Project Status",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.workTaskIds.label": "Work Task Ids",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.taskSummary.label": "Task Summary",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label": "Upcoming Commitments",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.timeLogIds.label": "Time Log Ids",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label": "Total Logged Hours",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageIds.label": "Material Usage Ids",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label": "Material Usage Summary",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.actualLaborCost.label": "Actual Labor Cost",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label": "Actual Material Cost",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.actualCost.label": "Actual Cost",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.budgetAmount.label": "Budget Amount",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.costVariance.label": "Cost Variance",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderIds.label": "Change Order Ids",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label": "Change Order Impact Summary",
    "intent.projectHub.qryProjectExecutionOverviewView.list.column.calculatedAt.label": "Calculated At",
    "organism.projectHub.qryProjectTimelineView.title": "Consultar o cronograma da obra",
    "intent.projectHub.qryProjectTimelineView.list.title": "Consultar o cronograma da obra",
    "intent.projectHub.qryProjectTimelineView.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryProjectTimelineView.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryProjectTimelineView.list.column.workTasks.label": "Work Tasks",
    "intent.projectHub.qryProjectTimelineView.list.column.scheduleEntries.label": "Schedule Entries",
    "organism.projectHub.qryScheduleRiskAssessmentView.title": "Consultar tarefas em risco de atraso",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.title": "Consultar tarefas em risco de atraso",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.workTaskId.label": "Work Task Id",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.taskStatus.label": "Task Status",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.dueDate.label": "Due Date",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.progressPercent.label": "Progress Percent",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskIndicators.label": "Risk Indicators",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskExplanation.label": "Risk Explanation",
    "intent.projectHub.qryScheduleRiskAssessmentView.list.column.assessedAt.label": "Assessed At",
    "organism.projectHub.qryListChangeOrder.title": "Listar Ordem de mudança",
    "intent.projectHub.qryListChangeOrder.list.title": "Listar Ordem de mudança",
    "intent.projectHub.qryListChangeOrder.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryListChangeOrder.list.column.changeOrderId.label": "Change Order Id",
    "intent.projectHub.qryListChangeOrder.list.column.clientRef.label": "Client Ref",
    "intent.projectHub.qryListChangeOrder.list.column.projectRef.label": "Project Ref",
    "intent.projectHub.qryListChangeOrder.list.column.description.label": "Description",
    "intent.projectHub.qryListChangeOrder.list.column.scopeImpact.label": "Scope Impact",
    "intent.projectHub.qryListChangeOrder.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.projectHub.qryListChangeOrder.list.column.changeAmount.label": "Change Amount",
    "intent.projectHub.qryListChangeOrder.list.column.submittedAt.label": "Submitted At",
    "intent.projectHub.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.projectHub.qryListChangeOrder.list.column.status.label": "Status",
    "organism.projectHub.qryListInvoice.title": "Listar Fatura",
    "intent.projectHub.qryListInvoice.list.title": "Listar Fatura",
    "intent.projectHub.qryListInvoice.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryListInvoice.list.column.invoiceId.label": "Invoice Id",
    "intent.projectHub.qryListInvoice.list.column.clientId.label": "Client Id",
    "intent.projectHub.qryListInvoice.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryListInvoice.list.column.commercialReference.label": "Commercial Reference",
    "intent.projectHub.qryListInvoice.list.column.amount.label": "Amount",
    "intent.projectHub.qryListInvoice.list.column.status.label": "Status",
    "organism.projectHub.qryListMaterialUsage.title": "Listar Consumo de material",
    "intent.projectHub.qryListMaterialUsage.list.title": "Listar Consumo de material",
    "intent.projectHub.qryListMaterialUsage.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryListMaterialUsage.list.column.materialUsageId.label": "Material Usage Id",
    "intent.projectHub.qryListMaterialUsage.list.column.status.label": "Status",
    "intent.projectHub.qryListMaterialUsage.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryListMaterialUsage.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.projectHub.qryListMaterialUsage.list.column.inventoryBalanceId.label": "Inventory Balance Id",
    "intent.projectHub.qryListMaterialUsage.list.column.quantity.label": "Quantity",
    "intent.projectHub.qryListMaterialUsage.list.column.usageDescription.label": "Usage Description",
    "intent.projectHub.qryListMaterialUsage.list.column.consumedOn.label": "Consumed On",
    "intent.projectHub.qryListMaterialUsage.list.column.unitCostBasis.label": "Unit Cost Basis",
    "organism.projectHub.qryListProjectCoordinationAssignment.title": "Listar Atribuição de coordenação da obra",
    "intent.projectHub.qryListProjectCoordinationAssignment.list.title": "Listar Atribuição de coordenação da obra",
    "intent.projectHub.qryListProjectCoordinationAssignment.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label": "Project Coordination Assignment Id",
    "intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label": "Field Coordinator Id",
    "intent.projectHub.qryListProjectCoordinationAssignment.list.column.status.label": "Status",
    "organism.projectHub.qryListStatusReport.title": "Listar Relatório de status",
    "intent.projectHub.qryListStatusReport.list.title": "Listar Relatório de status",
    "intent.projectHub.qryListStatusReport.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryListStatusReport.list.column.statusReportId.label": "Status Report Id",
    "intent.projectHub.qryListStatusReport.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryListStatusReport.list.column.status.label": "Status",
    "intent.projectHub.qryListStatusReport.list.column.title.label": "Title",
    "intent.projectHub.qryListStatusReport.list.column.content.label": "Content",
    "intent.projectHub.qryListStatusReport.list.column.communicatedRisks.label": "Communicated Risks",
    "intent.projectHub.qryListStatusReport.list.column.generatedAt.label": "Generated At",
    "intent.projectHub.qryListStatusReport.list.column.generatedByUserId.label": "Generated By User Id",
    "intent.projectHub.qryListStatusReport.list.column.publishedAt.label": "Published At",
    "intent.projectHub.qryListStatusReport.list.column.publishedByUserId.label": "Published By User Id",
    "intent.projectHub.qryListStatusReport.list.column.withdrawnAt.label": "Withdrawn At",
    "organism.projectHub.qryListWorkTask.title": "Listar Tarefa de trabalho",
    "intent.projectHub.qryListWorkTask.list.title": "Listar Tarefa de trabalho",
    "intent.projectHub.qryListWorkTask.list.empty": "Nenhum registro encontrado",
    "intent.projectHub.qryListWorkTask.list.column.workTaskId.label": "Work Task Id",
    "intent.projectHub.qryListWorkTask.list.column.projectId.label": "Project Id",
    "intent.projectHub.qryListWorkTask.list.column.assignedFieldWorkerId.label": "Assigned Field Worker Id",
    "intent.projectHub.qryListWorkTask.list.column.description.label": "Description",
    "intent.projectHub.qryListWorkTask.list.column.dueDate.label": "Due Date",
    "intent.projectHub.qryListWorkTask.list.column.status.label": "Status",
    "intent.projectHub.qryListWorkTask.list.column.progressUpdate.label": "Progress Update",
    "section.projectHub.supportingActions.title": "Contexto e carregamento",
    "organism.projectHub.contextual-transition-actions10.title": "Contextual transition actions",
    "intent.projectHub.contextual-transition-actions10.content.title": "Contextual transition actions",
    "section.projectHub.portfolio.title": "Carteira e busca",
    "section.projectHub.selected-project.title": "Obra selecionada e diagnóstico",
    "section.projectHub.operational-records.title": "Registros de apoio"
  },
  "automation": {
    "statePrefix": "ui.projectHub",
    "stateKeys": [
      "ui.projectHub.status",
      "ui.projectHub.action.qryListProject.status",
      "ui.projectHub.data.qryListProject",
      "ui.projectHub.action.qryClientBillingSummaryView.status",
      "ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
      "ui.projectHub.data.qryClientBillingSummaryView",
      "ui.projectHub.action.qryProjectDashboardView.status",
      "ui.projectHub.data.qryProjectDashboardView",
      "ui.projectHub.action.qryProjectExecutionOverviewView.status",
      "ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
      "ui.projectHub.data.qryProjectExecutionOverviewView",
      "ui.projectHub.action.qryProjectTimelineView.status",
      "ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId",
      "ui.projectHub.data.qryProjectTimelineView",
      "ui.projectHub.action.qryScheduleRiskAssessmentView.status",
      "ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
      "ui.projectHub.data.qryScheduleRiskAssessmentView",
      "ui.projectHub.action.qryListChangeOrder.status",
      "ui.projectHub.data.qryListChangeOrder",
      "ui.projectHub.action.qryListInvoice.status",
      "ui.projectHub.data.qryListInvoice",
      "ui.projectHub.action.qryListMaterialUsage.status",
      "ui.projectHub.data.qryListMaterialUsage",
      "ui.projectHub.action.qryListProjectCoordinationAssignment.status",
      "ui.projectHub.data.qryListProjectCoordinationAssignment",
      "ui.projectHub.action.qryListStatusReport.status",
      "ui.projectHub.data.qryListStatusReport",
      "ui.projectHub.action.qryListWorkTask.status",
      "ui.projectHub.data.qryListWorkTask"
    ],
    "actionIds": [
      "qryListProject",
      "qryClientBillingSummaryView",
      "qryProjectDashboardView",
      "qryProjectExecutionOverviewView",
      "qryProjectTimelineView",
      "qryScheduleRiskAssessmentView",
      "qryListChangeOrder",
      "qryListInvoice",
      "qryListMaterialUsage",
      "qryListProjectCoordinationAssignment",
      "qryListStatusReport",
      "qryListWorkTask",
      "set.qryClientBillingSummaryViewClientBillingSummaryClientId",
      "set.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId",
      "set.qryProjectTimelineViewProjectTimelineProjectId",
      "set.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectHub__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/projectHub.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/projectHub.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/projectHub.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly",
      "activeProjectCostVisibility",
      "unfinishedWorkTask"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
