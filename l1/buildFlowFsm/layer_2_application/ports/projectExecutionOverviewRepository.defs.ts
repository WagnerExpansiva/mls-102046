/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.defs.ts" enhancement="_blank"/>

export const projectExecutionOverviewRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ProjectExecutionOverviewRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectExecutionOverview",
    "interfaceName": "IProjectExecutionOverviewRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ProjectExecutionOverviewId"
        ],
        "returns": "ProjectExecutionOverview | null",
        "description": "Retrieve a project execution overview by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ProjectExecutionOverviewFilter"
        ],
        "returns": "ProjectExecutionOverview[]",
        "description": "List project execution overviews matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ProjectExecutionOverview"
        ],
        "returns": "void",
        "description": "Persist a project execution overview aggregate."
      },
      {
        "name": "getByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "ProjectExecutionOverview | null",
        "description": "Retrieve the execution overview for a project."
      }
    ]
  }
} as const;

export default projectExecutionOverviewRepositoryPort;

export const pipeline = [
  {
    "id": "projectExecutionOverviewRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.d.ts"
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
