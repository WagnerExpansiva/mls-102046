/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignmentRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const projectCoordinationAssignmentRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ProjectCoordinationAssignmentRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectCoordinationAssignment",
    "className": "ProjectCoordinationAssignmentRepositoryAdapter",
    "portRef": "IProjectCoordinationAssignmentRepository",
    "tableRef": "project_coordination_assignments",
    "mdmReads": [],
    "notes": [
      "Maps project_coordination_assignment_id, project_id, field_coordinator_id, and status as snake_case columns; no details fields."
    ]
  }
} as const;

export default projectCoordinationAssignmentRepositoryAdapter;

export const pipeline = [
  {
    "id": "projectCoordinationAssignmentRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignmentRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignmentRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignment.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
