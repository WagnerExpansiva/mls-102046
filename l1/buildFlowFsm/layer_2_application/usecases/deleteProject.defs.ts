/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProject.defs.ts" enhancement="_blank"/>

export const deleteProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteProject",
    "ports": [
      "Project"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteProject",
        "inputTypeName": "DeleteProjectInput",
        "outputTypeName": "DeleteProjectOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Identificador estável da obra, transportado entre etapas e registros relacionados.",
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "address",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "authorizedBudget",
            "type": "number",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "plannedStartDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "plannedEndDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          }
        ],
        "ports": [
          "Project"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Carregar o Project pelo port Project usando projectId.",
          "Validar que o Project existe; se não existir, rejeitar a exclusão.",
          "Preservar a representação do Project conforme o outputShape.",
          "Excluir o Project pelo port Project dentro da transação.",
          "Retornar os campos do Project excluído conforme o outputShape."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "Project.projectId"
            },
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "Project.clientId"
            },
            {
              "name": "name",
              "type": "string",
              "required": true,
              "fieldRef": "Project.name"
            },
            {
              "name": "address",
              "type": "string",
              "required": true,
              "fieldRef": "Project.address"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Project.status"
            },
            {
              "name": "authorizedBudget",
              "type": "number",
              "required": true,
              "fieldRef": "Project.authorizedBudget"
            },
            {
              "name": "plannedStartDate",
              "type": "string",
              "required": true,
              "fieldRef": "Project.plannedStartDate"
            },
            {
              "name": "plannedEndDate",
              "type": "string",
              "required": true,
              "fieldRef": "Project.plannedEndDate"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default deleteProjectUsecase;

export const pipeline = [
  {
    "id": "deleteProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProject.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProject.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
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
