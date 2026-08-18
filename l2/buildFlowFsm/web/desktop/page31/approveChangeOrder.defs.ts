/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/approveChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "approveChangeOrder",
  "pageName": "Aprovar ordem de mudança",
  "baseClassName": "BuildFlowFsmApproveChangeOrderBase",
  "actor": "client",
  "purpose": "Decidir favoravelmente uma ordem de mudança recebida e encaminhá-la ao faturamento.",
  "presentation": {
    "categoryRef": "approvalWorkflow"
  },
  "pageObjective": {
    "actor": "Profissional responsável por aprovar alterações de escopo do projeto e encaminhá-las ao faturamento.",
    "jobToBeDone": "Revisar uma ordem de mudança pendente, aprová-la como cliente e enviá-la ao faturamento sem redigitar contexto ou identificadores.",
    "primaryDecision": "Aprovar a ordem de mudança selecionada e, após a aprovação, encaminhá-la ao faturamento.",
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
    "usageFrequency": "Ocasional e orientado a tarefas, quando uma ordem de mudança aguarda aprovação; requer clareza e rastreabilidade, não operação contínua de alta velocidade.",
    "informationHierarchy": [
      "ordem selecionada e status atual",
      "descrição e impactos de escopo e cronograma",
      "valor da alteração",
      "cliente e projeto relacionados",
      "datas de submissão e encaminhamento para aprovação",
      "próxima transição válida: aprovar",
      "dados complementares para encaminhamento ao faturamento",
      "confirmação de aprovação e envio"
    ],
    "successCriteria": "O usuário identifica rapidamente a ordem pendente, entende seus impactos e valor, aprova com uma ação contextual segura e consegue encaminhá-la ao faturamento somente depois de a aprovação estar registrada.",
    "antiPatterns": [
      "formulário CRUD com ids digitáveis",
      "status como select livre",
      "seção de transição desconectada da ordem selecionada",
      "pedir novamente cliente ou projeto já derivados do contexto",
      "mostrar encaminhamento antes de confirmar o estado aprovado",
      "duplicar a consulta de clientes como uma superfície independente",
      "adicionar urgência ou persuasão a uma tela operacional"
    ],
    "criticalActions": [
      {
        "action": "Selecionar e revisar a ordem pendente",
        "presentation": "master-detail com lista/seleção e detalhe contextual"
      },
      {
        "action": "Aprovar a ordem de mudança",
        "presentation": "contextual-transition-actions com botão da próxima transição válida"
      },
      {
        "action": "Encaminhar a ordem aprovada ao faturamento",
        "presentation": "contextual-transition-actions em painel contextual pós-aprovação, com confirmação explícita"
      }
    ]
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
    "id": "approveChangeOrder__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/approveChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/approveChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "approveChangeOrder__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/approvalWorkflow/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
