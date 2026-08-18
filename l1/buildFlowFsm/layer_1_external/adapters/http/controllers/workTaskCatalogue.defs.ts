/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/workTaskCatalogue.defs.ts" enhancement="_blank"/>

export const workTaskCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "workTaskCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "workTaskCatalogue",
    "controllerName": "WorkTaskCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "workTaskCatalogue",
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
        "handlerName": "workTaskCatalogueQryListWorkTaskHandler",
        "command": "qryListWorkTask",
        "bffId": "qryListWorkTask",
        "route": "buildFlowFsm.workTaskCatalogue.qryListWorkTask",
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
      },
      {
        "handlerName": "workTaskCatalogueCmdCreateWorkTaskHandler",
        "command": "cmdCreateWorkTask",
        "bffId": "cmdCreateWorkTask",
        "route": "buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask",
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
        "handlerName": "workTaskCatalogueCmdUpdateWorkTaskHandler",
        "command": "cmdUpdateWorkTask",
        "bffId": "cmdUpdateWorkTask",
        "route": "buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask",
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
        "handlerName": "workTaskCatalogueCmdDeleteWorkTaskHandler",
        "command": "cmdDeleteWorkTask",
        "bffId": "cmdDeleteWorkTask",
        "route": "buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask",
        "kind": "command",
        "usecaseRef": "deleteWorkTask",
        "usecaseRefs": [
          "deleteWorkTask"
        ],
        "inputTypeName": "DeleteWorkTaskInput",
        "inputContract": [
          {
            "inputId": "workTaskId",
            "fieldRef": "WorkTask.workTaskId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da tarefa, mantido entre as etapas conectadas."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "workTaskId",
              "operationId": "deleteWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "deleteWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "deleteWorkTask",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "deleteWorkTask",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "deleteWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteWorkTask",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "progressUpdate",
              "operationId": "deleteWorkTask",
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
        "key": "buildFlowFsm.workTaskCatalogue.qryListWorkTask",
        "handlerName": "workTaskCatalogueQryListWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask",
        "handlerName": "workTaskCatalogueCmdCreateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask",
        "handlerName": "workTaskCatalogueCmdUpdateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask",
        "handlerName": "workTaskCatalogueCmdDeleteWorkTaskHandler"
      }
    ]
  }
} as const;

export default workTaskCatalogueController;

export const pipeline = [
  {
    "id": "workTaskCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/workTaskCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/workTaskCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/workTaskCatalogue.qryListWorkTask.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/workTaskCatalogue.cmdCreateWorkTask.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/workTaskCatalogue.cmdUpdateWorkTask.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/workTaskCatalogue.cmdDeleteWorkTask.defs.ts"
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
