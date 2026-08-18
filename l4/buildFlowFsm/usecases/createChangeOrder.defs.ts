/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/createChangeOrder.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const createChangeOrderUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "createChangeOrder",
  "title": "Registrar a alteração proposta",
  "kind": "command",
  "compiledFrom": [
    "submitChangeOrder.createChangeOrder"
  ],
  "description": "Registra uma ordem de mudança proposta vinculada ao cliente e à obra selecionados.",
  "contexts": {
    "requires": [
      "selectedClient",
      "selectedProject"
    ],
    "provides": [
      "selectedChangeOrder"
    ]
  },
  "entityRefs": [
    "ChangeOrder",
    "Client",
    "Project"
  ],
  "useRules": [
    "changeOrderRequiresClientAndProject"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:8684ecca44ae0be801ea46f63792e1205366cc221f49c9f62a97ee56fc2b68dd"
} as const satisfies Ns4UseCaseArtifactV3;

export type CreateChangeOrderUseCaseType = typeof createChangeOrderUseCase;

export default createChangeOrderUseCase;
