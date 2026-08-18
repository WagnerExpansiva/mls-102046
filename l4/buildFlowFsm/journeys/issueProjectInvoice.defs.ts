/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/issueProjectInvoice.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const issueProjectInvoiceJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "issueProjectInvoice",
  "revision": 1,
  "business": {
    "actorRef": "billingStaff",
    "title": "Emitir fatura da obra",
    "goal": "Emitir uma fatura para o cliente com base no resumo de faturamento da obra.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "approveChangeOrder"
    },
    "steps": [
      {
        "stepId": "locateClient",
        "kind": "locate",
        "entity": "Client",
        "title": "Localizar o cliente",
        "description": "Um cliente do catálogo compartilhado está selecionado.",
        "featureRefs": [
          "clientBilling"
        ]
      },
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Localizar a obra faturável",
        "description": "Uma obra do cliente selecionado está selecionada.",
        "featureRefs": [
          "clientBilling",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "inspectClientBillingSummary",
        "kind": "inspect",
        "entity": "ClientBillingSummary",
        "title": "Consultar o resumo de faturamento",
        "description": "Faturas, ordens aprovadas e valores estão consolidados.",
        "featureRefs": [
          "clientBilling",
          "changeOrderControl"
        ]
      },
      {
        "stepId": "createInvoice",
        "kind": "act",
        "entity": "Invoice",
        "title": "Emitir a fatura",
        "description": "Uma fatura vinculada ao cliente e à obra fica registrada.",
        "featureRefs": [
          "clientBilling"
        ]
      },
      {
        "stepId": "handoffInvoiceToClient",
        "kind": "handoff",
        "entity": "Invoice",
        "title": "Disponibilizar a fatura ao cliente",
        "description": "O cliente recebe a fatura para consulta.",
        "featureRefs": [
          "clientBilling",
          "clientCommunication"
        ],
        "targetProfile": "client"
      }
    ],
    "outcome": {
      "statement": "O cliente tem uma fatura da obra emitida com base no resumo de faturamento.",
      "evidence": [
        "A fatura mantém vínculo com cliente e obra.",
        "O cliente recebe a fatura emitida."
      ]
    },
    "useRules": [
      "invoiceRequiresClientAndProject",
      "invoiceIncludesApprovedChangeOrdersOnly"
    ]
  },
  "businessHash": "sha256:8885b209892bab2b2cfb2dc50b3f17b24938dab59a6afcb19ca4b40b233ddfc1",
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
          "issueProjectInvoice.entry",
          "issueProjectInvoice.locateClient"
        ],
        "consumerStepRefs": [
          "issueProjectInvoice.createInvoice"
        ]
      },
      "selectedProject": {
        "contextId": "selectedProject",
        "businessObject": "Project",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "issueProjectInvoice.locateProject"
        ],
        "consumerStepRefs": [
          "issueProjectInvoice.createInvoice"
        ]
      },
      "selectedClientBillingSummary": {
        "contextId": "selectedClientBillingSummary",
        "businessObject": "ClientBillingSummary",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "clientId",
        "sourceRefs": [
          "issueProjectInvoice.inspectClientBillingSummary"
        ],
        "consumerStepRefs": [
          "issueProjectInvoice.inspectClientBillingSummary"
        ]
      },
      "selectedInvoice": {
        "contextId": "selectedInvoice",
        "businessObject": "Invoice",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "invoiceId",
        "sourceRefs": [
          "issueProjectInvoice.createInvoice",
          "issueProjectInvoice.handoffInvoiceToClient"
        ],
        "consumerStepRefs": [
          "issueProjectInvoice.handoffInvoiceToClient"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:8885b209892bab2b2cfb2dc50b3f17b24938dab59a6afcb19ca4b40b233ddfc1",
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
        "stepId": "inspectClientBillingSummary",
        "useCaseRefs": [
          "inspectClientBillingSummary"
        ]
      },
      {
        "stepId": "createInvoice",
        "useCaseRefs": [
          "createInvoice"
        ]
      },
      {
        "stepId": "handoffInvoiceToClient",
        "useCaseRefs": [
          "handoffInvoiceToClient"
        ]
      }
    ],
    "transitionRefs": [
      "makeInvoiceAvailableToClient"
    ],
    "realizationHash": "sha256:d95dc8221584087f1ee51bd6d5d5231625781ea19e340ad6c4d27d13ab1a115e"
  }
} as const satisfies Ns4JourneyArtifact;

export type IssueProjectInvoiceJourneyType = typeof issueProjectInvoiceJourney;

export default issueProjectInvoiceJourney;
