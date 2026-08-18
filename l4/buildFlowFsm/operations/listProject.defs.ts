/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listProject.defs.ts" enhancement="_blank"/>

export const operationListProject = {
  "operationId": "listProject",
  "title": "Listar Obra",
  "actors": [
    "client",
    "fieldCoordinator",
    "projectManager"
  ],
  "entity": "Project",
  "kind": "query",
  "reads": [
    "Project"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "client",
    "goal": "Listar Obra",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Obra",
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
  "pageId": "changeOrderCatalogue",
  "commandName": "qryProjectPicker",
  "bffName": "qryProjectPicker"
} as const;

export default operationListProject;
