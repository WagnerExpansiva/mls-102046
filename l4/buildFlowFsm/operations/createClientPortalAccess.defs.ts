/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createClientPortalAccess.defs.ts" enhancement="_blank"/>

export const operationCreateClientPortalAccess = {
  "operationId": "createClientPortalAccess",
  "title": "Criar Vínculo de acesso do cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ClientPortalAccess",
  "kind": "create",
  "reads": [
    "Client",
    "ClientPortalAccess",
    "PlatformUser"
  ],
  "writes": [
    "ClientPortalAccess"
  ],
  "rulesApplied": [
    "activeClientPortalAccess"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Criar Vínculo de acesso do cliente",
    "steps": [
      "Informar os dados do novo registro."
    ],
    "outcome": "Informar os dados do novo registro."
  },
  "accessPattern": {
    "kind": "create",
    "description": "Criar Vínculo de acesso do cliente",
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
      "inputId": "clientId",
      "fieldRef": "ClientPortalAccess.clientId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto ao cliente ao qual o usuário externo está associado."
    },
    {
      "inputId": "platformUserId",
      "fieldRef": "ClientPortalAccess.platformUserId",
      "required": true,
      "source": "actorSession",
      "description": "Referência de contexto ao usuário externo da plataforma associado ao cliente."
    },
    {
      "inputId": "status",
      "fieldRef": "ClientPortalAccess.status",
      "required": true,
      "source": "systemDefault",
      "description": "Indica se o vínculo atualmente concede ou não associação do usuário ao cliente."
    }
  ],
  "pageId": "clientPortalAccessCatalogue",
  "commandName": "cmdCreateClientPortalAccess",
  "bffName": "cmdCreateClientPortalAccess"
} as const;

export default operationCreateClientPortalAccess;
