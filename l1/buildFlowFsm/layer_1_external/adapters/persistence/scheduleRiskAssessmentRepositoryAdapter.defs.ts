/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessmentRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const scheduleRiskAssessmentRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ScheduleRiskAssessmentRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ScheduleRiskAssessment",
    "className": "ScheduleRiskAssessmentRepositoryAdapter",
    "portRef": "IScheduleRiskAssessmentRepository",
    "tableRef": "schedule_risk_assessments",
    "mdmReads": [],
    "notes": [
      "Maps project_id and work_task_id as snake_case columns; stores task_status, due_date, progress_percent, risk_indicators, risk_explanation, and assessed_at in details JSONB."
    ]
  }
} as const;

export default scheduleRiskAssessmentRepositoryAdapter;

export const pipeline = [
  {
    "id": "scheduleRiskAssessmentRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessmentRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessmentRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessment.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.d.ts"
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
