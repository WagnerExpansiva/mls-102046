/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/locateClient.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const locateClientUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "locateClient",
  "title": "Localizar o cliente",
  "kind": "query",
  "compiledFrom": [
    "issueProjectInvoice.locateClient",
    "submitChangeOrder.locateClient"
  ],
  "description": "Localiza um cliente do catálogo compartilhado e disponibiliza sua identidade para o contexto subsequente.",
  "contexts": {
    "requires": [],
    "provides": [
      "selectedClient"
    ]
  },
  "entityRefs": [
    "Client"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:bf7475237f836e765e5b5a336c8f739fc031cc539e1c5527c7e7ccffa9ccbacf"
} as const satisfies Ns4UseCaseArtifactV3;

export type LocateClientUseCaseType = typeof locateClientUseCase;

export default locateClientUseCase;
