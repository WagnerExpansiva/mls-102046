/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const operationListProjectCoordinationAssignment = {
  "operationId": "listProjectCoordinationAssignment",
  "title": "Listar Atribuição de coordenação da obra",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ProjectCoordinationAssignment",
  "kind": "query",
  "reads": [
    "ProjectCoordinationAssignment"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Atribuição de coordenação da obra",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Atribuição de coordenação da obra",
    "entity": "ProjectCoordinationAssignment",
    "keyField": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "ProjectCoordinationAssignment.projectId",
      "ProjectCoordinationAssignment.fieldCoordinatorId",
      "ProjectCoordinationAssignment.status"
    ]
  },
  "outputShape": {
    "kind": "list",
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
  },
  "inputs": [],
  "pageId": "projectCoordinationAssignmentCatalogue",
  "commandName": "qryListProjectCoordinationAssignment",
  "bffName": "qryListProjectCoordinationAssignment"
} as const;

export default operationListProjectCoordinationAssignment;
