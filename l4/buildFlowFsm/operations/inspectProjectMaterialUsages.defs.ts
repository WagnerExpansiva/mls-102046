/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectProjectMaterialUsages.defs.ts" enhancement="_blank"/>

export const operationInspectProjectMaterialUsages = {
  "operationId": "inspectProjectMaterialUsages",
  "title": "Consultar os consumos de materiais",
  "actors": [
    "fieldCoordinator"
  ],
  "entity": "MaterialUsage",
  "kind": "query",
  "reads": [
    "MaterialUsage",
    "Project"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Consultar os consumos de materiais",
    "steps": [
      "Consultar os consumos de materiais",
      "Consumos associados à obra estão visíveis."
    ],
    "outcome": "Consumos associados à obra estão visíveis."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar os consumos de materiais",
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
    }
  ],
  "pageId": "monitorDailyProjectRecords",
  "commandName": "qryInspectProjectMaterialUsages",
  "bffName": "qryInspectProjectMaterialUsages"
} as const;

export default operationInspectProjectMaterialUsages;
