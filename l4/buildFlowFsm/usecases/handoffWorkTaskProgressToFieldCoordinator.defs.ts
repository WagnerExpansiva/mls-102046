/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffWorkTaskProgressToFieldCoordinator.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffWorkTaskProgressToFieldCoordinatorUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffWorkTaskProgressToFieldCoordinator",
  "title": "Informar o andamento ao coordenador",
  "kind": "command",
  "compiledFrom": [
    "updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator"
  ],
  "description": "Disponibiliza a tarefa de trabalho com seu andamento atualizado para acompanhamento.",
  "contexts": {
    "requires": [
      "selectedWorkTask"
    ],
    "provides": [
      "selectedWorkTask"
    ]
  },
  "entityRefs": [
    "WorkTask"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:538d2f374933019d924d7ed35dc92bec3728b437b7324bf54bcab28350f7b5a4"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffWorkTaskProgressToFieldCoordinatorUseCaseType = typeof handoffWorkTaskProgressToFieldCoordinatorUseCase;

export default handoffWorkTaskProgressToFieldCoordinatorUseCase;
