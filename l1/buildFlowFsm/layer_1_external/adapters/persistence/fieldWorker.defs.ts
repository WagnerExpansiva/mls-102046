/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldWorker.defs.ts" enhancement="_blank"/>

export const fieldWorkerTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "FieldWorker",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "FieldWorker",
    "tableName": "field_worker",
    "columns": [
      {
        "name": "platform_user_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary and referenced platform user identifier for the field worker."
      }
    ],
    "primaryKey": [
      "platform_user_id"
    ],
    "indexes": [
      {
        "indexName": "pk_field_worker",
        "columns": [
          "platform_user_id"
        ],
        "unique": true
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    },
    "appendOnly": false,
    "purpose": "Stores field worker records.",
    "retentionDays": 0
  }
} as const;

export default fieldWorkerTableDefinition;

export const pipeline = [
  {
    "id": "fieldWorker__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldWorker.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldWorker.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.d.ts"
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
