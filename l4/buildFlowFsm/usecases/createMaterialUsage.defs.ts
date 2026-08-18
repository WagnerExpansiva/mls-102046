/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/createMaterialUsage.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const createMaterialUsageUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "createMaterialUsage",
  "title": "Registrar o consumo de material",
  "kind": "command",
  "compiledFrom": [
    "recordProjectMaterialUsage.createMaterialUsage"
  ],
  "description": "Registra o consumo de um item de material para uma obra, sustentado pelo saldo de estoque correspondente e disponível para a apuração do custo realizado.",
  "contexts": {
    "requires": [
      "selectedInventoryBalance",
      "selectedInventoryItem",
      "selectedProject"
    ],
    "provides": [
      "selectedMaterialUsage"
    ]
  },
  "entityRefs": [
    "InventoryBalance",
    "InventoryItem",
    "MaterialUsage",
    "Project"
  ],
  "useRules": [
    "materialUsageRequiresActiveProjectAndAvailableInventory"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:9a919420a82294b2e8a4dec0a705cf52425e27831ed2c0d6ed6d0f47ab9a396e"
} as const satisfies Ns4UseCaseArtifactV3;

export type CreateMaterialUsageUseCaseType = typeof createMaterialUsageUseCase;

export default createMaterialUsageUseCase;
