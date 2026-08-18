/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/submitChangeOrder.defs.ts" enhancement="_blank"/>

export const submitChangeOrderWorkspace = {
  "workspaceId": "submitChangeOrder",
  "title": "Registrar e submeter ordem de mudança",
  "actors": [
    "fieldCoordinator"
  ],
  "kind": "workflow",
  "entity": "ChangeOrder",
  "workflowId": "changeOrderLifecycle",
  "bffCalls": [
    {
      "bffId": "qryLocateClient",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateClient"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "clientId",
            "from": "locateClient.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientName",
            "from": "locateClient.$items.clientName",
            "type": "string",
            "required": true
          },
          {
            "name": "contactEmail",
            "from": "locateClient.$items.contactEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "contactPhone",
            "from": "locateClient.$items.contactPhone",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.submitChangeOrder.qryLocateClient"
    },
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.submitChangeOrder.qryLocateProject"
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
          "sourceRef": "qryLocateClient",
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
      "route": "buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder"
    },
    {
      "bffId": "cmdHandoffChangeOrderToProjectManager",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffChangeOrderToProjectManager"
        }
      ],
      "input": [
        {
          "name": "changeOrderChangeOrderId",
          "from": "handoffChangeOrderToProjectManager.changeOrderChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "description",
          "from": "handoffChangeOrderToProjectManager.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scopeImpact",
          "from": "handoffChangeOrderToProjectManager.scopeImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "scheduleImpact",
          "from": "handoffChangeOrderToProjectManager.scheduleImpact",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "changeAmount",
          "from": "handoffChangeOrderToProjectManager.changeAmount",
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
            "from": "handoffChangeOrderToProjectManager.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "handoffChangeOrderToProjectManager.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "handoffChangeOrderToProjectManager.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "handoffChangeOrderToProjectManager.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "handoffChangeOrderToProjectManager.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "handoffChangeOrderToProjectManager.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "handoffChangeOrderToProjectManager.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "handoffChangeOrderToProjectManager.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "handoffChangeOrderToProjectManager.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "handoffChangeOrderToProjectManager.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager"
    }
  ],
  "sections": [
    {
      "sectionId": "locateClient",
      "intent": "Um cliente do catálogo compartilhado está selecionado.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateClient",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "locateProject",
      "intent": "Uma obra do cliente selecionado está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "createChangeOrder",
      "intent": "Uma ordem de mudança vinculada ao cliente e à obra fica registrada.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateChangeOrder"
        }
      ]
    },
    {
      "sectionId": "handoffChangeOrderToProjectManager",
      "intent": "O gerente recebe a ordem para recusá-la ou encaminhá-la ao cliente para aprovação.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffChangeOrderToProjectManager"
        }
      ]
    }
  ],
  "operationIds": [
    "createChangeOrder",
    "handoffChangeOrderToProjectManager",
    "locateClient",
    "locateProject"
  ],
  "purpose": "Formalizar uma alteração da obra para tratamento do gerente de projeto.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:03673b1e"
} as const;

export default submitChangeOrderWorkspace;
