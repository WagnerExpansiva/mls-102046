/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClient.defs.ts" enhancement="_blank"/>

export const createClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createClient",
    "ports": [
      "Client"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "createClient",
        "inputTypeName": "CreateClientInput",
        "outputTypeName": "CreateClientOutput",
        "input": [
          {
            "name": "clientName",
            "type": "string",
            "required": true,
            "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações.",
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
            "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados.",
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
            "description": "Telefone de contato do cliente para comunicação relacionada às suas obras.",
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
          "Validate the required clientName input.",
          "Generate the Client clientId and construct the Client aggregate.",
          "Persist the Client aggregate through the Client port within the transaction.",
          "Return the created Client fields clientId, clientName, contactEmail, and contactPhone."
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

export default createClientUsecase;

export const pipeline = [
  {
    "id": "createClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClient.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClient.defs.ts",
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
