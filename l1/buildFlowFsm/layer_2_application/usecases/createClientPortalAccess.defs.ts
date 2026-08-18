/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClientPortalAccess.defs.ts" enhancement="_blank"/>

export const createClientPortalAccessUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createClientPortalAccess",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createClientPortalAccess",
    "ports": [
      "ClientPortalAccess",
      "Client",
      "PlatformUser"
    ],
    "rulesApplied": [
      "activeClientPortalAccess"
    ],
    "functions": [
      {
        "functionName": "createClientPortalAccess",
        "inputTypeName": "CreateClientPortalAccessInput",
        "outputTypeName": "CreateClientPortalAccessOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Referência ao cliente selecionado para o vínculo de acesso.",
            "ofEntity": "ClientPortalAccess",
            "fieldRef": "ClientPortalAccess.clientId",
            "item": {
              "fields": []
            }
          }
        ],
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
          "ClientPortalAccess",
          "Client",
          "PlatformUser"
        ],
        "rulesApplied": [
          "activeClientPortalAccess"
        ],
        "transactional": true,
        "steps": [
          "Read the Client through the Client port using clientId and reject when it does not exist.",
          "Resolve platformUserId from the authenticated actor session context and read the PlatformUser through the PlatformUser port; reject when it does not exist.",
          "Within one transaction, query ClientPortalAccess for an existing active access for the same clientId and platformUserId. If one exists, reject with validation details including rule activeClientPortalAccess.",
          "Generate clientPortalAccessId with ctx.idGenerator and set status to the system default active.",
          "Persist the new ClientPortalAccess through its port in the same transaction.",
          "Return clientPortalAccessId, clientId, platformUserId, and status from the persisted aggregate."
        ],
        "outputShape": {
          "kind": "object",
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

export default createClientPortalAccessUsecase;

export const pipeline = [
  {
    "id": "createClientPortalAccess__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClientPortalAccess.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClientPortalAccess.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "activeClientPortalAccess"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
