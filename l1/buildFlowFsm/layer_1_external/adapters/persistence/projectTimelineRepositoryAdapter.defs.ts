/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimelineRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const projectTimelineRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ProjectTimelineRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectTimeline",
    "className": "ProjectTimelineRepositoryAdapter",
    "portRef": "IProjectTimelineRepository",
    "tableRef": "project_timelines",
    "mdmReads": [],
    "notes": [
      "Maps project_id as a snake_case column; stores work_tasks and schedule_entries in details JSONB."
    ]
  }
} as const;

export default projectTimelineRepositoryAdapter;

export const pipeline = [
  {
    "id": "projectTimelineRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimelineRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimelineRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimeline.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.d.ts"
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
