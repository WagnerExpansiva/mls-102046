/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryBalanceCatalogue.defs.ts" enhancement="_blank"/>

export const inventoryBalanceCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "inventoryBalanceCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "inventoryBalanceCatalogue",
    "controllerName": "InventoryBalanceCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "inventoryBalanceCatalogue",
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
        "handlerName": "inventoryBalanceCatalogueQryListInventoryBalanceHandler",
        "command": "qryListInventoryBalance",
        "bffId": "qryListInventoryBalance",
        "route": "buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance",
        "kind": "query",
        "usecaseRef": "listInventoryBalance",
        "usecaseRefs": [
          "listInventoryBalance"
        ],
        "inputTypeName": "ListInventoryBalanceInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "inventoryBalanceId",
              "operationId": "listInventoryBalance",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": true
            },
            {
              "name": "inventoryItemId",
              "operationId": "listInventoryBalance",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": true
            },
            {
              "name": "physicalQuantity",
              "operationId": "listInventoryBalance",
              "path": [
                "physicalQuantity"
              ],
              "fromItems": true
            },
            {
              "name": "applicableUnitCost",
              "operationId": "listInventoryBalance",
              "path": [
                "applicableUnitCost"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listInventoryBalance",
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
        "handlerName": "inventoryBalanceCatalogueCmdCreateInventoryBalanceHandler",
        "command": "cmdCreateInventoryBalance",
        "bffId": "cmdCreateInventoryBalance",
        "route": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
        "kind": "command",
        "usecaseRef": "createInventoryBalance",
        "usecaseRefs": [
          "createInventoryBalance"
        ],
        "inputTypeName": "CreateInventoryBalanceInput",
        "inputContract": [
          {
            "inputId": "inventoryItemId",
            "fieldRef": "InventoryBalance.inventoryItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto, não digitada como identificador bruto."
          },
          {
            "inputId": "physicalQuantity",
            "fieldRef": "InventoryBalance.physicalQuantity",
            "required": true,
            "source": "userInput",
            "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo."
          },
          {
            "inputId": "applicableUnitCost",
            "fieldRef": "InventoryBalance.applicableUnitCost",
            "required": true,
            "source": "userInput",
            "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "InventoryBalance.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado operacional que indica se o saldo pode atender consumo, está esgotado ou foi desativado."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "inventoryBalanceId",
              "operationId": "createInventoryBalance",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "createInventoryBalance",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "physicalQuantity",
              "operationId": "createInventoryBalance",
              "path": [
                "physicalQuantity"
              ],
              "fromItems": false
            },
            {
              "name": "applicableUnitCost",
              "operationId": "createInventoryBalance",
              "path": [
                "applicableUnitCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createInventoryBalance",
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
        "handlerName": "inventoryBalanceCatalogueCmdUpdateInventoryBalanceHandler",
        "command": "cmdUpdateInventoryBalance",
        "bffId": "cmdUpdateInventoryBalance",
        "route": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
        "kind": "command",
        "usecaseRef": "updateInventoryBalance",
        "usecaseRefs": [
          "updateInventoryBalance"
        ],
        "inputTypeName": "UpdateInventoryBalanceInput",
        "inputContract": [
          {
            "inputId": "inventoryBalanceId",
            "fieldRef": "InventoryBalance.inventoryBalanceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas."
          },
          {
            "inputId": "inventoryItemId",
            "fieldRef": "InventoryBalance.inventoryItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto, não digitada como identificador bruto."
          },
          {
            "inputId": "physicalQuantity",
            "fieldRef": "InventoryBalance.physicalQuantity",
            "required": true,
            "source": "userInput",
            "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo."
          },
          {
            "inputId": "applicableUnitCost",
            "fieldRef": "InventoryBalance.applicableUnitCost",
            "required": true,
            "source": "userInput",
            "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "InventoryBalance.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado operacional que indica se o saldo pode atender consumo, está esgotado ou foi desativado."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "inventoryBalanceId",
              "operationId": "updateInventoryBalance",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "updateInventoryBalance",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "physicalQuantity",
              "operationId": "updateInventoryBalance",
              "path": [
                "physicalQuantity"
              ],
              "fromItems": false
            },
            {
              "name": "applicableUnitCost",
              "operationId": "updateInventoryBalance",
              "path": [
                "applicableUnitCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateInventoryBalance",
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
        "handlerName": "inventoryBalanceCatalogueCmdDeleteInventoryBalanceHandler",
        "command": "cmdDeleteInventoryBalance",
        "bffId": "cmdDeleteInventoryBalance",
        "route": "buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
        "kind": "command",
        "usecaseRef": "deleteInventoryBalance",
        "usecaseRefs": [
          "deleteInventoryBalance"
        ],
        "inputTypeName": "DeleteInventoryBalanceInput",
        "inputContract": [
          {
            "inputId": "inventoryBalanceId",
            "fieldRef": "InventoryBalance.inventoryBalanceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "inventoryBalanceId",
              "operationId": "deleteInventoryBalance",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "deleteInventoryBalance",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "physicalQuantity",
              "operationId": "deleteInventoryBalance",
              "path": [
                "physicalQuantity"
              ],
              "fromItems": false
            },
            {
              "name": "applicableUnitCost",
              "operationId": "deleteInventoryBalance",
              "path": [
                "applicableUnitCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteInventoryBalance",
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
        "handlerName": "inventoryBalanceCatalogueQryInventoryItemPickerHandler",
        "command": "qryInventoryItemPicker",
        "bffId": "qryInventoryItemPicker",
        "route": "buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker",
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
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance",
        "handlerName": "inventoryBalanceCatalogueQryListInventoryBalanceHandler"
      },
      {
        "key": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
        "handlerName": "inventoryBalanceCatalogueCmdCreateInventoryBalanceHandler"
      },
      {
        "key": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
        "handlerName": "inventoryBalanceCatalogueCmdUpdateInventoryBalanceHandler"
      },
      {
        "key": "buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
        "handlerName": "inventoryBalanceCatalogueCmdDeleteInventoryBalanceHandler"
      },
      {
        "key": "buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker",
        "handlerName": "inventoryBalanceCatalogueQryInventoryItemPickerHandler"
      }
    ]
  }
} as const;

export default inventoryBalanceCatalogueController;

export const pipeline = [
  {
    "id": "inventoryBalanceCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryBalanceCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryBalanceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.qryListInventoryBalance.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryBalance.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.cmdCreateInventoryBalance.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryBalance.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.cmdUpdateInventoryBalance.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryBalance.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.cmdDeleteInventoryBalance.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.qryInventoryItemPicker.defs.ts"
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
