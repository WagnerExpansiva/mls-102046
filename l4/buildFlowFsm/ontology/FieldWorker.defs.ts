/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/FieldWorker.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityFieldWorker = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "FieldWorker",
  "title": "Trabalhador de campo",
  "description": "Referência externa ao membro da organização elegível para receber tarefas e registrar os próprios apontamentos de execução.",
  "kind": "core",
  "ownership": "external",
  "sourceRefs": {
    "journeyIds": [
      "assignWorkTask",
      "updateWorkTaskProgress",
      "recordWorkTime"
    ],
    "featureIds": [
      "fieldTaskCoordination",
      "dailyFieldLogging"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldcoord",
      "buildflowfsm:fieldwork",
      "buildflowfsm:fieldlogs"
    ]
  },
  "fields": [
    {
      "fieldId": "platformUserId",
      "title": "Usuário da plataforma",
      "type": "uuid",
      "required": true,
      "description": "Referência ao usuário da plataforma qualificado como trabalhador de campo, selecionada no diretório organizacional.",
      "constraints": [
        {
          "constraintId": "uniquePlatformUserId",
          "kind": "unique",
          "value": "true",
          "description": "Um usuário da plataforma corresponde a, no máximo, uma referência de trabalhador de campo.",
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
    "notes": "Representa um usuário organizacional da plataforma qualificado para trabalho de campo, sem manter um cadastro de pessoal paralelo."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityFieldWorkerType = typeof buildFlowFsmEntityFieldWorker;

export default buildFlowFsmEntityFieldWorker;
