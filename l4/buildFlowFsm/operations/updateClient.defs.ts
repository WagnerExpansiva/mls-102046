/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateClient.defs.ts" enhancement="_blank"/>

export const operationUpdateClient = {
  "operationId": "updateClient",
  "title": "Atualizar Cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator"
  ],
  "entity": "Client",
  "kind": "update",
  "reads": [
    "Client"
  ],
  "writes": [
    "Client"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Atualizar Cliente",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Cliente",
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
      "inputId": "clientId",
      "fieldRef": "Client.clientId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas."
    },
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
  "commandName": "cmdUpdateClient",
  "bffName": "cmdUpdateClient"
} as const;

export default operationUpdateClient;
