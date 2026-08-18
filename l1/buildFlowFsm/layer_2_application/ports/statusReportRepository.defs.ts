/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.defs.ts" enhancement="_blank"/>

export const statusReportRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "StatusReportRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StatusReport",
    "interfaceName": "IStatusReportRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: StatusReportId"
        ],
        "returns": "StatusReport | null",
        "description": "Retrieve a status report by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: StatusReportFilter"
        ],
        "returns": "StatusReport[]",
        "description": "List status reports matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: StatusReport"
        ],
        "returns": "void",
        "description": "Persist a status report aggregate."
      },
      {
        "name": "listByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "StatusReport[]",
        "description": "List status reports for a project."
      }
    ]
  }
} as const;

export default statusReportRepositoryPort;

export const pipeline = [
  {
    "id": "statusReportRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
