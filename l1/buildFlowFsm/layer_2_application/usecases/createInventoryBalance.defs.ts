/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryBalance.defs.ts" enhancement="_blank"/>

export const createInventoryBalanceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createInventoryBalance",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createInventoryBalance",
    "ports": [
      "InventoryBalance",
      "InventoryItem"
    ],
    "rulesApplied": [
      "availableInventoryBalance"
    ],
    "functions": [
      {
        "functionName": "createInventoryBalance",
        "inputTypeName": "CreateInventoryBalanceInput",
        "outputTypeName": "CreateInventoryBalanceOutput",
        "input": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "description": "Referência ao item do catálogo de materiais selecionado como contexto.",
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
            "description": "Quantidade física atualmente registrada para o item de estoque.",
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
            "description": "Custo unitário operacional aplicável ao consumo de material.",
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
          "Validar pelo port InventoryItem que inventoryItemId referencia um item existente e ativo; rejeitar item inexistente ou retired.",
          "Aplicar inline a regra availableInventoryBalance: validar physicalQuantity >= 0 e applicableUnitCost >= 0; inicializar status como available quando physicalQuantity for maior que zero e como depleted quando physicalQuantity for zero.",
          "Gerar inventoryBalanceId com ctx.idGenerator e persistir o novo InventoryBalance pelo port InventoryBalance dentro da transação.",
          "Retornar exatamente inventoryBalanceId, inventoryItemId, physicalQuantity, applicableUnitCost e status."
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

export default createInventoryBalanceUsecase;

export const pipeline = [
  {
    "id": "createInventoryBalance__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryBalance.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryBalance.defs.ts",
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
