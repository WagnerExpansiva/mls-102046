/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ProjectExecutionOverview.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityProjectExecutionOverview = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ProjectExecutionOverview",
  "title": "Visão consolidada de execução da obra",
  "description": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação.",
  "kind": "projection",
  "ownership": "derived",
  "sourceRefs": {
    "journeyIds": [
      "reviewProjectPortfolio",
      "generateAndPublishProjectStatusReport",
      "monitorDailyProjectRecords"
    ],
    "featureIds": [
      "projectPortfolioMonitoring",
      "dailyFieldLogging",
      "projectMaterialTracking",
      "jobCostTracking",
      "aiStatusReporting"
    ],
    "authorityRefs": [
      "buildflowfsm:portfolio",
      "buildflowfsm:fieldcoord",
      "buildflowfsm:statuspublish"
    ]
  },
  "fields": [
    {
      "fieldId": "projectId",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Identificador da obra cujo contexto operacional é consolidado nesta projeção calculada.",
      "constraints": []
    },
    {
      "fieldId": "projectName",
      "title": "Nome da obra",
      "type": "string",
      "required": true,
      "description": "Nome da obra apresentado para identificar a execução consolidada.",
      "constraints": []
    },
    {
      "fieldId": "projectStatus",
      "title": "Status da obra",
      "type": "string",
      "required": true,
      "description": "Status atual da obra, obtido dos dados operacionais da obra.",
      "constraints": []
    },
    {
      "fieldId": "workTaskIds",
      "title": "Tarefas incluídas",
      "type": "json",
      "required": false,
      "description": "Lista derivada das identificações das tarefas que compõem o andamento consolidado da obra.",
      "constraints": []
    },
    {
      "fieldId": "taskSummary",
      "title": "Resumo das tarefas",
      "type": "json",
      "required": true,
      "description": "Consolidação derivada do andamento, status e prazos das tarefas da obra.",
      "constraints": []
    },
    {
      "fieldId": "upcomingCommitments",
      "title": "Próximos compromissos",
      "type": "json",
      "required": true,
      "description": "Lista derivada dos próximos prazos e compromissos operacionais da obra.",
      "constraints": []
    },
    {
      "fieldId": "timeLogIds",
      "title": "Apontamentos de horas incluídos",
      "type": "json",
      "required": false,
      "description": "Lista derivada das identificações dos apontamentos de horas considerados na projeção.",
      "constraints": []
    },
    {
      "fieldId": "totalLoggedHours",
      "title": "Total de horas apontadas",
      "type": "number",
      "required": true,
      "description": "Total calculado de horas registradas para a obra.",
      "constraints": []
    },
    {
      "fieldId": "materialUsageIds",
      "title": "Consumos de materiais incluídos",
      "type": "json",
      "required": false,
      "description": "Lista derivada das identificações dos consumos de materiais considerados na projeção.",
      "constraints": []
    },
    {
      "fieldId": "materialUsageSummary",
      "title": "Resumo de materiais",
      "type": "json",
      "required": true,
      "description": "Consolidação derivada dos materiais consumidos e de seus impactos na execução da obra.",
      "constraints": []
    },
    {
      "fieldId": "actualLaborCost",
      "title": "Custo realizado de mão de obra",
      "type": "money",
      "required": true,
      "description": "Custo realizado calculado a partir dos apontamentos de horas da obra.",
      "constraints": []
    },
    {
      "fieldId": "actualMaterialCost",
      "title": "Custo realizado de materiais",
      "type": "money",
      "required": true,
      "description": "Custo realizado calculado a partir dos consumos de materiais da obra.",
      "constraints": []
    },
    {
      "fieldId": "actualCost",
      "title": "Custo realizado total",
      "type": "money",
      "required": true,
      "description": "Custo realizado total calculado para acompanhamento da obra.",
      "constraints": []
    },
    {
      "fieldId": "budgetAmount",
      "title": "Orçamento da obra",
      "type": "money",
      "required": true,
      "description": "Valor orçado da obra apresentado para comparação com o realizado.",
      "constraints": []
    },
    {
      "fieldId": "costVariance",
      "title": "Variação de custo",
      "type": "money",
      "required": true,
      "description": "Diferença calculada entre o orçamento da obra e o custo realizado.",
      "constraints": []
    },
    {
      "fieldId": "changeOrderIds",
      "title": "Ordens de mudança incluídas",
      "type": "json",
      "required": false,
      "description": "Lista derivada das identificações das ordens de mudança consideradas na projeção.",
      "constraints": []
    },
    {
      "fieldId": "changeOrderImpactSummary",
      "title": "Resumo dos impactos de alterações",
      "type": "json",
      "required": true,
      "description": "Consolidação derivada dos impactos de ordens de mudança conforme seus estados.",
      "constraints": []
    },
    {
      "fieldId": "calculatedAt",
      "title": "Calculado em",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que a projeção consolidada foi calculada a partir dos fatos operacionais da obra.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [
    "activeProjectCostVisibility",
    "statusReportUsesProjectExecutionData",
    "fieldCoordinatorSeesProjectDailyRecords"
  ],
  "storage": {
    "target": "derived",
    "scope": "none",
    "notes": "Projeção calculada de fatos operacionais da obra; não armazena saldos ou totais independentes."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityProjectExecutionOverviewType = typeof buildFlowFsmEntityProjectExecutionOverview;

export default buildFlowFsmEntityProjectExecutionOverview;
