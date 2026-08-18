/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectHub.defs.ts" enhancement="_blank"/>

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
    "actor": "Coordenador de obras ou gestor operacional responsável pela carteira de projetos.",
    "jobToBeDone": "Localizar uma obra e diagnosticar rapidamente execução, prazo, risco e impacto financeiro usando o contexto selecionado.",
    "primaryDecision": "Qual obra requer atenção imediata e qual dimensão do projeto deve ser investigada primeiro?",
    "decisiveInfo": [
      "name",
      "status",
      "authorizedBudget",
      "plannedStartDate",
      "plannedEndDate",
      "activeProjectCount",
      "totalBudget",
      "totalActualCost",
      "budgetVariance",
      "costAttentionProjects",
      "upcomingTasks",
      "projectStatus",
      "taskSummary",
      "upcomingCommitments",
      "totalLoggedHours",
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
    "usageFrequency": "Contínua durante o acompanhamento operacional diário e em revisões periódicas da carteira.",
    "informationHierarchy": [
      "Obras que exigem atenção e métricas da carteira",
      "Obra selecionada e seu status atual",
      "Desvios de custo, andamento e próximos compromissos",
      "Riscos de atraso e cronograma",
      "Reflexo no faturamento",
      "Registros operacionais de apoio"
    ],
    "successCriteria": "O gestor identifica a obra prioritária em poucos segundos, entende o motivo com métricas e riscos atuais, e chega ao detalhe de execução, cronograma ou faturamento sem redigitar ids nem percorrer formulários irrelevantes.",
    "antiPatterns": [
      "pilha de formulários CRUD",
      "uma seção independente para cada consulta",
      "ids técnicos digitados manualmente",
      "status como select livre",
      "mostrar listas de apoio antes do diagnóstico principal",
      "ações de alteração ou exportação sem comando correspondente",
      "misturar dados de obras não selecionadas no detalhe contextual"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra prioritária",
        "presentation": "master-detail-selection"
      },
      {
        "action": "Consultar o painel agregado da carteira",
        "presentation": "summary-first-metrics"
      },
      {
        "action": "Investigar execução, custo e compromissos da obra",
        "presentation": "contextual-detail-panel"
      },
      {
        "action": "Verificar riscos e sequência do cronograma",
        "presentation": "contextual-detail-panels"
      },
      {
        "action": "Consultar o reflexo no faturamento",
        "presentation": "contextual-summary-panel"
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
    "id": "projectHub__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectHub.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectHub.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectHub.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectHub__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
