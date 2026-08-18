/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/clientCatalogue.defs.ts" enhancement="_blank"/>

export const clientCatalogueWorkspace = {
  "workspaceId": "clientCatalogue",
  "title": "Cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator"
  ],
  "kind": "operation",
  "entity": "Client",
  "bffCalls": [
    {
      "bffId": "qryListClient",
      "kind": "query",
      "uses": [
        {
          "operationId": "listClient"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "clientId",
            "from": "listClient.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientName",
            "from": "listClient.$items.clientName",
            "type": "string",
            "required": true
          },
          {
            "name": "contactEmail",
            "from": "listClient.$items.contactEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "contactPhone",
            "from": "listClient.$items.contactPhone",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.clientCatalogue.qryListClient"
    },
    {
      "bffId": "cmdCreateClient",
      "kind": "command",
      "uses": [
        {
          "operationId": "createClient"
        }
      ],
      "input": [
        {
          "name": "clientName",
          "from": "createClient.clientName",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "contactEmail",
          "from": "createClient.contactEmail",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "contactPhone",
          "from": "createClient.contactPhone",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientId",
            "from": "createClient.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientName",
            "from": "createClient.clientName",
            "type": "string",
            "required": true
          },
          {
            "name": "contactEmail",
            "from": "createClient.contactEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "contactPhone",
            "from": "createClient.contactPhone",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.clientCatalogue.cmdCreateClient"
    },
    {
      "bffId": "cmdUpdateClient",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateClient"
        }
      ],
      "input": [
        {
          "name": "clientId",
          "from": "updateClient.clientId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "clientName",
          "from": "updateClient.clientName",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "contactEmail",
          "from": "updateClient.contactEmail",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "contactPhone",
          "from": "updateClient.contactPhone",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientId",
            "from": "updateClient.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientName",
            "from": "updateClient.clientName",
            "type": "string",
            "required": true
          },
          {
            "name": "contactEmail",
            "from": "updateClient.contactEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "contactPhone",
            "from": "updateClient.contactPhone",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.clientCatalogue.cmdUpdateClient"
    },
    {
      "bffId": "cmdDeleteClient",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteClient"
        }
      ],
      "input": [
        {
          "name": "clientId",
          "from": "deleteClient.clientId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientId",
            "from": "deleteClient.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientName",
            "from": "deleteClient.clientName",
            "type": "string",
            "required": true
          },
          {
            "name": "contactEmail",
            "from": "deleteClient.contactEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "contactPhone",
            "from": "deleteClient.contactPhone",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.clientCatalogue.cmdDeleteClient"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Cliente.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListClient"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteClient"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Cliente.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateClient"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateClient"
        }
      ]
    }
  ],
  "operationIds": [
    "createClient",
    "deleteClient",
    "listClient",
    "updateClient"
  ],
  "purpose": "Cadastro de Cliente.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:dcd3500a"
} as const;

export default clientCatalogueWorkspace;
