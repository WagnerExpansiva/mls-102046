/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffProjectToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const handoffProjectToFieldCoordinatorUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffProjectToFieldCoordinator",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffProjectToFieldCoordinator",
    "ports": [
      "Project",
      "ProjectCoordinationAssignment"
    ],
    "rulesApplied": [
      "activeProjectCoordination",
      "ongoingProject"
    ],
    "functions": [
      {
        "functionName": "handoffProjectToFieldCoordinator",
        "inputTypeName": "HandoffProjectToFieldCoordinatorInput",
        "outputTypeName": "HandoffProjectToFieldCoordinatorOutput",
        "input": [
          {
            "name": "projectProjectId",
            "type": "string",
            "required": true,
            "description": "Obra",
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
          "ProjectCoordinationAssignment"
        ],
        "rulesApplied": [
          "activeProjectCoordination",
          "ongoingProject"
        ],
        "transactional": true,
        "steps": [
          "Load the Project aggregate through the Project port using the route projectProjectId.",
          "Validate ongoingProject against the loaded Project; if it is not eligible for handoff, reject with the ongoingProject rule identifier in the validation error details.",
          "Load ProjectCoordinationAssignment records through its port for the project and validate activeProjectCoordination, requiring an active coordination assignment; if absent or invalid, reject with the activeProjectCoordination rule identifier in the validation error details.",
          "Apply the user-provided Project fields and transition Project.status to active.",
          "Save the Project aggregate through the Project port in the transaction.",
          "Return the updated Project using the canonical output fields."
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

export default handoffProjectToFieldCoordinatorUsecase;

export const pipeline = [
  {
    "id": "handoffProjectToFieldCoordinator__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffProjectToFieldCoordinator.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffProjectToFieldCoordinator.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "activeProjectCoordination",
      "ongoingProject"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
