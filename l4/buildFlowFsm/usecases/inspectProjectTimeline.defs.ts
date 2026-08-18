/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectProjectTimeline.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const inspectProjectTimelineUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectProjectTimeline",
  "title": "Consultar o cronograma da obra",
  "kind": "query",
  "compiledFrom": [
    "assignWorkTask.inspectProjectTimeline"
  ],
  "description": "Consulta o cronograma da obra selecionada, apresentando o sequenciamento das tarefas e seus prazos para planejamento.",
  "contexts": {
    "requires": [
      "selectedProjectTimeline"
    ],
    "provides": [
      "selectedProjectTimeline"
    ]
  },
  "entityRefs": [
    "Project",
    "ProjectTimeline",
    "WorkTask"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:883aebd8c8130a914d3109b1fe7c855a64a21934265bc85aabee67f1fb9b6a55"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectProjectTimelineUseCaseType = typeof inspectProjectTimelineUseCase;

export default inspectProjectTimelineUseCase;
