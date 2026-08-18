/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordProjectMaterialUsage.defs.ts" enhancement="_blank"/>

export const recordProjectMaterialUsageController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "recordProjectMaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "recordProjectMaterialUsage",
    "controllerName": "RecordProjectMaterialUsageController",
    "ownerKind": "workspace",
    "workspaceId": "recordProjectMaterialUsage",
    "actors": [
      "fieldWorker"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "recordProjectMaterialUsageQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.recordProjectMaterialUsage.qryLocateProject",
        "kind": "query",
        "usecaseRef": "locateProject",
        "usecaseRefs": [
          "locateProject"
        ],
        "inputTypeName": "LocateProjectInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "locateProject",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "locateProject",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "locateProject",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "address",
              "operationId": "locateProject",
              "path": [
                "address"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "locateProject",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "authorizedBudget",
              "operationId": "locateProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": true
            },
            {
              "name": "plannedStartDate",
              "operationId": "locateProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": true
            },
            {
              "name": "plannedEndDate",
              "operationId": "locateProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "recordProjectMaterialUsageQryLocateInventoryItemHandler",
        "command": "qryLocateInventoryItem",
        "bffId": "qryLocateInventoryItem",
        "route": "buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem",
        "kind": "query",
        "usecaseRef": "locateInventoryItem",
        "usecaseRefs": [
          "locateInventoryItem"
        ],
        "inputTypeName": "LocateInventoryItemInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "inventoryItemId",
              "operationId": "locateInventoryItem",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "locateInventoryItem",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "locateInventoryItem",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "unitOfMeasure",
              "operationId": "locateInventoryItem",
              "path": [
                "unitOfMeasure"
              ],
              "fromItems": true
            },
            {
              "name": "referenceUnitCost",
              "operationId": "locateInventoryItem",
              "path": [
                "referenceUnitCost"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "locateInventoryItem",
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
        "handlerName": "recordProjectMaterialUsageCmdCreateMaterialUsageHandler",
        "command": "cmdCreateMaterialUsage",
        "bffId": "cmdCreateMaterialUsage",
        "route": "buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage",
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
        "handlerName": "recordProjectMaterialUsageCmdHandoffMaterialUsageToFieldCoordinatorHandler",
        "command": "cmdHandoffMaterialUsageToFieldCoordinator",
        "bffId": "cmdHandoffMaterialUsageToFieldCoordinator",
        "route": "buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator",
        "kind": "command",
        "usecaseRef": "handoffMaterialUsageToFieldCoordinator",
        "usecaseRefs": [
          "handoffMaterialUsageToFieldCoordinator"
        ],
        "inputTypeName": "HandoffMaterialUsageToFieldCoordinatorInput",
        "inputContract": [
          {
            "inputId": "materialUsageMaterialUsageId",
            "fieldRef": "MaterialUsage.materialUsageId",
            "required": true,
            "source": "selectedEntity",
            "description": "Consumo de material"
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
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryBalanceId",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "usageDescription",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "usageDescription"
              ],
              "fromItems": false
            },
            {
              "name": "consumedOn",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
              "path": [
                "consumedOn"
              ],
              "fromItems": false
            },
            {
              "name": "unitCostBasis",
              "operationId": "handoffMaterialUsageToFieldCoordinator",
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
        "handlerName": "recordProjectMaterialUsageQryInventoryBalancePickerHandler",
        "command": "qryInventoryBalancePicker",
        "bffId": "qryInventoryBalancePicker",
        "route": "buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker",
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
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.recordProjectMaterialUsage.qryLocateProject",
        "handlerName": "recordProjectMaterialUsageQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem",
        "handlerName": "recordProjectMaterialUsageQryLocateInventoryItemHandler"
      },
      {
        "key": "buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage",
        "handlerName": "recordProjectMaterialUsageCmdCreateMaterialUsageHandler"
      },
      {
        "key": "buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator",
        "handlerName": "recordProjectMaterialUsageCmdHandoffMaterialUsageToFieldCoordinatorHandler"
      },
      {
        "key": "buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker",
        "handlerName": "recordProjectMaterialUsageQryInventoryBalancePickerHandler"
      }
    ]
  }
} as const;

export default recordProjectMaterialUsageController;

export const pipeline = [
  {
    "id": "recordProjectMaterialUsage__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordProjectMaterialUsage.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordProjectMaterialUsage.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateInventoryItem.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.qryLocateInventoryItem.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.cmdCreateMaterialUsage.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffMaterialUsageToFieldCoordinator.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.qryInventoryBalancePicker.defs.ts"
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
