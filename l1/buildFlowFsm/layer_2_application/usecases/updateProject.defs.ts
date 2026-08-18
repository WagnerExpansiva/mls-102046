/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.defs.ts" enhancement="_blank"/>

export const updateProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateProject",
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
        "functionName": "updateProject",
        "inputTypeName": "UpdateProjectInput",
        "outputTypeName": "UpdateProjectOutput",
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
          },
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
            "description": "Data planejada para conclusão da execução da obra.",
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
            "description": "Identificador estável da obra.",
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Cliente associado à obra.",
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
            "description": "Nome da obra.",
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
            "description": "Endereço do local da obra.",
            "ofEntity": "Project",
            "fieldRef": "Project.address",
            "item": {
              "fields": []
            }
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Situação operacional atual da obra.",
            "ofEntity": "Project",
            "fieldRef": "Project.status",
            "item": {
              "fields": []
            }
          },
          {
            "name": "authorizedBudget",
            "type": "number",
            "required": true,
            "description": "Orçamento autorizado da obra.",
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
            "description": "Data planejada de início.",
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
            "description": "Data planejada de conclusão.",
            "ofEntity": "Project",
            "fieldRef": "Project.plannedEndDate",
            "item": {
              "fields": []
            }
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
          "Load the Project aggregate by projectId through the Project port; reject not-found with projectId context.",
          "Load the Client by clientId through the Client port and reject if the referenced client does not exist.",
          "Apply activeProject inline: reject updates to a Project whose current status is completed or cancelled, including rule id activeProject in validation error details; preserve the current status because status is resolved by systemDefault and is not a public update input.",
          "Apply ongoingProject inline: require plannedStartDate to be no later than plannedEndDate and authorizedBudget to be non-negative; include rule id ongoingProject in validation error details when either check fails.",
          "Mutate the loaded Project aggregate with the validated clientId, name, address, authorizedBudget, plannedStartDate, and plannedEndDate, then save it through the Project port inside the transaction.",
          "Return the saved Project projection with exactly projectId, clientId, name, address, status, authorizedBudget, plannedStartDate, and plannedEndDate."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateProjectUsecase;

export const pipeline = [
  {
    "id": "updateProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.defs.ts",
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
