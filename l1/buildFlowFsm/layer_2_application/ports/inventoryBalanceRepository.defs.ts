/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.defs.ts" enhancement="_blank"/>

export const inventoryBalanceRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "InventoryBalanceRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryBalance",
    "interfaceName": "IInventoryBalanceRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: InventoryBalanceId"
        ],
        "returns": "InventoryBalance | null",
        "description": "Retrieve an inventory balance by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: InventoryBalanceFilter"
        ],
        "returns": "InventoryBalance[]",
        "description": "List inventory balances matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: InventoryBalance"
        ],
        "returns": "void",
        "description": "Persist an inventory balance aggregate."
      },
      {
        "name": "getByItemId",
        "params": [
          "inventoryItemId: InventoryItemId"
        ],
        "returns": "InventoryBalance | null",
        "description": "Retrieve the balance for an inventory item."
      }
    ]
  }
} as const;

export default inventoryBalanceRepositoryPort;

export const pipeline = [
  {
    "id": "inventoryBalanceRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.d.ts"
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
