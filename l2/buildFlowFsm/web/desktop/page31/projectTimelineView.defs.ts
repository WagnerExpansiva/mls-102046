/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectTimelineView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectTimelineView",
  "pageName": "Cronograma da obra",
  "baseClassName": "BuildFlowFsmProjectTimelineViewBase",
  "actor": "fieldCoordinator",
  "purpose": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
  },
  "pageObjective": {
    "actor": "Planejador da obra ou gestor de campo",
    "jobToBeDone": "Consultar rapidamente o sequenciamento das tarefas e seus prazos para planejar e acompanhar a execução da obra selecionada.",
    "primaryDecision": "Identificar quais tarefas exigem atenção primeiro com base na sequência, prazo e situação atual.",
    "decisiveInfo": [
      "projectId",
      "workTasks",
      "scheduleEntries"
    ],
    "usageFrequency": "Recorrente durante o planejamento e o acompanhamento diário da obra.",
    "informationHierarchy": [
      "sequência e prazos das tarefas",
      "situação atual das tarefas",
      "identificação da obra selecionada",
      "detalhes complementares do cronograma"
    ],
    "successCriteria": "O usuário consegue localizar a próxima tarefa crítica e entender a progressão da obra sem interpretar uma tabela genérica ou preencher dados manualmente.",
    "antiPatterns": [
      "formulário separado para consulta",
      "campo de texto para projectId",
      "edição manual de status",
      "seções duplicadas para cada entidade lida",
      "dashboard visual sem dados espaciais no contrato"
    ],
    "criticalActions": [
      {
        "action": "Consultar o cronograma da obra selecionada",
        "presentation": "primary-contextual-action"
      },
      {
        "action": "Selecionar a obra pelo contexto de entidade selecionada",
        "presentation": "selection-context-not-manual-input"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.projectTimelineView.qryProjectTimelineView",
      "source": "bff.qryProjectTimelineView",
      "command": "qryProjectTimelineView",
      "description": "Consultar o cronograma da obra",
      "kind": "query",
      "stateKey": "ui.projectTimelineView.data.qryProjectTimelineView",
      "inputStateKeys": [
        "ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId"
      ],
      "inputs": [
        {
          "name": "projectTimelineProjectId",
          "stateKey": "ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId",
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
    "id": "projectTimelineView__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectTimelineView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectTimelineView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectTimelineView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
