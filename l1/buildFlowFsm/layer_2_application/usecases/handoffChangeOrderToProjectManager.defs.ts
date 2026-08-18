/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToProjectManager.defs.ts" enhancement="_blank"/>

export const handoffChangeOrderToProjectManagerUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffChangeOrderToProjectManager",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffChangeOrderToProjectManager",
    "ports": [
      "ChangeOrder"
    ],
    "rulesApplied": [
      "managerActionableChangeOrder"
    ],
    "functions": [
      {
        "functionName": "handoffChangeOrderToProjectManager",
        "inputTypeName": "HandoffChangeOrderToProjectManagerInput",
        "outputTypeName": "HandoffChangeOrderToProjectManagerOutput",
        "input": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "description": "Ordem de mudança",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.changeOrderId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.description",
            "item": {
              "fields": []
            }
          },
          {
            "name": "scopeImpact",
            "type": "string",
            "required": true,
            "description": "Impacto proposto da alteração no escopo da obra.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.scopeImpact",
            "item": {
              "fields": []
            }
          },
          {
            "name": "scheduleImpact",
            "type": "string",
            "required": true,
            "description": "Impacto proposto da alteração no prazo de execução da obra.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.scheduleImpact",
            "item": {
              "fields": []
            }
          },
          {
            "name": "changeAmount",
            "type": "number",
            "required": true,
            "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.changeAmount",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "clientRef",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "projectRef",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "scopeImpact",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "scheduleImpact",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "changeAmount",
            "type": "number",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "submittedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "forwardedForClientApprovalAt",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          }
        ],
        "ports": [
          "ChangeOrder"
        ],
        "rulesApplied": [
          "managerActionableChangeOrder"
        ],
        "transactional": true,
        "steps": [
          "Load the ChangeOrder by changeOrderId through the ChangeOrder port.",
          "Apply managerActionableChangeOrder inline: reject the operation with the rule id in the validation error details unless the order is in the actionable submitted state and the required description, scopeImpact, scheduleImpact, and changeAmount values are valid.",
          "Apply the submitted user values to the ChangeOrder.",
          "Set forwardedForClientApprovalAt from ctx.clock and transition status to pendingClientApproval.",
          "Save the mutated ChangeOrder through the ChangeOrder port in the transaction.",
          "Return the persisted ChangeOrder projection with the declared output shape."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "changeOrderId",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.changeOrderId"
            },
            {
              "name": "clientRef",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.clientRef"
            },
            {
              "name": "projectRef",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.projectRef"
            },
            {
              "name": "description",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.description"
            },
            {
              "name": "scopeImpact",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.scopeImpact"
            },
            {
              "name": "scheduleImpact",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.scheduleImpact"
            },
            {
              "name": "changeAmount",
              "type": "number",
              "required": true,
              "fieldRef": "ChangeOrder.changeAmount"
            },
            {
              "name": "submittedAt",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.submittedAt"
            },
            {
              "name": "forwardedForClientApprovalAt",
              "type": "string",
              "required": false,
              "fieldRef": "ChangeOrder.forwardedForClientApprovalAt"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default handoffChangeOrderToProjectManagerUsecase;

export const pipeline = [
  {
    "id": "handoffChangeOrderToProjectManager__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToProjectManager.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToProjectManager.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "managerActionableChangeOrder"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
