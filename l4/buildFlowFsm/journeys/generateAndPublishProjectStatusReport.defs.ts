/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/generateAndPublishProjectStatusReport.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const generateAndPublishProjectStatusReportJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "generateAndPublishProjectStatusReport",
  "revision": 1,
  "business": {
    "actorRef": "projectManager",
    "title": "Gerar e publicar relatório de status",
    "goal": "Produzir comunicação profissional sobre a obra, incluindo riscos de atraso, e disponibilizá-la ao cliente.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "reviewProjectPortfolio"
    },
    "steps": [
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Localizar a obra",
        "description": "Uma obra está selecionada para comunicação de status.",
        "featureRefs": [
          "aiStatusReporting",
          "clientCommunication"
        ]
      },
      {
        "stepId": "inspectProjectExecutionOverview",
        "kind": "inspect",
        "entity": "ProjectExecutionOverview",
        "title": "Consultar os dados da execução",
        "description": "Tarefas, horas e materiais da obra estão consolidados.",
        "featureRefs": [
          "aiStatusReporting",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "inspectScheduleRiskAssessment",
        "kind": "inspect",
        "entity": "ScheduleRiskAssessment",
        "title": "Consultar tarefas em risco de atraso",
        "description": "Tarefas em risco e seus indicadores estão identificados.",
        "featureRefs": [
          "aiStatusReporting",
          "projectScheduleVisibility"
        ]
      },
      {
        "stepId": "createStatusReport",
        "kind": "act",
        "entity": "StatusReport",
        "title": "Gerar relatório profissional de status",
        "description": "Um relatório baseado nos dados da obra fica gerado para revisão.",
        "featureRefs": [
          "aiStatusReporting",
          "clientCommunication"
        ]
      },
      {
        "stepId": "publishStatusReport",
        "kind": "decide",
        "entity": "StatusReport",
        "title": "Publicar o relatório de status",
        "description": "O relatório fica aprovado para comunicação ao cliente.",
        "featureRefs": [
          "aiStatusReporting",
          "clientCommunication"
        ]
      },
      {
        "stepId": "handoffStatusReportToClient",
        "kind": "handoff",
        "entity": "StatusReport",
        "title": "Encaminhar o relatório ao cliente",
        "description": "O cliente recebe o relatório publicado.",
        "featureRefs": [
          "aiStatusReporting",
          "clientCommunication"
        ],
        "targetProfile": "client"
      }
    ],
    "outcome": {
      "statement": "O cliente recebe relatório de status com visibilidade sobre riscos de atraso.",
      "evidence": [
        "O relatório consolida tarefas, horas, materiais e riscos.",
        "A publicação e seu responsável são observáveis.",
        "O cliente recebe o relatório publicado."
      ]
    },
    "useRules": [
      "statusReportUsesProjectExecutionData",
      "onlyProjectManagerPublishesStatusReport"
    ]
  },
  "businessHash": "sha256:c8d871cd8eeebd637bdcc544ddec3c72b243892f213a611e2ba0097521b2ab78",
  "resolution": {
    "status": "compiled",
    "contexts": {
      "selectedProject": {
        "contextId": "selectedProject",
        "businessObject": "Project",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "generateAndPublishProjectStatusReport.entry",
          "generateAndPublishProjectStatusReport.locateProject"
        ],
        "consumerStepRefs": [
          "generateAndPublishProjectStatusReport.createStatusReport",
          "generateAndPublishProjectStatusReport.publishStatusReport"
        ]
      },
      "selectedProjectExecutionOverview": {
        "contextId": "selectedProjectExecutionOverview",
        "businessObject": "ProjectExecutionOverview",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "generateAndPublishProjectStatusReport.inspectProjectExecutionOverview"
        ],
        "consumerStepRefs": [
          "generateAndPublishProjectStatusReport.createStatusReport",
          "generateAndPublishProjectStatusReport.inspectProjectExecutionOverview",
          "generateAndPublishProjectStatusReport.publishStatusReport"
        ]
      },
      "selectedScheduleRiskAssessment": {
        "contextId": "selectedScheduleRiskAssessment",
        "businessObject": "ScheduleRiskAssessment",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment"
        ],
        "consumerStepRefs": [
          "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment"
        ]
      },
      "selectedStatusReport": {
        "contextId": "selectedStatusReport",
        "businessObject": "StatusReport",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "statusReportId",
        "sourceRefs": [
          "generateAndPublishProjectStatusReport.createStatusReport",
          "generateAndPublishProjectStatusReport.handoffStatusReportToClient",
          "generateAndPublishProjectStatusReport.publishStatusReport"
        ],
        "consumerStepRefs": [
          "generateAndPublishProjectStatusReport.handoffStatusReportToClient",
          "generateAndPublishProjectStatusReport.publishStatusReport"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:c8d871cd8eeebd637bdcc544ddec3c72b243892f213a611e2ba0097521b2ab78",
    "steps": [
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "inspectProjectExecutionOverview",
        "useCaseRefs": [
          "inspectProjectExecutionOverview"
        ]
      },
      {
        "stepId": "inspectScheduleRiskAssessment",
        "useCaseRefs": [
          "inspectScheduleRiskAssessment"
        ]
      },
      {
        "stepId": "createStatusReport",
        "useCaseRefs": [
          "createStatusReport"
        ]
      },
      {
        "stepId": "publishStatusReport",
        "useCaseRefs": [
          "publishStatusReport"
        ]
      },
      {
        "stepId": "handoffStatusReportToClient",
        "useCaseRefs": [
          "handoffStatusReportToClient"
        ]
      }
    ],
    "transitionRefs": [
      "publishStatusReport"
    ],
    "realizationHash": "sha256:f5dc6add6e3bfe7eb7d105ca1a0a340987f15f52d6686ecf77831ce187446247"
  }
} as const satisfies Ns4JourneyArtifact;

export type GenerateAndPublishProjectStatusReportJourneyType = typeof generateAndPublishProjectStatusReportJourney;

export default generateAndPublishProjectStatusReportJourney;
