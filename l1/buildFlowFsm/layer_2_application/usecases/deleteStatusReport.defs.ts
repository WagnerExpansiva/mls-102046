/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteStatusReport.defs.ts" enhancement="_blank"/>

export const deleteStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteStatusReport",
    "ports": [
      "StatusReport"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteStatusReport",
        "inputTypeName": "DeleteStatusReportInput",
        "outputTypeName": "DeleteStatusReportOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada.",
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
          "StatusReport"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load the StatusReport aggregate through the StatusReport port using statusReportId.",
          "If the report does not exist, return a not-found validation error for statusReportId.",
          "Capture the declared output fields from the loaded report before deletion.",
          "Delete the StatusReport through the StatusReport port within the transaction.",
          "Return the captured deleted report representation."
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

export default deleteStatusReportUsecase;

export const pipeline = [
  {
    "id": "deleteStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteStatusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
