/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryBalance.defs.ts" enhancement="_blank"/>

export const deleteInventoryBalanceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteInventoryBalance",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteInventoryBalance",
    "ports": [
      "InventoryBalance"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteInventoryBalance",
        "inputTypeName": "DeleteInventoryBalanceInput",
        "outputTypeName": "DeleteInventoryBalanceOutput",
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
          "InventoryBalance"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Validar a presença do inventoryBalanceId recebido como entidade selecionada.",
          "Carregar o InventoryBalance pelo InventoryBalance port.",
          "Preservar a projeção do saldo carregado para a resposta.",
          "Excluir o InventoryBalance pelo InventoryBalance port dentro da mesma transação.",
          "Retornar os campos do saldo excluído conforme o outputShape canônico."
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

export default deleteInventoryBalanceUsecase;

export const pipeline = [
  {
    "id": "deleteInventoryBalance__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryBalance.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryBalance.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.d.ts"
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
