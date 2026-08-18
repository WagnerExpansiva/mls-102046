/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/locateProject.defs.ts" enhancement="_blank"/>

export const operationLocateProject = {
  "operationId": "locateProject",
  "title": "Selecionar a obra que exige atenção",
  "actors": [
    "fieldCoordinator"
  ],
  "entity": "Project",
  "kind": "query",
  "reads": [
    "Project"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Selecionar a obra que exige atenção",
    "steps": [
      "Localizar a própria obra",
      "Uma obra associada ao cliente está selecionada."
    ],
    "outcome": "Uma obra associada ao cliente está selecionada."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Selecionar a obra que exige atenção",
    "entity": "Project",
    "keyField": "Project.projectId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Project.projectId",
      "Project.clientId",
      "Project.name",
      "Project.address",
      "Project.status",
      "Project.authorizedBudget",
      "Project.plannedStartDate",
      "Project.plannedEndDate"
    ]
  },
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
  },
  "inputs": [],
  "pageId": "assignWorkTask",
  "commandName": "qryLocateProject",
  "bffName": "qryLocateProject"
} as const;

export default operationLocateProject;
