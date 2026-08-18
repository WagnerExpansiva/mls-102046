/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/forwardChangeOrderForClientApproval.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const forwardChangeOrderForClientApprovalJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "forwardChangeOrderForClientApproval",
  "revision": 1,
  "business": {
    "actorRef": "projectManager",
    "title": "Encaminhar ordem de mudança ao cliente",
    "goal": "Enviar ao cliente uma ordem de mudança submetida para a decisão de aprovação.",
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
        "description": "Uma ordem de mudança pendente de tratamento está selecionada.",
        "featureRefs": [
          "changeOrderControl"
        ]
      },
      {
        "stepId": "handoffChangeOrderToClient",
        "kind": "handoff",
        "entity": "ChangeOrder",
        "title": "Solicitar aprovação do cliente",
        "description": "O cliente recebe a ordem de mudança para decidir sua aprovação.",
        "featureRefs": [
          "changeOrderControl",
          "clientCommunication"
        ],
        "targetProfile": "client"
      }
    ],
    "outcome": {
      "statement": "O cliente recebe uma ordem de mudança para aprovação.",
      "evidence": [
        "O encaminhamento para aprovação do cliente é observável."
      ]
    },
    "useRules": [
      "onlyProjectManagerForwardsChangeOrderForClientApproval"
    ]
  },
  "businessHash": "sha256:c0a982b3347ed3fc7556c87549ed804d96411db8cb9511615578d5a71933d5cf",
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
          "forwardChangeOrderForClientApproval.entry",
          "forwardChangeOrderForClientApproval.handoffChangeOrderToClient",
          "forwardChangeOrderForClientApproval.locateChangeOrder"
        ],
        "consumerStepRefs": [
          "forwardChangeOrderForClientApproval.handoffChangeOrderToClient"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:c0a982b3347ed3fc7556c87549ed804d96411db8cb9511615578d5a71933d5cf",
    "steps": [
      {
        "stepId": "locateChangeOrder",
        "useCaseRefs": [
          "locateChangeOrder"
        ]
      },
      {
        "stepId": "handoffChangeOrderToClient",
        "useCaseRefs": [
          "handoffChangeOrderToClient"
        ]
      }
    ],
    "transitionRefs": [
      "handoffChangeOrderToClient"
    ],
    "realizationHash": "sha256:37873d8d9d35b839b12192e38c36aed78578bced95bbb2551b11712be7fad327"
  }
} as const satisfies Ns4JourneyArtifact;

export type ForwardChangeOrderForClientApprovalJourneyType = typeof forwardChangeOrderForClientApprovalJourney;

export default forwardChangeOrderForClientApprovalJourney;
