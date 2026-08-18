/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/locateProject.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const locateProjectUseCase = {
  "schemaVersion": "2026-08-10-ns4-usecase-v3",
  "moduleName": "buildFlowFsm",
  "useCaseId": "locateProject",
  "title": "Selecionar a obra que exige atenção",
  "kind": "query",
  "compiledFrom": [
    "assignWorkTask.locateProject",
    "consultApprovedProjectChangeOrders.locateProject",
    "consultClientProjectUpdates.locateProject",
    "generateAndPublishProjectStatusReport.locateProject",
    "issueProjectInvoice.locateProject",
    "monitorDailyProjectRecords.locateProject",
    "recordProjectMaterialUsage.locateProject",
    "reviewProjectPortfolio.locateProject",
    "submitChangeOrder.locateProject"
  ],
  "description": "Seleciona uma obra e a estabelece como contexto para comportamentos subsequentes relacionados à sua execução, acompanhamento, alterações, faturamento ou comunicação.",
  "contexts": {
    "requires": [],
    "provides": [
      "selectedProject"
    ]
  },
  "entityRefs": [
    "Project"
  ],
  "useRules": [],
  "transitionRefs": [],
  "useCaseHash": "sha256:df1f986c401de9b9f668ef08a458f438a3e918369ab0b0edc7ff0306a4b2ffea"
} as const satisfies Ns4UseCaseArtifactV3;

export type LocateProjectUseCaseType = typeof locateProjectUseCase;

export default locateProjectUseCase;
