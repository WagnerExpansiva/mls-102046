/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listMaterialUsage.defs.ts" enhancement="_blank"/>

export const operationListMaterialUsage = {
  "operationId": "listMaterialUsage",
  "title": "Listar Consumo de material",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "MaterialUsage",
  "kind": "query",
  "reads": [
    "MaterialUsage"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Listar Consumo de material",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Consumo de material",
    "entity": "MaterialUsage",
    "keyField": "MaterialUsage.materialUsageId",
    "pagination": "none",
    "selection": "single",
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
  },
  "inputs": [],
  "pageId": "materialUsageCatalogue",
  "commandName": "qryListMaterialUsage",
  "bffName": "qryListMaterialUsage"
} as const;

export default operationListMaterialUsage;
