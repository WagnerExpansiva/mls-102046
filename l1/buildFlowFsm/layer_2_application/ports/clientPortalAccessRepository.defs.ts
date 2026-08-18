/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.defs.ts" enhancement="_blank"/>

export const clientPortalAccessRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ClientPortalAccessRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ClientPortalAccess",
    "interfaceName": "IClientPortalAccessRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ClientPortalAccessId"
        ],
        "returns": "ClientPortalAccess | null",
        "description": "Retrieve client portal access by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ClientPortalAccessFilter"
        ],
        "returns": "ClientPortalAccess[]",
        "description": "List client portal access records matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ClientPortalAccess"
        ],
        "returns": "void",
        "description": "Persist a client portal access aggregate."
      },
      {
        "name": "getByClientId",
        "params": [
          "clientId: ClientId"
        ],
        "returns": "ClientPortalAccess | null",
        "description": "Retrieve portal access for a client."
      }
    ]
  }
} as const;

export default clientPortalAccessRepositoryPort;

export const pipeline = [
  {
    "id": "clientPortalAccessRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
