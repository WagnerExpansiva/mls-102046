/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/publishStatusReport.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const publishStatusReportUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "publishStatusReport",
  "title": "Publicar o relatório de status",
  "kind": "command",
  "compiledFrom": [
    "generateAndPublishProjectStatusReport.publishStatusReport"
  ],
  "description": "Publica o relatório de status selecionado da obra com base na visão consolidada de execução, tornando-o disponível para comunicação.",
  "contexts": {
    "requires": [
      "selectedProject",
      "selectedProjectExecutionOverview",
      "selectedStatusReport"
    ],
    "provides": [
      "selectedStatusReport"
    ]
  },
  "entityRefs": [
    "Project",
    "ProjectExecutionOverview",
    "StatusReport"
  ],
  "useRules": [
    "statusReportUsesProjectExecutionData"
  ],
  "transitionRefs": [
    "publishStatusReport"
  ],
  "useCaseHash": "sha256:d96f06d34962fa339677056139fc952118138bcc6eb1caccea0c5ffdcad4fa79"
} as const satisfies Ns4UseCaseArtifactV3;

export type PublishStatusReportUseCaseType = typeof publishStatusReportUseCase;

export default publishStatusReportUseCase;
