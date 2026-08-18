/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinatorRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const fieldCoordinatorRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "FieldCoordinatorRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "FieldCoordinator",
    "className": "FieldCoordinatorRepositoryAdapter",
    "portRef": "IFieldCoordinatorRepository",
    "tableRef": "field_coordinators",
    "mdmReads": [],
    "notes": [
      "Uses an adapter row with no real domain columns; stores platform_user_ref in details JSONB."
    ]
  }
} as const;

export default fieldCoordinatorRepositoryAdapter;

export const pipeline = [
  {
    "id": "fieldCoordinatorRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinatorRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinatorRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinator.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
