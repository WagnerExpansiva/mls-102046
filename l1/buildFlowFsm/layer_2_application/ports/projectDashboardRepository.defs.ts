/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.defs.ts" enhancement="_blank"/>

export const projectDashboardRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ProjectDashboardRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectDashboard",
    "interfaceName": "IProjectDashboardRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ProjectDashboardId"
        ],
        "returns": "ProjectDashboard | null",
        "description": "Retrieve a project dashboard by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ProjectDashboardFilter"
        ],
        "returns": "ProjectDashboard[]",
        "description": "List project dashboards matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ProjectDashboard"
        ],
        "returns": "void",
        "description": "Persist a project dashboard aggregate."
      },
      {
        "name": "getByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "ProjectDashboard | null",
        "description": "Retrieve the dashboard for a project."
      }
    ]
  }
} as const;

export default projectDashboardRepositoryPort;

export const pipeline = [
  {
    "id": "projectDashboardRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.d.ts"
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
