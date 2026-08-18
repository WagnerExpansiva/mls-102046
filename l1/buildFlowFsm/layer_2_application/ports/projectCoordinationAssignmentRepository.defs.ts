/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.defs.ts" enhancement="_blank"/>

export const projectCoordinationAssignmentRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ProjectCoordinationAssignmentRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectCoordinationAssignment",
    "interfaceName": "IProjectCoordinationAssignmentRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ProjectCoordinationAssignmentId"
        ],
        "returns": "ProjectCoordinationAssignment | null",
        "description": "Retrieve a project coordination assignment by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ProjectCoordinationAssignmentFilter"
        ],
        "returns": "ProjectCoordinationAssignment[]",
        "description": "List assignments matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ProjectCoordinationAssignment"
        ],
        "returns": "void",
        "description": "Persist a project coordination assignment aggregate."
      },
      {
        "name": "listByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "ProjectCoordinationAssignment[]",
        "description": "List coordination assignments for a project."
      }
    ]
  }
} as const;

export default projectCoordinationAssignmentRepositoryPort;

export const pipeline = [
  {
    "id": "projectCoordinationAssignmentRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.d.ts"
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
