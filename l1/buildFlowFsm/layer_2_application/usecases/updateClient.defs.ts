/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.defs.ts" enhancement="_blank"/>

export const updateClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateClient",
    "ports": [
      "Client"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "updateClient",
        "inputTypeName": "UpdateClientInput",
        "outputTypeName": "UpdateClientOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do cadastro mestre do cliente.",
            "ofEntity": "Client",
            "fieldRef": "Client.clientId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "clientName",
            "type": "string",
            "required": true,
            "description": "Nome de identificação do cliente organizacional.",
            "ofEntity": "Client",
            "fieldRef": "Client.clientName",
            "item": {
              "fields": []
            }
          },
          {
            "name": "contactEmail",
            "type": "string",
            "required": false,
            "description": "Endereço de e-mail de contato do cliente.",
            "ofEntity": "Client",
            "fieldRef": "Client.contactEmail",
            "item": {
              "fields": []
            }
          },
          {
            "name": "contactPhone",
            "type": "string",
            "required": false,
            "description": "Telefone de contato do cliente.",
            "ofEntity": "Client",
            "fieldRef": "Client.contactPhone",
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
          "Load the Client aggregate by clientId through the Client port.",
          "Validate that the Client exists.",
          "Apply the provided clientName, contactEmail, and contactPhone changes.",
          "Persist the updated Client aggregate through the Client port.",
          "Return the declared Client projection."
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

export default updateClientUsecase;

export const pipeline = [
  {
    "id": "updateClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.defs.ts",
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
