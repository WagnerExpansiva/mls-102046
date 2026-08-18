/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "submitChangeOrder",
  "pageName": "Registrar e submeter ordem de mudança",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmSubmitChangeOrderBase",
  "routePattern": "/buildFlowFsm/submitChangeOrder/:projectProjectId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workspace:submitChangeOrder",
    "contract:buildFlowFsm.submitChangeOrder.qryLocateClient",
    "contract:buildFlowFsm.submitChangeOrder.qryLocateProject",
    "contract:buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder",
    "contract:buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager"
  ],
  "operationIds": [
    "createChangeOrder",
    "handoffChangeOrderToProjectManager",
    "locateClient",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "submitChangeOrder",
    "workspaceKind": "workflow",
    "workflowId": "changeOrderLifecycle",
    "actor": "fieldCoordinator",
    "entity": "ChangeOrder",
    "owners": [
      {
        "kind": "operation",
        "id": "createChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "handoffChangeOrderToProjectManager",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffChangeOrderToProjectManager.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateClient.defs.ts"
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
          "operationId": "createChangeOrder",
          "commandName": "cmdCreateChangeOrder",
          "steps": [
            "Registrar a alteração proposta",
            "Uma ordem de mudança vinculada ao cliente e à obra fica registrada."
          ]
        },
        {
          "operationId": "handoffChangeOrderToProjectManager",
          "commandName": "cmdHandoffChangeOrderToProjectManager",
          "steps": [
            "Submeter a alteração para tratamento",
            "O gerente recebe a ordem para recusá-la ou encaminhá-la ao cliente para aprovação."
          ]
        },
        {
          "operationId": "locateClient",
          "commandName": "qryLocateClient",
          "steps": [
            "Localizar o cliente",
            "Um cliente do catálogo compartilhado está selecionado."
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
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/submitChangeOrder.ts",
    "contracts": [
      {
        "commandName": "qryLocateClient",
        "routeConst": "qryLocateClientRoute"
      },
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "cmdCreateChangeOrder",
        "routeConst": "cmdCreateChangeOrderRoute"
      },
      {
        "commandName": "cmdHandoffChangeOrderToProjectManager",
        "routeConst": "cmdHandoffChangeOrderToProjectManagerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/submitChangeOrder.defs.ts",
    "layoutId": "workflow_queue_submitChangeOrder"
  },
  "states": [
    {
      "stateKey": "ui.submitChangeOrder.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.action.qryLocateClient.status",
      "name": "qryLocateClientState",
      "kind": "actionStatus",
      "actionRef": "qryLocateClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.submitChangeOrder.data.qryLocateClient",
      "name": "qryLocateClientData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateClient",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.submitChangeOrder.action.qryLocateProject.status",
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
      "stateKey": "ui.submitChangeOrder.data.qryLocateProject",
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
      "stateKey": "ui.submitChangeOrder.action.cmdCreateChangeOrder.status",
      "name": "cmdCreateChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId",
      "name": "cmdCreateChangeOrderClientClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "clientClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId",
      "name": "cmdCreateChangeOrderProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.description",
      "name": "cmdCreateChangeOrderDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact",
      "name": "cmdCreateChangeOrderScopeImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "scopeImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact",
      "name": "cmdCreateChangeOrderScheduleImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "scheduleImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount",
      "name": "cmdCreateChangeOrderChangeAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "changeAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.output.cmdCreateChangeOrder",
      "name": "cmdCreateChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.submitChangeOrder.action.cmdCreateChangeOrder.error",
      "name": "cmdCreateChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdCreateChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status",
      "name": "cmdHandoffChangeOrderToProjectManagerState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffChangeOrderToProjectManager",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId",
      "name": "cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToProjectManager",
        "direction": "input",
        "field": "changeOrderChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description",
      "name": "cmdHandoffChangeOrderToProjectManagerDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToProjectManager",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact",
      "name": "cmdHandoffChangeOrderToProjectManagerScopeImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToProjectManager",
        "direction": "input",
        "field": "scopeImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact",
      "name": "cmdHandoffChangeOrderToProjectManagerScheduleImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToProjectManager",
        "direction": "input",
        "field": "scheduleImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount",
      "name": "cmdHandoffChangeOrderToProjectManagerChangeAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToProjectManager",
        "direction": "input",
        "field": "changeAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager",
      "name": "cmdHandoffChangeOrderToProjectManagerOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToProjectManager",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error",
      "name": "cmdHandoffChangeOrderToProjectManagerError",
      "kind": "actionError",
      "actionRef": "cmdHandoffChangeOrderToProjectManager",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateClient",
      "kind": "query",
      "commandRef": "qryLocateClient",
      "routeKey": "buildFlowFsm.submitChangeOrder.qryLocateClient",
      "purpose": "Localizar o cliente",
      "methodName": "loadQryLocateClient",
      "handlerName": "handleQryLocateClientClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.submitChangeOrder.data.qryLocateClient"
      ],
      "statusStateKey": "ui.submitChangeOrder.action.qryLocateClient.status"
    },
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.submitChangeOrder.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.submitChangeOrder.data.qryLocateProject"
      ],
      "statusStateKey": "ui.submitChangeOrder.action.qryLocateProject.status"
    },
    {
      "actionId": "cmdCreateChangeOrder",
      "kind": "command",
      "commandRef": "cmdCreateChangeOrder",
      "routeKey": "buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder",
      "purpose": "Registrar a alteração proposta",
      "methodName": "cmdCreateChangeOrder",
      "handlerName": "handleCmdCreateChangeOrderClick",
      "inputStateKeys": [
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.description",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount"
      ],
      "routeParamInputStateKeys": [
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId"
      ],
      "outputStateKeys": [
        "ui.submitChangeOrder.output.cmdCreateChangeOrder"
      ],
      "statusStateKey": "ui.submitChangeOrder.action.cmdCreateChangeOrder.status",
      "errorStateKey": "ui.submitChangeOrder.action.cmdCreateChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateChangeOrder.success",
        "errorMessageKey": "action.cmdCreateChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.description",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount"
      ],
      "refreshActionIds": [
        "qryLocateClient",
        "qryLocateProject"
      ]
    },
    {
      "actionId": "cmdHandoffChangeOrderToProjectManager",
      "kind": "command",
      "commandRef": "cmdHandoffChangeOrderToProjectManager",
      "routeKey": "buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager",
      "purpose": "Submeter a alteração para tratamento",
      "methodName": "cmdHandoffChangeOrderToProjectManager",
      "handlerName": "handleCmdHandoffChangeOrderToProjectManagerClick",
      "inputStateKeys": [
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId"
      ],
      "outputStateKeys": [
        "ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager"
      ],
      "statusStateKey": "ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status",
      "errorStateKey": "ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffChangeOrderToProjectManager.success",
        "errorMessageKey": "action.cmdHandoffChangeOrderToProjectManager.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount"
      ],
      "refreshActionIds": [
        "qryLocateClient",
        "qryLocateProject"
      ]
    },
    {
      "actionId": "set.cmdCreateChangeOrderClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId",
      "methodName": "setCmdCreateChangeOrderClientClientId",
      "handlerName": "handleCmdCreateChangeOrderClientClientIdChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId",
      "methodName": "setCmdCreateChangeOrderProjectProjectId",
      "handlerName": "handleCmdCreateChangeOrderProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderDescription",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.description",
      "methodName": "setCmdCreateChangeOrderDescription",
      "handlerName": "handleCmdCreateChangeOrderDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderScopeImpact",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact",
      "methodName": "setCmdCreateChangeOrderScopeImpact",
      "handlerName": "handleCmdCreateChangeOrderScopeImpactChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderScheduleImpact",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact",
      "methodName": "setCmdCreateChangeOrderScheduleImpact",
      "handlerName": "handleCmdCreateChangeOrderScheduleImpactChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderChangeAmount",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount",
      "methodName": "setCmdCreateChangeOrderChangeAmount",
      "handlerName": "handleCmdCreateChangeOrderChangeAmountChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId",
      "methodName": "setCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId",
      "handlerName": "handleCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToProjectManagerDescription",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description",
      "methodName": "setCmdHandoffChangeOrderToProjectManagerDescription",
      "handlerName": "handleCmdHandoffChangeOrderToProjectManagerDescriptionChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToProjectManagerScopeImpact",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact",
      "methodName": "setCmdHandoffChangeOrderToProjectManagerScopeImpact",
      "handlerName": "handleCmdHandoffChangeOrderToProjectManagerScopeImpactChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToProjectManagerScheduleImpact",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact",
      "methodName": "setCmdHandoffChangeOrderToProjectManagerScheduleImpact",
      "handlerName": "handleCmdHandoffChangeOrderToProjectManagerScheduleImpactChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToProjectManagerChangeAmount",
      "kind": "stateSetter",
      "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount",
      "methodName": "setCmdHandoffChangeOrderToProjectManagerChangeAmount",
      "handlerName": "handleCmdHandoffChangeOrderToProjectManagerChangeAmountChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateClient",
      "stateKey": "ui.submitChangeOrder.data.qryLocateClient"
    },
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.submitChangeOrder.data.qryLocateProject"
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
    "section.submitChangeOrder.locateClient.title": "Localizar cliente",
    "organism.submitChangeOrder.qryLocateClient.title": "Localizar o cliente",
    "intent.submitChangeOrder.qryLocateClient.list.title": "Localizar o cliente",
    "intent.submitChangeOrder.qryLocateClient.list.empty": "Nenhum registro encontrado",
    "intent.submitChangeOrder.qryLocateClient.list.column.clientId.label": "Client Id",
    "intent.submitChangeOrder.qryLocateClient.list.column.clientName.label": "Client Name",
    "intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label": "Contact Email",
    "intent.submitChangeOrder.qryLocateClient.list.column.contactPhone.label": "Contact Phone",
    "section.submitChangeOrder.locateProject.title": "Selecionar obra",
    "organism.submitChangeOrder.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.submitChangeOrder.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.submitChangeOrder.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.submitChangeOrder.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.submitChangeOrder.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.submitChangeOrder.qryLocateProject.list.column.name.label": "Name",
    "intent.submitChangeOrder.qryLocateProject.list.column.address.label": "Address",
    "intent.submitChangeOrder.qryLocateProject.list.column.status.label": "Status",
    "intent.submitChangeOrder.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.submitChangeOrder.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.submitChangeOrder.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.submitChangeOrder.createChangeOrder.title": "Registrar alteração",
    "organism.submitChangeOrder.cmdCreateChangeOrder.title": "Registrar a alteração proposta",
    "intent.submitChangeOrder.cmdCreateChangeOrder.form.title": "Registrar a alteração proposta",
    "intent.submitChangeOrder.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder": "Registrar a alteração proposta",
    "intent.submitChangeOrder.cmdCreateChangeOrder.form.field.description.label": "Description",
    "intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scopeImpact.label": "Scope Impact",
    "intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scheduleImpact.label": "Schedule Impact",
    "intent.submitChangeOrder.cmdCreateChangeOrder.form.field.changeAmount.label": "Change Amount",
    "section.submitChangeOrder.handoffChangeOrderToProjectManager.title": "Submeter para tratamento",
    "organism.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.title": "Submeter a alteração para tratamento",
    "intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.title": "Submeter a alteração para tratamento",
    "intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.action.cmdHandoffChangeOrderToProjectManager": "Submeter a alteração para tratamento",
    "intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.description.label": "Description",
    "intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scopeImpact.label": "Scope Impact",
    "intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scheduleImpact.label": "Schedule Impact",
    "intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.changeAmount.label": "Change Amount",
    "action.cmdCreateChangeOrder.success": "Registrar a alteração proposta: OK",
    "action.cmdCreateChangeOrder.error": "Registrar a alteração proposta: falhou",
    "action.cmdHandoffChangeOrderToProjectManager.success": "Submeter a alteração para tratamento: OK",
    "action.cmdHandoffChangeOrderToProjectManager.error": "Submeter a alteração para tratamento: falhou",
    "section.submitChangeOrder.changeOrderWorkspace.title": "Formalizar e encaminhar alteração"
  },
  "automation": {
    "statePrefix": "ui.submitChangeOrder",
    "stateKeys": [
      "ui.submitChangeOrder.status",
      "ui.submitChangeOrder.action.qryLocateClient.status",
      "ui.submitChangeOrder.data.qryLocateClient",
      "ui.submitChangeOrder.action.qryLocateProject.status",
      "ui.submitChangeOrder.data.qryLocateProject",
      "ui.submitChangeOrder.action.cmdCreateChangeOrder.status",
      "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId",
      "ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId",
      "ui.submitChangeOrder.input.cmdCreateChangeOrder.description",
      "ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact",
      "ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact",
      "ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount",
      "ui.submitChangeOrder.output.cmdCreateChangeOrder",
      "ui.submitChangeOrder.action.cmdCreateChangeOrder.error",
      "ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status",
      "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId",
      "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description",
      "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact",
      "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact",
      "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount",
      "ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager",
      "ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error"
    ],
    "actionIds": [
      "qryLocateClient",
      "qryLocateProject",
      "cmdCreateChangeOrder",
      "cmdHandoffChangeOrderToProjectManager",
      "set.cmdCreateChangeOrderClientClientId",
      "set.cmdCreateChangeOrderProjectProjectId",
      "set.cmdCreateChangeOrderDescription",
      "set.cmdCreateChangeOrderScopeImpact",
      "set.cmdCreateChangeOrderScheduleImpact",
      "set.cmdCreateChangeOrderChangeAmount",
      "set.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId",
      "set.cmdHandoffChangeOrderToProjectManagerDescription",
      "set.cmdHandoffChangeOrderToProjectManagerScopeImpact",
      "set.cmdHandoffChangeOrderToProjectManagerScheduleImpact",
      "set.cmdHandoffChangeOrderToProjectManagerChangeAmount"
    ]
  }
};

export const pipeline = [
  {
    "id": "submitChangeOrder__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/submitChangeOrder.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "changeOrderRequiresClientAndProject",
      "managerActionableChangeOrder"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
