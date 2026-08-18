/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteTimeLog.defs.ts" enhancement="_blank"/>

export const deleteTimeLogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteTimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteTimeLog",
    "ports": [
      "TimeLog"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteTimeLog",
        "inputTypeName": "DeleteTimeLogInput",
        "outputTypeName": "DeleteTimeLogOutput",
        "input": [
          {
            "name": "timeLogId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do apontamento de horas, transportado entre as etapas conectadas.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.timeLogId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "timeLogId",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "fieldWorkerId",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "workDate",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "hoursWorked",
            "type": "number",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "hourlyLaborCost",
            "type": "number",
            "required": true,
            "ofEntity": "TimeLog"
          }
        ],
        "ports": [
          "TimeLog"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load the TimeLog aggregate through the TimeLog port using the requested timeLogId.",
          "If the TimeLog does not exist, return the port's not-found validation error.",
          "Capture the canonical TimeLog fields before deletion so the declared output shape can be returned.",
          "Delete the TimeLog through the TimeLog port inside the transaction wrapper.",
          "Return the captured TimeLog fields."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "timeLogId",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.timeLogId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.status"
            },
            {
              "name": "workTaskId",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.workTaskId"
            },
            {
              "name": "fieldWorkerId",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.fieldWorkerId"
            },
            {
              "name": "workDate",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.workDate"
            },
            {
              "name": "hoursWorked",
              "type": "number",
              "required": true,
              "fieldRef": "TimeLog.hoursWorked"
            },
            {
              "name": "hourlyLaborCost",
              "type": "number",
              "required": true,
              "fieldRef": "TimeLog.hourlyLaborCost"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default deleteTimeLogUsecase;

export const pipeline = [
  {
    "id": "deleteTimeLog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteTimeLog.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteTimeLog.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
