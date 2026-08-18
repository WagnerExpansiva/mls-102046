/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/approveChangeOrder.defs.ts" enhancement="_blank"/>

export const approveChangeOrderWorkspace = {
  "workspaceId": "approveChangeOrder",
  "title": "Aprovar ordem de mudança",
  "actors": [
    "client"
  ],
  "kind": "workflow",
  "entity": "ChangeOrder",
  "workflowId": "changeOrderLifecycle",
  "bffCalls": [
    {
      "bffId": "qryLocateChangeOrder",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateChangeOrder"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "locateChangeOrder.$items.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "locateChangeOrder.$items.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "locateChangeOrder.$items.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "locateChangeOrder.$items.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "locateChangeOrder.$items.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "locateChangeOrder.$items.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "locateChangeOrder.$items.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "locateChangeOrder.$items.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "locateChangeOrder.$items.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "locateChangeOrder.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.approveChangeOrder.qryLocateChangeOrder"
    },
    {
      "bffId": "cmdApproveChangeOrderDecision",
      "kind": "command",
      "uses": [
        {
          "operationId": "approveChangeOrderDecision"
        }
      ],
      "input": [
        {
          "name": "changeOrderChangeOrderId",
          "from": "approveChangeOrderDecision.changeOrderChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "clientClientId",
          "from": "approveChangeOrderDecision.clientClientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "projectProjectId",
          "from": "approveChangeOrderDecision.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "status",
          "from": "approveChangeOrderDecision.status",
          "required": true,
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "approveChangeOrderDecision.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "approveChangeOrderDecision.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "approveChangeOrderDecision.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "approveChangeOrderDecision.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "approveChangeOrderDecision.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "approveChangeOrderDecision.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "approveChangeOrderDecision.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "approveChangeOrderDecision.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "approveChangeOrderDecision.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "approveChangeOrderDecision.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision"
    },
    {
      "bffId": "cmdHandoffApprovedChangeOrderToBilling",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffApprovedChangeOrderToBilling"
        }
      ],
      "input": [
        {
          "name": "changeOrderChangeOrderId",
          "from": "handoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "description",
          "from": "handoffApprovedChangeOrderToBilling.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scopeImpact",
          "from": "handoffApprovedChangeOrderToBilling.scopeImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scheduleImpact",
          "from": "handoffApprovedChangeOrderToBilling.scheduleImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "changeAmount",
          "from": "handoffApprovedChangeOrderToBilling.changeAmount",
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
            "from": "handoffApprovedChangeOrderToBilling.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "handoffApprovedChangeOrderToBilling.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "handoffApprovedChangeOrderToBilling.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "handoffApprovedChangeOrderToBilling.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "handoffApprovedChangeOrderToBilling.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "handoffApprovedChangeOrderToBilling.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "handoffApprovedChangeOrderToBilling.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "handoffApprovedChangeOrderToBilling.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "handoffApprovedChangeOrderToBilling.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "handoffApprovedChangeOrderToBilling.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling"
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
      "route": "buildFlowFsm.approveChangeOrder.qryClientPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "locateChangeOrder",
      "intent": "Uma ordem de mudança pendente de aprovação do cliente está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateChangeOrder",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "approveChangeOrderDecision",
      "intent": "A ordem fica registrada como aprovada pelo cliente.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdApproveChangeOrderDecision"
        },
        {
          "role": "filterControl",
          "dataSource": "qryClientPicker",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "handoffApprovedChangeOrderToBilling",
      "intent": "A equipe de faturamento recebe a ordem aprovada.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffApprovedChangeOrderToBilling"
        }
      ]
    }
  ],
  "operationIds": [
    "approveChangeOrderDecision",
    "handoffApprovedChangeOrderToBilling",
    "listClient",
    "locateChangeOrder"
  ],
  "purpose": "Decidir favoravelmente uma ordem de mudança recebida e encaminhá-la ao faturamento.",
  "presentation": {
    "categoryRef": "approvalWorkflow",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:5f16bab3"
} as const;

export default approveChangeOrderWorkspace;
