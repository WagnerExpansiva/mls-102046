/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/scheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

export const scheduleRiskAssessmentViewController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "scheduleRiskAssessmentView",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "scheduleRiskAssessmentView",
    "controllerName": "ScheduleRiskAssessmentViewController",
    "ownerKind": "workspace",
    "workspaceId": "scheduleRiskAssessmentView",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "scheduleRiskAssessmentViewQryScheduleRiskAssessmentViewHandler",
        "command": "qryScheduleRiskAssessmentView",
        "bffId": "qryScheduleRiskAssessmentView",
        "route": "buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView",
        "kind": "query",
        "usecaseRef": "inspectScheduleRiskAssessment",
        "usecaseRefs": [
          "inspectScheduleRiskAssessment"
        ],
        "inputTypeName": "InspectScheduleRiskAssessmentInput",
        "inputContract": [
          {
            "inputId": "scheduleRiskAssessmentProjectId",
            "fieldRef": "ScheduleRiskAssessment.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Avaliação de risco de atraso"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "taskStatus",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "taskStatus"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "progressPercent",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "progressPercent"
              ],
              "fromItems": false
            },
            {
              "name": "riskIndicators",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "riskIndicators"
              ],
              "fromItems": false
            },
            {
              "name": "riskExplanation",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "riskExplanation"
              ],
              "fromItems": false
            },
            {
              "name": "assessedAt",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "assessedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView",
        "handlerName": "scheduleRiskAssessmentViewQryScheduleRiskAssessmentViewHandler"
      }
    ]
  }
} as const;

export default scheduleRiskAssessmentViewController;

export const pipeline = [
  {
    "id": "scheduleRiskAssessmentView__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/scheduleRiskAssessmentView.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/scheduleRiskAssessmentView.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
