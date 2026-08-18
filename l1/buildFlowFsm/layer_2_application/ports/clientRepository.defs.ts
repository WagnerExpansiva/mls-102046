/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.defs.ts" enhancement="_blank"/>

export const clientRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ClientRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Client",
    "interfaceName": "IClientRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ClientId"
        ],
        "returns": "Client | null",
        "description": "Retrieve a client by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ClientFilter"
        ],
        "returns": "Client[]",
        "description": "List clients matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: Client"
        ],
        "returns": "void",
        "description": "Persist a client aggregate."
      },
      {
        "name": "findByName",
        "params": [
          "name: ClientName"
        ],
        "returns": "Client | null",
        "description": "Find a client by its domain name."
      }
    ]
  }
} as const;

export default clientRepositoryPort;

export const pipeline = [
  {
    "id": "clientRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts"
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
