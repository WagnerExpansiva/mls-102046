/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/approveChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const approveChangeOrderDecisionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "approveChangeOrderDecision",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "approveChangeOrderDecision",
    "ports": [
      "ChangeOrder",
      "ChangeOrderDecision"
    ],
    "rulesApplied": [
      "clientApprovableChangeOrder"
    ],
    "functions": [
      {
        "functionName": "approveChangeOrderDecision",
        "inputTypeName": "ApproveChangeOrderDecisionInput",
        "outputTypeName": "ApproveChangeOrderDecisionOutput",
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
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Cliente",
            "ofEntity": "Client",
            "fieldRef": "Client.clientId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Obra",
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Decisão tomada.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.status",
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
          "ChangeOrder",
          "ChangeOrderDecision"
        ],
        "rulesApplied": [
          "clientApprovableChangeOrder"
        ],
        "transactional": true,
        "steps": [
          "Load the ChangeOrder through the ChangeOrder port using changeOrderId and verify that the selected client and route project match the aggregate references.",
          "Apply clientApprovableChangeOrder inline: allow the decision only when the order is in pendingClientApproval status and the requested status is approved or declined; otherwise reject with the rule id in the validation error details.",
          "Mutate the ChangeOrder status to the requested decision and save the aggregate through the ChangeOrder port within the transaction wrapper.",
          "Return the persisted ChangeOrder projection with exactly the declared output fields."
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

export default approveChangeOrderDecisionUsecase;

export const pipeline = [
  {
    "id": "approveChangeOrderDecision__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/approveChangeOrderDecision.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/approveChangeOrderDecision.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "clientApprovableChangeOrder"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
