/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteInventoryBalance.defs.ts" enhancement="_blank"/>

export const operationDeleteInventoryBalance = {
  "operationId": "deleteInventoryBalance",
  "title": "Excluir Saldo de estoque",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "InventoryBalance",
  "kind": "delete",
  "reads": [
    "InventoryBalance"
  ],
  "writes": [
    "InventoryBalance"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Saldo de estoque",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Saldo de estoque",
    "entity": "InventoryBalance",
    "keyField": "InventoryBalance.inventoryBalanceId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "InventoryBalance.inventoryBalanceId",
      "InventoryBalance.inventoryItemId",
      "InventoryBalance.physicalQuantity",
      "InventoryBalance.applicableUnitCost",
      "InventoryBalance.status"
    ]
  },
  "outputShape": {
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "inventoryBalanceId",
      "fieldRef": "InventoryBalance.inventoryBalanceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas."
    }
  ],
  "pageId": "inventoryBalanceCatalogue",
  "commandName": "cmdDeleteInventoryBalance",
  "bffName": "cmdDeleteInventoryBalance"
} as const;

export default operationDeleteInventoryBalance;
