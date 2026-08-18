/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderDecisionCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderDecisionCatalogue",
  "pageName": "Decisão sobre ordem de mudança",
  "baseClassName": "BuildFlowFsmChangeOrderDecisionCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Decisão sobre ordem de mudança.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
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
    "id": "changeOrderDecisionCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderDecisionCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderDecisionCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "changeOrderDecisionCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
