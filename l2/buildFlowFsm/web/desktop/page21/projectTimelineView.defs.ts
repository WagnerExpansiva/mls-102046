/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectTimelineView.defs.ts" enhancement="_blank"/>

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
    "actor": "Gestor da obra ou responsável pelo planejamento e acompanhamento de campo.",
    "jobToBeDone": "Consultar rapidamente a sequência de tarefas e prazos de um projeto para planejar e acompanhar a execução da obra.",
    "primaryDecision": "Identificar a próxima sequência de tarefas e os prazos que exigem atenção no projeto selecionado.",
    "decisiveInfo": [
      "projectId",
      "workTasks",
      "scheduleEntries"
    ],
    "usageFrequency": "Recorrente durante o planejamento e o acompanhamento da obra, especialmente em revisões de cronograma e rotinas de campo.",
    "informationHierarchy": [
      "Projeto em contexto e estado da consulta",
      "Sequência temporal das tarefas",
      "Prazos e entradas do cronograma",
      "Detalhes de cada tarefa, incluindo responsável, status e progresso"
    ],
    "successCriteria": "O usuário reconhece imediatamente o projeto consultado, entende a sequência e os prazos das tarefas e consegue localizar rapidamente itens em andamento ou que exigem atenção.",
    "antiPatterns": [
      "Exigir digitação manual do projectId",
      "Expor status como campo editável ou select",
      "Transformar a consulta em formulário CRUD",
      "Ocultar a sequência temporal em uma lista sem ordenação por prazo",
      "Adicionar ações de alteração que não existem no contrato"
    ],
    "criticalActions": [
      {
        "action": "qryProjectTimelineView",
        "presentation": "contextual-query-action"
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
    "id": "projectTimelineView__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectTimelineView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectTimelineView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectTimelineView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
