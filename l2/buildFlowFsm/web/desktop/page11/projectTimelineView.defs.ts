/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectTimelineView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectTimelineView",
  "pageName": "Cronograma da obra",
  "baseClassName": "BuildFlowFsmProjectTimelineViewBase",
  "actor": "fieldCoordinator",
  "purpose": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
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
    "id": "projectTimelineView__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectTimelineView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectTimelineView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectTimelineView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
