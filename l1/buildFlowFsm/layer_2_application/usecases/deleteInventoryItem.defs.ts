/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryItem.defs.ts" enhancement="_blank"/>

export const deleteInventoryItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteInventoryItem",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteInventoryItem",
    "ports": [
      "InventoryItem"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteInventoryItem",
        "inputTypeName": "DeleteInventoryItemInput",
        "outputTypeName": "DeleteInventoryItemOutput",
        "input": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do item no catálogo mestre de materiais.",
            "ofEntity": "InventoryItem",
            "fieldRef": "InventoryItem.inventoryItemId",
            "item": {
              "fields": []
            }
          }
        ],
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
        "transactional": true,
        "steps": [
          "Load InventoryItem by inventoryItemId through the InventoryItem port.",
          "Capture the declared output fields from the loaded aggregate.",
          "Delete the InventoryItem through the InventoryItem port within the transaction.",
          "Return the captured InventoryItem fields."
        ],
        "outputShape": {
          "kind": "object",
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

export default deleteInventoryItemUsecase;

export const pipeline = [
  {
    "id": "deleteInventoryItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryItem.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryItem.defs.ts",
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
