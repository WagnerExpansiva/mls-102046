/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffInvoiceToClient.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const handoffInvoiceToClientUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffInvoiceToClient",
  "title": "Disponibilizar a fatura ao cliente",
  "kind": "command",
  "compiledFrom": [
    "issueProjectInvoice.handoffInvoiceToClient"
  ],
  "description": "Disponibiliza uma fatura emitida para consulta.",
  "contexts": {
    "requires": [
      "selectedInvoice"
    ],
    "provides": [
      "selectedInvoice"
    ]
  },
  "entityRefs": [
    "Invoice"
  ],
  "useRules": [
    "clientVisibleInvoice"
  ],
  "transitionRefs": [
    "makeInvoiceAvailableToClient"
  ],
  "useCaseHash": "sha256:94bd3aa897604250a29bfd44a174609e6078128f65993caf29fe36673dc68582"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffInvoiceToClientUseCaseType = typeof handoffInvoiceToClientUseCase;

export default handoffInvoiceToClientUseCase;
