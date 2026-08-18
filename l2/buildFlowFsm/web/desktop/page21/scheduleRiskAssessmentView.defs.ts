/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/scheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

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
    "actor": "Gerente de projeto ou responsável pelo acompanhamento do cronograma da obra",
    "jobToBeDone": "Identificar rapidamente quais tarefas não concluídas estão em risco de atraso e entender os indicadores que explicam cada risco para orientar o relatório de status.",
    "primaryDecision": "Qual tarefa em risco exige atenção primeiro?",
    "decisiveInfo": [
      "workTaskId",
      "taskStatus",
      "dueDate",
      "progressPercent",
      "riskIndicators",
      "riskExplanation",
      "assessedAt"
    ],
    "usageFrequency": "Recorrente durante o acompanhamento do cronograma e a preparação de relatórios de status.",
    "informationHierarchy": [
      "tarefas em risco e sua prioridade implícita pelos indicadores",
      "status atual e prazo de cada tarefa",
      "progresso percentual comparado ao prazo",
      "explicação dos indicadores de risco",
      "data da avaliação e identificação da tarefa/projeto"
    ],
    "successCriteria": "O usuário localiza imediatamente as tarefas em risco, distingue as que demandam atenção mais urgente e consegue justificar a avaliação com indicadores, progresso, prazo e explicação sem inserir dados manualmente.",
    "antiPatterns": [
      "formulário de consulta separado",
      "campo de texto para digitar projectId ou workTaskId",
      "edição manual de status ou progresso",
      "tabela genérica que esconde os indicadores e a explicação do risco",
      "inventar ações de correção ou transições que não existem no contrato"
    ],
    "criticalActions": [
      {
        "action": "Consultar a avaliação de risco do projeto selecionado",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Interpretar e priorizar tarefas em risco",
        "presentation": "summary-first"
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
    "id": "scheduleRiskAssessmentView__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/scheduleRiskAssessmentView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/scheduleRiskAssessmentView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "scheduleRiskAssessmentView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
