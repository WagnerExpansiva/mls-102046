/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.defs.ts" enhancement="_blank"/>

export const statusReportTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "StatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "StatusReport",
    "tableName": "status_report",
    "columns": [
      {
        "name": "status_report_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the status report."
      },
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced project identifier."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current status report status."
      },
      {
        "name": "generated_by_user_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced generating user identifier."
      },
      {
        "name": "published_by_user_id",
        "type": "uuid",
        "nullable": true,
        "description": "Referenced publishing user identifier."
      }
    ],
    "primaryKey": [
      "status_report_id"
    ],
    "indexes": [
      {
        "indexName": "pk_status_report",
        "columns": [
          "status_report_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_status_report_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_status_report_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_status_report_generated_by_user_id",
        "columns": [
          "generated_by_user_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_status_report_published_by_user_id",
        "columns": [
          "published_by_user_id"
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
    "purpose": "Stores project status reports.",
    "retentionDays": 0
  }
} as const;

export default statusReportTableDefinition;

export const pipeline = [
  {
    "id": "statusReport__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
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
