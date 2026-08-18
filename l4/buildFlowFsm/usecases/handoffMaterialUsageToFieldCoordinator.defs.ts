/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffMaterialUsageToFieldCoordinator.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffMaterialUsageToFieldCoordinatorUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffMaterialUsageToFieldCoordinator",
  "title": "Informar o consumo ao coordenador",
  "kind": "command",
  "compiledFrom": [
    "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator"
  ],
  "description": "Disponibiliza o consumo de material registrado para acompanhamento operacional.",
  "contexts": {
    "requires": [
      "selectedMaterialUsage"
    ],
    "provides": [
      "selectedMaterialUsage"
    ]
  },
  "entityRefs": [
    "MaterialUsage"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:c8eaea931a885f46e3c583c518d63a220a86b1c8e981d649fcdf990897571341"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffMaterialUsageToFieldCoordinatorUseCaseType = typeof handoffMaterialUsageToFieldCoordinatorUseCase;

export default handoffMaterialUsageToFieldCoordinatorUseCase;
