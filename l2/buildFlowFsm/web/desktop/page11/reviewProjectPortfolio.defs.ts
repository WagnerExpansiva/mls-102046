/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/reviewProjectPortfolio.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "reviewProjectPortfolio",
  "pageName": "Monitorar portfólio e direcionar obra",
  "baseClassName": "BuildFlowFsmReviewProjectPortfolioBase",
  "actor": "projectManager",
  "purpose": "Identificar obras ativas que exigem atenção de custo ou prazo e direcionar seu acompanhamento.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "dataBindings": [
    {
      "id": "binding.reviewProjectPortfolio.qryInspectProjectDashboard",
      "source": "bff.qryInspectProjectDashboard",
      "command": "qryInspectProjectDashboard",
      "description": "Consultar o painel de obras",
      "kind": "query",
      "stateKey": "ui.reviewProjectPortfolio.data.qryInspectProjectDashboard",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.reviewProjectPortfolio.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.reviewProjectPortfolio.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.reviewProjectPortfolio.qryInspectProjectExecutionOverview",
      "source": "bff.qryInspectProjectExecutionOverview",
      "command": "qryInspectProjectExecutionOverview",
      "description": "Analisar a execução da obra",
      "kind": "query",
      "stateKey": "ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview",
      "inputStateKeys": [
        "ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "inputs": [
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator",
      "source": "bff.cmdHandoffProjectToFieldCoordinator",
      "command": "cmdHandoffProjectToFieldCoordinator",
      "description": "Encaminhar a obra para acompanhamento de campo",
      "kind": "command",
      "stateKey": "ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator",
      "inputStateKeys": [
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "clientId",
          "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "name",
          "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "address",
          "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "authorizedBudget",
          "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedStartDate",
          "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedEndDate",
          "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "reviewProjectPortfolio__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/reviewProjectPortfolio.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/reviewProjectPortfolio.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "reviewProjectPortfolio__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
