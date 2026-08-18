/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.defs.ts" enhancement="_blank"/>

export const projectDashboardDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ProjectDashboard",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectDashboard",
    "title": "Painel de portfólio de obras",
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
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "activeProjectCount equals the number of entries in activeProjects and is never negative.",
      "totalBudget equals the sum of the budgets of all active projects presented in activeProjects.",
      "totalActualCost equals the sum of the actual costs of all active projects presented in activeProjects.",
      "budgetVariance equals totalBudget minus totalActualCost.",
      "All monetary amounts are expressed in the same currency and use non-negative budget and actual-cost values.",
      "costAttentionProjects contains only projects present in activeProjects that satisfy the configured cost-attention criterion, with no duplicate project references.",
      "upcomingTasks contains only upcoming tasks belonging to active projects and is ordered by due date ascending.",
      "All dashboard collections represent the same snapshot of active projects and their indicators; derived values must be mutually consistent and must not be manually divergent from their source data."
    ]
  }
} as const;

export default projectDashboardDomainEntity;

export const pipeline = [
  {
    "id": "projectDashboard__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.defs.ts",
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
