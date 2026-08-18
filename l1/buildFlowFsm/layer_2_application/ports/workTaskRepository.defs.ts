/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.defs.ts" enhancement="_blank"/>

export const workTaskRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "WorkTaskRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "WorkTask",
    "interfaceName": "IWorkTaskRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: WorkTaskId"
        ],
        "returns": "WorkTask | null",
        "description": "Retrieve a work task by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: WorkTaskFilter"
        ],
        "returns": "WorkTask[]",
        "description": "List work tasks matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: WorkTask"
        ],
        "returns": "void",
        "description": "Persist a work task aggregate."
      },
      {
        "name": "listByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "WorkTask[]",
        "description": "List work tasks for a project."
      }
    ]
  }
} as const;

export default workTaskRepositoryPort;

export const pipeline = [
  {
    "id": "workTaskRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
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
