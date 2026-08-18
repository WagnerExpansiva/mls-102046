/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const projectCoordinationAssignmentTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ProjectCoordinationAssignment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ProjectCoordinationAssignment",
    "tableName": "project_coordination_assignment",
    "columns": [
      {
        "name": "project_coordination_assignment_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the coordination assignment."
      },
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced project identifier."
      },
      {
        "name": "field_coordinator_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced field coordinator identifier."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current coordination assignment status."
      }
    ],
    "primaryKey": [
      "project_coordination_assignment_id"
    ],
    "indexes": [
      {
        "indexName": "pk_project_coordination_assignment",
        "columns": [
          "project_coordination_assignment_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_project_coordination_assignment_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_project_coordination_assignment_field_coordinator_id",
        "columns": [
          "field_coordinator_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_project_coordination_assignment_status",
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
    "purpose": "Stores project coordination assignments.",
    "retentionDays": 0
  }
} as const;

export default projectCoordinationAssignmentTableDefinition;

export const pipeline = [
  {
    "id": "projectCoordinationAssignment__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignment.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.d.ts"
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
