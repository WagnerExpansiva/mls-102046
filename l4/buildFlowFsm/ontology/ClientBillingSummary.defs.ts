/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ClientBillingSummary.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityClientBillingSummary = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ClientBillingSummary",
  "title": "Resumo de faturamento do cliente",
  "description": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente.",
  "kind": "projection",
  "ownership": "derived",
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
      "fieldId": "clientId",
      "title": "Cliente",
      "type": "uuid",
      "required": true,
      "description": "Identificador derivado do cliente selecionado para o qual o resumo de faturamento é consolidado.",
      "constraints": []
    },
    {
      "fieldId": "projectId",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Identificador derivado da obra faturável do cliente que segmenta o resumo.",
      "constraints": []
    },
    {
      "fieldId": "approvedChangeOrderReferences",
      "title": "Ordens de mudança aprovadas",
      "type": "json",
      "required": false,
      "description": "Referências derivadas às ordens de mudança aprovadas da obra que compõem o resumo comercial.",
      "constraints": []
    },
    {
      "fieldId": "invoiceReferences",
      "title": "Faturas",
      "type": "json",
      "required": false,
      "description": "Referências derivadas às faturas da obra consolidadas no resumo.",
      "constraints": []
    },
    {
      "fieldId": "approvedChangeOrderAmount",
      "title": "Valor de ordens de mudança aprovadas",
      "type": "money",
      "required": true,
      "description": "Total derivado dos valores das ordens de mudança aprovadas para a obra.",
      "constraints": []
    },
    {
      "fieldId": "billableAmount",
      "title": "Valor faturável",
      "type": "money",
      "required": true,
      "description": "Valor comercial derivado disponível para composição de faturamento da obra.",
      "constraints": []
    },
    {
      "fieldId": "invoicedAmount",
      "title": "Valor faturado",
      "type": "money",
      "required": true,
      "description": "Total derivado dos valores das faturas emitidas para a obra.",
      "constraints": []
    },
    {
      "fieldId": "clientAvailableAmount",
      "title": "Valor disponibilizado ao cliente",
      "type": "money",
      "required": true,
      "description": "Total derivado dos valores de faturamento disponibilizados para consulta do cliente.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [
    "invoiceRequiresClientAndProject",
    "invoiceIncludesApprovedChangeOrdersOnly",
    "clientSeesOnlyOwnProjectInformation",
    "clientSeesApprovedChangeOrdersOnly"
  ],
  "storage": {
    "target": "derived",
    "scope": "none",
    "notes": "Projeção derivada de cliente, obra, ordens aprovadas, aplicações em fatura e faturas; respeita a visibilidade externa publicada."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityClientBillingSummaryType = typeof buildFlowFsmEntityClientBillingSummary;

export default buildFlowFsmEntityClientBillingSummary;
