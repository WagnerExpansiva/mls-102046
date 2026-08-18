/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.defs.ts" enhancement="_blank"/>

export const locateClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "locateClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "locateClient",
    "ports": [
      "Client"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "locateClient",
        "inputTypeName": "LocateClientInput",
        "outputTypeName": "LocateClientOutput",
        "input": [],
        "output": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "clientName",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "contactEmail",
            "type": "string",
            "required": false,
            "ofEntity": "Client"
          },
          {
            "name": "contactPhone",
            "type": "string",
            "required": false,
            "ofEntity": "Client"
          }
        ],
        "ports": [
          "Client"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Consultar o port Client sem filtros de entrada.",
          "Projetar cada cliente nos campos clientId, clientName, contactEmail e contactPhone.",
          "Retornar a coleção de clientes localizada."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "Client.clientId"
            },
            {
              "name": "clientName",
              "type": "string",
              "required": true,
              "fieldRef": "Client.clientName"
            },
            {
              "name": "contactEmail",
              "type": "string",
              "required": false,
              "fieldRef": "Client.contactEmail"
            },
            {
              "name": "contactPhone",
              "type": "string",
              "required": false,
              "fieldRef": "Client.contactPhone"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default locateClientUsecase;

export const pipeline = [
  {
    "id": "locateClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts"
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
