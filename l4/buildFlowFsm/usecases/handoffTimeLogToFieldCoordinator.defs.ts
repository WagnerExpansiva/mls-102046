/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffTimeLogToFieldCoordinator.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const handoffTimeLogToFieldCoordinatorUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffTimeLogToFieldCoordinator",
  "title": "Encaminhar o registro diário",
  "kind": "command",
  "compiledFrom": [
    "recordWorkTime.handoffTimeLogToFieldCoordinator"
  ],
  "description": "Encaminha o registro diário de horas para acompanhamento da execução.",
  "contexts": {
    "requires": [
      "selectedTimeLog"
    ],
    "provides": [
      "selectedTimeLog"
    ]
  },
  "entityRefs": [
    "TimeLog"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:794b710651752c586dc19c02fcb74e955113a6171a7905f34649d7d9b21b4086"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffTimeLogToFieldCoordinatorUseCaseType = typeof handoffTimeLogToFieldCoordinatorUseCase;

export default handoffTimeLogToFieldCoordinatorUseCase;
