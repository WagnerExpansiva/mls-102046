/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/forwardChangeOrderForClientApproval.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "forwardChangeOrderForClientApproval",
  "pageName": "Encaminhar ordem de mudança ao cliente",
  "baseClassName": "BuildFlowFsmForwardChangeOrderForClientApprovalBase",
  "actor": "projectManager",
  "purpose": "Enviar ao cliente uma ordem de mudança submetida para a decisão de aprovação.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Responsável pelo fluxo de mudanças do projeto",
    "jobToBeDone": "Revisar uma ordem de mudança submetida e encaminhá-la ao cliente com informações claras sobre escopo, prazo e valor para obter sua decisão de aprovação.",
    "primaryDecision": "Decidir se a ordem de mudança selecionada está pronta para ser encaminhada ao cliente.",
    "decisiveInfo": [
      "status",
      "description",
      "scopeImpact",
      "scheduleImpact",
      "changeAmount",
      "clientRef",
      "projectRef",
      "submittedAt",
      "forwardedForClientApprovalAt"
    ],
    "usageFrequency": "Operacional e recorrente, quando há ordens de mudança submetidas aguardando encaminhamento.",
    "informationHierarchy": [
      "ordens submetidas e sua situação atual",
      "detalhes da ordem selecionada e impactos de escopo, prazo e valor",
      "cliente e projeto associados",
      "ação de encaminhamento e feedback do resultado",
      "datas de submissão e encaminhamento"
    ],
    "successCriteria": "O responsável identifica rapidamente uma ordem submetida, confirma seus impactos e encaminha-a ao cliente sem redigitar identificadores, com a atualização de status e feedback claramente visíveis.",
    "antiPatterns": [
      "campo manual para changeOrderId",
      "edição manual de status ou timestamps",
      "formulário de encaminhamento separado do detalhe da ordem",
      "exibir todos os estados como opções livres",
      "encaminhar sem mostrar o estado atual e os impactos da ordem"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a ordem de mudança submetida",
        "presentation": "master-detail selection"
      },
      {
        "action": "Encaminhar a ordem selecionada para aprovação do cliente",
        "presentation": "contextual-transition-actions with a prominent primary action"
      },
      {
        "action": "Atualizar a fila após o encaminhamento",
        "presentation": "automatic refresh with dismissible textual feedback"
      }
    ]
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
    "id": "forwardChangeOrderForClientApproval__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/forwardChangeOrderForClientApproval.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/forwardChangeOrderForClientApproval.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "forwardChangeOrderForClientApproval__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
