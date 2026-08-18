/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ProjectDashboard.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityProjectDashboard = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ProjectDashboard",
  "title": "Painel de portfólio de obras",
  "description": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial.",
  "kind": "projection",
  "ownership": "derived",
  "sourceRefs": {
    "journeyIds": [
      "reviewProjectPortfolio"
    ],
    "featureIds": [
      "projectPortfolioMonitoring",
      "jobCostTracking",
      "projectScheduleVisibility"
    ],
    "authorityRefs": [
      "buildflowfsm:portfolio"
    ]
  },
  "fields": [
    {
      "fieldId": "activeProjects",
      "title": "Obras ativas",
      "type": "json",
      "required": true,
      "description": "Coleção derivada de obras ativas visíveis no portfólio, com suas referências de contexto e indicadores resumidos para seleção gerencial.",
      "constraints": []
    },
    {
      "fieldId": "activeProjectCount",
      "title": "Quantidade de obras ativas",
      "type": "integer",
      "required": true,
      "description": "Quantidade calculada de obras ativas apresentadas no painel.",
      "constraints": []
    },
    {
      "fieldId": "totalBudget",
      "title": "Orçamento total",
      "type": "money",
      "required": true,
      "description": "Soma calculada dos orçamentos das obras ativas apresentadas no painel.",
      "constraints": []
    },
    {
      "fieldId": "totalActualCost",
      "title": "Custo realizado total",
      "type": "money",
      "required": true,
      "description": "Soma calculada dos custos realizados das obras ativas apresentadas no painel.",
      "constraints": []
    },
    {
      "fieldId": "budgetVariance",
      "title": "Variação de orçamento",
      "type": "money",
      "required": true,
      "description": "Diferença calculada entre o orçamento total e o custo realizado total das obras apresentadas.",
      "constraints": []
    },
    {
      "fieldId": "costAttentionProjects",
      "title": "Obras com atenção de custo",
      "type": "json",
      "required": true,
      "description": "Coleção derivada de obras com indicador de atenção de custo, incluindo referência da obra e dados resumidos para acompanhamento.",
      "constraints": []
    },
    {
      "fieldId": "upcomingTasks",
      "title": "Próximas tarefas",
      "type": "json",
      "required": true,
      "description": "Coleção derivada de próximas tarefas e prazos das obras ativas para visibilidade gerencial do cronograma.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [
    "activeProjectCostVisibility"
  ],
  "storage": {
    "target": "derived",
    "scope": "none",
    "notes": "Projeção calculada a partir de obras, tarefas, apontamentos, consumos e alterações; não possui persistência própria."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityProjectDashboardType = typeof buildFlowFsmEntityProjectDashboard;

export default buildFlowFsmEntityProjectDashboard;
