/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/forwardChangeOrderForClientApproval.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável pelo fluxo de mudanças do projeto, como gerente de projeto ou coordenador de obras.",
    "jobToBeDone": "Revisar uma ordem de mudança submetida e encaminhá-la ao cliente para aprovação, preservando o contexto dos impactos e do valor.",
    "primaryDecision": "Decidir se a ordem de mudança selecionada está pronta para ser enviada ao cliente para aprovação.",
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
    "usageFrequency": "Operacional e recorrente, sempre que uma ordem de mudança submetida estiver pronta para tratamento.",
    "informationHierarchy": [
      "ordens de mudança submetidas e sua identificação de cliente/projeto",
      "status atual e elegibilidade para encaminhamento",
      "descrição da mudança, impacto no escopo e impacto no cronograma",
      "valor da mudança",
      "data de submissão e eventual data de encaminhamento",
      "ação de solicitar aprovação e feedback do resultado"
    ],
    "successCriteria": "O usuário identifica rapidamente a ordem pendente, entende seus impactos e valor sem abrir outra tela, envia a solicitação com um único comando contextual e recebe confirmação ou erro claro; a lista é atualizada após o envio.",
    "antiPatterns": [
      "formulário de encaminhamento separado da ordem selecionada",
      "campo de texto para digitar manualmente o identificador da ordem",
      "select livre para editar status",
      "ocultar status ou impactos antes da ação",
      "duplicar a mesma ordem em várias seções",
      "exigir novamente dados derivados da ordem quando já estão disponíveis no item selecionado"
    ],
    "criticalActions": [
      {
        "action": "Localizar e selecionar a ordem de mudança submetida",
        "presentation": "master-detail selectable surface with contextual detail"
      },
      {
        "action": "Solicitar aprovação do cliente para a ordem selecionada",
        "presentation": "contextual-transition-actions with a prominent primary action"
      },
      {
        "action": "Atualizar a fila após encaminhamento e mostrar o resultado",
        "presentation": "post-command refresh with dismissible success or error feedback"
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
    "id": "forwardChangeOrderForClientApproval__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/forwardChangeOrderForClientApproval.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/forwardChangeOrderForClientApproval.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "forwardChangeOrderForClientApproval__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
