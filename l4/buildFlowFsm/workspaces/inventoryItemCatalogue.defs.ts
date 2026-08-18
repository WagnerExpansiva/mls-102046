/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/inventoryItemCatalogue.defs.ts" enhancement="_blank"/>

export const inventoryItemCatalogueWorkspace = {
  "workspaceId": "inventoryItemCatalogue",
  "title": "Item de estoque",
  "actors": [
    "fieldWorker"
  ],
  "kind": "operation",
  "entity": "InventoryItem",
  "bffCalls": [
    {
      "bffId": "qryListInventoryItem",
      "kind": "query",
      "uses": [
        {
          "operationId": "listInventoryItem"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "inventoryItemId",
            "from": "listInventoryItem.$items.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "listInventoryItem.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "listInventoryItem.$items.description",
            "type": "string",
            "required": false
          },
          {
            "name": "unitOfMeasure",
            "from": "listInventoryItem.$items.unitOfMeasure",
            "type": "string",
            "required": true
          },
          {
            "name": "referenceUnitCost",
            "from": "listInventoryItem.$items.referenceUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "listInventoryItem.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem"
    },
    {
      "bffId": "cmdCreateInventoryItem",
      "kind": "command",
      "uses": [
        {
          "operationId": "createInventoryItem"
        }
      ],
      "input": [
        {
          "name": "name",
          "from": "createInventoryItem.name",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "description",
          "from": "createInventoryItem.description",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "unitOfMeasure",
          "from": "createInventoryItem.unitOfMeasure",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "referenceUnitCost",
          "from": "createInventoryItem.referenceUnitCost",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "status",
          "from": "createInventoryItem.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "inventoryItemId",
            "from": "createInventoryItem.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "createInventoryItem.name",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "createInventoryItem.description",
            "type": "string",
            "required": false
          },
          {
            "name": "unitOfMeasure",
            "from": "createInventoryItem.unitOfMeasure",
            "type": "string",
            "required": true
          },
          {
            "name": "referenceUnitCost",
            "from": "createInventoryItem.referenceUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "createInventoryItem.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem"
    },
    {
      "bffId": "cmdUpdateInventoryItem",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateInventoryItem"
        }
      ],
      "input": [
        {
          "name": "inventoryItemId",
          "from": "updateInventoryItem.inventoryItemId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "name",
          "from": "updateInventoryItem.name",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "description",
          "from": "updateInventoryItem.description",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "unitOfMeasure",
          "from": "updateInventoryItem.unitOfMeasure",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "referenceUnitCost",
          "from": "updateInventoryItem.referenceUnitCost",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "status",
          "from": "updateInventoryItem.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "inventoryItemId",
            "from": "updateInventoryItem.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "updateInventoryItem.name",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "updateInventoryItem.description",
            "type": "string",
            "required": false
          },
          {
            "name": "unitOfMeasure",
            "from": "updateInventoryItem.unitOfMeasure",
            "type": "string",
            "required": true
          },
          {
            "name": "referenceUnitCost",
            "from": "updateInventoryItem.referenceUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "updateInventoryItem.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem"
    },
    {
      "bffId": "cmdDeleteInventoryItem",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteInventoryItem"
        }
      ],
      "input": [
        {
          "name": "inventoryItemId",
          "from": "deleteInventoryItem.inventoryItemId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "inventoryItemId",
            "from": "deleteInventoryItem.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "deleteInventoryItem.name",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "deleteInventoryItem.description",
            "type": "string",
            "required": false
          },
          {
            "name": "unitOfMeasure",
            "from": "deleteInventoryItem.unitOfMeasure",
            "type": "string",
            "required": true
          },
          {
            "name": "referenceUnitCost",
            "from": "deleteInventoryItem.referenceUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteInventoryItem.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Item de estoque.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListInventoryItem"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteInventoryItem"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Item de estoque.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateInventoryItem"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateInventoryItem"
        }
      ]
    }
  ],
  "operationIds": [
    "createInventoryItem",
    "deleteInventoryItem",
    "listInventoryItem",
    "updateInventoryItem"
  ],
  "purpose": "Cadastro de Item de estoque.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:e31ad3b6"
} as const;

export default inventoryItemCatalogueWorkspace;
