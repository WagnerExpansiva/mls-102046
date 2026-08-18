/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffMaterialUsageToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const handoffMaterialUsageToFieldCoordinatorUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffMaterialUsageToFieldCoordinator",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffMaterialUsageToFieldCoordinator",
    "ports": [
      "MaterialUsage"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "handoffMaterialUsageToFieldCoordinator",
        "inputTypeName": "HandoffMaterialUsageToFieldCoordinatorInput",
        "outputTypeName": "HandoffMaterialUsageToFieldCoordinatorOutput",
        "input": [
          {
            "name": "materialUsageId",
            "type": "string",
            "required": true,
            "description": "Consumo de material",
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.materialUsageId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "description": "Quantidade do item efetivamente consumida na obra.",
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.quantity",
            "item": {
              "fields": []
            }
          },
          {
            "name": "usageDescription",
            "type": "string",
            "required": true,
            "description": "Descrição informada do consumo de material realizado em campo.",
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.usageDescription",
            "item": {
              "fields": []
            }
          },
          {
            "name": "consumedOn",
            "type": "string",
            "required": true,
            "description": "Data em que o material foi efetivamente consumido na obra.",
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.consumedOn",
            "item": {
              "fields": []
            }
          },
          {
            "name": "unitCostBasis",
            "type": "number",
            "required": true,
            "description": "Custo unitário preservado como base para o custeio realizado do consumo.",
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.unitCostBasis",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "materialUsageId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "inventoryBalanceId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "usageDescription",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "consumedOn",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "unitCostBasis",
            "type": "number",
            "required": true,
            "ofEntity": "MaterialUsage"
          }
        ],
        "ports": [
          "MaterialUsage"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load the MaterialUsage aggregate by materialUsageId through the MaterialUsage port.",
          "Validate that the aggregate exists and that its current status is recorded; reject voided usages.",
          "Apply the submitted quantity, usageDescription, consumedOn, and unitCostBasis to the aggregate.",
          "Persist the updated MaterialUsage aggregate through the MaterialUsage port within a transaction wrapper.",
          "Return the canonical MaterialUsage output shape."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "materialUsageId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.materialUsageId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.status"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.projectId"
            },
            {
              "name": "inventoryItemId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.inventoryItemId"
            },
            {
              "name": "inventoryBalanceId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.inventoryBalanceId"
            },
            {
              "name": "quantity",
              "type": "number",
              "required": true,
              "fieldRef": "MaterialUsage.quantity"
            },
            {
              "name": "usageDescription",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.usageDescription"
            },
            {
              "name": "consumedOn",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.consumedOn"
            },
            {
              "name": "unitCostBasis",
              "type": "number",
              "required": true,
              "fieldRef": "MaterialUsage.unitCostBasis"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default handoffMaterialUsageToFieldCoordinatorUsecase;

export const pipeline = [
  {
    "id": "handoffMaterialUsageToFieldCoordinator__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffMaterialUsageToFieldCoordinator.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffMaterialUsageToFieldCoordinator.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
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
