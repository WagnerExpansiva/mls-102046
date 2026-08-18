/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectProjectDashboard.defs.ts" enhancement="_blank"/>

export const operationInspectProjectDashboard = {
  "operationId": "inspectProjectDashboard",
  "title": "Consultar o painel de obras",
  "actors": [
    "projectManager"
  ],
  "entity": "ProjectDashboard",
  "kind": "query",
  "reads": [
    "Project",
    "ProjectDashboard"
  ],
  "writes": [],
  "rulesApplied": [
    "activeProjectCostVisibility"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Consultar o painel de obras",
    "steps": [
      "Consultar o painel de obras",
      "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis."
    ],
    "outcome": "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar o painel de obras",
    "entity": "ProjectDashboard",
    "keyField": "ProjectDashboard.",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ProjectDashboard.activeProjects",
      "ProjectDashboard.activeProjectCount",
      "ProjectDashboard.totalBudget",
      "ProjectDashboard.totalActualCost",
      "ProjectDashboard.budgetVariance",
      "ProjectDashboard.costAttentionProjects",
      "ProjectDashboard.upcomingTasks"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "activeProjects",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectDashboard.activeProjects"
      },
      {
        "name": "activeProjectCount",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectDashboard.activeProjectCount"
      },
      {
        "name": "totalBudget",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectDashboard.totalBudget"
      },
      {
        "name": "totalActualCost",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectDashboard.totalActualCost"
      },
      {
        "name": "budgetVariance",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectDashboard.budgetVariance"
      },
      {
        "name": "costAttentionProjects",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectDashboard.costAttentionProjects"
      },
      {
        "name": "upcomingTasks",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectDashboard.upcomingTasks"
      }
    ]
  },
  "inputs": [],
  "pageId": "projectDashboardView",
  "commandName": "qryProjectDashboardView",
  "bffName": "qryProjectDashboardView"
} as const;

export default operationInspectProjectDashboard;
