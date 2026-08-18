/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/monitorDailyProjectRecords.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const monitorDailyProjectRecordsJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "monitorDailyProjectRecords",
  "revision": 1,
  "business": {
    "actorRef": "fieldCoordinator",
    "title": "Acompanhar registros diários da obra",
    "goal": "Consultar horas e materiais recebidos para acompanhar execução e cronograma.",
    "entry": {
      "mode": "contextOrLookup",
      "preferredFromJourneyRef": "recordProjectMaterialUsage"
    },
    "steps": [
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Localizar a obra acompanhada",
        "description": "Uma obra ativa está selecionada para acompanhamento.",
        "featureRefs": [
          "dailyFieldLogging",
          "projectMaterialTracking"
        ]
      },
      {
        "stepId": "inspectProjectTimeLogs",
        "kind": "inspect",
        "entity": "TimeLog",
        "title": "Consultar os registros diários de horas",
        "description": "Registros de horas da obra estão visíveis.",
        "featureRefs": [
          "dailyFieldLogging",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "inspectProjectMaterialUsages",
        "kind": "inspect",
        "entity": "MaterialUsage",
        "title": "Consultar os consumos de materiais",
        "description": "Consumos associados à obra estão visíveis.",
        "featureRefs": [
          "projectMaterialTracking",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "inspectProjectExecutionOverview",
        "kind": "inspect",
        "entity": "ProjectExecutionOverview",
        "title": "Acompanhar a execução com os registros diários",
        "description": "Andamento, registros e próximos prazos estão consolidados.",
        "featureRefs": [
          "dailyFieldLogging",
          "projectMaterialTracking"
        ]
      }
    ],
    "outcome": {
      "statement": "O coordenador acompanha registros diários para alinhar execução ao cronograma.",
      "evidence": [
        "TimeLogs e consumos da obra estão visíveis.",
        "A execução considera apontamentos e próximos prazos."
      ]
    },
    "useRules": [
      "fieldCoordinatorSeesProjectDailyRecords"
    ]
  },
  "businessHash": "sha256:d30f1bb4a9e2b06ee2b5b83316e6f2ea789c6c7c4634b9cbdc720b55dbdf49e8",
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
          "monitorDailyProjectRecords.entry",
          "monitorDailyProjectRecords.locateProject"
        ],
        "consumerStepRefs": []
      },
      "selectedTimeLog": {
        "contextId": "selectedTimeLog",
        "businessObject": "TimeLog",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "timeLogId",
        "sourceRefs": [
          "monitorDailyProjectRecords.inspectProjectTimeLogs"
        ],
        "consumerStepRefs": [
          "monitorDailyProjectRecords.inspectProjectTimeLogs"
        ]
      },
      "selectedMaterialUsage": {
        "contextId": "selectedMaterialUsage",
        "businessObject": "MaterialUsage",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "materialUsageId",
        "sourceRefs": [
          "monitorDailyProjectRecords.inspectProjectMaterialUsages"
        ],
        "consumerStepRefs": [
          "monitorDailyProjectRecords.inspectProjectMaterialUsages"
        ]
      },
      "selectedProjectExecutionOverview": {
        "contextId": "selectedProjectExecutionOverview",
        "businessObject": "ProjectExecutionOverview",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "monitorDailyProjectRecords.inspectProjectExecutionOverview"
        ],
        "consumerStepRefs": [
          "monitorDailyProjectRecords.inspectProjectExecutionOverview"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:d30f1bb4a9e2b06ee2b5b83316e6f2ea789c6c7c4634b9cbdc720b55dbdf49e8",
    "steps": [
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "inspectProjectTimeLogs",
        "useCaseRefs": [
          "inspectProjectTimeLogs"
        ]
      },
      {
        "stepId": "inspectProjectMaterialUsages",
        "useCaseRefs": [
          "inspectProjectMaterialUsages"
        ]
      },
      {
        "stepId": "inspectProjectExecutionOverview",
        "useCaseRefs": [
          "inspectProjectExecutionOverview"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:d25f88887da728895742ab1df29aecf32ca0dbc504b28b6205f0498ed85559be"
  }
} as const satisfies Ns4JourneyArtifact;

export type MonitorDailyProjectRecordsJourneyType = typeof monitorDailyProjectRecordsJourney;

export default monitorDailyProjectRecordsJourney;
