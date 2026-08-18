/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteClientPortalAccess.defs.ts" enhancement="_blank"/>

export const operationDeleteClientPortalAccess = {
  "operationId": "deleteClientPortalAccess",
  "title": "Excluir Vínculo de acesso do cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ClientPortalAccess",
  "kind": "delete",
  "reads": [
    "ClientPortalAccess"
  ],
  "writes": [
    "ClientPortalAccess"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Vínculo de acesso do cliente",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Vínculo de acesso do cliente",
    "entity": "ClientPortalAccess",
    "keyField": "ClientPortalAccess.clientPortalAccessId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ClientPortalAccess.clientPortalAccessId",
      "ClientPortalAccess.clientId",
      "ClientPortalAccess.platformUserId",
      "ClientPortalAccess.status"
    ]
  },
  "outputShape": {
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "clientPortalAccessId",
      "fieldRef": "ClientPortalAccess.clientPortalAccessId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada."
    }
  ],
  "pageId": "clientPortalAccessCatalogue",
  "commandName": "cmdDeleteClientPortalAccess",
  "bffName": "cmdDeleteClientPortalAccess"
} as const;

export default operationDeleteClientPortalAccess;
