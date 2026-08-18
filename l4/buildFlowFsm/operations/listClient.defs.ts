/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listClient.defs.ts" enhancement="_blank"/>

export const operationListClient = {
  "operationId": "listClient",
  "title": "Listar Cliente",
  "actors": [
    "client"
  ],
  "entity": "Client",
  "kind": "query",
  "reads": [
    "Client"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "client",
    "goal": "Listar Cliente",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Cliente",
    "entity": "Client",
    "keyField": "Client.clientId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Client.clientId",
      "Client.clientName",
      "Client.contactEmail",
      "Client.contactPhone"
    ]
  },
  "outputShape": {
    "kind": "list",
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
  "inputs": [],
  "pageId": "approveChangeOrder",
  "commandName": "qryClientPicker",
  "bffName": "qryClientPicker"
} as const;

export default operationListClient;
