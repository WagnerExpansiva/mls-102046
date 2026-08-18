/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientCatalogue.defs.ts" enhancement="_blank"/>

export const clientCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "clientCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "clientCatalogue",
    "controllerName": "ClientCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "clientCatalogue",
    "actors": [
      "billingStaff",
      "fieldCoordinator"
    ],
    "allowedScopes": [
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "clientCatalogueQryListClientHandler",
        "command": "qryListClient",
        "bffId": "qryListClient",
        "route": "buildFlowFsm.clientCatalogue.qryListClient",
        "kind": "query",
        "usecaseRef": "listClient",
        "usecaseRefs": [
          "listClient"
        ],
        "inputTypeName": "ListClientInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "clientId",
              "operationId": "listClient",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "clientName",
              "operationId": "listClient",
              "path": [
                "clientName"
              ],
              "fromItems": true
            },
            {
              "name": "contactEmail",
              "operationId": "listClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": true
            },
            {
              "name": "contactPhone",
              "operationId": "listClient",
              "path": [
                "contactPhone"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientCatalogueCmdCreateClientHandler",
        "command": "cmdCreateClient",
        "bffId": "cmdCreateClient",
        "route": "buildFlowFsm.clientCatalogue.cmdCreateClient",
        "kind": "command",
        "usecaseRef": "createClient",
        "usecaseRefs": [
          "createClient"
        ],
        "inputTypeName": "CreateClientInput",
        "inputContract": [
          {
            "inputId": "clientName",
            "fieldRef": "Client.clientName",
            "required": true,
            "source": "userInput",
            "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações."
          },
          {
            "inputId": "contactEmail",
            "fieldRef": "Client.contactEmail",
            "required": false,
            "source": "userInput",
            "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados."
          },
          {
            "inputId": "contactPhone",
            "fieldRef": "Client.contactPhone",
            "required": false,
            "source": "userInput",
            "description": "Telefone de contato do cliente para comunicação relacionada às suas obras."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "createClient",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "clientName",
              "operationId": "createClient",
              "path": [
                "clientName"
              ],
              "fromItems": false
            },
            {
              "name": "contactEmail",
              "operationId": "createClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": false
            },
            {
              "name": "contactPhone",
              "operationId": "createClient",
              "path": [
                "contactPhone"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientCatalogueCmdUpdateClientHandler",
        "command": "cmdUpdateClient",
        "bffId": "cmdUpdateClient",
        "route": "buildFlowFsm.clientCatalogue.cmdUpdateClient",
        "kind": "command",
        "usecaseRef": "updateClient",
        "usecaseRefs": [
          "updateClient"
        ],
        "inputTypeName": "UpdateClientInput",
        "inputContract": [
          {
            "inputId": "clientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas."
          },
          {
            "inputId": "clientName",
            "fieldRef": "Client.clientName",
            "required": true,
            "source": "userInput",
            "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações."
          },
          {
            "inputId": "contactEmail",
            "fieldRef": "Client.contactEmail",
            "required": false,
            "source": "userInput",
            "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados."
          },
          {
            "inputId": "contactPhone",
            "fieldRef": "Client.contactPhone",
            "required": false,
            "source": "userInput",
            "description": "Telefone de contato do cliente para comunicação relacionada às suas obras."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "updateClient",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "clientName",
              "operationId": "updateClient",
              "path": [
                "clientName"
              ],
              "fromItems": false
            },
            {
              "name": "contactEmail",
              "operationId": "updateClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": false
            },
            {
              "name": "contactPhone",
              "operationId": "updateClient",
              "path": [
                "contactPhone"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientCatalogueCmdDeleteClientHandler",
        "command": "cmdDeleteClient",
        "bffId": "cmdDeleteClient",
        "route": "buildFlowFsm.clientCatalogue.cmdDeleteClient",
        "kind": "command",
        "usecaseRef": "deleteClient",
        "usecaseRefs": [
          "deleteClient"
        ],
        "inputTypeName": "DeleteClientInput",
        "inputContract": [
          {
            "inputId": "clientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "deleteClient",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "clientName",
              "operationId": "deleteClient",
              "path": [
                "clientName"
              ],
              "fromItems": false
            },
            {
              "name": "contactEmail",
              "operationId": "deleteClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": false
            },
            {
              "name": "contactPhone",
              "operationId": "deleteClient",
              "path": [
                "contactPhone"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.clientCatalogue.qryListClient",
        "handlerName": "clientCatalogueQryListClientHandler"
      },
      {
        "key": "buildFlowFsm.clientCatalogue.cmdCreateClient",
        "handlerName": "clientCatalogueCmdCreateClientHandler"
      },
      {
        "key": "buildFlowFsm.clientCatalogue.cmdUpdateClient",
        "handlerName": "clientCatalogueCmdUpdateClientHandler"
      },
      {
        "key": "buildFlowFsm.clientCatalogue.cmdDeleteClient",
        "handlerName": "clientCatalogueCmdDeleteClientHandler"
      }
    ]
  }
} as const;

export default clientCatalogueController;

export const pipeline = [
  {
    "id": "clientCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientCatalogue.qryListClient.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientCatalogue.cmdCreateClient.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientCatalogue.cmdUpdateClient.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientCatalogue.cmdDeleteClient.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
