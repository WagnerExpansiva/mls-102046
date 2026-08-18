/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffDeclinedChangeOrderToFieldCoordinator.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffDeclinedChangeOrderToFieldCoordinatorUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffDeclinedChangeOrderToFieldCoordinator",
  "title": "Devolver a decisão ao campo",
  "kind": "command",
  "compiledFrom": [
    "declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator"
  ],
  "description": "Encaminha a ordem de mudança recusada para o tratamento do resultado no campo.",
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
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:154693952f2037fe46a5c5aef9264bb77de8b31aeedbf0447b81d8e1135e9098"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffDeclinedChangeOrderToFieldCoordinatorUseCaseType = typeof handoffDeclinedChangeOrderToFieldCoordinatorUseCase;

export default handoffDeclinedChangeOrderToFieldCoordinatorUseCase;
