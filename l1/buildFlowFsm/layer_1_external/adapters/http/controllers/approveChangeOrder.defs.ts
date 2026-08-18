/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/approveChangeOrder.defs.ts" enhancement="_blank"/>

export const approveChangeOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "approveChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "approveChangeOrder",
    "controllerName": "ApproveChangeOrderController",
    "ownerKind": "workspace",
    "workspaceId": "approveChangeOrder",
    "actors": [
      "client"
    ],
    "allowedScopes": [
      "external"
    ],
    "handlers": [
      {
        "handlerName": "approveChangeOrderQryLocateChangeOrderHandler",
        "command": "qryLocateChangeOrder",
        "bffId": "qryLocateChangeOrder",
        "route": "buildFlowFsm.approveChangeOrder.qryLocateChangeOrder",
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
        "handlerName": "approveChangeOrderCmdApproveChangeOrderDecisionHandler",
        "command": "cmdApproveChangeOrderDecision",
        "bffId": "cmdApproveChangeOrderDecision",
        "route": "buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision",
        "kind": "command",
        "usecaseRef": "approveChangeOrderDecision",
        "usecaseRefs": [
          "approveChangeOrderDecision"
        ],
        "inputTypeName": "ApproveChangeOrderDecisionInput",
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
              "operationId": "approveChangeOrderDecision",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "approveChangeOrderDecision",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "approveChangeOrderDecision",
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
        "handlerName": "approveChangeOrderCmdHandoffApprovedChangeOrderToBillingHandler",
        "command": "cmdHandoffApprovedChangeOrderToBilling",
        "bffId": "cmdHandoffApprovedChangeOrderToBilling",
        "route": "buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling",
        "kind": "command",
        "usecaseRef": "handoffApprovedChangeOrderToBilling",
        "usecaseRefs": [
          "handoffApprovedChangeOrderToBilling"
        ],
        "inputTypeName": "HandoffApprovedChangeOrderToBillingInput",
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
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "handoffApprovedChangeOrderToBilling",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffApprovedChangeOrderToBilling",
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
        "handlerName": "approveChangeOrderQryClientPickerHandler",
        "command": "qryClientPicker",
        "bffId": "qryClientPicker",
        "route": "buildFlowFsm.approveChangeOrder.qryClientPicker",
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
        "key": "buildFlowFsm.approveChangeOrder.qryLocateChangeOrder",
        "handlerName": "approveChangeOrderQryLocateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision",
        "handlerName": "approveChangeOrderCmdApproveChangeOrderDecisionHandler"
      },
      {
        "key": "buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling",
        "handlerName": "approveChangeOrderCmdHandoffApprovedChangeOrderToBillingHandler"
      },
      {
        "key": "buildFlowFsm.approveChangeOrder.qryClientPicker",
        "handlerName": "approveChangeOrderQryClientPickerHandler"
      }
    ]
  }
} as const;

export default approveChangeOrderController;

export const pipeline = [
  {
    "id": "approveChangeOrder__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/approveChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/approveChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/approveChangeOrder.qryLocateChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/approveChangeOrderDecision.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/approveChangeOrder.cmdApproveChangeOrderDecision.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffApprovedChangeOrderToBilling.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/approveChangeOrder.qryClientPicker.defs.ts"
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
