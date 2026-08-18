/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalance.defs.ts" enhancement="_blank"/>

export const inventoryBalanceTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "InventoryBalance",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "InventoryBalance",
    "tableName": "inventory_balance",
    "columns": [
      {
        "name": "inventory_balance_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the inventory balance."
      },
      {
        "name": "inventory_item_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced inventory item identifier."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current inventory balance status."
      }
    ],
    "primaryKey": [
      "inventory_balance_id"
    ],
    "indexes": [
      {
        "indexName": "pk_inventory_balance",
        "columns": [
          "inventory_balance_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_inventory_balance_inventory_item_id",
        "columns": [
          "inventory_item_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_inventory_balance_status",
        "columns": [
          "status"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    },
    "appendOnly": false,
    "purpose": "Stores inventory balances.",
    "retentionDays": 0
  }
} as const;

export default inventoryBalanceTableDefinition;

export const pipeline = [
  {
    "id": "inventoryBalance__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalance.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalance.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
