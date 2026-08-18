/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/Invoice.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityInvoice = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "Invoice",
  "title": "Fatura",
  "description": "Documento de faturamento emitido para um cliente e uma obra, com valor, referência comercial e disponibilidade controlada para consulta externa.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "issueProjectInvoice",
      "consultClientProjectUpdates",
      "consultApprovedProjectChangeOrders"
    ],
    "featureIds": [
      "clientBilling",
      "changeOrderControl",
      "clientCommunication"
    ],
    "authorityRefs": [
      "buildflowfsm:billing",
      "buildflowfsm:clientupdates"
    ]
  },
  "fields": [
    {
      "fieldId": "invoiceId",
      "title": "Identificador da fatura",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada.",
      "constraints": [
        {
          "constraintId": "uniqueInvoiceId",
          "kind": "unique",
          "value": "true",
          "description": "Cada fatura possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "clientId",
      "title": "Cliente",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto ao cliente para o qual a fatura é emitida.",
      "constraints": []
    },
    {
      "fieldId": "projectId",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto à obra faturável à qual a fatura está vinculada.",
      "constraints": []
    },
    {
      "fieldId": "commercialReference",
      "title": "Referência comercial",
      "type": "string",
      "required": true,
      "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente.",
      "constraints": []
    },
    {
      "fieldId": "amount",
      "title": "Valor da fatura",
      "type": "money",
      "required": true,
      "description": "Valor comercial total faturado para a obra.",
      "constraints": []
    },
    {
      "fieldId": "status",
      "title": "Status",
      "type": "string",
      "required": true,
      "description": "Situação da fatura, incluindo sua disponibilidade para consulta externa pelo cliente.",
      "constraints": [
        {
          "constraintId": "invoiceStatusEnum",
          "kind": "enum",
          "value": "[\"issued\",\"availableToClient\",\"cancelled\"]",
          "description": "O status da fatura deve corresponder a um estado válido do seu ciclo de vida.",
          "source": "inferred"
        }
      ],
      "enum": [
        "issued",
        "availableToClient",
        "cancelled"
      ]
    }
  ],
  "lifecycleStates": [
    "issued",
    "availableToClient",
    "cancelled"
  ],
  "statusEnum": [
    "issued",
    "availableToClient",
    "cancelled"
  ],
  "initialState": "issued",
  "terminalStates": [
    "cancelled"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "clientVisibleInvoice",
      "description": "Uma fatura é exibida ao cliente somente depois de disponibilizada para ele.",
      "stateIds": [
        "availableToClient"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "invoiceRequiresClientAndProject",
    "invoiceIncludesApprovedChangeOrdersOnly",
    "clientVisibleInvoice"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "invoiceId",
    "notes": "Documento comercial transacional; pagamentos e contabilidade geral permanecem fora do escopo."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityInvoiceType = typeof buildFlowFsmEntityInvoice;

export default buildFlowFsmEntityInvoice;
