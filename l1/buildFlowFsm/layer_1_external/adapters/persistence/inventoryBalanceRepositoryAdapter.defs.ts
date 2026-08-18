/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalanceRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const inventoryBalanceRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "InventoryBalanceRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryBalance",
    "className": "InventoryBalanceRepositoryAdapter",
    "portRef": "IInventoryBalanceRepository",
    "tableRef": "inventory_balances",
    "mdmReads": [],
    "notes": [
      "Maps inventory_balance_id, inventory_item_id, and status as snake_case columns; stores physical_quantity and applicable_unit_cost in details JSONB."
    ]
  }
} as const;

export default inventoryBalanceRepositoryAdapter;

export const pipeline = [
  {
    "id": "inventoryBalanceRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalanceRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalanceRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalance.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.d.ts"
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
