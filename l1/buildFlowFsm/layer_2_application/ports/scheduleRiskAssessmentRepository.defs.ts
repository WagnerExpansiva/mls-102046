/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.defs.ts" enhancement="_blank"/>

export const scheduleRiskAssessmentRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ScheduleRiskAssessmentRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ScheduleRiskAssessment",
    "interfaceName": "IScheduleRiskAssessmentRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ScheduleRiskAssessmentId"
        ],
        "returns": "ScheduleRiskAssessment | null",
        "description": "Retrieve a schedule risk assessment by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ScheduleRiskAssessmentFilter"
        ],
        "returns": "ScheduleRiskAssessment[]",
        "description": "List schedule risk assessments matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ScheduleRiskAssessment"
        ],
        "returns": "void",
        "description": "Persist a schedule risk assessment aggregate."
      },
      {
        "name": "listByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "ScheduleRiskAssessment[]",
        "description": "List schedule risk assessments for a project."
      }
    ]
  }
} as const;

export default scheduleRiskAssessmentRepositoryPort;

export const pipeline = [
  {
    "id": "scheduleRiskAssessmentRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.d.ts"
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
