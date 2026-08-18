/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const listProjectCoordinationAssignmentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listProjectCoordinationAssignment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listProjectCoordinationAssignment",
    "ports": [
      "ProjectCoordinationAssignment"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listProjectCoordinationAssignment",
        "inputTypeName": "ListProjectCoordinationAssignmentInput",
        "outputTypeName": "ListProjectCoordinationAssignmentOutput",
        "input": [],
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
        "transactional": false,
        "steps": [
          "Consultar o port ProjectCoordinationAssignment para listar as atribuições de coordenação da obra.",
          "Projetar cada registro nos campos projectCoordinationAssignmentId, projectId, fieldCoordinatorId e status.",
          "Retornar a coleção projetada."
        ],
        "outputShape": {
          "kind": "list",
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

export default listProjectCoordinationAssignmentUsecase;

export const pipeline = [
  {
    "id": "listProjectCoordinationAssignment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.defs.ts",
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
