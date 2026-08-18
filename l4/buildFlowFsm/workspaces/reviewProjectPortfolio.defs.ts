/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/reviewProjectPortfolio.defs.ts" enhancement="_blank"/>

export const reviewProjectPortfolioWorkspace = {
  "workspaceId": "reviewProjectPortfolio",
  "title": "Monitorar portfólio e direcionar obra",
  "actors": [
    "projectManager"
  ],
  "kind": "operation",
  "entity": "ProjectDashboard",
  "bffCalls": [
    {
      "bffId": "qryInspectProjectDashboard",
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
      "route": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard"
    },
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.reviewProjectPortfolio.qryLocateProject"
    },
    {
      "bffId": "qryInspectProjectExecutionOverview",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectExecutionOverview"
        }
      ],
      "input": [
        {
          "name": "projectExecutionOverviewProjectId",
          "from": "inspectProjectExecutionOverview.projectExecutionOverviewProjectId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "inspectProjectExecutionOverview.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectName",
            "from": "inspectProjectExecutionOverview.projectName",
            "type": "string",
            "required": true
          },
          {
            "name": "projectStatus",
            "from": "inspectProjectExecutionOverview.projectStatus",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskIds",
            "from": "inspectProjectExecutionOverview.workTaskIds",
            "type": "string",
            "required": false
          },
          {
            "name": "taskSummary",
            "from": "inspectProjectExecutionOverview.taskSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "upcomingCommitments",
            "from": "inspectProjectExecutionOverview.upcomingCommitments",
            "type": "string",
            "required": true
          },
          {
            "name": "timeLogIds",
            "from": "inspectProjectExecutionOverview.timeLogIds",
            "type": "string",
            "required": false
          },
          {
            "name": "totalLoggedHours",
            "from": "inspectProjectExecutionOverview.totalLoggedHours",
            "type": "number",
            "required": true
          },
          {
            "name": "materialUsageIds",
            "from": "inspectProjectExecutionOverview.materialUsageIds",
            "type": "string",
            "required": false
          },
          {
            "name": "materialUsageSummary",
            "from": "inspectProjectExecutionOverview.materialUsageSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "actualLaborCost",
            "from": "inspectProjectExecutionOverview.actualLaborCost",
            "type": "number",
            "required": true
          },
          {
            "name": "actualMaterialCost",
            "from": "inspectProjectExecutionOverview.actualMaterialCost",
            "type": "number",
            "required": true
          },
          {
            "name": "actualCost",
            "from": "inspectProjectExecutionOverview.actualCost",
            "type": "number",
            "required": true
          },
          {
            "name": "budgetAmount",
            "from": "inspectProjectExecutionOverview.budgetAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "costVariance",
            "from": "inspectProjectExecutionOverview.costVariance",
            "type": "number",
            "required": true
          },
          {
            "name": "changeOrderIds",
            "from": "inspectProjectExecutionOverview.changeOrderIds",
            "type": "string",
            "required": false
          },
          {
            "name": "changeOrderImpactSummary",
            "from": "inspectProjectExecutionOverview.changeOrderImpactSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "calculatedAt",
            "from": "inspectProjectExecutionOverview.calculatedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview"
    },
    {
      "bffId": "cmdHandoffProjectToFieldCoordinator",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffProjectToFieldCoordinator"
        }
      ],
      "input": [
        {
          "name": "projectProjectId",
          "from": "handoffProjectToFieldCoordinator.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "clientId",
          "from": "handoffProjectToFieldCoordinator.clientId",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "name",
          "from": "handoffProjectToFieldCoordinator.name",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "address",
          "from": "handoffProjectToFieldCoordinator.address",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "authorizedBudget",
          "from": "handoffProjectToFieldCoordinator.authorizedBudget",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "plannedStartDate",
          "from": "handoffProjectToFieldCoordinator.plannedStartDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "plannedEndDate",
          "from": "handoffProjectToFieldCoordinator.plannedEndDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "handoffProjectToFieldCoordinator.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "handoffProjectToFieldCoordinator.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "handoffProjectToFieldCoordinator.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "handoffProjectToFieldCoordinator.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "handoffProjectToFieldCoordinator.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "handoffProjectToFieldCoordinator.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "handoffProjectToFieldCoordinator.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "handoffProjectToFieldCoordinator.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator"
    }
  ],
  "sections": [
    {
      "sectionId": "inspectProjectDashboard",
      "intent": "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectProjectDashboard"
        }
      ]
    },
    {
      "sectionId": "locateProject",
      "intent": "Uma obra do catálogo compartilhado de projetos está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "inspectProjectExecutionOverview",
      "intent": "Andamento, custos e próximos compromissos da obra estão consolidados.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectProjectExecutionOverview"
        }
      ]
    },
    {
      "sectionId": "handoffProjectToFieldCoordinator",
      "intent": "O coordenador de campo recebe a obra para coordenar a execução.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffProjectToFieldCoordinator"
        }
      ]
    }
  ],
  "operationIds": [
    "handoffProjectToFieldCoordinator",
    "inspectProjectDashboard",
    "inspectProjectExecutionOverview",
    "locateProject"
  ],
  "purpose": "Identificar obras ativas que exigem atenção de custo ou prazo e direcionar seu acompanhamento.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:7946e97f"
} as const;

export default reviewProjectPortfolioWorkspace;
