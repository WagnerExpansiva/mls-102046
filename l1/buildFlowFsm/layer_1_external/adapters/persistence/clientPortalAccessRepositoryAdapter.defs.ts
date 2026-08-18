/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccessRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const clientPortalAccessRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ClientPortalAccessRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ClientPortalAccess",
    "className": "ClientPortalAccessRepositoryAdapter",
    "portRef": "IClientPortalAccessRepository",
    "tableRef": "client_portal_accesses",
    "mdmReads": [],
    "notes": [
      "Maps client_portal_access_id, client_id, platform_user_id, and status as snake_case columns; no details fields."
    ]
  }
} as const;

export default clientPortalAccessRepositoryAdapter;

export const pipeline = [
  {
    "id": "clientPortalAccessRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccessRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccessRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccess.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.d.ts"
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
