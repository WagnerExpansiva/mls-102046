/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.defs.ts" enhancement="_blank"/>

export const invoiceDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Invoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Invoice",
    "title": "Fatura",
    "fields": [
      {
        "fieldId": "invoiceId",
        "title": "Identificador da fatura",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada.",
        "constraints": [
          {
            "constraintId": "uniqueInvoiceId",
            "kind": "unique",
            "value": "true",
            "description": "Cada fatura possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "clientId",
        "title": "Cliente",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto ao cliente para o qual a fatura é emitida.",
        "constraints": []
      },
      {
        "fieldId": "projectId",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto à obra faturável à qual a fatura está vinculada.",
        "constraints": []
      },
      {
        "fieldId": "commercialReference",
        "title": "Referência comercial",
        "type": "string",
        "required": true,
        "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente.",
        "constraints": []
      },
      {
        "fieldId": "amount",
        "title": "Valor da fatura",
        "type": "money",
        "required": true,
        "description": "Valor comercial total faturado para a obra.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Situação da fatura, incluindo sua disponibilidade para consulta externa pelo cliente.",
        "constraints": [
          {
            "constraintId": "invoiceStatusEnum",
            "kind": "enum",
            "value": "[\"issued\",\"availableToClient\",\"cancelled\"]",
            "description": "O status da fatura deve corresponder a um estado válido do seu ciclo de vida.",
            "source": "inferred"
          }
        ],
        "enum": [
          "issued",
          "availableToClient",
          "cancelled"
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "issued",
      "availableToClient",
      "cancelled"
    ],
    "invariants": [
      "invoiceId must be unique and remain stable throughout the invoice lifecycle.",
      "amount must be strictly greater than zero.",
      "A newly created invoice must have status \"issued\".",
      "Allowed status transitions are: \"issued\" → \"availableToClient\" or \"cancelled\"; \"availableToClient\" → \"cancelled\"; \"cancelled\" is terminal.",
      "An invoice may be made available to the client only while it is valid and not cancelled.",
      "A cancelled invoice must not transition back to \"issued\" or \"availableToClient\"."
    ]
  }
} as const;

export default invoiceDomainEntity;

export const pipeline = [
  {
    "id": "invoice__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.defs.ts",
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
