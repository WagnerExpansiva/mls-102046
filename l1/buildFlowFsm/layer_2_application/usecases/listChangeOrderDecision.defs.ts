/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const listChangeOrderDecisionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listChangeOrderDecision",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listChangeOrderDecision",
    "ports": [
      "ChangeOrderDecision"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listChangeOrderDecision",
        "inputTypeName": "ListChangeOrderDecisionInput",
        "outputTypeName": "ListChangeOrderDecisionOutput",
        "input": [],
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
        "transactional": false,
        "steps": [
          "Consultar o port ChangeOrderDecision para listar todas as decisões.",
          "Projetar cada registro nos campos declarados pelo outputShape, preservando os tipos e nomes.",
          "Retornar a coleção sem filtros ou paginação, pois o contrato declara pagination none e inputs vazio."
        ],
        "outputShape": {
          "kind": "list",
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

export default listChangeOrderDecisionUsecase;

export const pipeline = [
  {
    "id": "listChangeOrderDecision__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrderDecision.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrderDecision.defs.ts",
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
