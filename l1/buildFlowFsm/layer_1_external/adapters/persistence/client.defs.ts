/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/client.defs.ts" enhancement="_blank"/>

export const clientTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Client",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Client",
    "tableName": "client",
    "columns": [
      {
        "name": "client_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the client."
      }
    ],
    "primaryKey": [
      "client_id"
    ],
    "indexes": [
      {
        "indexName": "pk_client",
        "columns": [
          "client_id"
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
    "purpose": "Stores client records.",
    "retentionDays": 0
  }
} as const;

export default clientTableDefinition;

export const pipeline = [
  {
    "id": "client__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/client.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/client.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts"
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
