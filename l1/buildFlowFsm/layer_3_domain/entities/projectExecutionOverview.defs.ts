/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.defs.ts" enhancement="_blank"/>

export const projectExecutionOverviewDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ProjectExecutionOverview",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectExecutionOverview",
    "title": "Visão consolidada de execução da obra",
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
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "The overview must represent exactly one project, and all included task, time-log, material-usage, and change-order identifiers must belong to that project.",
      "All calculated summaries and totals must be derived solely from the operational records included in the overview and must be mutually consistent with those records.",
      "totalLoggedHours must equal the sum of included logged hours and must not be negative.",
      "actualLaborCost and actualMaterialCost must not be negative; actualCost must equal actualLaborCost plus actualMaterialCost.",
      "budgetAmount must not be negative.",
      "costVariance must equal budgetAmount minus actualCost.",
      "calculatedAt must identify the calculation instant and must not be earlier than any operational timestamp used in the projection.",
      "taskSummary, upcomingCommitments, materialUsageSummary, and changeOrderImpactSummary must accurately reflect the corresponding included records and their current statuses, deadlines, quantities, and impacts.",
      "Optional identifier lists must contain no duplicates, and every identifier represented in a corresponding summary must be included in its identifier list.",
      "A projection must not combine facts from different calculation contexts or project versions; recalculation must replace or consistently refresh all derived totals, summaries, and identifier lists together."
    ]
  }
} as const;

export default projectExecutionOverviewDomainEntity;

export const pipeline = [
  {
    "id": "projectExecutionOverview__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
