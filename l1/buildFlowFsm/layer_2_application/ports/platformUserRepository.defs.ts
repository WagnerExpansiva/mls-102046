/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.defs.ts" enhancement="_blank"/>

export const platformUserRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "PlatformUserRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "PlatformUser",
    "interfaceName": "IPlatformUserRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: PlatformUserId"
        ],
        "returns": "PlatformUser | null",
        "description": "Retrieve a platform user by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: PlatformUserFilter"
        ],
        "returns": "PlatformUser[]",
        "description": "List platform users matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: PlatformUser"
        ],
        "returns": "void",
        "description": "Persist a platform user aggregate."
      },
      {
        "name": "findByEmail",
        "params": [
          "email: EmailAddress"
        ],
        "returns": "PlatformUser | null",
        "description": "Find a platform user by email address."
      }
    ]
  }
} as const;

export default platformUserRepositoryPort;

export const pipeline = [
  {
    "id": "platformUserRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.d.ts"
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
