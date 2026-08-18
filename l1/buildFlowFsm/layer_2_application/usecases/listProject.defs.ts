/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.defs.ts" enhancement="_blank"/>

export const listProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listProject",
    "ports": [
      "Project"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listProject",
        "inputTypeName": "ListProjectInput",
        "outputTypeName": "ListProjectOutput",
        "input": [],
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
        "transactional": false,
        "steps": [
          "Consultar o port Project para listar todas as obras.",
          "Projetar cada obra nos campos declarados pelo outputShape.",
          "Retornar a coleção projects sem alterar o agregado."
        ],
        "outputShape": {
          "kind": "list",
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

export default listProjectUsecase;

export const pipeline = [
  {
    "id": "listProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.defs.ts",
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
