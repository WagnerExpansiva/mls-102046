/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.defs.ts" enhancement="_blank"/>

export const changeOrderTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ChangeOrder",
    "tableName": "change_order",
    "columns": [
      {
        "name": "change_order_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the change order."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current change order status."
      }
    ],
    "primaryKey": [
      "change_order_id"
    ],
    "indexes": [
      {
        "indexName": "pk_change_order",
        "columns": [
          "change_order_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_change_order_status",
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
    "purpose": "Stores project change orders.",
    "retentionDays": 0
  }
} as const;

export default changeOrderTableDefinition;

export const pipeline = [
  {
    "id": "changeOrder__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts"
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
