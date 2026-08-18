/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.defs.ts" enhancement="_blank"/>

export const listClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listClient",
    "ports": [
      "Client"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listClient",
        "inputTypeName": "ListClientInput",
        "outputTypeName": "ListClientOutput",
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
          "Consultar a porta Client para listar os clientes.",
          "Projetar cada resultado nos campos clientId, clientName, contactEmail e contactPhone.",
          "Retornar a coleção projetada conforme o outputShape declarado."
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

export default listClientUsecase;

export const pipeline = [
  {
    "id": "listClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.defs.ts",
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
