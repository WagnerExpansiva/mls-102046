/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/InventoryBalance.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityInventoryBalance = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "InventoryBalance",
  "title": "Saldo de estoque",
  "description": "Posição operacional atual de disponibilidade de um item de estoque para consumo, incluindo o saldo físico e o custo aplicável ao apontamento.",
  "kind": "core",
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
      "fieldId": "inventoryBalanceId",
      "title": "Identificador do saldo de estoque",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas.",
      "constraints": [
        {
          "constraintId": "uniqueInventoryBalanceId",
          "kind": "unique",
          "value": "true",
          "description": "Cada saldo de estoque possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "inventoryItemId",
      "title": "Item de estoque",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto, não digitada como identificador bruto.",
      "constraints": []
    },
    {
      "fieldId": "physicalQuantity",
      "title": "Quantidade física disponível",
      "type": "number",
      "required": true,
      "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo.",
      "constraints": []
    },
    {
      "fieldId": "applicableUnitCost",
      "title": "Custo unitário aplicável",
      "type": "money",
      "required": true,
      "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra.",
      "constraints": []
    },
    {
      "fieldId": "status",
      "title": "Status do saldo",
      "type": "string",
      "required": true,
      "description": "Estado operacional que indica se o saldo pode atender consumo, está esgotado ou foi desativado.",
      "constraints": [
        {
          "constraintId": "inventoryBalanceStatusEnum",
          "kind": "enum",
          "value": "[\"available\",\"depleted\",\"retired\"]",
          "description": "O status do saldo deve corresponder a um estado do ciclo de vida definido para o saldo de estoque.",
          "source": "journey"
        }
      ],
      "enum": [
        "available",
        "depleted",
        "retired"
      ]
    }
  ],
  "lifecycleStates": [
    "available",
    "depleted",
    "retired"
  ],
  "statusEnum": [
    "available",
    "depleted",
    "retired"
  ],
  "initialState": "available",
  "terminalStates": [
    "retired"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "availableInventoryBalance",
      "description": "Um saldo pode atender consumo quando estiver disponível; a quantidade física positiva é verificada no detalhamento do registro.",
      "stateIds": [
        "available"
      ],
      "source": "journey"
    }
  ],
  "useRules": [
    "availableInventoryBalance"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "inventoryBalanceId",
    "notes": "Saldo operacional separado do catálogo MDM para não armazenar balanços ou histórico transacional em dados mestres."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityInventoryBalanceType = typeof buildFlowFsmEntityInventoryBalance;

export default buildFlowFsmEntityInventoryBalance;
