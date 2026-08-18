/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectClientBillingSummary.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const inspectClientBillingSummaryUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectClientBillingSummary",
  "title": "Consultar o resumo de faturamento",
  "kind": "query",
  "compiledFrom": [
    "consultApprovedProjectChangeOrders.inspectClientBillingSummary",
    "consultClientProjectUpdates.inspectClientBillingSummary",
    "issueProjectInvoice.inspectClientBillingSummary"
  ],
  "description": "Consulta o resumo de faturamento do cliente e da obra, consolidando faturas, valores faturáveis e o reflexo comercial de ordens de mudança aprovadas.",
  "contexts": {
    "requires": [
      "selectedClientBillingSummary"
    ],
    "provides": [
      "selectedClientBillingSummary"
    ]
  },
  "entityRefs": [
    "ChangeOrder",
    "Client",
    "ClientBillingSummary",
    "Invoice",
    "Project"
  ],
  "useRules": [
    "invoiceIncludesApprovedChangeOrdersOnly"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:36dc9fa7bfbeb33f2b7ac25cfcfd57a4c6a433f5425ebbe150f54ea292ae2d0a"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectClientBillingSummaryUseCaseType = typeof inspectClientBillingSummaryUseCase;

export default inspectClientBillingSummaryUseCase;
