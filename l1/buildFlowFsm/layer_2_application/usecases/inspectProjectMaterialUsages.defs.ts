/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectMaterialUsages.defs.ts" enhancement="_blank"/>

export const inspectProjectMaterialUsagesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectProjectMaterialUsages",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectProjectMaterialUsages",
    "ports": [
      "MaterialUsage",
      "Project"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "inspectProjectMaterialUsages",
        "inputTypeName": "InspectProjectMaterialUsagesInput",
        "outputTypeName": "InspectProjectMaterialUsagesOutput",
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
          "MaterialUsage",
          "Project"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Validate the required materialUsageId input.",
          "Load the MaterialUsage aggregate through the MaterialUsage port by materialUsageId.",
          "Project and return the declared MaterialUsage fields with their canonical types."
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

export default inspectProjectMaterialUsagesUsecase;

export const pipeline = [
  {
    "id": "inspectProjectMaterialUsages__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectMaterialUsages.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectMaterialUsages.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
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
