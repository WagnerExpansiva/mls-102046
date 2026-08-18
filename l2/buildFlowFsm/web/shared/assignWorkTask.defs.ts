/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "assignWorkTask",
  "pageName": "Planejar e atribuir tarefa de campo",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmAssignWorkTaskBase",
  "routePattern": "/buildFlowFsm/assignWorkTask/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:assignWorkTask",
    "contract:buildFlowFsm.assignWorkTask.qryLocateProject",
    "contract:buildFlowFsm.assignWorkTask.qryInspectProjectTimeline",
    "contract:buildFlowFsm.assignWorkTask.qryLocateFieldWorker",
    "contract:buildFlowFsm.assignWorkTask.cmdCreateWorkTask",
    "contract:buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker"
  ],
  "operationIds": [
    "createWorkTask",
    "handoffWorkTaskToFieldWorker",
    "inspectProjectTimeline",
    "locateFieldWorker",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "assignWorkTask",
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
        "id": "handoffWorkTaskToFieldWorker",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffWorkTaskToFieldWorker.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectTimeline",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectTimeline.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateFieldWorker",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateFieldWorker.defs.ts"
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
          "operationId": "createWorkTask",
          "commandName": "cmdCreateWorkTask",
          "steps": [
            "Registrar a tarefa atribuída",
            "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra."
          ]
        },
        {
          "operationId": "handoffWorkTaskToFieldWorker",
          "commandName": "cmdHandoffWorkTaskToFieldWorker",
          "steps": [
            "Encaminhar a tarefa ao trabalhador",
            "O trabalhador recebe a tarefa para execução em campo."
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
          "operationId": "locateFieldWorker",
          "commandName": "qryLocateFieldWorker",
          "steps": [
            "Confirmar o trabalhador",
            "O trabalhador que realizou o trabalho está selecionado no diretório da organização."
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
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/assignWorkTask.ts",
    "contracts": [
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryInspectProjectTimeline",
        "routeConst": "qryInspectProjectTimelineRoute"
      },
      {
        "commandName": "qryLocateFieldWorker",
        "routeConst": "qryLocateFieldWorkerRoute"
      },
      {
        "commandName": "cmdCreateWorkTask",
        "routeConst": "cmdCreateWorkTaskRoute"
      },
      {
        "commandName": "cmdHandoffWorkTaskToFieldWorker",
        "routeConst": "cmdHandoffWorkTaskToFieldWorkerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/assignWorkTask.defs.ts",
    "layoutId": "assignWorkTask-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.assignWorkTask.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.assignWorkTask.action.qryLocateProject.status",
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
      "stateKey": "ui.assignWorkTask.data.qryLocateProject",
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
      "stateKey": "ui.assignWorkTask.action.qryInspectProjectTimeline.status",
      "name": "qryInspectProjectTimelineState",
      "kind": "actionStatus",
      "actionRef": "qryInspectProjectTimeline",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId",
      "name": "qryInspectProjectTimelineProjectTimelineProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectProjectTimeline",
        "direction": "input",
        "field": "projectTimelineProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.assignWorkTask.data.qryInspectProjectTimeline",
      "name": "qryInspectProjectTimelineData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectProjectTimeline",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.assignWorkTask.action.qryLocateFieldWorker.status",
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
      "stateKey": "ui.assignWorkTask.data.qryLocateFieldWorker",
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
      "stateKey": "ui.assignWorkTask.action.cmdCreateWorkTask.status",
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
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId",
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
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.description",
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
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.dueDate",
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
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate",
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
      "stateKey": "ui.assignWorkTask.output.cmdCreateWorkTask",
      "name": "cmdCreateWorkTaskOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.assignWorkTask.action.cmdCreateWorkTask.error",
      "name": "cmdCreateWorkTaskError",
      "kind": "actionError",
      "actionRef": "cmdCreateWorkTask",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status",
      "name": "cmdHandoffWorkTaskToFieldWorkerState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffWorkTaskToFieldWorker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId",
      "name": "cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskToFieldWorker",
        "direction": "input",
        "field": "workTaskWorkTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description",
      "name": "cmdHandoffWorkTaskToFieldWorkerDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskToFieldWorker",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate",
      "name": "cmdHandoffWorkTaskToFieldWorkerDueDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskToFieldWorker",
        "direction": "input",
        "field": "dueDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate",
      "name": "cmdHandoffWorkTaskToFieldWorkerProgressUpdate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskToFieldWorker",
        "direction": "input",
        "field": "progressUpdate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker",
      "name": "cmdHandoffWorkTaskToFieldWorkerOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffWorkTaskToFieldWorker",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error",
      "name": "cmdHandoffWorkTaskToFieldWorkerError",
      "kind": "actionError",
      "actionRef": "cmdHandoffWorkTaskToFieldWorker",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.assignWorkTask.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.assignWorkTask.data.qryLocateProject"
      ],
      "statusStateKey": "ui.assignWorkTask.action.qryLocateProject.status"
    },
    {
      "actionId": "qryInspectProjectTimeline",
      "kind": "query",
      "commandRef": "qryInspectProjectTimeline",
      "routeKey": "buildFlowFsm.assignWorkTask.qryInspectProjectTimeline",
      "purpose": "Consultar o cronograma da obra",
      "methodName": "loadQryInspectProjectTimeline",
      "handlerName": "handleQryInspectProjectTimelineClick",
      "inputStateKeys": [
        "ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId"
      ],
      "outputStateKeys": [
        "ui.assignWorkTask.data.qryInspectProjectTimeline"
      ],
      "statusStateKey": "ui.assignWorkTask.action.qryInspectProjectTimeline.status"
    },
    {
      "actionId": "qryLocateFieldWorker",
      "kind": "query",
      "commandRef": "qryLocateFieldWorker",
      "routeKey": "buildFlowFsm.assignWorkTask.qryLocateFieldWorker",
      "purpose": "Selecionar o trabalhador responsável",
      "methodName": "loadQryLocateFieldWorker",
      "handlerName": "handleQryLocateFieldWorkerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.assignWorkTask.data.qryLocateFieldWorker"
      ],
      "statusStateKey": "ui.assignWorkTask.action.qryLocateFieldWorker.status"
    },
    {
      "actionId": "cmdCreateWorkTask",
      "kind": "command",
      "commandRef": "cmdCreateWorkTask",
      "routeKey": "buildFlowFsm.assignWorkTask.cmdCreateWorkTask",
      "purpose": "Registrar a tarefa atribuída",
      "methodName": "cmdCreateWorkTask",
      "handlerName": "handleCmdCreateWorkTaskClick",
      "inputStateKeys": [
        "ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId",
        "ui.assignWorkTask.input.cmdCreateWorkTask.description",
        "ui.assignWorkTask.input.cmdCreateWorkTask.dueDate",
        "ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate"
      ],
      "routeParamInputStateKeys": [
        "ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.assignWorkTask.output.cmdCreateWorkTask"
      ],
      "statusStateKey": "ui.assignWorkTask.action.cmdCreateWorkTask.status",
      "errorStateKey": "ui.assignWorkTask.action.cmdCreateWorkTask.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateWorkTask.success",
        "errorMessageKey": "action.cmdCreateWorkTask.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.assignWorkTask.input.cmdCreateWorkTask.description",
        "ui.assignWorkTask.input.cmdCreateWorkTask.dueDate",
        "ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate"
      ],
      "refreshActionIds": [
        "qryLocateProject",
        "qryInspectProjectTimeline",
        "qryLocateFieldWorker"
      ]
    },
    {
      "actionId": "cmdHandoffWorkTaskToFieldWorker",
      "kind": "command",
      "commandRef": "cmdHandoffWorkTaskToFieldWorker",
      "routeKey": "buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker",
      "purpose": "Encaminhar a tarefa ao trabalhador",
      "methodName": "cmdHandoffWorkTaskToFieldWorker",
      "handlerName": "handleCmdHandoffWorkTaskToFieldWorkerClick",
      "inputStateKeys": [
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId"
      ],
      "outputStateKeys": [
        "ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker"
      ],
      "statusStateKey": "ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status",
      "errorStateKey": "ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffWorkTaskToFieldWorker.success",
        "errorMessageKey": "action.cmdHandoffWorkTaskToFieldWorker.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate"
      ],
      "refreshActionIds": [
        "qryLocateProject",
        "qryInspectProjectTimeline",
        "qryLocateFieldWorker"
      ]
    },
    {
      "actionId": "set.qryInspectProjectTimelineProjectTimelineProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId",
      "methodName": "setQryInspectProjectTimelineProjectTimelineProjectId",
      "handlerName": "handleQryInspectProjectTimelineProjectTimelineProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId",
      "methodName": "setCmdCreateWorkTaskProjectProjectId",
      "handlerName": "handleCmdCreateWorkTaskProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskDescription",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.description",
      "methodName": "setCmdCreateWorkTaskDescription",
      "handlerName": "handleCmdCreateWorkTaskDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.dueDate",
      "methodName": "setCmdCreateWorkTaskDueDate",
      "handlerName": "handleCmdCreateWorkTaskDueDateChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskProgressUpdate",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate",
      "methodName": "setCmdCreateWorkTaskProgressUpdate",
      "handlerName": "handleCmdCreateWorkTaskProgressUpdateChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId",
      "methodName": "setCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId",
      "handlerName": "handleCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskToFieldWorkerDescription",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description",
      "methodName": "setCmdHandoffWorkTaskToFieldWorkerDescription",
      "handlerName": "handleCmdHandoffWorkTaskToFieldWorkerDescriptionChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskToFieldWorkerDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate",
      "methodName": "setCmdHandoffWorkTaskToFieldWorkerDueDate",
      "handlerName": "handleCmdHandoffWorkTaskToFieldWorkerDueDateChange"
    },
    {
      "actionId": "set.cmdHandoffWorkTaskToFieldWorkerProgressUpdate",
      "kind": "stateSetter",
      "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate",
      "methodName": "setCmdHandoffWorkTaskToFieldWorkerProgressUpdate",
      "handlerName": "handleCmdHandoffWorkTaskToFieldWorkerProgressUpdateChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.assignWorkTask.data.qryLocateProject"
    },
    {
      "actionId": "qryLocateFieldWorker",
      "stateKey": "ui.assignWorkTask.data.qryLocateFieldWorker"
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
    "section.assignWorkTask.planningContext.title": "Contexto de planejamento",
    "organism.assignWorkTask.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.assignWorkTask.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.assignWorkTask.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.assignWorkTask.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.assignWorkTask.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.assignWorkTask.qryLocateProject.list.column.name.label": "Name",
    "intent.assignWorkTask.qryLocateProject.list.column.address.label": "Address",
    "intent.assignWorkTask.qryLocateProject.list.column.status.label": "Status",
    "intent.assignWorkTask.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "organism.assignWorkTask.qryInspectProjectTimeline.title": "Consultar o cronograma da obra",
    "intent.assignWorkTask.qryInspectProjectTimeline.list.title": "Consultar o cronograma da obra",
    "intent.assignWorkTask.qryInspectProjectTimeline.list.empty": "Nenhum registro encontrado",
    "intent.assignWorkTask.qryInspectProjectTimeline.list.column.projectId.label": "Project Id",
    "intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label": "Work Tasks",
    "intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label": "Schedule Entries",
    "organism.assignWorkTask.qryLocateFieldWorker.title": "Selecionar o trabalhador responsável",
    "intent.assignWorkTask.qryLocateFieldWorker.list.title": "Selecionar o trabalhador responsável",
    "intent.assignWorkTask.qryLocateFieldWorker.list.empty": "Nenhum registro encontrado",
    "intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label": "Platform User Id",
    "section.assignWorkTask.taskExecution.title": "Execução da tarefa",
    "organism.assignWorkTask.cmdCreateWorkTask.title": "Registrar a tarefa atribuída",
    "intent.assignWorkTask.cmdCreateWorkTask.form.title": "Registrar a tarefa atribuída",
    "intent.assignWorkTask.cmdCreateWorkTask.form.action.cmdCreateWorkTask": "Registrar a tarefa atribuída",
    "intent.assignWorkTask.cmdCreateWorkTask.form.field.description.label": "Description",
    "intent.assignWorkTask.cmdCreateWorkTask.form.field.dueDate.label": "Due Date",
    "intent.assignWorkTask.cmdCreateWorkTask.form.field.progressUpdate.label": "Progress Update",
    "organism.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.title": "Encaminhar a tarefa ao trabalhador",
    "intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.title": "Encaminhar a tarefa ao trabalhador",
    "intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.action.cmdHandoffWorkTaskToFieldWorker": "Encaminhar a tarefa ao trabalhador",
    "intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.description.label": "Description",
    "intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.dueDate.label": "Due Date",
    "intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.progressUpdate.label": "Progress Update",
    "action.cmdCreateWorkTask.success": "Registrar a tarefa atribuída: OK",
    "action.cmdCreateWorkTask.error": "Registrar a tarefa atribuída: falhou",
    "action.cmdHandoffWorkTaskToFieldWorker.success": "Encaminhar a tarefa ao trabalhador: OK",
    "action.cmdHandoffWorkTaskToFieldWorker.error": "Encaminhar a tarefa ao trabalhador: falhou",
    "section.assignWorkTask.workPlanningWorkspace.title": "Planejamento e atribuição",
    "section.assignWorkTask.taskPlanningWorkspace.title": "Planejamento da tarefa",
    "section.assignWorkTask.fieldAssignmentWorkspace.title": "Responsável e encaminhamento"
  },
  "automation": {
    "statePrefix": "ui.assignWorkTask",
    "stateKeys": [
      "ui.assignWorkTask.status",
      "ui.assignWorkTask.action.qryLocateProject.status",
      "ui.assignWorkTask.data.qryLocateProject",
      "ui.assignWorkTask.action.qryInspectProjectTimeline.status",
      "ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId",
      "ui.assignWorkTask.data.qryInspectProjectTimeline",
      "ui.assignWorkTask.action.qryLocateFieldWorker.status",
      "ui.assignWorkTask.data.qryLocateFieldWorker",
      "ui.assignWorkTask.action.cmdCreateWorkTask.status",
      "ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId",
      "ui.assignWorkTask.input.cmdCreateWorkTask.description",
      "ui.assignWorkTask.input.cmdCreateWorkTask.dueDate",
      "ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate",
      "ui.assignWorkTask.output.cmdCreateWorkTask",
      "ui.assignWorkTask.action.cmdCreateWorkTask.error",
      "ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status",
      "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId",
      "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description",
      "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate",
      "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate",
      "ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker",
      "ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error"
    ],
    "actionIds": [
      "qryLocateProject",
      "qryInspectProjectTimeline",
      "qryLocateFieldWorker",
      "cmdCreateWorkTask",
      "cmdHandoffWorkTaskToFieldWorker",
      "set.qryInspectProjectTimelineProjectTimelineProjectId",
      "set.cmdCreateWorkTaskProjectProjectId",
      "set.cmdCreateWorkTaskDescription",
      "set.cmdCreateWorkTaskDueDate",
      "set.cmdCreateWorkTaskProgressUpdate",
      "set.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId",
      "set.cmdHandoffWorkTaskToFieldWorkerDescription",
      "set.cmdHandoffWorkTaskToFieldWorkerDueDate",
      "set.cmdHandoffWorkTaskToFieldWorkerProgressUpdate"
    ]
  }
};

export const pipeline = [
  {
    "id": "assignWorkTask__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/assignWorkTask.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "workTaskRequiresActiveProject",
      "workTaskRequiresAssigneeAndDueDate"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
