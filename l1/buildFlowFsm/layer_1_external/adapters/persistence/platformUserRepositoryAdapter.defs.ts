/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUserRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const platformUserRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "PlatformUserRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "PlatformUser",
    "className": "PlatformUserRepositoryAdapter",
    "portRef": "IPlatformUserRepository",
    "tableRef": "platform_users",
    "mdmReads": [],
    "notes": [
      "Maps platform_user_id as a snake_case column; no details fields."
    ]
  }
} as const;

export default platformUserRepositoryAdapter;

export const pipeline = [
  {
    "id": "platformUserRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUserRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUserRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUser.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.d.ts"
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
