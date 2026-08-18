/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateTimeLog.defs.ts" enhancement="_blank"/>

export const updateTimeLogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateTimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateTimeLog",
    "ports": [
      "TimeLog",
      "FieldWorker",
      "WorkTask"
    ],
    "rulesApplied": [
      "timeLogRequiresWorkerTaskAndPositiveHours",
      "costEligibleTimeLog"
    ],
    "functions": [
      {
        "functionName": "updateTimeLog",
        "inputTypeName": "UpdateTimeLogInput",
        "outputTypeName": "UpdateTimeLogOutput",
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
          },
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "description": "Referência à tarefa selecionada à qual as horas executadas são atribuídas.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.workTaskId",
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
            "description": "Identificador estável do apontamento atualizado.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.timeLogId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Estado atual do apontamento de horas.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.status",
            "item": {
              "fields": []
            }
          },
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "description": "Tarefa associada ao apontamento.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.workTaskId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "fieldWorkerId",
            "type": "string",
            "required": true,
            "description": "Trabalhador associado ao apontamento.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.fieldWorkerId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "workDate",
            "type": "string",
            "required": true,
            "description": "Data em que as horas foram realizadas.",
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
            "description": "Quantidade de horas apontadas.",
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
            "description": "Custo histórico por hora do apontamento.",
            "ofEntity": "TimeLog",
            "fieldRef": "TimeLog.hourlyLaborCost",
            "item": {
              "fields": []
            }
          }
        ],
        "ports": [
          "TimeLog",
          "FieldWorker",
          "WorkTask"
        ],
        "rulesApplied": [
          "timeLogRequiresWorkerTaskAndPositiveHours",
          "costEligibleTimeLog"
        ],
        "transactional": true,
        "steps": [
          "Within one transaction, load the TimeLog by timeLogId through the TimeLog port, resolve the actor-session platform user and load the corresponding FieldWorker through the FieldWorker port, and load the selected WorkTask through the WorkTask port.",
          "Apply timeLogRequiresWorkerTaskAndPositiveHours inline: require that the work task exists, the worker exists, the task is assigned to the resolved worker, the workTaskId and fieldWorkerId references are present, and hoursWorked is greater than zero; if blocked, include the rule id in validation error details.",
          "Apply costEligibleTimeLog inline: require the resulting recorded time log to have a non-negative hourlyLaborCost and preserve the allowed recorded/voided status semantics; if blocked, include the rule id in validation error details.",
          "Apply the resolved system-default status and update the TimeLog fields, including the worker resolved from actorSession, then save the TimeLog through its port.",
          "Return exactly timeLogId, status, workTaskId, fieldWorkerId, workDate, hoursWorked, and hourlyLaborCost from the persisted TimeLog."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateTimeLogUsecase;

export const pipeline = [
  {
    "id": "updateTimeLog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateTimeLog.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateTimeLog.defs.ts",
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
      "timeLogRequiresWorkerTaskAndPositiveHours",
      "costEligibleTimeLog"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
