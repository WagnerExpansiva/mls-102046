/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.defs.ts" enhancement="_blank"/>

export const inventoryBalanceDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "InventoryBalance",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryBalance",
    "title": "Saldo de estoque",
    "fields": [
      {
        "fieldId": "inventoryBalanceId",
        "title": "Identificador do saldo de estoque",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas.",
        "constraints": [
          {
            "constraintId": "uniqueInventoryBalanceId",
            "kind": "unique",
            "value": "true",
            "description": "Cada saldo de estoque possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "inventoryItemId",
        "title": "Item de estoque",
        "type": "uuid",
        "required": true,
        "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto, não digitada como identificador bruto.",
        "constraints": []
      },
      {
        "fieldId": "physicalQuantity",
        "title": "Quantidade física disponível",
        "type": "number",
        "required": true,
        "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo.",
        "constraints": []
      },
      {
        "fieldId": "applicableUnitCost",
        "title": "Custo unitário aplicável",
        "type": "money",
        "required": true,
        "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status do saldo",
        "type": "string",
        "required": true,
        "description": "Estado operacional que indica se o saldo pode atender consumo, está esgotado ou foi desativado.",
        "constraints": [
          {
            "constraintId": "inventoryBalanceStatusEnum",
            "kind": "enum",
            "value": "[\"available\",\"depleted\",\"retired\"]",
            "description": "O status do saldo deve corresponder a um estado do ciclo de vida definido para o saldo de estoque.",
            "source": "journey"
          }
        ],
        "enum": [
          "available",
          "depleted",
          "retired"
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "available",
      "depleted",
      "retired"
    ],
    "invariants": [
      "inventoryBalanceId is unique and stable for each inventory balance.",
      "physicalQuantity must be greater than or equal to zero.",
      "applicableUnitCost must be greater than or equal to zero.",
      "When status is available, physicalQuantity must be greater than zero.",
      "When physicalQuantity is zero, status must be depleted or retired; an available balance cannot have zero quantity.",
      "A balance with status depleted must have physicalQuantity equal to zero.",
      "A balance with status retired cannot satisfy consumption and must not return to available or depleted.",
      "A balance may transition from available to depleted when its physicalQuantity reaches zero, and from available or depleted to retired; retired is terminal.",
      "Consumption must not reduce physicalQuantity below zero."
    ]
  }
} as const;

export default inventoryBalanceDomainEntity;

export const pipeline = [
  {
    "id": "inventoryBalance__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.defs.ts",
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
