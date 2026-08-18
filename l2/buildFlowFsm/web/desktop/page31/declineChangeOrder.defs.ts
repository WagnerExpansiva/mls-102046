/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/declineChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "declineChangeOrder",
  "pageName": "Recusar ordem de mudança",
  "baseClassName": "BuildFlowFsmDeclineChangeOrderBase",
  "actor": "projectManager",
  "purpose": "Decidir desfavoravelmente uma ordem submetida e devolver o resultado ao campo.",
  "presentation": {
    "categoryRef": "approvalWorkflow"
  },
  "pageObjective": {
    "actor": "Gerente responsável por avaliar ordens de mudança submetidas, com apoio do coordenador de campo.",
    "jobToBeDone": "Revisar uma ordem de mudança pendente, recusá-la quando apropriado e encaminhar o resultado ao campo para continuidade do tratamento.",
    "primaryDecision": "Recusar a ordem selecionada e, em seguida, decidir se o resultado deve ser devolvido ao coordenador de campo.",
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
    "usageFrequency": "Operacional e recorrente, durante o processamento da fila de ordens pendentes.",
    "informationHierarchy": [
      "ordens pendentes e seu status atual",
      "detalhes da ordem selecionada",
      "impactos de escopo, prazo e valor",
      "cliente e projeto relacionados",
      "ação de recusa",
      "dados necessários para devolver o resultado ao campo",
      "feedback de sucesso ou erro"
    ],
    "successCriteria": "O gerente identifica rapidamente a ordem correta, entende seus impactos, executa a transição de recusa sem editar ids ou status manualmente e consegue encaminhar o resultado ao campo com contexto suficiente.",
    "antiPatterns": [
      "formulário separado para localizar ou selecionar ids",
      "seletor livre de status",
      "digitação manual de identificadores de ordem, cliente ou projeto",
      "transformar cada operação em uma seção independente",
      "ocultar o status atual antes da transição",
      "exigir redigitação dos dados já presentes na ordem",
      "adicionar urgência ou persuasão a uma tela operacional"
    ],
    "criticalActions": [
      {
        "action": "Recusar a ordem de mudança selecionada",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Devolver a decisão recusada ao coordenador de campo",
        "presentation": "contextual-transition-actions"
      }
    ]
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
    "id": "declineChangeOrder__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/declineChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/declineChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "declineChangeOrder__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/approvalWorkflow/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
