/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/approveChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "approveChangeOrder",
  "pageName": "Aprovar ordem de mudança",
  "baseClassName": "BuildFlowFsmApproveChangeOrderBase",
  "actor": "client",
  "purpose": "Decidir favoravelmente uma ordem de mudança recebida e encaminhá-la ao faturamento.",
  "presentation": {
    "categoryRef": "approvalWorkflow"
  },
  "dataBindings": [
    {
      "id": "binding.approveChangeOrder.qryLocateChangeOrder",
      "source": "bff.qryLocateChangeOrder",
      "command": "qryLocateChangeOrder",
      "description": "Localizar a ordem de mudança submetida",
      "kind": "query",
      "stateKey": "ui.approveChangeOrder.data.qryLocateChangeOrder",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.approveChangeOrder.cmdApproveChangeOrderDecision",
      "source": "bff.cmdApproveChangeOrderDecision",
      "command": "cmdApproveChangeOrderDecision",
      "description": "Aprovar a ordem de mudança",
      "kind": "command",
      "stateKey": "ui.approveChangeOrder.output.cmdApproveChangeOrderDecision",
      "inputStateKeys": [
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status"
      ],
      "inputs": [
        {
          "name": "changeOrderChangeOrderId",
          "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientClientId",
          "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "status",
          "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling",
      "source": "bff.cmdHandoffApprovedChangeOrderToBilling",
      "command": "cmdHandoffApprovedChangeOrderToBilling",
      "description": "Encaminhar a alteração aprovada ao faturamento",
      "kind": "command",
      "stateKey": "ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling",
      "inputStateKeys": [
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount"
      ],
      "inputs": [
        {
          "name": "changeOrderChangeOrderId",
          "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scopeImpact",
          "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleImpact",
          "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "changeAmount",
          "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.approveChangeOrder.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.approveChangeOrder.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "approveChangeOrder__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/approveChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/approveChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "approveChangeOrder__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
