/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordWorkTime",
  "pageName": "Registrar horas trabalhadas",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmRecordWorkTimeBase",
  "routePattern": "/buildFlowFsm/recordWorkTime",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:recordWorkTime",
    "contract:buildFlowFsm.recordWorkTime.qryLocateFieldWorker",
    "contract:buildFlowFsm.recordWorkTime.qryLocateWorkTask",
    "contract:buildFlowFsm.recordWorkTime.cmdCreateTimeLog",
    "contract:buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator"
  ],
  "operationIds": [
    "createTimeLog",
    "handoffTimeLogToFieldCoordinator",
    "locateFieldWorker",
    "locateWorkTask"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "recordWorkTime",
    "workspaceKind": "operation",
    "actor": "fieldWorker",
    "entity": "TimeLog",
    "owners": [
      {
        "kind": "operation",
        "id": "createTimeLog",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createTimeLog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "handoffTimeLogToFieldCoordinator",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffTimeLogToFieldCoordinator.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateFieldWorker",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateFieldWorker.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateWorkTask.defs.ts"
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
          "operationId": "handoffTimeLogToFieldCoordinator",
          "commandName": "cmdHandoffTimeLogToFieldCoordinator",
          "steps": [
            "Encaminhar o registro diário",
            "O coordenador recebe o registro de horas para acompanhamento."
          ]
        },
        {
          "operationId": "locateFieldWorker",
          "commandName": "qryLocateFieldWorker",
          "steps": [
            "Confirmar o trabalhador",
            "O trabalhador que realizou o trabalho está selecionado no diretório da organização."
          ]
        },
        {
          "operationId": "locateWorkTask",
          "commandName": "qryLocateWorkTask",
          "steps": [
            "Localizar a tarefa executada",
            "Uma tarefa da obra está selecionada para o registro."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/recordWorkTime.ts",
    "contracts": [
      {
        "commandName": "qryLocateFieldWorker",
        "routeConst": "qryLocateFieldWorkerRoute"
      },
      {
        "commandName": "qryLocateWorkTask",
        "routeConst": "qryLocateWorkTaskRoute"
      },
      {
        "commandName": "cmdCreateTimeLog",
        "routeConst": "cmdCreateTimeLogRoute"
      },
      {
        "commandName": "cmdHandoffTimeLogToFieldCoordinator",
        "routeConst": "cmdHandoffTimeLogToFieldCoordinatorRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/recordWorkTime.defs.ts",
    "layoutId": "recordWorkTime-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.recordWorkTime.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordWorkTime.action.qryLocateFieldWorker.status",
      "name": "qryLocateFieldWorkerState",
      "kind": "actionStatus",
      "actionRef": "qryLocateFieldWorker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.recordWorkTime.data.qryLocateFieldWorker",
      "name": "qryLocateFieldWorkerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateFieldWorker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.recordWorkTime.action.qryLocateWorkTask.status",
      "name": "qryLocateWorkTaskState",
      "kind": "actionStatus",
      "actionRef": "qryLocateWorkTask",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.recordWorkTime.data.qryLocateWorkTask",
      "name": "qryLocateWorkTaskData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateWorkTask",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.recordWorkTime.action.cmdCreateTimeLog.status",
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
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId",
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
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.workDate",
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
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked",
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
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost",
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
      "stateKey": "ui.recordWorkTime.output.cmdCreateTimeLog",
      "name": "cmdCreateTimeLogOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateTimeLog",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.recordWorkTime.action.cmdCreateTimeLog.error",
      "name": "cmdCreateTimeLogError",
      "kind": "actionError",
      "actionRef": "cmdCreateTimeLog",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status",
      "name": "cmdHandoffTimeLogToFieldCoordinatorState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffTimeLogToFieldCoordinator",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId",
      "name": "cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffTimeLogToFieldCoordinator",
        "direction": "input",
        "field": "timeLogTimeLogId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate",
      "name": "cmdHandoffTimeLogToFieldCoordinatorWorkDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffTimeLogToFieldCoordinator",
        "direction": "input",
        "field": "workDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked",
      "name": "cmdHandoffTimeLogToFieldCoordinatorHoursWorked",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffTimeLogToFieldCoordinator",
        "direction": "input",
        "field": "hoursWorked"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost",
      "name": "cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffTimeLogToFieldCoordinator",
        "direction": "input",
        "field": "hourlyLaborCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator",
      "name": "cmdHandoffTimeLogToFieldCoordinatorOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffTimeLogToFieldCoordinator",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error",
      "name": "cmdHandoffTimeLogToFieldCoordinatorError",
      "kind": "actionError",
      "actionRef": "cmdHandoffTimeLogToFieldCoordinator",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateFieldWorker",
      "kind": "query",
      "commandRef": "qryLocateFieldWorker",
      "routeKey": "buildFlowFsm.recordWorkTime.qryLocateFieldWorker",
      "purpose": "Selecionar o trabalhador responsável",
      "methodName": "loadQryLocateFieldWorker",
      "handlerName": "handleQryLocateFieldWorkerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.recordWorkTime.data.qryLocateFieldWorker"
      ],
      "statusStateKey": "ui.recordWorkTime.action.qryLocateFieldWorker.status"
    },
    {
      "actionId": "qryLocateWorkTask",
      "kind": "query",
      "commandRef": "qryLocateWorkTask",
      "routeKey": "buildFlowFsm.recordWorkTime.qryLocateWorkTask",
      "purpose": "Localizar a tarefa atribuída",
      "methodName": "loadQryLocateWorkTask",
      "handlerName": "handleQryLocateWorkTaskClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.recordWorkTime.data.qryLocateWorkTask"
      ],
      "statusStateKey": "ui.recordWorkTime.action.qryLocateWorkTask.status"
    },
    {
      "actionId": "cmdCreateTimeLog",
      "kind": "command",
      "commandRef": "cmdCreateTimeLog",
      "routeKey": "buildFlowFsm.recordWorkTime.cmdCreateTimeLog",
      "purpose": "Registrar as horas trabalhadas",
      "methodName": "cmdCreateTimeLog",
      "handlerName": "handleCmdCreateTimeLogClick",
      "inputStateKeys": [
        "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId",
        "ui.recordWorkTime.input.cmdCreateTimeLog.workDate",
        "ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked",
        "ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId"
      ],
      "outputStateKeys": [
        "ui.recordWorkTime.output.cmdCreateTimeLog"
      ],
      "statusStateKey": "ui.recordWorkTime.action.cmdCreateTimeLog.status",
      "errorStateKey": "ui.recordWorkTime.action.cmdCreateTimeLog.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateTimeLog.success",
        "errorMessageKey": "action.cmdCreateTimeLog.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId",
        "ui.recordWorkTime.input.cmdCreateTimeLog.workDate",
        "ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked",
        "ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost"
      ],
      "refreshActionIds": [
        "qryLocateFieldWorker",
        "qryLocateWorkTask"
      ]
    },
    {
      "actionId": "cmdHandoffTimeLogToFieldCoordinator",
      "kind": "command",
      "commandRef": "cmdHandoffTimeLogToFieldCoordinator",
      "routeKey": "buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator",
      "purpose": "Encaminhar o registro diário",
      "methodName": "cmdHandoffTimeLogToFieldCoordinator",
      "handlerName": "handleCmdHandoffTimeLogToFieldCoordinatorClick",
      "inputStateKeys": [
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId"
      ],
      "outputStateKeys": [
        "ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator"
      ],
      "statusStateKey": "ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status",
      "errorStateKey": "ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffTimeLogToFieldCoordinator.success",
        "errorMessageKey": "action.cmdHandoffTimeLogToFieldCoordinator.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost"
      ],
      "refreshActionIds": [
        "qryLocateFieldWorker",
        "qryLocateWorkTask"
      ]
    },
    {
      "actionId": "set.cmdCreateTimeLogWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId",
      "methodName": "setCmdCreateTimeLogWorkTaskWorkTaskId",
      "handlerName": "handleCmdCreateTimeLogWorkTaskWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdCreateTimeLogWorkDate",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.workDate",
      "methodName": "setCmdCreateTimeLogWorkDate",
      "handlerName": "handleCmdCreateTimeLogWorkDateChange"
    },
    {
      "actionId": "set.cmdCreateTimeLogHoursWorked",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked",
      "methodName": "setCmdCreateTimeLogHoursWorked",
      "handlerName": "handleCmdCreateTimeLogHoursWorkedChange"
    },
    {
      "actionId": "set.cmdCreateTimeLogHourlyLaborCost",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost",
      "methodName": "setCmdCreateTimeLogHourlyLaborCost",
      "handlerName": "handleCmdCreateTimeLogHourlyLaborCostChange"
    },
    {
      "actionId": "set.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId",
      "methodName": "setCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId",
      "handlerName": "handleCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogIdChange"
    },
    {
      "actionId": "set.cmdHandoffTimeLogToFieldCoordinatorWorkDate",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate",
      "methodName": "setCmdHandoffTimeLogToFieldCoordinatorWorkDate",
      "handlerName": "handleCmdHandoffTimeLogToFieldCoordinatorWorkDateChange"
    },
    {
      "actionId": "set.cmdHandoffTimeLogToFieldCoordinatorHoursWorked",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked",
      "methodName": "setCmdHandoffTimeLogToFieldCoordinatorHoursWorked",
      "handlerName": "handleCmdHandoffTimeLogToFieldCoordinatorHoursWorkedChange"
    },
    {
      "actionId": "set.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost",
      "kind": "stateSetter",
      "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost",
      "methodName": "setCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost",
      "handlerName": "handleCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCostChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateFieldWorker",
      "stateKey": "ui.recordWorkTime.data.qryLocateFieldWorker"
    },
    {
      "actionId": "qryLocateWorkTask",
      "stateKey": "ui.recordWorkTime.data.qryLocateWorkTask"
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
    "section.recordWorkTime.locateFieldWorker.title": "Confirmar trabalhador",
    "organism.recordWorkTime.qryLocateFieldWorker.title": "Selecionar o trabalhador responsável",
    "intent.recordWorkTime.qryLocateFieldWorker.list.title": "Selecionar o trabalhador responsável",
    "intent.recordWorkTime.qryLocateFieldWorker.list.empty": "Nenhum registro encontrado",
    "intent.recordWorkTime.qryLocateFieldWorker.list.column.platformUserId.label": "Platform User Id",
    "section.recordWorkTime.locateWorkTask.title": "Localizar tarefa",
    "organism.recordWorkTime.qryLocateWorkTask.title": "Localizar a tarefa atribuída",
    "intent.recordWorkTime.qryLocateWorkTask.list.title": "Localizar a tarefa atribuída",
    "intent.recordWorkTime.qryLocateWorkTask.list.empty": "Nenhum registro encontrado",
    "intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label": "Work Task Id",
    "intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label": "Project Id",
    "intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label": "Assigned Field Worker Id",
    "intent.recordWorkTime.qryLocateWorkTask.list.column.description.label": "Description",
    "intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label": "Due Date",
    "intent.recordWorkTime.qryLocateWorkTask.list.column.status.label": "Status",
    "intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label": "Progress Update",
    "section.recordWorkTime.createTimeLog.title": "Registrar horas",
    "organism.recordWorkTime.cmdCreateTimeLog.title": "Registrar as horas trabalhadas",
    "intent.recordWorkTime.cmdCreateTimeLog.form.title": "Registrar as horas trabalhadas",
    "intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog": "Registrar as horas trabalhadas",
    "intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label": "Work Date",
    "intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label": "Hours Worked",
    "intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label": "Hourly Labor Cost",
    "section.recordWorkTime.handoffTimeLogToFieldCoordinator.title": "Encaminhar registro",
    "organism.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.title": "Encaminhar o registro diário",
    "intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title": "Encaminhar o registro diário",
    "intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator": "Encaminhar o registro diário",
    "intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label": "Work Date",
    "intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label": "Hours Worked",
    "intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label": "Hourly Labor Cost",
    "action.cmdCreateTimeLog.success": "Registrar as horas trabalhadas: OK",
    "action.cmdCreateTimeLog.error": "Registrar as horas trabalhadas: falhou",
    "action.cmdHandoffTimeLogToFieldCoordinator.success": "Encaminhar o registro diário: OK",
    "action.cmdHandoffTimeLogToFieldCoordinator.error": "Encaminhar o registro diário: falhou",
    "section.recordWorkTime.workLogWorkspace.title": "Registrar e encaminhar horas",
    "section.recordWorkTime.workContext.title": "Contexto do registro",
    "section.recordWorkTime.timeLogWorkspace.title": "Registro e acompanhamento"
  },
  "automation": {
    "statePrefix": "ui.recordWorkTime",
    "stateKeys": [
      "ui.recordWorkTime.status",
      "ui.recordWorkTime.action.qryLocateFieldWorker.status",
      "ui.recordWorkTime.data.qryLocateFieldWorker",
      "ui.recordWorkTime.action.qryLocateWorkTask.status",
      "ui.recordWorkTime.data.qryLocateWorkTask",
      "ui.recordWorkTime.action.cmdCreateTimeLog.status",
      "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId",
      "ui.recordWorkTime.input.cmdCreateTimeLog.workDate",
      "ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked",
      "ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost",
      "ui.recordWorkTime.output.cmdCreateTimeLog",
      "ui.recordWorkTime.action.cmdCreateTimeLog.error",
      "ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status",
      "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId",
      "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate",
      "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked",
      "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost",
      "ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator",
      "ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error"
    ],
    "actionIds": [
      "qryLocateFieldWorker",
      "qryLocateWorkTask",
      "cmdCreateTimeLog",
      "cmdHandoffTimeLogToFieldCoordinator",
      "set.cmdCreateTimeLogWorkTaskWorkTaskId",
      "set.cmdCreateTimeLogWorkDate",
      "set.cmdCreateTimeLogHoursWorked",
      "set.cmdCreateTimeLogHourlyLaborCost",
      "set.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId",
      "set.cmdHandoffTimeLogToFieldCoordinatorWorkDate",
      "set.cmdHandoffTimeLogToFieldCoordinatorHoursWorked",
      "set.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost"
    ]
  }
};

export const pipeline = [
  {
    "id": "recordWorkTime__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/recordWorkTime.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeWorkTask",
      "timeLogRequiresWorkerTaskAndPositiveHours"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
