/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceChangeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceChangeOrderCatalogue",
  "pageName": "Aplicação de ordem de mudança na fatura",
  "baseClassName": "BuildFlowFsmInvoiceChangeOrderCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Aplicação de ordem de mudança na fatura.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Profissional financeiro ou administrativo responsável por manter aplicações de ordens de mudança nas faturas.",
    "jobToBeDone": "Localizar uma aplicação de ordem de mudança na fatura e criar, corrigir ou remover o vínculo com segurança.",
    "primaryDecision": "Decidir qual vínculo invoice–change order deve ser criado ou alterado e qual valor faturado deve ser registrado.",
    "decisiveInfo": [
      "invoiceId",
      "commercialReference",
      "amount",
      "status",
      "changeOrderId",
      "description",
      "changeAmount",
      "scopeImpact",
      "scheduleImpact",
      "billedAmount",
      "invoiceChangeOrderId"
    ],
    "usageFrequency": "Ocassional/back-office, durante o fechamento e a manutenção de faturamento de projetos.",
    "informationHierarchy": [
      "Aplicações existentes e vínculo selecionado",
      "Identidade e contexto da fatura",
      "Identidade, descrição, impactos e valor da ordem de mudança",
      "Valor faturado",
      "Ações de salvar alteração ou remover vínculo",
      "Seleção de fatura e ordem de mudança para nova aplicação"
    ],
    "successCriteria": "O usuário encontra rapidamente o vínculo correto, entende os dois registros relacionados antes de alterar o valor e conclui criação, correção ou remoção sem digitar identificadores técnicos.",
    "antiPatterns": [
      "Expor ids como campos de texto",
      "Formulário separado para exclusão",
      "Status editável manualmente",
      "Duplicar uma seção independente para cada picker",
      "Permitir alteração sem mostrar o contexto atual da fatura e da ordem de mudança"
    ],
    "criticalActions": [
      {
        "action": "Criar nova aplicação",
        "presentation": "primary-button"
      },
      {
        "action": "Corrigir aplicação selecionada",
        "presentation": "contextual-detail-action"
      },
      {
        "action": "Excluir aplicação selecionada",
        "presentation": "inline-row-command com confirmação destrutiva"
      },
      {
        "action": "Escolher fatura e ordem de mudança",
        "presentation": "rich-selection-picker"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder",
      "source": "bff.qryListInvoiceChangeOrder",
      "command": "qryListInvoiceChangeOrder",
      "description": "Listar Aplicação de ordem de mudança na fatura",
      "kind": "query",
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder",
      "source": "bff.cmdCreateInvoiceChangeOrder",
      "command": "cmdCreateInvoiceChangeOrder",
      "description": "Criar Aplicação de ordem de mudança na fatura",
      "kind": "command",
      "stateKey": "ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder",
      "inputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount"
      ],
      "inputs": [
        {
          "name": "invoiceId",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "changeOrderId",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "billedAmount",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder",
      "source": "bff.cmdUpdateInvoiceChangeOrder",
      "command": "cmdUpdateInvoiceChangeOrder",
      "description": "Atualizar Aplicação de ordem de mudança na fatura",
      "kind": "command",
      "stateKey": "ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder",
      "inputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId",
        "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount"
      ],
      "inputs": [
        {
          "name": "invoiceChangeOrderId",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "invoiceId",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "changeOrderId",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "billedAmount",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder",
      "source": "bff.cmdDeleteInvoiceChangeOrder",
      "command": "cmdDeleteInvoiceChangeOrder",
      "description": "Excluir Aplicação de ordem de mudança na fatura",
      "kind": "command",
      "stateKey": "ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder",
      "inputStateKeys": [
        "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId"
      ],
      "inputs": [
        {
          "name": "invoiceChangeOrderId",
          "stateKey": "ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.invoiceChangeOrderCatalogue.qryInvoicePicker",
      "source": "bff.qryInvoicePicker",
      "command": "qryInvoicePicker",
      "description": "Listar Fatura",
      "kind": "query",
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.invoiceChangeOrderCatalogue.qryChangeOrderPicker",
      "source": "bff.qryChangeOrderPicker",
      "command": "qryChangeOrderPicker",
      "description": "Listar Ordem de mudança",
      "kind": "query",
      "stateKey": "ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "invoiceChangeOrderCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceChangeOrderCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceChangeOrderCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceChangeOrderCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
