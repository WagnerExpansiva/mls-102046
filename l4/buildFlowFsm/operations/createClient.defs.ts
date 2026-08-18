/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createClient.defs.ts" enhancement="_blank"/>

export const operationCreateClient = {
  "operationId": "createClient",
  "title": "Criar Cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator"
  ],
  "entity": "Client",
  "kind": "create",
  "reads": [
    "Client"
  ],
  "writes": [
    "Client"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Criar Cliente",
    "steps": [
      "Informar os dados do novo registro."
    ],
    "outcome": "Informar os dados do novo registro."
  },
  "accessPattern": {
    "kind": "create",
    "description": "Criar Cliente",
    "entity": "Client",
    "keyField": "Client.clientId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Client.clientId",
      "Client.clientName",
      "Client.contactEmail",
      "Client.contactPhone"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "Client.clientId"
      },
      {
        "name": "clientName",
        "type": "string",
        "required": true,
        "fieldRef": "Client.clientName"
      },
      {
        "name": "contactEmail",
        "type": "string",
        "required": false,
        "fieldRef": "Client.contactEmail"
      },
      {
        "name": "contactPhone",
        "type": "string",
        "required": false,
        "fieldRef": "Client.contactPhone"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "clientName",
      "fieldRef": "Client.clientName",
      "required": true,
      "source": "userInput",
      "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações."
    },
    {
      "inputId": "contactEmail",
      "fieldRef": "Client.contactEmail",
      "required": false,
      "source": "userInput",
      "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados."
    },
    {
      "inputId": "contactPhone",
      "fieldRef": "Client.contactPhone",
      "required": false,
      "source": "userInput",
      "description": "Telefone de contato do cliente para comunicação relacionada às suas obras."
    }
  ],
  "pageId": "clientCatalogue",
  "commandName": "cmdCreateClient",
  "bffName": "cmdCreateClient"
} as const;

export default operationCreateClient;
