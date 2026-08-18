/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectExecutionOverviewView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectExecutionOverviewView",
  "pageName": "Visão consolidada de execução da obra",
  "baseClassName": "BuildFlowFsmProjectExecutionOverviewViewBase",
  "actor": "projectManager",
  "purpose": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
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
    "id": "projectExecutionOverviewView__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectExecutionOverviewView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectExecutionOverviewView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectExecutionOverviewView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
