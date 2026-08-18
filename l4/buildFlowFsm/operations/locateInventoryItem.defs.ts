/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/locateInventoryItem.defs.ts" enhancement="_blank"/>

export const operationLocateInventoryItem = {
  "operationId": "locateInventoryItem",
  "title": "Selecionar o material consumido",
  "actors": [
    "fieldWorker"
  ],
  "entity": "InventoryItem",
  "kind": "query",
  "reads": [
    "InventoryItem"
  ],
  "writes": [],
  "rulesApplied": [
    "selectableInventoryItem"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "Selecionar o material consumido",
    "steps": [
      "Selecionar o material consumido",
      "Um item do catálogo compartilhado de materiais e estoque está selecionado."
    ],
    "outcome": "Um item do catálogo compartilhado de materiais e estoque está selecionado."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Selecionar o material consumido",
    "entity": "InventoryItem",
    "keyField": "InventoryItem.inventoryItemId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "InventoryItem.inventoryItemId",
      "InventoryItem.name",
      "InventoryItem.description",
      "InventoryItem.unitOfMeasure",
      "InventoryItem.referenceUnitCost",
      "InventoryItem.status"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "inventoryItemId",
        "type": "string",
        "required": true,
        "fieldRef": "InventoryItem.inventoryItemId"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "fieldRef": "InventoryItem.name"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "fieldRef": "InventoryItem.description"
      },
      {
        "name": "unitOfMeasure",
        "type": "string",
        "required": true,
        "fieldRef": "InventoryItem.unitOfMeasure"
      },
      {
        "name": "referenceUnitCost",
        "type": "number",
        "required": true,
        "fieldRef": "InventoryItem.referenceUnitCost"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "InventoryItem.status"
      }
    ]
  },
  "inputs": [],
  "pageId": "recordProjectMaterialUsage",
  "commandName": "qryLocateInventoryItem",
  "bffName": "qryLocateInventoryItem"
} as const;

export default operationLocateInventoryItem;
