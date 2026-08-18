/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderCatalogue",
  "pageName": "Ordem de mudança",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmChangeOrderCatalogueBase",
  "routePattern": "/buildFlowFsm/changeOrderCatalogue/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:changeOrderCatalogue",
    "contract:buildFlowFsm.changeOrderCatalogue.qryListChangeOrder",
    "contract:buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder",
    "contract:buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
    "contract:buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder",
    "contract:buildFlowFsm.changeOrderCatalogue.qryClientPicker",
    "contract:buildFlowFsm.changeOrderCatalogue.qryProjectPicker"
  ],
  "operationIds": [
    "createChangeOrder",
    "deleteChangeOrder",
    "listChangeOrder",
    "listClient",
    "listProject",
    "updateChangeOrder"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "changeOrderCatalogue",
    "workspaceKind": "operation",
    "actor": "client",
    "entity": "ChangeOrder",
    "owners": [
      {
        "kind": "operation",
        "id": "createChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateChangeOrder.defs.ts"
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
          "operationId": "deleteChangeOrder",
          "commandName": "cmdDeleteChangeOrder",
          "steps": [
            "Remover o registro escolhido."
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
          "operationId": "listClient",
          "commandName": "qryClientPicker",
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
          "operationId": "updateChangeOrder",
          "commandName": "cmdUpdateChangeOrder",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/changeOrderCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListChangeOrder",
        "routeConst": "qryListChangeOrderRoute"
      },
      {
        "commandName": "cmdCreateChangeOrder",
        "routeConst": "cmdCreateChangeOrderRoute"
      },
      {
        "commandName": "cmdUpdateChangeOrder",
        "routeConst": "cmdUpdateChangeOrderRoute"
      },
      {
        "commandName": "cmdDeleteChangeOrder",
        "routeConst": "cmdDeleteChangeOrderRoute"
      },
      {
        "commandName": "qryClientPicker",
        "routeConst": "qryClientPickerRoute"
      },
      {
        "commandName": "qryProjectPicker",
        "routeConst": "qryProjectPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderCatalogue.defs.ts",
    "layoutId": "change-order-catalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.changeOrderCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.qryListChangeOrder.status",
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
      "stateKey": "ui.changeOrderCatalogue.data.qryListChangeOrder",
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
      "stateKey": "ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status",
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
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId",
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
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId",
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
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description",
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
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact",
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
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact",
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
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount",
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
      "stateKey": "ui.changeOrderCatalogue.output.cmdCreateChangeOrder",
      "name": "cmdCreateChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error",
      "name": "cmdCreateChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdCreateChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status",
      "name": "cmdUpdateChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
      "name": "cmdUpdateChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "changeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
      "name": "cmdUpdateChangeOrderClientRef",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "clientRef"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef",
      "name": "cmdUpdateChangeOrderProjectRef",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "projectRef"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description",
      "name": "cmdUpdateChangeOrderDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact",
      "name": "cmdUpdateChangeOrderScopeImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "scopeImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact",
      "name": "cmdUpdateChangeOrderScheduleImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "scheduleImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount",
      "name": "cmdUpdateChangeOrderChangeAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "changeAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt",
      "name": "cmdUpdateChangeOrderSubmittedAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "submittedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt",
      "name": "cmdUpdateChangeOrderForwardedForClientApprovalAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "forwardedForClientApprovalAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status",
      "name": "cmdUpdateChangeOrderStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.output.cmdUpdateChangeOrder",
      "name": "cmdUpdateChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error",
      "name": "cmdUpdateChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdUpdateChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status",
      "name": "cmdDeleteChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId",
      "name": "cmdDeleteChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteChangeOrder",
        "direction": "input",
        "field": "changeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.output.cmdDeleteChangeOrder",
      "name": "cmdDeleteChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error",
      "name": "cmdDeleteChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdDeleteChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.qryClientPicker.status",
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
      "stateKey": "ui.changeOrderCatalogue.data.qryClientPicker",
      "name": "qryClientPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryClientPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.changeOrderCatalogue.action.qryProjectPicker.status",
      "name": "qryProjectPickerState",
      "kind": "actionStatus",
      "actionRef": "qryProjectPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderCatalogue.data.qryProjectPicker",
      "name": "qryProjectPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListChangeOrder",
      "kind": "query",
      "commandRef": "qryListChangeOrder",
      "routeKey": "buildFlowFsm.changeOrderCatalogue.qryListChangeOrder",
      "purpose": "Listar Ordem de mudança",
      "methodName": "loadQryListChangeOrder",
      "handlerName": "handleQryListChangeOrderClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.changeOrderCatalogue.data.qryListChangeOrder"
      ],
      "statusStateKey": "ui.changeOrderCatalogue.action.qryListChangeOrder.status"
    },
    {
      "actionId": "cmdCreateChangeOrder",
      "kind": "command",
      "commandRef": "cmdCreateChangeOrder",
      "routeKey": "buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder",
      "purpose": "Registrar a alteração proposta",
      "methodName": "cmdCreateChangeOrder",
      "handlerName": "handleCmdCreateChangeOrderClick",
      "inputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount"
      ],
      "routeParamInputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId"
      ],
      "outputStateKeys": [
        "ui.changeOrderCatalogue.output.cmdCreateChangeOrder"
      ],
      "statusStateKey": "ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status",
      "errorStateKey": "ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateChangeOrder.success",
        "errorMessageKey": "action.cmdCreateChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount"
      ],
      "refreshActionIds": [
        "qryListChangeOrder",
        "qryClientPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdUpdateChangeOrder",
      "kind": "command",
      "commandRef": "cmdUpdateChangeOrder",
      "routeKey": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
      "purpose": "Atualizar Ordem de mudança",
      "methodName": "cmdUpdateChangeOrder",
      "handlerName": "handleCmdUpdateChangeOrderClick",
      "inputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef"
      ],
      "outputStateKeys": [
        "ui.changeOrderCatalogue.output.cmdUpdateChangeOrder"
      ],
      "statusStateKey": "ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status",
      "errorStateKey": "ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateChangeOrder.success",
        "errorMessageKey": "action.cmdUpdateChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status"
      ],
      "refreshActionIds": [
        "qryListChangeOrder",
        "qryClientPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdDeleteChangeOrder",
      "kind": "command",
      "commandRef": "cmdDeleteChangeOrder",
      "routeKey": "buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder",
      "purpose": "Excluir Ordem de mudança",
      "methodName": "cmdDeleteChangeOrder",
      "handlerName": "handleCmdDeleteChangeOrderClick",
      "inputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId"
      ],
      "outputStateKeys": [
        "ui.changeOrderCatalogue.output.cmdDeleteChangeOrder"
      ],
      "statusStateKey": "ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status",
      "errorStateKey": "ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteChangeOrder.success",
        "errorMessageKey": "action.cmdDeleteChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId"
      ],
      "refreshActionIds": [
        "qryListChangeOrder",
        "qryClientPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "qryClientPicker",
      "kind": "query",
      "commandRef": "qryClientPicker",
      "routeKey": "buildFlowFsm.changeOrderCatalogue.qryClientPicker",
      "purpose": "Listar Cliente",
      "methodName": "loadQryClientPicker",
      "handlerName": "handleQryClientPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.changeOrderCatalogue.data.qryClientPicker"
      ],
      "statusStateKey": "ui.changeOrderCatalogue.action.qryClientPicker.status"
    },
    {
      "actionId": "qryProjectPicker",
      "kind": "query",
      "commandRef": "qryProjectPicker",
      "routeKey": "buildFlowFsm.changeOrderCatalogue.qryProjectPicker",
      "purpose": "Listar Obra",
      "methodName": "loadQryProjectPicker",
      "handlerName": "handleQryProjectPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.changeOrderCatalogue.data.qryProjectPicker"
      ],
      "statusStateKey": "ui.changeOrderCatalogue.action.qryProjectPicker.status"
    },
    {
      "actionId": "set.cmdCreateChangeOrderClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId",
      "methodName": "setCmdCreateChangeOrderClientClientId",
      "handlerName": "handleCmdCreateChangeOrderClientClientIdChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId",
      "methodName": "setCmdCreateChangeOrderProjectProjectId",
      "handlerName": "handleCmdCreateChangeOrderProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderDescription",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description",
      "methodName": "setCmdCreateChangeOrderDescription",
      "handlerName": "handleCmdCreateChangeOrderDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderScopeImpact",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact",
      "methodName": "setCmdCreateChangeOrderScopeImpact",
      "handlerName": "handleCmdCreateChangeOrderScopeImpactChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderScheduleImpact",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact",
      "methodName": "setCmdCreateChangeOrderScheduleImpact",
      "handlerName": "handleCmdCreateChangeOrderScheduleImpactChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderChangeAmount",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount",
      "methodName": "setCmdCreateChangeOrderChangeAmount",
      "handlerName": "handleCmdCreateChangeOrderChangeAmountChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
      "methodName": "setCmdUpdateChangeOrderChangeOrderId",
      "handlerName": "handleCmdUpdateChangeOrderChangeOrderIdChange",
      "prefill": {
        "command": "cmdUpdateChangeOrder",
        "sourceStateKey": "ui.changeOrderCatalogue.data.qryListChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "changeOrderId",
        "fields": [
          {
            "itemField": "description",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description"
          },
          {
            "itemField": "scopeImpact",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact"
          },
          {
            "itemField": "scheduleImpact",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact"
          },
          {
            "itemField": "changeAmount",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount"
          },
          {
            "itemField": "submittedAt",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt"
          },
          {
            "itemField": "forwardedForClientApprovalAt",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateChangeOrderClientRef",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
      "methodName": "setCmdUpdateChangeOrderClientRef",
      "handlerName": "handleCmdUpdateChangeOrderClientRefChange",
      "prefill": {
        "command": "cmdUpdateChangeOrder",
        "sourceStateKey": "ui.changeOrderCatalogue.data.qryListChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "clientRef",
        "fields": [
          {
            "itemField": "description",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description"
          },
          {
            "itemField": "scopeImpact",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact"
          },
          {
            "itemField": "scheduleImpact",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact"
          },
          {
            "itemField": "changeAmount",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount"
          },
          {
            "itemField": "submittedAt",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt"
          },
          {
            "itemField": "forwardedForClientApprovalAt",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateChangeOrderProjectRef",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef",
      "methodName": "setCmdUpdateChangeOrderProjectRef",
      "handlerName": "handleCmdUpdateChangeOrderProjectRefChange",
      "prefill": {
        "command": "cmdUpdateChangeOrder",
        "sourceStateKey": "ui.changeOrderCatalogue.data.qryListChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "projectRef",
        "fields": [
          {
            "itemField": "description",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description"
          },
          {
            "itemField": "scopeImpact",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact"
          },
          {
            "itemField": "scheduleImpact",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact"
          },
          {
            "itemField": "changeAmount",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount"
          },
          {
            "itemField": "submittedAt",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt"
          },
          {
            "itemField": "forwardedForClientApprovalAt",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateChangeOrderDescription",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description",
      "methodName": "setCmdUpdateChangeOrderDescription",
      "handlerName": "handleCmdUpdateChangeOrderDescriptionChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderScopeImpact",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact",
      "methodName": "setCmdUpdateChangeOrderScopeImpact",
      "handlerName": "handleCmdUpdateChangeOrderScopeImpactChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderScheduleImpact",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact",
      "methodName": "setCmdUpdateChangeOrderScheduleImpact",
      "handlerName": "handleCmdUpdateChangeOrderScheduleImpactChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderChangeAmount",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount",
      "methodName": "setCmdUpdateChangeOrderChangeAmount",
      "handlerName": "handleCmdUpdateChangeOrderChangeAmountChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderSubmittedAt",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt",
      "methodName": "setCmdUpdateChangeOrderSubmittedAt",
      "handlerName": "handleCmdUpdateChangeOrderSubmittedAtChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderForwardedForClientApprovalAt",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt",
      "methodName": "setCmdUpdateChangeOrderForwardedForClientApprovalAt",
      "handlerName": "handleCmdUpdateChangeOrderForwardedForClientApprovalAtChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderStatus",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status",
      "methodName": "setCmdUpdateChangeOrderStatus",
      "handlerName": "handleCmdUpdateChangeOrderStatusChange"
    },
    {
      "actionId": "set.cmdDeleteChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId",
      "methodName": "setCmdDeleteChangeOrderChangeOrderId",
      "handlerName": "handleCmdDeleteChangeOrderChangeOrderIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListChangeOrder",
      "stateKey": "ui.changeOrderCatalogue.data.qryListChangeOrder"
    },
    {
      "actionId": "qryClientPicker",
      "stateKey": "ui.changeOrderCatalogue.data.qryClientPicker"
    },
    {
      "actionId": "qryProjectPicker",
      "stateKey": "ui.changeOrderCatalogue.data.qryProjectPicker"
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
    "section.changeOrderCatalogue.recordList.title": "Localizar ordem de mudança",
    "organism.changeOrderCatalogue.qryListChangeOrder.title": "Listar Ordem de mudança",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.title": "Listar Ordem de mudança",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.empty": "Nenhum registro encontrado",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label": "Change Order Id",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label": "Client Ref",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label": "Project Ref",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label": "Description",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label": "Scope Impact",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label": "Change Amount",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label": "Submitted At",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label": "Status",
    "organism.changeOrderCatalogue.cmdDeleteChangeOrder.title": "Excluir Ordem de mudança",
    "intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.title": "Excluir Ordem de mudança",
    "intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder": "Excluir Ordem de mudança",
    "section.changeOrderCatalogue.recordForm.title": "Criar ou corrigir ordem de mudança",
    "organism.changeOrderCatalogue.cmdCreateChangeOrder.title": "Registrar a alteração proposta",
    "intent.changeOrderCatalogue.cmdCreateChangeOrder.form.title": "Registrar a alteração proposta",
    "intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder": "Registrar a alteração proposta",
    "intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label": "Description",
    "intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label": "Scope Impact",
    "intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label": "Schedule Impact",
    "intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label": "Change Amount",
    "organism.changeOrderCatalogue.cmdUpdateChangeOrder.title": "Atualizar Ordem de mudança",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.title": "Atualizar Ordem de mudança",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder": "Atualizar Ordem de mudança",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label": "Description",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label": "Scope Impact",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label": "Schedule Impact",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label": "Change Amount",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.submittedAt.label": "Submitted At",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.status.label": "Status",
    "organism.changeOrderCatalogue.qryClientPicker.title": "Listar Cliente",
    "intent.changeOrderCatalogue.qryClientPicker.list.title": "Listar Cliente",
    "intent.changeOrderCatalogue.qryClientPicker.list.empty": "Nenhum registro encontrado",
    "intent.changeOrderCatalogue.qryClientPicker.list.column.clientId.label": "Client Id",
    "intent.changeOrderCatalogue.qryClientPicker.list.column.clientName.label": "Client Name",
    "intent.changeOrderCatalogue.qryClientPicker.list.column.contactEmail.label": "Contact Email",
    "intent.changeOrderCatalogue.qryClientPicker.list.column.contactPhone.label": "Contact Phone",
    "organism.changeOrderCatalogue.qryProjectPicker.title": "Listar Obra",
    "intent.changeOrderCatalogue.qryProjectPicker.list.title": "Listar Obra",
    "intent.changeOrderCatalogue.qryProjectPicker.list.empty": "Nenhum registro encontrado",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.projectId.label": "Project Id",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.clientId.label": "Client Id",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.name.label": "Name",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.address.label": "Address",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.status.label": "Status",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedEndDate.label": "Planned End Date",
    "action.cmdCreateChangeOrder.success": "Registrar a alteração proposta: OK",
    "action.cmdCreateChangeOrder.error": "Registrar a alteração proposta: falhou",
    "action.cmdUpdateChangeOrder.success": "Atualizar Ordem de mudança: OK",
    "action.cmdUpdateChangeOrder.error": "Atualizar Ordem de mudança: falhou",
    "action.cmdDeleteChangeOrder.success": "Excluir Ordem de mudança: OK",
    "action.cmdDeleteChangeOrder.error": "Excluir Ordem de mudança: falhou",
    "section.changeOrderCatalogue.changeOrderWorkspace.title": "Ordens de mudança",
    "section.changeOrderCatalogue.changeOrderCreation.title": "Nova ordem de mudança",
    "section.changeOrderCatalogue.changeOrderRegistration.title": "Registrar alteração proposta"
  },
  "automation": {
    "statePrefix": "ui.changeOrderCatalogue",
    "stateKeys": [
      "ui.changeOrderCatalogue.status",
      "ui.changeOrderCatalogue.action.qryListChangeOrder.status",
      "ui.changeOrderCatalogue.data.qryListChangeOrder",
      "ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status",
      "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId",
      "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId",
      "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description",
      "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact",
      "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact",
      "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount",
      "ui.changeOrderCatalogue.output.cmdCreateChangeOrder",
      "ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error",
      "ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt",
      "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status",
      "ui.changeOrderCatalogue.output.cmdUpdateChangeOrder",
      "ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error",
      "ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status",
      "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId",
      "ui.changeOrderCatalogue.output.cmdDeleteChangeOrder",
      "ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error",
      "ui.changeOrderCatalogue.action.qryClientPicker.status",
      "ui.changeOrderCatalogue.data.qryClientPicker",
      "ui.changeOrderCatalogue.action.qryProjectPicker.status",
      "ui.changeOrderCatalogue.data.qryProjectPicker"
    ],
    "actionIds": [
      "qryListChangeOrder",
      "cmdCreateChangeOrder",
      "cmdUpdateChangeOrder",
      "cmdDeleteChangeOrder",
      "qryClientPicker",
      "qryProjectPicker",
      "set.cmdCreateChangeOrderClientClientId",
      "set.cmdCreateChangeOrderProjectProjectId",
      "set.cmdCreateChangeOrderDescription",
      "set.cmdCreateChangeOrderScopeImpact",
      "set.cmdCreateChangeOrderScheduleImpact",
      "set.cmdCreateChangeOrderChangeAmount",
      "set.cmdUpdateChangeOrderChangeOrderId",
      "set.cmdUpdateChangeOrderClientRef",
      "set.cmdUpdateChangeOrderProjectRef",
      "set.cmdUpdateChangeOrderDescription",
      "set.cmdUpdateChangeOrderScopeImpact",
      "set.cmdUpdateChangeOrderScheduleImpact",
      "set.cmdUpdateChangeOrderChangeAmount",
      "set.cmdUpdateChangeOrderSubmittedAt",
      "set.cmdUpdateChangeOrderForwardedForClientApprovalAt",
      "set.cmdUpdateChangeOrderStatus",
      "set.cmdDeleteChangeOrderChangeOrderId"
    ]
  }
};

export const pipeline = [
  {
    "id": "changeOrderCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/changeOrderCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "changeOrderRequiresClientAndProject",
      "managerActionableChangeOrder",
      "clientApprovableChangeOrder",
      "approvedBillableChangeOrder",
      "clientVisibleApprovedChangeOrder"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
