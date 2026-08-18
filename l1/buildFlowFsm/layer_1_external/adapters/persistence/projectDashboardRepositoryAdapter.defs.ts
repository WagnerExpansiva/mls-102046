/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectDashboardRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const projectDashboardRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ProjectDashboardRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectDashboard",
    "className": "ProjectDashboardRepositoryAdapter",
    "portRef": "IProjectDashboardRepository",
    "tableRef": "project_dashboards",
    "mdmReads": [],
    "notes": [
      "Uses an adapter row with no real domain columns; stores active_projects, active_project_count, total_budget, total_actual_cost, budget_variance, cost_attention_projects, and upcoming_tasks in details JSONB."
    ]
  }
} as const;

export default projectDashboardRepositoryAdapter;

export const pipeline = [
  {
    "id": "projectDashboardRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectDashboardRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectDashboardRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectDashboard.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.d.ts"
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
