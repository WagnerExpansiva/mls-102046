/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/createTimeLog.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const createTimeLogUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "createTimeLog",
  "title": "Registrar as horas trabalhadas",
  "kind": "command",
  "compiledFrom": [
    "recordWorkTime.createTimeLog"
  ],
  "description": "Registra as horas trabalhadas por um trabalhador de campo para a tarefa de trabalho selecionada, preservando a base de custo de mão de obra da obra.",
  "contexts": {
    "requires": [
      "selectedWorkTask"
    ],
    "provides": [
      "selectedTimeLog"
    ]
  },
  "entityRefs": [
    "FieldWorker",
    "TimeLog",
    "WorkTask"
  ],
  "useRules": [
    "activeWorkTask",
    "timeLogRequiresWorkerTaskAndPositiveHours"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:7b9fb5252910fdb8b7df07600bd750a552c0a386a7193bafb108899632fa8228"
} as const satisfies Ns4UseCaseArtifactV3;

export type CreateTimeLogUseCaseType = typeof createTimeLogUseCase;

export default createTimeLogUseCase;
