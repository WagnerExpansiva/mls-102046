/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/submitChangeOrder.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const submitChangeOrderJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "submitChangeOrder",
  "revision": 1,
  "business": {
    "actorRef": "fieldCoordinator",
    "title": "Registrar e submeter ordem de mudança",
    "goal": "Formalizar uma alteração da obra para tratamento do gerente de projeto.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "reviewProjectPortfolio"
    },
    "steps": [
      {
        "stepId": "locateClient",
        "kind": "locate",
        "entity": "Client",
        "title": "Localizar o cliente",
        "description": "Um cliente do catálogo compartilhado está selecionado.",
        "featureRefs": [
          "changeOrderControl",
          "clientCommunication"
        ]
      },
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Localizar a obra",
        "description": "Uma obra do cliente selecionado está selecionada.",
        "featureRefs": [
          "changeOrderControl",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "createChangeOrder",
        "kind": "act",
        "entity": "ChangeOrder",
        "title": "Registrar a alteração proposta",
        "description": "Uma ordem de mudança vinculada ao cliente e à obra fica registrada.",
        "featureRefs": [
          "changeOrderControl",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "handoffChangeOrderToProjectManager",
        "kind": "handoff",
        "entity": "ChangeOrder",
        "title": "Submeter a alteração para tratamento",
        "description": "O gerente recebe a ordem para recusá-la ou encaminhá-la ao cliente para aprovação.",
        "featureRefs": [
          "changeOrderControl"
        ],
        "targetProfile": "projectManager"
      }
    ],
    "outcome": {
      "statement": "Uma alteração fica formalizada e disponível para tratamento gerencial.",
      "evidence": [
        "A ordem mantém vínculo com cliente e obra.",
        "O gerente recebe a ordem submetida."
      ]
    },
    "useRules": [
      "changeOrderRequiresClientAndProject"
    ]
  },
  "businessHash": "sha256:7a3a3d284888ad73cf1bb49fb05556adeeec816694b299a7e7af2d4930a22b0e",
  "resolution": {
    "status": "compiled",
    "contexts": {
      "selectedClient": {
        "contextId": "selectedClient",
        "businessObject": "Client",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "clientId",
        "sourceRefs": [
          "submitChangeOrder.entry",
          "submitChangeOrder.locateClient"
        ],
        "consumerStepRefs": [
          "submitChangeOrder.createChangeOrder"
        ]
      },
      "selectedProject": {
        "contextId": "selectedProject",
        "businessObject": "Project",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "submitChangeOrder.locateProject"
        ],
        "consumerStepRefs": [
          "submitChangeOrder.createChangeOrder"
        ]
      },
      "selectedChangeOrder": {
        "contextId": "selectedChangeOrder",
        "businessObject": "ChangeOrder",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "changeOrderId",
        "sourceRefs": [
          "submitChangeOrder.createChangeOrder",
          "submitChangeOrder.handoffChangeOrderToProjectManager"
        ],
        "consumerStepRefs": [
          "submitChangeOrder.handoffChangeOrderToProjectManager"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:7a3a3d284888ad73cf1bb49fb05556adeeec816694b299a7e7af2d4930a22b0e",
    "steps": [
      {
        "stepId": "locateClient",
        "useCaseRefs": [
          "locateClient"
        ]
      },
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "createChangeOrder",
        "useCaseRefs": [
          "createChangeOrder"
        ]
      },
      {
        "stepId": "handoffChangeOrderToProjectManager",
        "useCaseRefs": [
          "handoffChangeOrderToProjectManager"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:c8bc3d27e119c6cbf6b18fed6751d167355d753d358a74d8f4a3bc0dae95f367"
  }
} as const satisfies Ns4JourneyArtifact;

export type SubmitChangeOrderJourneyType = typeof submitChangeOrderJourney;

export default submitChangeOrderJourney;
