/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "declineChangeOrder",
  "pageName": "Recusar ordem de mudança",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmDeclineChangeOrderBase",
  "routePattern": "/buildFlowFsm/declineChangeOrder/:projectProjectId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workspace:declineChangeOrder",
    "contract:buildFlowFsm.declineChangeOrder.qryLocateChangeOrder",
    "contract:buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision",
    "contract:buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
    "contract:buildFlowFsm.declineChangeOrder.qryClientPicker"
  ],
  "operationIds": [
    "declineChangeOrderDecision",
    "handoffDeclinedChangeOrderToFieldCoordinator",
    "listClient",
    "locateChangeOrder"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "declineChangeOrder",
    "workspaceKind": "workflow",
    "workflowId": "changeOrderLifecycle",
    "actor": "projectManager",
    "entity": "ChangeOrder",
    "owners": [
      {
        "kind": "operation",
        "id": "declineChangeOrderDecision",
        "defPath": "_102046_/l4/buildFlowFsm/operations/declineChangeOrderDecision.defs.ts"
      },
      {
        "kind": "operation",
        "id": "handoffDeclinedChangeOrderToFieldCoordinator",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffDeclinedChangeOrderToFieldCoordinator.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateChangeOrder.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "declineChangeOrderDecision",
          "commandName": "cmdDeclineChangeOrderDecision",
          "steps": [
            "Recusar a ordem de mudança",
            "A ordem fica registrada como recusada pelo gerente."
          ]
        },
        {
          "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
          "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
          "steps": [
            "Devolver a decisão ao campo",
            "O coordenador recebe a ordem recusada para tratar o resultado."
          ]
        },
        {
          "operationId": "listClient",
          "commandName": "qryClientPicker",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "locateChangeOrder",
          "commandName": "qryLocateChangeOrder",
          "steps": [
            "Localizar a ordem de mudança submetida",
            "Uma ordem pendente de tratamento está selecionada."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/declineChangeOrder.ts",
    "contracts": [
      {
        "commandName": "qryLocateChangeOrder",
        "routeConst": "qryLocateChangeOrderRoute"
      },
      {
        "commandName": "cmdDeclineChangeOrderDecision",
        "routeConst": "cmdDeclineChangeOrderDecisionRoute"
      },
      {
        "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "routeConst": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorRoute"
      },
      {
        "commandName": "qryClientPicker",
        "routeConst": "qryClientPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/declineChangeOrder.defs.ts",
    "layoutId": "declineChangeOrderWorkflowQueue"
  },
  "states": [
    {
      "stateKey": "ui.declineChangeOrder.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.action.qryLocateChangeOrder.status",
      "name": "qryLocateChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "qryLocateChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.declineChangeOrder.data.qryLocateChangeOrder",
      "name": "qryLocateChangeOrderData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateChangeOrder",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status",
      "name": "cmdDeclineChangeOrderDecisionState",
      "kind": "actionStatus",
      "actionRef": "cmdDeclineChangeOrderDecision",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
      "name": "cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeclineChangeOrderDecision",
        "direction": "input",
        "field": "changeOrderChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId",
      "name": "cmdDeclineChangeOrderDecisionClientClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeclineChangeOrderDecision",
        "direction": "input",
        "field": "clientClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId",
      "name": "cmdDeclineChangeOrderDecisionProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdDeclineChangeOrderDecision",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status",
      "name": "cmdDeclineChangeOrderDecisionStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdDeclineChangeOrderDecision",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision",
      "name": "cmdDeclineChangeOrderDecisionOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeclineChangeOrderDecision",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error",
      "name": "cmdDeclineChangeOrderDecisionError",
      "kind": "actionError",
      "actionRef": "cmdDeclineChangeOrderDecision",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "direction": "input",
        "field": "changeOrderChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "direction": "input",
        "field": "scopeImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "direction": "input",
        "field": "scheduleImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "direction": "input",
        "field": "changeAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error",
      "name": "cmdHandoffDeclinedChangeOrderToFieldCoordinatorError",
      "kind": "actionError",
      "actionRef": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.declineChangeOrder.action.qryClientPicker.status",
      "name": "qryClientPickerState",
      "kind": "actionStatus",
      "actionRef": "qryClientPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.declineChangeOrder.data.qryClientPicker",
      "name": "qryClientPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryClientPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateChangeOrder",
      "kind": "query",
      "commandRef": "qryLocateChangeOrder",
      "routeKey": "buildFlowFsm.declineChangeOrder.qryLocateChangeOrder",
      "purpose": "Localizar a ordem de mudança submetida",
      "methodName": "loadQryLocateChangeOrder",
      "handlerName": "handleQryLocateChangeOrderClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.declineChangeOrder.data.qryLocateChangeOrder"
      ],
      "statusStateKey": "ui.declineChangeOrder.action.qryLocateChangeOrder.status"
    },
    {
      "actionId": "cmdDeclineChangeOrderDecision",
      "kind": "command",
      "commandRef": "cmdDeclineChangeOrderDecision",
      "routeKey": "buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision",
      "purpose": "Recusar a ordem de mudança",
      "methodName": "cmdDeclineChangeOrderDecision",
      "handlerName": "handleCmdDeclineChangeOrderDecisionClick",
      "inputStateKeys": [
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status"
      ],
      "routeParamInputStateKeys": [
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId"
      ],
      "outputStateKeys": [
        "ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision"
      ],
      "statusStateKey": "ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status",
      "errorStateKey": "ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error",
      "feedback": {
        "successMessageKey": "action.cmdDeclineChangeOrderDecision.success",
        "errorMessageKey": "action.cmdDeclineChangeOrderDecision.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status"
      ],
      "refreshActionIds": [
        "qryLocateChangeOrder",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "kind": "command",
      "commandRef": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "routeKey": "buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "purpose": "Devolver a decisão ao campo",
      "methodName": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "handlerName": "handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick",
      "inputStateKeys": [
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId"
      ],
      "outputStateKeys": [
        "ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator"
      ],
      "statusStateKey": "ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status",
      "errorStateKey": "ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success",
        "errorMessageKey": "action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount"
      ],
      "refreshActionIds": [
        "qryLocateChangeOrder",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "qryClientPicker",
      "kind": "query",
      "commandRef": "qryClientPicker",
      "routeKey": "buildFlowFsm.declineChangeOrder.qryClientPicker",
      "purpose": "Listar Cliente",
      "methodName": "loadQryClientPicker",
      "handlerName": "handleQryClientPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.declineChangeOrder.data.qryClientPicker"
      ],
      "statusStateKey": "ui.declineChangeOrder.action.qryClientPicker.status"
    },
    {
      "actionId": "set.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
      "methodName": "setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId",
      "handlerName": "handleCmdDeclineChangeOrderDecisionChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdDeclineChangeOrderDecisionClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId",
      "methodName": "setCmdDeclineChangeOrderDecisionClientClientId",
      "handlerName": "handleCmdDeclineChangeOrderDecisionClientClientIdChange"
    },
    {
      "actionId": "set.cmdDeclineChangeOrderDecisionProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId",
      "methodName": "setCmdDeclineChangeOrderDecisionProjectProjectId",
      "handlerName": "handleCmdDeclineChangeOrderDecisionProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdDeclineChangeOrderDecisionStatus",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status",
      "methodName": "setCmdDeclineChangeOrderDecisionStatus",
      "handlerName": "handleCmdDeclineChangeOrderDecisionStatusChange"
    },
    {
      "actionId": "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
      "methodName": "setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId",
      "handlerName": "handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description",
      "methodName": "setCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription",
      "handlerName": "handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange"
    },
    {
      "actionId": "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
      "methodName": "setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact",
      "handlerName": "handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange"
    },
    {
      "actionId": "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
      "methodName": "setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact",
      "handlerName": "handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange"
    },
    {
      "actionId": "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount",
      "kind": "stateSetter",
      "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount",
      "methodName": "setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount",
      "handlerName": "handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateChangeOrder",
      "stateKey": "ui.declineChangeOrder.data.qryLocateChangeOrder"
    },
    {
      "actionId": "qryClientPicker",
      "stateKey": "ui.declineChangeOrder.data.qryClientPicker"
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
    "section.declineChangeOrder.locateChangeOrder.title": "Ordem submetida",
    "organism.declineChangeOrder.qryLocateChangeOrder.title": "Localizar a ordem de mudança submetida",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.title": "Localizar a ordem de mudança submetida",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.empty": "Nenhum registro encontrado",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label": "Change Order Id",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label": "Client Ref",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label": "Project Ref",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label": "Description",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label": "Scope Impact",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label": "Change Amount",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label": "Submitted At",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label": "Status",
    "section.declineChangeOrder.declineChangeOrderDecision.title": "Registrar recusa",
    "organism.declineChangeOrder.cmdDeclineChangeOrderDecision.title": "Recusar a ordem de mudança",
    "intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title": "Recusar a ordem de mudança",
    "intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision": "Recusar a ordem de mudança",
    "intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label": "Status",
    "organism.declineChangeOrder.qryClientPicker.title": "Listar Cliente",
    "intent.declineChangeOrder.qryClientPicker.list.title": "Listar Cliente",
    "intent.declineChangeOrder.qryClientPicker.list.empty": "Nenhum registro encontrado",
    "intent.declineChangeOrder.qryClientPicker.list.column.clientId.label": "Client Id",
    "intent.declineChangeOrder.qryClientPicker.list.column.clientName.label": "Client Name",
    "intent.declineChangeOrder.qryClientPicker.list.column.contactEmail.label": "Contact Email",
    "intent.declineChangeOrder.qryClientPicker.list.column.contactPhone.label": "Contact Phone",
    "section.declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator.title": "Devolver ao campo",
    "organism.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.title": "Devolver a decisão ao campo",
    "intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title": "Devolver a decisão ao campo",
    "intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator": "Devolver a decisão ao campo",
    "intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label": "Description",
    "intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label": "Scope Impact",
    "intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label": "Schedule Impact",
    "intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label": "Change Amount",
    "action.cmdDeclineChangeOrderDecision.success": "Recusar a ordem de mudança: OK",
    "action.cmdDeclineChangeOrderDecision.error": "Recusar a ordem de mudança: falhou",
    "action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success": "Devolver a decisão ao campo: OK",
    "action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error": "Devolver a decisão ao campo: falhou",
    "section.declineChangeOrder.decisionQueue.title": "Ordens para decisão",
    "section.declineChangeOrder.handoffOutcome.title": "Resultado e encaminhamento"
  },
  "automation": {
    "statePrefix": "ui.declineChangeOrder",
    "stateKeys": [
      "ui.declineChangeOrder.status",
      "ui.declineChangeOrder.action.qryLocateChangeOrder.status",
      "ui.declineChangeOrder.data.qryLocateChangeOrder",
      "ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status",
      "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
      "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId",
      "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId",
      "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status",
      "ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision",
      "ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error",
      "ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status",
      "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
      "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description",
      "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
      "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
      "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount",
      "ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error",
      "ui.declineChangeOrder.action.qryClientPicker.status",
      "ui.declineChangeOrder.data.qryClientPicker"
    ],
    "actionIds": [
      "qryLocateChangeOrder",
      "cmdDeclineChangeOrderDecision",
      "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "qryClientPicker",
      "set.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId",
      "set.cmdDeclineChangeOrderDecisionClientClientId",
      "set.cmdDeclineChangeOrderDecisionProjectProjectId",
      "set.cmdDeclineChangeOrderDecisionStatus",
      "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId",
      "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription",
      "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact",
      "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact",
      "set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount"
    ]
  }
};

export const pipeline = [
  {
    "id": "declineChangeOrder__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/declineChangeOrder.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "managerActionableChangeOrder"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
