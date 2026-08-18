/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/recordProjectMaterialUsage.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const recordProjectMaterialUsageJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "recordProjectMaterialUsage",
  "revision": 1,
  "business": {
    "actorRef": "fieldWorker",
    "title": "Registrar consumo de material da obra",
    "goal": "Rastrear materiais consumidos em uma obra para apoiar execução e custeio.",
    "entry": {
      "mode": "coldStart"
    },
    "steps": [
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Localizar a obra",
        "description": "Uma obra ativa do catálogo compartilhado está selecionada.",
        "featureRefs": [
          "projectMaterialTracking",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "locateInventoryItem",
        "kind": "locate",
        "entity": "InventoryItem",
        "title": "Selecionar o material consumido",
        "description": "Um item do catálogo compartilhado de materiais e estoque está selecionado.",
        "featureRefs": [
          "projectMaterialTracking"
        ]
      },
      {
        "stepId": "createMaterialUsage",
        "kind": "act",
        "entity": "MaterialUsage",
        "title": "Registrar o consumo de material",
        "description": "O consumo fica vinculado à obra e disponível para o custo realizado.",
        "featureRefs": [
          "projectMaterialTracking",
          "jobCostTracking"
        ]
      },
      {
        "stepId": "handoffMaterialUsageToFieldCoordinator",
        "kind": "handoff",
        "entity": "MaterialUsage",
        "title": "Informar o consumo ao coordenador",
        "description": "O coordenador recebe o consumo para acompanhamento.",
        "featureRefs": [
          "projectMaterialTracking"
        ],
        "targetProfile": "fieldCoordinator"
      }
    ],
    "outcome": {
      "statement": "O material consumido compõe o rastreamento e o custo realizado da obra.",
      "evidence": [
        "O consumo mantém vínculo com obra e item de estoque.",
        "O coordenador recebe o apontamento."
      ]
    },
    "useRules": [
      "materialUsageRequiresActiveProjectAndAvailableInventory"
    ]
  },
  "businessHash": "sha256:6a1aff3069802a281c21a0e2d32f888aeaa83d8657c97de3bc2afb4715dd6b28",
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
          "recordProjectMaterialUsage.locateProject"
        ],
        "consumerStepRefs": [
          "recordProjectMaterialUsage.createMaterialUsage"
        ]
      },
      "selectedInventoryItem": {
        "contextId": "selectedInventoryItem",
        "businessObject": "InventoryItem",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "inventoryItemId",
        "sourceRefs": [
          "recordProjectMaterialUsage.locateInventoryItem"
        ],
        "consumerStepRefs": [
          "recordProjectMaterialUsage.createMaterialUsage"
        ]
      },
      "selectedMaterialUsage": {
        "contextId": "selectedMaterialUsage",
        "businessObject": "MaterialUsage",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "materialUsageId",
        "sourceRefs": [
          "recordProjectMaterialUsage.createMaterialUsage",
          "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator"
        ],
        "consumerStepRefs": [
          "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:6a1aff3069802a281c21a0e2d32f888aeaa83d8657c97de3bc2afb4715dd6b28",
    "steps": [
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "locateInventoryItem",
        "useCaseRefs": [
          "locateInventoryItem"
        ]
      },
      {
        "stepId": "createMaterialUsage",
        "useCaseRefs": [
          "createMaterialUsage"
        ]
      },
      {
        "stepId": "handoffMaterialUsageToFieldCoordinator",
        "useCaseRefs": [
          "handoffMaterialUsageToFieldCoordinator"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:931352dfea0b6a29a8151f54a9836cef28039445cfeee64ef0e7ff105a125e48"
  }
} as const satisfies Ns4JourneyArtifact;

export type RecordProjectMaterialUsageJourneyType = typeof recordProjectMaterialUsageJourney;

export default recordProjectMaterialUsageJourney;
