/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.defs.ts" enhancement="_blank"/>

export const fieldCoordinatorRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "FieldCoordinatorRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "FieldCoordinator",
    "interfaceName": "IFieldCoordinatorRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: FieldCoordinatorId"
        ],
        "returns": "FieldCoordinator | null",
        "description": "Retrieve a field coordinator by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: FieldCoordinatorFilter"
        ],
        "returns": "FieldCoordinator[]",
        "description": "List field coordinators matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: FieldCoordinator"
        ],
        "returns": "void",
        "description": "Persist a field coordinator aggregate."
      },
      {
        "name": "getByPlatformUserId",
        "params": [
          "platformUserId: PlatformUserId"
        ],
        "returns": "FieldCoordinator | null",
        "description": "Retrieve the field coordinator associated with a platform user."
      }
    ]
  }
} as const;

export default fieldCoordinatorRepositoryPort;

export const pipeline = [
  {
    "id": "fieldCoordinatorRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.d.ts"
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
