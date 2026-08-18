/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/locateInventoryItem.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const locateInventoryItemUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "locateInventoryItem",
  "title": "Selecionar o material consumido",
  "kind": "query",
  "compiledFrom": [
    "recordProjectMaterialUsage.locateInventoryItem"
  ],
  "description": "Localiza e seleciona um item de estoque ativo do catálogo compartilhado para identificar o material consumido.",
  "contexts": {
    "requires": [],
    "provides": [
      "selectedInventoryItem"
    ]
  },
  "entityRefs": [
    "InventoryItem"
  ],
  "useRules": [
    "selectableInventoryItem"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:c9cdc4ad2758962d31e7e08f27cc17a0b6457a3db4886a7812d6698291ee2fa5"
} as const satisfies Ns4UseCaseArtifactV3;

export type LocateInventoryItemUseCaseType = typeof locateInventoryItemUseCase;

export default locateInventoryItemUseCase;
