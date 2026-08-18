/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectScheduleRiskAssessment.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const inspectScheduleRiskAssessmentUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectScheduleRiskAssessment",
  "title": "Consultar tarefas em risco de atraso",
  "kind": "query",
  "compiledFrom": [
    "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment"
  ],
  "description": "Consulta a avaliação de risco de atraso selecionada, identificando a tarefa de trabalho pendente associada e os indicadores que explicam seu risco.",
  "contexts": {
    "requires": [
      "selectedScheduleRiskAssessment"
    ],
    "provides": [
      "selectedScheduleRiskAssessment"
    ]
  },
  "entityRefs": [
    "ScheduleRiskAssessment",
    "WorkTask"
  ],
  "useRules": [
    "unfinishedWorkTask"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:8440aeeebf25f29f1cc5048c8c8c29e2850586b732623265c5ef70614398b7cc"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectScheduleRiskAssessmentUseCaseType = typeof inspectScheduleRiskAssessmentUseCase;

export default inspectScheduleRiskAssessmentUseCase;
