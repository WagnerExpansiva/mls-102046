/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Pessoa da equipe administrativa ou financeira responsável pelo cadastro e manutenção de faturas.",
    "jobToBeDone": "Localizar uma fatura ou emitir uma nova, conferir seus vínculos e valores e corrigir ou remover o registro quando necessário.",
    "primaryDecision": "Qual fatura deve ser selecionada para corrigir ou excluir, ou quais dados devem ser confirmados para emitir uma nova fatura.",
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
    "usageFrequency": "Recorrente durante o trabalho administrativo, com operações ocasionais de emissão e correção e exclusões menos frequentes.",
    "informationHierarchy": [
      "lista de faturas e estado atual",
      "fatura selecionada e seus vínculos com cliente e obra",
      "valor e referência comercial",
      "ações contextuais de corrigir ou excluir",
      "opção de emitir uma nova fatura"
    ],
    "successCriteria": "A equipe encontra rapidamente o registro certo, reconhece cliente e obra sem memorizar IDs, edita somente decisões reais, emite com contexto suficiente e consegue excluir com segurança e feedback claro.",
    "antiPatterns": [
      "formulário CRUD separado e duplicado para cada operação",
      "status exposto como select livre ou campo manual",
      "IDs técnicos digitados manualmente",
      "exclusão sem confirmação",
      "pickers de cliente e obra como seções independentes da tarefa",
      "ocultar a fatura selecionada durante a edição"
    ],
    "criticalActions": [
      {
        "action": "Selecionar uma fatura para inspeção e edição",
        "presentation": "master-detail"
      },
      {
        "action": "Emitir uma nova fatura",
        "presentation": "primary-button"
      },
      {
        "action": "Corrigir uma fatura selecionada",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Excluir uma fatura selecionada",
        "presentation": "inline-row-command com confirmação destrutiva"
      },
      {
        "action": "Escolher cliente e obra",
        "presentation": "lookup-picker dentro do editor"
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
    "id": "invoiceCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
