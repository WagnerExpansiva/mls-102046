/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/assignWorkTask.defs.ts" enhancement="_blank"/>

export const assignWorkTaskController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "assignWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "assignWorkTask",
    "controllerName": "AssignWorkTaskController",
    "ownerKind": "workspace",
    "workspaceId": "assignWorkTask",
    "actors": [
      "fieldCoordinator"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "assignWorkTaskQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.assignWorkTask.qryLocateProject",
        "kind": "query",
        "usecaseRef": "locateProject",
        "usecaseRefs": [
          "locateProject"
        ],
        "inputTypeName": "LocateProjectInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "locateProject",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "locateProject",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "locateProject",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "address",
              "operationId": "locateProject",
              "path": [
                "address"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "locateProject",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "authorizedBudget",
              "operationId": "locateProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": true
            },
            {
              "name": "plannedStartDate",
              "operationId": "locateProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": true
            },
            {
              "name": "plannedEndDate",
              "operationId": "locateProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "assignWorkTaskQryInspectProjectTimelineHandler",
        "command": "qryInspectProjectTimeline",
        "bffId": "qryInspectProjectTimeline",
        "route": "buildFlowFsm.assignWorkTask.qryInspectProjectTimeline",
        "kind": "query",
        "usecaseRef": "inspectProjectTimeline",
        "usecaseRefs": [
          "inspectProjectTimeline"
        ],
        "inputTypeName": "InspectProjectTimelineInput",
        "inputContract": [
          {
            "inputId": "projectTimelineProjectId",
            "fieldRef": "ProjectTimeline.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Cronograma da obra"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectProjectTimeline",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "workTasks",
              "operationId": "inspectProjectTimeline",
              "path": [
                "workTasks"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleEntries",
              "operationId": "inspectProjectTimeline",
              "path": [
                "scheduleEntries"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "assignWorkTaskQryLocateFieldWorkerHandler",
        "command": "qryLocateFieldWorker",
        "bffId": "qryLocateFieldWorker",
        "route": "buildFlowFsm.assignWorkTask.qryLocateFieldWorker",
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
        "handlerName": "assignWorkTaskCmdCreateWorkTaskHandler",
        "command": "cmdCreateWorkTask",
        "bffId": "cmdCreateWorkTask",
        "route": "buildFlowFsm.assignWorkTask.cmdCreateWorkTask",
        "kind": "command",
        "usecaseRef": "createWorkTask",
        "usecaseRefs": [
          "createWorkTask"
        ],
        "inputTypeName": "CreateWorkTaskInput",
        "inputContract": [
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "description",
            "fieldRef": "WorkTask.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição do trabalho a ser executado em campo."
          },
          {
            "inputId": "dueDate",
            "fieldRef": "WorkTask.dueDate",
            "required": true,
            "source": "userInput",
            "description": "Data prevista para conclusão da tarefa no cronograma da obra."
          },
          {
            "inputId": "progressUpdate",
            "fieldRef": "WorkTask.progressUpdate",
            "required": false,
            "source": "userInput",
            "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "workTaskId",
              "operationId": "createWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "createWorkTask",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "createWorkTask",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "createWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createWorkTask",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "progressUpdate",
              "operationId": "createWorkTask",
              "path": [
                "progressUpdate"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "assignWorkTaskCmdHandoffWorkTaskToFieldWorkerHandler",
        "command": "cmdHandoffWorkTaskToFieldWorker",
        "bffId": "cmdHandoffWorkTaskToFieldWorker",
        "route": "buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker",
        "kind": "command",
        "usecaseRef": "handoffWorkTaskToFieldWorker",
        "usecaseRefs": [
          "handoffWorkTaskToFieldWorker"
        ],
        "inputTypeName": "HandoffWorkTaskToFieldWorkerInput",
        "inputContract": [
          {
            "inputId": "workTaskWorkTaskId",
            "fieldRef": "WorkTask.workTaskId",
            "required": true,
            "source": "selectedEntity",
            "description": "Tarefa de trabalho"
          },
          {
            "inputId": "description",
            "fieldRef": "WorkTask.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição do trabalho a ser executado em campo."
          },
          {
            "inputId": "dueDate",
            "fieldRef": "WorkTask.dueDate",
            "required": true,
            "source": "userInput",
            "description": "Data prevista para conclusão da tarefa no cronograma da obra."
          },
          {
            "inputId": "progressUpdate",
            "fieldRef": "WorkTask.progressUpdate",
            "required": false,
            "source": "userInput",
            "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "workTaskId",
              "operationId": "handoffWorkTaskToFieldWorker",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "handoffWorkTaskToFieldWorker",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "handoffWorkTaskToFieldWorker",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "handoffWorkTaskToFieldWorker",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "handoffWorkTaskToFieldWorker",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffWorkTaskToFieldWorker",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "progressUpdate",
              "operationId": "handoffWorkTaskToFieldWorker",
              "path": [
                "progressUpdate"
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
        "key": "buildFlowFsm.assignWorkTask.qryLocateProject",
        "handlerName": "assignWorkTaskQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.assignWorkTask.qryInspectProjectTimeline",
        "handlerName": "assignWorkTaskQryInspectProjectTimelineHandler"
      },
      {
        "key": "buildFlowFsm.assignWorkTask.qryLocateFieldWorker",
        "handlerName": "assignWorkTaskQryLocateFieldWorkerHandler"
      },
      {
        "key": "buildFlowFsm.assignWorkTask.cmdCreateWorkTask",
        "handlerName": "assignWorkTaskCmdCreateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker",
        "handlerName": "assignWorkTaskCmdHandoffWorkTaskToFieldWorkerHandler"
      }
    ]
  }
} as const;

export default assignWorkTaskController;

export const pipeline = [
  {
    "id": "assignWorkTask__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/assignWorkTask.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/assignWorkTask.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/assignWorkTask.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/assignWorkTask.qryInspectProjectTimeline.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/assignWorkTask.qryLocateFieldWorker.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/assignWorkTask.cmdCreateWorkTask.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskToFieldWorker.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/assignWorkTask.cmdHandoffWorkTaskToFieldWorker.defs.ts"
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
