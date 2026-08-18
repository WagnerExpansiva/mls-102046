/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTask.defs.ts" enhancement="_blank"/>

export const workTaskTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "WorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "WorkTask",
    "tableName": "work_task",
    "columns": [
      {
        "name": "work_task_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the work task."
      },
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced project identifier."
      },
      {
        "name": "assigned_field_worker_id",
        "type": "uuid",
        "nullable": true,
        "description": "Referenced assigned field worker identifier."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current work task status."
      }
    ],
    "primaryKey": [
      "work_task_id"
    ],
    "indexes": [
      {
        "indexName": "pk_work_task",
        "columns": [
          "work_task_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_work_task_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_work_task_assigned_field_worker_id",
        "columns": [
          "assigned_field_worker_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_work_task_status",
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
    "purpose": "Stores project work tasks.",
    "retentionDays": 0
  }
} as const;

export default workTaskTableDefinition;

export const pipeline = [
  {
    "id": "workTask__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTask.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTask.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
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
