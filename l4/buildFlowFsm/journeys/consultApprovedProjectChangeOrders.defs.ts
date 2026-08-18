/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/consultApprovedProjectChangeOrders.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const consultApprovedProjectChangeOrdersJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "consultApprovedProjectChangeOrders",
  "revision": 1,
  "business": {
    "actorRef": "client",
    "title": "Consultar alterações aprovadas da obra",
    "goal": "Consultar ordens aprovadas da própria obra e seus valores no faturamento.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "consultClientProjectUpdates"
    },
    "steps": [
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Localizar a própria obra",
        "description": "Uma obra associada ao cliente está selecionada.",
        "featureRefs": [
          "clientCommunication",
          "clientBilling"
        ]
      },
      {
        "stepId": "inspectApprovedChangeOrders",
        "kind": "inspect",
        "entity": "ChangeOrder",
        "title": "Consultar as alterações aprovadas",
        "description": "Ordens aprovadas da obra, descrições e valores estão visíveis.",
        "featureRefs": [
          "changeOrderControl",
          "clientCommunication"
        ]
      },
      {
        "stepId": "inspectClientBillingSummary",
        "kind": "inspect",
        "entity": "ClientBillingSummary",
        "title": "Consultar o reflexo no faturamento",
        "description": "O resumo apresenta alterações aprovadas, faturas e valores.",
        "featureRefs": [
          "clientBilling",
          "changeOrderControl"
        ]
      }
    ],
    "outcome": {
      "statement": "O cliente consulta alterações aprovadas e entende seus valores no faturamento.",
      "evidence": [
        "Somente ordens aprovadas da obra do cliente são exibidas.",
        "Apontamentos internos não são expostos."
      ]
    },
    "useRules": [
      "clientSeesOnlyOwnProjectInformation",
      "clientSeesApprovedChangeOrdersOnly"
    ]
  },
  "businessHash": "sha256:87f34d1d637c9ce21c57f8bdc9272519d900fcde870dbb7fd4d7021732c6a613",
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
          "consultApprovedProjectChangeOrders.entry",
          "consultApprovedProjectChangeOrders.locateProject"
        ],
        "consumerStepRefs": []
      },
      "selectedChangeOrder": {
        "contextId": "selectedChangeOrder",
        "businessObject": "ChangeOrder",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "changeOrderId",
        "sourceRefs": [
          "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders"
        ],
        "consumerStepRefs": [
          "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders"
        ]
      },
      "selectedClientBillingSummary": {
        "contextId": "selectedClientBillingSummary",
        "businessObject": "ClientBillingSummary",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "clientId",
        "sourceRefs": [
          "consultApprovedProjectChangeOrders.inspectClientBillingSummary"
        ],
        "consumerStepRefs": [
          "consultApprovedProjectChangeOrders.inspectClientBillingSummary"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:87f34d1d637c9ce21c57f8bdc9272519d900fcde870dbb7fd4d7021732c6a613",
    "steps": [
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "inspectApprovedChangeOrders",
        "useCaseRefs": [
          "inspectApprovedChangeOrders"
        ]
      },
      {
        "stepId": "inspectClientBillingSummary",
        "useCaseRefs": [
          "inspectClientBillingSummary"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:9ca8c3870658a70ca2f68f168842c5d19bc78e7684a8aaeaf1f42172a052548d"
  }
} as const satisfies Ns4JourneyArtifact;

export type ConsultApprovedProjectChangeOrdersJourneyType = typeof consultApprovedProjectChangeOrdersJourney;

export default consultApprovedProjectChangeOrdersJourney;
