/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.defs.ts" enhancement="_blank"/>

export const listMaterialUsageUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listMaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listMaterialUsage",
    "ports": [
      "MaterialUsage"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listMaterialUsage",
        "inputTypeName": "ListMaterialUsageInput",
        "outputTypeName": "ListMaterialUsageOutput",
        "input": [],
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
        "transactional": false,
        "steps": [
          "Consultar todos los registros mediante el puerto MaterialUsage.",
          "Proyectar cada registro con los nueve campos declarados por el contrato de salida.",
          "Retornar la colección resultante sin aplicar filtros ni paginación."
        ],
        "outputShape": {
          "kind": "list",
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

export default listMaterialUsageUsecase;

export const pipeline = [
  {
    "id": "listMaterialUsage__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.defs.ts",
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
