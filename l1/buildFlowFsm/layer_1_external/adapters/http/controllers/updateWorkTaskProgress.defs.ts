/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/updateWorkTaskProgress.defs.ts" enhancement="_blank"/>

export const updateWorkTaskProgressController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateWorkTaskProgress",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateWorkTaskProgress",
    "controllerName": "UpdateWorkTaskProgressController",
    "ownerKind": "workspace",
    "workspaceId": "updateWorkTaskProgress",
    "actors": [
      "fieldWorker"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "updateWorkTaskProgressQryLocateWorkTaskHandler",
        "command": "qryLocateWorkTask",
        "bffId": "qryLocateWorkTask",
        "route": "buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask",
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
        "handlerName": "updateWorkTaskProgressCmdUpdateWorkTaskHandler",
        "command": "cmdUpdateWorkTask",
        "bffId": "cmdUpdateWorkTask",
        "route": "buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask",
        "kind": "command",
        "usecaseRef": "updateWorkTask",
        "usecaseRefs": [
          "updateWorkTask"
        ],
        "inputTypeName": "UpdateWorkTaskInput",
        "inputContract": [
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
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
              "operationId": "updateWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "updateWorkTask",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "updateWorkTask",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "updateWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateWorkTask",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "progressUpdate",
              "operationId": "updateWorkTask",
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
        "handlerName": "updateWorkTaskProgressCmdHandoffWorkTaskProgressToFieldCoordinatorHandler",
        "command": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "bffId": "cmdHandoffWorkTaskProgressToFieldCoordinator",
        "route": "buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator",
        "kind": "command",
        "usecaseRef": "handoffWorkTaskProgressToFieldCoordinator",
        "usecaseRefs": [
          "handoffWorkTaskProgressToFieldCoordinator"
        ],
        "inputTypeName": "HandoffWorkTaskProgressToFieldCoordinatorInput",
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
              "operationId": "handoffWorkTaskProgressToFieldCoordinator",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "handoffWorkTaskProgressToFieldCoordinator",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "handoffWorkTaskProgressToFieldCoordinator",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "handoffWorkTaskProgressToFieldCoordinator",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "handoffWorkTaskProgressToFieldCoordinator",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffWorkTaskProgressToFieldCoordinator",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "progressUpdate",
              "operationId": "handoffWorkTaskProgressToFieldCoordinator",
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
        "key": "buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask",
        "handlerName": "updateWorkTaskProgressQryLocateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask",
        "handlerName": "updateWorkTaskProgressCmdUpdateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator",
        "handlerName": "updateWorkTaskProgressCmdHandoffWorkTaskProgressToFieldCoordinatorHandler"
      }
    ]
  }
} as const;

export default updateWorkTaskProgressController;

export const pipeline = [
  {
    "id": "updateWorkTaskProgress__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/updateWorkTaskProgress.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/updateWorkTaskProgress.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/updateWorkTaskProgress.qryLocateWorkTask.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/updateWorkTaskProgress.cmdUpdateWorkTask.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskProgressToFieldCoordinator.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.defs.ts"
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
