/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/consultApprovedProjectChangeOrders.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consultApprovedProjectChangeOrders",
  "pageName": "Consultar alterações aprovadas da obra",
  "baseClassName": "BuildFlowFsmConsultApprovedProjectChangeOrdersBase",
  "actor": "client",
  "purpose": "Consultar ordens aprovadas da própria obra e seus valores no faturamento.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Cliente ou responsável do cliente pela obra",
    "jobToBeDone": "Localizar a própria obra, revisar as alterações aprovadas e entender como elas se refletem no faturamento.",
    "primaryDecision": "Confirmar quais alterações aprovadas impactam a obra e quanto desse valor já foi faturado ou ainda está disponível.",
    "decisiveInfo": [
      "name",
      "address",
      "status",
      "changeOrderId",
      "description",
      "scopeImpact",
      "scheduleImpact",
      "changeAmount",
      "submittedAt",
      "forwardedForClientApprovalAt",
      "clientId",
      "projectId",
      "approvedChangeOrderReferences",
      "invoiceReferences",
      "approvedChangeOrderAmount",
      "billableAmount",
      "invoicedAmount",
      "clientAvailableAmount"
    ],
    "usageFrequency": "Ocasional, durante revisões de obra e conferência de faturamento.",
    "informationHierarchy": [
      "Obra selecionada e seu contexto",
      "Alterações aprovadas e seus impactos de escopo, prazo e valor",
      "Resumo financeiro relacionado, incluindo aprovado, faturado e disponível",
      "Referências de alterações e faturas para conferência"
    ],
    "successCriteria": "O usuário identifica rapidamente a obra correta, consegue revisar cada alteração aprovada sem perder o contexto e compara os valores aprovados com o que foi faturado e permanece disponível.",
    "antiPatterns": [
      "Formulário CRUD genérico",
      "Digitação manual de projectId, changeOrderId ou clientId",
      "Expor status como campo editável ou select livre",
      "Separar a seleção da obra e o detalhe da alteração em fluxos desconectados",
      "Esconder os valores financeiros decisivos abaixo de detalhes secundários"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra e carregar seu contexto",
        "presentation": "primary-surface-selection"
      },
      {
        "action": "Consultar uma alteração aprovada da obra",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Consultar o resumo de faturamento do cliente",
        "presentation": "contextual-summary-action"
      }
    ]
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
    "id": "consultApprovedProjectChangeOrders__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/consultApprovedProjectChangeOrders.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/consultApprovedProjectChangeOrders.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "consultApprovedProjectChangeOrders__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
