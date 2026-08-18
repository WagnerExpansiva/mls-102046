/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/PlatformUser.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityPlatformUser = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "PlatformUser",
  "title": "Usuário da plataforma",
  "description": "Referência externa ao usuário autenticado da plataforma, reutilizada para vincular identidades de trabalhadores, coordenadores, gestores e contatos de clientes sem duplicar o cadastro de usuários.",
  "kind": "core",
  "ownership": "external",
  "sourceRefs": {
    "journeyIds": [],
    "featureIds": [
      "fieldTaskCoordination",
      "dailyFieldLogging",
      "changeOrderControl",
      "aiStatusReporting",
      "clientCommunication"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldcoord",
      "buildflowfsm:fieldwork",
      "buildflowfsm:fieldlogs",
      "buildflowfsm:changemanage",
      "buildflowfsm:statuspublish",
      "buildflowfsm:clientapproval",
      "buildflowfsm:clientupdates"
    ]
  },
  "fields": [
    {
      "fieldId": "platformUserId",
      "title": "ID do usuário da plataforma",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do usuário autenticado, fornecido pela plataforma e usado como referência externa pelos vínculos do módulo.",
      "constraints": [
        {
          "constraintId": "uniquePlatformUserId",
          "kind": "unique",
          "value": "true",
          "description": "Cada usuário externo da plataforma possui um identificador estável único.",
          "source": "inferred"
        }
      ]
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [],
  "storage": {
    "target": "external",
    "scope": "platform",
    "notes": "A autenticação, os usuários, as funções e o contexto organizacional são fornecidos pela plataforma."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityPlatformUserType = typeof buildFlowFsmEntityPlatformUser;

export default buildFlowFsmEntityPlatformUser;
