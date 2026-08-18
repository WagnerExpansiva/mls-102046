/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/declineChangeOrderDecision.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const declineChangeOrderDecisionUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "declineChangeOrderDecision",
  "title": "Recusar a ordem de mudança",
  "kind": "command",
  "compiledFrom": [
    "declineChangeOrder.declineChangeOrderDecision"
  ],
  "description": "Recusa uma ordem de mudança submetida e registra a decisão correspondente.",
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
    "managerActionableChangeOrder"
  ],
  "transitionRefs": [
    "declineChangeOrder"
  ],
  "useCaseHash": "sha256:6e3005039306e8655d455d42af124b2891e67bb46692709b67ee443d86ee672a"
} as const satisfies Ns4UseCaseArtifactV3;

export type DeclineChangeOrderDecisionUseCaseType = typeof declineChangeOrderDecisionUseCase;

export default declineChangeOrderDecisionUseCase;
