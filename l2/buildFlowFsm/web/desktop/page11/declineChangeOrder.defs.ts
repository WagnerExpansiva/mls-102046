/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/declineChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "declineChangeOrder",
  "pageName": "Recusar ordem de mudança",
  "baseClassName": "BuildFlowFsmDeclineChangeOrderBase",
  "actor": "projectManager",
  "purpose": "Decidir desfavoravelmente uma ordem submetida e devolver o resultado ao campo.",
  "presentation": {
    "categoryRef": "approvalWorkflow"
  },
  "dataBindings": [
    {
      "id": "binding.declineChangeOrder.qryLocateChangeOrder",
      "source": "bff.qryLocateChangeOrder",
      "command": "qryLocateChangeOrder",
      "description": "Localizar a ordem de mudança submetida",
      "kind": "query",
      "stateKey": "ui.declineChangeOrder.data.qryLocateChangeOrder",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.declineChangeOrder.cmdDeclineChangeOrderDecision",
      "source": "bff.cmdDeclineChangeOrderDecision",
      "command": "cmdDeclineChangeOrderDecision",
      "description": "Recusar a ordem de mudança",
      "kind": "command",
      "stateKey": "ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision",
      "inputStateKeys": [
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId",
        "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status"
      ],
      "inputs": [
        {
          "name": "changeOrderChangeOrderId",
          "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientClientId",
          "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "status",
          "stateKey": "ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "source": "bff.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "command": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "description": "Devolver a decisão ao campo",
      "kind": "command",
      "stateKey": "ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "inputStateKeys": [
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
        "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount"
      ],
      "inputs": [
        {
          "name": "changeOrderChangeOrderId",
          "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scopeImpact",
          "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleImpact",
          "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "changeAmount",
          "stateKey": "ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.declineChangeOrder.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.declineChangeOrder.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "declineChangeOrder__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/declineChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/declineChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "declineChangeOrder__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
