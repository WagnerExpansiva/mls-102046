/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/scheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "scheduleRiskAssessmentView",
  "pageName": "Avaliação de risco de atraso",
  "baseClassName": "BuildFlowFsmScheduleRiskAssessmentViewBase",
  "actor": "projectManager",
  "purpose": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
  },
  "pageObjective": {
    "actor": "Gestor de projeto ou responsável pelo acompanhamento do cronograma da obra",
    "jobToBeDone": "Identificar rapidamente quais tarefas não concluídas estão em risco de atraso e entender os indicadores que explicam cada risco.",
    "primaryDecision": "Decidir qual tarefa em risco requer atenção prioritária no acompanhamento do projeto.",
    "decisiveInfo": [
      "taskStatus",
      "dueDate",
      "progressPercent",
      "riskIndicators",
      "riskExplanation",
      "workTaskId",
      "assessedAt"
    ],
    "usageFrequency": "Recorrente durante o acompanhamento do cronograma e a preparação de relatórios de status.",
    "informationHierarchy": [
      "tarefas em risco e seus estados atuais",
      "prazo e percentual de progresso",
      "indicadores e explicação do risco",
      "identificação da obra e da tarefa",
      "momento da avaliação"
    ],
    "successCriteria": "O gestor consegue localizar a tarefa mais preocupante, compreender por que ela está em risco e usar essa leitura para priorizar o acompanhamento sem consultar outra tela.",
    "antiPatterns": [
      "formulário separado para consulta",
      "campo de texto para digitar projectId",
      "edição manual de status",
      "tabela sem destaque para tarefas não concluídas ou risco",
      "exibir indicadores sem explicação contextual",
      "transformar a consulta em fluxo de criação ou atualização"
    ],
    "criticalActions": [
      {
        "action": "Consultar as tarefas em risco do projeto selecionado",
        "presentation": "selection-contextual-query"
      },
      {
        "action": "Inspecionar uma tarefa e seus fatores de risco",
        "presentation": "master-detail"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView",
      "source": "bff.qryScheduleRiskAssessmentView",
      "command": "qryScheduleRiskAssessmentView",
      "description": "Consultar tarefas em risco de atraso",
      "kind": "query",
      "stateKey": "ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView",
      "inputStateKeys": [
        "ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId"
      ],
      "inputs": [
        {
          "name": "scheduleRiskAssessmentProjectId",
          "stateKey": "ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId",
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
    "id": "scheduleRiskAssessmentView__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/scheduleRiskAssessmentView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/scheduleRiskAssessmentView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "scheduleRiskAssessmentView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
