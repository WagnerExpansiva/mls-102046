/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectStatusReport.defs.ts" enhancement="_blank"/>

export const inspectStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectStatusReport",
    "ports": [
      "StatusReport",
      "ScheduleRiskAssessment"
    ],
    "rulesApplied": [
      "clientVisibleStatusReport"
    ],
    "functions": [
      {
        "functionName": "inspectStatusReport",
        "inputTypeName": "InspectStatusReportInput",
        "outputTypeName": "InspectStatusReportOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "description": "Relatório de status",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.statusReportId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "content",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "communicatedRisks",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "generatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "generatedByUserId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "publishedAt",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "publishedByUserId",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "withdrawnAt",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          }
        ],
        "ports": [
          "StatusReport",
          "ScheduleRiskAssessment"
        ],
        "rulesApplied": [
          "clientVisibleStatusReport"
        ],
        "transactional": false,
        "steps": [
          "Receive statusReportId from the selected StatusReport entity.",
          "Load the StatusReport aggregate through the StatusReport port using statusReportId.",
          "Apply clientVisibleStatusReport inline: only a published report is client-visible; reject draft or withdrawn reports with a validation error containing the rule id.",
          "Return exactly the canonical outputShape fields from the published StatusReport.",
          "Do not query ScheduleRiskAssessment because this read operation has no derived risk projection and the canonical output is fully provided by StatusReport."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "statusReportId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.statusReportId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.projectId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.status"
            },
            {
              "name": "title",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.title"
            },
            {
              "name": "content",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.content"
            },
            {
              "name": "communicatedRisks",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.communicatedRisks"
            },
            {
              "name": "generatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.generatedAt"
            },
            {
              "name": "generatedByUserId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.generatedByUserId"
            },
            {
              "name": "publishedAt",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.publishedAt"
            },
            {
              "name": "publishedByUserId",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.publishedByUserId"
            },
            {
              "name": "withdrawnAt",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.withdrawnAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default inspectStatusReportUsecase;

export const pipeline = [
  {
    "id": "inspectStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectStatusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "clientVisibleStatusReport"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
