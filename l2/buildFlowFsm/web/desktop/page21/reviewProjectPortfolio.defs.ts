/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/reviewProjectPortfolio.defs.ts" enhancement="_blank"/>

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
    "jobToBeDone": "Identificar rapidamente a obra ativa que exige atenção de custo ou prazo, analisar sua execução e encaminhá-la ao acompanhamento de campo quando necessário.",
    "primaryDecision": "Qual obra deve ser encaminhada agora para acompanhamento de campo?",
    "decisiveInfo": [
      "activeProjects",
      "activeProjectCount",
      "budgetVariance",
      "costAttentionProjects",
      "upcomingTasks",
      "projectId",
      "name",
      "status",
      "authorizedBudget",
      "plannedStartDate",
      "plannedEndDate",
      "taskSummary",
      "upcomingCommitments",
      "totalLoggedHours",
      "actualCost",
      "budgetAmount",
      "costVariance",
      "changeOrderImpactSummary"
    ],
    "usageFrequency": "Recorrente, em ciclos de acompanhamento do portfólio e sempre que surgirem desvios de custo, prazo ou execução.",
    "informationHierarchy": [
      "Projetos ativos e indicadores de orçamento versus realizado",
      "Obras com atenção de custo e tarefas próximas",
      "Obra selecionada com status, orçamento e janela planejada",
      "Resumo consolidado da execução, horas, custos, materiais, compromissos e impactos de mudanças",
      "Ação contextual de encaminhamento para acompanhamento de campo",
      "Confirmação ou erro do encaminhamento"
    ],
    "successCriteria": "O gestor encontra a obra prioritária sem digitar identificadores, entende o desvio comparando custo real ao orçamento, revisa o contexto de execução e encaminha a obra em uma ação contextual clara, com atualização posterior do portfólio.",
    "antiPatterns": [
      "Formulário separado e desconectado para o encaminhamento",
      "Campo manual para projectId ou outros identificadores contextuais",
      "Edição manual de status do projeto",
      "Exposição de métricas computadas como entradas",
      "Obrigar a redigitação de nome, endereço, orçamento ou datas já disponíveis na obra",
      "Empilhar consultas em seções isoladas sem relação de seleção e detalhe"
    ],
    "criticalActions": [
      {
        "action": "Identificar a obra prioritária",
        "presentation": "summary-first com lista de atenção integrada à superfície do portfólio"
      },
      {
        "action": "Selecionar uma obra para investigação",
        "presentation": "master-detail com seleção direta na lista"
      },
      {
        "action": "Analisar a execução da obra selecionada",
        "presentation": "detail-panel contextual dentro do master-detail"
      },
      {
        "action": "Encaminhar a obra para acompanhamento de campo",
        "presentation": "contextual-transition-actions com ação primária no detalhe selecionado e confirmação para comando de impacto operacional"
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
    "id": "reviewProjectPortfolio__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/reviewProjectPortfolio.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/reviewProjectPortfolio.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "reviewProjectPortfolio__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
