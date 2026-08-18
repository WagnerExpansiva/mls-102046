/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.defs.ts" enhancement="_blank"/>

export const listInventoryItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listInventoryItem",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listInventoryItem",
    "ports": [
      "InventoryItem"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listInventoryItem",
        "inputTypeName": "ListInventoryItemInput",
        "outputTypeName": "ListInventoryItemOutput",
        "input": [],
        "output": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem"
          },
          {
            "name": "referenceUnitCost",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem"
          }
        ],
        "ports": [
          "InventoryItem"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Consultar todos os InventoryItem pelo port InventoryItem.",
          "Projetar cada registro somente nos campos inventoryItemId, name, description, unitOfMeasure, referenceUnitCost e status.",
          "Retornar a coleção projetada sem paginação."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "inventoryItemId",
              "type": "string",
              "required": true,
              "fieldRef": "InventoryItem.inventoryItemId"
            },
            {
              "name": "name",
              "type": "string",
              "required": true,
              "fieldRef": "InventoryItem.name"
            },
            {
              "name": "description",
              "type": "string",
              "required": false,
              "fieldRef": "InventoryItem.description"
            },
            {
              "name": "unitOfMeasure",
              "type": "string",
              "required": true,
              "fieldRef": "InventoryItem.unitOfMeasure"
            },
            {
              "name": "referenceUnitCost",
              "type": "number",
              "required": true,
              "fieldRef": "InventoryItem.referenceUnitCost"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "InventoryItem.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default listInventoryItemUsecase;

export const pipeline = [
  {
    "id": "listInventoryItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
