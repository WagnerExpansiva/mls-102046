/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/FieldCoordinator.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityFieldCoordinator = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "FieldCoordinator",
  "title": "Coordenador de campo",
  "description": "Referência externa ao membro da organização que recebe obras para acompanhamento, planeja tarefas e trata os apontamentos de campo.",
  "kind": "core",
  "ownership": "external",
  "sourceRefs": {
    "journeyIds": [
      "reviewProjectPortfolio",
      "assignWorkTask",
      "updateWorkTaskProgress",
      "recordWorkTime",
      "recordProjectMaterialUsage",
      "submitChangeOrder",
      "declineChangeOrder",
      "monitorDailyProjectRecords"
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
      "fieldId": "platformUserRef",
      "title": "Usuário da plataforma",
      "type": "uuid",
      "required": true,
      "description": "Referência externa ao usuário organizacional qualificado como coordenador de campo.",
      "constraints": [
        {
          "constraintId": "uniquePlatformUserRef",
          "kind": "unique",
          "value": "true",
          "description": "Cada usuário da plataforma corresponde a no máximo um coordenador de campo.",
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
    "notes": "Representa um usuário organizacional da plataforma que exerce a função de coordenação de campo."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityFieldCoordinatorType = typeof buildFlowFsmEntityFieldCoordinator;

export default buildFlowFsmEntityFieldCoordinator;
