/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/createWorkTask.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const createWorkTaskUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "createWorkTask",
  "title": "Registrar a tarefa atribuída",
  "kind": "command",
  "compiledFrom": [
    "assignWorkTask.createWorkTask"
  ],
  "description": "Registra uma nova tarefa de trabalho atribuída para a obra selecionada.",
  "contexts": {
    "requires": [
      "selectedProject"
    ],
    "provides": [
      "selectedWorkTask"
    ]
  },
  "entityRefs": [
    "FieldWorker",
    "Project",
    "WorkTask"
  ],
  "useRules": [
    "workTaskRequiresActiveProject",
    "workTaskRequiresAssigneeAndDueDate"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:3631cf176205165e2b6fc6de947366e6d9ba3224a775f9b1fb4a93bf3983aac6"
} as const satisfies Ns4UseCaseArtifactV3;

export type CreateWorkTaskUseCaseType = typeof createWorkTaskUseCase;

export default createWorkTaskUseCase;
