/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteInventoryItem.defs.ts" enhancement="_blank"/>

export const operationDeleteInventoryItem = {
  "operationId": "deleteInventoryItem",
  "title": "Excluir Item de estoque",
  "actors": [
    "fieldWorker"
  ],
  "entity": "InventoryItem",
  "kind": "delete",
  "reads": [
    "InventoryItem"
  ],
  "writes": [
    "InventoryItem"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "fieldWorker",
    "goal": "Excluir Item de estoque",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Item de estoque",
    "entity": "InventoryItem",
    "keyField": "InventoryItem.inventoryItemId",
    "pagination": "none",
    "selection": "none",
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
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "inventoryItemId",
      "fieldRef": "InventoryItem.inventoryItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do item no catálogo mestre de materiais."
    }
  ],
  "pageId": "inventoryItemCatalogue",
  "commandName": "cmdDeleteInventoryItem",
  "bffName": "cmdDeleteInventoryItem"
} as const;

export default operationDeleteInventoryItem;
