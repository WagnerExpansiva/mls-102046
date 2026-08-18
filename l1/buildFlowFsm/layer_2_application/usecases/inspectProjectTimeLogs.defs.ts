/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeLogs.defs.ts" enhancement="_blank"/>

export const inspectProjectTimeLogsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectProjectTimeLogs",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectProjectTimeLogs",
    "ports": [
      "TimeLog"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "inspectProjectTimeLogs",
        "inputTypeName": "InspectProjectTimeLogsInput",
        "outputTypeName": "InspectProjectTimeLogsOutput",
        "input": [
          {
            "name": "timeLogId",
            "type": "string",
            "required": true,
            "description": "Registro de horas",
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
        "transactional": false,
        "steps": [
          "Receive the selected TimeLog identifier.",
          "Load the TimeLog aggregate through the TimeLog port using timeLogId.",
          "Return the declared TimeLog output fields without adding projections or derived values."
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

export default inspectProjectTimeLogsUsecase;

export const pipeline = [
  {
    "id": "inspectProjectTimeLogs__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeLogs.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeLogs.defs.ts",
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
