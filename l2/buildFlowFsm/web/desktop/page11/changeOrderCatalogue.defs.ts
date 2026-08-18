/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderCatalogue",
  "pageName": "Ordem de mudança",
  "baseClassName": "BuildFlowFsmChangeOrderCatalogueBase",
  "actor": "client",
  "purpose": "Cadastro de Ordem de mudança.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.changeOrderCatalogue.qryListChangeOrder",
      "source": "bff.qryListChangeOrder",
      "command": "qryListChangeOrder",
      "description": "Listar Ordem de mudança",
      "kind": "query",
      "stateKey": "ui.changeOrderCatalogue.data.qryListChangeOrder",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.changeOrderCatalogue.cmdCreateChangeOrder",
      "source": "bff.cmdCreateChangeOrder",
      "command": "cmdCreateChangeOrder",
      "description": "Registrar a alteração proposta",
      "kind": "command",
      "stateKey": "ui.changeOrderCatalogue.output.cmdCreateChangeOrder",
      "inputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact",
        "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount"
      ],
      "inputs": [
        {
          "name": "clientClientId",
          "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "description",
          "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scopeImpact",
          "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleImpact",
          "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "changeAmount",
          "stateKey": "ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.changeOrderCatalogue.cmdUpdateChangeOrder",
      "source": "bff.cmdUpdateChangeOrder",
      "command": "cmdUpdateChangeOrder",
      "description": "Atualizar Ordem de mudança",
      "kind": "command",
      "stateKey": "ui.changeOrderCatalogue.output.cmdUpdateChangeOrder",
      "inputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt",
        "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status"
      ],
      "inputs": [
        {
          "name": "changeOrderId",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientRef",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectRef",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scopeImpact",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleImpact",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "changeAmount",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "submittedAt",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "forwardedForClientApprovalAt",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt",
          "source": "systemDefault",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.changeOrderCatalogue.cmdDeleteChangeOrder",
      "source": "bff.cmdDeleteChangeOrder",
      "command": "cmdDeleteChangeOrder",
      "description": "Excluir Ordem de mudança",
      "kind": "command",
      "stateKey": "ui.changeOrderCatalogue.output.cmdDeleteChangeOrder",
      "inputStateKeys": [
        "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId"
      ],
      "inputs": [
        {
          "name": "changeOrderId",
          "stateKey": "ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.changeOrderCatalogue.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.changeOrderCatalogue.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.changeOrderCatalogue.qryProjectPicker",
      "source": "bff.qryProjectPicker",
      "command": "qryProjectPicker",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.changeOrderCatalogue.data.qryProjectPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "changeOrderCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "changeOrderCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
