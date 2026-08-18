/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/clientCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Equipe administrativa responsável pelo cadastro de clientes.",
    "jobToBeDone": "Localizar um cliente e, no mesmo espaço de trabalho, corrigi-lo, removê-lo ou cadastrar um novo cliente.",
    "primaryDecision": "Escolher o registro correto ou iniciar a criação de um novo cliente e então executar a ação de manutenção correspondente.",
    "decisiveInfo": [
      "clientName",
      "contactEmail",
      "contactPhone",
      "clientId"
    ],
    "usageFrequency": "Uso recorrente de back-office, geralmente em sessões ocasionais de manutenção cadastral.",
    "informationHierarchy": [
      "Lista escaneável de clientes e seus dados de contato",
      "Contexto completo do cliente selecionado",
      "Ações contextuais de atualizar ou excluir",
      "Ação e formulário de criação de novo cliente",
      "Feedback de sucesso ou erro das operações"
    ],
    "successCriteria": "A equipe encontra um cliente rapidamente, reconhece o registro pelo nome e contatos, edita sem redigitar o identificador, exclui somente após confirmação e cria novos registros com poucos campos.",
    "antiPatterns": [
      "Empilhar um formulário de atualização separado e desconectado da lista",
      "Expor clientId como campo digitável",
      "Usar um seletor livre de identificadores para editar ou excluir",
      "Tratar exclusão como ação sem confirmação",
      "Exigir que o usuário preencha campos técnicos ou gerenciados pelo sistema"
    ],
    "criticalActions": [
      {
        "action": "Localizar e selecionar um cliente",
        "presentation": "master-detail list with contextual selection"
      },
      {
        "action": "Atualizar o cliente selecionado",
        "presentation": "contextual detail form with prefilled values and primary action"
      },
      {
        "action": "Excluir o cliente selecionado",
        "presentation": "inline contextual destructive action with confirmation"
      },
      {
        "action": "Criar um novo cliente",
        "presentation": "primary button opening a concise create form"
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
    "id": "clientCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/clientCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/clientCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
