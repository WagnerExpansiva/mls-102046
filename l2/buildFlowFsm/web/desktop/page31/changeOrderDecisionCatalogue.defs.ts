/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/changeOrderDecisionCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Usuário da plataforma responsável por registrar e manter decisões sobre ordens de mudança.",
    "jobToBeDone": "Encontrar uma ordem de mudança, registrar a decisão correspondente e corrigir ou remover decisões existentes com segurança.",
    "primaryDecision": "Escolher a ordem de mudança e a decisão a registrar, ou selecionar uma decisão existente para corrigir/remover.",
    "decisiveInfo": [
      "changeOrder",
      "description",
      "scopeImpact",
      "scheduleImpact",
      "changeAmount",
      "status",
      "decision",
      "madeByPlatformUser",
      "decidedAt"
    ],
    "usageFrequency": "Ocasional, em rotinas operacionais de aprovação e manutenção de registros.",
    "informationHierarchy": [
      "Decisões existentes e sua ordem de mudança",
      "Contexto da ordem: descrição, impactos, valor e status",
      "Decisão atual e data",
      "Ações de corrigir ou remover",
      "Registro de uma nova decisão"
    ],
    "successCriteria": "O usuário identifica rapidamente a ordem correta, vê o contexto antes de decidir, registra apenas a decisão necessária e consegue corrigir ou excluir um registro selecionado sem digitar identificadores técnicos.",
    "antiPatterns": [
      "formulário CRUD expondo ids técnicos",
      "digitação manual de ordem de mudança ou usuário",
      "edição manual de autoria ou timestamp do sistema",
      "status ou decisão apresentada como edição indiscriminada de todos os estados",
      "formulário de exclusão separado",
      "perder a seleção ao abrir a correção",
      "ocultar o contexto da ordem antes da decisão"
    ],
    "criticalActions": [
      {
        "action": "Selecionar uma ordem de mudança e registrar a decisão",
        "presentation": "summary-first picker com primary-button contextual"
      },
      {
        "action": "Corrigir uma decisão existente",
        "presentation": "master-detail com contextual edit action"
      },
      {
        "action": "Excluir uma decisão existente",
        "presentation": "inline-row-command com confirmação destrutiva"
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
    "id": "changeOrderDecisionCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/changeOrderDecisionCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/changeOrderDecisionCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "changeOrderDecisionCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
