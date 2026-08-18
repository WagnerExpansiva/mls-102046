/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/timeLogCatalogue.defs.ts" enhancement="_blank"/>

export const timeLogCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "timeLogCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "timeLogCatalogue",
    "controllerName": "TimeLogCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "timeLogCatalogue",
    "actors": [
      "fieldCoordinator",
      "fieldWorker"
    ],
    "allowedScopes": [
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "timeLogCatalogueQryListTimeLogHandler",
        "command": "qryListTimeLog",
        "bffId": "qryListTimeLog",
        "route": "buildFlowFsm.timeLogCatalogue.qryListTimeLog",
        "kind": "query",
        "usecaseRef": "listTimeLog",
        "usecaseRefs": [
          "listTimeLog"
        ],
        "inputTypeName": "ListTimeLogInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "timeLogId",
              "operationId": "listTimeLog",
              "path": [
                "timeLogId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listTimeLog",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "workTaskId",
              "operationId": "listTimeLog",
              "path": [
                "workTaskId"
              ],
              "fromItems": true
            },
            {
              "name": "fieldWorkerId",
              "operationId": "listTimeLog",
              "path": [
                "fieldWorkerId"
              ],
              "fromItems": true
            },
            {
              "name": "workDate",
              "operationId": "listTimeLog",
              "path": [
                "workDate"
              ],
              "fromItems": true
            },
            {
              "name": "hoursWorked",
              "operationId": "listTimeLog",
              "path": [
                "hoursWorked"
              ],
              "fromItems": true
            },
            {
              "name": "hourlyLaborCost",
              "operationId": "listTimeLog",
              "path": [
                "hourlyLaborCost"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "timeLogCatalogueCmdCreateTimeLogHandler",
        "command": "cmdCreateTimeLog",
        "bffId": "cmdCreateTimeLog",
        "route": "buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog",
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
        "handlerName": "timeLogCatalogueCmdUpdateTimeLogHandler",
        "command": "cmdUpdateTimeLog",
        "bffId": "cmdUpdateTimeLog",
        "route": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
        "kind": "command",
        "usecaseRef": "updateTimeLog",
        "usecaseRefs": [
          "updateTimeLog"
        ],
        "inputTypeName": "UpdateTimeLogInput",
        "inputContract": [
          {
            "inputId": "timeLogId",
            "fieldRef": "TimeLog.timeLogId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do apontamento de horas, transportado entre as etapas conectadas."
          },
          {
            "inputId": "status",
            "fieldRef": "TimeLog.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado do apontamento para determinar se suas horas participam do custo e dos indicadores de execução."
          },
          {
            "inputId": "workTaskId",
            "fieldRef": "TimeLog.workTaskId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência à tarefa selecionada à qual as horas executadas são atribuídas."
          },
          {
            "inputId": "fieldWorkerId",
            "fieldRef": "TimeLog.fieldWorkerId",
            "required": true,
            "source": "actorSession",
            "description": "Referência ao trabalhador selecionado que realizou as horas registradas."
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
              "operationId": "updateTimeLog",
              "path": [
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateTimeLog",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "updateTimeLog",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldWorkerId",
              "operationId": "updateTimeLog",
              "path": [
                "fieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "workDate",
              "operationId": "updateTimeLog",
              "path": [
                "workDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "updateTimeLog",
              "path": [
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "hourlyLaborCost",
              "operationId": "updateTimeLog",
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
        "handlerName": "timeLogCatalogueCmdDeleteTimeLogHandler",
        "command": "cmdDeleteTimeLog",
        "bffId": "cmdDeleteTimeLog",
        "route": "buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog",
        "kind": "command",
        "usecaseRef": "deleteTimeLog",
        "usecaseRefs": [
          "deleteTimeLog"
        ],
        "inputTypeName": "DeleteTimeLogInput",
        "inputContract": [
          {
            "inputId": "timeLogId",
            "fieldRef": "TimeLog.timeLogId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do apontamento de horas, transportado entre as etapas conectadas."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "timeLogId",
              "operationId": "deleteTimeLog",
              "path": [
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteTimeLog",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "deleteTimeLog",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldWorkerId",
              "operationId": "deleteTimeLog",
              "path": [
                "fieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "workDate",
              "operationId": "deleteTimeLog",
              "path": [
                "workDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "deleteTimeLog",
              "path": [
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "hourlyLaborCost",
              "operationId": "deleteTimeLog",
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
        "handlerName": "timeLogCatalogueQryWorkTaskPickerHandler",
        "command": "qryWorkTaskPicker",
        "bffId": "qryWorkTaskPicker",
        "route": "buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker",
        "kind": "query",
        "usecaseRef": "listWorkTask",
        "usecaseRefs": [
          "listWorkTask"
        ],
        "inputTypeName": "ListWorkTaskInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "workTaskId",
              "operationId": "listWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "listWorkTask",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "listWorkTask",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "dueDate",
              "operationId": "listWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listWorkTask",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "progressUpdate",
              "operationId": "listWorkTask",
              "path": [
                "progressUpdate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.timeLogCatalogue.qryListTimeLog",
        "handlerName": "timeLogCatalogueQryListTimeLogHandler"
      },
      {
        "key": "buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog",
        "handlerName": "timeLogCatalogueCmdCreateTimeLogHandler"
      },
      {
        "key": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
        "handlerName": "timeLogCatalogueCmdUpdateTimeLogHandler"
      },
      {
        "key": "buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog",
        "handlerName": "timeLogCatalogueCmdDeleteTimeLogHandler"
      },
      {
        "key": "buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker",
        "handlerName": "timeLogCatalogueQryWorkTaskPickerHandler"
      }
    ]
  }
} as const;

export default timeLogCatalogueController;

export const pipeline = [
  {
    "id": "timeLogCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/timeLogCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/timeLogCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listTimeLog.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/timeLogCatalogue.qryListTimeLog.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/timeLogCatalogue.cmdCreateTimeLog.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateTimeLog.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/timeLogCatalogue.cmdUpdateTimeLog.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteTimeLog.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/timeLogCatalogue.cmdDeleteTimeLog.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/timeLogCatalogue.qryWorkTaskPicker.defs.ts"
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
