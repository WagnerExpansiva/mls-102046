/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.defs.ts" enhancement="_blank"/>

export const locateProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "locateProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "locateProject",
    "ports": [
      "Project"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "locateProject",
        "inputTypeName": "LocateProjectInput",
        "outputTypeName": "LocateProjectOutput",
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
          "Query the Project port for all projects without pagination.",
          "Project each result into the canonical selection projection containing projectId, clientId, name, address, status, authorizedBudget, plannedStartDate, and plannedEndDate.",
          "Return the projected collection for single-project selection."
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

export default locateProjectUsecase;

export const pipeline = [
  {
    "id": "locateProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.defs.ts",
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
