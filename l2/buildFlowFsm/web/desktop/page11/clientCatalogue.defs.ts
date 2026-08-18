/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/clientCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientCatalogue",
  "pageName": "Cliente",
  "baseClassName": "BuildFlowFsmClientCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Cliente.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
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
    "id": "clientCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
