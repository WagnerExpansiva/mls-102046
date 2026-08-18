/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffWorkTaskToFieldWorker.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffWorkTaskToFieldWorkerUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffWorkTaskToFieldWorker",
  "title": "Encaminhar a tarefa ao trabalhador",
  "kind": "command",
  "compiledFrom": [
    "assignWorkTask.handoffWorkTaskToFieldWorker"
  ],
  "description": "Encaminha uma tarefa de trabalho ao trabalhador de campo responsável para execução.",
  "contexts": {
    "requires": [
      "selectedWorkTask"
    ],
    "provides": [
      "selectedWorkTask"
    ]
  },
  "entityRefs": [
    "FieldWorker",
    "WorkTask"
  ],
  "useRules": [
    "workTaskRequiresAssigneeAndDueDate"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:dc0e5851e3286a654d4b00c6c20cffccd18aa43871294fbbc93322e929df7cf1"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffWorkTaskToFieldWorkerUseCaseType = typeof handoffWorkTaskToFieldWorkerUseCase;

export default handoffWorkTaskToFieldWorkerUseCase;
