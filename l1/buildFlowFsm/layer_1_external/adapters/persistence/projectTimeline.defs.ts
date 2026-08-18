/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimeline.defs.ts" enhancement="_blank"/>

export const projectTimelineTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ProjectTimeline",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ProjectTimeline",
    "tableName": "project_timeline",
    "columns": [
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary and referenced project identifier."
      }
    ],
    "primaryKey": [
      "project_id"
    ],
    "indexes": [
      {
        "indexName": "pk_project_timeline",
        "columns": [
          "project_id"
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
    "purpose": "Stores project timelines.",
    "retentionDays": 0
  }
} as const;

export default projectTimelineTableDefinition;

export const pipeline = [
  {
    "id": "projectTimeline__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimeline.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimeline.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.d.ts"
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
