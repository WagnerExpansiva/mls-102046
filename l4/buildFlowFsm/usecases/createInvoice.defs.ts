/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/createInvoice.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const createInvoiceUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "createInvoice",
  "title": "Emitir a fatura",
  "kind": "command",
  "compiledFrom": [
    "issueProjectInvoice.createInvoice"
  ],
  "description": "Emite uma fatura vinculada ao cliente e à obra selecionados, incluindo apenas ordens de mudança aprovadas.",
  "contexts": {
    "requires": [
      "selectedClient",
      "selectedProject"
    ],
    "provides": [
      "selectedInvoice"
    ]
  },
  "entityRefs": [
    "ChangeOrder",
    "Client",
    "Invoice",
    "InvoiceChangeOrder",
    "Project"
  ],
  "useRules": [
    "invoiceIncludesApprovedChangeOrdersOnly",
    "invoiceRequiresClientAndProject"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:778f9dd1b8b39a76540133f8fa9ff0c79051d9c72e0ee52d0f19640c15da0fda"
} as const satisfies Ns4UseCaseArtifactV3;

export type CreateInvoiceUseCaseType = typeof createInvoiceUseCase;

export default createInvoiceUseCase;
