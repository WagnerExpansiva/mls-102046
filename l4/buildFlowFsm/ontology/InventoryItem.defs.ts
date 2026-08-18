/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/InventoryItem.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityInventoryItem = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "InventoryItem",
  "title": "Item de estoque",
  "description": "Catálogo mestre de material identificável e consumível em obras, com unidade de uso e referência de custo para os apontamentos.",
  "kind": "mdm",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "recordProjectMaterialUsage"
    ],
    "featureIds": [
      "projectMaterialTracking",
      "jobCostTracking"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldlogs"
    ]
  },
  "fields": [
    {
      "fieldId": "inventoryItemId",
      "title": "Identificador do item de estoque",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do item no catálogo mestre de materiais.",
      "constraints": [
        {
          "constraintId": "uniqueInventoryItemId",
          "kind": "unique",
          "value": "true",
          "description": "Cada item do catálogo possui um identificador estável único.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "name",
      "title": "Nome do material",
      "type": "string",
      "required": true,
      "description": "Nome pelo qual o material ou consumível é identificado no catálogo.",
      "constraints": []
    },
    {
      "fieldId": "description",
      "title": "Descrição",
      "type": "text",
      "required": false,
      "description": "Descrição complementar para distinguir e especificar o material no catálogo.",
      "constraints": []
    },
    {
      "fieldId": "unitOfMeasure",
      "title": "Unidade de uso",
      "type": "string",
      "required": true,
      "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco.",
      "constraints": []
    },
    {
      "fieldId": "referenceUnitCost",
      "title": "Custo unitário de referência",
      "type": "money",
      "required": true,
      "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra.",
      "constraints": []
    },
    {
      "fieldId": "status",
      "title": "Status",
      "type": "string",
      "required": true,
      "description": "Situação do item no catálogo, determinando se pode ser selecionado para consumo.",
      "constraints": [
        {
          "constraintId": "inventoryItemStatusValues",
          "kind": "enum",
          "value": "[\"active\",\"retired\"]",
          "description": "O status do item é ativo ou retirado.",
          "source": "journey"
        }
      ],
      "enum": [
        "active",
        "retired"
      ]
    }
  ],
  "lifecycleStates": [
    "active",
    "retired"
  ],
  "statusEnum": [
    "active",
    "retired"
  ],
  "initialState": "active",
  "terminalStates": [
    "retired"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "selectableInventoryItem",
      "description": "Um item pode ser selecionado para consumo quando estiver ativo.",
      "stateIds": [
        "active"
      ],
      "source": "journey"
    }
  ],
  "useRules": [
    "selectableInventoryItem"
  ],
  "storage": {
    "target": "mdm",
    "scope": "organization",
    "idField": "inventoryItemId",
    "mdmType": "buildFlowFsm.InventoryItem",
    "notes": "Catálogo mestre de materiais; saldos e histórico de consumo permanecem em registros operacionais."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityInventoryItemType = typeof buildFlowFsmEntityInventoryItem;

export default buildFlowFsmEntityInventoryItem;
