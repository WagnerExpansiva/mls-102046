/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const materialUsageRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "MaterialUsageRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MaterialUsage",
    "className": "MaterialUsageRepositoryAdapter",
    "portRef": "IMaterialUsageRepository",
    "tableRef": "material_usages",
    "mdmReads": [],
    "notes": [
      "Maps material_usage_id, status, project_id, inventory_item_id, and inventory_balance_id as snake_case columns; stores quantity, usage_description, consumed_on, and unit_cost_basis in details JSONB."
    ]
  }
} as const;

export default materialUsageRepositoryAdapter;

export const pipeline = [
  {
    "id": "materialUsageRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
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
