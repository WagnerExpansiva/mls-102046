/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/changeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const changeOrderCatalogueWorkspace = {
  "workspaceId": "changeOrderCatalogue",
  "title": "Ordem de mudança",
  "actors": [
    "client",
    "fieldCoordinator",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "ChangeOrder",
  "bffCalls": [
    {
      "bffId": "qryListChangeOrder",
      "kind": "query",
      "uses": [
        {
          "operationId": "listChangeOrder"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "listChangeOrder.$items.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "listChangeOrder.$items.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "listChangeOrder.$items.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "listChangeOrder.$items.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "listChangeOrder.$items.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "listChangeOrder.$items.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "listChangeOrder.$items.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "listChangeOrder.$items.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "listChangeOrder.$items.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "listChangeOrder.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderCatalogue.qryListChangeOrder"
    },
    {
      "bffId": "cmdCreateChangeOrder",
      "kind": "command",
      "uses": [
        {
          "operationId": "createChangeOrder"
        }
      ],
      "input": [
        {
          "name": "clientClientId",
          "from": "createChangeOrder.clientClientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "projectProjectId",
          "from": "createChangeOrder.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "description",
          "from": "createChangeOrder.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scopeImpact",
          "from": "createChangeOrder.scopeImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scheduleImpact",
          "from": "createChangeOrder.scheduleImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "changeAmount",
          "from": "createChangeOrder.changeAmount",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "createChangeOrder.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "createChangeOrder.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "createChangeOrder.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "createChangeOrder.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "createChangeOrder.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "createChangeOrder.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "createChangeOrder.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "createChangeOrder.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "createChangeOrder.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "createChangeOrder.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder"
    },
    {
      "bffId": "cmdUpdateChangeOrder",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateChangeOrder"
        }
      ],
      "input": [
        {
          "name": "changeOrderId",
          "from": "updateChangeOrder.changeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "clientRef",
          "from": "updateChangeOrder.clientRef",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "projectRef",
          "from": "updateChangeOrder.projectRef",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryProjectPicker",
          "type": "string"
        },
        {
          "name": "description",
          "from": "updateChangeOrder.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scopeImpact",
          "from": "updateChangeOrder.scopeImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scheduleImpact",
          "from": "updateChangeOrder.scheduleImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "changeAmount",
          "from": "updateChangeOrder.changeAmount",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "submittedAt",
          "from": "updateChangeOrder.submittedAt",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "forwardedForClientApprovalAt",
          "from": "updateChangeOrder.forwardedForClientApprovalAt",
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "status",
          "from": "updateChangeOrder.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "updateChangeOrder.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "updateChangeOrder.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "updateChangeOrder.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "updateChangeOrder.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "updateChangeOrder.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "updateChangeOrder.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "updateChangeOrder.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "updateChangeOrder.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "updateChangeOrder.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "updateChangeOrder.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder"
    },
    {
      "bffId": "cmdDeleteChangeOrder",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteChangeOrder"
        }
      ],
      "input": [
        {
          "name": "changeOrderId",
          "from": "deleteChangeOrder.changeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "deleteChangeOrder.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "deleteChangeOrder.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "deleteChangeOrder.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "deleteChangeOrder.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "deleteChangeOrder.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "deleteChangeOrder.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "deleteChangeOrder.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "deleteChangeOrder.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "deleteChangeOrder.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "deleteChangeOrder.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder"
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
      "route": "buildFlowFsm.changeOrderCatalogue.qryClientPicker"
    },
    {
      "bffId": "qryProjectPicker",
      "kind": "query",
      "uses": [
        {
          "operationId": "listProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "listProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "listProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "listProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "listProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "listProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "listProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderCatalogue.qryProjectPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Ordem de mudança.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListChangeOrder"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteChangeOrder"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Ordem de mudança.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateChangeOrder"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateChangeOrder"
        },
        {
          "role": "filterControl",
          "dataSource": "qryClientPicker",
          "usage": "picker"
        },
        {
          "role": "filterControl",
          "dataSource": "qryProjectPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createChangeOrder",
    "deleteChangeOrder",
    "listChangeOrder",
    "listClient",
    "listProject",
    "updateChangeOrder"
  ],
  "purpose": "Cadastro de Ordem de mudança.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:86b2293b"
} as const;

export default changeOrderCatalogueWorkspace;
