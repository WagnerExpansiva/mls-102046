/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ChangeOrderDecision.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityChangeOrderDecision = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ChangeOrderDecision",
  "title": "Decisão sobre ordem de mudança",
  "description": "Evidência durável de uma decisão de aprovação do cliente ou de recusa do gerente, incluindo o usuário responsável e o momento da decisão.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "approveChangeOrder",
      "declineChangeOrder"
    ],
    "featureIds": [
      "changeOrderControl",
      "clientCommunication"
    ],
    "authorityRefs": [
      "buildflowfsm:changemanage",
      "buildflowfsm:clientapproval"
    ]
  },
  "fields": [
    {
      "fieldId": "changeOrderDecisionId",
      "title": "ID da decisão da ordem de mudança",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável da decisão registrada sobre uma ordem de mudança.",
      "constraints": [
        {
          "constraintId": "uniqueChangeOrderDecisionId",
          "kind": "unique",
          "value": "true",
          "description": "Cada decisão registrada possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "changeOrder",
      "title": "Ordem de mudança",
      "type": "uuid",
      "required": true,
      "description": "Referência à ordem de mudança que recebeu a decisão.",
      "constraints": []
    },
    {
      "fieldId": "madeByPlatformUser",
      "title": "Usuário responsável pela decisão",
      "type": "uuid",
      "required": true,
      "description": "Referência ao usuário que aprovou ou recusou a ordem de mudança.",
      "constraints": []
    },
    {
      "fieldId": "decision",
      "title": "Decisão",
      "type": "string",
      "required": true,
      "description": "Resultado registrado para a ordem de mudança.",
      "constraints": [
        {
          "constraintId": "decisionAllowedValues",
          "kind": "enum",
          "value": "[\"approved\",\"declined\"]",
          "description": "A decisão registrada é aprovação do cliente ou recusa do gerente.",
          "source": "journey"
        }
      ],
      "enum": [
        "approved",
        "declined"
      ]
    },
    {
      "fieldId": "decidedAt",
      "title": "Data e hora da decisão",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que a decisão foi registrada.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [
    "onlyClientApprovesOwnChangeOrder",
    "onlyProjectManagerDeclinesChangeOrder"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "changeOrderDecisionId",
    "notes": "Preserva a autoria e a rastreabilidade da decisão sem depender apenas da mudança de estado da ordem."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityChangeOrderDecisionType = typeof buildFlowFsmEntityChangeOrderDecision;

export default buildFlowFsmEntityChangeOrderDecision;
