/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffChangeOrderToProjectManager.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffChangeOrderToProjectManagerUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffChangeOrderToProjectManager",
  "title": "Submeter a alteração para tratamento",
  "kind": "command",
  "compiledFrom": [
    "submitChangeOrder.handoffChangeOrderToProjectManager"
  ],
  "description": "Encaminha a ordem de mudança submetida para tratamento e decisão subsequente, preservando sua condição para possível recusa ou encaminhamento à aprovação do cliente.",
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
  "transitionRefs": [],
  "useCaseHash": "sha256:36b7fc60f60c8c189efdc2a012e20565eedeb94f9ff5dbc910c5fec03e116bed"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffChangeOrderToProjectManagerUseCaseType = typeof handoffChangeOrderToProjectManagerUseCase;

export default handoffChangeOrderToProjectManagerUseCase;
