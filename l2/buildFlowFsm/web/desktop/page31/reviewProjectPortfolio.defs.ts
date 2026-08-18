/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/reviewProjectPortfolio.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "reviewProjectPortfolio",
  "pageName": "Monitorar portfólio e direcionar obra",
  "baseClassName": "BuildFlowFsmReviewProjectPortfolioBase",
  "actor": "projectManager",
  "purpose": "Identificar obras ativas que exigem atenção de custo ou prazo e direcionar seu acompanhamento.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Gestor de portfólio ou responsável pela coordenação de obras",
    "jobToBeDone": "Identificar rapidamente obras ativas com risco de custo ou prazo, analisar a execução da obra escolhida e encaminhá-la ao acompanhamento de campo quando necessário.",
    "primaryDecision": "Decidir qual obra exige intervenção e executar seu encaminhamento ao coordenador de campo.",
    "decisiveInfo": [
      "activeProjectCount",
      "costAttentionProjects",
      "upcomingTasks",
      "name",
      "status",
      "authorizedBudget",
      "plannedStartDate",
      "plannedEndDate",
      "taskSummary",
      "upcomingCommitments",
      "actualCost",
      "budgetAmount",
      "costVariance",
      "changeOrderImpactSummary"
    ],
    "usageFrequency": "Contínua ou frequente durante a gestão operacional do portfólio, com consultas rápidas e ações contextuais.",
    "informationHierarchy": [
      "Indicadores agregados de obras ativas e desvios de custo",
      "Lista de obras que exigem atenção, com status, orçamento e prazo",
      "Detalhe da execução da obra selecionada",
      "Próximos compromissos, tarefas, registros e impactos de alterações",
      "Ação contextual de encaminhamento ao acompanhamento de campo",
      "Confirmação do resultado e atualização do portfólio"
    ],
    "successCriteria": "O gestor identifica a obra prioritária sem navegar entre telas, entende seu estado atual e sua exposição de custo e prazo, e consegue encaminhá-la ao campo com uma ação contextual segura e confirmação clara.",
    "antiPatterns": [
      "Formulário separado para encaminhamento sem a obra selecionada visível",
      "Campo manual para projectId, clientId ou outros identificadores derivados do contexto",
      "Edição manual de status do projeto ou da atribuição",
      "Exibir custos calculados como campos editáveis",
      "Forçar o usuário a revisar cada consulta em uma seção isolada antes de agir",
      "Esconder a relação entre desvio, prazo e ação recomendada"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra que exige atenção",
        "presentation": "master-detail com seleção direta na superfície de obras"
      },
      {
        "action": "Analisar a execução da obra selecionada",
        "presentation": "detail-panel contextual no mesmo master-detail, com summary-first"
      },
      {
        "action": "Encaminhar a obra para acompanhamento de campo",
        "presentation": "contextual-transition-actions junto ao detalhe selecionado, usando confirmação apenas se a ação tiver impacto alto"
      },
      {
        "action": "Atualizar o portfólio após o encaminhamento",
        "presentation": "feedback textual dismissível e refresh das superfícies relacionadas"
      }
    ]
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
    "id": "reviewProjectPortfolio__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/reviewProjectPortfolio.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/reviewProjectPortfolio.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "reviewProjectPortfolio__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
