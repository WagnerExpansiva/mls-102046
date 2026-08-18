/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecisionRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const changeOrderDecisionRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ChangeOrderDecisionRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrderDecision",
    "className": "ChangeOrderDecisionRepositoryAdapter",
    "portRef": "IChangeOrderDecisionRepository",
    "tableRef": "change_order_decisions",
    "mdmReads": [],
    "notes": [
      "Maps change_order_decision_id and decision as snake_case columns; stores change_order, made_by_platform_user, and decided_at in details JSONB."
    ]
  }
} as const;

export default changeOrderDecisionRepositoryAdapter;

export const pipeline = [
  {
    "id": "changeOrderDecisionRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecisionRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecisionRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecision.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.d.ts"
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
