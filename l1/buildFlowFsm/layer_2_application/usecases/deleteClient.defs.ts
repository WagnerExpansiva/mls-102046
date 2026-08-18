/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.defs.ts" enhancement="_blank"/>

export const deleteClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteClient",
    "ports": [
      "Client"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteClient",
        "inputTypeName": "DeleteClientInput",
        "outputTypeName": "DeleteClientOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas.",
            "ofEntity": "Client",
            "fieldRef": "Client.clientId",
            "item": {
              "fields": []
            }
          }
        ],
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
        "transactional": true,
        "steps": [
          "Carregar o Client pelo clientId usando o port Client.",
          "Se o Client não existir, rejeitar a exclusão com erro de não encontrado.",
          "Capturar os campos clientId, clientName, contactEmail e contactPhone antes da exclusão.",
          "Excluir o Client usando o port Client dentro da transação.",
          "Retornar os dados capturados do Client excluído."
        ],
        "outputShape": {
          "kind": "object",
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

export default deleteClientUsecase;

export const pipeline = [
  {
    "id": "deleteClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.defs.ts",
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
