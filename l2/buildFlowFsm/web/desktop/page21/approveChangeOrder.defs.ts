/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/approveChangeOrder.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável pelo controle de mudanças do projeto, com autoridade para aprovar alterações recebidas do cliente e encaminhá-las ao faturamento.",
    "jobToBeDone": "Revisar a ordem de mudança pendente, aprová-la quando estiver correta e encaminhá-la ao faturamento com os impactos e o valor registrados.",
    "primaryDecision": "Aprovar a ordem de mudança selecionada e, após a aprovação, decidir encaminhá-la ao faturamento.",
    "decisiveInfo": [
      "status atual da ordem",
      "descrição da alteração",
      "impacto no escopo",
      "impacto no cronograma",
      "valor da alteração",
      "cliente associado",
      "projeto associado",
      "data de submissão",
      "data de encaminhamento para aprovação do cliente"
    ],
    "usageFrequency": "Operacional e recorrente, durante o tratamento de ordens de mudança pendentes.",
    "informationHierarchy": [
      "ordem selecionada e status atual",
      "descrição, cliente e projeto",
      "impactos de escopo e cronograma",
      "valor da alteração e datas de referência",
      "ação de aprovação",
      "dados complementares e ação de encaminhamento ao faturamento"
    ],
    "successCriteria": "O usuário identifica rapidamente a ordem pendente, entende seu impacto, executa a aprovação como uma transição explícita e consegue encaminhar somente uma ordem aprovada ao faturamento sem redigitar IDs.",
    "antiPatterns": [
      "formulário CRUD com todos os campos da entidade",
      "campo manual para changeOrderId, clientId ou projectId",
      "select livre para status",
      "formulário de transição separado da ordem selecionada",
      "mostrar o encaminhamento ao faturamento antes de a aprovação estar concluída",
      "ocultar o status atual antes da decisão"
    ],
    "criticalActions": [
      {
        "action": "Localizar e selecionar a ordem pendente",
        "presentation": "master-detail com superfície dominante de ordens e detalhe contextual"
      },
      {
        "action": "Aprovar a ordem selecionada",
        "presentation": "contextual-transition-actions com botão explícito para a transição válida"
      },
      {
        "action": "Encaminhar a ordem aprovada ao faturamento",
        "presentation": "contextual-transition-actions em painel contextual, com dados de impacto editáveis e identificador derivado da seleção"
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
    "id": "approveChangeOrder__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/approveChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/approveChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "approveChangeOrder__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/approvalWorkflow/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
