/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/declineChangeOrder.defs.ts" enhancement="_blank"/>

export const declineChangeOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "declineChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "declineChangeOrder",
    "controllerName": "DeclineChangeOrderController",
    "ownerKind": "workspace",
    "workspaceId": "declineChangeOrder",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "declineChangeOrderQryLocateChangeOrderHandler",
        "command": "qryLocateChangeOrder",
        "bffId": "qryLocateChangeOrder",
        "route": "buildFlowFsm.declineChangeOrder.qryLocateChangeOrder",
        "kind": "query",
        "usecaseRef": "locateChangeOrder",
        "usecaseRefs": [
          "locateChangeOrder"
        ],
        "inputTypeName": "LocateChangeOrderInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "changeOrderId",
              "operationId": "locateChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": true
            },
            {
              "name": "clientRef",
              "operationId": "locateChangeOrder",
              "path": [
                "clientRef"
              ],
              "fromItems": true
            },
            {
              "name": "projectRef",
              "operationId": "locateChangeOrder",
              "path": [
                "projectRef"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "locateChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "scopeImpact",
              "operationId": "locateChangeOrder",
              "path": [
                "scopeImpact"
              ],
              "fromItems": true
            },
            {
              "name": "scheduleImpact",
              "operationId": "locateChangeOrder",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": true
            },
            {
              "name": "changeAmount",
              "operationId": "locateChangeOrder",
              "path": [
                "changeAmount"
              ],
              "fromItems": true
            },
            {
              "name": "submittedAt",
              "operationId": "locateChangeOrder",
              "path": [
                "submittedAt"
              ],
              "fromItems": true
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "locateChangeOrder",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "locateChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "declineChangeOrderCmdDeclineChangeOrderDecisionHandler",
        "command": "cmdDeclineChangeOrderDecision",
        "bffId": "cmdDeclineChangeOrderDecision",
        "route": "buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision",
        "kind": "command",
        "usecaseRef": "declineChangeOrderDecision",
        "usecaseRefs": [
          "declineChangeOrderDecision"
        ],
        "inputTypeName": "DeclineChangeOrderDecisionInput",
        "inputContract": [
          {
            "inputId": "changeOrderChangeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Ordem de mudança"
          },
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
            "inputId": "status",
            "fieldRef": "ChangeOrder.status",
            "required": true,
            "source": "userInput",
            "description": "Decisão tomada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "declineChangeOrderDecision",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "declineChangeOrderDecision",
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
        "handlerName": "declineChangeOrderCmdHandoffDeclinedChangeOrderToFieldCoordinatorHandler",
        "command": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "bffId": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "route": "buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "kind": "command",
        "usecaseRef": "handoffDeclinedChangeOrderToFieldCoordinator",
        "usecaseRefs": [
          "handoffDeclinedChangeOrderToFieldCoordinator"
        ],
        "inputTypeName": "HandoffDeclinedChangeOrderToFieldCoordinatorInput",
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
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
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
        "handlerName": "declineChangeOrderQryClientPickerHandler",
        "command": "qryClientPicker",
        "bffId": "qryClientPicker",
        "route": "buildFlowFsm.declineChangeOrder.qryClientPicker",
        "kind": "query",
        "usecaseRef": "listClient",
        "usecaseRefs": [
          "listClient"
        ],
        "inputTypeName": "ListClientInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "clientId",
              "operationId": "listClient",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "clientName",
              "operationId": "listClient",
              "path": [
                "clientName"
              ],
              "fromItems": true
            },
            {
              "name": "contactEmail",
              "operationId": "listClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": true
            },
            {
              "name": "contactPhone",
              "operationId": "listClient",
              "path": [
                "contactPhone"
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
        "key": "buildFlowFsm.declineChangeOrder.qryLocateChangeOrder",
        "handlerName": "declineChangeOrderQryLocateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision",
        "handlerName": "declineChangeOrderCmdDeclineChangeOrderDecisionHandler"
      },
      {
        "key": "buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
        "handlerName": "declineChangeOrderCmdHandoffDeclinedChangeOrderToFieldCoordinatorHandler"
      },
      {
        "key": "buildFlowFsm.declineChangeOrder.qryClientPicker",
        "handlerName": "declineChangeOrderQryClientPickerHandler"
      }
    ]
  }
} as const;

export default declineChangeOrderController;

export const pipeline = [
  {
    "id": "declineChangeOrder__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/declineChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/declineChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/declineChangeOrder.qryLocateChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/declineChangeOrderDecision.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/declineChangeOrder.cmdDeclineChangeOrderDecision.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffDeclinedChangeOrderToFieldCoordinator.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/declineChangeOrder.qryClientPicker.defs.ts"
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
