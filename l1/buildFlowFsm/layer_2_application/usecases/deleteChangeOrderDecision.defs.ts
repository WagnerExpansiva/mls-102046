/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const deleteChangeOrderDecisionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteChangeOrderDecision",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteChangeOrderDecision",
    "ports": [
      "ChangeOrderDecision"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteChangeOrderDecision",
        "inputTypeName": "DeleteChangeOrderDecisionInput",
        "outputTypeName": "DeleteChangeOrderDecisionOutput",
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
          "ChangeOrderDecision"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load the ChangeOrderDecision aggregate by changeOrderDecisionId through the ChangeOrderDecision port.",
          "Validate that the decision exists; if it does not, return the port's not-found error.",
          "Capture the canonical output fields from the loaded aggregate before deletion.",
          "Delete the aggregate through the ChangeOrderDecision port inside the transaction wrapper.",
          "Return the captured deleted decision projection."
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

export default deleteChangeOrderDecisionUsecase;

export const pipeline = [
  {
    "id": "deleteChangeOrderDecision__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrderDecision.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrderDecision.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
