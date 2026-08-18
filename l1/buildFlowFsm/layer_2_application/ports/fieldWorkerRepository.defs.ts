/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.defs.ts" enhancement="_blank"/>

export const fieldWorkerRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "FieldWorkerRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "FieldWorker",
    "interfaceName": "IFieldWorkerRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: FieldWorkerId"
        ],
        "returns": "FieldWorker | null",
        "description": "Retrieve a field worker by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: FieldWorkerFilter"
        ],
        "returns": "FieldWorker[]",
        "description": "List field workers matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: FieldWorker"
        ],
        "returns": "void",
        "description": "Persist a field worker aggregate."
      },
      {
        "name": "getByPlatformUserId",
        "params": [
          "platformUserId: PlatformUserId"
        ],
        "returns": "FieldWorker | null",
        "description": "Retrieve the field worker associated with a platform user."
      }
    ]
  }
} as const;

export default fieldWorkerRepositoryPort;

export const pipeline = [
  {
    "id": "fieldWorkerRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.d.ts"
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
