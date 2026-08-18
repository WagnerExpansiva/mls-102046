/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/issueProjectInvoice.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "issueProjectInvoice",
  "pageName": "Emitir fatura da obra",
  "baseClassName": "BuildFlowFsmIssueProjectInvoiceBase",
  "actor": "billingStaff",
  "purpose": "Emitir uma fatura para o cliente com base no resumo de faturamento da obra.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Responsável financeiro ou gestor de obras que emite e disponibiliza faturas de projetos.",
    "jobToBeDone": "Selecionar o cliente e a obra corretos, conferir o saldo de faturamento e emitir a fatura, disponibilizando-a ao cliente em seguida.",
    "primaryDecision": "Confirmar a emissão de uma fatura com valor e referência comercial adequados ao saldo faturável da obra.",
    "decisiveInfo": [
      "clientName",
      "name",
      "status",
      "approvedChangeOrderAmount",
      "billableAmount",
      "invoicedAmount",
      "clientAvailableAmount",
      "commercialReference",
      "amount"
    ],
    "usageFrequency": "Ocasional, durante o fechamento ou faturamento de uma obra; exige precisão mais do que processamento contínuo.",
    "informationHierarchy": [
      "cliente e obra selecionados",
      "status da obra",
      "valor faturável disponível e valor já faturado",
      "ordens de alteração aprovadas e referências de faturas",
      "referência comercial e valor a emitir",
      "confirmação da emissão",
      "próxima ação para disponibilizar a fatura ao cliente"
    ],
    "successCriteria": "O operador identifica sem ambiguidade o cliente e a obra, usa o resumo como referência para informar um valor válido, emite a fatura sem redigitar identificadores e encontra imediatamente a ação de disponibilizá-la ao cliente.",
    "antiPatterns": [
      "formulário CRUD expondo ids de cliente, projeto ou fatura",
      "status como campo select livre",
      "seção de consulta sem contexto da seleção",
      "pedir novamente referência ou valor já disponíveis na fatura criada",
      "emitir sem mostrar o saldo faturável e o valor já faturado",
      "separar a ação de disponibilização de seu contexto da fatura emitida"
    ],
    "criticalActions": [
      {
        "action": "Emitir a fatura",
        "presentation": "primary-button contextual ao resumo e à obra selecionada"
      },
      {
        "action": "Selecionar cliente e obra",
        "presentation": "master-detail com seleção reconhecível, nunca ids digitados"
      },
      {
        "action": "Consultar o resumo de faturamento",
        "presentation": "summary-first atualizado após a seleção do cliente"
      },
      {
        "action": "Disponibilizar a fatura ao cliente",
        "presentation": "contextual-transition-actions na fatura selecionada, após emissão"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.issueProjectInvoice.qryLocateClient",
      "source": "bff.qryLocateClient",
      "command": "qryLocateClient",
      "description": "Localizar o cliente",
      "kind": "query",
      "stateKey": "ui.issueProjectInvoice.data.qryLocateClient",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.issueProjectInvoice.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.issueProjectInvoice.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.issueProjectInvoice.qryInspectClientBillingSummary",
      "source": "bff.qryInspectClientBillingSummary",
      "command": "qryInspectClientBillingSummary",
      "description": "Consultar o resumo de faturamento",
      "kind": "query",
      "stateKey": "ui.issueProjectInvoice.data.qryInspectClientBillingSummary",
      "inputStateKeys": [
        "ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "inputs": [
        {
          "name": "clientBillingSummaryClientId",
          "stateKey": "ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.issueProjectInvoice.cmdCreateInvoice",
      "source": "bff.cmdCreateInvoice",
      "command": "cmdCreateInvoice",
      "description": "Emitir a fatura",
      "kind": "command",
      "stateKey": "ui.issueProjectInvoice.output.cmdCreateInvoice",
      "inputStateKeys": [
        "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.amount"
      ],
      "inputs": [
        {
          "name": "clientClientId",
          "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "commercialReference",
          "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "amount",
          "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.amount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.issueProjectInvoice.cmdHandoffInvoiceToClient",
      "source": "bff.cmdHandoffInvoiceToClient",
      "command": "cmdHandoffInvoiceToClient",
      "description": "Disponibilizar a fatura ao cliente",
      "kind": "command",
      "stateKey": "ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient",
      "inputStateKeys": [
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId",
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference",
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount"
      ],
      "inputs": [
        {
          "name": "invoiceInvoiceId",
          "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "commercialReference",
          "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "amount",
          "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "issueProjectInvoice__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/issueProjectInvoice.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/issueProjectInvoice.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "issueProjectInvoice__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
