/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/locateChangeOrder.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const locateChangeOrderUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "locateChangeOrder",
  "title": "Localizar a ordem de mudança submetida",
  "kind": "query",
  "compiledFrom": [
    "approveChangeOrder.locateChangeOrder",
    "declineChangeOrder.locateChangeOrder",
    "forwardChangeOrderForClientApproval.locateChangeOrder"
  ],
  "description": "Localiza uma ordem de mudança para que seja selecionada para tratamento subsequente.",
  "contexts": {
    "requires": [],
    "provides": [
      "selectedChangeOrder"
    ]
  },
  "entityRefs": [
    "ChangeOrder"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:55b04acf04493685aa27ce50b08bc7f1d39c87ebfc02f040b184e2624d75467a"
} as const satisfies Ns4UseCaseArtifactV3;

export type LocateChangeOrderUseCaseType = typeof locateChangeOrderUseCase;

export default locateChangeOrderUseCase;
