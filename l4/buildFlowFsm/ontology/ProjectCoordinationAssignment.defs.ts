/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityProjectCoordinationAssignment = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ProjectCoordinationAssignment",
  "title": "Atribuição de coordenação da obra",
  "description": "Registro operacional que formaliza o encaminhamento de uma obra a um coordenador de campo e sustenta o escopo de obras acompanhadas pelo coordenador.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "reviewProjectPortfolio",
      "assignWorkTask",
      "monitorDailyProjectRecords",
      "submitChangeOrder",
      "declineChangeOrder"
    ],
    "featureIds": [
      "projectPortfolioMonitoring",
      "fieldTaskCoordination",
      "dailyFieldLogging",
      "projectMaterialTracking",
      "changeOrderControl"
    ],
    "authorityRefs": [
      "buildflowfsm:portfolio",
      "buildflowfsm:fieldcoord",
      "buildflowfsm:fieldchange"
    ]
  },
  "fields": [
    {
      "fieldId": "projectCoordinationAssignmentId",
      "title": "Identificador da atribuição de coordenação",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo.",
      "constraints": [
        {
          "constraintId": "uniqueProjectCoordinationAssignmentId",
          "kind": "unique",
          "value": "true",
          "description": "Cada atribuição de coordenação possui um identificador estável e exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "projectId",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo.",
      "constraints": []
    },
    {
      "fieldId": "fieldCoordinatorId",
      "title": "Coordenador de campo",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto ao coordenador de campo responsável pelo acompanhamento da obra.",
      "constraints": []
    },
    {
      "fieldId": "status",
      "title": "Status da atribuição",
      "type": "string",
      "required": true,
      "description": "Estado operacional atual da atribuição de coordenação da obra.",
      "constraints": [
        {
          "constraintId": "projectCoordinationAssignmentStatusEnum",
          "kind": "enum",
          "value": "[\"active\",\"closed\",\"revoked\"]",
          "description": "O status da atribuição deve corresponder a um estado previsto em seu ciclo de vida.",
          "source": "inferred"
        }
      ],
      "enum": [
        "active",
        "closed",
        "revoked"
      ]
    }
  ],
  "lifecycleStates": [
    "active",
    "closed",
    "revoked"
  ],
  "statusEnum": [
    "active",
    "closed",
    "revoked"
  ],
  "initialState": "active",
  "terminalStates": [
    "closed",
    "revoked"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "activeProjectCoordination",
      "description": "A atribuição autoriza o coordenador a acompanhar e coordenar a obra enquanto estiver ativa.",
      "stateIds": [
        "active"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "activeProjectCoordination"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "projectCoordinationAssignmentId",
    "notes": "O encaminhamento é um fato operacional auditável e não altera o cadastro mestre da obra."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityProjectCoordinationAssignmentType = typeof buildFlowFsmEntityProjectCoordinationAssignment;

export default buildFlowFsmEntityProjectCoordinationAssignment;
