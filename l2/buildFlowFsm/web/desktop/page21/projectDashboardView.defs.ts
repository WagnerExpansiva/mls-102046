/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectDashboardView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectDashboardView",
  "pageName": "Painel de portfólio de obras",
  "baseClassName": "BuildFlowFsmProjectDashboardViewBase",
  "actor": "projectManager",
  "purpose": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
  },
  "pageObjective": {
    "actor": "Gestor de portfólio de obras",
    "jobToBeDone": "Avaliar rapidamente a situação financeira e operacional das obras ativas para decidir quais projetos exigem atenção primeiro.",
    "primaryDecision": "Identificar o projeto ou conjunto de projetos que precisa de investigação gerencial imediata.",
    "decisiveInfo": [
      "activeProjectCount",
      "activeProjects",
      "totalBudget",
      "totalActualCost",
      "budgetVariance",
      "costAttentionProjects",
      "upcomingTasks"
    ],
    "usageFrequency": "Frequente, em revisões diárias ou periódicas do portfólio; leitura rápida de monitoramento gerencial.",
    "informationHierarchy": [
      "Indicadores agregados de obras ativas e saúde financeira",
      "Variação entre orçamento e custo realizado",
      "Projetos com atenção de custo e seus contextos",
      "Lista de obras ativas para comparação",
      "Tarefas próximas para acompanhamento"
    ],
    "successCriteria": "O gestor entende a saúde do portfólio em poucos segundos, localiza projetos com desvio de custo sem procurar em várias telas e reconhece as próximas tarefas de acompanhamento.",
    "antiPatterns": [
      "Não criar formulário de edição para uma página exclusivamente consultiva",
      "Não expor status, ids ou orçamento como campos manuais",
      "Não usar seletor livre de status ou comandos de transição inexistentes",
      "Não fragmentar cada indicador em uma seção isolada",
      "Não inventar gráficos, coordenadas, filtros ou ações não presentes no contrato"
    ],
    "criticalActions": [
      {
        "action": "Consultar o painel de obras",
        "presentation": "initial-load with summary-first dashboard surface"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.projectDashboardView.qryProjectDashboardView",
      "source": "bff.qryProjectDashboardView",
      "command": "qryProjectDashboardView",
      "description": "Consultar o painel de obras",
      "kind": "query",
      "stateKey": "ui.projectDashboardView.data.qryProjectDashboardView",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "projectDashboardView__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectDashboardView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectDashboardView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectDashboardView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
