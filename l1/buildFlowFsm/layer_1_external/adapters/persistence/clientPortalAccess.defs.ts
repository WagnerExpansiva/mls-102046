/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccess.defs.ts" enhancement="_blank"/>

export const clientPortalAccessTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ClientPortalAccess",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ClientPortalAccess",
    "tableName": "client_portal_access",
    "columns": [
      {
        "name": "client_portal_access_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for client portal access."
      },
      {
        "name": "client_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced client identifier."
      },
      {
        "name": "platform_user_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced platform user identifier."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current portal access status."
      }
    ],
    "primaryKey": [
      "client_portal_access_id"
    ],
    "indexes": [
      {
        "indexName": "pk_client_portal_access",
        "columns": [
          "client_portal_access_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_client_portal_access_client_id",
        "columns": [
          "client_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_client_portal_access_platform_user_id",
        "columns": [
          "platform_user_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_client_portal_access_status",
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
    "purpose": "Stores client portal access assignments.",
    "retentionDays": 0
  }
} as const;

export default clientPortalAccessTableDefinition;

export const pipeline = [
  {
    "id": "clientPortalAccess__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccess.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccess.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.d.ts"
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
