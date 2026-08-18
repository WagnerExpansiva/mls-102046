/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/InvoiceChangeOrder.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityInvoiceChangeOrder = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "InvoiceChangeOrder",
  "title": "Aplicação de ordem de mudança na fatura",
  "description": "Vínculo durável que identifica cada ordem de mudança aprovada incorporada a uma fatura e o valor efetivamente faturado dessa alteração.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "issueProjectInvoice",
      "consultApprovedProjectChangeOrders"
    ],
    "featureIds": [
      "clientBilling",
      "changeOrderControl"
    ],
    "authorityRefs": [
      "buildflowfsm:billing",
      "buildflowfsm:clientupdates"
    ]
  },
  "fields": [
    {
      "fieldId": "invoiceChangeOrderId",
      "title": "Identificador da aplicação de ordem de mudança na fatura",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada.",
      "constraints": [
        {
          "constraintId": "uniqueInvoiceChangeOrderId",
          "kind": "unique",
          "value": "true",
          "description": "Cada aplicação de ordem de mudança na fatura possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "invoiceId",
      "title": "Fatura",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança.",
      "constraints": []
    },
    {
      "fieldId": "changeOrderId",
      "title": "Ordem de mudança",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura.",
      "constraints": []
    },
    {
      "fieldId": "billedAmount",
      "title": "Valor faturado",
      "type": "money",
      "required": true,
      "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [
    "invoiceIncludesApprovedChangeOrdersOnly"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "invoiceChangeOrderId",
    "notes": "Associação transacional de faturamento que evita inferir, sem registro, quais alterações aprovadas foram incluídas em cada fatura."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityInvoiceChangeOrderType = typeof buildFlowFsmEntityInvoiceChangeOrder;

export default buildFlowFsmEntityInvoiceChangeOrder;
