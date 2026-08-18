/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "inventoryBalanceCatalogue",
  "pageName": "Saldo de estoque",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmInventoryBalanceCatalogueBase",
  "routePattern": "/buildFlowFsm/inventoryBalanceCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:inventoryBalanceCatalogue",
    "contract:buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance",
    "contract:buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
    "contract:buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
    "contract:buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
    "contract:buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker"
  ],
  "operationIds": [
    "createInventoryBalance",
    "deleteInventoryBalance",
    "listInventoryBalance",
    "listInventoryItem",
    "updateInventoryBalance"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "inventoryBalanceCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "InventoryBalance",
    "owners": [
      {
        "kind": "operation",
        "id": "createInventoryBalance",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createInventoryBalance.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteInventoryBalance",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteInventoryBalance.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInventoryBalance",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInventoryBalance.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInventoryItem",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInventoryItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateInventoryBalance",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateInventoryBalance.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createInventoryBalance",
          "commandName": "cmdCreateInventoryBalance",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteInventoryBalance",
          "commandName": "cmdDeleteInventoryBalance",
          "steps": [
            "Remover o registro escolhido."
          ]
        },
        {
          "operationId": "listInventoryBalance",
          "commandName": "qryListInventoryBalance",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listInventoryItem",
          "commandName": "qryInventoryItemPicker",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "updateInventoryBalance",
          "commandName": "cmdUpdateInventoryBalance",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/inventoryBalanceCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListInventoryBalance",
        "routeConst": "qryListInventoryBalanceRoute"
      },
      {
        "commandName": "cmdCreateInventoryBalance",
        "routeConst": "cmdCreateInventoryBalanceRoute"
      },
      {
        "commandName": "cmdUpdateInventoryBalance",
        "routeConst": "cmdUpdateInventoryBalanceRoute"
      },
      {
        "commandName": "cmdDeleteInventoryBalance",
        "routeConst": "cmdDeleteInventoryBalanceRoute"
      },
      {
        "commandName": "qryInventoryItemPicker",
        "routeConst": "qryInventoryItemPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryBalanceCatalogue.defs.ts",
    "layoutId": "pos-workspace-inventory-balance"
  },
  "states": [
    {
      "stateKey": "ui.inventoryBalanceCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status",
      "name": "qryListInventoryBalanceState",
      "kind": "actionStatus",
      "actionRef": "qryListInventoryBalance",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance",
      "name": "qryListInventoryBalanceData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListInventoryBalance",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status",
      "name": "cmdCreateInventoryBalanceState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateInventoryBalance",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
      "name": "cmdCreateInventoryBalanceInventoryItemId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateInventoryBalance",
        "direction": "input",
        "field": "inventoryItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
      "name": "cmdCreateInventoryBalancePhysicalQuantity",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryBalance",
        "direction": "input",
        "field": "physicalQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
      "name": "cmdCreateInventoryBalanceApplicableUnitCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryBalance",
        "direction": "input",
        "field": "applicableUnitCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status",
      "name": "cmdCreateInventoryBalanceStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryBalance",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance",
      "name": "cmdCreateInventoryBalanceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateInventoryBalance",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error",
      "name": "cmdCreateInventoryBalanceError",
      "kind": "actionError",
      "actionRef": "cmdCreateInventoryBalance",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status",
      "name": "cmdUpdateInventoryBalanceState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateInventoryBalance",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
      "name": "cmdUpdateInventoryBalanceInventoryBalanceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInventoryBalance",
        "direction": "input",
        "field": "inventoryBalanceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
      "name": "cmdUpdateInventoryBalanceInventoryItemId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInventoryBalance",
        "direction": "input",
        "field": "inventoryItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
      "name": "cmdUpdateInventoryBalancePhysicalQuantity",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryBalance",
        "direction": "input",
        "field": "physicalQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
      "name": "cmdUpdateInventoryBalanceApplicableUnitCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryBalance",
        "direction": "input",
        "field": "applicableUnitCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status",
      "name": "cmdUpdateInventoryBalanceStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryBalance",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance",
      "name": "cmdUpdateInventoryBalanceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateInventoryBalance",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error",
      "name": "cmdUpdateInventoryBalanceError",
      "kind": "actionError",
      "actionRef": "cmdUpdateInventoryBalance",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status",
      "name": "cmdDeleteInventoryBalanceState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteInventoryBalance",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId",
      "name": "cmdDeleteInventoryBalanceInventoryBalanceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteInventoryBalance",
        "direction": "input",
        "field": "inventoryBalanceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance",
      "name": "cmdDeleteInventoryBalanceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteInventoryBalance",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error",
      "name": "cmdDeleteInventoryBalanceError",
      "kind": "actionError",
      "actionRef": "cmdDeleteInventoryBalance",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status",
      "name": "qryInventoryItemPickerState",
      "kind": "actionStatus",
      "actionRef": "qryInventoryItemPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker",
      "name": "qryInventoryItemPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInventoryItemPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListInventoryBalance",
      "kind": "query",
      "commandRef": "qryListInventoryBalance",
      "routeKey": "buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance",
      "purpose": "Listar Saldo de estoque",
      "methodName": "loadQryListInventoryBalance",
      "handlerName": "handleQryListInventoryBalanceClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance"
      ],
      "statusStateKey": "ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status"
    },
    {
      "actionId": "cmdCreateInventoryBalance",
      "kind": "command",
      "commandRef": "cmdCreateInventoryBalance",
      "routeKey": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
      "purpose": "Criar Saldo de estoque",
      "methodName": "cmdCreateInventoryBalance",
      "handlerName": "handleCmdCreateInventoryBalanceClick",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId"
      ],
      "outputStateKeys": [
        "ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance"
      ],
      "statusStateKey": "ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status",
      "errorStateKey": "ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateInventoryBalance.success",
        "errorMessageKey": "action.cmdCreateInventoryBalance.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status"
      ],
      "refreshActionIds": [
        "qryListInventoryBalance",
        "qryInventoryItemPicker"
      ]
    },
    {
      "actionId": "cmdUpdateInventoryBalance",
      "kind": "command",
      "commandRef": "cmdUpdateInventoryBalance",
      "routeKey": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
      "purpose": "Atualizar Saldo de estoque",
      "methodName": "cmdUpdateInventoryBalance",
      "handlerName": "handleCmdUpdateInventoryBalanceClick",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId"
      ],
      "outputStateKeys": [
        "ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance"
      ],
      "statusStateKey": "ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status",
      "errorStateKey": "ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateInventoryBalance.success",
        "errorMessageKey": "action.cmdUpdateInventoryBalance.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status"
      ],
      "refreshActionIds": [
        "qryListInventoryBalance",
        "qryInventoryItemPicker"
      ]
    },
    {
      "actionId": "cmdDeleteInventoryBalance",
      "kind": "command",
      "commandRef": "cmdDeleteInventoryBalance",
      "routeKey": "buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
      "purpose": "Excluir Saldo de estoque",
      "methodName": "cmdDeleteInventoryBalance",
      "handlerName": "handleCmdDeleteInventoryBalanceClick",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId"
      ],
      "outputStateKeys": [
        "ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance"
      ],
      "statusStateKey": "ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status",
      "errorStateKey": "ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteInventoryBalance.success",
        "errorMessageKey": "action.cmdDeleteInventoryBalance.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId"
      ],
      "refreshActionIds": [
        "qryListInventoryBalance",
        "qryInventoryItemPicker"
      ]
    },
    {
      "actionId": "qryInventoryItemPicker",
      "kind": "query",
      "commandRef": "qryInventoryItemPicker",
      "routeKey": "buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker",
      "purpose": "Listar Item de estoque",
      "methodName": "loadQryInventoryItemPicker",
      "handlerName": "handleQryInventoryItemPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker"
      ],
      "statusStateKey": "ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status"
    },
    {
      "actionId": "set.cmdCreateInventoryBalanceInventoryItemId",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
      "methodName": "setCmdCreateInventoryBalanceInventoryItemId",
      "handlerName": "handleCmdCreateInventoryBalanceInventoryItemIdChange",
      "prefill": {
        "command": "cmdCreateInventoryBalance",
        "sourceStateKey": "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance",
        "sourceOutputShape": "array",
        "matchField": "inventoryItemId",
        "fields": [
          {
            "itemField": "physicalQuantity",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity"
          },
          {
            "itemField": "applicableUnitCost",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdCreateInventoryBalancePhysicalQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
      "methodName": "setCmdCreateInventoryBalancePhysicalQuantity",
      "handlerName": "handleCmdCreateInventoryBalancePhysicalQuantityChange"
    },
    {
      "actionId": "set.cmdCreateInventoryBalanceApplicableUnitCost",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
      "methodName": "setCmdCreateInventoryBalanceApplicableUnitCost",
      "handlerName": "handleCmdCreateInventoryBalanceApplicableUnitCostChange"
    },
    {
      "actionId": "set.cmdCreateInventoryBalanceStatus",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status",
      "methodName": "setCmdCreateInventoryBalanceStatus",
      "handlerName": "handleCmdCreateInventoryBalanceStatusChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryBalanceInventoryBalanceId",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
      "methodName": "setCmdUpdateInventoryBalanceInventoryBalanceId",
      "handlerName": "handleCmdUpdateInventoryBalanceInventoryBalanceIdChange",
      "prefill": {
        "command": "cmdUpdateInventoryBalance",
        "sourceStateKey": "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance",
        "sourceOutputShape": "array",
        "matchField": "inventoryBalanceId",
        "fields": [
          {
            "itemField": "physicalQuantity",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity"
          },
          {
            "itemField": "applicableUnitCost",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInventoryBalanceInventoryItemId",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
      "methodName": "setCmdUpdateInventoryBalanceInventoryItemId",
      "handlerName": "handleCmdUpdateInventoryBalanceInventoryItemIdChange",
      "prefill": {
        "command": "cmdUpdateInventoryBalance",
        "sourceStateKey": "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance",
        "sourceOutputShape": "array",
        "matchField": "inventoryItemId",
        "fields": [
          {
            "itemField": "physicalQuantity",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity"
          },
          {
            "itemField": "applicableUnitCost",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInventoryBalancePhysicalQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
      "methodName": "setCmdUpdateInventoryBalancePhysicalQuantity",
      "handlerName": "handleCmdUpdateInventoryBalancePhysicalQuantityChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryBalanceApplicableUnitCost",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
      "methodName": "setCmdUpdateInventoryBalanceApplicableUnitCost",
      "handlerName": "handleCmdUpdateInventoryBalanceApplicableUnitCostChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryBalanceStatus",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status",
      "methodName": "setCmdUpdateInventoryBalanceStatus",
      "handlerName": "handleCmdUpdateInventoryBalanceStatusChange"
    },
    {
      "actionId": "set.cmdDeleteInventoryBalanceInventoryBalanceId",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId",
      "methodName": "setCmdDeleteInventoryBalanceInventoryBalanceId",
      "handlerName": "handleCmdDeleteInventoryBalanceInventoryBalanceIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListInventoryBalance",
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance"
    },
    {
      "actionId": "qryInventoryItemPicker",
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker"
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
    "section.inventoryBalanceCatalogue.recordList.title": "Localizar saldo de estoque",
    "organism.inventoryBalanceCatalogue.qryListInventoryBalance.title": "Listar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title": "Listar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty": "Nenhum registro encontrado",
    "intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label": "Inventory Balance Id",
    "intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label": "Physical Quantity",
    "intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label": "Applicable Unit Cost",
    "intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label": "Status",
    "organism.inventoryBalanceCatalogue.qryInventoryItemPicker.title": "Listar Item de estoque",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title": "Listar Item de estoque",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty": "Nenhum registro encontrado",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label": "Name",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label": "Description",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label": "Unit Of Measure",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label": "Reference Unit Cost",
    "intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label": "Status",
    "organism.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.title": "Excluir Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.title": "Excluir Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.action.cmdDeleteInventoryBalance": "Excluir Saldo de estoque",
    "section.inventoryBalanceCatalogue.recordForm.title": "Criar ou corrigir saldo",
    "organism.inventoryBalanceCatalogue.cmdCreateInventoryBalance.title": "Criar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.title": "Criar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.action.cmdCreateInventoryBalance": "Criar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.physicalQuantity.label": "Physical Quantity",
    "intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.applicableUnitCost.label": "Applicable Unit Cost",
    "intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.status.label": "Status",
    "organism.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.title": "Atualizar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.title": "Atualizar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.action.cmdUpdateInventoryBalance": "Atualizar Saldo de estoque",
    "intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.physicalQuantity.label": "Physical Quantity",
    "intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.applicableUnitCost.label": "Applicable Unit Cost",
    "intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.status.label": "Status",
    "action.cmdCreateInventoryBalance.success": "Criar Saldo de estoque: OK",
    "action.cmdCreateInventoryBalance.error": "Criar Saldo de estoque: falhou",
    "action.cmdUpdateInventoryBalance.success": "Atualizar Saldo de estoque: OK",
    "action.cmdUpdateInventoryBalance.error": "Atualizar Saldo de estoque: falhou",
    "action.cmdDeleteInventoryBalance.success": "Excluir Saldo de estoque: OK",
    "action.cmdDeleteInventoryBalance.error": "Excluir Saldo de estoque: falhou",
    "section.inventoryBalanceCatalogue.inventoryBalanceWorkbench.title": "Saldo de estoque",
    "section.inventoryBalanceCatalogue.inventoryBalanceCreation.title": "Novo saldo de estoque"
  },
  "automation": {
    "statePrefix": "ui.inventoryBalanceCatalogue",
    "stateKeys": [
      "ui.inventoryBalanceCatalogue.status",
      "ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status",
      "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance",
      "ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status",
      "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
      "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
      "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
      "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status",
      "ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance",
      "ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error",
      "ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status",
      "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
      "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
      "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
      "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
      "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status",
      "ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance",
      "ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error",
      "ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status",
      "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId",
      "ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance",
      "ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error",
      "ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status",
      "ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker"
    ],
    "actionIds": [
      "qryListInventoryBalance",
      "cmdCreateInventoryBalance",
      "cmdUpdateInventoryBalance",
      "cmdDeleteInventoryBalance",
      "qryInventoryItemPicker",
      "set.cmdCreateInventoryBalanceInventoryItemId",
      "set.cmdCreateInventoryBalancePhysicalQuantity",
      "set.cmdCreateInventoryBalanceApplicableUnitCost",
      "set.cmdCreateInventoryBalanceStatus",
      "set.cmdUpdateInventoryBalanceInventoryBalanceId",
      "set.cmdUpdateInventoryBalanceInventoryItemId",
      "set.cmdUpdateInventoryBalancePhysicalQuantity",
      "set.cmdUpdateInventoryBalanceApplicableUnitCost",
      "set.cmdUpdateInventoryBalanceStatus",
      "set.cmdDeleteInventoryBalanceInventoryBalanceId"
    ]
  }
};

export const pipeline = [
  {
    "id": "inventoryBalanceCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/inventoryBalanceCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "availableInventoryBalance"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
