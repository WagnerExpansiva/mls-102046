/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.defs.ts" enhancement="_blank"/>

export const materialUsageRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "MaterialUsageRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MaterialUsage",
    "interfaceName": "IMaterialUsageRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: MaterialUsageId"
        ],
        "returns": "MaterialUsage | null",
        "description": "Retrieve material usage by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: MaterialUsageFilter"
        ],
        "returns": "MaterialUsage[]",
        "description": "List material usage records matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: MaterialUsage"
        ],
        "returns": "void",
        "description": "Persist a material usage aggregate."
      },
      {
        "name": "listByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "MaterialUsage[]",
        "description": "List material usage records for a project."
      }
    ]
  }
} as const;

export default materialUsageRepositoryPort;

export const pipeline = [
  {
    "id": "materialUsageRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
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
