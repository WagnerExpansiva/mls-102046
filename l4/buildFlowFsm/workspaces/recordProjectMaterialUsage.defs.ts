/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/recordProjectMaterialUsage.defs.ts" enhancement="_blank"/>

export const recordProjectMaterialUsageWorkspace = {
  "workspaceId": "recordProjectMaterialUsage",
  "title": "Registrar consumo de material da obra",
  "actors": [
    "fieldWorker"
  ],
  "kind": "operation",
  "entity": "MaterialUsage",
  "bffCalls": [
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.recordProjectMaterialUsage.qryLocateProject"
    },
    {
      "bffId": "qryLocateInventoryItem",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateInventoryItem"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "inventoryItemId",
            "from": "locateInventoryItem.$items.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateInventoryItem.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "locateInventoryItem.$items.description",
            "type": "string",
            "required": false
          },
          {
            "name": "unitOfMeasure",
            "from": "locateInventoryItem.$items.unitOfMeasure",
            "type": "string",
            "required": true
          },
          {
            "name": "referenceUnitCost",
            "from": "locateInventoryItem.$items.referenceUnitCost",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "locateInventoryItem.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem"
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
          "sourceRef": "qryLocateInventoryItem",
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
      "route": "buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage"
    },
    {
      "bffId": "cmdHandoffMaterialUsageToFieldCoordinator",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffMaterialUsageToFieldCoordinator"
        }
      ],
      "input": [
        {
          "name": "materialUsageMaterialUsageId",
          "from": "handoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "quantity",
          "from": "handoffMaterialUsageToFieldCoordinator.quantity",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "usageDescription",
          "from": "handoffMaterialUsageToFieldCoordinator.usageDescription",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "consumedOn",
          "from": "handoffMaterialUsageToFieldCoordinator.consumedOn",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "unitCostBasis",
          "from": "handoffMaterialUsageToFieldCoordinator.unitCostBasis",
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
            "from": "handoffMaterialUsageToFieldCoordinator.materialUsageId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "handoffMaterialUsageToFieldCoordinator.status",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "handoffMaterialUsageToFieldCoordinator.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "handoffMaterialUsageToFieldCoordinator.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryBalanceId",
            "from": "handoffMaterialUsageToFieldCoordinator.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "quantity",
            "from": "handoffMaterialUsageToFieldCoordinator.quantity",
            "type": "number",
            "required": true
          },
          {
            "name": "usageDescription",
            "from": "handoffMaterialUsageToFieldCoordinator.usageDescription",
            "type": "string",
            "required": true
          },
          {
            "name": "consumedOn",
            "from": "handoffMaterialUsageToFieldCoordinator.consumedOn",
            "type": "string",
            "required": true
          },
          {
            "name": "unitCostBasis",
            "from": "handoffMaterialUsageToFieldCoordinator.unitCostBasis",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator"
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
      "route": "buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker"
    }
  ],
  "sections": [
    {
      "sectionId": "locateProject",
      "intent": "Uma obra ativa do catálogo compartilhado está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "locateInventoryItem",
      "intent": "Um item do catálogo compartilhado de materiais e estoque está selecionado.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateInventoryItem",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "createMaterialUsage",
      "intent": "O consumo fica vinculado à obra e disponível para o custo realizado.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateMaterialUsage"
        },
        {
          "role": "filterControl",
          "dataSource": "qryInventoryBalancePicker",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "handoffMaterialUsageToFieldCoordinator",
      "intent": "O coordenador recebe o consumo para acompanhamento.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffMaterialUsageToFieldCoordinator"
        }
      ]
    }
  ],
  "operationIds": [
    "createMaterialUsage",
    "handoffMaterialUsageToFieldCoordinator",
    "listInventoryBalance",
    "locateInventoryItem",
    "locateProject"
  ],
  "purpose": "Rastrear materiais consumidos em uma obra para apoiar execução e custeio.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:51df6caa"
} as const;

export default recordProjectMaterialUsageWorkspace;
