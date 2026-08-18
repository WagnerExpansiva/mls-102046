/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const clientRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ClientRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Client",
    "className": "ClientRepositoryAdapter",
    "portRef": "IClientRepository",
    "tableRef": "clients",
    "mdmReads": [],
    "notes": [
      "Maps client_id as a snake_case column; stores client_name, contact_email, and contact_phone in details JSONB."
    ]
  }
} as const;

export default clientRepositoryAdapter;

export const pipeline = [
  {
    "id": "clientRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/client.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts"
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
