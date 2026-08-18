/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/createStatusReport.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const createStatusReportUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "createStatusReport",
  "title": "Gerar relatório profissional de status",
  "kind": "command",
  "compiledFrom": [
    "generateAndPublishProjectStatusReport.createStatusReport"
  ],
  "description": "Gera um relatório profissional de status em rascunho para a obra selecionada, consolidando os dados de execução e os riscos de atraso identificados para revisão.",
  "contexts": {
    "requires": [
      "selectedProject",
      "selectedProjectExecutionOverview"
    ],
    "provides": [
      "selectedStatusReport"
    ]
  },
  "entityRefs": [
    "Project",
    "ProjectExecutionOverview",
    "ScheduleRiskAssessment",
    "StatusReport"
  ],
  "useRules": [
    "statusReportUsesProjectExecutionData"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:147d7cbf19b990cbb982dcc2c53c8931447578f7fda2242a7acea9161ca854e2"
} as const satisfies Ns4UseCaseArtifactV3;

export type CreateStatusReportUseCaseType = typeof createStatusReportUseCase;

export default createStatusReportUseCase;
