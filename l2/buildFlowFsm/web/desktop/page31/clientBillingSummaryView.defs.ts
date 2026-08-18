/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/clientBillingSummaryView.defs.ts" enhancement="_blank"/>

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
    "actor": "Pessoa responsável por acompanhar o faturamento comercial de um cliente e sua obra.",
    "jobToBeDone": "Consultar rapidamente o reflexo financeiro do cliente, comparando valores aprovados, faturáveis, faturados e ainda disponibilizados.",
    "primaryDecision": "Determinar quanto do valor aprovado já foi faturado e quanto permanece disponível para o cliente.",
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
    "usageFrequency": "Occasional/back-office, quando é necessário revisar a posição financeira de um cliente ou obra.",
    "informationHierarchy": [
      "Valores disponibilizados, faturados e faturáveis",
      "Valor total de alterações aprovadas",
      "Identificação do cliente e da obra",
      "Referências das alterações aprovadas",
      "Referências das faturas"
    ],
    "successCriteria": "O usuário identifica a posição financeira em poucos segundos, entende a relação entre os valores e consegue verificar as referências de suporte sem digitar identificadores ou navegar por formulários desnecessários.",
    "antiPatterns": [
      "formulário de consulta separado",
      "entrada manual de clientId",
      "exposição de ids como campos editáveis",
      "status select",
      "duplicar cada entidade relacionada em uma seção independente",
      "priorizar referências textuais antes dos totais"
    ],
    "criticalActions": [
      {
        "action": "Consultar o resumo para o cliente selecionado",
        "presentation": "selection-contextual primary action"
      },
      {
        "action": "Interpretar os valores consolidados",
        "presentation": "summary-first metric presentation"
      },
      {
        "action": "Verificar alterações aprovadas e faturas de suporte",
        "presentation": "progressive detail within the summary surface"
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
    "id": "clientBillingSummaryView__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/clientBillingSummaryView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/clientBillingSummaryView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingSummaryView__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/dashboardCommandCenter/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
