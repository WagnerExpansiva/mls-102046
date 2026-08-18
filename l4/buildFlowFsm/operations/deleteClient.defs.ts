/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteClient.defs.ts" enhancement="_blank"/>

export const operationDeleteClient = {
  "operationId": "deleteClient",
  "title": "Excluir Cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator"
  ],
  "entity": "Client",
  "kind": "delete",
  "reads": [
    "Client"
  ],
  "writes": [
    "Client"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Cliente",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Cliente",
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
    }
  ],
  "pageId": "clientCatalogue",
  "commandName": "cmdDeleteClient",
  "bffName": "cmdDeleteClient"
} as const;

export default operationDeleteClient;
