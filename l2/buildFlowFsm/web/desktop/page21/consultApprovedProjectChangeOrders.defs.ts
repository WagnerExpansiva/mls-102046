/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/consultApprovedProjectChangeOrders.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável pela gestão da obra ou do relacionamento financeiro com o cliente.",
    "jobToBeDone": "Selecionar a obra correta, conferir suas alterações aprovadas e entender imediatamente o impacto delas no faturamento do cliente.",
    "primaryDecision": "Determinar se as alterações aprovadas estão corretamente refletidas no faturamento disponível para o cliente.",
    "decisiveInfo": [
      "name",
      "status",
      "authorizedBudget",
      "changeOrderId",
      "description",
      "scopeImpact",
      "scheduleImpact",
      "changeAmount",
      "forwardedForClientApprovalAt",
      "approvedChangeOrderAmount",
      "billableAmount",
      "invoicedAmount",
      "clientAvailableAmount",
      "approvedChangeOrderReferences",
      "invoiceReferences"
    ],
    "usageFrequency": "Ocasional, durante conferências de obra, validação de aprovações e acompanhamento financeiro.",
    "informationHierarchy": [
      "Obra selecionada e seu status/contexto",
      "Valor total das alterações aprovadas",
      "Valor faturável, já faturado e disponível ao cliente",
      "Detalhes de cada alteração aprovada e seus impactos",
      "Referências de alterações aprovadas e faturas",
      "Datas e demais informações de apoio"
    ],
    "successCriteria": "O usuário identifica a obra sem digitar IDs, vê primeiro os valores de faturamento decisivos, consegue conferir cada alteração aprovada e entende a conciliação entre aprovações, cobranças e disponibilidade do cliente.",
    "antiPatterns": [
      "Empilhar formulários separados para cada consulta",
      "Expor IDs técnicos como campos de entrada",
      "Permitir edição manual de status",
      "Ocultar o contexto da obra selecionada",
      "Tratar o resumo financeiro como uma tabela sem destaque dos valores principais",
      "Mostrar consultas dependentes sem indicar qual obra ou cliente está em contexto"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra e carregar o contexto dependente",
        "presentation": "master-detail com seleção contextual na superfície de obras"
      },
      {
        "action": "Consultar alterações aprovadas da obra selecionada",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Consultar o resumo de faturamento do cliente em contexto",
        "presentation": "summary-first contextual detail"
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
    "id": "consultApprovedProjectChangeOrders__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/consultApprovedProjectChangeOrders.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/consultApprovedProjectChangeOrders.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "consultApprovedProjectChangeOrders__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
