/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.defs.ts" enhancement="_blank"/>

export const materialUsageDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "MaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MaterialUsage",
    "title": "Consumo de material",
    "fields": [
      {
        "fieldId": "materialUsageId",
        "title": "ID do consumo de material",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas.",
        "constraints": [
          {
            "constraintId": "uniqueMaterialUsageId",
            "kind": "unique",
            "value": "true",
            "description": "Cada apontamento de consumo possui um identificador estável único.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Situação do apontamento de consumo para determinar sua elegibilidade no custo realizado e na execução consolidada.",
        "constraints": [
          {
            "constraintId": "materialUsageStatusEnum",
            "kind": "enum",
            "value": "[\"recorded\",\"voided\"]",
            "description": "O consumo pode estar registrado ou anulado.",
            "source": "inferred"
          }
        ],
        "enum": [
          "recorded",
          "voided"
        ]
      },
      {
        "fieldId": "projectId",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto à obra contra a qual o material foi efetivamente consumido.",
        "constraints": []
      },
      {
        "fieldId": "inventoryItemId",
        "title": "Item de estoque",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto ao item de material efetivamente utilizado.",
        "constraints": []
      },
      {
        "fieldId": "inventoryBalanceId",
        "title": "Saldo de estoque de origem",
        "type": "uuid",
        "required": true,
        "description": "Referência ao saldo operacional que suportou o consumo, para manter a rastreabilidade de disponibilidade e custo.",
        "constraints": []
      },
      {
        "fieldId": "quantity",
        "title": "Quantidade consumida",
        "type": "number",
        "required": true,
        "description": "Quantidade do item efetivamente consumida na obra.",
        "constraints": [
          {
            "constraintId": "positiveConsumedQuantity",
            "kind": "custom",
            "value": "positive",
            "description": "A quantidade informada deve ser maior que zero.",
            "source": "journey"
          }
        ]
      },
      {
        "fieldId": "usageDescription",
        "title": "Descrição do consumo",
        "type": "text",
        "required": true,
        "description": "Descrição informada do consumo de material realizado em campo.",
        "constraints": []
      },
      {
        "fieldId": "consumedOn",
        "title": "Data do consumo",
        "type": "date",
        "required": true,
        "description": "Data em que o material foi efetivamente consumido na obra.",
        "constraints": []
      },
      {
        "fieldId": "unitCostBasis",
        "title": "Base de custo unitário",
        "type": "money",
        "required": true,
        "description": "Custo unitário preservado como base para o custeio realizado do consumo.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "recorded",
      "voided"
    ],
    "invariants": [
      "materialUsageId must be unique and remain stable throughout the aggregate lifecycle.",
      "A material usage starts as recorded; a recorded usage may transition to voided, and a voided usage must not return to recorded.",
      "quantity must be greater than zero.",
      "unitCostBasis must be non-negative.",
      "The total consumption cost, calculated as quantity multiplied by unitCostBasis, must be non-negative.",
      "consumedOn must represent the date on which the material was effectively consumed and must not be later than the usage record's creation or registration date, when such a date exists.",
      "A voided usage is ineligible for realized-cost calculation and consolidated execution."
    ]
  }
} as const;

export default materialUsageDomainEntity;

export const pipeline = [
  {
    "id": "materialUsage__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.defs.ts",
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
