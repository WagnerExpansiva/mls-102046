/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/updateWorkTaskProgress.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const updateWorkTaskProgressJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "updateWorkTaskProgress",
  "revision": 1,
  "business": {
    "actorRef": "fieldWorker",
    "title": "Atualizar andamento da tarefa",
    "goal": "Manter o status da tarefa alinhado à execução observada.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "assignWorkTask"
    },
    "steps": [
      {
        "stepId": "locateWorkTask",
        "kind": "locate",
        "entity": "WorkTask",
        "title": "Localizar a tarefa atribuída",
        "description": "Uma tarefa atribuída ao trabalhador está selecionada.",
        "featureRefs": [
          "fieldTaskCoordination",
          "projectScheduleVisibility"
        ]
      },
      {
        "stepId": "updateWorkTask",
        "kind": "act",
        "entity": "WorkTask",
        "title": "Registrar o andamento da tarefa",
        "description": "O status e o andamento atual ficam registrados.",
        "featureRefs": [
          "fieldTaskCoordination",
          "projectScheduleVisibility"
        ]
      },
      {
        "stepId": "handoffWorkTaskProgressToFieldCoordinator",
        "kind": "handoff",
        "entity": "WorkTask",
        "title": "Informar o andamento ao coordenador",
        "description": "O coordenador recebe a tarefa com andamento atualizado.",
        "featureRefs": [
          "fieldTaskCoordination"
        ],
        "targetProfile": "fieldCoordinator"
      }
    ],
    "outcome": {
      "statement": "O planejamento da obra reflete o andamento informado em campo.",
      "evidence": [
        "A tarefa mantém status atualizado.",
        "O coordenador recebe a atualização."
      ]
    },
    "useRules": [
      "onlyAssignedWorkerReportsTaskProgress"
    ]
  },
  "businessHash": "sha256:48192c1ca691362a95a952f0318683b326e4963ef6c4f184eda6f987975eb7fe",
  "resolution": {
    "status": "compiled",
    "contexts": {
      "selectedWorkTask": {
        "contextId": "selectedWorkTask",
        "businessObject": "WorkTask",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "workTaskId",
        "sourceRefs": [
          "updateWorkTaskProgress.entry",
          "updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator",
          "updateWorkTaskProgress.locateWorkTask",
          "updateWorkTaskProgress.updateWorkTask"
        ],
        "consumerStepRefs": [
          "updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator",
          "updateWorkTaskProgress.updateWorkTask"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:48192c1ca691362a95a952f0318683b326e4963ef6c4f184eda6f987975eb7fe",
    "steps": [
      {
        "stepId": "locateWorkTask",
        "useCaseRefs": [
          "locateWorkTask"
        ]
      },
      {
        "stepId": "updateWorkTask",
        "useCaseRefs": [
          "updateWorkTask"
        ]
      },
      {
        "stepId": "handoffWorkTaskProgressToFieldCoordinator",
        "useCaseRefs": [
          "handoffWorkTaskProgressToFieldCoordinator"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:7cb84e7b544b0f375d0c0eaf3f088919718f661b671ed4bdcfcd5753db48f5ec"
  }
} as const satisfies Ns4JourneyArtifact;

export type UpdateWorkTaskProgressJourneyType = typeof updateWorkTaskProgressJourney;

export default updateWorkTaskProgressJourney;
