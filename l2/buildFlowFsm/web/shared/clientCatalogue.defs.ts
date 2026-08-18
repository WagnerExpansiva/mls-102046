/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientCatalogue",
  "pageName": "Cliente",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmClientCatalogueBase",
  "routePattern": "/buildFlowFsm/clientCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:clientCatalogue",
    "contract:buildFlowFsm.clientCatalogue.qryListClient",
    "contract:buildFlowFsm.clientCatalogue.cmdCreateClient",
    "contract:buildFlowFsm.clientCatalogue.cmdUpdateClient",
    "contract:buildFlowFsm.clientCatalogue.cmdDeleteClient"
  ],
  "operationIds": [
    "createClient",
    "deleteClient",
    "listClient",
    "updateClient"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "clientCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "Client",
    "owners": [
      {
        "kind": "operation",
        "id": "createClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateClient.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createClient",
          "commandName": "cmdCreateClient",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteClient",
          "commandName": "cmdDeleteClient",
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
          "operationId": "updateClient",
          "commandName": "cmdUpdateClient",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/clientCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListClient",
        "routeConst": "qryListClientRoute"
      },
      {
        "commandName": "cmdCreateClient",
        "routeConst": "cmdCreateClientRoute"
      },
      {
        "commandName": "cmdUpdateClient",
        "routeConst": "cmdUpdateClientRoute"
      },
      {
        "commandName": "cmdDeleteClient",
        "routeConst": "cmdDeleteClientRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientCatalogue.defs.ts",
    "layoutId": "clientCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.clientCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.action.qryListClient.status",
      "name": "qryListClientState",
      "kind": "actionStatus",
      "actionRef": "qryListClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientCatalogue.data.qryListClient",
      "name": "qryListClientData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListClient",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.clientCatalogue.action.cmdCreateClient.status",
      "name": "cmdCreateClientState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdCreateClient.clientName",
      "name": "cmdCreateClientClientName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateClient",
        "direction": "input",
        "field": "clientName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdCreateClient.contactEmail",
      "name": "cmdCreateClientContactEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateClient",
        "direction": "input",
        "field": "contactEmail"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdCreateClient.contactPhone",
      "name": "cmdCreateClientContactPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateClient",
        "direction": "input",
        "field": "contactPhone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.output.cmdCreateClient",
      "name": "cmdCreateClientOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateClient",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientCatalogue.action.cmdCreateClient.error",
      "name": "cmdCreateClientError",
      "kind": "actionError",
      "actionRef": "cmdCreateClient",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.action.cmdUpdateClient.status",
      "name": "cmdUpdateClientState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.clientId",
      "name": "cmdUpdateClientClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateClient",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.clientName",
      "name": "cmdUpdateClientClientName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateClient",
        "direction": "input",
        "field": "clientName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactEmail",
      "name": "cmdUpdateClientContactEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateClient",
        "direction": "input",
        "field": "contactEmail"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactPhone",
      "name": "cmdUpdateClientContactPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateClient",
        "direction": "input",
        "field": "contactPhone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.output.cmdUpdateClient",
      "name": "cmdUpdateClientOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateClient",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientCatalogue.action.cmdUpdateClient.error",
      "name": "cmdUpdateClientError",
      "kind": "actionError",
      "actionRef": "cmdUpdateClient",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.action.cmdDeleteClient.status",
      "name": "cmdDeleteClientState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientCatalogue.input.cmdDeleteClient.clientId",
      "name": "cmdDeleteClientClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteClient",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientCatalogue.output.cmdDeleteClient",
      "name": "cmdDeleteClientOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteClient",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientCatalogue.action.cmdDeleteClient.error",
      "name": "cmdDeleteClientError",
      "kind": "actionError",
      "actionRef": "cmdDeleteClient",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryListClient",
      "kind": "query",
      "commandRef": "qryListClient",
      "routeKey": "buildFlowFsm.clientCatalogue.qryListClient",
      "purpose": "Listar Cliente",
      "methodName": "loadQryListClient",
      "handlerName": "handleQryListClientClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientCatalogue.data.qryListClient"
      ],
      "statusStateKey": "ui.clientCatalogue.action.qryListClient.status"
    },
    {
      "actionId": "cmdCreateClient",
      "kind": "command",
      "commandRef": "cmdCreateClient",
      "routeKey": "buildFlowFsm.clientCatalogue.cmdCreateClient",
      "purpose": "Criar Cliente",
      "methodName": "cmdCreateClient",
      "handlerName": "handleCmdCreateClientClick",
      "inputStateKeys": [
        "ui.clientCatalogue.input.cmdCreateClient.clientName",
        "ui.clientCatalogue.input.cmdCreateClient.contactEmail",
        "ui.clientCatalogue.input.cmdCreateClient.contactPhone"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientCatalogue.output.cmdCreateClient"
      ],
      "statusStateKey": "ui.clientCatalogue.action.cmdCreateClient.status",
      "errorStateKey": "ui.clientCatalogue.action.cmdCreateClient.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateClient.success",
        "errorMessageKey": "action.cmdCreateClient.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientCatalogue.input.cmdCreateClient.clientName",
        "ui.clientCatalogue.input.cmdCreateClient.contactEmail",
        "ui.clientCatalogue.input.cmdCreateClient.contactPhone"
      ],
      "refreshActionIds": [
        "qryListClient"
      ]
    },
    {
      "actionId": "cmdUpdateClient",
      "kind": "command",
      "commandRef": "cmdUpdateClient",
      "routeKey": "buildFlowFsm.clientCatalogue.cmdUpdateClient",
      "purpose": "Atualizar Cliente",
      "methodName": "cmdUpdateClient",
      "handlerName": "handleCmdUpdateClientClick",
      "inputStateKeys": [
        "ui.clientCatalogue.input.cmdUpdateClient.clientId",
        "ui.clientCatalogue.input.cmdUpdateClient.clientName",
        "ui.clientCatalogue.input.cmdUpdateClient.contactEmail",
        "ui.clientCatalogue.input.cmdUpdateClient.contactPhone"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.clientCatalogue.input.cmdUpdateClient.clientId"
      ],
      "outputStateKeys": [
        "ui.clientCatalogue.output.cmdUpdateClient"
      ],
      "statusStateKey": "ui.clientCatalogue.action.cmdUpdateClient.status",
      "errorStateKey": "ui.clientCatalogue.action.cmdUpdateClient.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateClient.success",
        "errorMessageKey": "action.cmdUpdateClient.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientCatalogue.input.cmdUpdateClient.clientId",
        "ui.clientCatalogue.input.cmdUpdateClient.clientName",
        "ui.clientCatalogue.input.cmdUpdateClient.contactEmail",
        "ui.clientCatalogue.input.cmdUpdateClient.contactPhone"
      ],
      "refreshActionIds": [
        "qryListClient"
      ]
    },
    {
      "actionId": "cmdDeleteClient",
      "kind": "command",
      "commandRef": "cmdDeleteClient",
      "routeKey": "buildFlowFsm.clientCatalogue.cmdDeleteClient",
      "purpose": "Excluir Cliente",
      "methodName": "cmdDeleteClient",
      "handlerName": "handleCmdDeleteClientClick",
      "inputStateKeys": [
        "ui.clientCatalogue.input.cmdDeleteClient.clientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.clientCatalogue.input.cmdDeleteClient.clientId"
      ],
      "outputStateKeys": [
        "ui.clientCatalogue.output.cmdDeleteClient"
      ],
      "statusStateKey": "ui.clientCatalogue.action.cmdDeleteClient.status",
      "errorStateKey": "ui.clientCatalogue.action.cmdDeleteClient.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteClient.success",
        "errorMessageKey": "action.cmdDeleteClient.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientCatalogue.input.cmdDeleteClient.clientId"
      ],
      "refreshActionIds": [
        "qryListClient"
      ]
    },
    {
      "actionId": "set.cmdCreateClientClientName",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdCreateClient.clientName",
      "methodName": "setCmdCreateClientClientName",
      "handlerName": "handleCmdCreateClientClientNameChange"
    },
    {
      "actionId": "set.cmdCreateClientContactEmail",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdCreateClient.contactEmail",
      "methodName": "setCmdCreateClientContactEmail",
      "handlerName": "handleCmdCreateClientContactEmailChange"
    },
    {
      "actionId": "set.cmdCreateClientContactPhone",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdCreateClient.contactPhone",
      "methodName": "setCmdCreateClientContactPhone",
      "handlerName": "handleCmdCreateClientContactPhoneChange"
    },
    {
      "actionId": "set.cmdUpdateClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.clientId",
      "methodName": "setCmdUpdateClientClientId",
      "handlerName": "handleCmdUpdateClientClientIdChange",
      "prefill": {
        "command": "cmdUpdateClient",
        "sourceStateKey": "ui.clientCatalogue.data.qryListClient",
        "sourceOutputShape": "array",
        "matchField": "clientId",
        "fields": [
          {
            "itemField": "clientName",
            "targetStateKey": "ui.clientCatalogue.input.cmdUpdateClient.clientName"
          },
          {
            "itemField": "contactEmail",
            "targetStateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactEmail"
          },
          {
            "itemField": "contactPhone",
            "targetStateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactPhone"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateClientClientName",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.clientName",
      "methodName": "setCmdUpdateClientClientName",
      "handlerName": "handleCmdUpdateClientClientNameChange"
    },
    {
      "actionId": "set.cmdUpdateClientContactEmail",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactEmail",
      "methodName": "setCmdUpdateClientContactEmail",
      "handlerName": "handleCmdUpdateClientContactEmailChange"
    },
    {
      "actionId": "set.cmdUpdateClientContactPhone",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactPhone",
      "methodName": "setCmdUpdateClientContactPhone",
      "handlerName": "handleCmdUpdateClientContactPhoneChange"
    },
    {
      "actionId": "set.cmdDeleteClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientCatalogue.input.cmdDeleteClient.clientId",
      "methodName": "setCmdDeleteClientClientId",
      "handlerName": "handleCmdDeleteClientClientIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListClient",
      "stateKey": "ui.clientCatalogue.data.qryListClient"
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
    "section.clientCatalogue.recordList.title": "Localizar Cliente",
    "organism.clientCatalogue.qryListClient.title": "Listar Cliente",
    "intent.clientCatalogue.qryListClient.list.title": "Listar Cliente",
    "intent.clientCatalogue.qryListClient.list.empty": "Nenhum registro encontrado",
    "intent.clientCatalogue.qryListClient.list.column.clientId.label": "Client Id",
    "intent.clientCatalogue.qryListClient.list.column.clientName.label": "Client Name",
    "intent.clientCatalogue.qryListClient.list.column.contactEmail.label": "Contact Email",
    "intent.clientCatalogue.qryListClient.list.column.contactPhone.label": "Contact Phone",
    "organism.clientCatalogue.cmdDeleteClient.title": "Excluir Cliente",
    "intent.clientCatalogue.cmdDeleteClient.form.title": "Excluir Cliente",
    "intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient": "Excluir Cliente",
    "section.clientCatalogue.recordForm.title": "Criar ou corrigir Cliente",
    "organism.clientCatalogue.cmdCreateClient.title": "Criar Cliente",
    "intent.clientCatalogue.cmdCreateClient.form.title": "Criar Cliente",
    "intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient": "Criar Cliente",
    "intent.clientCatalogue.cmdCreateClient.form.field.clientName.label": "Client Name",
    "intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label": "Contact Email",
    "intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label": "Contact Phone",
    "organism.clientCatalogue.cmdUpdateClient.title": "Atualizar Cliente",
    "intent.clientCatalogue.cmdUpdateClient.form.title": "Atualizar Cliente",
    "intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient": "Atualizar Cliente",
    "intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label": "Client Name",
    "intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label": "Contact Email",
    "intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label": "Contact Phone",
    "action.cmdCreateClient.success": "Criar Cliente: OK",
    "action.cmdCreateClient.error": "Criar Cliente: falhou",
    "action.cmdUpdateClient.success": "Atualizar Cliente: OK",
    "action.cmdUpdateClient.error": "Atualizar Cliente: falhou",
    "action.cmdDeleteClient.success": "Excluir Cliente: OK",
    "action.cmdDeleteClient.error": "Excluir Cliente: falhou",
    "section.clientCatalogue.clientWorkspace.title": "Gestão de clientes"
  },
  "automation": {
    "statePrefix": "ui.clientCatalogue",
    "stateKeys": [
      "ui.clientCatalogue.status",
      "ui.clientCatalogue.action.qryListClient.status",
      "ui.clientCatalogue.data.qryListClient",
      "ui.clientCatalogue.action.cmdCreateClient.status",
      "ui.clientCatalogue.input.cmdCreateClient.clientName",
      "ui.clientCatalogue.input.cmdCreateClient.contactEmail",
      "ui.clientCatalogue.input.cmdCreateClient.contactPhone",
      "ui.clientCatalogue.output.cmdCreateClient",
      "ui.clientCatalogue.action.cmdCreateClient.error",
      "ui.clientCatalogue.action.cmdUpdateClient.status",
      "ui.clientCatalogue.input.cmdUpdateClient.clientId",
      "ui.clientCatalogue.input.cmdUpdateClient.clientName",
      "ui.clientCatalogue.input.cmdUpdateClient.contactEmail",
      "ui.clientCatalogue.input.cmdUpdateClient.contactPhone",
      "ui.clientCatalogue.output.cmdUpdateClient",
      "ui.clientCatalogue.action.cmdUpdateClient.error",
      "ui.clientCatalogue.action.cmdDeleteClient.status",
      "ui.clientCatalogue.input.cmdDeleteClient.clientId",
      "ui.clientCatalogue.output.cmdDeleteClient",
      "ui.clientCatalogue.action.cmdDeleteClient.error"
    ],
    "actionIds": [
      "qryListClient",
      "cmdCreateClient",
      "cmdUpdateClient",
      "cmdDeleteClient",
      "set.cmdCreateClientClientName",
      "set.cmdCreateClientContactEmail",
      "set.cmdCreateClientContactPhone",
      "set.cmdUpdateClientClientId",
      "set.cmdUpdateClientClientName",
      "set.cmdUpdateClientContactEmail",
      "set.cmdUpdateClientContactPhone",
      "set.cmdDeleteClientClientId"
    ]
  }
};

export const pipeline = [
  {
    "id": "clientCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/clientCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
