/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const operationDeleteProjectCoordinationAssignment = {
  "operationId": "deleteProjectCoordinationAssignment",
  "title": "Excluir Atribuição de coordenação da obra",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ProjectCoordinationAssignment",
  "kind": "delete",
  "reads": [
    "ProjectCoordinationAssignment"
  ],
  "writes": [
    "ProjectCoordinationAssignment"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Atribuição de coordenação da obra",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Atribuição de coordenação da obra",
    "entity": "ProjectCoordinationAssignment",
    "keyField": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "ProjectCoordinationAssignment.projectId",
      "ProjectCoordinationAssignment.fieldCoordinatorId",
      "ProjectCoordinationAssignment.status"
    ]
  },
  "outputShape": {
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "projectCoordinationAssignmentId",
      "fieldRef": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo."
    }
  ],
  "pageId": "projectCoordinationAssignmentCatalogue",
  "commandName": "cmdDeleteProjectCoordinationAssignment",
  "bffName": "cmdDeleteProjectCoordinationAssignment"
} as const;

export default operationDeleteProjectCoordinationAssignment;
