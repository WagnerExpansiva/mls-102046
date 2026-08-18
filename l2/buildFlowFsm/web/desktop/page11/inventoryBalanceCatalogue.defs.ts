/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryBalanceCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "inventoryBalanceCatalogue",
  "pageName": "Saldo de estoque",
  "baseClassName": "BuildFlowFsmInventoryBalanceCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Saldo de estoque.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.inventoryBalanceCatalogue.qryListInventoryBalance",
      "source": "bff.qryListInventoryBalance",
      "command": "qryListInventoryBalance",
      "description": "Listar Saldo de estoque",
      "kind": "query",
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
      "source": "bff.cmdCreateInventoryBalance",
      "command": "cmdCreateInventoryBalance",
      "description": "Criar Saldo de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status"
      ],
      "inputs": [
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "physicalQuantity",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "applicableUnitCost",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
      "source": "bff.cmdUpdateInventoryBalance",
      "command": "cmdUpdateInventoryBalance",
      "description": "Atualizar Saldo de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status"
      ],
      "inputs": [
        {
          "name": "inventoryBalanceId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "physicalQuantity",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "applicableUnitCost",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
      "source": "bff.cmdDeleteInventoryBalance",
      "command": "cmdDeleteInventoryBalance",
      "description": "Excluir Saldo de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId"
      ],
      "inputs": [
        {
          "name": "inventoryBalanceId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.inventoryBalanceCatalogue.qryInventoryItemPicker",
      "source": "bff.qryInventoryItemPicker",
      "command": "qryInventoryItemPicker",
      "description": "Listar Item de estoque",
      "kind": "query",
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "inventoryBalanceCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryBalanceCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryBalanceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "inventoryBalanceCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
