/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordWorkTime.defs.ts" enhancement="_blank"/>

export const recordWorkTimeController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "recordWorkTime",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "recordWorkTime",
    "controllerName": "RecordWorkTimeController",
    "ownerKind": "workspace",
    "workspaceId": "recordWorkTime",
    "actors": [
      "fieldWorker"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "recordWorkTimeQryLocateFieldWorkerHandler",
        "command": "qryLocateFieldWorker",
        "bffId": "qryLocateFieldWorker",
        "route": "buildFlowFsm.recordWorkTime.qryLocateFieldWorker",
        "kind": "query",
        "usecaseRef": "locateFieldWorker",
        "usecaseRefs": [
          "locateFieldWorker"
        ],
        "inputTypeName": "LocateFieldWorkerInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "platformUserId",
              "operationId": "locateFieldWorker",
              "path": [
                "platformUserId"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "recordWorkTimeQryLocateWorkTaskHandler",
        "command": "qryLocateWorkTask",
        "bffId": "qryLocateWorkTask",
        "route": "buildFlowFsm.recordWorkTime.qryLocateWorkTask",
        "kind": "query",
        "usecaseRef": "locateWorkTask",
        "usecaseRefs": [
          "locateWorkTask"
        ],
        "inputTypeName": "LocateWorkTaskInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "workTaskId",
              "operationId": "locateWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "locateWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "locateWorkTask",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "locateWorkTask",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "dueDate",
              "operationId": "locateWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "locateWorkTask",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "progressUpdate",
              "operationId": "locateWorkTask",
              "path": [
                "progressUpdate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "recordWorkTimeCmdCreateTimeLogHandler",
        "command": "cmdCreateTimeLog",
        "bffId": "cmdCreateTimeLog",
        "route": "buildFlowFsm.recordWorkTime.cmdCreateTimeLog",
        "kind": "command",
        "usecaseRef": "createTimeLog",
        "usecaseRefs": [
          "createTimeLog"
        ],
        "inputTypeName": "CreateTimeLogInput",
        "inputContract": [
          {
            "inputId": "workTaskWorkTaskId",
            "fieldRef": "WorkTask.workTaskId",
            "required": true,
            "source": "selectedEntity",
            "description": "Tarefa de trabalho"
          },
          {
            "inputId": "workDate",
            "fieldRef": "TimeLog.workDate",
            "required": true,
            "source": "userInput",
            "description": "Data diária em que as horas foram efetivamente realizadas."
          },
          {
            "inputId": "hoursWorked",
            "fieldRef": "TimeLog.hoursWorked",
            "required": true,
            "source": "userInput",
            "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa."
          },
          {
            "inputId": "hourlyLaborCost",
            "fieldRef": "TimeLog.hourlyLaborCost",
            "required": true,
            "source": "userInput",
            "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "timeLogId",
              "operationId": "createTimeLog",
              "path": [
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createTimeLog",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "createTimeLog",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldWorkerId",
              "operationId": "createTimeLog",
              "path": [
                "fieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "workDate",
              "operationId": "createTimeLog",
              "path": [
                "workDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "createTimeLog",
              "path": [
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "hourlyLaborCost",
              "operationId": "createTimeLog",
              "path": [
                "hourlyLaborCost"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "recordWorkTimeCmdHandoffTimeLogToFieldCoordinatorHandler",
        "command": "cmdHandoffTimeLogToFieldCoordinator",
        "bffId": "cmdHandoffTimeLogToFieldCoordinator",
        "route": "buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator",
        "kind": "command",
        "usecaseRef": "handoffTimeLogToFieldCoordinator",
        "usecaseRefs": [
          "handoffTimeLogToFieldCoordinator"
        ],
        "inputTypeName": "HandoffTimeLogToFieldCoordinatorInput",
        "inputContract": [
          {
            "inputId": "timeLogTimeLogId",
            "fieldRef": "TimeLog.timeLogId",
            "required": true,
            "source": "selectedEntity",
            "description": "Registro de horas"
          },
          {
            "inputId": "workDate",
            "fieldRef": "TimeLog.workDate",
            "required": true,
            "source": "userInput",
            "description": "Data diária em que as horas foram efetivamente realizadas."
          },
          {
            "inputId": "hoursWorked",
            "fieldRef": "TimeLog.hoursWorked",
            "required": true,
            "source": "userInput",
            "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa."
          },
          {
            "inputId": "hourlyLaborCost",
            "fieldRef": "TimeLog.hourlyLaborCost",
            "required": true,
            "source": "userInput",
            "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "timeLogId",
              "operationId": "handoffTimeLogToFieldCoordinator",
              "path": [
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffTimeLogToFieldCoordinator",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "handoffTimeLogToFieldCoordinator",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldWorkerId",
              "operationId": "handoffTimeLogToFieldCoordinator",
              "path": [
                "fieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "workDate",
              "operationId": "handoffTimeLogToFieldCoordinator",
              "path": [
                "workDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "handoffTimeLogToFieldCoordinator",
              "path": [
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "hourlyLaborCost",
              "operationId": "handoffTimeLogToFieldCoordinator",
              "path": [
                "hourlyLaborCost"
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
        "key": "buildFlowFsm.recordWorkTime.qryLocateFieldWorker",
        "handlerName": "recordWorkTimeQryLocateFieldWorkerHandler"
      },
      {
        "key": "buildFlowFsm.recordWorkTime.qryLocateWorkTask",
        "handlerName": "recordWorkTimeQryLocateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.recordWorkTime.cmdCreateTimeLog",
        "handlerName": "recordWorkTimeCmdCreateTimeLogHandler"
      },
      {
        "key": "buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator",
        "handlerName": "recordWorkTimeCmdHandoffTimeLogToFieldCoordinatorHandler"
      }
    ]
  }
} as const;

export default recordWorkTimeController;

export const pipeline = [
  {
    "id": "recordWorkTime__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordWorkTime.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordWorkTime.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordWorkTime.qryLocateFieldWorker.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordWorkTime.qryLocateWorkTask.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordWorkTime.cmdCreateTimeLog.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffTimeLogToFieldCoordinator.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.defs.ts"
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
