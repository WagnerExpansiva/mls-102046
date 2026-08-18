/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/locateClient.defs.ts" enhancement="_blank"/>

export const operationLocateClient = {
  "operationId": "locateClient",
  "title": "Localizar o cliente",
  "actors": [
    "billingStaff"
  ],
  "entity": "Client",
  "kind": "query",
  "reads": [
    "Client"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Localizar o cliente",
    "steps": [
      "Localizar o cliente",
      "Um cliente do catálogo compartilhado está selecionado."
    ],
    "outcome": "Um cliente do catálogo compartilhado está selecionado."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Localizar o cliente",
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
  "pageId": "issueProjectInvoice",
  "commandName": "qryLocateClient",
  "bffName": "qryLocateClient"
} as const;

export default operationLocateClient;
