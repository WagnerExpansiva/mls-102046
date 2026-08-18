/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.defs.ts" enhancement="_blank"/>

export const createTimeLogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createTimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createTimeLog",
    "ports": [
      "TimeLog",
      "FieldWorker",
      "WorkTask"
    ],
    "rulesApplied": [
      "activeWorkTask",
      "timeLogRequiresWorkerTaskAndPositiveHours"
    ],
    "functions": [
      {
        "functionName": "createTimeLog",
        "inputTypeName": "CreateTimeLogInput",
        "outputTypeName": "CreateTimeLogOutput",
        "input": [
          {
            "name": "workTaskWorkTaskId",
            "type": "string",
            "required": true,
            "description": "Tarefa de trabalho",
            "fieldRef": "WorkTask.workTaskId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "workDate",
            "type": "string",
            "required": true,
            "description": "Data diária em que as horas foram efetivamente realizadas.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.workDate",
            "item": {
              "fields": []
            }
          },
          {
            "name": "hoursWorked",
            "type": "number",
            "required": true,
            "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.hoursWorked",
            "item": {
              "fields": []
            }
          },
          {
            "name": "hourlyLaborCost",
            "type": "number",
            "required": true,
            "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.hourlyLaborCost",
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
          "TimeLog",
          "FieldWorker",
          "WorkTask"
        ],
        "rulesApplied": [
          "activeWorkTask",
          "timeLogRequiresWorkerTaskAndPositiveHours"
        ],
        "transactional": true,
        "steps": [
          "Load the selected WorkTask through the WorkTask port.",
          "Apply activeWorkTask: reject when the task does not exist or is not in the active inProgress state, including the rule id in validation error details.",
          "Resolve the assignedFieldWorkerId from the WorkTask, load that FieldWorker through the FieldWorker port, and reject when the worker is missing.",
          "Apply timeLogRequiresWorkerTaskAndPositiveHours: require a valid work task with an assigned worker and hoursWorked greater than zero; include the rule id in validation error details when blocked.",
          "Generate the TimeLog id with ctx.idGenerator, set status to recorded, copy workTaskId and assignedFieldWorkerId, and persist the TimeLog through the TimeLog port inside the transaction.",
          "Return the persisted TimeLog projection with the declared output fields."
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

export default createTimeLogUsecase;

export const pipeline = [
  {
    "id": "createTimeLog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "activeWorkTask",
      "timeLogRequiresWorkerTaskAndPositiveHours"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
