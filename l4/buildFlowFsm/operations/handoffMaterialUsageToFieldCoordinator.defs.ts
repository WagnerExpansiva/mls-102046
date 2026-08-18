/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/handoffMaterialUsageToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const operationHandoffMaterialUsageToFieldCoordinator = {
  "operationId": "handoffMaterialUsageToFieldCoordinator",
  "title": "Informar o consumo ao coordenador",
  "actors": [
    "fieldWorker"
  ],
  "entity": "MaterialUsage",
  "kind": "commandInput",
  "reads": [
    "MaterialUsage"
  ],
  "writes": [
    "MaterialUsage"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "fieldWorker",
    "goal": "Informar o consumo ao coordenador",
    "steps": [
      "Informar o consumo ao coordenador",
      "O coordenador recebe o consumo para acompanhamento."
    ],
    "outcome": "O coordenador recebe o consumo para acompanhamento."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Informar o consumo ao coordenador",
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
      "inputId": "materialUsageMaterialUsageId",
      "fieldRef": "MaterialUsage.materialUsageId",
      "required": true,
      "source": "selectedEntity",
      "description": "Consumo de material"
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
  "pageId": "recordProjectMaterialUsage",
  "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
  "bffName": "cmdHandoffMaterialUsageToFieldCoordinator"
} as const;

export default operationHandoffMaterialUsageToFieldCoordinator;
