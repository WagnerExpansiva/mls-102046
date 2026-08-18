/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/locateWorkTask.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const locateWorkTaskUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "locateWorkTask",
  "title": "Localizar a tarefa atribuída",
  "kind": "query",
  "compiledFrom": [
    "recordWorkTime.locateWorkTask",
    "updateWorkTaskProgress.locateWorkTask"
  ],
  "description": "Localiza uma tarefa de trabalho e disponibiliza a tarefa selecionada para o comportamento seguinte.",
  "contexts": {
    "requires": [],
    "provides": [
      "selectedWorkTask"
    ]
  },
  "entityRefs": [
    "WorkTask"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:0e593303eb62dfa053e1e2eb2e18150fce32df2dc49292d9db295c390b844a4c"
} as const satisfies Ns4UseCaseArtifactV3;

export type LocateWorkTaskUseCaseType = typeof locateWorkTaskUseCase;

export default locateWorkTaskUseCase;
