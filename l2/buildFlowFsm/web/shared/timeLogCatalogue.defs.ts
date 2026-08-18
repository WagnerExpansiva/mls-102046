/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "timeLogCatalogue",
  "pageName": "Registro de horas",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmTimeLogCatalogueBase",
  "routePattern": "/buildFlowFsm/timeLogCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:timeLogCatalogue",
    "contract:buildFlowFsm.timeLogCatalogue.qryListTimeLog",
    "contract:buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog",
    "contract:buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
    "contract:buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog",
    "contract:buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker"
  ],
  "operationIds": [
    "createTimeLog",
    "deleteTimeLog",
    "listTimeLog",
    "listWorkTask",
    "updateTimeLog"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "timeLogCatalogue",
    "workspaceKind": "operation",
    "actor": "fieldCoordinator",
    "entity": "TimeLog",
    "owners": [
      {
        "kind": "operation",
        "id": "createTimeLog",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createTimeLog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteTimeLog",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteTimeLog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listTimeLog",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listTimeLog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateTimeLog",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateTimeLog.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createTimeLog",
          "commandName": "cmdCreateTimeLog",
          "steps": [
            "Registrar as horas trabalhadas",
            "Um registro diário vinculado ao trabalhador e à tarefa fica armazenado."
          ]
        },
        {
          "operationId": "deleteTimeLog",
          "commandName": "cmdDeleteTimeLog",
          "steps": [
            "Remover o registro escolhido."
          ]
        },
        {
          "operationId": "listTimeLog",
          "commandName": "qryListTimeLog",
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
        },
        {
          "operationId": "updateTimeLog",
          "commandName": "cmdUpdateTimeLog",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/timeLogCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListTimeLog",
        "routeConst": "qryListTimeLogRoute"
      },
      {
        "commandName": "cmdCreateTimeLog",
        "routeConst": "cmdCreateTimeLogRoute"
      },
      {
        "commandName": "cmdUpdateTimeLog",
        "routeConst": "cmdUpdateTimeLogRoute"
      },
      {
        "commandName": "cmdDeleteTimeLog",
        "routeConst": "cmdDeleteTimeLogRoute"
      },
      {
        "commandName": "qryWorkTaskPicker",
        "routeConst": "qryWorkTaskPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/timeLogCatalogue.defs.ts",
    "layoutId": "timeLogCatalogue-pos_workspace"
  },
  "states": [
    {
      "stateKey": "ui.timeLogCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.qryListTimeLog.status",
      "name": "qryListTimeLogState",
      "kind": "actionStatus",
      "actionRef": "qryListTimeLog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.timeLogCatalogue.data.qryListTimeLog",
      "name": "qryListTimeLogData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListTimeLog",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.cmdCreateTimeLog.status",
      "name": "cmdCreateTimeLogState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateTimeLog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
      "name": "cmdCreateTimeLogWorkTaskWorkTaskId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateTimeLog",
        "direction": "input",
        "field": "workTaskWorkTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
      "name": "cmdCreateTimeLogWorkDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateTimeLog",
        "direction": "input",
        "field": "workDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
      "name": "cmdCreateTimeLogHoursWorked",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateTimeLog",
        "direction": "input",
        "field": "hoursWorked"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost",
      "name": "cmdCreateTimeLogHourlyLaborCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateTimeLog",
        "direction": "input",
        "field": "hourlyLaborCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.output.cmdCreateTimeLog",
      "name": "cmdCreateTimeLogOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateTimeLog",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.cmdCreateTimeLog.error",
      "name": "cmdCreateTimeLogError",
      "kind": "actionError",
      "actionRef": "cmdCreateTimeLog",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.cmdUpdateTimeLog.status",
      "name": "cmdUpdateTimeLogState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateTimeLog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
      "name": "cmdUpdateTimeLogTimeLogId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "input",
        "field": "timeLogId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
      "name": "cmdUpdateTimeLogStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
      "name": "cmdUpdateTimeLogWorkTaskId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "input",
        "field": "workTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
      "name": "cmdUpdateTimeLogFieldWorkerId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "input",
        "field": "fieldWorkerId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
      "name": "cmdUpdateTimeLogWorkDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "input",
        "field": "workDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
      "name": "cmdUpdateTimeLogHoursWorked",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "input",
        "field": "hoursWorked"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost",
      "name": "cmdUpdateTimeLogHourlyLaborCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "input",
        "field": "hourlyLaborCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.output.cmdUpdateTimeLog",
      "name": "cmdUpdateTimeLogOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateTimeLog",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.cmdUpdateTimeLog.error",
      "name": "cmdUpdateTimeLogError",
      "kind": "actionError",
      "actionRef": "cmdUpdateTimeLog",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.cmdDeleteTimeLog.status",
      "name": "cmdDeleteTimeLogState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteTimeLog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId",
      "name": "cmdDeleteTimeLogTimeLogId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteTimeLog",
        "direction": "input",
        "field": "timeLogId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.output.cmdDeleteTimeLog",
      "name": "cmdDeleteTimeLogOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteTimeLog",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.cmdDeleteTimeLog.error",
      "name": "cmdDeleteTimeLogError",
      "kind": "actionError",
      "actionRef": "cmdDeleteTimeLog",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.timeLogCatalogue.action.qryWorkTaskPicker.status",
      "name": "qryWorkTaskPickerState",
      "kind": "actionStatus",
      "actionRef": "qryWorkTaskPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.timeLogCatalogue.data.qryWorkTaskPicker",
      "name": "qryWorkTaskPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryWorkTaskPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListTimeLog",
      "kind": "query",
      "commandRef": "qryListTimeLog",
      "routeKey": "buildFlowFsm.timeLogCatalogue.qryListTimeLog",
      "purpose": "Listar Registro de horas",
      "methodName": "loadQryListTimeLog",
      "handlerName": "handleQryListTimeLogClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.timeLogCatalogue.data.qryListTimeLog"
      ],
      "statusStateKey": "ui.timeLogCatalogue.action.qryListTimeLog.status"
    },
    {
      "actionId": "cmdCreateTimeLog",
      "kind": "command",
      "commandRef": "cmdCreateTimeLog",
      "routeKey": "buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog",
      "purpose": "Registrar as horas trabalhadas",
      "methodName": "cmdCreateTimeLog",
      "handlerName": "handleCmdCreateTimeLogClick",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId"
      ],
      "outputStateKeys": [
        "ui.timeLogCatalogue.output.cmdCreateTimeLog"
      ],
      "statusStateKey": "ui.timeLogCatalogue.action.cmdCreateTimeLog.status",
      "errorStateKey": "ui.timeLogCatalogue.action.cmdCreateTimeLog.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateTimeLog.success",
        "errorMessageKey": "action.cmdCreateTimeLog.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost"
      ],
      "refreshActionIds": [
        "qryListTimeLog",
        "qryWorkTaskPicker"
      ]
    },
    {
      "actionId": "cmdUpdateTimeLog",
      "kind": "command",
      "commandRef": "cmdUpdateTimeLog",
      "routeKey": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
      "purpose": "Atualizar Registro de horas",
      "methodName": "cmdUpdateTimeLog",
      "handlerName": "handleCmdUpdateTimeLogClick",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId"
      ],
      "outputStateKeys": [
        "ui.timeLogCatalogue.output.cmdUpdateTimeLog"
      ],
      "statusStateKey": "ui.timeLogCatalogue.action.cmdUpdateTimeLog.status",
      "errorStateKey": "ui.timeLogCatalogue.action.cmdUpdateTimeLog.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateTimeLog.success",
        "errorMessageKey": "action.cmdUpdateTimeLog.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost"
      ],
      "refreshActionIds": [
        "qryListTimeLog",
        "qryWorkTaskPicker"
      ]
    },
    {
      "actionId": "cmdDeleteTimeLog",
      "kind": "command",
      "commandRef": "cmdDeleteTimeLog",
      "routeKey": "buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog",
      "purpose": "Excluir Registro de horas",
      "methodName": "cmdDeleteTimeLog",
      "handlerName": "handleCmdDeleteTimeLogClick",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId"
      ],
      "outputStateKeys": [
        "ui.timeLogCatalogue.output.cmdDeleteTimeLog"
      ],
      "statusStateKey": "ui.timeLogCatalogue.action.cmdDeleteTimeLog.status",
      "errorStateKey": "ui.timeLogCatalogue.action.cmdDeleteTimeLog.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteTimeLog.success",
        "errorMessageKey": "action.cmdDeleteTimeLog.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId"
      ],
      "refreshActionIds": [
        "qryListTimeLog",
        "qryWorkTaskPicker"
      ]
    },
    {
      "actionId": "qryWorkTaskPicker",
      "kind": "query",
      "commandRef": "qryWorkTaskPicker",
      "routeKey": "buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker",
      "purpose": "Listar Tarefa de trabalho",
      "methodName": "loadQryWorkTaskPicker",
      "handlerName": "handleQryWorkTaskPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.timeLogCatalogue.data.qryWorkTaskPicker"
      ],
      "statusStateKey": "ui.timeLogCatalogue.action.qryWorkTaskPicker.status"
    },
    {
      "actionId": "set.cmdCreateTimeLogWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
      "methodName": "setCmdCreateTimeLogWorkTaskWorkTaskId",
      "handlerName": "handleCmdCreateTimeLogWorkTaskWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdCreateTimeLogWorkDate",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
      "methodName": "setCmdCreateTimeLogWorkDate",
      "handlerName": "handleCmdCreateTimeLogWorkDateChange"
    },
    {
      "actionId": "set.cmdCreateTimeLogHoursWorked",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
      "methodName": "setCmdCreateTimeLogHoursWorked",
      "handlerName": "handleCmdCreateTimeLogHoursWorkedChange"
    },
    {
      "actionId": "set.cmdCreateTimeLogHourlyLaborCost",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost",
      "methodName": "setCmdCreateTimeLogHourlyLaborCost",
      "handlerName": "handleCmdCreateTimeLogHourlyLaborCostChange"
    },
    {
      "actionId": "set.cmdUpdateTimeLogTimeLogId",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
      "methodName": "setCmdUpdateTimeLogTimeLogId",
      "handlerName": "handleCmdUpdateTimeLogTimeLogIdChange",
      "prefill": {
        "command": "cmdUpdateTimeLog",
        "sourceStateKey": "ui.timeLogCatalogue.data.qryListTimeLog",
        "sourceOutputShape": "array",
        "matchField": "timeLogId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status"
          },
          {
            "itemField": "fieldWorkerId",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId"
          },
          {
            "itemField": "workDate",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate"
          },
          {
            "itemField": "hoursWorked",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked"
          },
          {
            "itemField": "hourlyLaborCost",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateTimeLogStatus",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
      "methodName": "setCmdUpdateTimeLogStatus",
      "handlerName": "handleCmdUpdateTimeLogStatusChange"
    },
    {
      "actionId": "set.cmdUpdateTimeLogWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
      "methodName": "setCmdUpdateTimeLogWorkTaskId",
      "handlerName": "handleCmdUpdateTimeLogWorkTaskIdChange",
      "prefill": {
        "command": "cmdUpdateTimeLog",
        "sourceStateKey": "ui.timeLogCatalogue.data.qryListTimeLog",
        "sourceOutputShape": "array",
        "matchField": "workTaskId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status"
          },
          {
            "itemField": "fieldWorkerId",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId"
          },
          {
            "itemField": "workDate",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate"
          },
          {
            "itemField": "hoursWorked",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked"
          },
          {
            "itemField": "hourlyLaborCost",
            "targetStateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateTimeLogFieldWorkerId",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
      "methodName": "setCmdUpdateTimeLogFieldWorkerId",
      "handlerName": "handleCmdUpdateTimeLogFieldWorkerIdChange"
    },
    {
      "actionId": "set.cmdUpdateTimeLogWorkDate",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
      "methodName": "setCmdUpdateTimeLogWorkDate",
      "handlerName": "handleCmdUpdateTimeLogWorkDateChange"
    },
    {
      "actionId": "set.cmdUpdateTimeLogHoursWorked",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
      "methodName": "setCmdUpdateTimeLogHoursWorked",
      "handlerName": "handleCmdUpdateTimeLogHoursWorkedChange"
    },
    {
      "actionId": "set.cmdUpdateTimeLogHourlyLaborCost",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost",
      "methodName": "setCmdUpdateTimeLogHourlyLaborCost",
      "handlerName": "handleCmdUpdateTimeLogHourlyLaborCostChange"
    },
    {
      "actionId": "set.cmdDeleteTimeLogTimeLogId",
      "kind": "stateSetter",
      "stateKey": "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId",
      "methodName": "setCmdDeleteTimeLogTimeLogId",
      "handlerName": "handleCmdDeleteTimeLogTimeLogIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListTimeLog",
      "stateKey": "ui.timeLogCatalogue.data.qryListTimeLog"
    },
    {
      "actionId": "qryWorkTaskPicker",
      "stateKey": "ui.timeLogCatalogue.data.qryWorkTaskPicker"
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
    "section.timeLogCatalogue.recordList.title": "Localizar registros de horas",
    "organism.timeLogCatalogue.qryListTimeLog.title": "Listar Registro de horas",
    "intent.timeLogCatalogue.qryListTimeLog.list.title": "Listar Registro de horas",
    "intent.timeLogCatalogue.qryListTimeLog.list.empty": "Nenhum registro encontrado",
    "intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label": "Time Log Id",
    "intent.timeLogCatalogue.qryListTimeLog.list.column.status.label": "Status",
    "intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label": "Work Task Id",
    "intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label": "Field Worker Id",
    "intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label": "Work Date",
    "intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label": "Hours Worked",
    "intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label": "Hourly Labor Cost",
    "organism.timeLogCatalogue.cmdDeleteTimeLog.title": "Excluir Registro de horas",
    "intent.timeLogCatalogue.cmdDeleteTimeLog.form.title": "Excluir Registro de horas",
    "intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog": "Excluir Registro de horas",
    "section.timeLogCatalogue.recordForm.title": "Registrar ou corrigir horas",
    "organism.timeLogCatalogue.qryWorkTaskPicker.title": "Listar Tarefa de trabalho",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.title": "Listar Tarefa de trabalho",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.empty": "Nenhum registro encontrado",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label": "Work Task Id",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.column.projectId.label": "Project Id",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.column.assignedFieldWorkerId.label": "Assigned Field Worker Id",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label": "Description",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.column.dueDate.label": "Due Date",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.column.status.label": "Status",
    "intent.timeLogCatalogue.qryWorkTaskPicker.list.column.progressUpdate.label": "Progress Update",
    "organism.timeLogCatalogue.cmdCreateTimeLog.title": "Registrar as horas trabalhadas",
    "intent.timeLogCatalogue.cmdCreateTimeLog.form.title": "Registrar as horas trabalhadas",
    "intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog": "Registrar as horas trabalhadas",
    "intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label": "Work Date",
    "intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label": "Hours Worked",
    "intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label": "Hourly Labor Cost",
    "organism.timeLogCatalogue.cmdUpdateTimeLog.title": "Atualizar Registro de horas",
    "intent.timeLogCatalogue.cmdUpdateTimeLog.form.title": "Atualizar Registro de horas",
    "intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog": "Atualizar Registro de horas",
    "intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.status.label": "Status",
    "intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label": "Field Worker Id",
    "intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label": "Work Date",
    "intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label": "Hours Worked",
    "intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label": "Hourly Labor Cost",
    "action.cmdCreateTimeLog.success": "Registrar as horas trabalhadas: OK",
    "action.cmdCreateTimeLog.error": "Registrar as horas trabalhadas: falhou",
    "action.cmdUpdateTimeLog.success": "Atualizar Registro de horas: OK",
    "action.cmdUpdateTimeLog.error": "Atualizar Registro de horas: falhou",
    "action.cmdDeleteTimeLog.success": "Excluir Registro de horas: OK",
    "action.cmdDeleteTimeLog.error": "Excluir Registro de horas: falhou",
    "section.timeLogCatalogue.recordWorkspace.title": "Registros e edição"
  },
  "automation": {
    "statePrefix": "ui.timeLogCatalogue",
    "stateKeys": [
      "ui.timeLogCatalogue.status",
      "ui.timeLogCatalogue.action.qryListTimeLog.status",
      "ui.timeLogCatalogue.data.qryListTimeLog",
      "ui.timeLogCatalogue.action.cmdCreateTimeLog.status",
      "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
      "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
      "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
      "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost",
      "ui.timeLogCatalogue.output.cmdCreateTimeLog",
      "ui.timeLogCatalogue.action.cmdCreateTimeLog.error",
      "ui.timeLogCatalogue.action.cmdUpdateTimeLog.status",
      "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
      "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
      "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
      "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
      "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
      "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
      "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost",
      "ui.timeLogCatalogue.output.cmdUpdateTimeLog",
      "ui.timeLogCatalogue.action.cmdUpdateTimeLog.error",
      "ui.timeLogCatalogue.action.cmdDeleteTimeLog.status",
      "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId",
      "ui.timeLogCatalogue.output.cmdDeleteTimeLog",
      "ui.timeLogCatalogue.action.cmdDeleteTimeLog.error",
      "ui.timeLogCatalogue.action.qryWorkTaskPicker.status",
      "ui.timeLogCatalogue.data.qryWorkTaskPicker"
    ],
    "actionIds": [
      "qryListTimeLog",
      "cmdCreateTimeLog",
      "cmdUpdateTimeLog",
      "cmdDeleteTimeLog",
      "qryWorkTaskPicker",
      "set.cmdCreateTimeLogWorkTaskWorkTaskId",
      "set.cmdCreateTimeLogWorkDate",
      "set.cmdCreateTimeLogHoursWorked",
      "set.cmdCreateTimeLogHourlyLaborCost",
      "set.cmdUpdateTimeLogTimeLogId",
      "set.cmdUpdateTimeLogStatus",
      "set.cmdUpdateTimeLogWorkTaskId",
      "set.cmdUpdateTimeLogFieldWorkerId",
      "set.cmdUpdateTimeLogWorkDate",
      "set.cmdUpdateTimeLogHoursWorked",
      "set.cmdUpdateTimeLogHourlyLaborCost",
      "set.cmdDeleteTimeLogTimeLogId"
    ]
  }
};

export const pipeline = [
  {
    "id": "timeLogCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/timeLogCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeWorkTask",
      "timeLogRequiresWorkerTaskAndPositiveHours",
      "costEligibleTimeLog"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
