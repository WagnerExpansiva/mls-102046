/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffProjectToFieldCoordinator.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffProjectToFieldCoordinatorUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffProjectToFieldCoordinator",
  "title": "Encaminhar a obra para acompanhamento de campo",
  "kind": "command",
  "compiledFrom": [
    "reviewProjectPortfolio.handoffProjectToFieldCoordinator"
  ],
  "description": "Formaliza o encaminhamento da obra para acompanhamento de campo, estabelecendo sua atribuição de coordenação ativa.",
  "contexts": {
    "requires": [
      "selectedProject"
    ],
    "provides": [
      "selectedProject"
    ]
  },
  "entityRefs": [
    "Project",
    "ProjectCoordinationAssignment"
  ],
  "useRules": [
    "activeProjectCoordination",
    "ongoingProject"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:eff1ca6ab04b08d2359dcb898c1fb7e979db237bbbe2086fae9ea542d610d24c"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffProjectToFieldCoordinatorUseCaseType = typeof handoffProjectToFieldCoordinatorUseCase;

export default handoffProjectToFieldCoordinatorUseCase;
