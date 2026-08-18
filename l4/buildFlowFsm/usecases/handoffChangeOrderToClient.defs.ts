/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffChangeOrderToClient.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffChangeOrderToClientUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffChangeOrderToClient",
  "title": "Solicitar aprovação do cliente",
  "kind": "command",
  "compiledFrom": [
    "forwardChangeOrderForClientApproval.handoffChangeOrderToClient"
  ],
  "description": "Encaminha uma ordem de mudança submetida para decisão de aprovação.",
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
    "managerActionableChangeOrder"
  ],
  "transitionRefs": [
    "handoffChangeOrderToClient"
  ],
  "useCaseHash": "sha256:427fe74b7e782016edae071449c88343eae03c0d863baaee87b37e491b2a1b07"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffChangeOrderToClientUseCaseType = typeof handoffChangeOrderToClientUseCase;

export default handoffChangeOrderToClientUseCase;
