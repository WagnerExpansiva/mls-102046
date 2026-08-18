/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffApprovedChangeOrderToBilling.defs.ts" enhancement="_blank"/>

export const handoffApprovedChangeOrderToBillingUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffApprovedChangeOrderToBilling",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffApprovedChangeOrderToBilling",
    "ports": [
      "ChangeOrder"
    ],
    "rulesApplied": [
      "approvedBillableChangeOrder"
    ],
    "functions": [
      {
        "functionName": "handoffApprovedChangeOrderToBilling",
        "inputTypeName": "HandoffApprovedChangeOrderToBillingInput",
        "outputTypeName": "HandoffApprovedChangeOrderToBillingOutput",
        "input": [
          {
            "name": "changeOrderChangeOrderId",
            "type": "string",
            "required": true,
            "description": "Ordem de mudança selecionada para encaminhamento ao faturamento e aprovação do cliente.",
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
          "approvedBillableChangeOrder"
        ],
        "transactional": true,
        "steps": [
          "Load the ChangeOrder aggregate through the ChangeOrder port using the selected changeOrderChangeOrderId.",
          "Validate inline rule approvedBillableChangeOrder: the change order must be approved and have a billable changeAmount greater than zero; if blocked, return a validation error whose details include approvedBillableChangeOrder.",
          "Apply the submitted user changes to description, scopeImpact, scheduleImpact, and changeAmount.",
          "Set forwardedForClientApprovalAt from ctx.clock and transition status to pendingClientApproval.",
          "Save the mutated ChangeOrder aggregate through the ChangeOrder port within the transaction wrapper.",
          "Return the complete canonical ChangeOrder output projection."
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

export default handoffApprovedChangeOrderToBillingUsecase;

export const pipeline = [
  {
    "id": "handoffApprovedChangeOrderToBilling__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffApprovedChangeOrderToBilling.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffApprovedChangeOrderToBilling.defs.ts",
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
      "approvedBillableChangeOrder"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
