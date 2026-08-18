/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const updateProjectCoordinationAssignmentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateProjectCoordinationAssignment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateProjectCoordinationAssignment",
    "ports": [
      "ProjectCoordinationAssignment",
      "FieldCoordinator",
      "Project"
    ],
    "rulesApplied": [
      "activeProjectCoordination"
    ],
    "functions": [
      {
        "functionName": "updateProjectCoordinationAssignment",
        "inputTypeName": "UpdateProjectCoordinationAssignmentInput",
        "outputTypeName": "UpdateProjectCoordinationAssignmentOutput",
        "input": [
          {
            "name": "projectCoordinationAssignmentId",
            "type": "string",
            "required": true,
            "description": "Identificador estável da atribuição de coordenação selecionada.",
            "ofEntity": "ProjectCoordinationAssignment",
            "fieldRef": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Identificador da obra selecionada para a atribuição.",
            "ofEntity": "ProjectCoordinationAssignment",
            "fieldRef": "ProjectCoordinationAssignment.projectId",
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
            "description": "Identificador da atribuição atualizada.",
            "ofEntity": "ProjectCoordinationAssignment",
            "fieldRef": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Identificador da obra coordenada.",
            "ofEntity": "ProjectCoordinationAssignment",
            "fieldRef": "ProjectCoordinationAssignment.projectId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "fieldCoordinatorId",
            "type": "string",
            "required": true,
            "description": "Identificador do coordenador de campo responsável.",
            "ofEntity": "ProjectCoordinationAssignment",
            "fieldRef": "ProjectCoordinationAssignment.fieldCoordinatorId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Estado operacional da atribuição atualizada.",
            "ofEntity": "ProjectCoordinationAssignment",
            "fieldRef": "ProjectCoordinationAssignment.status",
            "item": {
              "fields": []
            }
          }
        ],
        "ports": [
          "ProjectCoordinationAssignment",
          "FieldCoordinator",
          "Project"
        ],
        "rulesApplied": [
          "activeProjectCoordination"
        ],
        "transactional": true,
        "steps": [
          "Resolve o coordenador de campo associado ao ator da sessão por meio do port FieldCoordinator.",
          "Carrega a atribuição pelo projectCoordinationAssignmentId usando o port ProjectCoordinationAssignment.",
          "Valida que a atribuição pertence ao projectId recebido e que a obra existe e está no estado active; em caso de bloqueio, retorna erro contendo a regra activeProjectCoordination.",
          "Atualiza a atribuição com o fieldCoordinatorId resolvido da sessão e o status padrão active.",
          "Salva a atribuição pelo port ProjectCoordinationAssignment dentro da transação.",
          "Retorna exatamente projectCoordinationAssignmentId, projectId, fieldCoordinatorId e status da atribuição atualizada."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateProjectCoordinationAssignmentUsecase;

export const pipeline = [
  {
    "id": "updateProjectCoordinationAssignment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectCoordinationAssignment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectCoordinationAssignment.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "activeProjectCoordination"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
