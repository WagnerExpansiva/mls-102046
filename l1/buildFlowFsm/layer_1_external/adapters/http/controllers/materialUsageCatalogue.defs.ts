/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/materialUsageCatalogue.defs.ts" enhancement="_blank"/>

export const materialUsageCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "materialUsageCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "materialUsageCatalogue",
    "controllerName": "MaterialUsageCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "materialUsageCatalogue",
    "actors": [
      "fieldCoordinator",
      "fieldWorker"
    ],
    "allowedScopes": [
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "materialUsageCatalogueQryListMaterialUsageHandler",
        "command": "qryListMaterialUsage",
        "bffId": "qryListMaterialUsage",
        "route": "buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage",
        "kind": "query",
        "usecaseRef": "listMaterialUsage",
        "usecaseRefs": [
          "listMaterialUsage"
        ],
        "inputTypeName": "ListMaterialUsageInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "materialUsageId",
              "operationId": "listMaterialUsage",
              "path": [
                "materialUsageId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listMaterialUsage",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listMaterialUsage",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "inventoryItemId",
              "operationId": "listMaterialUsage",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": true
            },
            {
              "name": "inventoryBalanceId",
              "operationId": "listMaterialUsage",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": true
            },
            {
              "name": "quantity",
              "operationId": "listMaterialUsage",
              "path": [
                "quantity"
              ],
              "fromItems": true
            },
            {
              "name": "usageDescription",
              "operationId": "listMaterialUsage",
              "path": [
                "usageDescription"
              ],
              "fromItems": true
            },
            {
              "name": "consumedOn",
              "operationId": "listMaterialUsage",
              "path": [
                "consumedOn"
              ],
              "fromItems": true
            },
            {
              "name": "unitCostBasis",
              "operationId": "listMaterialUsage",
              "path": [
                "unitCostBasis"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "materialUsageCatalogueCmdCreateMaterialUsageHandler",
        "command": "cmdCreateMaterialUsage",
        "bffId": "cmdCreateMaterialUsage",
        "route": "buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage",
        "kind": "command",
        "usecaseRef": "createMaterialUsage",
        "usecaseRefs": [
          "createMaterialUsage"
        ],
        "inputTypeName": "CreateMaterialUsageInput",
        "inputContract": [
          {
            "inputId": "inventoryBalanceInventoryBalanceId",
            "fieldRef": "InventoryBalance.inventoryBalanceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Saldo de estoque"
          },
          {
            "inputId": "inventoryItemInventoryItemId",
            "fieldRef": "InventoryItem.inventoryItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Item de estoque"
          },
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "quantity",
            "fieldRef": "MaterialUsage.quantity",
            "required": true,
            "source": "userInput",
            "description": "Quantidade do item efetivamente consumida na obra."
          },
          {
            "inputId": "usageDescription",
            "fieldRef": "MaterialUsage.usageDescription",
            "required": true,
            "source": "userInput",
            "description": "Descrição informada do consumo de material realizado em campo."
          },
          {
            "inputId": "consumedOn",
            "fieldRef": "MaterialUsage.consumedOn",
            "required": true,
            "source": "userInput",
            "description": "Data em que o material foi efetivamente consumido na obra."
          },
          {
            "inputId": "unitCostBasis",
            "fieldRef": "MaterialUsage.unitCostBasis",
            "required": true,
            "source": "userInput",
            "description": "Custo unitário preservado como base para o custeio realizado do consumo."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "materialUsageId",
              "operationId": "createMaterialUsage",
              "path": [
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createMaterialUsage",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createMaterialUsage",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "createMaterialUsage",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryBalanceId",
              "operationId": "createMaterialUsage",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "createMaterialUsage",
              "path": [
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "usageDescription",
              "operationId": "createMaterialUsage",
              "path": [
                "usageDescription"
              ],
              "fromItems": false
            },
            {
              "name": "consumedOn",
              "operationId": "createMaterialUsage",
              "path": [
                "consumedOn"
              ],
              "fromItems": false
            },
            {
              "name": "unitCostBasis",
              "operationId": "createMaterialUsage",
              "path": [
                "unitCostBasis"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "materialUsageCatalogueCmdUpdateMaterialUsageHandler",
        "command": "cmdUpdateMaterialUsage",
        "bffId": "cmdUpdateMaterialUsage",
        "route": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
        "kind": "command",
        "usecaseRef": "updateMaterialUsage",
        "usecaseRefs": [
          "updateMaterialUsage"
        ],
        "inputTypeName": "UpdateMaterialUsageInput",
        "inputContract": [
          {
            "inputId": "materialUsageId",
            "fieldRef": "MaterialUsage.materialUsageId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas."
          },
          {
            "inputId": "status",
            "fieldRef": "MaterialUsage.status",
            "required": true,
            "source": "systemDefault",
            "description": "Situação do apontamento de consumo para determinar sua elegibilidade no custo realizado e na execução consolidada."
          },
          {
            "inputId": "projectId",
            "fieldRef": "MaterialUsage.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à obra contra a qual o material foi efetivamente consumido."
          },
          {
            "inputId": "inventoryItemId",
            "fieldRef": "MaterialUsage.inventoryItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto ao item de material efetivamente utilizado."
          },
          {
            "inputId": "inventoryBalanceId",
            "fieldRef": "MaterialUsage.inventoryBalanceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência ao saldo operacional que suportou o consumo, para manter a rastreabilidade de disponibilidade e custo."
          },
          {
            "inputId": "quantity",
            "fieldRef": "MaterialUsage.quantity",
            "required": true,
            "source": "userInput",
            "description": "Quantidade do item efetivamente consumida na obra."
          },
          {
            "inputId": "usageDescription",
            "fieldRef": "MaterialUsage.usageDescription",
            "required": true,
            "source": "userInput",
            "description": "Descrição informada do consumo de material realizado em campo."
          },
          {
            "inputId": "consumedOn",
            "fieldRef": "MaterialUsage.consumedOn",
            "required": true,
            "source": "userInput",
            "description": "Data em que o material foi efetivamente consumido na obra."
          },
          {
            "inputId": "unitCostBasis",
            "fieldRef": "MaterialUsage.unitCostBasis",
            "required": true,
            "source": "userInput",
            "description": "Custo unitário preservado como base para o custeio realizado do consumo."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "materialUsageId",
              "operationId": "updateMaterialUsage",
              "path": [
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateMaterialUsage",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateMaterialUsage",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "updateMaterialUsage",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryBalanceId",
              "operationId": "updateMaterialUsage",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "updateMaterialUsage",
              "path": [
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "usageDescription",
              "operationId": "updateMaterialUsage",
              "path": [
                "usageDescription"
              ],
              "fromItems": false
            },
            {
              "name": "consumedOn",
              "operationId": "updateMaterialUsage",
              "path": [
                "consumedOn"
              ],
              "fromItems": false
            },
            {
              "name": "unitCostBasis",
              "operationId": "updateMaterialUsage",
              "path": [
                "unitCostBasis"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "materialUsageCatalogueCmdDeleteMaterialUsageHandler",
        "command": "cmdDeleteMaterialUsage",
        "bffId": "cmdDeleteMaterialUsage",
        "route": "buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage",
        "kind": "command",
        "usecaseRef": "deleteMaterialUsage",
        "usecaseRefs": [
          "deleteMaterialUsage"
        ],
        "inputTypeName": "DeleteMaterialUsageInput",
        "inputContract": [
          {
            "inputId": "materialUsageId",
            "fieldRef": "MaterialUsage.materialUsageId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "materialUsageId",
              "operationId": "deleteMaterialUsage",
              "path": [
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteMaterialUsage",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "deleteMaterialUsage",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "deleteMaterialUsage",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryBalanceId",
              "operationId": "deleteMaterialUsage",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "deleteMaterialUsage",
              "path": [
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "usageDescription",
              "operationId": "deleteMaterialUsage",
              "path": [
                "usageDescription"
              ],
              "fromItems": false
            },
            {
              "name": "consumedOn",
              "operationId": "deleteMaterialUsage",
              "path": [
                "consumedOn"
              ],
              "fromItems": false
            },
            {
              "name": "unitCostBasis",
              "operationId": "deleteMaterialUsage",
              "path": [
                "unitCostBasis"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "materialUsageCatalogueQryInventoryBalancePickerHandler",
        "command": "qryInventoryBalancePicker",
        "bffId": "qryInventoryBalancePicker",
        "route": "buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker",
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
        "handlerName": "materialUsageCatalogueQryInventoryItemPickerHandler",
        "command": "qryInventoryItemPicker",
        "bffId": "qryInventoryItemPicker",
        "route": "buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker",
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
        "handlerName": "materialUsageCatalogueQryProjectPickerHandler",
        "command": "qryProjectPicker",
        "bffId": "qryProjectPicker",
        "route": "buildFlowFsm.materialUsageCatalogue.qryProjectPicker",
        "kind": "query",
        "usecaseRef": "listProject",
        "usecaseRefs": [
          "listProject"
        ],
        "inputTypeName": "ListProjectInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "listProject",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "listProject",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "listProject",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "address",
              "operationId": "listProject",
              "path": [
                "address"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listProject",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "authorizedBudget",
              "operationId": "listProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": true
            },
            {
              "name": "plannedStartDate",
              "operationId": "listProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": true
            },
            {
              "name": "plannedEndDate",
              "operationId": "listProject",
              "path": [
                "plannedEndDate"
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
        "key": "buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage",
        "handlerName": "materialUsageCatalogueQryListMaterialUsageHandler"
      },
      {
        "key": "buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage",
        "handlerName": "materialUsageCatalogueCmdCreateMaterialUsageHandler"
      },
      {
        "key": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
        "handlerName": "materialUsageCatalogueCmdUpdateMaterialUsageHandler"
      },
      {
        "key": "buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage",
        "handlerName": "materialUsageCatalogueCmdDeleteMaterialUsageHandler"
      },
      {
        "key": "buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker",
        "handlerName": "materialUsageCatalogueQryInventoryBalancePickerHandler"
      },
      {
        "key": "buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker",
        "handlerName": "materialUsageCatalogueQryInventoryItemPickerHandler"
      },
      {
        "key": "buildFlowFsm.materialUsageCatalogue.qryProjectPicker",
        "handlerName": "materialUsageCatalogueQryProjectPickerHandler"
      }
    ]
  }
} as const;

export default materialUsageCatalogueController;

export const pipeline = [
  {
    "id": "materialUsageCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/materialUsageCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/materialUsageCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/materialUsageCatalogue.qryListMaterialUsage.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/materialUsageCatalogue.cmdCreateMaterialUsage.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateMaterialUsage.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/materialUsageCatalogue.cmdUpdateMaterialUsage.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteMaterialUsage.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/materialUsageCatalogue.cmdDeleteMaterialUsage.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/materialUsageCatalogue.qryInventoryBalancePicker.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/materialUsageCatalogue.qryInventoryItemPicker.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/materialUsageCatalogue.qryProjectPicker.defs.ts"
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
