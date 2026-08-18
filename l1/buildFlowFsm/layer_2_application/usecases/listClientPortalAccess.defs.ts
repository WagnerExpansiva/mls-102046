/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClientPortalAccess.defs.ts" enhancement="_blank"/>

export const listClientPortalAccessUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listClientPortalAccess",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listClientPortalAccess",
    "ports": [
      "ClientPortalAccess"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listClientPortalAccess",
        "inputTypeName": "ListClientPortalAccessInput",
        "outputTypeName": "ListClientPortalAccessOutput",
        "input": [],
        "output": [
          {
            "name": "clientPortalAccessId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          },
          {
            "name": "platformUserId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          }
        ],
        "ports": [
          "ClientPortalAccess"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Consultar todos os registros ClientPortalAccess pelo port ClientPortalAccess.",
          "Projetar cada registro somente nos campos clientPortalAccessId, clientId, platformUserId e status.",
          "Retornar a coleção projetada em items."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "clientPortalAccessId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.clientPortalAccessId"
            },
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.clientId"
            },
            {
              "name": "platformUserId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.platformUserId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default listClientPortalAccessUsecase;

export const pipeline = [
  {
    "id": "listClientPortalAccess__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClientPortalAccess.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClientPortalAccess.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.d.ts"
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
