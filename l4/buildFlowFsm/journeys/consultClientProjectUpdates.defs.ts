/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/consultClientProjectUpdates.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const consultClientProjectUpdatesJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "consultClientProjectUpdates",
  "revision": 1,
  "business": {
    "actorRef": "client",
    "title": "Consultar status e faturamento da obra",
    "goal": "Acompanhar informações publicadas sobre a execução e os valores da própria obra.",
    "entry": {
      "mode": "coldStart"
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
        "stepId": "inspectStatusReport",
        "kind": "inspect",
        "entity": "StatusReport",
        "title": "Consultar o relatório de status publicado",
        "description": "O relatório publicado, incluindo riscos comunicados, está visível.",
        "featureRefs": [
          "clientCommunication",
          "aiStatusReporting"
        ]
      },
      {
        "stepId": "inspectClientBillingSummary",
        "kind": "inspect",
        "entity": "ClientBillingSummary",
        "title": "Consultar o resumo de faturamento",
        "description": "Faturas e valores relacionados à obra estão visíveis.",
        "featureRefs": [
          "clientBilling"
        ]
      }
    ],
    "outcome": {
      "statement": "O cliente acompanha o status comunicado e os valores de faturamento da obra.",
      "evidence": [
        "O cliente visualiza o relatório publicado.",
        "O cliente visualiza resumo e faturas da obra."
      ]
    },
    "useRules": [
      "clientSeesOnlyOwnProjectInformation"
    ]
  },
  "businessHash": "sha256:a433187c999cb8a3b002bac545bbb5063c815cbe624d65c9ff6ecc214bf95f45",
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
          "consultClientProjectUpdates.locateProject"
        ],
        "consumerStepRefs": []
      },
      "selectedStatusReport": {
        "contextId": "selectedStatusReport",
        "businessObject": "StatusReport",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "statusReportId",
        "sourceRefs": [
          "consultClientProjectUpdates.inspectStatusReport"
        ],
        "consumerStepRefs": [
          "consultClientProjectUpdates.inspectStatusReport"
        ]
      },
      "selectedClientBillingSummary": {
        "contextId": "selectedClientBillingSummary",
        "businessObject": "ClientBillingSummary",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "clientId",
        "sourceRefs": [
          "consultClientProjectUpdates.inspectClientBillingSummary"
        ],
        "consumerStepRefs": [
          "consultClientProjectUpdates.inspectClientBillingSummary"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:a433187c999cb8a3b002bac545bbb5063c815cbe624d65c9ff6ecc214bf95f45",
    "steps": [
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "inspectStatusReport",
        "useCaseRefs": [
          "inspectStatusReport"
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
    "realizationHash": "sha256:1c00d1797538ef54beda08981b4dd48345b27fe232f3fed08a0b87f1d85093b2"
  }
} as const satisfies Ns4JourneyArtifact;

export type ConsultClientProjectUpdatesJourneyType = typeof consultClientProjectUpdatesJourney;

export default consultClientProjectUpdatesJourney;
