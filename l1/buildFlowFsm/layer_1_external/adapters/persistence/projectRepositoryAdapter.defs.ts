/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const projectRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ProjectRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Project",
    "className": "ProjectRepositoryAdapter",
    "portRef": "IProjectRepository",
    "tableRef": "projects",
    "mdmReads": [],
    "notes": [
      "Maps project_id, client_id, and status as snake_case columns; stores name, address, authorized_budget, planned_start_date, and planned_end_date in details JSONB."
    ]
  }
} as const;

export default projectRepositoryAdapter;

export const pipeline = [
  {
    "id": "projectRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/project.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
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
