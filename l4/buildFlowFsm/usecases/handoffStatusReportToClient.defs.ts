/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/handoffStatusReportToClient.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const handoffStatusReportToClientUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "handoffStatusReportToClient",
  "title": "Encaminhar o relatório ao cliente",
  "kind": "command",
  "compiledFrom": [
    "generateAndPublishProjectStatusReport.handoffStatusReportToClient"
  ],
  "description": "Disponibiliza um relatório de status publicado para comunicação externa.",
  "contexts": {
    "requires": [
      "selectedStatusReport"
    ],
    "provides": [
      "selectedStatusReport"
    ]
  },
  "entityRefs": [
    "StatusReport"
  ],
  "useRules": [
    "clientVisibleStatusReport"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:784525e68545d9f1ac16ffa1b31eeea39c3fb5a777829d4ecdba0339e34c566f"
} as const satisfies Ns4UseCaseArtifactV3;

export type HandoffStatusReportToClientUseCaseType = typeof handoffStatusReportToClientUseCase;

export default handoffStatusReportToClientUseCase;
