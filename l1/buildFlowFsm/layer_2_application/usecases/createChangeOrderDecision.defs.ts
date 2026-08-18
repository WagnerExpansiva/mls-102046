/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const createChangeOrderDecisionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createChangeOrderDecision",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createChangeOrderDecision",
    "ports": [
      "ChangeOrderDecision",
      "ChangeOrder",
      "PlatformUser"
    ],
    "rulesApplied": [
      "onlyClientApprovesOwnChangeOrder",
      "onlyProjectManagerDeclinesChangeOrder"
    ],
    "functions": [
      {
        "functionName": "createChangeOrderDecision",
        "inputTypeName": "CreateChangeOrderDecisionInput",
        "outputTypeName": "CreateChangeOrderDecisionOutput",
        "input": [
          {
            "name": "changeOrder",
            "type": "string",
            "required": true,
            "description": "Referência à ordem de mudança que recebeu a decisão.",
            "ofEntity": "ChangeOrderDecision",
            "fieldRef": "ChangeOrderDecision.changeOrder",
            "item": {
              "fields": []
            }
          },
          {
            "name": "decision",
            "type": "string",
            "required": true,
            "description": "Resultado registrado para a ordem de mudança.",
            "ofEntity": "ChangeOrderDecision",
            "fieldRef": "ChangeOrderDecision.decision",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "changeOrderDecisionId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrderDecision"
          },
          {
            "name": "changeOrder",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrderDecision"
          },
          {
            "name": "madeByPlatformUser",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrderDecision"
          },
          {
            "name": "decision",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrderDecision"
          },
          {
            "name": "decidedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrderDecision"
          }
        ],
        "ports": [
          "ChangeOrderDecision",
          "ChangeOrder",
          "PlatformUser"
        ],
        "rulesApplied": [
          "onlyClientApprovesOwnChangeOrder",
          "onlyProjectManagerDeclinesChangeOrder"
        ],
        "transactional": true,
        "steps": [
          "Resolve the actor PlatformUser from ctx.sessionContext and use that id as madeByPlatformUser; generate changeOrderDecisionId with ctx.idGenerator and decidedAt with ctx.clock.",
          "Load the referenced ChangeOrder through the ChangeOrder port and verify it exists and is in a decision-eligible state.",
          "Load the acting PlatformUser through the PlatformUser port and verify it exists.",
          "Apply onlyClientApprovesOwnChangeOrder inline: when decision is approved, verify that the acting user is the client associated with the ChangeOrder; if the model cannot establish that association from the declared fields, block with rule id onlyClientApprovesOwnChangeOrder rather than guessing.",
          "Apply onlyProjectManagerDeclinesChangeOrder inline: when decision is declined, verify that the acting user is the project manager for the ChangeOrder; if the declared model has no project-manager association, block with rule id onlyProjectManagerDeclinesChangeOrder rather than guessing.",
          "Create and persist the ChangeOrderDecision through the ChangeOrderDecision port inside the transaction, then return the canonical output fields."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "changeOrderDecisionId",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrderDecision.changeOrderDecisionId"
            },
            {
              "name": "changeOrder",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrderDecision.changeOrder"
            },
            {
              "name": "madeByPlatformUser",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrderDecision.madeByPlatformUser"
            },
            {
              "name": "decision",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrderDecision.decision"
            },
            {
              "name": "decidedAt",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrderDecision.decidedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createChangeOrderDecisionUsecase;

export const pipeline = [
  {
    "id": "createChangeOrderDecision__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrderDecision.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrderDecision.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "onlyClientApprovesOwnChangeOrder",
      "onlyProjectManagerDeclinesChangeOrder"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
