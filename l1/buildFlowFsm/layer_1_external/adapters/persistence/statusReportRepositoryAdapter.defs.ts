/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const statusReportRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "StatusReportRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StatusReport",
    "className": "StatusReportRepositoryAdapter",
    "portRef": "IStatusReportRepository",
    "tableRef": "status_reports",
    "mdmReads": [],
    "notes": [
      "Maps status_report_id, project_id, status, generated_by_user_id, and published_by_user_id as snake_case columns; stores title, content, communicated_risks, generated_at, published_at, and withdrawn_at in details JSONB."
    ]
  }
} as const;

export default statusReportRepositoryAdapter;

export const pipeline = [
  {
    "id": "statusReportRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
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
