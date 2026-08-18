/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const updateChangeOrderDecisionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateChangeOrderDecision",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateChangeOrderDecision",
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
        "functionName": "updateChangeOrderDecision",
        "inputTypeName": "UpdateChangeOrderDecisionInput",
        "outputTypeName": "UpdateChangeOrderDecisionOutput",
        "input": [
          {
            "name": "changeOrderDecisionId",
            "type": "string",
            "required": true,
            "description": "Identificador estável da decisão registrada sobre uma ordem de mudança.",
            "ofEntity": "ChangeOrderDecision",
            "fieldRef": "ChangeOrderDecision.changeOrderDecisionId",
            "item": {
              "fields": []
            }
          },
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
            "description": "Resultado registrado para a ordem de mudança; deve ser approved ou declined.",
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
          "Resolve the authenticated PlatformUser from RequestContext session metadata and set madeByPlatformUser from that actor; resolve decidedAt with ctx.clock.",
          "Load the ChangeOrderDecision by changeOrderDecisionId through the ChangeOrderDecision port and verify its associated ChangeOrder through the ChangeOrder port; use the submitted changeOrder reference only to select and validate the same association.",
          "Validate decision against the enum approved|declined.",
          "For approved, apply onlyClientApprovesOwnChangeOrder inline: verify the authenticated actor is authorized as the client for the ChangeOrder; the current ontology exposes ChangeOrder.clientRef but no PlatformUser-to-client identity or role mapping, so record this modeling gap and fail closed if that authorization cannot be established.",
          "For declined, apply onlyProjectManagerDeclinesChangeOrder inline: verify the authenticated actor is a project manager for the ChangeOrder project; the current ontology exposes no PlatformUser role or project-membership fields, so record this modeling gap and fail closed if that authorization cannot be established.",
          "Mutate the decision and save it through the ChangeOrderDecision port; return exactly the canonical decision projection fields."
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

export default updateChangeOrderDecisionUsecase;

export const pipeline = [
  {
    "id": "updateChangeOrderDecision__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderDecision.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderDecision.defs.ts",
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
