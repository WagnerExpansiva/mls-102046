/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClientPortalAccess.defs.ts" enhancement="_blank"/>

export const deleteClientPortalAccessUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteClientPortalAccess",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteClientPortalAccess",
    "ports": [
      "ClientPortalAccess"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteClientPortalAccess",
        "inputTypeName": "DeleteClientPortalAccessInput",
        "outputTypeName": "DeleteClientPortalAccessOutput",
        "input": [
          {
            "name": "clientPortalAccessId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada.",
            "ofEntity": "ClientPortalAccess",
            "fieldRef": "ClientPortalAccess.clientPortalAccessId",
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
          "ClientPortalAccess"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load ClientPortalAccess by clientPortalAccessId through the ClientPortalAccess port.",
          "If the record does not exist, return the repository/domain not-found error.",
          "Capture the declared output fields from the loaded aggregate before deletion.",
          "Delete the ClientPortalAccess aggregate through the ClientPortalAccess port within the transaction wrapper.",
          "Return the captured clientPortalAccessId, clientId, platformUserId, and status."
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

export default deleteClientPortalAccessUsecase;

export const pipeline = [
  {
    "id": "deleteClientPortalAccess__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClientPortalAccess.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClientPortalAccess.defs.ts",
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
