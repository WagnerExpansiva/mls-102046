/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceChangeOrderCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Profissional financeiro ou administrativo responsável por aplicar ordens de mudança às faturas.",
    "jobToBeDone": "Localizar uma aplicação de ordem de mudança na fatura e criar, corrigir ou remover o vínculo com o valor faturado correto.",
    "primaryDecision": "Decidir qual fatura e qual ordem de mudança devem ser vinculadas e qual valor faturado registrar, ou qual vínculo selecionado remover.",
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
    "usageFrequency": "Uso ocasional e operacional, principalmente durante o faturamento e a conciliação de mudanças aprovadas.",
    "informationHierarchy": [
      "Aplicações existentes e registro selecionado",
      "Contexto da fatura: referência comercial, valor e status",
      "Contexto da ordem de mudança: descrição, impactos, valor e status",
      "Valor faturado da aplicação",
      "Ações de criar, corrigir e remover"
    ],
    "successCriteria": "O usuário encontra rapidamente o vínculo correto, entende os contextos da fatura e da ordem de mudança antes de gravar, altera somente o valor necessário e recebe confirmação clara após criar, atualizar ou remover.",
    "antiPatterns": [
      "Expor identificadores técnicos como campos de texto",
      "Permitir editar invoiceChangeOrderId manualmente",
      "Duplicar consultas de seleção em seções independentes",
      "Usar um formulário separado para exclusão",
      "Oferecer status como campo livre ou select quando o status é apenas contexto",
      "Permitir salvar sem mostrar o registro selecionado e seus dados de referência"
    ],
    "criticalActions": [
      {
        "action": "Selecionar uma aplicação existente para correção ou remoção",
        "presentation": "master-detail-selection-with-contextual-actions"
      },
      {
        "action": "Criar uma nova aplicação vinculando fatura, ordem de mudança e valor faturado",
        "presentation": "primary-button-in-contextual-editor"
      },
      {
        "action": "Corrigir o valor ou os vínculos da aplicação selecionada",
        "presentation": "contextual-edit-action-in-detail-panel"
      },
      {
        "action": "Remover a aplicação selecionada",
        "presentation": "inline-row-command-with-destructive-confirmation"
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
    "id": "invoiceChangeOrderCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceChangeOrderCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceChangeOrderCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceChangeOrderCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
