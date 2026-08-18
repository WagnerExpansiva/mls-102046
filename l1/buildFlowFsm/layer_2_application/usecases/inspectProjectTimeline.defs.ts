/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.defs.ts" enhancement="_blank"/>

export const inspectProjectTimelineUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectProjectTimeline",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectProjectTimeline",
    "ports": [
      "ProjectTimeline",
      "Project",
      "WorkTask"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "inspectProjectTimeline",
        "inputTypeName": "InspectProjectTimelineInput",
        "outputTypeName": "InspectProjectTimelineOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Cronograma da obra",
            "ofEntity": "ProjectTimeline",
            "fieldRef": "ProjectTimeline.projectId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectTimeline"
          },
          {
            "name": "workTasks",
            "type": "string",
            "required": false,
            "ofEntity": "ProjectTimeline"
          },
          {
            "name": "scheduleEntries",
            "type": "string",
            "required": false,
            "ofEntity": "ProjectTimeline"
          }
        ],
        "ports": [
          "ProjectTimeline",
          "Project",
          "WorkTask"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Load the ProjectTimeline aggregate through the ProjectTimeline port using the selected projectId key.",
          "Return the canonical ProjectTimeline projection with projectId, workTasks, and scheduleEntries.",
          "Do not query child repositories or mutate any aggregate."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectTimeline.projectId"
            },
            {
              "name": "workTasks",
              "type": "string",
              "required": false,
              "fieldRef": "ProjectTimeline.workTasks"
            },
            {
              "name": "scheduleEntries",
              "type": "string",
              "required": false,
              "fieldRef": "ProjectTimeline.scheduleEntries"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default inspectProjectTimelineUsecase;

export const pipeline = [
  {
    "id": "inspectProjectTimeline__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
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
