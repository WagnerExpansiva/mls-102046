/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectDashboardView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectDashboardView",
  "pageName": "Painel de portfólio de obras",
  "baseClassName": "BuildFlowFsmProjectDashboardViewBase",
  "actor": "projectManager",
  "purpose": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
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
    "id": "projectDashboardView__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectDashboardView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectDashboardView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectDashboardView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
