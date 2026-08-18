/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listInventoryBalance.defs.ts" enhancement="_blank"/>

export const operationListInventoryBalance = {
  "operationId": "listInventoryBalance",
  "title": "Listar Saldo de estoque",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "InventoryBalance",
  "kind": "query",
  "reads": [
    "InventoryBalance"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Saldo de estoque",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Saldo de estoque",
    "entity": "InventoryBalance",
    "keyField": "InventoryBalance.inventoryBalanceId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "InventoryBalance.inventoryBalanceId",
      "InventoryBalance.inventoryItemId",
      "InventoryBalance.physicalQuantity",
      "InventoryBalance.applicableUnitCost",
      "InventoryBalance.status"
    ]
  },
  "outputShape": {
    "kind": "list",
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
  },
  "inputs": [],
  "pageId": "inventoryBalanceCatalogue",
  "commandName": "qryListInventoryBalance",
  "bffName": "qryListInventoryBalance"
} as const;

export default operationListInventoryBalance;
