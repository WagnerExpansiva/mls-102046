/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectExecutionOverviewRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const projectExecutionOverviewRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ProjectExecutionOverviewRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectExecutionOverview",
    "className": "ProjectExecutionOverviewRepositoryAdapter",
    "portRef": "IProjectExecutionOverviewRepository",
    "tableRef": "project_execution_overviews",
    "mdmReads": [],
    "notes": [
      "Maps project_id as a snake_case column; stores project_name, project_status, work_task_ids, task_summary, upcoming_commitments, time_log_ids, total_logged_hours, material_usage_ids, material_usage_summary, actual_labor_cost, actual_material_cost, actual_cost, budget_amount, cost_variance, change_order_ids, change_order_impact_summary, and calculated_at in details JSONB."
    ]
  }
} as const;

export default projectExecutionOverviewRepositoryAdapter;

export const pipeline = [
  {
    "id": "projectExecutionOverviewRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectExecutionOverviewRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectExecutionOverviewRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectExecutionOverview.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.d.ts"
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
