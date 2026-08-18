/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const deleteProjectCoordinationAssignmentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteProjectCoordinationAssignment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteProjectCoordinationAssignment",
    "ports": [
      "ProjectCoordinationAssignment"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteProjectCoordinationAssignment",
        "inputTypeName": "DeleteProjectCoordinationAssignmentInput",
        "outputTypeName": "DeleteProjectCoordinationAssignmentOutput",
        "input": [
          {
            "name": "projectCoordinationAssignmentId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo.",
            "ofEntity": "ProjectCoordinationAssignment",
            "fieldRef": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "projectCoordinationAssignmentId",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectCoordinationAssignment"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectCoordinationAssignment"
          },
          {
            "name": "fieldCoordinatorId",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectCoordinationAssignment"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectCoordinationAssignment"
          }
        ],
        "ports": [
          "ProjectCoordinationAssignment"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Within the transaction, load the ProjectCoordinationAssignment by projectCoordinationAssignmentId through the ProjectCoordinationAssignment port.",
          "If no assignment exists, reject the operation as not found.",
          "Capture the declared output fields from the loaded assignment before deletion.",
          "Delete the assignment through the ProjectCoordinationAssignment port within the same transaction.",
          "Return the captured projectCoordinationAssignmentId, projectId, fieldCoordinatorId, and status."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "projectCoordinationAssignmentId",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectCoordinationAssignment.projectCoordinationAssignmentId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectCoordinationAssignment.projectId"
            },
            {
              "name": "fieldCoordinatorId",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectCoordinationAssignment.fieldCoordinatorId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectCoordinationAssignment.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default deleteProjectCoordinationAssignmentUsecase;

export const pipeline = [
  {
    "id": "deleteProjectCoordinationAssignment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProjectCoordinationAssignment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProjectCoordinationAssignment.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
