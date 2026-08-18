/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/clientBillingSummaryView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientBillingSummaryView",
  "pageName": "Resumo de faturamento do cliente",
  "baseClassName": "BuildFlowFsmClientBillingSummaryViewBase",
  "actor": "billingStaff",
  "purpose": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
  },
  "pageObjective": {
    "actor": "Gestor comercial ou financeiro que acompanha a projeção de faturamento de um cliente e obra.",
    "jobToBeDone": "Consultar rapidamente o reflexo financeiro das alterações aprovadas e das faturas emitidas para entender quanto foi faturado e quanto ainda está disponível ao cliente.",
    "primaryDecision": "Determinar a posição financeira atual do cliente — valores faturáveis, já faturados e ainda disponíveis — após consultar o resumo.",
    "decisiveInfo": [
      "clientId",
      "projectId",
      "approvedChangeOrderAmount",
      "billableAmount",
      "invoicedAmount",
      "clientAvailableAmount",
      "approvedChangeOrderReferences",
      "invoiceReferences"
    ],
    "usageFrequency": "Ocasional, durante acompanhamento comercial/financeiro e revisão de uma obra ou cliente.",
    "informationHierarchy": [
      "Valores disponíveis ao cliente, faturados e faturáveis",
      "Valor total de alterações aprovadas",
      "Cliente e obra em contexto",
      "Referências das alterações aprovadas",
      "Referências das faturas emitidas",
      "Estado da consulta e orientação para selecionar um cliente"
    ],
    "successCriteria": "O usuário identifica a posição financeira em poucos segundos, entende a relação entre alterações aprovadas, valor faturável, faturas emitidas e saldo disponível, e não precisa digitar identificadores técnicos.",
    "antiPatterns": [
      "Expor clientId ou projectId como input digitável",
      "Tratar status ou identificadores técnicos como decisões editáveis",
      "Separar referências e métricas em múltiplas telas sem contexto",
      "Usar uma tabela operacional ou formulário CRUD para um resumo de leitura",
      "Exigir uma etapa de consulta redundante depois que o cliente já foi selecionado"
    ],
    "criticalActions": [
      {
        "action": "Selecionar ou confirmar o cliente em contexto e consultar o resumo",
        "presentation": "selection-context com carregamento e feedback inline"
      },
      {
        "action": "Interpretar a posição financeira consolidada",
        "presentation": "summary-first com métricas contrastadas e referências detalhadas abaixo"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientBillingSummaryView.qryClientBillingSummaryView",
      "source": "bff.qryClientBillingSummaryView",
      "command": "qryClientBillingSummaryView",
      "description": "Consultar o resumo de faturamento",
      "kind": "query",
      "stateKey": "ui.clientBillingSummaryView.data.qryClientBillingSummaryView",
      "inputStateKeys": [
        "ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId"
      ],
      "inputs": [
        {
          "name": "clientBillingSummaryClientId",
          "stateKey": "ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
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
    "id": "clientBillingSummaryView__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/clientBillingSummaryView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/clientBillingSummaryView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingSummaryView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
