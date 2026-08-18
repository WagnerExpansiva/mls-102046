/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/clientCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientCatalogue",
  "pageName": "Cliente",
  "baseClassName": "BuildFlowFsmClientCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Cliente.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Pessoa responsável pelo cadastro e manutenção de clientes.",
    "jobToBeDone": "Localizar rapidamente um cliente e, no mesmo espaço de trabalho, corrigir, excluir ou cadastrar seus dados.",
    "primaryDecision": "Decidir qual cliente selecionar para editar ou excluir, ou iniciar o cadastro de um novo cliente.",
    "decisiveInfo": [
      "clientName",
      "contactEmail",
      "contactPhone",
      "clientId"
    ],
    "usageFrequency": "Ocasional e recorrente em rotinas administrativas de cadastro.",
    "informationHierarchy": [
      "Lista pesquisável e escaneável de clientes",
      "Dados do cliente selecionado",
      "Ações contextuais de atualizar e excluir",
      "Ação e campos mínimos para criar um novo cliente",
      "Feedback de sucesso ou erro das operações"
    ],
    "successCriteria": "O usuário encontra um registro sem esforço, reconhece o contexto selecionado, edita ou exclui com segurança e consegue criar um novo cliente com poucos passos.",
    "antiPatterns": [
      "id digitado manualmente",
      "formulário separado para exclusão",
      "expor clientId como campo editável",
      "status como campo selecionável",
      "duplicar a lista em várias seções",
      "exclusão sem confirmação"
    ],
    "criticalActions": [
      {
        "action": "Selecionar cliente para obter contexto de edição ou exclusão",
        "presentation": "master-detail"
      },
      {
        "action": "Atualizar dados do cliente selecionado",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Excluir cliente selecionado",
        "presentation": "inline-row-command com confirmação destrutiva"
      },
      {
        "action": "Criar novo cliente",
        "presentation": "primary-button abrindo formulário contextual"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientCatalogue.qryListClient",
      "source": "bff.qryListClient",
      "command": "qryListClient",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.clientCatalogue.data.qryListClient",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.clientCatalogue.cmdCreateClient",
      "source": "bff.cmdCreateClient",
      "command": "cmdCreateClient",
      "description": "Criar Cliente",
      "kind": "command",
      "stateKey": "ui.clientCatalogue.output.cmdCreateClient",
      "inputStateKeys": [
        "ui.clientCatalogue.input.cmdCreateClient.clientName",
        "ui.clientCatalogue.input.cmdCreateClient.contactEmail",
        "ui.clientCatalogue.input.cmdCreateClient.contactPhone"
      ],
      "inputs": [
        {
          "name": "clientName",
          "stateKey": "ui.clientCatalogue.input.cmdCreateClient.clientName",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "contactEmail",
          "stateKey": "ui.clientCatalogue.input.cmdCreateClient.contactEmail",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "contactPhone",
          "stateKey": "ui.clientCatalogue.input.cmdCreateClient.contactPhone",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientCatalogue.cmdUpdateClient",
      "source": "bff.cmdUpdateClient",
      "command": "cmdUpdateClient",
      "description": "Atualizar Cliente",
      "kind": "command",
      "stateKey": "ui.clientCatalogue.output.cmdUpdateClient",
      "inputStateKeys": [
        "ui.clientCatalogue.input.cmdUpdateClient.clientId",
        "ui.clientCatalogue.input.cmdUpdateClient.clientName",
        "ui.clientCatalogue.input.cmdUpdateClient.contactEmail",
        "ui.clientCatalogue.input.cmdUpdateClient.contactPhone"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientName",
          "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.clientName",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "contactEmail",
          "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactEmail",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "contactPhone",
          "stateKey": "ui.clientCatalogue.input.cmdUpdateClient.contactPhone",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientCatalogue.cmdDeleteClient",
      "source": "bff.cmdDeleteClient",
      "command": "cmdDeleteClient",
      "description": "Excluir Cliente",
      "kind": "command",
      "stateKey": "ui.clientCatalogue.output.cmdDeleteClient",
      "inputStateKeys": [
        "ui.clientCatalogue.input.cmdDeleteClient.clientId"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.clientCatalogue.input.cmdDeleteClient.clientId",
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
    "id": "clientCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/clientCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/clientCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
