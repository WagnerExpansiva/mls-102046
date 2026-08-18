/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "workTaskCatalogue",
  "pageName": "Tarefa de trabalho",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmWorkTaskCatalogueBase",
  "routePattern": "/buildFlowFsm/workTaskCatalogue/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:workTaskCatalogue",
    "contract:buildFlowFsm.workTaskCatalogue.qryListWorkTask",
    "contract:buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask",
    "contract:buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask",
    "contract:buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask"
  ],
  "operationIds": [
    "createWorkTask",
    "deleteWorkTask",
    "listWorkTask",
    "updateWorkTask"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "workTaskCatalogue",
    "workspaceKind": "operation",
    "actor": "fieldCoordinator",
    "entity": "WorkTask",
    "owners": [
      {
        "kind": "operation",
        "id": "createWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listWorkTask",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listWorkTask.defs.ts"
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
          "operationId": "createWorkTask",
          "commandName": "cmdCreateWorkTask",
          "steps": [
            "Registrar a tarefa atribuída",
            "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra."
          ]
        },
        {
          "operationId": "deleteWorkTask",
          "commandName": "cmdDeleteWorkTask",
          "steps": [
            "Remover o registro escolhido."
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
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/workTaskCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListWorkTask",
        "routeConst": "qryListWorkTaskRoute"
      },
      {
        "commandName": "cmdCreateWorkTask",
        "routeConst": "cmdCreateWorkTaskRoute"
      },
      {
        "commandName": "cmdUpdateWorkTask",
        "routeConst": "cmdUpdateWorkTaskRoute"
      },
      {
        "commandName": "cmdDeleteWorkTask",
        "routeConst": "cmdDeleteWorkTaskRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/workTaskCatalogue.defs.ts",
    "layoutId": "work-task-catalogue-workspace"
  },
  "states": [
    {
      "stateKey": "ui.workTaskCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.action.qryListWorkTask.status",
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
      "stateKey": "ui.workTaskCatalogue.data.qryListWorkTask",
      "name": "qryListWorkTaskData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListWorkTask",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.workTaskCatalogue.action.cmdCreateWorkTask.status",
      "name": "cmdCreateWorkTaskState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateWorkTask",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId",
      "name": "cmdCreateWorkTaskProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.description",
      "name": "cmdCreateWorkTaskDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate",
      "name": "cmdCreateWorkTaskDueDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "dueDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate",
      "name": "cmdCreateWorkTaskProgressUpdate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "progressUpdate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.output.cmdCreateWorkTask",
      "name": "cmdCreateWorkTaskOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.workTaskCatalogue.action.cmdCreateWorkTask.error",
      "name": "cmdCreateWorkTaskError",
      "kind": "actionError",
      "actionRef": "cmdCreateWorkTask",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.action.cmdUpdateWorkTask.status",
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
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId",
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
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId",
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
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.description",
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
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate",
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
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate",
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
      "stateKey": "ui.workTaskCatalogue.output.cmdUpdateWorkTask",
      "name": "cmdUpdateWorkTaskOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.workTaskCatalogue.action.cmdUpdateWorkTask.error",
      "name": "cmdUpdateWorkTaskError",
      "kind": "actionError",
      "actionRef": "cmdUpdateWorkTask",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.action.cmdDeleteWorkTask.status",
      "name": "cmdDeleteWorkTaskState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteWorkTask",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId",
      "name": "cmdDeleteWorkTaskWorkTaskId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteWorkTask",
        "direction": "input",
        "field": "workTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.workTaskCatalogue.output.cmdDeleteWorkTask",
      "name": "cmdDeleteWorkTaskOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteWorkTask",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.workTaskCatalogue.action.cmdDeleteWorkTask.error",
      "name": "cmdDeleteWorkTaskError",
      "kind": "actionError",
      "actionRef": "cmdDeleteWorkTask",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryListWorkTask",
      "kind": "query",
      "commandRef": "qryListWorkTask",
      "routeKey": "buildFlowFsm.workTaskCatalogue.qryListWorkTask",
      "purpose": "Listar Tarefa de trabalho",
      "methodName": "loadQryListWorkTask",
      "handlerName": "handleQryListWorkTaskClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.workTaskCatalogue.data.qryListWorkTask"
      ],
      "statusStateKey": "ui.workTaskCatalogue.action.qryListWorkTask.status"
    },
    {
      "actionId": "cmdCreateWorkTask",
      "kind": "command",
      "commandRef": "cmdCreateWorkTask",
      "routeKey": "buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask",
      "purpose": "Registrar a tarefa atribuída",
      "methodName": "cmdCreateWorkTask",
      "handlerName": "handleCmdCreateWorkTaskClick",
      "inputStateKeys": [
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.description",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate"
      ],
      "routeParamInputStateKeys": [
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.workTaskCatalogue.output.cmdCreateWorkTask"
      ],
      "statusStateKey": "ui.workTaskCatalogue.action.cmdCreateWorkTask.status",
      "errorStateKey": "ui.workTaskCatalogue.action.cmdCreateWorkTask.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateWorkTask.success",
        "errorMessageKey": "action.cmdCreateWorkTask.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.description",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate"
      ],
      "refreshActionIds": [
        "qryListWorkTask"
      ]
    },
    {
      "actionId": "cmdUpdateWorkTask",
      "kind": "command",
      "commandRef": "cmdUpdateWorkTask",
      "routeKey": "buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask",
      "purpose": "Registrar o andamento da tarefa",
      "methodName": "cmdUpdateWorkTask",
      "handlerName": "handleCmdUpdateWorkTaskClick",
      "inputStateKeys": [
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.description",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate"
      ],
      "routeParamInputStateKeys": [
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId"
      ],
      "outputStateKeys": [
        "ui.workTaskCatalogue.output.cmdUpdateWorkTask"
      ],
      "statusStateKey": "ui.workTaskCatalogue.action.cmdUpdateWorkTask.status",
      "errorStateKey": "ui.workTaskCatalogue.action.cmdUpdateWorkTask.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateWorkTask.success",
        "errorMessageKey": "action.cmdUpdateWorkTask.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.description",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate"
      ],
      "refreshActionIds": [
        "qryListWorkTask"
      ]
    },
    {
      "actionId": "cmdDeleteWorkTask",
      "kind": "command",
      "commandRef": "cmdDeleteWorkTask",
      "routeKey": "buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask",
      "purpose": "Excluir Tarefa de trabalho",
      "methodName": "cmdDeleteWorkTask",
      "handlerName": "handleCmdDeleteWorkTaskClick",
      "inputStateKeys": [
        "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId"
      ],
      "outputStateKeys": [
        "ui.workTaskCatalogue.output.cmdDeleteWorkTask"
      ],
      "statusStateKey": "ui.workTaskCatalogue.action.cmdDeleteWorkTask.status",
      "errorStateKey": "ui.workTaskCatalogue.action.cmdDeleteWorkTask.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteWorkTask.success",
        "errorMessageKey": "action.cmdDeleteWorkTask.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId"
      ],
      "refreshActionIds": [
        "qryListWorkTask"
      ]
    },
    {
      "actionId": "set.cmdCreateWorkTaskProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId",
      "methodName": "setCmdCreateWorkTaskProjectProjectId",
      "handlerName": "handleCmdCreateWorkTaskProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskDescription",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.description",
      "methodName": "setCmdCreateWorkTaskDescription",
      "handlerName": "handleCmdCreateWorkTaskDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate",
      "methodName": "setCmdCreateWorkTaskDueDate",
      "handlerName": "handleCmdCreateWorkTaskDueDateChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskProgressUpdate",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate",
      "methodName": "setCmdCreateWorkTaskProgressUpdate",
      "handlerName": "handleCmdCreateWorkTaskProgressUpdateChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId",
      "methodName": "setCmdUpdateWorkTaskProjectProjectId",
      "handlerName": "handleCmdUpdateWorkTaskProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId",
      "methodName": "setCmdUpdateWorkTaskWorkTaskWorkTaskId",
      "handlerName": "handleCmdUpdateWorkTaskWorkTaskWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskDescription",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.description",
      "methodName": "setCmdUpdateWorkTaskDescription",
      "handlerName": "handleCmdUpdateWorkTaskDescriptionChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate",
      "methodName": "setCmdUpdateWorkTaskDueDate",
      "handlerName": "handleCmdUpdateWorkTaskDueDateChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskProgressUpdate",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate",
      "methodName": "setCmdUpdateWorkTaskProgressUpdate",
      "handlerName": "handleCmdUpdateWorkTaskProgressUpdateChange"
    },
    {
      "actionId": "set.cmdDeleteWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId",
      "methodName": "setCmdDeleteWorkTaskWorkTaskId",
      "handlerName": "handleCmdDeleteWorkTaskWorkTaskIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListWorkTask",
      "stateKey": "ui.workTaskCatalogue.data.qryListWorkTask"
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
    "section.workTaskCatalogue.recordList.title": "Localizar tarefa de trabalho",
    "organism.workTaskCatalogue.qryListWorkTask.title": "Listar Tarefa de trabalho",
    "intent.workTaskCatalogue.qryListWorkTask.list.title": "Listar Tarefa de trabalho",
    "intent.workTaskCatalogue.qryListWorkTask.list.empty": "Nenhum registro encontrado",
    "intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label": "Work Task Id",
    "intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label": "Project Id",
    "intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label": "Assigned Field Worker Id",
    "intent.workTaskCatalogue.qryListWorkTask.list.column.description.label": "Description",
    "intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label": "Due Date",
    "intent.workTaskCatalogue.qryListWorkTask.list.column.status.label": "Status",
    "intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label": "Progress Update",
    "organism.workTaskCatalogue.cmdDeleteWorkTask.title": "Excluir Tarefa de trabalho",
    "intent.workTaskCatalogue.cmdDeleteWorkTask.form.title": "Excluir Tarefa de trabalho",
    "intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask": "Excluir Tarefa de trabalho",
    "section.workTaskCatalogue.recordForm.title": "Criar ou corrigir tarefa",
    "organism.workTaskCatalogue.cmdCreateWorkTask.title": "Registrar a tarefa atribuída",
    "intent.workTaskCatalogue.cmdCreateWorkTask.form.title": "Registrar a tarefa atribuída",
    "intent.workTaskCatalogue.cmdCreateWorkTask.form.action.cmdCreateWorkTask": "Registrar a tarefa atribuída",
    "intent.workTaskCatalogue.cmdCreateWorkTask.form.field.description.label": "Description",
    "intent.workTaskCatalogue.cmdCreateWorkTask.form.field.dueDate.label": "Due Date",
    "intent.workTaskCatalogue.cmdCreateWorkTask.form.field.progressUpdate.label": "Progress Update",
    "organism.workTaskCatalogue.cmdUpdateWorkTask.title": "Registrar o andamento da tarefa",
    "intent.workTaskCatalogue.cmdUpdateWorkTask.form.title": "Registrar o andamento da tarefa",
    "intent.workTaskCatalogue.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask": "Registrar o andamento da tarefa",
    "intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.description.label": "Description",
    "intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.dueDate.label": "Due Date",
    "intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.progressUpdate.label": "Progress Update",
    "action.cmdCreateWorkTask.success": "Registrar a tarefa atribuída: OK",
    "action.cmdCreateWorkTask.error": "Registrar a tarefa atribuída: falhou",
    "action.cmdUpdateWorkTask.success": "Registrar o andamento da tarefa: OK",
    "action.cmdUpdateWorkTask.error": "Registrar o andamento da tarefa: falhou",
    "action.cmdDeleteWorkTask.success": "Excluir Tarefa de trabalho: OK",
    "action.cmdDeleteWorkTask.error": "Excluir Tarefa de trabalho: falhou",
    "section.workTaskCatalogue.taskWorkbench.title": "Gestão de tarefas",
    "section.workTaskCatalogue.workTaskWorkbench.title": "Tarefas de trabalho"
  },
  "automation": {
    "statePrefix": "ui.workTaskCatalogue",
    "stateKeys": [
      "ui.workTaskCatalogue.status",
      "ui.workTaskCatalogue.action.qryListWorkTask.status",
      "ui.workTaskCatalogue.data.qryListWorkTask",
      "ui.workTaskCatalogue.action.cmdCreateWorkTask.status",
      "ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId",
      "ui.workTaskCatalogue.input.cmdCreateWorkTask.description",
      "ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate",
      "ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate",
      "ui.workTaskCatalogue.output.cmdCreateWorkTask",
      "ui.workTaskCatalogue.action.cmdCreateWorkTask.error",
      "ui.workTaskCatalogue.action.cmdUpdateWorkTask.status",
      "ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId",
      "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId",
      "ui.workTaskCatalogue.input.cmdUpdateWorkTask.description",
      "ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate",
      "ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate",
      "ui.workTaskCatalogue.output.cmdUpdateWorkTask",
      "ui.workTaskCatalogue.action.cmdUpdateWorkTask.error",
      "ui.workTaskCatalogue.action.cmdDeleteWorkTask.status",
      "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId",
      "ui.workTaskCatalogue.output.cmdDeleteWorkTask",
      "ui.workTaskCatalogue.action.cmdDeleteWorkTask.error"
    ],
    "actionIds": [
      "qryListWorkTask",
      "cmdCreateWorkTask",
      "cmdUpdateWorkTask",
      "cmdDeleteWorkTask",
      "set.cmdCreateWorkTaskProjectProjectId",
      "set.cmdCreateWorkTaskDescription",
      "set.cmdCreateWorkTaskDueDate",
      "set.cmdCreateWorkTaskProgressUpdate",
      "set.cmdUpdateWorkTaskProjectProjectId",
      "set.cmdUpdateWorkTaskWorkTaskWorkTaskId",
      "set.cmdUpdateWorkTaskDescription",
      "set.cmdUpdateWorkTaskDueDate",
      "set.cmdUpdateWorkTaskProgressUpdate",
      "set.cmdDeleteWorkTaskWorkTaskId"
    ]
  }
};

export const pipeline = [
  {
    "id": "workTaskCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/workTaskCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "workTaskRequiresActiveProject",
      "workTaskRequiresAssigneeAndDueDate",
      "onlyAssignedWorkerReportsTaskProgress"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
