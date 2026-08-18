/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectExecutionOverviewView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectExecutionOverviewView",
  "pageName": "Visão consolidada de execução da obra",
  "baseClassName": "BuildFlowFsmProjectExecutionOverviewViewBase",
  "actor": "projectManager",
  "purpose": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
  },
  "pageObjective": {
    "actor": "Gestor de obra, coordenador de execução ou responsável pelo acompanhamento financeiro do projeto.",
    "jobToBeDone": "Acompanhar rapidamente a execução de uma obra e comunicar sua situação operacional, de prazo e de custo com base nos registros consolidados.",
    "primaryDecision": "Identificar se a obra está sob controle ou exige atenção imediata em andamento, próximos compromissos ou custos.",
    "decisiveInfo": [
      "projectName",
      "projectStatus",
      "taskSummary",
      "upcomingCommitments",
      "totalLoggedHours",
      "materialUsageSummary",
      "actualCost",
      "budgetAmount",
      "costVariance",
      "changeOrderImpactSummary",
      "calculatedAt"
    ],
    "usageFrequency": "Recorrente durante o acompanhamento da obra, especialmente em revisões diárias ou reuniões de status; leitura ocasional para comunicação executiva.",
    "informationHierarchy": [
      "Identificação e status atual da obra",
      "Resumo de andamento das tarefas e próximos compromissos",
      "Variação entre custo realizado e orçamento",
      "Horas registradas e utilização de materiais",
      "Impactos de alterações de escopo",
      "Referência temporal da consolidação e registros relacionados"
    ],
    "successCriteria": "O usuário entende o estado da obra em poucos segundos, encontra desvios de prazo ou custo sem explorar vários registros e consegue usar a visão consolidada como base confiável para acompanhamento e comunicação.",
    "antiPatterns": [
      "Não transformar a visão em formulário CRUD",
      "Não exigir digitação manual do identificador da obra",
      "Não expor status, custos calculados ou data de consolidação como campos editáveis",
      "Não esconder os desvios de custo atrás de detalhes secundários",
      "Não separar cada métrica em uma seção desconectada que dificulte a leitura do panorama"
    ],
    "criticalActions": [
      {
        "action": "Selecionar ou manter a obra em contexto para carregar a visão",
        "presentation": "selection-context-with-primary-load"
      },
      {
        "action": "Carregar a consolidação da execução",
        "presentation": "primary-button-with-loading-and-result-state"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.projectExecutionOverviewView.qryProjectExecutionOverviewView",
      "source": "bff.qryProjectExecutionOverviewView",
      "command": "qryProjectExecutionOverviewView",
      "description": "Analisar a execução da obra",
      "kind": "query",
      "stateKey": "ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView",
      "inputStateKeys": [
        "ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId"
      ],
      "inputs": [
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "projectExecutionOverviewView__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectExecutionOverviewView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectExecutionOverviewView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectExecutionOverviewView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
