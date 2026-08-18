/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/inspectProjectDashboard.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const inspectProjectDashboardUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "inspectProjectDashboard",
  "title": "Consultar o painel de obras",
  "kind": "query",
  "compiledFrom": [
    "reviewProjectPortfolio.inspectProjectDashboard"
  ],
  "description": "Consulta o painel de obras para acompanhamento gerencial das obras ativas, seu desempenho de custos e suas tarefas próximas.",
  "contexts": {
    "requires": [
      "selectedProjectDashboard"
    ],
    "provides": [
      "selectedProjectDashboard"
    ]
  },
  "entityRefs": [
    "Project",
    "ProjectDashboard"
  ],
  "useRules": [
    "activeProjectCostVisibility"
  ],
  "transitionRefs": [],
  "useCaseHash": "sha256:4180d4fd4c2c172669fb0ebe96017f66e453b2616e01a6cac44572042a179c64"
} as const satisfies Ns4UseCaseArtifactV3;

export type InspectProjectDashboardUseCaseType = typeof inspectProjectDashboardUseCase;

export default inspectProjectDashboardUseCase;
