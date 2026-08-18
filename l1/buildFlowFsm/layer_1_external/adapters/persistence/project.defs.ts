/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/project.defs.ts" enhancement="_blank"/>

export const projectTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Project",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Project",
    "tableName": "project",
    "columns": [
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the project."
      },
      {
        "name": "client_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced client identifier."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current project status."
      }
    ],
    "primaryKey": [
      "project_id"
    ],
    "indexes": [
      {
        "indexName": "pk_project",
        "columns": [
          "project_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_project_client_id",
        "columns": [
          "client_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_project_status",
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
    "purpose": "Stores projects.",
    "retentionDays": 0
  }
} as const;

export default projectTableDefinition;

export const pipeline = [
  {
    "id": "project__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/project.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/project.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
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
