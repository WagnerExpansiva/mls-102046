/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/clientPortalAccessCatalogue.defs.ts" enhancement="_blank"/>

export const clientPortalAccessCatalogueWorkspace = {
  "workspaceId": "clientPortalAccessCatalogue",
  "title": "Vínculo de acesso do cliente",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "ClientPortalAccess",
  "bffCalls": [
    {
      "bffId": "qryListClientPortalAccess",
      "kind": "query",
      "uses": [
        {
          "operationId": "listClientPortalAccess"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "clientPortalAccessId",
            "from": "listClientPortalAccess.$items.clientPortalAccessId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listClientPortalAccess.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "platformUserId",
            "from": "listClientPortalAccess.$items.platformUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listClientPortalAccess.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess"
    },
    {
      "bffId": "cmdCreateClientPortalAccess",
      "kind": "command",
      "uses": [
        {
          "operationId": "createClientPortalAccess"
        }
      ],
      "input": [
        {
          "name": "clientId",
          "from": "createClientPortalAccess.clientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "platformUserId",
          "from": "createClientPortalAccess.platformUserId",
          "required": true,
          "source": "actorSession",
          "type": "string"
        },
        {
          "name": "status",
          "from": "createClientPortalAccess.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientPortalAccessId",
            "from": "createClientPortalAccess.clientPortalAccessId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "createClientPortalAccess.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "platformUserId",
            "from": "createClientPortalAccess.platformUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createClientPortalAccess.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess"
    },
    {
      "bffId": "cmdUpdateClientPortalAccess",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateClientPortalAccess"
        }
      ],
      "input": [
        {
          "name": "clientPortalAccessId",
          "from": "updateClientPortalAccess.clientPortalAccessId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "clientId",
          "from": "updateClientPortalAccess.clientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "platformUserId",
          "from": "updateClientPortalAccess.platformUserId",
          "required": true,
          "source": "actorSession",
          "type": "string"
        },
        {
          "name": "status",
          "from": "updateClientPortalAccess.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientPortalAccessId",
            "from": "updateClientPortalAccess.clientPortalAccessId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "updateClientPortalAccess.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "platformUserId",
            "from": "updateClientPortalAccess.platformUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "updateClientPortalAccess.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess"
    },
    {
      "bffId": "cmdDeleteClientPortalAccess",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteClientPortalAccess"
        }
      ],
      "input": [
        {
          "name": "clientPortalAccessId",
          "from": "deleteClientPortalAccess.clientPortalAccessId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientPortalAccessId",
            "from": "deleteClientPortalAccess.clientPortalAccessId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "deleteClientPortalAccess.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "platformUserId",
            "from": "deleteClientPortalAccess.platformUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteClientPortalAccess.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess"
    },
    {
      "bffId": "qryClientPicker",
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
      "route": "buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Vínculo de acesso do cliente.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListClientPortalAccess"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteClientPortalAccess"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Vínculo de acesso do cliente.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateClientPortalAccess"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateClientPortalAccess"
        },
        {
          "role": "filterControl",
          "dataSource": "qryClientPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createClientPortalAccess",
    "deleteClientPortalAccess",
    "listClient",
    "listClientPortalAccess",
    "updateClientPortalAccess"
  ],
  "purpose": "Cadastro de Vínculo de acesso do cliente.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:18200e13"
} as const;

export default clientPortalAccessCatalogueWorkspace;
