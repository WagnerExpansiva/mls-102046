/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectProjectTimeLogs.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const inspectProjectTimeLogsUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectProjectTimeLogs",
  "title": "Consultar os registros diários de horas",
  "kind": "query",
  "compiledFrom": [
    "monitorDailyProjectRecords.inspectProjectTimeLogs"
  ],
  "description": "Consulta o registro diário de horas selecionado para acompanhamento da execução da obra.",
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
  "useCaseHash": "sha256:fbc9ba541ef769d454a060f557328e0458c79947f19645dec6f55d3c6383c2ca"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectProjectTimeLogsUseCaseType = typeof inspectProjectTimeLogsUseCase;

export default inspectProjectTimeLogsUseCase;
