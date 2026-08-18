/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/recordWorkTime.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const recordWorkTimeJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "recordWorkTime",
  "revision": 1,
  "business": {
    "actorRef": "fieldWorker",
    "title": "Registrar horas trabalhadas",
    "goal": "Registrar horas de execução para apoiar o custo realizado da obra.",
    "entry": {
      "mode": "coldStart"
    },
    "steps": [
      {
        "stepId": "locateFieldWorker",
        "kind": "locate",
        "entity": "FieldWorker",
        "title": "Confirmar o trabalhador",
        "description": "O trabalhador que realizou o trabalho está selecionado no diretório da organização.",
        "featureRefs": [
          "dailyFieldLogging",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "locateWorkTask",
        "kind": "locate",
        "entity": "WorkTask",
        "title": "Localizar a tarefa executada",
        "description": "Uma tarefa da obra está selecionada para o registro.",
        "featureRefs": [
          "dailyFieldLogging",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "createTimeLog",
        "kind": "act",
        "entity": "TimeLog",
        "title": "Registrar as horas trabalhadas",
        "description": "Um registro diário vinculado ao trabalhador e à tarefa fica armazenado.",
        "featureRefs": [
          "dailyFieldLogging",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "handoffTimeLogToFieldCoordinator",
        "kind": "handoff",
        "entity": "TimeLog",
        "title": "Encaminhar o registro diário",
        "description": "O coordenador recebe o registro de horas para acompanhamento.",
        "featureRefs": [
          "dailyFieldLogging"
        ],
        "targetProfile": "fieldCoordinator"
      }
    ],
    "outcome": {
      "statement": "As horas de campo ficam disponíveis para compor o realizado da obra.",
      "evidence": [
        "O registro identifica trabalhador, tarefa e horas.",
        "O coordenador recebe o registro criado."
      ]
    },
    "useRules": [
      "timeLogRequiresWorkerTaskAndPositiveHours"
    ]
  },
  "businessHash": "sha256:44b320707bc484ad97793f6e6d7c46c78917e142a326b806810007d379b98ad5",
  "resolution": {
    "status": "compiled",
    "contexts": {
      "selectedFieldWorker": {
        "contextId": "selectedFieldWorker",
        "businessObject": "FieldWorker",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "platformUserId",
        "sourceRefs": [
          "recordWorkTime.locateFieldWorker"
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
          "recordWorkTime.locateWorkTask"
        ],
        "consumerStepRefs": [
          "recordWorkTime.createTimeLog"
        ]
      },
      "selectedTimeLog": {
        "contextId": "selectedTimeLog",
        "businessObject": "TimeLog",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "timeLogId",
        "sourceRefs": [
          "recordWorkTime.createTimeLog",
          "recordWorkTime.handoffTimeLogToFieldCoordinator"
        ],
        "consumerStepRefs": [
          "recordWorkTime.handoffTimeLogToFieldCoordinator"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:44b320707bc484ad97793f6e6d7c46c78917e142a326b806810007d379b98ad5",
    "steps": [
      {
        "stepId": "locateFieldWorker",
        "useCaseRefs": [
          "locateFieldWorker"
        ]
      },
      {
        "stepId": "locateWorkTask",
        "useCaseRefs": [
          "locateWorkTask"
        ]
      },
      {
        "stepId": "createTimeLog",
        "useCaseRefs": [
          "createTimeLog"
        ]
      },
      {
        "stepId": "handoffTimeLogToFieldCoordinator",
        "useCaseRefs": [
          "handoffTimeLogToFieldCoordinator"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:0701342cdf724eeaceeb5db7c61b658908b032ca5d3eb093a764f1c7ffb0c578"
  }
} as const satisfies Ns4JourneyArtifact;

export type RecordWorkTimeJourneyType = typeof recordWorkTimeJourney;

export default recordWorkTimeJourney;
