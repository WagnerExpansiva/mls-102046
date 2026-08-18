/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/inventoryBalanceCatalogue.defs.ts" enhancement="_blank"/>

export const inventoryBalanceCatalogueWorkspace = {
  "workspaceId": "inventoryBalanceCatalogue",
  "title": "Saldo de estoque",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "InventoryBalance",
  "bffCalls": [
    {
      "bffId": "qryListInventoryBalance",
      "kind": "query",
      "uses": [
        {
          "operationId": "listInventoryBalance"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "inventoryBalanceId",
            "from": "listInventoryBalance.$items.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "listInventoryBalance.$items.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "physicalQuantity",
            "from": "listInventoryBalance.$items.physicalQuantity",
            "type": "number",
            "required": true
          },
          {
            "name": "applicableUnitCost",
            "from": "listInventoryBalance.$items.applicableUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "listInventoryBalance.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance"
    },
    {
      "bffId": "cmdCreateInventoryBalance",
      "kind": "command",
      "uses": [
        {
          "operationId": "createInventoryBalance"
        }
      ],
      "input": [
        {
          "name": "inventoryItemId",
          "from": "createInventoryBalance.inventoryItemId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInventoryItemPicker",
          "type": "string"
        },
        {
          "name": "physicalQuantity",
          "from": "createInventoryBalance.physicalQuantity",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "applicableUnitCost",
          "from": "createInventoryBalance.applicableUnitCost",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "status",
          "from": "createInventoryBalance.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "inventoryBalanceId",
            "from": "createInventoryBalance.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "createInventoryBalance.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "physicalQuantity",
            "from": "createInventoryBalance.physicalQuantity",
            "type": "number",
            "required": true
          },
          {
            "name": "applicableUnitCost",
            "from": "createInventoryBalance.applicableUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "createInventoryBalance.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance"
    },
    {
      "bffId": "cmdUpdateInventoryBalance",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateInventoryBalance"
        }
      ],
      "input": [
        {
          "name": "inventoryBalanceId",
          "from": "updateInventoryBalance.inventoryBalanceId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "inventoryItemId",
          "from": "updateInventoryBalance.inventoryItemId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInventoryItemPicker",
          "type": "string"
        },
        {
          "name": "physicalQuantity",
          "from": "updateInventoryBalance.physicalQuantity",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "applicableUnitCost",
          "from": "updateInventoryBalance.applicableUnitCost",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "status",
          "from": "updateInventoryBalance.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "inventoryBalanceId",
            "from": "updateInventoryBalance.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "updateInventoryBalance.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "physicalQuantity",
            "from": "updateInventoryBalance.physicalQuantity",
            "type": "number",
            "required": true
          },
          {
            "name": "applicableUnitCost",
            "from": "updateInventoryBalance.applicableUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "updateInventoryBalance.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance"
    },
    {
      "bffId": "cmdDeleteInventoryBalance",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteInventoryBalance"
        }
      ],
      "input": [
        {
          "name": "inventoryBalanceId",
          "from": "deleteInventoryBalance.inventoryBalanceId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "inventoryBalanceId",
            "from": "deleteInventoryBalance.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "deleteInventoryBalance.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "physicalQuantity",
            "from": "deleteInventoryBalance.physicalQuantity",
            "type": "number",
            "required": true
          },
          {
            "name": "applicableUnitCost",
            "from": "deleteInventoryBalance.applicableUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteInventoryBalance.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance"
    },
    {
      "bffId": "qryInventoryItemPicker",
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
      "route": "buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Saldo de estoque.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListInventoryBalance"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteInventoryBalance"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Saldo de estoque.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateInventoryBalance"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateInventoryBalance"
        },
        {
          "role": "filterControl",
          "dataSource": "qryInventoryItemPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createInventoryBalance",
    "deleteInventoryBalance",
    "listInventoryBalance",
    "listInventoryItem",
    "updateInventoryBalance"
  ],
  "purpose": "Cadastro de Saldo de estoque.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:5b6282bb"
} as const;

export default inventoryBalanceCatalogueWorkspace;
