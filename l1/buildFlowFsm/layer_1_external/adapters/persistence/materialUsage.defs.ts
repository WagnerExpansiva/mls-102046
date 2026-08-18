/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.defs.ts" enhancement="_blank"/>

export const materialUsageTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "MaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "MaterialUsage",
    "tableName": "material_usage",
    "columns": [
      {
        "name": "material_usage_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for material usage."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current material usage status."
      },
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced project identifier."
      },
      {
        "name": "inventory_item_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced inventory item identifier."
      },
      {
        "name": "inventory_balance_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced inventory balance identifier."
      }
    ],
    "primaryKey": [
      "material_usage_id"
    ],
    "indexes": [
      {
        "indexName": "pk_material_usage",
        "columns": [
          "material_usage_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_material_usage_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_material_usage_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_material_usage_inventory_item_id",
        "columns": [
          "inventory_item_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_material_usage_inventory_balance_id",
        "columns": [
          "inventory_balance_id"
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
    "purpose": "Stores material consumption records.",
    "retentionDays": 0
  }
} as const;

export default materialUsageTableDefinition;

export const pipeline = [
  {
    "id": "materialUsage__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
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
