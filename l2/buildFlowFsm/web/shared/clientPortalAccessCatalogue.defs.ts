/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientPortalAccessCatalogue",
  "pageName": "Vínculo de acesso do cliente",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmClientPortalAccessCatalogueBase",
  "routePattern": "/buildFlowFsm/clientPortalAccessCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:clientPortalAccessCatalogue",
    "contract:buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess",
    "contract:buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess",
    "contract:buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess",
    "contract:buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess",
    "contract:buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker"
  ],
  "operationIds": [
    "createClientPortalAccess",
    "deleteClientPortalAccess",
    "listClient",
    "listClientPortalAccess",
    "updateClientPortalAccess"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "clientPortalAccessCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "ClientPortalAccess",
    "owners": [
      {
        "kind": "operation",
        "id": "createClientPortalAccess",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createClientPortalAccess.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteClientPortalAccess",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteClientPortalAccess.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClientPortalAccess",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClientPortalAccess.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateClientPortalAccess",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateClientPortalAccess.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createClientPortalAccess",
          "commandName": "cmdCreateClientPortalAccess",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteClientPortalAccess",
          "commandName": "cmdDeleteClientPortalAccess",
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
          "operationId": "listClientPortalAccess",
          "commandName": "qryListClientPortalAccess",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "updateClientPortalAccess",
          "commandName": "cmdUpdateClientPortalAccess",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/clientPortalAccessCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListClientPortalAccess",
        "routeConst": "qryListClientPortalAccessRoute"
      },
      {
        "commandName": "cmdCreateClientPortalAccess",
        "routeConst": "cmdCreateClientPortalAccessRoute"
      },
      {
        "commandName": "cmdUpdateClientPortalAccess",
        "routeConst": "cmdUpdateClientPortalAccessRoute"
      },
      {
        "commandName": "cmdDeleteClientPortalAccess",
        "routeConst": "cmdDeleteClientPortalAccessRoute"
      },
      {
        "commandName": "qryClientPicker",
        "routeConst": "qryClientPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientPortalAccessCatalogue.defs.ts",
    "layoutId": "clientPortalAccessCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.clientPortalAccessCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status",
      "name": "qryListClientPortalAccessState",
      "kind": "actionStatus",
      "actionRef": "qryListClientPortalAccess",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess",
      "name": "qryListClientPortalAccessData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListClientPortalAccess",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status",
      "name": "cmdCreateClientPortalAccessState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateClientPortalAccess",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
      "name": "cmdCreateClientPortalAccessClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateClientPortalAccess",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
      "name": "cmdCreateClientPortalAccessPlatformUserId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateClientPortalAccess",
        "direction": "input",
        "field": "platformUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status",
      "name": "cmdCreateClientPortalAccessStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateClientPortalAccess",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess",
      "name": "cmdCreateClientPortalAccessOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateClientPortalAccess",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error",
      "name": "cmdCreateClientPortalAccessError",
      "kind": "actionError",
      "actionRef": "cmdCreateClientPortalAccess",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status",
      "name": "cmdUpdateClientPortalAccessState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateClientPortalAccess",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
      "name": "cmdUpdateClientPortalAccessClientPortalAccessId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateClientPortalAccess",
        "direction": "input",
        "field": "clientPortalAccessId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
      "name": "cmdUpdateClientPortalAccessClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateClientPortalAccess",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
      "name": "cmdUpdateClientPortalAccessPlatformUserId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateClientPortalAccess",
        "direction": "input",
        "field": "platformUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status",
      "name": "cmdUpdateClientPortalAccessStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateClientPortalAccess",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess",
      "name": "cmdUpdateClientPortalAccessOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateClientPortalAccess",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error",
      "name": "cmdUpdateClientPortalAccessError",
      "kind": "actionError",
      "actionRef": "cmdUpdateClientPortalAccess",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status",
      "name": "cmdDeleteClientPortalAccessState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteClientPortalAccess",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId",
      "name": "cmdDeleteClientPortalAccessClientPortalAccessId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteClientPortalAccess",
        "direction": "input",
        "field": "clientPortalAccessId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess",
      "name": "cmdDeleteClientPortalAccessOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteClientPortalAccess",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error",
      "name": "cmdDeleteClientPortalAccessError",
      "kind": "actionError",
      "actionRef": "cmdDeleteClientPortalAccess",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientPortalAccessCatalogue.action.qryClientPicker.status",
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
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryClientPicker",
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
      "actionId": "qryListClientPortalAccess",
      "kind": "query",
      "commandRef": "qryListClientPortalAccess",
      "routeKey": "buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess",
      "purpose": "Listar Vínculo de acesso do cliente",
      "methodName": "loadQryListClientPortalAccess",
      "handlerName": "handleQryListClientPortalAccessClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess"
      ],
      "statusStateKey": "ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status"
    },
    {
      "actionId": "cmdCreateClientPortalAccess",
      "kind": "command",
      "commandRef": "cmdCreateClientPortalAccess",
      "routeKey": "buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess",
      "purpose": "Criar Vínculo de acesso do cliente",
      "methodName": "cmdCreateClientPortalAccess",
      "handlerName": "handleCmdCreateClientPortalAccessClick",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId"
      ],
      "outputStateKeys": [
        "ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess"
      ],
      "statusStateKey": "ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status",
      "errorStateKey": "ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateClientPortalAccess.success",
        "errorMessageKey": "action.cmdCreateClientPortalAccess.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status"
      ],
      "refreshActionIds": [
        "qryListClientPortalAccess",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "cmdUpdateClientPortalAccess",
      "kind": "command",
      "commandRef": "cmdUpdateClientPortalAccess",
      "routeKey": "buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess",
      "purpose": "Atualizar Vínculo de acesso do cliente",
      "methodName": "cmdUpdateClientPortalAccess",
      "handlerName": "handleCmdUpdateClientPortalAccessClick",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId"
      ],
      "outputStateKeys": [
        "ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess"
      ],
      "statusStateKey": "ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status",
      "errorStateKey": "ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateClientPortalAccess.success",
        "errorMessageKey": "action.cmdUpdateClientPortalAccess.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status"
      ],
      "refreshActionIds": [
        "qryListClientPortalAccess",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "cmdDeleteClientPortalAccess",
      "kind": "command",
      "commandRef": "cmdDeleteClientPortalAccess",
      "routeKey": "buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess",
      "purpose": "Excluir Vínculo de acesso do cliente",
      "methodName": "cmdDeleteClientPortalAccess",
      "handlerName": "handleCmdDeleteClientPortalAccessClick",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId"
      ],
      "outputStateKeys": [
        "ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess"
      ],
      "statusStateKey": "ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status",
      "errorStateKey": "ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteClientPortalAccess.success",
        "errorMessageKey": "action.cmdDeleteClientPortalAccess.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId"
      ],
      "refreshActionIds": [
        "qryListClientPortalAccess",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "qryClientPicker",
      "kind": "query",
      "commandRef": "qryClientPicker",
      "routeKey": "buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker",
      "purpose": "Listar Cliente",
      "methodName": "loadQryClientPicker",
      "handlerName": "handleQryClientPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientPortalAccessCatalogue.data.qryClientPicker"
      ],
      "statusStateKey": "ui.clientPortalAccessCatalogue.action.qryClientPicker.status"
    },
    {
      "actionId": "set.cmdCreateClientPortalAccessClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
      "methodName": "setCmdCreateClientPortalAccessClientId",
      "handlerName": "handleCmdCreateClientPortalAccessClientIdChange",
      "prefill": {
        "command": "cmdCreateClientPortalAccess",
        "sourceStateKey": "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess",
        "sourceOutputShape": "array",
        "matchField": "clientId",
        "fields": [
          {
            "itemField": "platformUserId",
            "targetStateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdCreateClientPortalAccessPlatformUserId",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
      "methodName": "setCmdCreateClientPortalAccessPlatformUserId",
      "handlerName": "handleCmdCreateClientPortalAccessPlatformUserIdChange"
    },
    {
      "actionId": "set.cmdCreateClientPortalAccessStatus",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status",
      "methodName": "setCmdCreateClientPortalAccessStatus",
      "handlerName": "handleCmdCreateClientPortalAccessStatusChange"
    },
    {
      "actionId": "set.cmdUpdateClientPortalAccessClientPortalAccessId",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
      "methodName": "setCmdUpdateClientPortalAccessClientPortalAccessId",
      "handlerName": "handleCmdUpdateClientPortalAccessClientPortalAccessIdChange",
      "prefill": {
        "command": "cmdUpdateClientPortalAccess",
        "sourceStateKey": "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess",
        "sourceOutputShape": "array",
        "matchField": "clientPortalAccessId",
        "fields": [
          {
            "itemField": "platformUserId",
            "targetStateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateClientPortalAccessClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
      "methodName": "setCmdUpdateClientPortalAccessClientId",
      "handlerName": "handleCmdUpdateClientPortalAccessClientIdChange",
      "prefill": {
        "command": "cmdUpdateClientPortalAccess",
        "sourceStateKey": "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess",
        "sourceOutputShape": "array",
        "matchField": "clientId",
        "fields": [
          {
            "itemField": "platformUserId",
            "targetStateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateClientPortalAccessPlatformUserId",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
      "methodName": "setCmdUpdateClientPortalAccessPlatformUserId",
      "handlerName": "handleCmdUpdateClientPortalAccessPlatformUserIdChange"
    },
    {
      "actionId": "set.cmdUpdateClientPortalAccessStatus",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status",
      "methodName": "setCmdUpdateClientPortalAccessStatus",
      "handlerName": "handleCmdUpdateClientPortalAccessStatusChange"
    },
    {
      "actionId": "set.cmdDeleteClientPortalAccessClientPortalAccessId",
      "kind": "stateSetter",
      "stateKey": "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId",
      "methodName": "setCmdDeleteClientPortalAccessClientPortalAccessId",
      "handlerName": "handleCmdDeleteClientPortalAccessClientPortalAccessIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListClientPortalAccess",
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess"
    },
    {
      "actionId": "qryClientPicker",
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryClientPicker"
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
    "section.clientPortalAccessCatalogue.recordList.title": "Vínculos existentes",
    "organism.clientPortalAccessCatalogue.qryListClientPortalAccess.title": "Listar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.title": "Listar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty": "Nenhum registro encontrado",
    "intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label": "Client Portal Access Id",
    "intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label": "Client Id",
    "intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label": "Platform User Id",
    "intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label": "Status",
    "organism.clientPortalAccessCatalogue.qryClientPicker.title": "Listar Cliente",
    "intent.clientPortalAccessCatalogue.qryClientPicker.list.title": "Listar Cliente",
    "intent.clientPortalAccessCatalogue.qryClientPicker.list.empty": "Nenhum registro encontrado",
    "intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label": "Client Id",
    "intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label": "Client Name",
    "intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label": "Contact Email",
    "intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label": "Contact Phone",
    "organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title": "Atualizar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title": "Atualizar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess": "Atualizar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label": "Platform User Id",
    "intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label": "Status",
    "organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title": "Excluir Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title": "Excluir Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess": "Excluir Vínculo de acesso do cliente",
    "section.clientPortalAccessCatalogue.recordForm.title": "Criar ou corrigir vínculo",
    "organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title": "Criar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title": "Criar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.action.cmdCreateClientPortalAccess": "Criar Vínculo de acesso do cliente",
    "intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.platformUserId.label": "Platform User Id",
    "intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.status.label": "Status",
    "action.cmdCreateClientPortalAccess.success": "Criar Vínculo de acesso do cliente: OK",
    "action.cmdCreateClientPortalAccess.error": "Criar Vínculo de acesso do cliente: falhou",
    "action.cmdUpdateClientPortalAccess.success": "Atualizar Vínculo de acesso do cliente: OK",
    "action.cmdUpdateClientPortalAccess.error": "Atualizar Vínculo de acesso do cliente: falhou",
    "action.cmdDeleteClientPortalAccess.success": "Excluir Vínculo de acesso do cliente: OK",
    "action.cmdDeleteClientPortalAccess.error": "Excluir Vínculo de acesso do cliente: falhou",
    "section.clientPortalAccessCatalogue.accessRecordsWorkspace.title": "Vínculos de acesso"
  },
  "automation": {
    "statePrefix": "ui.clientPortalAccessCatalogue",
    "stateKeys": [
      "ui.clientPortalAccessCatalogue.status",
      "ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status",
      "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess",
      "ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status",
      "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
      "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
      "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status",
      "ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess",
      "ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error",
      "ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status",
      "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
      "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
      "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
      "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status",
      "ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess",
      "ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error",
      "ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status",
      "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId",
      "ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess",
      "ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error",
      "ui.clientPortalAccessCatalogue.action.qryClientPicker.status",
      "ui.clientPortalAccessCatalogue.data.qryClientPicker"
    ],
    "actionIds": [
      "qryListClientPortalAccess",
      "cmdCreateClientPortalAccess",
      "cmdUpdateClientPortalAccess",
      "cmdDeleteClientPortalAccess",
      "qryClientPicker",
      "set.cmdCreateClientPortalAccessClientId",
      "set.cmdCreateClientPortalAccessPlatformUserId",
      "set.cmdCreateClientPortalAccessStatus",
      "set.cmdUpdateClientPortalAccessClientPortalAccessId",
      "set.cmdUpdateClientPortalAccessClientId",
      "set.cmdUpdateClientPortalAccessPlatformUserId",
      "set.cmdUpdateClientPortalAccessStatus",
      "set.cmdDeleteClientPortalAccessClientPortalAccessId"
    ]
  }
};

export const pipeline = [
  {
    "id": "clientPortalAccessCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/clientPortalAccessCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeClientPortalAccess"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
