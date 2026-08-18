/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/MaterialUsage.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityMaterialUsage = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "MaterialUsage",
  "title": "Consumo de material",
  "description": "Apontamento de material efetivamente consumido em uma obra, vinculado ao item e ao saldo de estoque que suporta disponibilidade e custo realizado.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "recordProjectMaterialUsage",
      "generateAndPublishProjectStatusReport",
      "monitorDailyProjectRecords"
    ],
    "featureIds": [
      "projectMaterialTracking",
      "jobCostTracking",
      "aiStatusReporting"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldcoord",
      "buildflowfsm:fieldlogs",
      "buildflowfsm:statuspublish"
    ]
  },
  "fields": [
    {
      "fieldId": "materialUsageId",
      "title": "ID do consumo de material",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas.",
      "constraints": [
        {
          "constraintId": "uniqueMaterialUsageId",
          "kind": "unique",
          "value": "true",
          "description": "Cada apontamento de consumo possui um identificador estável único.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "status",
      "title": "Status",
      "type": "string",
      "required": true,
      "description": "Situação do apontamento de consumo para determinar sua elegibilidade no custo realizado e na execução consolidada.",
      "constraints": [
        {
          "constraintId": "materialUsageStatusEnum",
          "kind": "enum",
          "value": "[\"recorded\",\"voided\"]",
          "description": "O consumo pode estar registrado ou anulado.",
          "source": "inferred"
        }
      ],
      "enum": [
        "recorded",
        "voided"
      ]
    },
    {
      "fieldId": "projectId",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto à obra contra a qual o material foi efetivamente consumido.",
      "constraints": []
    },
    {
      "fieldId": "inventoryItemId",
      "title": "Item de estoque",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto ao item de material efetivamente utilizado.",
      "constraints": []
    },
    {
      "fieldId": "inventoryBalanceId",
      "title": "Saldo de estoque de origem",
      "type": "uuid",
      "required": true,
      "description": "Referência ao saldo operacional que suportou o consumo, para manter a rastreabilidade de disponibilidade e custo.",
      "constraints": []
    },
    {
      "fieldId": "quantity",
      "title": "Quantidade consumida",
      "type": "number",
      "required": true,
      "description": "Quantidade do item efetivamente consumida na obra.",
      "constraints": [
        {
          "constraintId": "positiveConsumedQuantity",
          "kind": "custom",
          "value": "positive",
          "description": "A quantidade informada deve ser maior que zero.",
          "source": "journey"
        }
      ]
    },
    {
      "fieldId": "usageDescription",
      "title": "Descrição do consumo",
      "type": "text",
      "required": true,
      "description": "Descrição informada do consumo de material realizado em campo.",
      "constraints": []
    },
    {
      "fieldId": "consumedOn",
      "title": "Data do consumo",
      "type": "date",
      "required": true,
      "description": "Data em que o material foi efetivamente consumido na obra.",
      "constraints": []
    },
    {
      "fieldId": "unitCostBasis",
      "title": "Base de custo unitário",
      "type": "money",
      "required": true,
      "description": "Custo unitário preservado como base para o custeio realizado do consumo.",
      "constraints": []
    }
  ],
  "lifecycleStates": [
    "recorded",
    "voided"
  ],
  "statusEnum": [
    "recorded",
    "voided"
  ],
  "initialState": "recorded",
  "terminalStates": [
    "voided"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "costEligibleMaterialUsage",
      "description": "Somente consumos registrados compõem o custo realizado e a execução consolidada da obra.",
      "stateIds": [
        "recorded"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "materialUsageRequiresActiveProjectAndAvailableInventory",
    "costEligibleMaterialUsage"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "materialUsageId",
    "notes": "Fato transacional de consumo que preserva quantidade, item, obra e base de custo usada no custeio."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityMaterialUsageType = typeof buildFlowFsmEntityMaterialUsage;

export default buildFlowFsmEntityMaterialUsage;
