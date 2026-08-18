/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/updateWorkTask.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const updateWorkTaskUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "updateWorkTask",
  "title": "Registrar o andamento da tarefa",
  "kind": "command",
  "compiledFrom": [
    "updateWorkTaskProgress.updateWorkTask"
  ],
  "description": "Registra o status e o andamento atual de uma tarefa de trabalho no contexto da obra selecionada.",
  "contexts": {
    "requires": [
      "selectedProject",
      "selectedWorkTask"
    ],
    "provides": [
      "selectedWorkTask"
    ]
  },
  "entityRefs": [
    "Project",
    "WorkTask"
  ],
  "useRules": [
    "onlyAssignedWorkerReportsTaskProgress"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:379d33343f207f490a23cff1d27db97434deada5b8336fbf08b267038c57cf21"
} as const satisfies Ns4UseCaseArtifactV3;

export type UpdateWorkTaskUseCaseType = typeof updateWorkTaskUseCase;

export default updateWorkTaskUseCase;
