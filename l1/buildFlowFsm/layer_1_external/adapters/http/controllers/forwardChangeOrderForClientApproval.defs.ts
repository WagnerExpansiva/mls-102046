/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/forwardChangeOrderForClientApproval.defs.ts" enhancement="_blank"/>

export const forwardChangeOrderForClientApprovalController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "forwardChangeOrderForClientApproval",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "forwardChangeOrderForClientApproval",
    "controllerName": "ForwardChangeOrderForClientApprovalController",
    "ownerKind": "workspace",
    "workspaceId": "forwardChangeOrderForClientApproval",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "forwardChangeOrderForClientApprovalQryLocateChangeOrderHandler",
        "command": "qryLocateChangeOrder",
        "bffId": "qryLocateChangeOrder",
        "route": "buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder",
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
        "handlerName": "forwardChangeOrderForClientApprovalCmdHandoffChangeOrderToClientHandler",
        "command": "cmdHandoffChangeOrderToClient",
        "bffId": "cmdHandoffChangeOrderToClient",
        "route": "buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient",
        "kind": "command",
        "usecaseRef": "handoffChangeOrderToClient",
        "usecaseRefs": [
          "handoffChangeOrderToClient"
        ],
        "inputTypeName": "HandoffChangeOrderToClientInput",
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
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "handoffChangeOrderToClient",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffChangeOrderToClient",
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
        "key": "buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder",
        "handlerName": "forwardChangeOrderForClientApprovalQryLocateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient",
        "handlerName": "forwardChangeOrderForClientApprovalCmdHandoffChangeOrderToClientHandler"
      }
    ]
  }
} as const;

export default forwardChangeOrderForClientApprovalController;

export const pipeline = [
  {
    "id": "forwardChangeOrderForClientApproval__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/forwardChangeOrderForClientApproval.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/forwardChangeOrderForClientApproval.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/forwardChangeOrderForClientApproval.qryLocateChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.defs.ts"
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
