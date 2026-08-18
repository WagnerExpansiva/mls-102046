/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ProjectTimeline.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityProjectTimeline = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ProjectTimeline",
  "title": "Cronograma da obra",
  "description": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo.",
  "kind": "projection",
  "ownership": "derived",
  "sourceRefs": {
    "journeyIds": [
      "assignWorkTask"
    ],
    "featureIds": [
      "projectScheduleVisibility",
      "fieldTaskCoordination"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldcoord"
    ]
  },
  "fields": [
    {
      "fieldId": "projectId",
      "title": "Identificador da obra",
      "type": "uuid",
      "required": true,
      "description": "Identidade da obra que delimita a projeção derivada do cronograma.",
      "constraints": []
    },
    {
      "fieldId": "workTasks",
      "title": "Tarefas da obra",
      "type": "json",
      "required": false,
      "description": "Lista derivada das tarefas da obra, organizada para exibir sua sequência e seus prazos no cronograma.",
      "constraints": []
    },
    {
      "fieldId": "scheduleEntries",
      "title": "Entradas do cronograma",
      "type": "json",
      "required": false,
      "description": "Entradas derivadas para a visualização sequenciada ou tipo Gantt, incluindo a ordem planejada e as datas disponíveis das tarefas.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [],
  "storage": {
    "target": "derived",
    "scope": "none",
    "notes": "Projeção derivada da obra e de suas tarefas, adequada para lista sequenciada ou visualização tipo Gantt."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityProjectTimelineType = typeof buildFlowFsmEntityProjectTimeline;

export default buildFlowFsmEntityProjectTimeline;
