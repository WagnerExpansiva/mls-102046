/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/issueProjectInvoice.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável financeiro ou gestor da obra que emite e disponibiliza faturas para clientes.",
    "jobToBeDone": "Validar o saldo faturável da obra selecionada, emitir a fatura no valor correto e disponibilizá-la ao cliente.",
    "primaryDecision": "Emitir a fatura pelo valor faturável apropriado e, em seguida, disponibilizá-la ao cliente.",
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
    "usageFrequency": "Ocasional, em rotinas administrativas de faturamento após avanço ou aprovação de etapas da obra.",
    "informationHierarchy": [
      "Cliente e obra selecionados",
      "Valor faturável disponível e valor já faturado",
      "Status da obra e referências comerciais",
      "Referência comercial e valor da nova fatura",
      "Status da fatura emitida",
      "Ação de disponibilizar ao cliente"
    ],
    "successCriteria": "O usuário identifica sem ambiguidade a obra e o cliente, compara o valor a emitir com o resumo de faturamento, emite sem redigitar ids e consegue disponibilizar a fatura emitida como próximo passo contextual.",
    "antiPatterns": [
      "formulário CRUD expondo ids de cliente, obra ou fatura",
      "campo livre para editar status da fatura",
      "emitir sem mostrar o resumo faturável",
      "formulário separado e desconectado para disponibilização",
      "exigir redigitação da referência ou valor quando já existirem no resultado da emissão"
    ],
    "criticalActions": [
      {
        "action": "Emitir a fatura",
        "presentation": "primary-button contextual ao resumo da obra selecionada"
      },
      {
        "action": "Disponibilizar a fatura ao cliente",
        "presentation": "contextual-transition-actions no resultado da fatura emitida"
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
    "id": "issueProjectInvoice__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/issueProjectInvoice.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/issueProjectInvoice.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "issueProjectInvoice__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
