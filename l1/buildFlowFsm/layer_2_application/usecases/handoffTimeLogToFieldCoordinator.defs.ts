/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffTimeLogToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const handoffTimeLogToFieldCoordinatorUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffTimeLogToFieldCoordinator",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffTimeLogToFieldCoordinator",
    "ports": [
      "TimeLog"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "handoffTimeLogToFieldCoordinator",
        "inputTypeName": "HandoffTimeLogToFieldCoordinatorInput",
        "outputTypeName": "HandoffTimeLogToFieldCoordinatorOutput",
        "input": [
          {
            "name": "timeLogTimeLogId",
            "type": "string",
            "required": true,
            "description": "Registro de horas selecionado para encaminhamento.",
            "fieldRef": "TimeLog.timeLogId",
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
          "TimeLog"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load the TimeLog aggregate through the TimeLog port using the selected timeLogId.",
          "Validate that the selected aggregate exists and that the submitted workDate, hoursWorked, and hourlyLaborCost are valid values for the corresponding TimeLog fields.",
          "Update the TimeLog workDate, hoursWorked, and hourlyLaborCost fields without inventing a status transition because the contract declares no handoff status field or rule.",
          "Save the TimeLog aggregate through the TimeLog port in the transaction.",
          "Return the declared TimeLog output projection."
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

export default handoffTimeLogToFieldCoordinatorUsecase;

export const pipeline = [
  {
    "id": "handoffTimeLogToFieldCoordinator__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffTimeLogToFieldCoordinator.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffTimeLogToFieldCoordinator.defs.ts",
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
