/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const inventoryItemRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "InventoryItemRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryItem",
    "className": "InventoryItemRepositoryAdapter",
    "portRef": "IInventoryItemRepository",
    "tableRef": "inventory_items",
    "mdmReads": [],
    "notes": [
      "Maps inventory_item_id and status as snake_case columns; stores name, description, unit_of_measure, and reference_unit_cost in details JSONB."
    ]
  }
} as const;

export default inventoryItemRepositoryAdapter;

export const pipeline = [
  {
    "id": "inventoryItemRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItem.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
