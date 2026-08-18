/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryItem.defs.ts" enhancement="_blank"/>

export const createInventoryItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createInventoryItem",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createInventoryItem",
    "ports": [
      "InventoryItem"
    ],
    "rulesApplied": [
      "selectableInventoryItem"
    ],
    "functions": [
      {
        "functionName": "createInventoryItem",
        "inputTypeName": "CreateInventoryItemInput",
        "outputTypeName": "CreateInventoryItemOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Nome pelo qual o material ou consumível é identificado no catálogo.",
            "ofEntity": "InventoryItem",
            "fieldRef": "InventoryItem.name",
            "item": {
              "fields": []
            }
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "description": "Descrição complementar para distinguir e especificar o material no catálogo.",
            "ofEntity": "InventoryItem",
            "fieldRef": "InventoryItem.description",
            "item": {
              "fields": []
            }
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco.",
            "ofEntity": "InventoryItem",
            "fieldRef": "InventoryItem.unitOfMeasure",
            "item": {
              "fields": []
            }
          },
          {
            "name": "referenceUnitCost",
            "type": "number",
            "required": true,
            "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra.",
            "ofEntity": "InventoryItem",
            "fieldRef": "InventoryItem.referenceUnitCost",
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
        "rulesApplied": [
          "selectableInventoryItem"
        ],
        "transactional": true,
        "steps": [
          "Validate that name and unitOfMeasure are not blank and referenceUnitCost is non-negative; if validation fails, include selectableInventoryItem in the validation error details.",
          "Set status to the system default active.",
          "Generate inventoryItemId with ctx.idGenerator.",
          "Create the InventoryItem aggregate through the InventoryItem port with name, description, unitOfMeasure, referenceUnitCost, status, and inventoryItemId.",
          "Return the created InventoryItem fields in the canonical output shape."
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

export default createInventoryItemUsecase;

export const pipeline = [
  {
    "id": "createInventoryItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryItem.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryItem.defs.ts",
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
