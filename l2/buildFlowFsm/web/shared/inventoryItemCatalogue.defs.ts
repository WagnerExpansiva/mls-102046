/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "inventoryItemCatalogue",
  "pageName": "Item de estoque",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmInventoryItemCatalogueBase",
  "routePattern": "/buildFlowFsm/inventoryItemCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:inventoryItemCatalogue",
    "contract:buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem",
    "contract:buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
    "contract:buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
    "contract:buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem"
  ],
  "operationIds": [
    "createInventoryItem",
    "deleteInventoryItem",
    "listInventoryItem",
    "updateInventoryItem"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "inventoryItemCatalogue",
    "workspaceKind": "operation",
    "actor": "fieldWorker",
    "entity": "InventoryItem",
    "owners": [
      {
        "kind": "operation",
        "id": "createInventoryItem",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createInventoryItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteInventoryItem",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteInventoryItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInventoryItem",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInventoryItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateInventoryItem",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateInventoryItem.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createInventoryItem",
          "commandName": "cmdCreateInventoryItem",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteInventoryItem",
          "commandName": "cmdDeleteInventoryItem",
          "steps": [
            "Remover o registro escolhido."
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
          "operationId": "updateInventoryItem",
          "commandName": "cmdUpdateInventoryItem",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/inventoryItemCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListInventoryItem",
        "routeConst": "qryListInventoryItemRoute"
      },
      {
        "commandName": "cmdCreateInventoryItem",
        "routeConst": "cmdCreateInventoryItemRoute"
      },
      {
        "commandName": "cmdUpdateInventoryItem",
        "routeConst": "cmdUpdateInventoryItemRoute"
      },
      {
        "commandName": "cmdDeleteInventoryItem",
        "routeConst": "cmdDeleteInventoryItemRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryItemCatalogue.defs.ts",
    "layoutId": "inventoryItemCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.inventoryItemCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.action.qryListInventoryItem.status",
      "name": "qryListInventoryItemState",
      "kind": "actionStatus",
      "actionRef": "qryListInventoryItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.data.qryListInventoryItem",
      "name": "qryListInventoryItemData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListInventoryItem",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status",
      "name": "cmdCreateInventoryItemState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateInventoryItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
      "name": "cmdCreateInventoryItemName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
      "name": "cmdCreateInventoryItemDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryItem",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
      "name": "cmdCreateInventoryItemUnitOfMeasure",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
      "name": "cmdCreateInventoryItemReferenceUnitCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryItem",
        "direction": "input",
        "field": "referenceUnitCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status",
      "name": "cmdCreateInventoryItemStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInventoryItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.output.cmdCreateInventoryItem",
      "name": "cmdCreateInventoryItemOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateInventoryItem",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error",
      "name": "cmdCreateInventoryItemError",
      "kind": "actionError",
      "actionRef": "cmdCreateInventoryItem",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status",
      "name": "cmdUpdateInventoryItemState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateInventoryItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
      "name": "cmdUpdateInventoryItemInventoryItemId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInventoryItem",
        "direction": "input",
        "field": "inventoryItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
      "name": "cmdUpdateInventoryItemName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
      "name": "cmdUpdateInventoryItemDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryItem",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
      "name": "cmdUpdateInventoryItemUnitOfMeasure",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
      "name": "cmdUpdateInventoryItemReferenceUnitCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryItem",
        "direction": "input",
        "field": "referenceUnitCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status",
      "name": "cmdUpdateInventoryItemStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInventoryItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem",
      "name": "cmdUpdateInventoryItemOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateInventoryItem",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error",
      "name": "cmdUpdateInventoryItemError",
      "kind": "actionError",
      "actionRef": "cmdUpdateInventoryItem",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status",
      "name": "cmdDeleteInventoryItemState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteInventoryItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId",
      "name": "cmdDeleteInventoryItemInventoryItemId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteInventoryItem",
        "direction": "input",
        "field": "inventoryItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem",
      "name": "cmdDeleteInventoryItemOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteInventoryItem",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error",
      "name": "cmdDeleteInventoryItemError",
      "kind": "actionError",
      "actionRef": "cmdDeleteInventoryItem",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryListInventoryItem",
      "kind": "query",
      "commandRef": "qryListInventoryItem",
      "routeKey": "buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem",
      "purpose": "Listar Item de estoque",
      "methodName": "loadQryListInventoryItem",
      "handlerName": "handleQryListInventoryItemClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.inventoryItemCatalogue.data.qryListInventoryItem"
      ],
      "statusStateKey": "ui.inventoryItemCatalogue.action.qryListInventoryItem.status"
    },
    {
      "actionId": "cmdCreateInventoryItem",
      "kind": "command",
      "commandRef": "cmdCreateInventoryItem",
      "routeKey": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
      "purpose": "Criar Item de estoque",
      "methodName": "cmdCreateInventoryItem",
      "handlerName": "handleCmdCreateInventoryItemClick",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.inventoryItemCatalogue.output.cmdCreateInventoryItem"
      ],
      "statusStateKey": "ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status",
      "errorStateKey": "ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateInventoryItem.success",
        "errorMessageKey": "action.cmdCreateInventoryItem.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status"
      ],
      "refreshActionIds": [
        "qryListInventoryItem"
      ]
    },
    {
      "actionId": "cmdUpdateInventoryItem",
      "kind": "command",
      "commandRef": "cmdUpdateInventoryItem",
      "routeKey": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "purpose": "Atualizar Item de estoque",
      "methodName": "cmdUpdateInventoryItem",
      "handlerName": "handleCmdUpdateInventoryItemClick",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId"
      ],
      "outputStateKeys": [
        "ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem"
      ],
      "statusStateKey": "ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status",
      "errorStateKey": "ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateInventoryItem.success",
        "errorMessageKey": "action.cmdUpdateInventoryItem.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status"
      ],
      "refreshActionIds": [
        "qryListInventoryItem"
      ]
    },
    {
      "actionId": "cmdDeleteInventoryItem",
      "kind": "command",
      "commandRef": "cmdDeleteInventoryItem",
      "routeKey": "buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem",
      "purpose": "Excluir Item de estoque",
      "methodName": "cmdDeleteInventoryItem",
      "handlerName": "handleCmdDeleteInventoryItemClick",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId"
      ],
      "outputStateKeys": [
        "ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem"
      ],
      "statusStateKey": "ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status",
      "errorStateKey": "ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteInventoryItem.success",
        "errorMessageKey": "action.cmdDeleteInventoryItem.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId"
      ],
      "refreshActionIds": [
        "qryListInventoryItem"
      ]
    },
    {
      "actionId": "set.cmdCreateInventoryItemName",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
      "methodName": "setCmdCreateInventoryItemName",
      "handlerName": "handleCmdCreateInventoryItemNameChange"
    },
    {
      "actionId": "set.cmdCreateInventoryItemDescription",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
      "methodName": "setCmdCreateInventoryItemDescription",
      "handlerName": "handleCmdCreateInventoryItemDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateInventoryItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
      "methodName": "setCmdCreateInventoryItemUnitOfMeasure",
      "handlerName": "handleCmdCreateInventoryItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.cmdCreateInventoryItemReferenceUnitCost",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
      "methodName": "setCmdCreateInventoryItemReferenceUnitCost",
      "handlerName": "handleCmdCreateInventoryItemReferenceUnitCostChange"
    },
    {
      "actionId": "set.cmdCreateInventoryItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status",
      "methodName": "setCmdCreateInventoryItemStatus",
      "handlerName": "handleCmdCreateInventoryItemStatusChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryItemInventoryItemId",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
      "methodName": "setCmdUpdateInventoryItemInventoryItemId",
      "handlerName": "handleCmdUpdateInventoryItemInventoryItemIdChange",
      "prefill": {
        "command": "cmdUpdateInventoryItem",
        "sourceStateKey": "ui.inventoryItemCatalogue.data.qryListInventoryItem",
        "sourceOutputShape": "array",
        "matchField": "inventoryItemId",
        "fields": [
          {
            "itemField": "name",
            "targetStateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name"
          },
          {
            "itemField": "description",
            "targetStateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description"
          },
          {
            "itemField": "unitOfMeasure",
            "targetStateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure"
          },
          {
            "itemField": "referenceUnitCost",
            "targetStateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInventoryItemName",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
      "methodName": "setCmdUpdateInventoryItemName",
      "handlerName": "handleCmdUpdateInventoryItemNameChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryItemDescription",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
      "methodName": "setCmdUpdateInventoryItemDescription",
      "handlerName": "handleCmdUpdateInventoryItemDescriptionChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
      "methodName": "setCmdUpdateInventoryItemUnitOfMeasure",
      "handlerName": "handleCmdUpdateInventoryItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryItemReferenceUnitCost",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
      "methodName": "setCmdUpdateInventoryItemReferenceUnitCost",
      "handlerName": "handleCmdUpdateInventoryItemReferenceUnitCostChange"
    },
    {
      "actionId": "set.cmdUpdateInventoryItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status",
      "methodName": "setCmdUpdateInventoryItemStatus",
      "handlerName": "handleCmdUpdateInventoryItemStatusChange"
    },
    {
      "actionId": "set.cmdDeleteInventoryItemInventoryItemId",
      "kind": "stateSetter",
      "stateKey": "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId",
      "methodName": "setCmdDeleteInventoryItemInventoryItemId",
      "handlerName": "handleCmdDeleteInventoryItemInventoryItemIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListInventoryItem",
      "stateKey": "ui.inventoryItemCatalogue.data.qryListInventoryItem"
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
    "section.inventoryItemCatalogue.recordList.title": "Localizar itens de estoque",
    "organism.inventoryItemCatalogue.qryListInventoryItem.title": "Listar Item de estoque",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.title": "Listar Item de estoque",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.empty": "Nenhum registro encontrado",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label": "Name",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label": "Description",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label": "Unit Of Measure",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label": "Reference Unit Cost",
    "intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label": "Status",
    "organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title": "Excluir Item de estoque",
    "intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.title": "Excluir Item de estoque",
    "intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem": "Excluir Item de estoque",
    "section.inventoryItemCatalogue.recordForm.title": "Criar ou corrigir item",
    "organism.inventoryItemCatalogue.cmdCreateInventoryItem.title": "Criar Item de estoque",
    "intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.title": "Criar Item de estoque",
    "intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.action.cmdCreateInventoryItem": "Criar Item de estoque",
    "intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.name.label": "Name",
    "intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.description.label": "Description",
    "intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.unitOfMeasure.label": "Unit Of Measure",
    "intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.referenceUnitCost.label": "Reference Unit Cost",
    "intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.status.label": "Status",
    "organism.inventoryItemCatalogue.cmdUpdateInventoryItem.title": "Atualizar Item de estoque",
    "intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.title": "Atualizar Item de estoque",
    "intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.action.cmdUpdateInventoryItem": "Atualizar Item de estoque",
    "intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.name.label": "Name",
    "intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.description.label": "Description",
    "intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.unitOfMeasure.label": "Unit Of Measure",
    "intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.referenceUnitCost.label": "Reference Unit Cost",
    "intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.status.label": "Status",
    "action.cmdCreateInventoryItem.success": "Criar Item de estoque: OK",
    "action.cmdCreateInventoryItem.error": "Criar Item de estoque: falhou",
    "action.cmdUpdateInventoryItem.success": "Atualizar Item de estoque: OK",
    "action.cmdUpdateInventoryItem.error": "Atualizar Item de estoque: falhou",
    "action.cmdDeleteInventoryItem.success": "Excluir Item de estoque: OK",
    "action.cmdDeleteInventoryItem.error": "Excluir Item de estoque: falhou",
    "section.inventoryItemCatalogue.inventoryWorkbench.title": "Catálogo de itens de estoque"
  },
  "automation": {
    "statePrefix": "ui.inventoryItemCatalogue",
    "stateKeys": [
      "ui.inventoryItemCatalogue.status",
      "ui.inventoryItemCatalogue.action.qryListInventoryItem.status",
      "ui.inventoryItemCatalogue.data.qryListInventoryItem",
      "ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status",
      "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
      "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
      "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
      "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
      "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status",
      "ui.inventoryItemCatalogue.output.cmdCreateInventoryItem",
      "ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error",
      "ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status",
      "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
      "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
      "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
      "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
      "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
      "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status",
      "ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem",
      "ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error",
      "ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status",
      "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId",
      "ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem",
      "ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error"
    ],
    "actionIds": [
      "qryListInventoryItem",
      "cmdCreateInventoryItem",
      "cmdUpdateInventoryItem",
      "cmdDeleteInventoryItem",
      "set.cmdCreateInventoryItemName",
      "set.cmdCreateInventoryItemDescription",
      "set.cmdCreateInventoryItemUnitOfMeasure",
      "set.cmdCreateInventoryItemReferenceUnitCost",
      "set.cmdCreateInventoryItemStatus",
      "set.cmdUpdateInventoryItemInventoryItemId",
      "set.cmdUpdateInventoryItemName",
      "set.cmdUpdateInventoryItemDescription",
      "set.cmdUpdateInventoryItemUnitOfMeasure",
      "set.cmdUpdateInventoryItemReferenceUnitCost",
      "set.cmdUpdateInventoryItemStatus",
      "set.cmdDeleteInventoryItemInventoryItemId"
    ]
  }
};

export const pipeline = [
  {
    "id": "inventoryItemCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/inventoryItemCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "selectableInventoryItem"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
