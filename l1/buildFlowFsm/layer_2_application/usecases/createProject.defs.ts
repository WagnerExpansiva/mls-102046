/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProject.defs.ts" enhancement="_blank"/>

export const createProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createProject",
    "ports": [
      "Project",
      "Client"
    ],
    "rulesApplied": [
      "activeProject",
      "ongoingProject"
    ],
    "functions": [
      {
        "functionName": "createProject",
        "inputTypeName": "CreateProjectInput",
        "outputTypeName": "CreateProjectOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Referência ao cliente selecionado ao qual a obra pertence.",
            "ofEntity": "Project",
            "fieldRef": "Project.clientId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente.",
            "ofEntity": "Project",
            "fieldRef": "Project.name",
            "item": {
              "fields": []
            }
          },
          {
            "name": "address",
            "type": "string",
            "required": true,
            "description": "Endereço do local de execução da obra.",
            "ofEntity": "Project",
            "fieldRef": "Project.address",
            "item": {
              "fields": []
            }
          },
          {
            "name": "authorizedBudget",
            "type": "number",
            "required": true,
            "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra.",
            "ofEntity": "Project",
            "fieldRef": "Project.authorizedBudget",
            "item": {
              "fields": []
            }
          },
          {
            "name": "plannedStartDate",
            "type": "string",
            "required": true,
            "description": "Data planejada para início da execução da obra.",
            "ofEntity": "Project",
            "fieldRef": "Project.plannedStartDate",
            "item": {
              "fields": []
            }
          },
          {
            "name": "plannedEndDate",
            "type": "string",
            "required": true,
            "description": "Data planejada para conclusão da obra.",
            "ofEntity": "Project",
            "fieldRef": "Project.plannedEndDate",
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
          "Project",
          "Client"
        ],
        "rulesApplied": [
          "activeProject",
          "ongoingProject"
        ],
        "transactional": true,
        "steps": [
          "Validate that the referenced Client exists through the Client port.",
          "Apply the activeProject rule inline: reject creation when it would violate the aggregate's active-project constraint, including the rule id in validation error details.",
          "Apply the ongoingProject rule inline: require a valid planned interval with plannedStartDate not later than plannedEndDate, including the rule id in validation error details when rejected.",
          "Generate projectId with ctx.idGenerator.",
          "Set the systemDefault status to planned.",
          "Create the Project through the Project port and return the canonical Project fields."
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

export default createProjectUsecase;

export const pipeline = [
  {
    "id": "createProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProject.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProject.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "activeProject",
      "ongoingProject"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
