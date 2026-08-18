/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessment.defs.ts" enhancement="_blank"/>

export const scheduleRiskAssessmentTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ScheduleRiskAssessment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ScheduleRiskAssessment",
    "tableName": "schedule_risk_assessment",
    "columns": [
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced project identifier."
      },
      {
        "name": "work_task_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced work task identifier."
      }
    ],
    "primaryKey": [
      "project_id",
      "work_task_id"
    ],
    "indexes": [
      {
        "indexName": "pk_schedule_risk_assessment",
        "columns": [
          "project_id",
          "work_task_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_schedule_risk_assessment_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_schedule_risk_assessment_work_task_id",
        "columns": [
          "work_task_id"
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
    "purpose": "Stores schedule risk assessments.",
    "retentionDays": 0
  }
} as const;

export default scheduleRiskAssessmentTableDefinition;

export const pipeline = [
  {
    "id": "scheduleRiskAssessment__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessment.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.d.ts"
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
