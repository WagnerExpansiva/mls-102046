/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.defs.ts" enhancement="_blank"/>

export const projectTimelineRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ProjectTimelineRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectTimeline",
    "interfaceName": "IProjectTimelineRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ProjectTimelineId"
        ],
        "returns": "ProjectTimeline | null",
        "description": "Retrieve a project timeline by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ProjectTimelineFilter"
        ],
        "returns": "ProjectTimeline[]",
        "description": "List project timelines matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ProjectTimeline"
        ],
        "returns": "void",
        "description": "Persist a project timeline aggregate."
      },
      {
        "name": "getByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "ProjectTimeline | null",
        "description": "Retrieve the timeline for a project."
      }
    ]
  }
} as const;

export default projectTimelineRepositoryPort;

export const pipeline = [
  {
    "id": "projectTimelineRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.d.ts"
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
