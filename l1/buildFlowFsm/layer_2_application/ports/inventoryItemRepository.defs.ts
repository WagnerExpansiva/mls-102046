/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.defs.ts" enhancement="_blank"/>

export const inventoryItemRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "InventoryItemRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryItem",
    "interfaceName": "IInventoryItemRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: InventoryItemId"
        ],
        "returns": "InventoryItem | null",
        "description": "Retrieve an inventory item by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: InventoryItemFilter"
        ],
        "returns": "InventoryItem[]",
        "description": "List inventory items matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: InventoryItem"
        ],
        "returns": "void",
        "description": "Persist an inventory item aggregate."
      },
      {
        "name": "findBySku",
        "params": [
          "sku: InventoryItemSku"
        ],
        "returns": "InventoryItem | null",
        "description": "Find an inventory item by its domain SKU."
      }
    ]
  }
} as const;

export default inventoryItemRepositoryPort;

export const pipeline = [
  {
    "id": "inventoryItemRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
