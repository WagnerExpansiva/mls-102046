/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/assignWorkTask.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const assignWorkTaskJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "assignWorkTask",
  "revision": 1,
  "business": {
    "actorRef": "fieldCoordinator",
    "title": "Planejar e atribuir tarefa de campo",
    "goal": "Criar uma tarefa vinculada à obra e encaminhá-la ao trabalhador responsável.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "reviewProjectPortfolio"
    },
    "steps": [
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Localizar a obra",
        "description": "Uma obra ativa do catálogo compartilhado de projetos está selecionada.",
        "featureRefs": [
          "fieldTaskCoordination",
          "projectScheduleVisibility"
        ]
      },
      {
        "stepId": "inspectProjectTimeline",
        "kind": "inspect",
        "entity": "ProjectTimeline",
        "title": "Consultar o cronograma da obra",
        "description": "A sequência de tarefas e prazos está visível para planejamento.",
        "featureRefs": [
          "fieldTaskCoordination",
          "projectScheduleVisibility"
        ]
      },
      {
        "stepId": "locateFieldWorker",
        "kind": "locate",
        "entity": "FieldWorker",
        "title": "Selecionar o trabalhador responsável",
        "description": "Um trabalhador do diretório de usuários da organização está selecionado.",
        "featureRefs": [
          "fieldTaskCoordination"
        ]
      },
      {
        "stepId": "createWorkTask",
        "kind": "act",
        "entity": "WorkTask",
        "title": "Registrar a tarefa atribuída",
        "description": "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra.",
        "featureRefs": [
          "fieldTaskCoordination",
          "projectScheduleVisibility"
        ]
      },
      {
        "stepId": "handoffWorkTaskToFieldWorker",
        "kind": "handoff",
        "entity": "WorkTask",
        "title": "Encaminhar a tarefa ao trabalhador",
        "description": "O trabalhador recebe a tarefa para execução em campo.",
        "featureRefs": [
          "fieldTaskCoordination"
        ],
        "targetProfile": "fieldWorker"
      }
    ],
    "outcome": {
      "statement": "Uma tarefa planejada fica vinculada à obra, atribuída e disponível para execução.",
      "evidence": [
        "A tarefa registra obra, responsável, descrição, status e prazo.",
        "O trabalhador recebe a tarefa criada."
      ]
    },
    "useRules": [
      "workTaskRequiresActiveProject",
      "workTaskRequiresAssigneeAndDueDate"
    ]
  },
  "businessHash": "sha256:cdbcb3a3ad03be4ad68ccf7b47b3f2b347ad66e0ff5ba03fff10b36888eab801",
  "resolution": {
    "status": "compiled",
    "contexts": {
      "selectedProject": {
        "contextId": "selectedProject",
        "businessObject": "Project",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "assignWorkTask.entry",
          "assignWorkTask.locateProject"
        ],
        "consumerStepRefs": [
          "assignWorkTask.createWorkTask"
        ]
      },
      "selectedProjectTimeline": {
        "contextId": "selectedProjectTimeline",
        "businessObject": "ProjectTimeline",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "assignWorkTask.inspectProjectTimeline"
        ],
        "consumerStepRefs": [
          "assignWorkTask.inspectProjectTimeline"
        ]
      },
      "selectedFieldWorker": {
        "contextId": "selectedFieldWorker",
        "businessObject": "FieldWorker",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "platformUserId",
        "sourceRefs": [
          "assignWorkTask.locateFieldWorker"
        ],
        "consumerStepRefs": []
      },
      "selectedWorkTask": {
        "contextId": "selectedWorkTask",
        "businessObject": "WorkTask",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "workTaskId",
        "sourceRefs": [
          "assignWorkTask.createWorkTask",
          "assignWorkTask.handoffWorkTaskToFieldWorker"
        ],
        "consumerStepRefs": [
          "assignWorkTask.handoffWorkTaskToFieldWorker"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:cdbcb3a3ad03be4ad68ccf7b47b3f2b347ad66e0ff5ba03fff10b36888eab801",
    "steps": [
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "inspectProjectTimeline",
        "useCaseRefs": [
          "inspectProjectTimeline"
        ]
      },
      {
        "stepId": "locateFieldWorker",
        "useCaseRefs": [
          "locateFieldWorker"
        ]
      },
      {
        "stepId": "createWorkTask",
        "useCaseRefs": [
          "createWorkTask"
        ]
      },
      {
        "stepId": "handoffWorkTaskToFieldWorker",
        "useCaseRefs": [
          "handoffWorkTaskToFieldWorker"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:e894d40fcf39b447f1b7a7efc2f8684a0f1ae328d91ef60e1010d88509e9103a"
  }
} as const satisfies Ns4JourneyArtifact;

export type AssignWorkTaskJourneyType = typeof assignWorkTaskJourney;

export default assignWorkTaskJourney;
