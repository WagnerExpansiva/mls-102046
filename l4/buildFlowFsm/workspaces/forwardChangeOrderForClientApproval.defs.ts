/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/forwardChangeOrderForClientApproval.defs.ts" enhancement="_blank"/>

export const forwardChangeOrderForClientApprovalWorkspace = {
  "workspaceId": "forwardChangeOrderForClientApproval",
  "title": "Encaminhar ordem de mudança ao cliente",
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
      "route": "buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder"
    },
    {
      "bffId": "cmdHandoffChangeOrderToClient",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffChangeOrderToClient"
        }
      ],
      "input": [
        {
          "name": "changeOrderChangeOrderId",
          "from": "handoffChangeOrderToClient.changeOrderChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "description",
          "from": "handoffChangeOrderToClient.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scopeImpact",
          "from": "handoffChangeOrderToClient.scopeImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scheduleImpact",
          "from": "handoffChangeOrderToClient.scheduleImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "changeAmount",
          "from": "handoffChangeOrderToClient.changeAmount",
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
            "from": "handoffChangeOrderToClient.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "handoffChangeOrderToClient.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "handoffChangeOrderToClient.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "handoffChangeOrderToClient.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "handoffChangeOrderToClient.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "handoffChangeOrderToClient.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "handoffChangeOrderToClient.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "handoffChangeOrderToClient.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "handoffChangeOrderToClient.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "handoffChangeOrderToClient.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient"
    }
  ],
  "sections": [
    {
      "sectionId": "locateChangeOrder",
      "intent": "Uma ordem de mudança pendente de tratamento está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateChangeOrder",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "handoffChangeOrderToClient",
      "intent": "O cliente recebe a ordem de mudança para decidir sua aprovação.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffChangeOrderToClient"
        }
      ]
    }
  ],
  "operationIds": [
    "handoffChangeOrderToClient",
    "locateChangeOrder"
  ],
  "purpose": "Enviar ao cliente uma ordem de mudança submetida para a decisão de aprovação.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:214efa23"
} as const;

export default forwardChangeOrderForClientApprovalWorkspace;
