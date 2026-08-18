/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectStatusReport.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const inspectStatusReportUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectStatusReport",
  "title": "Consultar o relatório de status publicado",
  "kind": "query",
  "compiledFrom": [
    "consultClientProjectUpdates.inspectStatusReport"
  ],
  "description": "Consulta um relatório de status publicado da obra, incluindo os riscos de atraso comunicados.",
  "contexts": {
    "requires": [
      "selectedStatusReport"
    ],
    "provides": [
      "selectedStatusReport"
    ]
  },
  "entityRefs": [
    "ScheduleRiskAssessment",
    "StatusReport"
  ],
  "useRules": [
    "clientVisibleStatusReport"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:981256a66c8270b8290c5f793033300f1691359c5781b692b22df6e597ccfac4"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectStatusReportUseCaseType = typeof inspectStatusReportUseCase;

export default inspectStatusReportUseCase;
