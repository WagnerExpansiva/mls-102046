/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectTimelineView.defs.ts" enhancement="_blank"/>

export const projectTimelineViewController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectTimelineView",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectTimelineView",
    "controllerName": "ProjectTimelineViewController",
    "ownerKind": "workspace",
    "workspaceId": "projectTimelineView",
    "actors": [
      "fieldCoordinator"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "projectTimelineViewQryProjectTimelineViewHandler",
        "command": "qryProjectTimelineView",
        "bffId": "qryProjectTimelineView",
        "route": "buildFlowFsm.projectTimelineView.qryProjectTimelineView",
        "kind": "query",
        "usecaseRef": "inspectProjectTimeline",
        "usecaseRefs": [
          "inspectProjectTimeline"
        ],
        "inputTypeName": "InspectProjectTimelineInput",
        "inputContract": [
          {
            "inputId": "projectTimelineProjectId",
            "fieldRef": "ProjectTimeline.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Cronograma da obra"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectProjectTimeline",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "workTasks",
              "operationId": "inspectProjectTimeline",
              "path": [
                "workTasks"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleEntries",
              "operationId": "inspectProjectTimeline",
              "path": [
                "scheduleEntries"
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
        "key": "buildFlowFsm.projectTimelineView.qryProjectTimelineView",
        "handlerName": "projectTimelineViewQryProjectTimelineViewHandler"
      }
    ]
  }
} as const;

export default projectTimelineViewController;

export const pipeline = [
  {
    "id": "projectTimelineView__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectTimelineView.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectTimelineView.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectTimelineView.qryProjectTimelineView.defs.ts"
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
