/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteProject.defs.ts" enhancement="_blank"/>

export const operationDeleteProject = {
  "operationId": "deleteProject",
  "title": "Excluir Obra",
  "actors": [
    "billingStaff",
    "client",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "Project",
  "kind": "delete",
  "reads": [
    "Project"
  ],
  "writes": [
    "Project"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Obra",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Obra",
    "entity": "Project",
    "keyField": "Project.projectId",
    "pagination": "none",
    "selection": "none",
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
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável da obra, transportado entre etapas e registros relacionados."
    }
  ],
  "pageId": "projectCatalogue",
  "commandName": "cmdDeleteProject",
  "bffName": "cmdDeleteProject"
} as const;

export default operationDeleteProject;
