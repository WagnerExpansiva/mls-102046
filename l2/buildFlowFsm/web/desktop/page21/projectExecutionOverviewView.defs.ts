/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectExecutionOverviewView.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável pelo acompanhamento e comunicação da execução da obra.",
    "jobToBeDone": "Analisar rapidamente a execução de uma obra a partir de seus registros consolidados e identificar andamento, próximos compromissos e desvios de custo.",
    "primaryDecision": "Determinar se a execução está sob controle ou requer atenção com base no andamento, prazos e variação entre custo realizado e orçamento.",
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
    "usageFrequency": "Recorrente durante o acompanhamento da obra, especialmente em revisões diárias ou periódicas e na comunicação com envolvidos.",
    "informationHierarchy": [
      "Identificação e status da obra",
      "Resumo do andamento das tarefas",
      "Próximos compromissos e prazos",
      "Custo realizado versus orçamento e variação",
      "Horas registradas e uso de materiais",
      "Impactos de alterações de escopo",
      "Data de atualização dos dados e registros relacionados"
    ],
    "successCriteria": "O usuário entende o estado atual da obra em poucos segundos, encontra os principais riscos de prazo e custo sem percorrer registros desconectados e reconhece quando os dados foram calculados.",
    "antiPatterns": [
      "Não criar formulário separado para consulta",
      "Não solicitar digitação manual do projectId",
      "Não expor status como campo editável",
      "Não transformar cada coleção de registros em uma seção isolada",
      "Não inventar ações de atualização, transição ou edição",
      "Não ocultar a comparação entre custo realizado e orçamento"
    ],
    "criticalActions": [
      {
        "action": "Selecionar ou manter o projeto em contexto e carregar a visão consolidada",
        "presentation": "selection-context with summary-first load surface"
      },
      {
        "action": "Analisar o estado consolidado da execução",
        "presentation": "summary-first dashboard surface followed by contextual detail panel"
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
    "id": "projectExecutionOverviewView__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectExecutionOverviewView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectExecutionOverviewView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectExecutionOverviewView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
