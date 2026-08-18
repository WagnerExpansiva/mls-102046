/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientPortalAccessCatalogue.defs.ts" enhancement="_blank"/>

export const clientPortalAccessCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "clientPortalAccessCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "clientPortalAccessCatalogue",
    "controllerName": "ClientPortalAccessCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "clientPortalAccessCatalogue",
    "actors": [
      "billingStaff",
      "fieldCoordinator",
      "fieldWorker",
      "projectManager"
    ],
    "allowedScopes": [
      "internal",
      "internal",
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "clientPortalAccessCatalogueQryListClientPortalAccessHandler",
        "command": "qryListClientPortalAccess",
        "bffId": "qryListClientPortalAccess",
        "route": "buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess",
        "kind": "query",
        "usecaseRef": "listClientPortalAccess",
        "usecaseRefs": [
          "listClientPortalAccess"
        ],
        "inputTypeName": "ListClientPortalAccessInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "clientPortalAccessId",
              "operationId": "listClientPortalAccess",
              "path": [
                "clientPortalAccessId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "listClientPortalAccess",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "platformUserId",
              "operationId": "listClientPortalAccess",
              "path": [
                "platformUserId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listClientPortalAccess",
              "path": [
                "status"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientPortalAccessCatalogueCmdCreateClientPortalAccessHandler",
        "command": "cmdCreateClientPortalAccess",
        "bffId": "cmdCreateClientPortalAccess",
        "route": "buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess",
        "kind": "command",
        "usecaseRef": "createClientPortalAccess",
        "usecaseRefs": [
          "createClientPortalAccess"
        ],
        "inputTypeName": "CreateClientPortalAccessInput",
        "inputContract": [
          {
            "inputId": "clientId",
            "fieldRef": "ClientPortalAccess.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto ao cliente ao qual o usuário externo está associado."
          },
          {
            "inputId": "platformUserId",
            "fieldRef": "ClientPortalAccess.platformUserId",
            "required": true,
            "source": "actorSession",
            "description": "Referência de contexto ao usuário externo da plataforma associado ao cliente."
          },
          {
            "inputId": "status",
            "fieldRef": "ClientPortalAccess.status",
            "required": true,
            "source": "systemDefault",
            "description": "Indica se o vínculo atualmente concede ou não associação do usuário ao cliente."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientPortalAccessId",
              "operationId": "createClientPortalAccess",
              "path": [
                "clientPortalAccessId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "createClientPortalAccess",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "platformUserId",
              "operationId": "createClientPortalAccess",
              "path": [
                "platformUserId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createClientPortalAccess",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientPortalAccessCatalogueCmdUpdateClientPortalAccessHandler",
        "command": "cmdUpdateClientPortalAccess",
        "bffId": "cmdUpdateClientPortalAccess",
        "route": "buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess",
        "kind": "command",
        "usecaseRef": "updateClientPortalAccess",
        "usecaseRefs": [
          "updateClientPortalAccess"
        ],
        "inputTypeName": "UpdateClientPortalAccessInput",
        "inputContract": [
          {
            "inputId": "clientPortalAccessId",
            "fieldRef": "ClientPortalAccess.clientPortalAccessId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada."
          },
          {
            "inputId": "clientId",
            "fieldRef": "ClientPortalAccess.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto ao cliente ao qual o usuário externo está associado."
          },
          {
            "inputId": "platformUserId",
            "fieldRef": "ClientPortalAccess.platformUserId",
            "required": true,
            "source": "actorSession",
            "description": "Referência de contexto ao usuário externo da plataforma associado ao cliente."
          },
          {
            "inputId": "status",
            "fieldRef": "ClientPortalAccess.status",
            "required": true,
            "source": "systemDefault",
            "description": "Indica se o vínculo atualmente concede ou não associação do usuário ao cliente."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientPortalAccessId",
              "operationId": "updateClientPortalAccess",
              "path": [
                "clientPortalAccessId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "updateClientPortalAccess",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "platformUserId",
              "operationId": "updateClientPortalAccess",
              "path": [
                "platformUserId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateClientPortalAccess",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientPortalAccessCatalogueCmdDeleteClientPortalAccessHandler",
        "command": "cmdDeleteClientPortalAccess",
        "bffId": "cmdDeleteClientPortalAccess",
        "route": "buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess",
        "kind": "command",
        "usecaseRef": "deleteClientPortalAccess",
        "usecaseRefs": [
          "deleteClientPortalAccess"
        ],
        "inputTypeName": "DeleteClientPortalAccessInput",
        "inputContract": [
          {
            "inputId": "clientPortalAccessId",
            "fieldRef": "ClientPortalAccess.clientPortalAccessId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientPortalAccessId",
              "operationId": "deleteClientPortalAccess",
              "path": [
                "clientPortalAccessId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "deleteClientPortalAccess",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "platformUserId",
              "operationId": "deleteClientPortalAccess",
              "path": [
                "platformUserId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteClientPortalAccess",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientPortalAccessCatalogueQryClientPickerHandler",
        "command": "qryClientPicker",
        "bffId": "qryClientPicker",
        "route": "buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker",
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
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess",
        "handlerName": "clientPortalAccessCatalogueQryListClientPortalAccessHandler"
      },
      {
        "key": "buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess",
        "handlerName": "clientPortalAccessCatalogueCmdCreateClientPortalAccessHandler"
      },
      {
        "key": "buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess",
        "handlerName": "clientPortalAccessCatalogueCmdUpdateClientPortalAccessHandler"
      },
      {
        "key": "buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess",
        "handlerName": "clientPortalAccessCatalogueCmdDeleteClientPortalAccessHandler"
      },
      {
        "key": "buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker",
        "handlerName": "clientPortalAccessCatalogueQryClientPickerHandler"
      }
    ]
  }
} as const;

export default clientPortalAccessCatalogueController;

export const pipeline = [
  {
    "id": "clientPortalAccessCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientPortalAccessCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientPortalAccessCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClientPortalAccess.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.qryListClientPortalAccess.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClientPortalAccess.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.cmdCreateClientPortalAccess.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClientPortalAccess.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClientPortalAccess.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.qryClientPicker.defs.ts"
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
