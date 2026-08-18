/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceCatalogue",
  "pageName": "Fatura",
  "baseClassName": "BuildFlowFsmInvoiceCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Fatura.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "A user responsible for managing project invoices, such as an administrative or financial operator.",
    "jobToBeDone": "Localizar uma fatura e emitir, corrigir ou remover seu registro com segurança, mantendo os vínculos corretos com cliente e obra.",
    "primaryDecision": "Decidir se deve emitir uma nova fatura ou corrigir/remover uma fatura existente, e então executar a ação correspondente.",
    "decisiveInfo": [
      "invoiceId",
      "clientId",
      "projectId",
      "commercialReference",
      "amount",
      "status",
      "clientName",
      "name"
    ],
    "usageFrequency": "Occasional/back-office, with repeated use when processing or correcting project billing records.",
    "informationHierarchy": [
      "Lista de faturas e seus identificadores, cliente, obra, valor e status",
      "Contexto e dados da fatura selecionada",
      "Ações de corrigir e remover para o registro selecionado",
      "Lookups de cliente e obra para uma nova emissão",
      "Referência comercial e valor antes da emissão ou atualização",
      "Feedback de sucesso ou erro após a operação"
    ],
    "successCriteria": "A operator can identify the correct invoice, understand its current status and associations, complete a minimal create or update decision, and perform deletion only on the intended selected record without manually entering technical identifiers.",
    "antiPatterns": [
      "Separate transition form detached from the selected invoice",
      "Free status select exposing every lifecycle value",
      "Manually typed invoice, client, project, or route identifiers",
      "Duplicating the invoice list into separate create, update, and delete sections",
      "Destructive deletion without confirmation",
      "Exposing system-owned status as an ordinary user-editable field"
    ],
    "criticalActions": [
      {
        "action": "Find and select an invoice",
        "presentation": "master-detail selectable list with contextual detail"
      },
      {
        "action": "Correct the selected invoice",
        "presentation": "contextual detail form with prefilled selected-entity values and primary save action"
      },
      {
        "action": "Remove the selected invoice",
        "presentation": "inline contextual row/detail command with explicit confirmation"
      },
      {
        "action": "Issue a new invoice",
        "presentation": "primary-button creation panel with client and project lookups"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.invoiceCatalogue.qryListInvoice",
      "source": "bff.qryListInvoice",
      "command": "qryListInvoice",
      "description": "Listar Fatura",
      "kind": "query",
      "stateKey": "ui.invoiceCatalogue.data.qryListInvoice",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.invoiceCatalogue.cmdCreateInvoice",
      "source": "bff.cmdCreateInvoice",
      "command": "cmdCreateInvoice",
      "description": "Emitir a fatura",
      "kind": "command",
      "stateKey": "ui.invoiceCatalogue.output.cmdCreateInvoice",
      "inputStateKeys": [
        "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference",
        "ui.invoiceCatalogue.input.cmdCreateInvoice.amount"
      ],
      "inputs": [
        {
          "name": "clientClientId",
          "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "commercialReference",
          "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "amount",
          "stateKey": "ui.invoiceCatalogue.input.cmdCreateInvoice.amount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.invoiceCatalogue.cmdUpdateInvoice",
      "source": "bff.cmdUpdateInvoice",
      "command": "cmdUpdateInvoice",
      "description": "Atualizar Fatura",
      "kind": "command",
      "stateKey": "ui.invoiceCatalogue.output.cmdUpdateInvoice",
      "inputStateKeys": [
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount",
        "ui.invoiceCatalogue.input.cmdUpdateInvoice.status"
      ],
      "inputs": [
        {
          "name": "invoiceId",
          "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientId",
          "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectId",
          "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "commercialReference",
          "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "amount",
          "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.amount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.invoiceCatalogue.input.cmdUpdateInvoice.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.invoiceCatalogue.cmdDeleteInvoice",
      "source": "bff.cmdDeleteInvoice",
      "command": "cmdDeleteInvoice",
      "description": "Excluir Fatura",
      "kind": "command",
      "stateKey": "ui.invoiceCatalogue.output.cmdDeleteInvoice",
      "inputStateKeys": [
        "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId"
      ],
      "inputs": [
        {
          "name": "invoiceId",
          "stateKey": "ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.invoiceCatalogue.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.invoiceCatalogue.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.invoiceCatalogue.qryProjectPicker",
      "source": "bff.qryProjectPicker",
      "command": "qryProjectPicker",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.invoiceCatalogue.data.qryProjectPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "invoiceCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
