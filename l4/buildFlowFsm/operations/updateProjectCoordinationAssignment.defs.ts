/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const operationUpdateProjectCoordinationAssignment = {
  "operationId": "updateProjectCoordinationAssignment",
  "title": "Atualizar Atribuição de coordenação da obra",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ProjectCoordinationAssignment",
  "kind": "update",
  "reads": [
    "FieldCoordinator",
    "Project",
    "ProjectCoordinationAssignment"
  ],
  "writes": [
    "ProjectCoordinationAssignment"
  ],
  "rulesApplied": [
    "activeProjectCoordination"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Atualizar Atribuição de coordenação da obra",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Atribuição de coordenação da obra",
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
    },
    {
      "inputId": "projectId",
      "fieldRef": "ProjectCoordinationAssignment.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo."
    },
    {
      "inputId": "fieldCoordinatorId",
      "fieldRef": "ProjectCoordinationAssignment.fieldCoordinatorId",
      "required": true,
      "source": "actorSession",
      "description": "Referência de contexto ao coordenador de campo responsável pelo acompanhamento da obra."
    },
    {
      "inputId": "status",
      "fieldRef": "ProjectCoordinationAssignment.status",
      "required": true,
      "source": "systemDefault",
      "description": "Estado operacional atual da atribuição de coordenação da obra."
    }
  ],
  "pageId": "projectCoordinationAssignmentCatalogue",
  "commandName": "cmdUpdateProjectCoordinationAssignment",
  "bffName": "cmdUpdateProjectCoordinationAssignment"
} as const;

export default operationUpdateProjectCoordinationAssignment;
