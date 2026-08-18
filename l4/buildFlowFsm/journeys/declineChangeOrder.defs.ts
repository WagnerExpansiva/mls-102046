/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/declineChangeOrder.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const declineChangeOrderJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "declineChangeOrder",
  "revision": 1,
  "business": {
    "actorRef": "projectManager",
    "title": "Recusar ordem de mudança",
    "goal": "Decidir desfavoravelmente uma ordem submetida e devolver o resultado ao campo.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "submitChangeOrder"
    },
    "steps": [
      {
        "stepId": "locateChangeOrder",
        "kind": "locate",
        "entity": "ChangeOrder",
        "title": "Localizar a ordem de mudança submetida",
        "description": "Uma ordem pendente de tratamento está selecionada.",
        "featureRefs": [
          "changeOrderControl"
        ]
      },
      {
        "stepId": "declineChangeOrderDecision",
        "kind": "decide",
        "entity": "ChangeOrder",
        "title": "Recusar a ordem de mudança",
        "description": "A ordem fica registrada como recusada pelo gerente.",
        "featureRefs": [
          "changeOrderControl"
        ]
      },
      {
        "stepId": "handoffDeclinedChangeOrderToFieldCoordinator",
        "kind": "handoff",
        "entity": "ChangeOrder",
        "title": "Devolver a decisão ao campo",
        "description": "O coordenador recebe a ordem recusada para tratar o resultado.",
        "featureRefs": [
          "changeOrderControl"
        ],
        "targetProfile": "fieldCoordinator"
      }
    ],
    "outcome": {
      "statement": "Uma ordem recusada tem decisão registrada e retorno observável ao campo.",
      "evidence": [
        "A recusa e seu responsável são observáveis.",
        "O coordenador recebe o resultado."
      ]
    },
    "useRules": [
      "onlyProjectManagerDeclinesChangeOrder"
    ]
  },
  "businessHash": "sha256:4eebbd9234b3e8986c1bb68ffc58d447a046d2e56dd1539d618d043c4592f102",
  "resolution": {
    "status": "compiled",
    "contexts": {
      "selectedChangeOrder": {
        "contextId": "selectedChangeOrder",
        "businessObject": "ChangeOrder",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "changeOrderId",
        "sourceRefs": [
          "declineChangeOrder.declineChangeOrderDecision",
          "declineChangeOrder.entry",
          "declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator",
          "declineChangeOrder.locateChangeOrder"
        ],
        "consumerStepRefs": [
          "declineChangeOrder.declineChangeOrderDecision",
          "declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:4eebbd9234b3e8986c1bb68ffc58d447a046d2e56dd1539d618d043c4592f102",
    "steps": [
      {
        "stepId": "locateChangeOrder",
        "useCaseRefs": [
          "locateChangeOrder"
        ]
      },
      {
        "stepId": "declineChangeOrderDecision",
        "useCaseRefs": [
          "declineChangeOrderDecision"
        ]
      },
      {
        "stepId": "handoffDeclinedChangeOrderToFieldCoordinator",
        "useCaseRefs": [
          "handoffDeclinedChangeOrderToFieldCoordinator"
        ]
      }
    ],
    "transitionRefs": [
      "declineChangeOrder"
    ],
    "realizationHash": "sha256:e56f0e76c5d13bdd73b24fb21cd81581e4f730197d24b3efb6c15d537104d8b5"
  }
} as const satisfies Ns4JourneyArtifact;

export type DeclineChangeOrderJourneyType = typeof declineChangeOrderJourney;

export default declineChangeOrderJourney;
