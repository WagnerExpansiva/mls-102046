/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.defs.ts" enhancement="_blank"/>

export const createMaterialUsageUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createMaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createMaterialUsage",
    "ports": [
      "MaterialUsage",
      "InventoryBalance",
      "InventoryItem",
      "Project"
    ],
    "rulesApplied": [
      "materialUsageRequiresActiveProjectAndAvailableInventory"
    ],
    "functions": [
      {
        "functionName": "createMaterialUsage",
        "inputTypeName": "CreateMaterialUsageInput",
        "outputTypeName": "CreateMaterialUsageOutput",
        "input": [
          {
            "name": "inventoryBalanceId",
            "type": "string",
            "required": true,
            "description": "Saldo de estoque selecionado para o consumo.",
            "ofEntity": "InventoryBalance",
            "fieldRef": "InventoryBalance.inventoryBalanceId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "description": "Item de estoque selecionado.",
            "ofEntity": "InventoryItem",
            "fieldRef": "InventoryItem.inventoryItemId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Obra informada pela rota.",
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
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
          "MaterialUsage",
          "InventoryBalance",
          "InventoryItem",
          "Project"
        ],
        "rulesApplied": [
          "materialUsageRequiresActiveProjectAndAvailableInventory"
        ],
        "transactional": true,
        "steps": [
          "Dentro de uma única transação, carregar o Project pelo projectId, o InventoryItem pelo inventoryItemId e o InventoryBalance pelo inventoryBalanceId usando exclusivamente seus ports.",
          "Aplicar inline a regra materialUsageRequiresActiveProjectAndAvailableInventory: rejeitar quando o projeto não existir ou não estiver active; rejeitar quando o item não existir ou não estiver active; rejeitar quando o saldo não existir, não estiver available, não pertencer ao inventoryItemId informado ou não tiver physicalQuantity suficiente; incluir o id da regra nos detalhes do erro.",
          "Validar quantity maior que zero e os demais campos obrigatórios; rejeitar entradas inválidas.",
          "Criar MaterialUsage com id gerado, status recorded, projectId, inventoryItemId, inventoryBalanceId, quantity, usageDescription, consumedOn e unitCostBasis.",
          "Persistir o MaterialUsage e retornar exatamente materialUsageId, status, projectId, inventoryItemId, inventoryBalanceId, quantity, usageDescription, consumedOn e unitCostBasis."
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

export default createMaterialUsageUsecase;

export const pipeline = [
  {
    "id": "createMaterialUsage__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "materialUsageRequiresActiveProjectAndAvailableInventory"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
