/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryBalance.defs.ts" enhancement="_blank"/>

export const updateInventoryBalanceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateInventoryBalance",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateInventoryBalance",
    "ports": [
      "InventoryBalance",
      "InventoryItem"
    ],
    "rulesApplied": [
      "availableInventoryBalance"
    ],
    "functions": [
      {
        "functionName": "updateInventoryBalance",
        "inputTypeName": "UpdateInventoryBalanceInput",
        "outputTypeName": "UpdateInventoryBalanceOutput",
        "input": [
          {
            "name": "inventoryBalanceId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas.",
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
            "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto.",
            "ofEntity": "InventoryBalance",
            "fieldRef": "InventoryBalance.inventoryItemId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "physicalQuantity",
            "type": "number",
            "required": true,
            "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo.",
            "ofEntity": "InventoryBalance",
            "fieldRef": "InventoryBalance.physicalQuantity",
            "item": {
              "fields": []
            }
          },
          {
            "name": "applicableUnitCost",
            "type": "number",
            "required": true,
            "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra.",
            "ofEntity": "InventoryBalance",
            "fieldRef": "InventoryBalance.applicableUnitCost",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "inventoryBalanceId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryBalance"
          },
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryBalance"
          },
          {
            "name": "physicalQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryBalance"
          },
          {
            "name": "applicableUnitCost",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryBalance"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryBalance"
          }
        ],
        "ports": [
          "InventoryBalance",
          "InventoryItem"
        ],
        "rulesApplied": [
          "availableInventoryBalance"
        ],
        "transactional": true,
        "steps": [
          "Validate that inventoryBalanceId, inventoryItemId, physicalQuantity, and applicableUnitCost are present and that physicalQuantity and applicableUnitCost are not negative; if blocked, include rule availableInventoryBalance in the validation error details.",
          "Load the InventoryBalance through the InventoryBalance port and verify that the selected inventoryItemId matches the balance being updated.",
          "Load the InventoryItem through the InventoryItem port and reject the update if the item does not exist or is retired.",
          "Apply availableInventoryBalance inline: a non-retired balance with physicalQuantity greater than zero has status available, while a zero quantity has status depleted; preserve retired status only when the existing balance is already retired.",
          "Update the InventoryBalance aggregate with the validated inventoryItemId, physicalQuantity, applicableUnitCost, and derived status, then save it through the InventoryBalance port.",
          "Return exactly the updated inventoryBalanceId, inventoryItemId, physicalQuantity, applicableUnitCost, and status fields."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "inventoryBalanceId",
              "type": "string",
              "required": true,
              "fieldRef": "InventoryBalance.inventoryBalanceId"
            },
            {
              "name": "inventoryItemId",
              "type": "string",
              "required": true,
              "fieldRef": "InventoryBalance.inventoryItemId"
            },
            {
              "name": "physicalQuantity",
              "type": "number",
              "required": true,
              "fieldRef": "InventoryBalance.physicalQuantity"
            },
            {
              "name": "applicableUnitCost",
              "type": "number",
              "required": true,
              "fieldRef": "InventoryBalance.applicableUnitCost"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "InventoryBalance.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateInventoryBalanceUsecase;

export const pipeline = [
  {
    "id": "updateInventoryBalance__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryBalance.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryBalance.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "availableInventoryBalance"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
