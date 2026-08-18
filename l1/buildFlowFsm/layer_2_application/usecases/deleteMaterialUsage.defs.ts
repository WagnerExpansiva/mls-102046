/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteMaterialUsage.defs.ts" enhancement="_blank"/>

export const deleteMaterialUsageUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteMaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteMaterialUsage",
    "ports": [
      "MaterialUsage"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteMaterialUsage",
        "inputTypeName": "DeleteMaterialUsageInput",
        "outputTypeName": "DeleteMaterialUsageOutput",
        "input": [
          {
            "name": "materialUsageId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas.",
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.materialUsageId",
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
          "Load the MaterialUsage aggregate through the MaterialUsage port using materialUsageId.",
          "If the aggregate does not exist, return the port/usecase not-found error.",
          "Capture the aggregate fields required by the declared output before deletion.",
          "Delete the MaterialUsage aggregate through the MaterialUsage port within the transaction.",
          "Return the captured MaterialUsage fields using the canonical output shape."
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

export default deleteMaterialUsageUsecase;

export const pipeline = [
  {
    "id": "deleteMaterialUsage__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteMaterialUsage.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteMaterialUsage.defs.ts",
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
