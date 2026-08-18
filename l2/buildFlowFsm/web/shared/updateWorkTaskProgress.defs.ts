/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateWorkTaskProgress",
  "pageName": "Atualizar andamento da tarefa",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmUpdateWorkTaskProgressBase",
  "routePattern": "/buildFlowFsm/updateWorkTaskProgress/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:updateWorkTaskProgress",
    "contract:buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask",
    "contract:buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask",
    "contract:buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator"
  ],
  "operationIds": [
    "handoffWorkTaskProgressToFieldCoordinator",
    "locateWorkTask",
    "updateWorkTask"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "updateWorkTaskProgress",
    "workspaceKind": "operation",
    "actor": "fieldWorker",
    "entity": "WorkTask",
    "owners": [
      {
        "kind": "operation",
        "id": "handoffWorkTaskProgressToFieldCoordinator",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffWorkTaskProgressToFieldCoordinator.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateWorkTask.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "handoffWorkTaskProgressToFieldCoordinator",
          "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
          "steps": [
            "Informar o andamento ao coordenador",
            "O coordenador recebe a tarefa com andamento atualizado."
          ]
        },
        {
          "operationId": "locateWorkTask",
          "commandName": "qryLocateWorkTask",
          "steps": [
            "Localizar a tarefa executada",
            "Uma tarefa da obra está selecionada para o registro."
          ]
        },
        {
          "operationId": "updateWorkTask",
          "commandName": "cmdUpdateWorkTask",
          "steps": [
            "Registrar o andamento da tarefa",
            "O status e o andamento atual ficam registrados."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/updateWorkTaskProgress.ts",
    "contracts": [
      {
        "commandName": "qryLocateWorkTask",
        "routeConst": "qryLocateWorkTaskRoute"
      },
      {
        "commandName": "cmdUpdateWorkTask",
        "routeConst": "cmdUpdateWorkTaskRoute"
      },
      {
        "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "routeConst": "cmdHandoffWorkTaskProgressToFieldCoordinatorRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/updateWorkTaskProgress.defs.ts",
    "layoutId": "updateWorkTaskProgress-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.updateWorkTaskProgress.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.action.qryLocateWorkTask.status",
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
      "stateKey": "ui.updateWorkTaskProgress.data.qryLocateWorkTask",
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
      "stateKey": "ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status",
      "name": "cmdUpdateWorkTaskState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateWorkTask",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId",
      "name": "cmdUpdateWorkTaskProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId",
      "name": "cmdUpdateWorkTaskWorkTaskWorkTaskId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "workTaskWorkTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description",
      "name": "cmdUpdateWorkTaskDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate",
      "name": "cmdUpdateWorkTaskDueDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "dueDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate",
      "name": "cmdUpdateWorkTaskProgressUpdate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "progressUpdate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.output.cmdUpdateWorkTask",
      "name": "cmdUpdateWorkTaskOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error",
      "name": "cmdUpdateWorkTaskError",
      "kind": "actionError",
      "actionRef": "cmdUpdateWorkTask",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status",
      "name": "cmdHandoffWorkTaskProgressToFieldCoordinatorState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
      "name": "cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "direction": "input",
        "field": "workTaskWorkTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description",
      "name": "cmdHandoffWorkTaskProgressToFieldCoordinatorDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate",
      "name": "cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "direction": "input",
        "field": "dueDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate",
      "name": "cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "direction": "input",
        "field": "progressUpdate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator",
      "name": "cmdHandoffWorkTaskProgressToFieldCoordinatorOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error",
      "name": "cmdHandoffWorkTaskProgressToFieldCoordinatorError",
      "kind": "actionError",
      "actionRef": "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateWorkTask",
      "kind": "query",
      "commandRef": "qryLocateWorkTask",
      "routeKey": "buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask",
      "purpose": "Localizar a tarefa atribuída",
      "methodName": "loadQryLocateWorkTask",
      "handlerName": "handleQryLocateWorkTaskClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.updateWorkTaskProgress.data.qryLocateWorkTask"
      ],
      "statusStateKey": "ui.updateWorkTaskProgress.action.qryLocateWorkTask.status"
    },
    {
      "actionId": "cmdUpdateWorkTask",
      "kind": "command",
      "commandRef": "cmdUpdateWorkTask",
      "routeKey": "buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask",
      "purpose": "Registrar o andamento da tarefa",
      "methodName": "cmdUpdateWorkTask",
      "handlerName": "handleCmdUpdateWorkTaskClick",
      "inputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate"
      ],
      "routeParamInputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId"
      ],
      "outputStateKeys": [
        "ui.updateWorkTaskProgress.output.cmdUpdateWorkTask"
      ],
      "statusStateKey": "ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status",
      "errorStateKey": "ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateWorkTask.success",
        "errorMessageKey": "action.cmdUpdateWorkTask.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate"
      ],
      "refreshActionIds": [
        "qryLocateWorkTask"
      ]
    },
    {
      "actionId": "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "kind": "command",
      "commandRef": "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "routeKey": "buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator",
      "purpose": "Informar o andamento ao coordenador",
      "methodName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "handlerName": "handleCmdHandoffWorkTaskProgressToFieldCoordinatorClick",
      "inputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId"
      ],
      "outputStateKeys": [
        "ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator"
      ],
      "statusStateKey": "ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status",
      "errorStateKey": "ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffWorkTaskProgressToFieldCoordinator.success",
        "errorMessageKey": "action.cmdHandoffWorkTaskProgressToFieldCoordinator.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate"
      ],
      "refreshActionIds": [
        "qryLocateWorkTask"
      ]
    },
    {
      "actionId": "set.cmdUpdateWorkTaskProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId",
      "methodName": "setCmdUpdateWorkTaskProjectProjectId",
      "handlerName": "handleCmdUpdateWorkTaskProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId",
      "methodName": "setCmdUpdateWorkTaskWorkTaskWorkTaskId",
      "handlerName": "handleCmdUpdateWorkTaskWorkTaskWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskDescription",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description",
      "methodName": "setCmdUpdateWorkTaskDescription",
      "handlerName": "handleCmdUpdateWorkTaskDescriptionChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate",
      "methodName": "setCmdUpdateWorkTaskDueDate",
      "handlerName": "handleCmdUpdateWorkTaskDueDateChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskProgressUpdate",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate",
      "methodName": "setCmdUpdateWorkTaskProgressUpdate",
      "handlerName": "handleCmdUpdateWorkTaskProgressUpdateChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
      "methodName": "setCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId",
      "handlerName": "handleCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description",
      "methodName": "setCmdHandoffWorkTaskProgressToFieldCoordinatorDescription",
      "handlerName": "handleCmdHandoffWorkTaskProgressToFieldCoordinatorDescriptionChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate",
      "methodName": "setCmdHandoffWorkTaskProgressToFieldCoordinatorDueDate",
      "handlerName": "handleCmdHandoffWorkTaskProgressToFieldCoordinatorDueDateChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate",
      "kind": "stateSetter",
      "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate",
      "methodName": "setCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate",
      "handlerName": "handleCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdateChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateWorkTask",
      "stateKey": "ui.updateWorkTaskProgress.data.qryLocateWorkTask"
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
    "section.updateWorkTaskProgress.locateWorkTask.title": "Tarefa selecionada",
    "organism.updateWorkTaskProgress.qryLocateWorkTask.title": "Localizar a tarefa atribuída",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.title": "Localizar a tarefa atribuída",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty": "Nenhum registro encontrado",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label": "Work Task Id",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label": "Project Id",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label": "Assigned Field Worker Id",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label": "Description",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label": "Due Date",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label": "Status",
    "intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label": "Progress Update",
    "section.updateWorkTaskProgress.updateWorkTask.title": "Registrar andamento",
    "organism.updateWorkTaskProgress.cmdUpdateWorkTask.title": "Registrar o andamento da tarefa",
    "intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title": "Registrar o andamento da tarefa",
    "intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask": "Registrar o andamento da tarefa",
    "intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label": "Description",
    "intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label": "Due Date",
    "intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label": "Progress Update",
    "section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title": "Comunicar ao coordenador",
    "organism.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.title": "Informar o andamento ao coordenador",
    "intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.title": "Informar o andamento ao coordenador",
    "intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.action.cmdHandoffWorkTaskProgressToFieldCoordinator": "Informar o andamento ao coordenador",
    "intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.description.label": "Description",
    "intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.dueDate.label": "Due Date",
    "intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.progressUpdate.label": "Progress Update",
    "action.cmdUpdateWorkTask.success": "Registrar o andamento da tarefa: OK",
    "action.cmdUpdateWorkTask.error": "Registrar o andamento da tarefa: falhou",
    "action.cmdHandoffWorkTaskProgressToFieldCoordinator.success": "Informar o andamento ao coordenador: OK",
    "action.cmdHandoffWorkTaskProgressToFieldCoordinator.error": "Informar o andamento ao coordenador: falhou",
    "section.updateWorkTaskProgress.taskProgressWorkspace.title": "Acompanhamento da tarefa"
  },
  "automation": {
    "statePrefix": "ui.updateWorkTaskProgress",
    "stateKeys": [
      "ui.updateWorkTaskProgress.status",
      "ui.updateWorkTaskProgress.action.qryLocateWorkTask.status",
      "ui.updateWorkTaskProgress.data.qryLocateWorkTask",
      "ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status",
      "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId",
      "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId",
      "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description",
      "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate",
      "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate",
      "ui.updateWorkTaskProgress.output.cmdUpdateWorkTask",
      "ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error",
      "ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status",
      "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
      "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description",
      "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate",
      "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate",
      "ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator",
      "ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error"
    ],
    "actionIds": [
      "qryLocateWorkTask",
      "cmdUpdateWorkTask",
      "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "set.cmdUpdateWorkTaskProjectProjectId",
      "set.cmdUpdateWorkTaskWorkTaskWorkTaskId",
      "set.cmdUpdateWorkTaskDescription",
      "set.cmdUpdateWorkTaskDueDate",
      "set.cmdUpdateWorkTaskProgressUpdate",
      "set.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId",
      "set.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription",
      "set.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate",
      "set.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate"
    ]
  }
};

export const pipeline = [
  {
    "id": "updateWorkTaskProgress__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/updateWorkTaskProgress.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "onlyAssignedWorkerReportsTaskProgress"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
