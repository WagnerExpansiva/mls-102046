/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/approveChangeOrder.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const approveChangeOrderJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "approveChangeOrder",
  "revision": 1,
  "business": {
    "actorRef": "client",
    "title": "Aprovar ordem de mudança",
    "goal": "Decidir favoravelmente uma ordem de mudança recebida e encaminhá-la ao faturamento.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "forwardChangeOrderForClientApproval"
    },
    "steps": [
      {
        "stepId": "locateChangeOrder",
        "kind": "locate",
        "entity": "ChangeOrder",
        "title": "Localizar a ordem de mudança recebida",
        "description": "Uma ordem de mudança pendente de aprovação do cliente está selecionada.",
        "featureRefs": [
          "changeOrderControl",
          "clientCommunication"
        ]
      },
      {
        "stepId": "approveChangeOrderDecision",
        "kind": "decide",
        "entity": "ChangeOrder",
        "title": "Aprovar a ordem de mudança",
        "description": "A ordem fica registrada como aprovada pelo cliente.",
        "featureRefs": [
          "changeOrderControl",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "handoffApprovedChangeOrderToBilling",
        "kind": "handoff",
        "entity": "ChangeOrder",
        "title": "Encaminhar a alteração aprovada ao faturamento",
        "description": "A equipe de faturamento recebe a ordem aprovada.",
        "featureRefs": [
          "changeOrderControl",
          "clientBilling"
        ],
        "targetProfile": "billingStaff"
      }
    ],
    "outcome": {
      "statement": "Uma ordem aprovada pelo cliente fica disponível para custo e faturamento.",
      "evidence": [
        "A aprovação e o cliente responsável são observáveis.",
        "A equipe de faturamento recebe a ordem aprovada."
      ]
    },
    "useRules": [
      "onlyClientApprovesOwnChangeOrder"
    ]
  },
  "businessHash": "sha256:fdb7fad37b2aef98b3454d6b76429aade62571518fa4c1cdce697cfdfab79b2a",
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
          "approveChangeOrder.approveChangeOrderDecision",
          "approveChangeOrder.entry",
          "approveChangeOrder.handoffApprovedChangeOrderToBilling",
          "approveChangeOrder.locateChangeOrder"
        ],
        "consumerStepRefs": [
          "approveChangeOrder.approveChangeOrderDecision",
          "approveChangeOrder.handoffApprovedChangeOrderToBilling"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:fdb7fad37b2aef98b3454d6b76429aade62571518fa4c1cdce697cfdfab79b2a",
    "steps": [
      {
        "stepId": "locateChangeOrder",
        "useCaseRefs": [
          "locateChangeOrder"
        ]
      },
      {
        "stepId": "approveChangeOrderDecision",
        "useCaseRefs": [
          "approveChangeOrderDecision"
        ]
      },
      {
        "stepId": "handoffApprovedChangeOrderToBilling",
        "useCaseRefs": [
          "handoffApprovedChangeOrderToBilling"
        ]
      }
    ],
    "transitionRefs": [
      "approveChangeOrder"
    ],
    "realizationHash": "sha256:9b5c1fb1936f61882470906255df418974a65de6bc1f3a344ab4049ba079f2cc"
  }
} as const satisfies Ns4JourneyArtifact;

export type ApproveChangeOrderJourneyType = typeof approveChangeOrderJourney;

export default approveChangeOrderJourney;
