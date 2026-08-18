/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/submitChangeOrder.defs.ts" enhancement="_blank"/>

export const submitChangeOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "submitChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "submitChangeOrder",
    "controllerName": "SubmitChangeOrderController",
    "ownerKind": "workspace",
    "workspaceId": "submitChangeOrder",
    "actors": [
      "fieldCoordinator"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "submitChangeOrderQryLocateClientHandler",
        "command": "qryLocateClient",
        "bffId": "qryLocateClient",
        "route": "buildFlowFsm.submitChangeOrder.qryLocateClient",
        "kind": "query",
        "usecaseRef": "locateClient",
        "usecaseRefs": [
          "locateClient"
        ],
        "inputTypeName": "LocateClientInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "clientId",
              "operationId": "locateClient",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "clientName",
              "operationId": "locateClient",
              "path": [
                "clientName"
              ],
              "fromItems": true
            },
            {
              "name": "contactEmail",
              "operationId": "locateClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": true
            },
            {
              "name": "contactPhone",
              "operationId": "locateClient",
              "path": [
                "contactPhone"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "submitChangeOrderQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.submitChangeOrder.qryLocateProject",
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
        "handlerName": "submitChangeOrderCmdCreateChangeOrderHandler",
        "command": "cmdCreateChangeOrder",
        "bffId": "cmdCreateChangeOrder",
        "route": "buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder",
        "kind": "command",
        "usecaseRef": "createChangeOrder",
        "usecaseRefs": [
          "createChangeOrder"
        ],
        "inputTypeName": "CreateChangeOrderInput",
        "inputContract": [
          {
            "inputId": "clientClientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Cliente"
          },
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "description",
            "fieldRef": "ChangeOrder.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
          },
          {
            "inputId": "scopeImpact",
            "fieldRef": "ChangeOrder.scopeImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no escopo da obra."
          },
          {
            "inputId": "scheduleImpact",
            "fieldRef": "ChangeOrder.scheduleImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no prazo de execução da obra."
          },
          {
            "inputId": "changeAmount",
            "fieldRef": "ChangeOrder.changeAmount",
            "required": true,
            "source": "userInput",
            "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "createChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "createChangeOrder",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "createChangeOrder",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "createChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "createChangeOrder",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "createChangeOrder",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "createChangeOrder",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "createChangeOrder",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "createChangeOrder",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "submitChangeOrderCmdHandoffChangeOrderToProjectManagerHandler",
        "command": "cmdHandoffChangeOrderToProjectManager",
        "bffId": "cmdHandoffChangeOrderToProjectManager",
        "route": "buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager",
        "kind": "command",
        "usecaseRef": "handoffChangeOrderToProjectManager",
        "usecaseRefs": [
          "handoffChangeOrderToProjectManager"
        ],
        "inputTypeName": "HandoffChangeOrderToProjectManagerInput",
        "inputContract": [
          {
            "inputId": "changeOrderChangeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Ordem de mudança"
          },
          {
            "inputId": "description",
            "fieldRef": "ChangeOrder.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
          },
          {
            "inputId": "scopeImpact",
            "fieldRef": "ChangeOrder.scopeImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no escopo da obra."
          },
          {
            "inputId": "scheduleImpact",
            "fieldRef": "ChangeOrder.scheduleImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no prazo de execução da obra."
          },
          {
            "inputId": "changeAmount",
            "fieldRef": "ChangeOrder.changeAmount",
            "required": true,
            "source": "userInput",
            "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffChangeOrderToProjectManager",
              "path": [
                "status"
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
        "key": "buildFlowFsm.submitChangeOrder.qryLocateClient",
        "handlerName": "submitChangeOrderQryLocateClientHandler"
      },
      {
        "key": "buildFlowFsm.submitChangeOrder.qryLocateProject",
        "handlerName": "submitChangeOrderQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder",
        "handlerName": "submitChangeOrderCmdCreateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager",
        "handlerName": "submitChangeOrderCmdHandoffChangeOrderToProjectManagerHandler"
      }
    ]
  }
} as const;

export default submitChangeOrderController;

export const pipeline = [
  {
    "id": "submitChangeOrder__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/submitChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/submitChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/submitChangeOrder.qryLocateClient.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/submitChangeOrder.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/submitChangeOrder.cmdCreateChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToProjectManager.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/submitChangeOrder.cmdHandoffChangeOrderToProjectManager.defs.ts"
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
