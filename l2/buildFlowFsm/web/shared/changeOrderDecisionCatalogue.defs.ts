/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderDecisionCatalogue",
  "pageName": "Decisão sobre ordem de mudança",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmChangeOrderDecisionCatalogueBase",
  "routePattern": "/buildFlowFsm/changeOrderDecisionCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:changeOrderDecisionCatalogue",
    "contract:buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision",
    "contract:buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision",
    "contract:buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision",
    "contract:buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision",
    "contract:buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker"
  ],
  "operationIds": [
    "createChangeOrderDecision",
    "deleteChangeOrderDecision",
    "listChangeOrder",
    "listChangeOrderDecision",
    "updateChangeOrderDecision"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "changeOrderDecisionCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "ChangeOrderDecision",
    "owners": [
      {
        "kind": "operation",
        "id": "createChangeOrderDecision",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createChangeOrderDecision.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteChangeOrderDecision",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteChangeOrderDecision.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listChangeOrderDecision",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listChangeOrderDecision.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateChangeOrderDecision",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateChangeOrderDecision.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createChangeOrderDecision",
          "commandName": "cmdCreateChangeOrderDecision",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteChangeOrderDecision",
          "commandName": "cmdDeleteChangeOrderDecision",
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
          "operationId": "listChangeOrderDecision",
          "commandName": "qryListChangeOrderDecision",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "updateChangeOrderDecision",
          "commandName": "cmdUpdateChangeOrderDecision",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/changeOrderDecisionCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListChangeOrderDecision",
        "routeConst": "qryListChangeOrderDecisionRoute"
      },
      {
        "commandName": "cmdCreateChangeOrderDecision",
        "routeConst": "cmdCreateChangeOrderDecisionRoute"
      },
      {
        "commandName": "cmdUpdateChangeOrderDecision",
        "routeConst": "cmdUpdateChangeOrderDecisionRoute"
      },
      {
        "commandName": "cmdDeleteChangeOrderDecision",
        "routeConst": "cmdDeleteChangeOrderDecisionRoute"
      },
      {
        "commandName": "qryChangeOrderPicker",
        "routeConst": "qryChangeOrderPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderDecisionCatalogue.defs.ts",
    "layoutId": "changeOrderDecisionCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status",
      "name": "qryListChangeOrderDecisionState",
      "kind": "actionStatus",
      "actionRef": "qryListChangeOrderDecision",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision",
      "name": "qryListChangeOrderDecisionData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListChangeOrderDecision",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status",
      "name": "cmdCreateChangeOrderDecisionState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateChangeOrderDecision",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder",
      "name": "cmdCreateChangeOrderDecisionChangeOrder",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateChangeOrderDecision",
        "direction": "input",
        "field": "changeOrder"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser",
      "name": "cmdCreateChangeOrderDecisionMadeByPlatformUser",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrderDecision",
        "direction": "input",
        "field": "madeByPlatformUser"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision",
      "name": "cmdCreateChangeOrderDecisionDecision",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrderDecision",
        "direction": "input",
        "field": "decision"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt",
      "name": "cmdCreateChangeOrderDecisionDecidedAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrderDecision",
        "direction": "input",
        "field": "decidedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision",
      "name": "cmdCreateChangeOrderDecisionOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateChangeOrderDecision",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error",
      "name": "cmdCreateChangeOrderDecisionError",
      "kind": "actionError",
      "actionRef": "cmdCreateChangeOrderDecision",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status",
      "name": "cmdUpdateChangeOrderDecisionState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateChangeOrderDecision",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
      "name": "cmdUpdateChangeOrderDecisionChangeOrderDecisionId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderDecision",
        "direction": "input",
        "field": "changeOrderDecisionId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder",
      "name": "cmdUpdateChangeOrderDecisionChangeOrder",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderDecision",
        "direction": "input",
        "field": "changeOrder"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser",
      "name": "cmdUpdateChangeOrderDecisionMadeByPlatformUser",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderDecision",
        "direction": "input",
        "field": "madeByPlatformUser"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision",
      "name": "cmdUpdateChangeOrderDecisionDecision",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderDecision",
        "direction": "input",
        "field": "decision"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt",
      "name": "cmdUpdateChangeOrderDecisionDecidedAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderDecision",
        "direction": "input",
        "field": "decidedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision",
      "name": "cmdUpdateChangeOrderDecisionOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderDecision",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error",
      "name": "cmdUpdateChangeOrderDecisionError",
      "kind": "actionError",
      "actionRef": "cmdUpdateChangeOrderDecision",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status",
      "name": "cmdDeleteChangeOrderDecisionState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteChangeOrderDecision",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId",
      "name": "cmdDeleteChangeOrderDecisionChangeOrderDecisionId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteChangeOrderDecision",
        "direction": "input",
        "field": "changeOrderDecisionId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision",
      "name": "cmdDeleteChangeOrderDecisionOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteChangeOrderDecision",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error",
      "name": "cmdDeleteChangeOrderDecisionError",
      "kind": "actionError",
      "actionRef": "cmdDeleteChangeOrderDecision",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status",
      "name": "qryChangeOrderPickerState",
      "kind": "actionStatus",
      "actionRef": "qryChangeOrderPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker",
      "name": "qryChangeOrderPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryChangeOrderPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListChangeOrderDecision",
      "kind": "query",
      "commandRef": "qryListChangeOrderDecision",
      "routeKey": "buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision",
      "purpose": "Listar Decisão sobre ordem de mudança",
      "methodName": "loadQryListChangeOrderDecision",
      "handlerName": "handleQryListChangeOrderDecisionClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision"
      ],
      "statusStateKey": "ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status"
    },
    {
      "actionId": "cmdCreateChangeOrderDecision",
      "kind": "command",
      "commandRef": "cmdCreateChangeOrderDecision",
      "routeKey": "buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision",
      "purpose": "Criar Decisão sobre ordem de mudança",
      "methodName": "cmdCreateChangeOrderDecision",
      "handlerName": "handleCmdCreateChangeOrderDecisionClick",
      "inputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder"
      ],
      "outputStateKeys": [
        "ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision"
      ],
      "statusStateKey": "ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status",
      "errorStateKey": "ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateChangeOrderDecision.success",
        "errorMessageKey": "action.cmdCreateChangeOrderDecision.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt"
      ],
      "refreshActionIds": [
        "qryListChangeOrderDecision",
        "qryChangeOrderPicker"
      ]
    },
    {
      "actionId": "cmdUpdateChangeOrderDecision",
      "kind": "command",
      "commandRef": "cmdUpdateChangeOrderDecision",
      "routeKey": "buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision",
      "purpose": "Atualizar Decisão sobre ordem de mudança",
      "methodName": "cmdUpdateChangeOrderDecision",
      "handlerName": "handleCmdUpdateChangeOrderDecisionClick",
      "inputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder"
      ],
      "outputStateKeys": [
        "ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision"
      ],
      "statusStateKey": "ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status",
      "errorStateKey": "ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateChangeOrderDecision.success",
        "errorMessageKey": "action.cmdUpdateChangeOrderDecision.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt"
      ],
      "refreshActionIds": [
        "qryListChangeOrderDecision",
        "qryChangeOrderPicker"
      ]
    },
    {
      "actionId": "cmdDeleteChangeOrderDecision",
      "kind": "command",
      "commandRef": "cmdDeleteChangeOrderDecision",
      "routeKey": "buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision",
      "purpose": "Excluir Decisão sobre ordem de mudança",
      "methodName": "cmdDeleteChangeOrderDecision",
      "handlerName": "handleCmdDeleteChangeOrderDecisionClick",
      "inputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId"
      ],
      "outputStateKeys": [
        "ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision"
      ],
      "statusStateKey": "ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status",
      "errorStateKey": "ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteChangeOrderDecision.success",
        "errorMessageKey": "action.cmdDeleteChangeOrderDecision.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId"
      ],
      "refreshActionIds": [
        "qryListChangeOrderDecision",
        "qryChangeOrderPicker"
      ]
    },
    {
      "actionId": "qryChangeOrderPicker",
      "kind": "query",
      "commandRef": "qryChangeOrderPicker",
      "routeKey": "buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker",
      "purpose": "Listar Ordem de mudança",
      "methodName": "loadQryChangeOrderPicker",
      "handlerName": "handleQryChangeOrderPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker"
      ],
      "statusStateKey": "ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status"
    },
    {
      "actionId": "set.cmdCreateChangeOrderDecisionChangeOrder",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder",
      "methodName": "setCmdCreateChangeOrderDecisionChangeOrder",
      "handlerName": "handleCmdCreateChangeOrderDecisionChangeOrderChange",
      "prefill": {
        "command": "cmdCreateChangeOrderDecision",
        "sourceStateKey": "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision",
        "sourceOutputShape": "array",
        "matchField": "changeOrder",
        "fields": [
          {
            "itemField": "madeByPlatformUser",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser"
          },
          {
            "itemField": "decision",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision"
          },
          {
            "itemField": "decidedAt",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdCreateChangeOrderDecisionMadeByPlatformUser",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser",
      "methodName": "setCmdCreateChangeOrderDecisionMadeByPlatformUser",
      "handlerName": "handleCmdCreateChangeOrderDecisionMadeByPlatformUserChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderDecisionDecision",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision",
      "methodName": "setCmdCreateChangeOrderDecisionDecision",
      "handlerName": "handleCmdCreateChangeOrderDecisionDecisionChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderDecisionDecidedAt",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt",
      "methodName": "setCmdCreateChangeOrderDecisionDecidedAt",
      "handlerName": "handleCmdCreateChangeOrderDecisionDecidedAtChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderDecisionChangeOrderDecisionId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
      "methodName": "setCmdUpdateChangeOrderDecisionChangeOrderDecisionId",
      "handlerName": "handleCmdUpdateChangeOrderDecisionChangeOrderDecisionIdChange",
      "prefill": {
        "command": "cmdUpdateChangeOrderDecision",
        "sourceStateKey": "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision",
        "sourceOutputShape": "array",
        "matchField": "changeOrderDecisionId",
        "fields": [
          {
            "itemField": "madeByPlatformUser",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser"
          },
          {
            "itemField": "decision",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision"
          },
          {
            "itemField": "decidedAt",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateChangeOrderDecisionChangeOrder",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder",
      "methodName": "setCmdUpdateChangeOrderDecisionChangeOrder",
      "handlerName": "handleCmdUpdateChangeOrderDecisionChangeOrderChange",
      "prefill": {
        "command": "cmdUpdateChangeOrderDecision",
        "sourceStateKey": "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision",
        "sourceOutputShape": "array",
        "matchField": "changeOrder",
        "fields": [
          {
            "itemField": "madeByPlatformUser",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser"
          },
          {
            "itemField": "decision",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision"
          },
          {
            "itemField": "decidedAt",
            "targetStateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateChangeOrderDecisionMadeByPlatformUser",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser",
      "methodName": "setCmdUpdateChangeOrderDecisionMadeByPlatformUser",
      "handlerName": "handleCmdUpdateChangeOrderDecisionMadeByPlatformUserChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderDecisionDecision",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision",
      "methodName": "setCmdUpdateChangeOrderDecisionDecision",
      "handlerName": "handleCmdUpdateChangeOrderDecisionDecisionChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderDecisionDecidedAt",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt",
      "methodName": "setCmdUpdateChangeOrderDecisionDecidedAt",
      "handlerName": "handleCmdUpdateChangeOrderDecisionDecidedAtChange"
    },
    {
      "actionId": "set.cmdDeleteChangeOrderDecisionChangeOrderDecisionId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId",
      "methodName": "setCmdDeleteChangeOrderDecisionChangeOrderDecisionId",
      "handlerName": "handleCmdDeleteChangeOrderDecisionChangeOrderDecisionIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListChangeOrderDecision",
      "stateKey": "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision"
    },
    {
      "actionId": "qryChangeOrderPicker",
      "stateKey": "ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker"
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
    "section.changeOrderDecisionCatalogue.recordList.title": "Localizar decisões",
    "organism.changeOrderDecisionCatalogue.qryListChangeOrderDecision.title": "Listar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.title": "Listar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty": "Nenhum registro encontrado",
    "intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label": "Change Order Decision Id",
    "intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label": "Change Order",
    "intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label": "Made By Platform User",
    "intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label": "Decision",
    "intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label": "Decided At",
    "organism.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.title": "Atualizar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title": "Atualizar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision": "Atualizar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.madeByPlatformUser.label": "Made By Platform User",
    "intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label": "Decision",
    "intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label": "Decided At",
    "organism.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.title": "Excluir Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.title": "Excluir Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision": "Excluir Decisão sobre ordem de mudança",
    "section.changeOrderDecisionCatalogue.recordForm.title": "Criar ou corrigir decisão",
    "organism.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.title": "Criar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title": "Criar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision": "Criar Decisão sobre ordem de mudança",
    "intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.madeByPlatformUser.label": "Made By Platform User",
    "intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label": "Decision",
    "intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label": "Decided At",
    "organism.changeOrderDecisionCatalogue.qryChangeOrderPicker.title": "Listar Ordem de mudança",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title": "Listar Ordem de mudança",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty": "Nenhum registro encontrado",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label": "Change Order Id",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label": "Client Ref",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label": "Project Ref",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label": "Description",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label": "Scope Impact",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeAmount.label": "Change Amount",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.submittedAt.label": "Submitted At",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label": "Status",
    "action.cmdCreateChangeOrderDecision.success": "Criar Decisão sobre ordem de mudança: OK",
    "action.cmdCreateChangeOrderDecision.error": "Criar Decisão sobre ordem de mudança: falhou",
    "action.cmdUpdateChangeOrderDecision.success": "Atualizar Decisão sobre ordem de mudança: OK",
    "action.cmdUpdateChangeOrderDecision.error": "Atualizar Decisão sobre ordem de mudança: falhou",
    "action.cmdDeleteChangeOrderDecision.success": "Excluir Decisão sobre ordem de mudança: OK",
    "action.cmdDeleteChangeOrderDecision.error": "Excluir Decisão sobre ordem de mudança: falhou",
    "section.changeOrderDecisionCatalogue.decisionWorkbench.title": "Decisões sobre ordens de mudança",
    "section.changeOrderDecisionCatalogue.decisionCreation.title": "Registrar decisão",
    "section.changeOrderDecisionCatalogue.newDecision.title": "Registrar decisão"
  },
  "automation": {
    "statePrefix": "ui.changeOrderDecisionCatalogue",
    "stateKeys": [
      "ui.changeOrderDecisionCatalogue.status",
      "ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status",
      "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision",
      "ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status",
      "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder",
      "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser",
      "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision",
      "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt",
      "ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision",
      "ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error",
      "ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status",
      "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
      "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder",
      "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser",
      "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision",
      "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt",
      "ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision",
      "ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error",
      "ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status",
      "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId",
      "ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision",
      "ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error",
      "ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status",
      "ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker"
    ],
    "actionIds": [
      "qryListChangeOrderDecision",
      "cmdCreateChangeOrderDecision",
      "cmdUpdateChangeOrderDecision",
      "cmdDeleteChangeOrderDecision",
      "qryChangeOrderPicker",
      "set.cmdCreateChangeOrderDecisionChangeOrder",
      "set.cmdCreateChangeOrderDecisionMadeByPlatformUser",
      "set.cmdCreateChangeOrderDecisionDecision",
      "set.cmdCreateChangeOrderDecisionDecidedAt",
      "set.cmdUpdateChangeOrderDecisionChangeOrderDecisionId",
      "set.cmdUpdateChangeOrderDecisionChangeOrder",
      "set.cmdUpdateChangeOrderDecisionMadeByPlatformUser",
      "set.cmdUpdateChangeOrderDecisionDecision",
      "set.cmdUpdateChangeOrderDecisionDecidedAt",
      "set.cmdDeleteChangeOrderDecisionChangeOrderDecisionId"
    ]
  }
};

export const pipeline = [
  {
    "id": "changeOrderDecisionCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/changeOrderDecisionCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "onlyClientApprovesOwnChangeOrder",
      "onlyProjectManagerDeclinesChangeOrder"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
