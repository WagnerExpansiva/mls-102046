/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectProjectExecutionOverview.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const inspectProjectExecutionOverviewUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectProjectExecutionOverview",
  "title": "Analisar a execução da obra",
  "kind": "query",
  "compiledFrom": [
    "generateAndPublishProjectStatusReport.inspectProjectExecutionOverview",
    "monitorDailyProjectRecords.inspectProjectExecutionOverview",
    "reviewProjectPortfolio.inspectProjectExecutionOverview"
  ],
  "description": "Consulta a visão consolidada da execução de uma obra, reunindo seu andamento, compromissos, registros de execução, custos realizados e impactos de alterações para acompanhamento e comunicação.",
  "contexts": {
    "requires": [
      "selectedProjectExecutionOverview"
    ],
    "provides": [
      "selectedProjectExecutionOverview"
    ]
  },
  "entityRefs": [
    "ProjectExecutionOverview"
  ],
  "useRules": [
    "activeProjectCostVisibility"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:be0f4994d53d1c61474e55fbd41476609cab1df4bf821859f421e6d99ab198c9"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectProjectExecutionOverviewUseCaseType = typeof inspectProjectExecutionOverviewUseCase;

export default inspectProjectExecutionOverviewUseCase;
