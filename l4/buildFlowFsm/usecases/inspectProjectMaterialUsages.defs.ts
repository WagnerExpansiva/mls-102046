/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectProjectMaterialUsages.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const inspectProjectMaterialUsagesUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectProjectMaterialUsages",
  "title": "Consultar os consumos de materiais",
  "kind": "query",
  "compiledFrom": [
    "monitorDailyProjectRecords.inspectProjectMaterialUsages"
  ],
  "description": "Consulta os consumos de materiais associados à obra.",
  "contexts": {
    "requires": [
      "selectedMaterialUsage"
    ],
    "provides": [
      "selectedMaterialUsage"
    ]
  },
  "entityRefs": [
    "MaterialUsage",
    "Project"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:e1fd23a1ddb51ddd77701a894715536efd9ad49d817cf3dd0b2f12bdae19270b"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectProjectMaterialUsagesUseCaseType = typeof inspectProjectMaterialUsagesUseCase;

export default inspectProjectMaterialUsagesUseCase;
