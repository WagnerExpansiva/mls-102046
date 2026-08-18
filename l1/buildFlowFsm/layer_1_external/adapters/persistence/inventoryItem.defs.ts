/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItem.defs.ts" enhancement="_blank"/>

export const inventoryItemTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "InventoryItem",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "InventoryItem",
    "tableName": "inventory_item",
    "columns": [
      {
        "name": "inventory_item_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the inventory item."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current inventory item status."
      }
    ],
    "primaryKey": [
      "inventory_item_id"
    ],
    "indexes": [
      {
        "indexName": "pk_inventory_item",
        "columns": [
          "inventory_item_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_inventory_item_status",
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
    "purpose": "Stores inventory items.",
    "retentionDays": 0
  }
} as const;

export default inventoryItemTableDefinition;

export const pipeline = [
  {
    "id": "inventoryItem__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItem.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItem.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.d.ts"
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
