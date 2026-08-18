/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.defs.ts" enhancement="_blank"/>

export const clientDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Client",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Client",
    "title": "Cliente",
    "fields": [
      {
        "fieldId": "clientId",
        "title": "Identificador do cliente",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas.",
        "constraints": [
          {
            "constraintId": "uniqueClientId",
            "kind": "unique",
            "value": "true",
            "description": "Cada cadastro mestre de cliente possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "clientName",
        "title": "Nome do cliente",
        "type": "string",
        "required": true,
        "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações.",
        "constraints": []
      },
      {
        "fieldId": "contactEmail",
        "title": "E-mail de contato",
        "type": "string",
        "required": false,
        "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados.",
        "constraints": [
          {
            "constraintId": "contactEmailFormat",
            "kind": "format",
            "value": "email",
            "description": "Quando informado, o e-mail de contato deve ter formato de endereço de e-mail válido.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "contactPhone",
        "title": "Telefone de contato",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do cliente para comunicação relacionada às suas obras.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "clientId must be stable and unique across client master records.",
      "clientName must be provided and non-blank.",
      "When contactEmail is provided, it must have a valid email address format.",
      "Optional contact information, when provided, must be valid and non-blank."
    ]
  }
} as const;

export default clientDomainEntity;

export const pipeline = [
  {
    "id": "client__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
