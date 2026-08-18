/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/forwardChangeOrderForClientApproval.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "forwardChangeOrderForClientApproval",
  "pageName": "Encaminhar ordem de mudança ao cliente",
  "baseClassName": "BuildFlowFsmForwardChangeOrderForClientApprovalBase",
  "actor": "projectManager",
  "purpose": "Enviar ao cliente uma ordem de mudança submetida para a decisão de aprovação.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "dataBindings": [
    {
      "id": "binding.forwardChangeOrderForClientApproval.qryLocateChangeOrder",
      "source": "bff.qryLocateChangeOrder",
      "command": "qryLocateChangeOrder",
      "description": "Localizar a ordem de mudança submetida",
      "kind": "query",
      "stateKey": "ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient",
      "source": "bff.cmdHandoffChangeOrderToClient",
      "command": "cmdHandoffChangeOrderToClient",
      "description": "Solicitar aprovação do cliente",
      "kind": "command",
      "stateKey": "ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient",
      "inputStateKeys": [
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount"
      ],
      "inputs": [
        {
          "name": "changeOrderChangeOrderId",
          "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scopeImpact",
          "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleImpact",
          "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "changeAmount",
          "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "forwardChangeOrderForClientApproval__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/forwardChangeOrderForClientApproval.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/forwardChangeOrderForClientApproval.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "forwardChangeOrderForClientApproval__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
