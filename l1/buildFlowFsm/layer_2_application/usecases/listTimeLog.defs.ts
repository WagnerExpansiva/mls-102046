/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listTimeLog.defs.ts" enhancement="_blank"/>

export const listTimeLogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listTimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listTimeLog",
    "ports": [
      "TimeLog"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listTimeLog",
        "inputTypeName": "ListTimeLogInput",
        "outputTypeName": "ListTimeLogOutput",
        "input": [],
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
          "Consultar todos los registros TimeLog mediante el puerto TimeLog.",
          "Proyectar cada registro con los campos definidos por outputShape.",
          "Retornar la colección resultante sin paginación."
        ],
        "outputShape": {
          "kind": "list",
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

export default listTimeLogUsecase;

export const pipeline = [
  {
    "id": "listTimeLog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listTimeLog.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listTimeLog.defs.ts",
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
