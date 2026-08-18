/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/clientPortalAccessCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientPortalAccessCatalogue",
  "pageName": "Vínculo de acesso do cliente",
  "baseClassName": "BuildFlowFsmClientPortalAccessCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Vínculo de acesso do cliente.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.clientPortalAccessCatalogue.qryListClientPortalAccess",
      "source": "bff.qryListClientPortalAccess",
      "command": "qryListClientPortalAccess",
      "description": "Listar Vínculo de acesso do cliente",
      "kind": "query",
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.clientPortalAccessCatalogue.cmdCreateClientPortalAccess",
      "source": "bff.cmdCreateClientPortalAccess",
      "command": "cmdCreateClientPortalAccess",
      "description": "Criar Vínculo de acesso do cliente",
      "kind": "command",
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "platformUserId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess",
      "source": "bff.cmdUpdateClientPortalAccess",
      "command": "cmdUpdateClientPortalAccess",
      "description": "Atualizar Vínculo de acesso do cliente",
      "kind": "command",
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status"
      ],
      "inputs": [
        {
          "name": "clientPortalAccessId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "platformUserId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess",
      "source": "bff.cmdDeleteClientPortalAccess",
      "command": "cmdDeleteClientPortalAccess",
      "description": "Excluir Vínculo de acesso do cliente",
      "kind": "command",
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId"
      ],
      "inputs": [
        {
          "name": "clientPortalAccessId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.clientPortalAccessCatalogue.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "clientPortalAccessCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientPortalAccessCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientPortalAccessCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientPortalAccessCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
