/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const createProjectCoordinationAssignmentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createProjectCoordinationAssignment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createProjectCoordinationAssignment",
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
        "functionName": "createProjectCoordinationAssignment",
        "inputTypeName": "CreateProjectCoordinationAssignmentInput",
        "outputTypeName": "CreateProjectCoordinationAssignmentOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo.",
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
          "ProjectCoordinationAssignment",
          "FieldCoordinator",
          "Project"
        ],
        "rulesApplied": [
          "activeProjectCoordination"
        ],
        "transactional": true,
        "steps": [
          "Resolve o coordenador de campo responsável a partir do actorSession usando o port FieldCoordinator; o cliente não fornece fieldCoordinatorId.",
          "Carrega a obra pelo port Project e valida que ela existe e está no contexto da operação.",
          "Aplica inline a regra activeProjectCoordination: a obra deve estar ativa e não pode haver outra atribuição ativa para a mesma obra; em caso de bloqueio, retorna erro de validação com o identificador da regra.",
          "Gera projectCoordinationAssignmentId com ctx.idGenerator e define status como active via ctx.clock/system default.",
          "Cria a atribuição pelo port ProjectCoordinationAssignment dentro da transação e retorna exatamente os quatro campos declarados na saída."
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

export default createProjectCoordinationAssignmentUsecase;

export const pipeline = [
  {
    "id": "createProjectCoordinationAssignment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProjectCoordinationAssignment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProjectCoordinationAssignment.defs.ts",
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
