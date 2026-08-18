/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.defs.ts" enhancement="_blank"/>

export const timeLogRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "TimeLogRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TimeLog",
    "interfaceName": "ITimeLogRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: TimeLogId"
        ],
        "returns": "TimeLog | null",
        "description": "Retrieve a time log by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: TimeLogFilter"
        ],
        "returns": "TimeLog[]",
        "description": "List time logs matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: TimeLog"
        ],
        "returns": "void",
        "description": "Persist a time log aggregate."
      },
      {
        "name": "listByFieldWorkerId",
        "params": [
          "fieldWorkerId: FieldWorkerId"
        ],
        "returns": "TimeLog[]",
        "description": "List time logs recorded by a field worker."
      }
    ]
  }
} as const;

export default timeLogRepositoryPort;

export const pipeline = [
  {
    "id": "timeLogRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
