/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/locateFieldWorker.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const locateFieldWorkerUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "locateFieldWorker",
  "title": "Selecionar o trabalhador responsável",
  "kind": "query",
  "compiledFrom": [
    "assignWorkTask.locateFieldWorker",
    "recordWorkTime.locateFieldWorker"
  ],
  "description": "Localiza um trabalhador de campo e disponibiliza sua identidade canônica para vinculação a uma tarefa de trabalho ou a um registro de horas.",
  "contexts": {
    "requires": [],
    "provides": [
      "selectedFieldWorker"
    ]
  },
  "entityRefs": [
    "FieldWorker"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:de8a75e9a5646526c5696e74cd6fdc584c23a4843954f5589731e2e9d352e062"
} as const satisfies Ns4UseCaseArtifactV3;

export type LocateFieldWorkerUseCaseType = typeof locateFieldWorkerUseCase;

export default locateFieldWorkerUseCase;
