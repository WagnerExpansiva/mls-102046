/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listInventoryItem.defs.ts" enhancement="_blank"/>

export const operationListInventoryItem = {
  "operationId": "listInventoryItem",
  "title": "Listar Item de estoque",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "InventoryItem",
  "kind": "query",
  "reads": [
    "InventoryItem"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Item de estoque",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Item de estoque",
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
  "pageId": "inventoryBalanceCatalogue",
  "commandName": "qryInventoryItemPicker",
  "bffName": "qryInventoryItemPicker"
} as const;

export default operationListInventoryItem;
