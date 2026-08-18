/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinator.defs.ts" enhancement="_blank"/>

export const fieldCoordinatorTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "FieldCoordinator",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "FieldCoordinator",
    "tableName": "field_coordinator",
    "columns": [],
    "primaryKey": [],
    "indexes": [],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    },
    "appendOnly": false,
    "purpose": "Stores field coordinator records.",
    "retentionDays": 0
  }
} as const;

export default fieldCoordinatorTableDefinition;

export const pipeline = [
  {
    "id": "fieldCoordinator__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinator.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinator.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.d.ts"
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
