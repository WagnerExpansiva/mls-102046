/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.defs.ts" enhancement="_blank"/>

export const projectRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ProjectRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Project",
    "interfaceName": "IProjectRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ProjectId"
        ],
        "returns": "Project | null",
        "description": "Retrieve a project by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ProjectFilter"
        ],
        "returns": "Project[]",
        "description": "List projects matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: Project"
        ],
        "returns": "void",
        "description": "Persist a project aggregate."
      },
      {
        "name": "listByClientId",
        "params": [
          "clientId: ClientId"
        ],
        "returns": "Project[]",
        "description": "List projects belonging to a client."
      }
    ]
  }
} as const;

export default projectRepositoryPort;

export const pipeline = [
  {
    "id": "projectRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
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
