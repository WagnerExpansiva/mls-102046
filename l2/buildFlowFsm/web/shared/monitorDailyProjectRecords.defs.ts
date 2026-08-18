/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "monitorDailyProjectRecords",
  "pageName": "Acompanhar registros diários da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmMonitorDailyProjectRecordsBase",
  "routePattern": "/buildFlowFsm/monitorDailyProjectRecords",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:monitorDailyProjectRecords",
    "contract:buildFlowFsm.monitorDailyProjectRecords.qryLocateProject",
    "contract:buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs",
    "contract:buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages",
    "contract:buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview"
  ],
  "operationIds": [
    "inspectProjectExecutionOverview",
    "inspectProjectMaterialUsages",
    "inspectProjectTimeLogs",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "monitorDailyProjectRecords",
    "workspaceKind": "operation",
    "actor": "fieldCoordinator",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectProjectExecutionOverview",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectExecutionOverview.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectMaterialUsages",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectMaterialUsages.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectTimeLogs",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectTimeLogs.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateProject.defs.ts"
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
        },
        {
          "operationId": "inspectProjectMaterialUsages",
          "commandName": "qryInspectProjectMaterialUsages",
          "steps": [
            "Consultar os consumos de materiais",
            "Consumos associados à obra estão visíveis."
          ]
        },
        {
          "operationId": "inspectProjectTimeLogs",
          "commandName": "qryInspectProjectTimeLogs",
          "steps": [
            "Consultar os registros diários de horas",
            "Registros de horas da obra estão visíveis."
          ]
        },
        {
          "operationId": "locateProject",
          "commandName": "qryLocateProject",
          "steps": [
            "Localizar a própria obra",
            "Uma obra associada ao cliente está selecionada."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/monitorDailyProjectRecords.ts",
    "contracts": [
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryInspectProjectTimeLogs",
        "routeConst": "qryInspectProjectTimeLogsRoute"
      },
      {
        "commandName": "qryInspectProjectMaterialUsages",
        "routeConst": "qryInspectProjectMaterialUsagesRoute"
      },
      {
        "commandName": "qryInspectProjectExecutionOverview",
        "routeConst": "qryInspectProjectExecutionOverviewRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/monitorDailyProjectRecords.defs.ts",
    "layoutId": "monitorDailyProjectRecords-status-overview"
  },
  "states": [
    {
      "stateKey": "ui.monitorDailyProjectRecords.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.action.qryLocateProject.status",
      "name": "qryLocateProjectState",
      "kind": "actionStatus",
      "actionRef": "qryLocateProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.data.qryLocateProject",
      "name": "qryLocateProjectData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateProject",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status",
      "name": "qryInspectProjectTimeLogsState",
      "kind": "actionStatus",
      "actionRef": "qryInspectProjectTimeLogs",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId",
      "name": "qryInspectProjectTimeLogsTimeLogTimeLogId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectProjectTimeLogs",
        "direction": "input",
        "field": "timeLogTimeLogId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs",
      "name": "qryInspectProjectTimeLogsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectProjectTimeLogs",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status",
      "name": "qryInspectProjectMaterialUsagesState",
      "kind": "actionStatus",
      "actionRef": "qryInspectProjectMaterialUsages",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId",
      "name": "qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectProjectMaterialUsages",
        "direction": "input",
        "field": "materialUsageMaterialUsageId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages",
      "name": "qryInspectProjectMaterialUsagesData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectProjectMaterialUsages",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status",
      "name": "qryInspectProjectExecutionOverviewState",
      "kind": "actionStatus",
      "actionRef": "qryInspectProjectExecutionOverview",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "name": "qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectProjectExecutionOverview",
        "direction": "input",
        "field": "projectExecutionOverviewProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview",
      "name": "qryInspectProjectExecutionOverviewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectProjectExecutionOverview",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.monitorDailyProjectRecords.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.monitorDailyProjectRecords.data.qryLocateProject"
      ],
      "statusStateKey": "ui.monitorDailyProjectRecords.action.qryLocateProject.status"
    },
    {
      "actionId": "qryInspectProjectTimeLogs",
      "kind": "query",
      "commandRef": "qryInspectProjectTimeLogs",
      "routeKey": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs",
      "purpose": "Consultar os registros diários de horas",
      "methodName": "loadQryInspectProjectTimeLogs",
      "handlerName": "handleQryInspectProjectTimeLogsClick",
      "inputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId"
      ],
      "outputStateKeys": [
        "ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs"
      ],
      "statusStateKey": "ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status"
    },
    {
      "actionId": "qryInspectProjectMaterialUsages",
      "kind": "query",
      "commandRef": "qryInspectProjectMaterialUsages",
      "routeKey": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages",
      "purpose": "Consultar os consumos de materiais",
      "methodName": "loadQryInspectProjectMaterialUsages",
      "handlerName": "handleQryInspectProjectMaterialUsagesClick",
      "inputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId"
      ],
      "outputStateKeys": [
        "ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages"
      ],
      "statusStateKey": "ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status"
    },
    {
      "actionId": "qryInspectProjectExecutionOverview",
      "kind": "query",
      "commandRef": "qryInspectProjectExecutionOverview",
      "routeKey": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview",
      "purpose": "Analisar a execução da obra",
      "methodName": "loadQryInspectProjectExecutionOverview",
      "handlerName": "handleQryInspectProjectExecutionOverviewClick",
      "inputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "outputStateKeys": [
        "ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview"
      ],
      "statusStateKey": "ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status"
    },
    {
      "actionId": "set.qryInspectProjectTimeLogsTimeLogTimeLogId",
      "kind": "stateSetter",
      "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId",
      "methodName": "setQryInspectProjectTimeLogsTimeLogTimeLogId",
      "handlerName": "handleQryInspectProjectTimeLogsTimeLogTimeLogIdChange"
    },
    {
      "actionId": "set.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId",
      "kind": "stateSetter",
      "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId",
      "methodName": "setQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId",
      "handlerName": "handleQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageIdChange"
    },
    {
      "actionId": "set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "methodName": "setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "handlerName": "handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.monitorDailyProjectRecords.data.qryLocateProject"
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
    "section.monitorDailyProjectRecords.project-selection.title": "Seleção da obra",
    "organism.monitorDailyProjectRecords.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label": "Name",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.address.label": "Address",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label": "Status",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.monitorDailyProjectRecords.execution-monitoring.title": "Acompanhamento da execução",
    "organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title": "Analisar a execução da obra",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title": "Analisar a execução da obra",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.empty": "Nenhum registro encontrado",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectId.label": "Project Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectName.label": "Project Name",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectStatus.label": "Project Status",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.workTaskIds.label": "Work Task Ids",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label": "Task Summary",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label": "Upcoming Commitments",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.timeLogIds.label": "Time Log Ids",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label": "Total Logged Hours",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label": "Material Usage Ids",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label": "Material Usage Summary",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label": "Actual Labor Cost",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label": "Actual Material Cost",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label": "Actual Cost",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label": "Budget Amount",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label": "Cost Variance",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label": "Change Order Ids",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label": "Change Order Impact Summary",
    "intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.calculatedAt.label": "Calculated At",
    "organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title": "Consultar os registros diários de horas",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title": "Consultar os registros diários de horas",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty": "Nenhum registro encontrado",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.timeLogId.label": "Time Log Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label": "Status",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workTaskId.label": "Work Task Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.fieldWorkerId.label": "Field Worker Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label": "Work Date",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label": "Hours Worked",
    "intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hourlyLaborCost.label": "Hourly Labor Cost",
    "organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title": "Consultar os consumos de materiais",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title": "Consultar os consumos de materiais",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty": "Nenhum registro encontrado",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.materialUsageId.label": "Material Usage Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.status.label": "Status",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.projectId.label": "Project Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryBalanceId.label": "Inventory Balance Id",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label": "Quantity",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label": "Usage Description",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label": "Consumed On",
    "intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label": "Unit Cost Basis",
    "section.monitorDailyProjectRecords.project-monitoring.title": "Acompanhamento da obra",
    "section.monitorDailyProjectRecords.project-selection-and-overview.title": "Seleção e visão executiva da obra",
    "section.monitorDailyProjectRecords.daily-records-inspection.title": "Registros diários para investigação"
  },
  "automation": {
    "statePrefix": "ui.monitorDailyProjectRecords",
    "stateKeys": [
      "ui.monitorDailyProjectRecords.status",
      "ui.monitorDailyProjectRecords.action.qryLocateProject.status",
      "ui.monitorDailyProjectRecords.data.qryLocateProject",
      "ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status",
      "ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId",
      "ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs",
      "ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status",
      "ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId",
      "ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages",
      "ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status",
      "ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview"
    ],
    "actionIds": [
      "qryLocateProject",
      "qryInspectProjectTimeLogs",
      "qryInspectProjectMaterialUsages",
      "qryInspectProjectExecutionOverview",
      "set.qryInspectProjectTimeLogsTimeLogTimeLogId",
      "set.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId",
      "set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId"
    ]
  }
};

export const pipeline = [
  {
    "id": "monitorDailyProjectRecords__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/monitorDailyProjectRecords.ts",
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
