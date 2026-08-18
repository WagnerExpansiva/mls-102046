/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/approveChangeOrderDecision.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const approveChangeOrderDecisionUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "approveChangeOrderDecision",
  "title": "Aprovar a ordem de mudança",
  "kind": "command",
  "compiledFrom": [
    "approveChangeOrder.approveChangeOrderDecision"
  ],
  "description": "Registra a decisão de aprovação de uma ordem de mudança e a torna aprovada.",
  "contexts": {
    "requires": [
      "selectedChangeOrder",
      "selectedClient",
      "selectedProject"
    ],
    "provides": [
      "selectedChangeOrder"
    ]
  },
  "entityRefs": [
    "ChangeOrder",
    "ChangeOrderDecision"
  ],
  "useRules": [
    "clientApprovableChangeOrder"
  ],
  "transitionRefs": [
    "approveChangeOrder"
  ],
  "useCaseHash": "sha256:6da32c48c635d65df73999a4ebf62c98fa0b755db31cd25eac44b6153e18e265"
} as const satisfies Ns4UseCaseArtifactV3;

export type ApproveChangeOrderDecisionUseCaseType = typeof approveChangeOrderDecisionUseCase;

export default approveChangeOrderDecisionUseCase;
