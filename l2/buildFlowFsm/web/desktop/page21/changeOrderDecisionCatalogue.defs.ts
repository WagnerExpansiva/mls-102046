/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/changeOrderDecisionCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderDecisionCatalogue",
  "pageName": "Decisão sobre ordem de mudança",
  "baseClassName": "BuildFlowFsmChangeOrderDecisionCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Decisão sobre ordem de mudança.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Responsável por analisar e registrar decisões de ordens de mudança na plataforma de construção.",
    "jobToBeDone": "Encontrar uma ordem de mudança e registrar, corrigir ou remover sua decisão com contexto suficiente para evitar alterações no registro errado.",
    "primaryDecision": "Decidir qual decisão de ordem de mudança revisar ou qual ordem ainda precisa de uma decisão, e então executar a ação correspondente.",
    "decisiveInfo": [
      "changeOrder",
      "decision",
      "madeByPlatformUser",
      "decidedAt",
      "description",
      "clientRef",
      "projectRef",
      "scopeImpact",
      "scheduleImpact",
      "changeAmount",
      "status"
    ],
    "usageFrequency": "Ocasional e operacional, quando ordens de mudança são analisadas ou quando uma decisão precisa ser corrigida.",
    "informationHierarchy": [
      "ordem de mudança e seu contexto operacional",
      "decisão atual e seu estado",
      "ação primária de registrar ou corrigir a decisão",
      "autor e momento da decisão",
      "remoção do registro como ação destrutiva secundária"
    ],
    "successCriteria": "O usuário identifica a ordem correta rapidamente, entende a decisão existente e consegue registrar ou corrigir a decisão sem digitar identificadores ou editar campos controlados pelo sistema.",
    "antiPatterns": [
      "expor ids técnicos como campos editáveis",
      "exigir digitação manual da ordem de mudança",
      "permitir editar autor ou timestamp controlados pela sessão/sistema",
      "separar atualização e exclusão em formulários desconectados da seleção",
      "usar um select livre para estados ou decisões sem mostrar o contexto da ordem",
      "ocultar a decisão atual antes de solicitar uma alteração"
    ],
    "criticalActions": [
      {
        "action": "Localizar a decisão existente",
        "presentation": "selectable-master-list-with-contextual-detail"
      },
      {
        "action": "Registrar nova decisão",
        "presentation": "primary-button-with-order-picker-and-minimal-decision-input"
      },
      {
        "action": "Corrigir decisão selecionada",
        "presentation": "contextual-detail-action"
      },
      {
        "action": "Excluir decisão selecionada",
        "presentation": "inline-row-command-with-destructive-confirmation"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.changeOrderDecisionCatalogue.qryListChangeOrderDecision",
      "source": "bff.qryListChangeOrderDecision",
      "command": "qryListChangeOrderDecision",
      "description": "Listar Decisão sobre ordem de mudança",
      "kind": "query",
      "stateKey": "ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision",
      "source": "bff.cmdCreateChangeOrderDecision",
      "command": "cmdCreateChangeOrderDecision",
      "description": "Criar Decisão sobre ordem de mudança",
      "kind": "command",
      "stateKey": "ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision",
      "inputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision",
        "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt"
      ],
      "inputs": [
        {
          "name": "changeOrder",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "madeByPlatformUser",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "decision",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "decidedAt",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision",
      "source": "bff.cmdUpdateChangeOrderDecision",
      "command": "cmdUpdateChangeOrderDecision",
      "description": "Atualizar Decisão sobre ordem de mudança",
      "kind": "command",
      "stateKey": "ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision",
      "inputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision",
        "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt"
      ],
      "inputs": [
        {
          "name": "changeOrderDecisionId",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "changeOrder",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "madeByPlatformUser",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "decision",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "decidedAt",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision",
      "source": "bff.cmdDeleteChangeOrderDecision",
      "command": "cmdDeleteChangeOrderDecision",
      "description": "Excluir Decisão sobre ordem de mudança",
      "kind": "command",
      "stateKey": "ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision",
      "inputStateKeys": [
        "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId"
      ],
      "inputs": [
        {
          "name": "changeOrderDecisionId",
          "stateKey": "ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.changeOrderDecisionCatalogue.qryChangeOrderPicker",
      "source": "bff.qryChangeOrderPicker",
      "command": "qryChangeOrderPicker",
      "description": "Listar Ordem de mudança",
      "kind": "query",
      "stateKey": "ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "changeOrderDecisionCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/changeOrderDecisionCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/changeOrderDecisionCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "changeOrderDecisionCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
