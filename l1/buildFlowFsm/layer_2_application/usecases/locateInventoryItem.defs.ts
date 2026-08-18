/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateInventoryItem.defs.ts" enhancement="_blank"/>

export const locateInventoryItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "locateInventoryItem",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "locateInventoryItem",
    "ports": [
      "InventoryItem"
    ],
    "rulesApplied": [
      "selectableInventoryItem"
    ],
    "functions": [
      {
        "functionName": "locateInventoryItem",
        "inputTypeName": "LocateInventoryItemInput",
        "outputTypeName": "LocateInventoryItemOutput",
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
        "rulesApplied": [
          "selectableInventoryItem"
        ],
        "transactional": false,
        "steps": [
          "Load inventory items through the InventoryItem port.",
          "Apply selectableInventoryItem inline by retaining only selectable active inventory items.",
          "Project each result to inventoryItemId, name, description, unitOfMeasure, referenceUnitCost, and status.",
          "Return the resulting collection without pagination."
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

export default locateInventoryItemUsecase;

export const pipeline = [
  {
    "id": "locateInventoryItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateInventoryItem.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateInventoryItem.defs.ts",
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
    "rulesApplied": [
      "selectableInventoryItem"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
