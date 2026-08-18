/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listClientPortalAccess.defs.ts" enhancement="_blank"/>

export const operationListClientPortalAccess = {
  "operationId": "listClientPortalAccess",
  "title": "Listar Vínculo de acesso do cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ClientPortalAccess",
  "kind": "query",
  "reads": [
    "ClientPortalAccess"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Vínculo de acesso do cliente",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Vínculo de acesso do cliente",
    "entity": "ClientPortalAccess",
    "keyField": "ClientPortalAccess.clientPortalAccessId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "ClientPortalAccess.clientPortalAccessId",
      "ClientPortalAccess.clientId",
      "ClientPortalAccess.platformUserId",
      "ClientPortalAccess.status"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "clientPortalAccessId",
        "type": "string",
        "required": true,
        "fieldRef": "ClientPortalAccess.clientPortalAccessId"
      },
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "ClientPortalAccess.clientId"
      },
      {
        "name": "platformUserId",
        "type": "string",
        "required": true,
        "fieldRef": "ClientPortalAccess.platformUserId"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "ClientPortalAccess.status"
      }
    ]
  },
  "inputs": [],
  "pageId": "clientPortalAccessCatalogue",
  "commandName": "qryListClientPortalAccess",
  "bffName": "qryListClientPortalAccess"
} as const;

export default operationListClientPortalAccess;
