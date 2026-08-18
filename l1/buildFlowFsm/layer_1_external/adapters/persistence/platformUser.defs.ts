/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUser.defs.ts" enhancement="_blank"/>

export const platformUserTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "PlatformUser",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "PlatformUser",
    "tableName": "platform_user",
    "columns": [
      {
        "name": "platform_user_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the platform user."
      }
    ],
    "primaryKey": [
      "platform_user_id"
    ],
    "indexes": [
      {
        "indexName": "pk_platform_user",
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
    "purpose": "Stores platform user records.",
    "retentionDays": 0
  }
} as const;

export default platformUserTableDefinition;

export const pipeline = [
  {
    "id": "platformUser__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUser.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUser.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.d.ts"
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
