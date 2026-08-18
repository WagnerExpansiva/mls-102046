/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/consultApprovedProjectChangeOrders.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consultApprovedProjectChangeOrders",
  "pageName": "Consultar alterações aprovadas da obra",
  "baseClassName": "BuildFlowFsmConsultApprovedProjectChangeOrdersBase",
  "actor": "client",
  "purpose": "Consultar ordens aprovadas da própria obra e seus valores no faturamento.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "dataBindings": [
    {
      "id": "binding.consultApprovedProjectChangeOrders.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.consultApprovedProjectChangeOrders.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders",
      "source": "bff.qryInspectApprovedChangeOrders",
      "command": "qryInspectApprovedChangeOrders",
      "description": "Consultar as alterações aprovadas",
      "kind": "query",
      "stateKey": "ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders",
      "inputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId"
      ],
      "inputs": [
        {
          "name": "changeOrderChangeOrderId",
          "stateKey": "ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary",
      "source": "bff.qryInspectClientBillingSummary",
      "command": "qryInspectClientBillingSummary",
      "description": "Consultar o resumo de faturamento",
      "kind": "query",
      "stateKey": "ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary",
      "inputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "inputs": [
        {
          "name": "clientBillingSummaryClientId",
          "stateKey": "ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
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
    "id": "consultApprovedProjectChangeOrders__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/consultApprovedProjectChangeOrders.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/consultApprovedProjectChangeOrders.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "consultApprovedProjectChangeOrders__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
