/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/materialUsageCatalogue.defs.ts" enhancement="_blank"/>

export const materialUsageCatalogueWorkspace = {
  "workspaceId": "materialUsageCatalogue",
  "title": "Consumo de material",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "kind": "operation",
  "entity": "MaterialUsage",
  "bffCalls": [
    {
      "bffId": "qryListMaterialUsage",
      "kind": "query",
      "uses": [
        {
          "operationId": "listMaterialUsage"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "materialUsageId",
            "from": "listMaterialUsage.$items.materialUsageId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listMaterialUsage.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listMaterialUsage.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "listMaterialUsage.$items.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryBalanceId",
            "from": "listMaterialUsage.$items.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "quantity",
            "from": "listMaterialUsage.$items.quantity",
            "type": "number",
            "required": true
          },
          {
            "name": "usageDescription",
            "from": "listMaterialUsage.$items.usageDescription",
            "type": "string",
            "required": true
          },
          {
            "name": "consumedOn",
            "from": "listMaterialUsage.$items.consumedOn",
            "type": "string",
            "required": true
          },
          {
            "name": "unitCostBasis",
            "from": "listMaterialUsage.$items.unitCostBasis",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage"
    },
    {
      "bffId": "cmdCreateMaterialUsage",
      "kind": "command",
      "uses": [
        {
          "operationId": "createMaterialUsage"
        }
      ],
      "input": [
        {
          "name": "inventoryBalanceInventoryBalanceId",
          "from": "createMaterialUsage.inventoryBalanceInventoryBalanceId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInventoryBalancePicker",
          "type": "string"
        },
        {
          "name": "inventoryItemInventoryItemId",
          "from": "createMaterialUsage.inventoryItemInventoryItemId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInventoryItemPicker",
          "type": "string"
        },
        {
          "name": "projectProjectId",
          "from": "createMaterialUsage.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "quantity",
          "from": "createMaterialUsage.quantity",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "usageDescription",
          "from": "createMaterialUsage.usageDescription",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "consumedOn",
          "from": "createMaterialUsage.consumedOn",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "unitCostBasis",
          "from": "createMaterialUsage.unitCostBasis",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "materialUsageId",
            "from": "createMaterialUsage.materialUsageId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createMaterialUsage.status",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "createMaterialUsage.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "createMaterialUsage.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryBalanceId",
            "from": "createMaterialUsage.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "quantity",
            "from": "createMaterialUsage.quantity",
            "type": "number",
            "required": true
          },
          {
            "name": "usageDescription",
            "from": "createMaterialUsage.usageDescription",
            "type": "string",
            "required": true
          },
          {
            "name": "consumedOn",
            "from": "createMaterialUsage.consumedOn",
            "type": "string",
            "required": true
          },
          {
            "name": "unitCostBasis",
            "from": "createMaterialUsage.unitCostBasis",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage"
    },
    {
      "bffId": "cmdUpdateMaterialUsage",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateMaterialUsage"
        }
      ],
      "input": [
        {
          "name": "materialUsageId",
          "from": "updateMaterialUsage.materialUsageId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "status",
          "from": "updateMaterialUsage.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "projectId",
          "from": "updateMaterialUsage.projectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryProjectPicker",
          "type": "string"
        },
        {
          "name": "inventoryItemId",
          "from": "updateMaterialUsage.inventoryItemId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInventoryItemPicker",
          "type": "string"
        },
        {
          "name": "inventoryBalanceId",
          "from": "updateMaterialUsage.inventoryBalanceId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryInventoryBalancePicker",
          "type": "string"
        },
        {
          "name": "quantity",
          "from": "updateMaterialUsage.quantity",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "usageDescription",
          "from": "updateMaterialUsage.usageDescription",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "consumedOn",
          "from": "updateMaterialUsage.consumedOn",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "unitCostBasis",
          "from": "updateMaterialUsage.unitCostBasis",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "materialUsageId",
            "from": "updateMaterialUsage.materialUsageId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "updateMaterialUsage.status",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "updateMaterialUsage.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "updateMaterialUsage.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryBalanceId",
            "from": "updateMaterialUsage.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "quantity",
            "from": "updateMaterialUsage.quantity",
            "type": "number",
            "required": true
          },
          {
            "name": "usageDescription",
            "from": "updateMaterialUsage.usageDescription",
            "type": "string",
            "required": true
          },
          {
            "name": "consumedOn",
            "from": "updateMaterialUsage.consumedOn",
            "type": "string",
            "required": true
          },
          {
            "name": "unitCostBasis",
            "from": "updateMaterialUsage.unitCostBasis",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage"
    },
    {
      "bffId": "cmdDeleteMaterialUsage",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteMaterialUsage"
        }
      ],
      "input": [
        {
          "name": "materialUsageId",
          "from": "deleteMaterialUsage.materialUsageId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "materialUsageId",
            "from": "deleteMaterialUsage.materialUsageId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteMaterialUsage.status",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "deleteMaterialUsage.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "deleteMaterialUsage.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryBalanceId",
            "from": "deleteMaterialUsage.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "quantity",
            "from": "deleteMaterialUsage.quantity",
            "type": "number",
            "required": true
          },
          {
            "name": "usageDescription",
            "from": "deleteMaterialUsage.usageDescription",
            "type": "string",
            "required": true
          },
          {
            "name": "consumedOn",
            "from": "deleteMaterialUsage.consumedOn",
            "type": "string",
            "required": true
          },
          {
            "name": "unitCostBasis",
            "from": "deleteMaterialUsage.unitCostBasis",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage"
    },
    {
      "bffId": "qryInventoryBalancePicker",
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
      "route": "buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker"
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
      "route": "buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker"
    },
    {
      "bffId": "qryProjectPicker",
      "kind": "query",
      "uses": [
        {
          "operationId": "listProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "listProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "listProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "listProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "listProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "listProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "listProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.materialUsageCatalogue.qryProjectPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Consumo de material.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListMaterialUsage"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteMaterialUsage"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Consumo de material.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateMaterialUsage"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateMaterialUsage"
        },
        {
          "role": "filterControl",
          "dataSource": "qryInventoryBalancePicker",
          "usage": "picker"
        },
        {
          "role": "filterControl",
          "dataSource": "qryInventoryItemPicker",
          "usage": "picker"
        },
        {
          "role": "filterControl",
          "dataSource": "qryProjectPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createMaterialUsage",
    "deleteMaterialUsage",
    "listInventoryBalance",
    "listInventoryItem",
    "listMaterialUsage",
    "listProject",
    "updateMaterialUsage"
  ],
  "purpose": "Cadastro de Consumo de material.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:91360b15"
} as const;

export default materialUsageCatalogueWorkspace;
