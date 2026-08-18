/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createMaterialUsage.defs.ts" enhancement="_blank"/>

export const operationCreateMaterialUsage = {
  "operationId": "createMaterialUsage",
  "title": "Registrar o consumo de material",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "MaterialUsage",
  "kind": "commandInput",
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
    "materialUsageRequiresActiveProjectAndAvailableInventory"
  ],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Registrar o consumo de material",
    "steps": [
      "Registrar o consumo de material",
      "O consumo fica vinculado à obra e disponível para o custo realizado."
    ],
    "outcome": "O consumo fica vinculado à obra e disponível para o custo realizado."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Registrar o consumo de material",
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
      "inputId": "inventoryBalanceInventoryBalanceId",
      "fieldRef": "InventoryBalance.inventoryBalanceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Saldo de estoque"
    },
    {
      "inputId": "inventoryItemInventoryItemId",
      "fieldRef": "InventoryItem.inventoryItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Item de estoque"
    },
    {
      "inputId": "projectProjectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Obra"
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
  "commandName": "cmdCreateMaterialUsage",
  "bffName": "cmdCreateMaterialUsage"
} as const;

export default operationCreateMaterialUsage;
