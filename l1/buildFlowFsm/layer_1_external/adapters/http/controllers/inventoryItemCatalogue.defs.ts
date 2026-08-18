/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryItemCatalogue.defs.ts" enhancement="_blank"/>

export const inventoryItemCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "inventoryItemCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "inventoryItemCatalogue",
    "controllerName": "InventoryItemCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "inventoryItemCatalogue",
    "actors": [
      "fieldWorker"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "inventoryItemCatalogueQryListInventoryItemHandler",
        "command": "qryListInventoryItem",
        "bffId": "qryListInventoryItem",
        "route": "buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem",
        "kind": "query",
        "usecaseRef": "listInventoryItem",
        "usecaseRefs": [
          "listInventoryItem"
        ],
        "inputTypeName": "ListInventoryItemInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "inventoryItemId",
              "operationId": "listInventoryItem",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "listInventoryItem",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "listInventoryItem",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "unitOfMeasure",
              "operationId": "listInventoryItem",
              "path": [
                "unitOfMeasure"
              ],
              "fromItems": true
            },
            {
              "name": "referenceUnitCost",
              "operationId": "listInventoryItem",
              "path": [
                "referenceUnitCost"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listInventoryItem",
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
        "handlerName": "inventoryItemCatalogueCmdCreateInventoryItemHandler",
        "command": "cmdCreateInventoryItem",
        "bffId": "cmdCreateInventoryItem",
        "route": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
        "kind": "command",
        "usecaseRef": "createInventoryItem",
        "usecaseRefs": [
          "createInventoryItem"
        ],
        "inputTypeName": "CreateInventoryItemInput",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "InventoryItem.name",
            "required": true,
            "source": "userInput",
            "description": "Nome pelo qual o material ou consumível é identificado no catálogo."
          },
          {
            "inputId": "description",
            "fieldRef": "InventoryItem.description",
            "required": false,
            "source": "userInput",
            "description": "Descrição complementar para distinguir e especificar o material no catálogo."
          },
          {
            "inputId": "unitOfMeasure",
            "fieldRef": "InventoryItem.unitOfMeasure",
            "required": true,
            "source": "userInput",
            "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco."
          },
          {
            "inputId": "referenceUnitCost",
            "fieldRef": "InventoryItem.referenceUnitCost",
            "required": true,
            "source": "userInput",
            "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "InventoryItem.status",
            "required": true,
            "source": "systemDefault",
            "description": "Situação do item no catálogo, determinando se pode ser selecionado para consumo."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "inventoryItemId",
              "operationId": "createInventoryItem",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "createInventoryItem",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "createInventoryItem",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "unitOfMeasure",
              "operationId": "createInventoryItem",
              "path": [
                "unitOfMeasure"
              ],
              "fromItems": false
            },
            {
              "name": "referenceUnitCost",
              "operationId": "createInventoryItem",
              "path": [
                "referenceUnitCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createInventoryItem",
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
        "handlerName": "inventoryItemCatalogueCmdUpdateInventoryItemHandler",
        "command": "cmdUpdateInventoryItem",
        "bffId": "cmdUpdateInventoryItem",
        "route": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
        "kind": "command",
        "usecaseRef": "updateInventoryItem",
        "usecaseRefs": [
          "updateInventoryItem"
        ],
        "inputTypeName": "UpdateInventoryItemInput",
        "inputContract": [
          {
            "inputId": "inventoryItemId",
            "fieldRef": "InventoryItem.inventoryItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do item no catálogo mestre de materiais."
          },
          {
            "inputId": "name",
            "fieldRef": "InventoryItem.name",
            "required": true,
            "source": "userInput",
            "description": "Nome pelo qual o material ou consumível é identificado no catálogo."
          },
          {
            "inputId": "description",
            "fieldRef": "InventoryItem.description",
            "required": false,
            "source": "userInput",
            "description": "Descrição complementar para distinguir e especificar o material no catálogo."
          },
          {
            "inputId": "unitOfMeasure",
            "fieldRef": "InventoryItem.unitOfMeasure",
            "required": true,
            "source": "userInput",
            "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco."
          },
          {
            "inputId": "referenceUnitCost",
            "fieldRef": "InventoryItem.referenceUnitCost",
            "required": true,
            "source": "userInput",
            "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "InventoryItem.status",
            "required": true,
            "source": "systemDefault",
            "description": "Situação do item no catálogo, determinando se pode ser selecionado para consumo."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "inventoryItemId",
              "operationId": "updateInventoryItem",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "updateInventoryItem",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "updateInventoryItem",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "unitOfMeasure",
              "operationId": "updateInventoryItem",
              "path": [
                "unitOfMeasure"
              ],
              "fromItems": false
            },
            {
              "name": "referenceUnitCost",
              "operationId": "updateInventoryItem",
              "path": [
                "referenceUnitCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateInventoryItem",
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
        "handlerName": "inventoryItemCatalogueCmdDeleteInventoryItemHandler",
        "command": "cmdDeleteInventoryItem",
        "bffId": "cmdDeleteInventoryItem",
        "route": "buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem",
        "kind": "command",
        "usecaseRef": "deleteInventoryItem",
        "usecaseRefs": [
          "deleteInventoryItem"
        ],
        "inputTypeName": "DeleteInventoryItemInput",
        "inputContract": [
          {
            "inputId": "inventoryItemId",
            "fieldRef": "InventoryItem.inventoryItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do item no catálogo mestre de materiais."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "inventoryItemId",
              "operationId": "deleteInventoryItem",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "deleteInventoryItem",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "deleteInventoryItem",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "unitOfMeasure",
              "operationId": "deleteInventoryItem",
              "path": [
                "unitOfMeasure"
              ],
              "fromItems": false
            },
            {
              "name": "referenceUnitCost",
              "operationId": "deleteInventoryItem",
              "path": [
                "referenceUnitCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteInventoryItem",
              "path": [
                "status"
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
        "key": "buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem",
        "handlerName": "inventoryItemCatalogueQryListInventoryItemHandler"
      },
      {
        "key": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
        "handlerName": "inventoryItemCatalogueCmdCreateInventoryItemHandler"
      },
      {
        "key": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
        "handlerName": "inventoryItemCatalogueCmdUpdateInventoryItemHandler"
      },
      {
        "key": "buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem",
        "handlerName": "inventoryItemCatalogueCmdDeleteInventoryItemHandler"
      }
    ]
  }
} as const;

export default inventoryItemCatalogueController;

export const pipeline = [
  {
    "id": "inventoryItemCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryItemCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryItemCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.qryListInventoryItem.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryItem.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.cmdCreateInventoryItem.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryItem.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.cmdUpdateInventoryItem.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryItem.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.cmdDeleteInventoryItem.defs.ts"
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
