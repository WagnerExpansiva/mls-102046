/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/clientBillingSummaryView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientBillingSummaryView",
  "pageName": "Resumo de faturamento do cliente",
  "baseClassName": "BuildFlowFsmClientBillingSummaryViewBase",
  "actor": "billingStaff",
  "purpose": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter"
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
    "id": "clientBillingSummaryView__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientBillingSummaryView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientBillingSummaryView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingSummaryView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
