/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectDashboardView.defs.ts" enhancement="_blank"/>

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
    "jobToBeDone": "Monitorar rapidamente o desempenho financeiro e a carga próxima das obras ativas para decidir onde concentrar atenção gerencial.",
    "primaryDecision": "Identificar quais obras precisam de atenção imediata com base na variação entre orçamento e custo realizado e nas tarefas próximas.",
    "decisiveInfo": [
      "activeProjectCount",
      "activeProjects",
      "totalBudget",
      "totalActualCost",
      "budgetVariance",
      "costAttentionProjects",
      "upcomingTasks"
    ],
    "usageFrequency": "Frequente, em consultas gerenciais recorrentes; leitura rápida de monitoramento, não operação transacional.",
    "informationHierarchy": [
      "Variação entre orçamento e custo realizado",
      "Obras com atenção de custo",
      "Quantidade e lista de obras ativas",
      "Orçamento total e custo realizado total",
      "Tarefas próximas"
    ],
    "successCriteria": "Em uma única leitura, o gestor entende a saúde financeira consolidada, localiza as obras com maior atenção e reconhece os próximos compromissos sem precisar navegar ou preencher formulários.",
    "antiPatterns": [
      "Não criar formulário separado de consulta",
      "Não expor status ou identificadores como campos editáveis",
      "Não inventar filtros, comandos, mapa ou dados espaciais",
      "Não dividir cada indicador em uma seção independente",
      "Não tratar tarefas próximas como comandos quando o contrato fornece apenas consulta"
    ],
    "criticalActions": [
      {
        "action": "Consultar o painel de obras",
        "presentation": "initial-load-summary-first"
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
    "id": "projectDashboardView__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectDashboardView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectDashboardView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectDashboardView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
