/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteMaterialUsage.defs.ts" enhancement="_blank"/>

export const operationDeleteMaterialUsage = {
  "operationId": "deleteMaterialUsage",
  "title": "Excluir Consumo de material",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "MaterialUsage",
  "kind": "delete",
  "reads": [
    "MaterialUsage"
  ],
  "writes": [
    "MaterialUsage"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Excluir Consumo de material",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Consumo de material",
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
    }
  ],
  "pageId": "materialUsageCatalogue",
  "commandName": "cmdDeleteMaterialUsage",
  "bffName": "cmdDeleteMaterialUsage"
} as const;

export default operationDeleteMaterialUsage;
