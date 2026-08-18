/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/projectDashboardView.defs.ts" enhancement="_blank"/>

export const projectDashboardViewWorkspace = {
  "workspaceId": "projectDashboardView",
  "title": "Painel de portfólio de obras",
  "actors": [
    "projectManager"
  ],
  "kind": "landing",
  "entity": "ProjectDashboard",
  "bffCalls": [
    {
      "bffId": "qryProjectDashboardView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectDashboard"
        }
      ],
      "input": [],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "activeProjects",
            "from": "inspectProjectDashboard.activeProjects",
            "type": "string",
            "required": true
          },
          {
            "name": "activeProjectCount",
            "from": "inspectProjectDashboard.activeProjectCount",
            "type": "number",
            "required": true
          },
          {
            "name": "totalBudget",
            "from": "inspectProjectDashboard.totalBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "totalActualCost",
            "from": "inspectProjectDashboard.totalActualCost",
            "type": "number",
            "required": true
          },
          {
            "name": "budgetVariance",
            "from": "inspectProjectDashboard.budgetVariance",
            "type": "number",
            "required": true
          },
          {
            "name": "costAttentionProjects",
            "from": "inspectProjectDashboard.costAttentionProjects",
            "type": "string",
            "required": true
          },
          {
            "name": "upcomingTasks",
            "from": "inspectProjectDashboard.upcomingTasks",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectDashboardView.qryProjectDashboardView"
    }
  ],
  "sections": [
    {
      "sectionId": "overview",
      "intent": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryProjectDashboardView"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectProjectDashboard"
  ],
  "purpose": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter",
    "confidence": 10,
    "classificationNote": "Derived from the projection tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:949d4e89"
} as const;

export default projectDashboardViewWorkspace;
