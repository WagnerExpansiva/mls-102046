/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectApprovedChangeOrders.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const inspectApprovedChangeOrdersUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectApprovedChangeOrders",
  "title": "Consultar as alterações aprovadas",
  "kind": "query",
  "compiledFrom": [
    "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders"
  ],
  "description": "Consulta uma ordem de mudança aprovada.",
  "contexts": {
    "requires": [
      "selectedChangeOrder"
    ],
    "provides": [
      "selectedChangeOrder"
    ]
  },
  "entityRefs": [
    "ChangeOrder"
  ],
  "useRules": [
    "clientVisibleApprovedChangeOrder"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:d3bce8eb240db7132d5c12bc6dbd7fb6a56c4d5f3e0344c7dea6ae3e26aeba97"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectApprovedChangeOrdersUseCaseType = typeof inspectApprovedChangeOrdersUseCase;

export default inspectApprovedChangeOrdersUseCase;
