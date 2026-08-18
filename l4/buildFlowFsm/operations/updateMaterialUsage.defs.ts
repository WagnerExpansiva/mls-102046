/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateMaterialUsage.defs.ts" enhancement="_blank"/>

export const operationUpdateMaterialUsage = {
  "operationId": "updateMaterialUsage",
  "title": "Atualizar Consumo de material",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "MaterialUsage",
  "kind": "update",
  "reads": [
    "InventoryBalance",
    "InventoryItem",
    "MaterialUsage",
    "Project"
  ],
  "writes": [
    "MaterialUsage"
  ],
  "rulesApplied": [
    "materialUsageRequiresActiveProjectAndAvailableInventory",
    "costEligibleMaterialUsage"
  ],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Atualizar Consumo de material",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Consumo de material",
    "entity": "MaterialUsage",
    "keyField": "MaterialUsage.materialUsageId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "MaterialUsage.materialUsageId",
      "MaterialUsage.status",
      "MaterialUsage.projectId",
      "MaterialUsage.inventoryItemId",
      "MaterialUsage.inventoryBalanceId",
      "MaterialUsage.quantity",
      "MaterialUsage.usageDescription",
      "MaterialUsage.consumedOn",
      "MaterialUsage.unitCostBasis"
    ]
  },
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
  },
  "inputs": [
    {
      "inputId": "materialUsageId",
      "fieldRef": "MaterialUsage.materialUsageId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas."
    },
    {
      "inputId": "status",
      "fieldRef": "MaterialUsage.status",
      "required": true,
      "source": "systemDefault",
      "description": "Situação do apontamento de consumo para determinar sua elegibilidade no custo realizado e na execução consolidada."
    },
    {
      "inputId": "projectId",
      "fieldRef": "MaterialUsage.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto à obra contra a qual o material foi efetivamente consumido."
    },
    {
      "inputId": "inventoryItemId",
      "fieldRef": "MaterialUsage.inventoryItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto ao item de material efetivamente utilizado."
    },
    {
      "inputId": "inventoryBalanceId",
      "fieldRef": "MaterialUsage.inventoryBalanceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência ao saldo operacional que suportou o consumo, para manter a rastreabilidade de disponibilidade e custo."
    },
    {
      "inputId": "quantity",
      "fieldRef": "MaterialUsage.quantity",
      "required": true,
      "source": "userInput",
      "description": "Quantidade do item efetivamente consumida na obra."
    },
    {
      "inputId": "usageDescription",
      "fieldRef": "MaterialUsage.usageDescription",
      "required": true,
      "source": "userInput",
      "description": "Descrição informada do consumo de material realizado em campo."
    },
    {
      "inputId": "consumedOn",
      "fieldRef": "MaterialUsage.consumedOn",
      "required": true,
      "source": "userInput",
      "description": "Data em que o material foi efetivamente consumido na obra."
    },
    {
      "inputId": "unitCostBasis",
      "fieldRef": "MaterialUsage.unitCostBasis",
      "required": true,
      "source": "userInput",
      "description": "Custo unitário preservado como base para o custeio realizado do consumo."
    }
  ],
  "pageId": "materialUsageCatalogue",
  "commandName": "cmdUpdateMaterialUsage",
  "bffName": "cmdUpdateMaterialUsage"
} as const;

export default operationUpdateMaterialUsage;
