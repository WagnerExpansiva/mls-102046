/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryItemCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "inventoryItemCatalogue",
  "pageName": "Item de estoque",
  "baseClassName": "BuildFlowFsmInventoryItemCatalogueBase",
  "actor": "fieldWorker",
  "purpose": "Cadastro de Item de estoque.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.inventoryItemCatalogue.qryListInventoryItem",
      "source": "bff.qryListInventoryItem",
      "command": "qryListInventoryItem",
      "description": "Listar Item de estoque",
      "kind": "query",
      "stateKey": "ui.inventoryItemCatalogue.data.qryListInventoryItem",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.inventoryItemCatalogue.cmdCreateInventoryItem",
      "source": "bff.cmdCreateInventoryItem",
      "command": "cmdCreateInventoryItem",
      "description": "Criar Item de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryItemCatalogue.output.cmdCreateInventoryItem",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status"
      ],
      "inputs": [
        {
          "name": "name",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "unitOfMeasure",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "referenceUnitCost",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "source": "bff.cmdUpdateInventoryItem",
      "command": "cmdUpdateInventoryItem",
      "description": "Atualizar Item de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status"
      ],
      "inputs": [
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "name",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "unitOfMeasure",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "referenceUnitCost",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryItemCatalogue.cmdDeleteInventoryItem",
      "source": "bff.cmdDeleteInventoryItem",
      "command": "cmdDeleteInventoryItem",
      "description": "Excluir Item de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId"
      ],
      "inputs": [
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "inventoryItemCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryItemCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryItemCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "inventoryItemCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
