/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffApprovedChangeOrderToBilling.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffApprovedChangeOrderToBillingUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffApprovedChangeOrderToBilling",
  "title": "Encaminhar a alteração aprovada ao faturamento",
  "kind": "command",
  "compiledFrom": [
    "approveChangeOrder.handoffApprovedChangeOrderToBilling"
  ],
  "description": "Disponibiliza a ordem de mudança aprovada para faturamento.",
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
    "approvedBillableChangeOrder"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:90ee8d5ba69e4d30ca9261db28ddad83a8db70aecb02011e4a89968b9db1eeaa"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffApprovedChangeOrderToBillingUseCaseType = typeof handoffApprovedChangeOrderToBillingUseCase;

export default handoffApprovedChangeOrderToBillingUseCase;
