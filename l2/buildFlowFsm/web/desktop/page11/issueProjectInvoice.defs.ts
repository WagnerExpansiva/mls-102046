/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/issueProjectInvoice.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "issueProjectInvoice",
  "pageName": "Emitir fatura da obra",
  "baseClassName": "BuildFlowFsmIssueProjectInvoiceBase",
  "actor": "billingStaff",
  "purpose": "Emitir uma fatura para o cliente com base no resumo de faturamento da obra.",
  "presentation": {
    "categoryRef": "processWizard"
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
    "id": "issueProjectInvoice__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/issueProjectInvoice.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/issueProjectInvoice.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "issueProjectInvoice__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
