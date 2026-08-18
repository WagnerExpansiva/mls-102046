/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/changeOrderDecisionCatalogue.defs.ts" enhancement="_blank"/>

export const changeOrderDecisionCatalogueWorkspace = {
  "workspaceId": "changeOrderDecisionCatalogue",
  "title": "Decisão sobre ordem de mudança",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "ChangeOrderDecision",
  "bffCalls": [
    {
      "bffId": "qryListChangeOrderDecision",
      "kind": "query",
      "uses": [
        {
          "operationId": "listChangeOrderDecision"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "changeOrderDecisionId",
            "from": "listChangeOrderDecision.$items.changeOrderDecisionId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrder",
            "from": "listChangeOrderDecision.$items.changeOrder",
            "type": "string",
            "required": true
          },
          {
            "name": "madeByPlatformUser",
            "from": "listChangeOrderDecision.$items.madeByPlatformUser",
            "type": "string",
            "required": true
          },
          {
            "name": "decision",
            "from": "listChangeOrderDecision.$items.decision",
            "type": "string",
            "required": true
          },
          {
            "name": "decidedAt",
            "from": "listChangeOrderDecision.$items.decidedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision"
    },
    {
      "bffId": "cmdCreateChangeOrderDecision",
      "kind": "command",
      "uses": [
        {
          "operationId": "createChangeOrderDecision"
        }
      ],
      "input": [
        {
          "name": "changeOrder",
          "from": "createChangeOrderDecision.changeOrder",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryChangeOrderPicker",
          "type": "string"
        },
        {
          "name": "madeByPlatformUser",
          "from": "createChangeOrderDecision.madeByPlatformUser",
          "required": true,
          "source": "actorSession",
          "type": "string"
        },
        {
          "name": "decision",
          "from": "createChangeOrderDecision.decision",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "decidedAt",
          "from": "createChangeOrderDecision.decidedAt",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderDecisionId",
            "from": "createChangeOrderDecision.changeOrderDecisionId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrder",
            "from": "createChangeOrderDecision.changeOrder",
            "type": "string",
            "required": true
          },
          {
            "name": "madeByPlatformUser",
            "from": "createChangeOrderDecision.madeByPlatformUser",
            "type": "string",
            "required": true
          },
          {
            "name": "decision",
            "from": "createChangeOrderDecision.decision",
            "type": "string",
            "required": true
          },
          {
            "name": "decidedAt",
            "from": "createChangeOrderDecision.decidedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision"
    },
    {
      "bffId": "cmdUpdateChangeOrderDecision",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateChangeOrderDecision"
        }
      ],
      "input": [
        {
          "name": "changeOrderDecisionId",
          "from": "updateChangeOrderDecision.changeOrderDecisionId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "changeOrder",
          "from": "updateChangeOrderDecision.changeOrder",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryChangeOrderPicker",
          "type": "string"
        },
        {
          "name": "madeByPlatformUser",
          "from": "updateChangeOrderDecision.madeByPlatformUser",
          "required": true,
          "source": "actorSession",
          "type": "string"
        },
        {
          "name": "decision",
          "from": "updateChangeOrderDecision.decision",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "decidedAt",
          "from": "updateChangeOrderDecision.decidedAt",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderDecisionId",
            "from": "updateChangeOrderDecision.changeOrderDecisionId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrder",
            "from": "updateChangeOrderDecision.changeOrder",
            "type": "string",
            "required": true
          },
          {
            "name": "madeByPlatformUser",
            "from": "updateChangeOrderDecision.madeByPlatformUser",
            "type": "string",
            "required": true
          },
          {
            "name": "decision",
            "from": "updateChangeOrderDecision.decision",
            "type": "string",
            "required": true
          },
          {
            "name": "decidedAt",
            "from": "updateChangeOrderDecision.decidedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision"
    },
    {
      "bffId": "cmdDeleteChangeOrderDecision",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteChangeOrderDecision"
        }
      ],
      "input": [
        {
          "name": "changeOrderDecisionId",
          "from": "deleteChangeOrderDecision.changeOrderDecisionId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderDecisionId",
            "from": "deleteChangeOrderDecision.changeOrderDecisionId",
            "type": "string",
            "required": true
          },
          {
            "name": "changeOrder",
            "from": "deleteChangeOrderDecision.changeOrder",
            "type": "string",
            "required": true
          },
          {
            "name": "madeByPlatformUser",
            "from": "deleteChangeOrderDecision.madeByPlatformUser",
            "type": "string",
            "required": true
          },
          {
            "name": "decision",
            "from": "deleteChangeOrderDecision.decision",
            "type": "string",
            "required": true
          },
          {
            "name": "decidedAt",
            "from": "deleteChangeOrderDecision.decidedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision"
    },
    {
      "bffId": "qryChangeOrderPicker",
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
      "route": "buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Decisão sobre ordem de mudança.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListChangeOrderDecision"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteChangeOrderDecision"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Decisão sobre ordem de mudança.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateChangeOrderDecision"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateChangeOrderDecision"
        },
        {
          "role": "filterControl",
          "dataSource": "qryChangeOrderPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createChangeOrderDecision",
    "deleteChangeOrderDecision",
    "listChangeOrder",
    "listChangeOrderDecision",
    "updateChangeOrderDecision"
  ],
  "purpose": "Cadastro de Decisão sobre ordem de mudança.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:19bd438b"
} as const;

export default changeOrderDecisionCatalogueWorkspace;
