/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const changeOrderRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ChangeOrderRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrder",
    "className": "ChangeOrderRepositoryAdapter",
    "portRef": "IChangeOrderRepository",
    "tableRef": "change_orders",
    "mdmReads": [],
    "notes": [
      "Maps change_order_id and status as snake_case columns; stores client_ref, project_ref, description, scope_impact, schedule_impact, change_amount, submitted_at, and forwarded_for_client_approval_at in details JSONB."
    ]
  }
} as const;

export default changeOrderRepositoryAdapter;

export const pipeline = [
  {
    "id": "changeOrderRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts"
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
