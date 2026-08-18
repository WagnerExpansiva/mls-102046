/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const workTaskRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "WorkTaskRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "WorkTask",
    "className": "WorkTaskRepositoryAdapter",
    "portRef": "IWorkTaskRepository",
    "tableRef": "work_tasks",
    "mdmReads": [],
    "notes": [
      "Maps work_task_id, project_id, assigned_field_worker_id, and status as snake_case columns; stores description, due_date, and progress_update in details JSONB."
    ]
  }
} as const;

export default workTaskRepositoryAdapter;

export const pipeline = [
  {
    "id": "workTaskRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTask.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
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
