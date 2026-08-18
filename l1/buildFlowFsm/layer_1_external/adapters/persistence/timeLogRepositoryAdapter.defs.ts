/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const timeLogRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "TimeLogRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TimeLog",
    "className": "TimeLogRepositoryAdapter",
    "portRef": "ITimeLogRepository",
    "tableRef": "time_logs",
    "mdmReads": [],
    "notes": [
      "Maps time_log_id, status, work_task_id, and field_worker_id as snake_case columns; stores work_date, hours_worked, and hourly_labor_cost in details JSONB."
    ]
  }
} as const;

export default timeLogRepositoryAdapter;

export const pipeline = [
  {
    "id": "timeLogRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLog.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
