/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.defs.ts" enhancement="_blank"/>

export const listStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listStatusReport",
    "ports": [
      "StatusReport"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listStatusReport",
        "inputTypeName": "ListStatusReportInput",
        "outputTypeName": "ListStatusReportOutput",
        "input": [],
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
        "transactional": false,
        "steps": [
          "Resolve the StatusReport port.",
          "List all StatusReport records without pagination.",
          "Project each record into the canonical output fields in outputShape.",
          "Return the resulting collection."
        ],
        "outputShape": {
          "kind": "list",
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

export default listStatusReportUsecase;

export const pipeline = [
  {
    "id": "listStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.defs.ts",
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
