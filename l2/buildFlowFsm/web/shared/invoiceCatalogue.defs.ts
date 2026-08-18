/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceCatalogue",
  "pageName": "Fatura",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmInvoiceCatalogueBase",
  "routePattern": "/buildFlowFsm/invoiceCatalogue/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:invoiceCatalogue",
    "contract:buildFlowFsm.invoiceCatalogue.qryListInvoice",
    "contract:buildFlowFsm.invoiceCatalogue.cmdCreateInvoice",
    "contract:buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
    "contract:buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice",
    "contract:buildFlowFsm.invoiceCatalogue.qryClientPicker",
    "contract:buildFlowFsm.invoiceCatalogue.qryProjectPicker"
  ],
  "operationIds": [
    "createInvoice",
    "deleteInvoice",
    "listClient",
    "listInvoice",
    "listProject",
    "updateInvoice"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "invoiceCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "Invoice",
    "owners": [
      {
        "kind": "operation",
        "id": "createInvoice",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteInvoice",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInvoice",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateInvoice",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateInvoice.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createInvoice",
          "commandName": "cmdCreateInvoice",
          "steps": [
            "Emitir a fatura",
            "Uma fatura vinculada ao cliente e à obra fica registrada."
          ]
        },
        {
          "operationId": "deleteInvoice",
          "commandName": "cmdDeleteInvoice",
          "steps": [
            "Remover o registro escolhido."
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
          "operationId": "listInvoice",
          "commandName": "qryListInvoice",
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
          "operationId": "updateInvoice",
          "commandName": "cmdUpdateInvoice",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/invoiceCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListInvoice",
        "routeConst": "qryListInvoiceRoute"
      },
      {
        "commandName": "cmdCreateInvoice",
        "routeConst": "cmdCreateInvoiceRoute"
      },
      {
        "commandName": "cmdUpdateInvoice",
        "routeConst": "cmdUpdateInvoiceRoute"
      },
      {
        "commandName": "cmdDeleteInvoice",
        "routeConst": "cmdDeleteInvoiceRoute"
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
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/invoiceCatalogue.defs.ts",
    "layoutId": "invoiceCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.invoiceCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.qryListInvoice.status",
      "name": "qryListInvoiceState",
      "kind": "actionStatus",
      "actionRef": "qryListInvoice",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceCatalogue.data.qryListInvoice",
      "name": "qryListInvoiceData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListInvoice",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.cmdCreateInvoice.status",
      "name": "cmdCreateInvoiceState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateInvoice",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId",
      "name": "cmdCreateInvoiceClientClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "clientClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId",
      "name": "cmdCreateInvoiceProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference",
      "name": "cmdCreateInvoiceCommercialReference",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "commercialReference"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.amount",
      "name": "cmdCreateInvoiceAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "amount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.output.cmdCreateInvoice",
      "name": "cmdCreateInvoiceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.cmdCreateInvoice.error",
      "name": "cmdCreateInvoiceError",
      "kind": "actionError",
      "actionRef": "cmdCreateInvoice",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.cmdUpdateInvoice.status",
      "name": "cmdUpdateInvoiceState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateInvoice",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
      "name": "cmdUpdateInvoiceInvoiceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInvoice",
        "direction": "input",
        "field": "invoiceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
      "name": "cmdUpdateInvoiceClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInvoice",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId",
      "name": "cmdUpdateInvoiceProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateInvoice",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference",
      "name": "cmdUpdateInvoiceCommercialReference",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInvoice",
        "direction": "input",
        "field": "commercialReference"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount",
      "name": "cmdUpdateInvoiceAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInvoice",
        "direction": "input",
        "field": "amount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.status",
      "name": "cmdUpdateInvoiceStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateInvoice",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.output.cmdUpdateInvoice",
      "name": "cmdUpdateInvoiceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateInvoice",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.cmdUpdateInvoice.error",
      "name": "cmdUpdateInvoiceError",
      "kind": "actionError",
      "actionRef": "cmdUpdateInvoice",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.cmdDeleteInvoice.status",
      "name": "cmdDeleteInvoiceState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteInvoice",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId",
      "name": "cmdDeleteInvoiceInvoiceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteInvoice",
        "direction": "input",
        "field": "invoiceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.output.cmdDeleteInvoice",
      "name": "cmdDeleteInvoiceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteInvoice",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.cmdDeleteInvoice.error",
      "name": "cmdDeleteInvoiceError",
      "kind": "actionError",
      "actionRef": "cmdDeleteInvoice",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceCatalogue.action.qryClientPicker.status",
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
      "stateKey": "ui.invoiceCatalogue.data.qryClientPicker",
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
      "stateKey": "ui.invoiceCatalogue.action.qryProjectPicker.status",
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
      "stateKey": "ui.invoiceCatalogue.data.qryProjectPicker",
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
      "actionId": "qryListInvoice",
      "kind": "query",
      "commandRef": "qryListInvoice",
      "routeKey": "buildFlowFsm.invoiceCatalogue.qryListInvoice",
      "purpose": "Listar Fatura",
      "methodName": "loadQryListInvoice",
      "handlerName": "handleQryListInvoiceClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.invoiceCatalogue.data.qryListInvoice"
      ],
      "statusStateKey": "ui.invoiceCatalogue.action.qryListInvoice.status"
    },
    {
      "actionId": "cmdCreateInvoice",
      "kind": "command",
      "commandRef": "cmdCreateInvoice",
      "routeKey": "buildFlowFsm.invoiceCatalogue.cmdCreateInvoice",
      "purpose": "Emitir a fatura",
      "methodName": "cmdCreateInvoice",
      "handlerName": "handleCmdCreateInvoiceClick",
      "inputStateKeys": [
        "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.amount"
      ],
      "routeParamInputStateKeys": [
        "ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId"
      ],
      "outputStateKeys": [
        "ui.invoiceCatalogue.output.cmdCreateInvoice"
      ],
      "statusStateKey": "ui.invoiceCatalogue.action.cmdCreateInvoice.status",
      "errorStateKey": "ui.invoiceCatalogue.action.cmdCreateInvoice.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateInvoice.success",
        "errorMessageKey": "action.cmdCreateInvoice.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.amount"
      ],
      "refreshActionIds": [
        "qryListInvoice",
        "qryClientPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdUpdateInvoice",
      "kind": "command",
      "commandRef": "cmdUpdateInvoice",
      "routeKey": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
      "purpose": "Atualizar Fatura",
      "methodName": "cmdUpdateInvoice",
      "handlerName": "handleCmdUpdateInvoiceClick",
      "inputStateKeys": [
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId"
      ],
      "outputStateKeys": [
        "ui.invoiceCatalogue.output.cmdUpdateInvoice"
      ],
      "statusStateKey": "ui.invoiceCatalogue.action.cmdUpdateInvoice.status",
      "errorStateKey": "ui.invoiceCatalogue.action.cmdUpdateInvoice.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateInvoice.success",
        "errorMessageKey": "action.cmdUpdateInvoice.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.status"
      ],
      "refreshActionIds": [
        "qryListInvoice",
        "qryClientPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdDeleteInvoice",
      "kind": "command",
      "commandRef": "cmdDeleteInvoice",
      "routeKey": "buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice",
      "purpose": "Excluir Fatura",
      "methodName": "cmdDeleteInvoice",
      "handlerName": "handleCmdDeleteInvoiceClick",
      "inputStateKeys": [
        "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId"
      ],
      "outputStateKeys": [
        "ui.invoiceCatalogue.output.cmdDeleteInvoice"
      ],
      "statusStateKey": "ui.invoiceCatalogue.action.cmdDeleteInvoice.status",
      "errorStateKey": "ui.invoiceCatalogue.action.cmdDeleteInvoice.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteInvoice.success",
        "errorMessageKey": "action.cmdDeleteInvoice.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId"
      ],
      "refreshActionIds": [
        "qryListInvoice",
        "qryClientPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "qryClientPicker",
      "kind": "query",
      "commandRef": "qryClientPicker",
      "routeKey": "buildFlowFsm.invoiceCatalogue.qryClientPicker",
      "purpose": "Listar Cliente",
      "methodName": "loadQryClientPicker",
      "handlerName": "handleQryClientPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.invoiceCatalogue.data.qryClientPicker"
      ],
      "statusStateKey": "ui.invoiceCatalogue.action.qryClientPicker.status"
    },
    {
      "actionId": "qryProjectPicker",
      "kind": "query",
      "commandRef": "qryProjectPicker",
      "routeKey": "buildFlowFsm.invoiceCatalogue.qryProjectPicker",
      "purpose": "Listar Obra",
      "methodName": "loadQryProjectPicker",
      "handlerName": "handleQryProjectPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.invoiceCatalogue.data.qryProjectPicker"
      ],
      "statusStateKey": "ui.invoiceCatalogue.action.qryProjectPicker.status"
    },
    {
      "actionId": "set.cmdCreateInvoiceClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId",
      "methodName": "setCmdCreateInvoiceClientClientId",
      "handlerName": "handleCmdCreateInvoiceClientClientIdChange"
    },
    {
      "actionId": "set.cmdCreateInvoiceProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId",
      "methodName": "setCmdCreateInvoiceProjectProjectId",
      "handlerName": "handleCmdCreateInvoiceProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateInvoiceCommercialReference",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference",
      "methodName": "setCmdCreateInvoiceCommercialReference",
      "handlerName": "handleCmdCreateInvoiceCommercialReferenceChange"
    },
    {
      "actionId": "set.cmdCreateInvoiceAmount",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.amount",
      "methodName": "setCmdCreateInvoiceAmount",
      "handlerName": "handleCmdCreateInvoiceAmountChange"
    },
    {
      "actionId": "set.cmdUpdateInvoiceInvoiceId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
      "methodName": "setCmdUpdateInvoiceInvoiceId",
      "handlerName": "handleCmdUpdateInvoiceInvoiceIdChange",
      "prefill": {
        "command": "cmdUpdateInvoice",
        "sourceStateKey": "ui.invoiceCatalogue.data.qryListInvoice",
        "sourceOutputShape": "array",
        "matchField": "invoiceId",
        "fields": [
          {
            "itemField": "commercialReference",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference"
          },
          {
            "itemField": "amount",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInvoiceClientId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
      "methodName": "setCmdUpdateInvoiceClientId",
      "handlerName": "handleCmdUpdateInvoiceClientIdChange",
      "prefill": {
        "command": "cmdUpdateInvoice",
        "sourceStateKey": "ui.invoiceCatalogue.data.qryListInvoice",
        "sourceOutputShape": "array",
        "matchField": "clientId",
        "fields": [
          {
            "itemField": "commercialReference",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference"
          },
          {
            "itemField": "amount",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInvoiceProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId",
      "methodName": "setCmdUpdateInvoiceProjectId",
      "handlerName": "handleCmdUpdateInvoiceProjectIdChange",
      "prefill": {
        "command": "cmdUpdateInvoice",
        "sourceStateKey": "ui.invoiceCatalogue.data.qryListInvoice",
        "sourceOutputShape": "array",
        "matchField": "projectId",
        "fields": [
          {
            "itemField": "commercialReference",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference"
          },
          {
            "itemField": "amount",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateInvoiceCommercialReference",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference",
      "methodName": "setCmdUpdateInvoiceCommercialReference",
      "handlerName": "handleCmdUpdateInvoiceCommercialReferenceChange"
    },
    {
      "actionId": "set.cmdUpdateInvoiceAmount",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount",
      "methodName": "setCmdUpdateInvoiceAmount",
      "handlerName": "handleCmdUpdateInvoiceAmountChange"
    },
    {
      "actionId": "set.cmdUpdateInvoiceStatus",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.status",
      "methodName": "setCmdUpdateInvoiceStatus",
      "handlerName": "handleCmdUpdateInvoiceStatusChange"
    },
    {
      "actionId": "set.cmdDeleteInvoiceInvoiceId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId",
      "methodName": "setCmdDeleteInvoiceInvoiceId",
      "handlerName": "handleCmdDeleteInvoiceInvoiceIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListInvoice",
      "stateKey": "ui.invoiceCatalogue.data.qryListInvoice"
    },
    {
      "actionId": "qryClientPicker",
      "stateKey": "ui.invoiceCatalogue.data.qryClientPicker"
    },
    {
      "actionId": "qryProjectPicker",
      "stateKey": "ui.invoiceCatalogue.data.qryProjectPicker"
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
    "section.invoiceCatalogue.recordList.title": "Localizar e selecionar fatura",
    "organism.invoiceCatalogue.qryListInvoice.title": "Listar Fatura",
    "intent.invoiceCatalogue.qryListInvoice.list.title": "Listar Fatura",
    "intent.invoiceCatalogue.qryListInvoice.list.empty": "Nenhum registro encontrado",
    "intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label": "Invoice Id",
    "intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label": "Client Id",
    "intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label": "Project Id",
    "intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label": "Commercial Reference",
    "intent.invoiceCatalogue.qryListInvoice.list.column.amount.label": "Amount",
    "intent.invoiceCatalogue.qryListInvoice.list.column.status.label": "Status",
    "organism.invoiceCatalogue.cmdDeleteInvoice.title": "Excluir Fatura",
    "intent.invoiceCatalogue.cmdDeleteInvoice.form.title": "Excluir Fatura",
    "intent.invoiceCatalogue.cmdDeleteInvoice.form.action.cmdDeleteInvoice": "Excluir Fatura",
    "section.invoiceCatalogue.recordForm.title": "Emitir ou corrigir fatura",
    "organism.invoiceCatalogue.cmdCreateInvoice.title": "Emitir a fatura",
    "intent.invoiceCatalogue.cmdCreateInvoice.form.title": "Emitir a fatura",
    "intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice": "Emitir a fatura",
    "intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label": "Commercial Reference",
    "intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label": "Amount",
    "organism.invoiceCatalogue.qryClientPicker.title": "Listar Cliente",
    "intent.invoiceCatalogue.qryClientPicker.list.title": "Listar Cliente",
    "intent.invoiceCatalogue.qryClientPicker.list.empty": "Nenhum registro encontrado",
    "intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label": "Client Id",
    "intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label": "Client Name",
    "intent.invoiceCatalogue.qryClientPicker.list.column.contactEmail.label": "Contact Email",
    "intent.invoiceCatalogue.qryClientPicker.list.column.contactPhone.label": "Contact Phone",
    "organism.invoiceCatalogue.qryProjectPicker.title": "Listar Obra",
    "intent.invoiceCatalogue.qryProjectPicker.list.title": "Listar Obra",
    "intent.invoiceCatalogue.qryProjectPicker.list.empty": "Nenhum registro encontrado",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label": "Project Id",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.clientId.label": "Client Id",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.name.label": "Name",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.address.label": "Address",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.status.label": "Status",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.invoiceCatalogue.qryProjectPicker.list.column.plannedEndDate.label": "Planned End Date",
    "organism.invoiceCatalogue.cmdUpdateInvoice.title": "Atualizar Fatura",
    "intent.invoiceCatalogue.cmdUpdateInvoice.form.title": "Atualizar Fatura",
    "intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice": "Atualizar Fatura",
    "intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label": "Commercial Reference",
    "intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label": "Amount",
    "intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label": "Status",
    "action.cmdCreateInvoice.success": "Emitir a fatura: OK",
    "action.cmdCreateInvoice.error": "Emitir a fatura: falhou",
    "action.cmdUpdateInvoice.success": "Atualizar Fatura: OK",
    "action.cmdUpdateInvoice.error": "Atualizar Fatura: falhou",
    "action.cmdDeleteInvoice.success": "Excluir Fatura: OK",
    "action.cmdDeleteInvoice.error": "Excluir Fatura: falhou",
    "section.invoiceCatalogue.invoiceWorkbench.title": "Localizar e gerir faturas",
    "section.invoiceCatalogue.invoiceIssuance.title": "Emitir nova fatura"
  },
  "automation": {
    "statePrefix": "ui.invoiceCatalogue",
    "stateKeys": [
      "ui.invoiceCatalogue.status",
      "ui.invoiceCatalogue.action.qryListInvoice.status",
      "ui.invoiceCatalogue.data.qryListInvoice",
      "ui.invoiceCatalogue.action.cmdCreateInvoice.status",
      "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId",
      "ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId",
      "ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference",
      "ui.invoiceCatalogue.input.cmdCreateInvoice.amount",
      "ui.invoiceCatalogue.output.cmdCreateInvoice",
      "ui.invoiceCatalogue.action.cmdCreateInvoice.error",
      "ui.invoiceCatalogue.action.cmdUpdateInvoice.status",
      "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
      "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
      "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId",
      "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference",
      "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount",
      "ui.invoiceCatalogue.input.cmdUpdateInvoice.status",
      "ui.invoiceCatalogue.output.cmdUpdateInvoice",
      "ui.invoiceCatalogue.action.cmdUpdateInvoice.error",
      "ui.invoiceCatalogue.action.cmdDeleteInvoice.status",
      "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId",
      "ui.invoiceCatalogue.output.cmdDeleteInvoice",
      "ui.invoiceCatalogue.action.cmdDeleteInvoice.error",
      "ui.invoiceCatalogue.action.qryClientPicker.status",
      "ui.invoiceCatalogue.data.qryClientPicker",
      "ui.invoiceCatalogue.action.qryProjectPicker.status",
      "ui.invoiceCatalogue.data.qryProjectPicker"
    ],
    "actionIds": [
      "qryListInvoice",
      "cmdCreateInvoice",
      "cmdUpdateInvoice",
      "cmdDeleteInvoice",
      "qryClientPicker",
      "qryProjectPicker",
      "set.cmdCreateInvoiceClientClientId",
      "set.cmdCreateInvoiceProjectProjectId",
      "set.cmdCreateInvoiceCommercialReference",
      "set.cmdCreateInvoiceAmount",
      "set.cmdUpdateInvoiceInvoiceId",
      "set.cmdUpdateInvoiceClientId",
      "set.cmdUpdateInvoiceProjectId",
      "set.cmdUpdateInvoiceCommercialReference",
      "set.cmdUpdateInvoiceAmount",
      "set.cmdUpdateInvoiceStatus",
      "set.cmdDeleteInvoiceInvoiceId"
    ]
  }
};

export const pipeline = [
  {
    "id": "invoiceCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/invoiceCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly",
      "invoiceRequiresClientAndProject",
      "clientVisibleInvoice"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
