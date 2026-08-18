/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectHub.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectHub",
  "pageName": "Obra",
  "baseClassName": "BuildFlowFsmProjectHubBase",
  "actor": "billingStaff",
  "purpose": "Painel de Obra.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
  },
  "pageObjective": {
    "actor": "Coordenador ou gestor de obras",
    "jobToBeDone": "Selecionar uma obra e obter rapidamente uma visão confiável de sua execução, riscos, cronograma e reflexos financeiros para decidir onde agir primeiro.",
    "primaryDecision": "Qual obra exige atenção imediata e qual aspecto operacional ou financeiro deve ser investigado?",
    "decisiveInfo": [
      "projectId",
      "name",
      "status",
      "authorizedBudget",
      "plannedStartDate",
      "plannedEndDate",
      "activeProjectCount",
      "budgetVariance",
      "costAttentionProjects",
      "upcomingTasks",
      "projectStatus",
      "taskSummary",
      "upcomingCommitments",
      "actualCost",
      "budgetAmount",
      "costVariance",
      "workTasks",
      "scheduleEntries",
      "riskIndicators",
      "riskExplanation",
      "approvedChangeOrderAmount",
      "billableAmount",
      "invoicedAmount",
      "clientAvailableAmount"
    ],
    "usageFrequency": "Contínua durante o acompanhamento diário e semanal da carteira, com consultas ocasionais a registros de apoio.",
    "informationHierarchy": [
      "Obras e contexto selecionado",
      "Métricas agregadas da carteira",
      "Execução e variação de custo da obra",
      "Riscos e próximos prazos",
      "Cronograma",
      "Reflexo no faturamento",
      "Registros de apoio: tarefas, mudanças, faturas, materiais, coordenação e relatórios"
    ],
    "successCriteria": "O usuário identifica a obra crítica sem procurar em múltiplas telas, entende imediatamente o motivo da atenção e abre o detalhe contextual correto sem digitar identificadores ou editar estados indevidamente.",
    "antiPatterns": [
      "pilha de formulários CRUD por consulta",
      "ids técnicos digitáveis",
      "status como select livre",
      "seção separada para cada filtro ou setter",
      "mostrar registros de apoio antes das métricas e exceções",
      "ações sem vínculo com a obra selecionada",
      "inventar comandos de exportação ou edição"
    ],
    "criticalActions": [
      {
        "action": "Selecionar uma obra para aprofundamento",
        "presentation": "master-detail-selection"
      },
      {
        "action": "Investigar execução, custos e compromissos da obra selecionada",
        "presentation": "summary-first-contextual-panel"
      },
      {
        "action": "Identificar tarefas em risco e próximos prazos",
        "presentation": "highlighted-exception-cards"
      },
      {
        "action": "Consultar cronograma e reflexo no faturamento",
        "presentation": "contextual-detail-panels"
      },
      {
        "action": "Localizar registros de apoio",
        "presentation": "compact-inline-row-command"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.projectHub.qryListProject",
      "source": "bff.qryListProject",
      "command": "qryListProject",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryListProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectHub.qryClientBillingSummaryView",
      "source": "bff.qryClientBillingSummaryView",
      "command": "qryClientBillingSummaryView",
      "description": "Consultar o resumo de faturamento",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryClientBillingSummaryView",
      "inputStateKeys": [
        "ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId"
      ],
      "inputs": [
        {
          "name": "clientBillingSummaryClientId",
          "stateKey": "ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectHub.qryProjectDashboardView",
      "source": "bff.qryProjectDashboardView",
      "command": "qryProjectDashboardView",
      "description": "Consultar o painel de obras",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryProjectDashboardView",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectHub.qryProjectExecutionOverviewView",
      "source": "bff.qryProjectExecutionOverviewView",
      "command": "qryProjectExecutionOverviewView",
      "description": "Analisar a execução da obra",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryProjectExecutionOverviewView",
      "inputStateKeys": [
        "ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId"
      ],
      "inputs": [
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectHub.qryProjectTimelineView",
      "source": "bff.qryProjectTimelineView",
      "command": "qryProjectTimelineView",
      "description": "Consultar o cronograma da obra",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryProjectTimelineView",
      "inputStateKeys": [
        "ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId"
      ],
      "inputs": [
        {
          "name": "projectTimelineProjectId",
          "stateKey": "ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectHub.qryScheduleRiskAssessmentView",
      "source": "bff.qryScheduleRiskAssessmentView",
      "command": "qryScheduleRiskAssessmentView",
      "description": "Consultar tarefas em risco de atraso",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryScheduleRiskAssessmentView",
      "inputStateKeys": [
        "ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId"
      ],
      "inputs": [
        {
          "name": "scheduleRiskAssessmentProjectId",
          "stateKey": "ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectHub.qryListChangeOrder",
      "source": "bff.qryListChangeOrder",
      "command": "qryListChangeOrder",
      "description": "Listar Ordem de mudança",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryListChangeOrder",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectHub.qryListInvoice",
      "source": "bff.qryListInvoice",
      "command": "qryListInvoice",
      "description": "Listar Fatura",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryListInvoice",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectHub.qryListMaterialUsage",
      "source": "bff.qryListMaterialUsage",
      "command": "qryListMaterialUsage",
      "description": "Listar Consumo de material",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryListMaterialUsage",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectHub.qryListProjectCoordinationAssignment",
      "source": "bff.qryListProjectCoordinationAssignment",
      "command": "qryListProjectCoordinationAssignment",
      "description": "Listar Atribuição de coordenação da obra",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryListProjectCoordinationAssignment",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectHub.qryListStatusReport",
      "source": "bff.qryListStatusReport",
      "command": "qryListStatusReport",
      "description": "Listar Relatório de status",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryListStatusReport",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectHub.qryListWorkTask",
      "source": "bff.qryListWorkTask",
      "command": "qryListWorkTask",
      "description": "Listar Tarefa de trabalho",
      "kind": "query",
      "stateKey": "ui.projectHub.data.qryListWorkTask",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "projectHub__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectHub.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectHub.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectHub.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectHub__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
