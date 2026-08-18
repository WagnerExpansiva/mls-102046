/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.defs.ts" enhancement="_blank"/>

export const locateWorkTaskUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "locateWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "locateWorkTask",
    "ports": [
      "WorkTask"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "locateWorkTask",
        "inputTypeName": "LocateWorkTaskInput",
        "outputTypeName": "LocateWorkTaskOutput",
        "input": [],
        "output": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "assignedFieldWorkerId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "dueDate",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "progressUpdate",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask"
          }
        ],
        "ports": [
          "WorkTask"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Query the WorkTask port for the assigned work task using the list access pattern without pagination.",
          "Return the selected WorkTask projection with workTaskId, projectId, assignedFieldWorkerId, description, dueDate, status, and progressUpdate."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "workTaskId",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.workTaskId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.projectId"
            },
            {
              "name": "assignedFieldWorkerId",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.assignedFieldWorkerId"
            },
            {
              "name": "description",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.description"
            },
            {
              "name": "dueDate",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.dueDate"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.status"
            },
            {
              "name": "progressUpdate",
              "type": "string",
              "required": false,
              "fieldRef": "WorkTask.progressUpdate"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default locateWorkTaskUsecase;

export const pipeline = [
  {
    "id": "locateWorkTask__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
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
