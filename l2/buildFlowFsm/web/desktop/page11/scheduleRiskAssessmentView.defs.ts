/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/scheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "scheduleRiskAssessmentView",
  "pageName": "Avaliação de risco de atraso",
  "baseClassName": "BuildFlowFsmScheduleRiskAssessmentViewBase",
  "actor": "projectManager",
  "purpose": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
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
    "id": "scheduleRiskAssessmentView__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/scheduleRiskAssessmentView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/scheduleRiskAssessmentView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "scheduleRiskAssessmentView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
