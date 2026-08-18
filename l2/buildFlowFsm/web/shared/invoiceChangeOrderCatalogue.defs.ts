/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceChangeOrderCatalogue",
  "pageName": "Aplicação de ordem de mudança na fatura",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmInvoiceChangeOrderCatalogueBase",
  "routePattern": "/buildFlowFsm/invoiceChangeOrderCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:invoiceChangeOrderCatalogue",
    "contract:buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder",
    "contract:buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder",
    "contract:buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder",
    "contract:buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder",
    "contract:buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker",
    "contract:buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker"
  ],
  "operationIds": [
    "createInvoiceChangeOrder",
    "deleteInvoiceChangeOrder",
    "listChangeOrder",
    "listInvoice",
    "listInvoiceChangeOrder",
    "updateInvoiceChangeOrder"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "invoiceChangeOrderCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "InvoiceChangeOrder",
    "owners": [
      {
        "kind": "operation",
        "id": "createInvoiceChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createInvoiceChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteInvoiceChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteInvoiceChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInvoice",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInvoiceChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInvoiceChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateInvoiceChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateInvoiceChangeOrder.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createInvoiceChangeOrder",
          "commandName": "cmdCreateInvoiceChangeOrder",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteInvoiceChangeOrder",
          "commandName": "cmdDeleteInvoiceChangeOrder",
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
          "operationId": "listInvoice",
          "commandName": "qryListInvoice",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listInvoiceChangeOrder",
          "commandName": "qryListInvoiceChangeOrder",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "updateInvoiceChangeOrder",
          "commandName": "cmdUpdateInvoiceChangeOrder",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/invoiceChangeOrderCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListInvoiceChangeOrder",
        "routeConst": "qryListInvoiceChangeOrderRoute"
      },
      {
        "commandName": "cmdCreateInvoiceChangeOrder",
        "routeConst": "cmdCreateInvoiceChangeOrderRoute"
      },
      {
        "commandName": "cmdUpdateInvoiceChangeOrder",
        "routeConst": "cmdUpdateInvoiceChangeOrderRoute"
      },
      {
        "commandName": "cmdDeleteInvoiceChangeOrder",
        "routeConst": "cmdDeleteInvoiceChangeOrderRoute"
      },
      {
        "commandName": "qryInvoicePicker",
        "routeConst": "qryInvoicePickerRoute"
      },
      {
        "commandName": "qryChangeOrderPicker",
        "routeConst": "qryChangeOrderPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/invoiceChangeOrderCatalogue.defs.ts",
    "layoutId": "invoiceChangeOrderCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status",
      "name": "qryListInvoiceChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "qryListInvoiceChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
      "name": "qryListInvoiceChangeOrderData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListInvoiceChangeOrder",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status",
      "name": "cmdCreateInvoiceChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateInvoiceChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
      "name": "cmdCreateInvoiceChangeOrderInvoiceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateInvoiceChangeOrder",
        "direction": "input",
        "field": "invoiceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId",
      "name": "cmdCreateInvoiceChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateInvoiceChangeOrder",
        "direction": "input",
        "field": "changeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount",
      "name": "cmdCreateInvoiceChangeOrderBilledAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInvoiceChangeOrder",
        "direction": "input",
        "field": "billedAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder",
      "name": "cmdCreateInvoiceChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateInvoiceChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error",
      "name": "cmdCreateInvoiceChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdCreateInvoiceChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status",
      "name": "cmdUpdateInvoiceChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateInvoiceChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
      "name": "cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInvoiceChangeOrder",
        "direction": "input",
        "field": "invoiceChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
      "name": "cmdUpdateInvoiceChangeOrderInvoiceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInvoiceChangeOrder",
        "direction": "input",
        "field": "invoiceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId",
      "name": "cmdUpdateInvoiceChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInvoiceChangeOrder",
        "direction": "input",
        "field": "changeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount",
      "name": "cmdUpdateInvoiceChangeOrderBilledAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInvoiceChangeOrder",
        "direction": "input",
        "field": "billedAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder",
      "name": "cmdUpdateInvoiceChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateInvoiceChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error",
      "name": "cmdUpdateInvoiceChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdUpdateInvoiceChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status",
      "name": "cmdDeleteInvoiceChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteInvoiceChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId",
      "name": "cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteInvoiceChangeOrder",
        "direction": "input",
        "field": "invoiceChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder",
      "name": "cmdDeleteInvoiceChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteInvoiceChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error",
      "name": "cmdDeleteInvoiceChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdDeleteInvoiceChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status",
      "name": "qryInvoicePickerState",
      "kind": "actionStatus",
      "actionRef": "qryInvoicePicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker",
      "name": "qryInvoicePickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInvoicePicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status",
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
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker",
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
      "actionId": "qryListInvoiceChangeOrder",
      "kind": "query",
      "commandRef": "qryListInvoiceChangeOrder",
      "routeKey": "buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder",
      "purpose": "Listar Aplicação de ordem de mudança na fatura",
      "methodName": "loadQryListInvoiceChangeOrder",
      "handlerName": "handleQryListInvoiceChangeOrderClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder"
      ],
      "statusStateKey": "ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status"
    },
    {
      "actionId": "cmdCreateInvoiceChangeOrder",
      "kind": "command",
      "commandRef": "cmdCreateInvoiceChangeOrder",
      "routeKey": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder",
      "purpose": "Criar Aplicação de ordem de mudança na fatura",
      "methodName": "cmdCreateInvoiceChangeOrder",
      "handlerName": "handleCmdCreateInvoiceChangeOrderClick",
      "inputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId"
      ],
      "outputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder"
      ],
      "statusStateKey": "ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status",
      "errorStateKey": "ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateInvoiceChangeOrder.success",
        "errorMessageKey": "action.cmdCreateInvoiceChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount"
      ],
      "refreshActionIds": [
        "qryListInvoiceChangeOrder",
        "qryInvoicePicker",
        "qryChangeOrderPicker"
      ]
    },
    {
      "actionId": "cmdUpdateInvoiceChangeOrder",
      "kind": "command",
      "commandRef": "cmdUpdateInvoiceChangeOrder",
      "routeKey": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder",
      "purpose": "Atualizar Aplicação de ordem de mudança na fatura",
      "methodName": "cmdUpdateInvoiceChangeOrder",
      "handlerName": "handleCmdUpdateInvoiceChangeOrderClick",
      "inputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId"
      ],
      "outputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder"
      ],
      "statusStateKey": "ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status",
      "errorStateKey": "ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateInvoiceChangeOrder.success",
        "errorMessageKey": "action.cmdUpdateInvoiceChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount"
      ],
      "refreshActionIds": [
        "qryListInvoiceChangeOrder",
        "qryInvoicePicker",
        "qryChangeOrderPicker"
      ]
    },
    {
      "actionId": "cmdDeleteInvoiceChangeOrder",
      "kind": "command",
      "commandRef": "cmdDeleteInvoiceChangeOrder",
      "routeKey": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder",
      "purpose": "Excluir Aplicação de ordem de mudança na fatura",
      "methodName": "cmdDeleteInvoiceChangeOrder",
      "handlerName": "handleCmdDeleteInvoiceChangeOrderClick",
      "inputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId"
      ],
      "outputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder"
      ],
      "statusStateKey": "ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status",
      "errorStateKey": "ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteInvoiceChangeOrder.success",
        "errorMessageKey": "action.cmdDeleteInvoiceChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId"
      ],
      "refreshActionIds": [
        "qryListInvoiceChangeOrder",
        "qryInvoicePicker",
        "qryChangeOrderPicker"
      ]
    },
    {
      "actionId": "qryInvoicePicker",
      "kind": "query",
      "commandRef": "qryInvoicePicker",
      "routeKey": "buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker",
      "purpose": "Listar Fatura",
      "methodName": "loadQryInvoicePicker",
      "handlerName": "handleQryInvoicePickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker"
      ],
      "statusStateKey": "ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status"
    },
    {
      "actionId": "qryChangeOrderPicker",
      "kind": "query",
      "commandRef": "qryChangeOrderPicker",
      "routeKey": "buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker",
      "purpose": "Listar Ordem de mudança",
      "methodName": "loadQryChangeOrderPicker",
      "handlerName": "handleQryChangeOrderPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker"
      ],
      "statusStateKey": "ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status"
    },
    {
      "actionId": "set.cmdCreateInvoiceChangeOrderInvoiceId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
      "methodName": "setCmdCreateInvoiceChangeOrderInvoiceId",
      "handlerName": "handleCmdCreateInvoiceChangeOrderInvoiceIdChange",
      "prefill": {
        "command": "cmdCreateInvoiceChangeOrder",
        "sourceStateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "invoiceId",
        "fields": [
          {
            "itemField": "billedAmount",
            "targetStateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdCreateInvoiceChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId",
      "methodName": "setCmdCreateInvoiceChangeOrderChangeOrderId",
      "handlerName": "handleCmdCreateInvoiceChangeOrderChangeOrderIdChange",
      "prefill": {
        "command": "cmdCreateInvoiceChangeOrder",
        "sourceStateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "changeOrderId",
        "fields": [
          {
            "itemField": "billedAmount",
            "targetStateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdCreateInvoiceChangeOrderBilledAmount",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount",
      "methodName": "setCmdCreateInvoiceChangeOrderBilledAmount",
      "handlerName": "handleCmdCreateInvoiceChangeOrderBilledAmountChange"
    },
    {
      "actionId": "set.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
      "methodName": "setCmdUpdateInvoiceChangeOrderInvoiceChangeOrderId",
      "handlerName": "handleCmdUpdateInvoiceChangeOrderInvoiceChangeOrderIdChange",
      "prefill": {
        "command": "cmdUpdateInvoiceChangeOrder",
        "sourceStateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "invoiceChangeOrderId",
        "fields": [
          {
            "itemField": "billedAmount",
            "targetStateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInvoiceChangeOrderInvoiceId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
      "methodName": "setCmdUpdateInvoiceChangeOrderInvoiceId",
      "handlerName": "handleCmdUpdateInvoiceChangeOrderInvoiceIdChange",
      "prefill": {
        "command": "cmdUpdateInvoiceChangeOrder",
        "sourceStateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "invoiceId",
        "fields": [
          {
            "itemField": "billedAmount",
            "targetStateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInvoiceChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId",
      "methodName": "setCmdUpdateInvoiceChangeOrderChangeOrderId",
      "handlerName": "handleCmdUpdateInvoiceChangeOrderChangeOrderIdChange",
      "prefill": {
        "command": "cmdUpdateInvoiceChangeOrder",
        "sourceStateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
        "sourceOutputShape": "array",
        "matchField": "changeOrderId",
        "fields": [
          {
            "itemField": "billedAmount",
            "targetStateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInvoiceChangeOrderBilledAmount",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount",
      "methodName": "setCmdUpdateInvoiceChangeOrderBilledAmount",
      "handlerName": "handleCmdUpdateInvoiceChangeOrderBilledAmountChange"
    },
    {
      "actionId": "set.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId",
      "methodName": "setCmdDeleteInvoiceChangeOrderInvoiceChangeOrderId",
      "handlerName": "handleCmdDeleteInvoiceChangeOrderInvoiceChangeOrderIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListInvoiceChangeOrder",
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder"
    },
    {
      "actionId": "qryInvoicePicker",
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker"
    },
    {
      "actionId": "qryChangeOrderPicker",
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker"
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
    "section.invoiceChangeOrderCatalogue.recordList.title": "Localizar aplicações",
    "organism.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.title": "Listar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title": "Listar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty": "Nenhum registro encontrado",
    "intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label": "Invoice Change Order Id",
    "intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label": "Invoice Id",
    "intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label": "Change Order Id",
    "intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label": "Billed Amount",
    "organism.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.title": "Excluir Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.title": "Excluir Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder": "Excluir Aplicação de ordem de mudança na fatura",
    "section.invoiceChangeOrderCatalogue.recordForm.title": "Criar ou corrigir aplicação",
    "organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title": "Listar Fatura",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title": "Listar Fatura",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty": "Nenhum registro encontrado",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label": "Invoice Id",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.clientId.label": "Client Id",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.projectId.label": "Project Id",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label": "Commercial Reference",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label": "Amount",
    "intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label": "Status",
    "organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title": "Listar Ordem de mudança",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title": "Listar Ordem de mudança",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty": "Nenhum registro encontrado",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label": "Change Order Id",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.clientRef.label": "Client Ref",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.projectRef.label": "Project Ref",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label": "Description",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label": "Scope Impact",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label": "Change Amount",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.submittedAt.label": "Submitted At",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label": "Status",
    "organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title": "Criar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title": "Criar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder": "Criar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label": "Billed Amount",
    "organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title": "Atualizar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title": "Atualizar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder": "Atualizar Aplicação de ordem de mudança na fatura",
    "intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label": "Billed Amount",
    "action.cmdCreateInvoiceChangeOrder.success": "Criar Aplicação de ordem de mudança na fatura: OK",
    "action.cmdCreateInvoiceChangeOrder.error": "Criar Aplicação de ordem de mudança na fatura: falhou",
    "action.cmdUpdateInvoiceChangeOrder.success": "Atualizar Aplicação de ordem de mudança na fatura: OK",
    "action.cmdUpdateInvoiceChangeOrder.error": "Atualizar Aplicação de ordem de mudança na fatura: falhou",
    "action.cmdDeleteInvoiceChangeOrder.success": "Excluir Aplicação de ordem de mudança na fatura: OK",
    "action.cmdDeleteInvoiceChangeOrder.error": "Excluir Aplicação de ordem de mudança na fatura: falhou",
    "section.invoiceChangeOrderCatalogue.recordWorkbench.title": "Aplicações vinculadas",
    "section.invoiceChangeOrderCatalogue.newAssociation.title": "Nova aplicação"
  },
  "automation": {
    "statePrefix": "ui.invoiceChangeOrderCatalogue",
    "stateKeys": [
      "ui.invoiceChangeOrderCatalogue.status",
      "ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status",
      "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
      "ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status",
      "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
      "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId",
      "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount",
      "ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder",
      "ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error",
      "ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status",
      "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
      "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
      "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId",
      "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount",
      "ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder",
      "ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error",
      "ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status",
      "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId",
      "ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder",
      "ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error",
      "ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status",
      "ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker",
      "ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status",
      "ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker"
    ],
    "actionIds": [
      "qryListInvoiceChangeOrder",
      "cmdCreateInvoiceChangeOrder",
      "cmdUpdateInvoiceChangeOrder",
      "cmdDeleteInvoiceChangeOrder",
      "qryInvoicePicker",
      "qryChangeOrderPicker",
      "set.cmdCreateInvoiceChangeOrderInvoiceId",
      "set.cmdCreateInvoiceChangeOrderChangeOrderId",
      "set.cmdCreateInvoiceChangeOrderBilledAmount",
      "set.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId",
      "set.cmdUpdateInvoiceChangeOrderInvoiceId",
      "set.cmdUpdateInvoiceChangeOrderChangeOrderId",
      "set.cmdUpdateInvoiceChangeOrderBilledAmount",
      "set.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId"
    ]
  }
};

export const pipeline = [
  {
    "id": "invoiceChangeOrderCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/invoiceChangeOrderCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
