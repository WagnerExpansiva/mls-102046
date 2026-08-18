/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/declineChangeOrder.defs.ts" enhancement="_blank"/>

export const declineChangeOrderWorkspace = {
  "workspaceId": "declineChangeOrder",
  "title": "Recusar ordem de mudança",
  "actors": [
    "projectManager"
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
      "route": "buildFlowFsm.declineChangeOrder.qryLocateChangeOrder"
    },
    {
      "bffId": "cmdDeclineChangeOrderDecision",
      "kind": "command",
      "uses": [
        {
          "operationId": "declineChangeOrderDecision"
        }
      ],
      "input": [
        {
          "name": "changeOrderChangeOrderId",
          "from": "declineChangeOrderDecision.changeOrderChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "clientClientId",
          "from": "declineChangeOrderDecision.clientClientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "projectProjectId",
          "from": "declineChangeOrderDecision.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "status",
          "from": "declineChangeOrderDecision.status",
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
            "from": "declineChangeOrderDecision.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "declineChangeOrderDecision.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "declineChangeOrderDecision.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "declineChangeOrderDecision.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "declineChangeOrderDecision.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "declineChangeOrderDecision.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "declineChangeOrderDecision.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "declineChangeOrderDecision.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "declineChangeOrderDecision.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "declineChangeOrderDecision.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision"
    },
    {
      "bffId": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffDeclinedChangeOrderToFieldCoordinator"
        }
      ],
      "input": [
        {
          "name": "changeOrderChangeOrderId",
          "from": "handoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "description",
          "from": "handoffDeclinedChangeOrderToFieldCoordinator.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scopeImpact",
          "from": "handoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scheduleImpact",
          "from": "handoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "changeAmount",
          "from": "handoffDeclinedChangeOrderToFieldCoordinator.changeAmount",
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
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "handoffDeclinedChangeOrderToFieldCoordinator.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator"
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
      "route": "buildFlowFsm.declineChangeOrder.qryClientPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "locateChangeOrder",
      "intent": "Uma ordem pendente de tratamento está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateChangeOrder",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "declineChangeOrderDecision",
      "intent": "A ordem fica registrada como recusada pelo gerente.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdDeclineChangeOrderDecision"
        },
        {
          "role": "filterControl",
          "dataSource": "qryClientPicker",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "handoffDeclinedChangeOrderToFieldCoordinator",
      "intent": "O coordenador recebe a ordem recusada para tratar o resultado.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffDeclinedChangeOrderToFieldCoordinator"
        }
      ]
    }
  ],
  "operationIds": [
    "declineChangeOrderDecision",
    "handoffDeclinedChangeOrderToFieldCoordinator",
    "listClient",
    "locateChangeOrder"
  ],
  "purpose": "Decidir desfavoravelmente uma ordem submetida e devolver o resultado ao campo.",
  "presentation": {
    "categoryRef": "approvalWorkflow",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:f474fdef"
} as const;

export default declineChangeOrderWorkspace;
