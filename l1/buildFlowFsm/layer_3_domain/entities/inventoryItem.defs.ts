/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.defs.ts" enhancement="_blank"/>

export const inventoryItemDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "InventoryItem",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryItem",
    "title": "Item de estoque",
    "fields": [
      {
        "fieldId": "inventoryItemId",
        "title": "Identificador do item de estoque",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do item no catálogo mestre de materiais.",
        "constraints": [
          {
            "constraintId": "uniqueInventoryItemId",
            "kind": "unique",
            "value": "true",
            "description": "Cada item do catálogo possui um identificador estável único.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "name",
        "title": "Nome do material",
        "type": "string",
        "required": true,
        "description": "Nome pelo qual o material ou consumível é identificado no catálogo.",
        "constraints": []
      },
      {
        "fieldId": "description",
        "title": "Descrição",
        "type": "text",
        "required": false,
        "description": "Descrição complementar para distinguir e especificar o material no catálogo.",
        "constraints": []
      },
      {
        "fieldId": "unitOfMeasure",
        "title": "Unidade de uso",
        "type": "string",
        "required": true,
        "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco.",
        "constraints": []
      },
      {
        "fieldId": "referenceUnitCost",
        "title": "Custo unitário de referência",
        "type": "money",
        "required": true,
        "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Situação do item no catálogo, determinando se pode ser selecionado para consumo.",
        "constraints": [
          {
            "constraintId": "inventoryItemStatusValues",
            "kind": "enum",
            "value": "[\"active\",\"retired\"]",
            "description": "O status do item é ativo ou retirado.",
            "source": "journey"
          }
        ],
        "enum": [
          "active",
          "retired"
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "active",
      "retired"
    ],
    "invariants": [
      "inventoryItemId must be globally unique and remain stable for the lifetime of the catalog item.",
      "name and unitOfMeasure must be non-blank.",
      "referenceUnitCost must be greater than or equal to zero.",
      "A newly created item must have status active or retired; status may transition from active to retired, but a retired item cannot return to active.",
      "Only items with status active may be selected or used for material-consumption records."
    ]
  }
} as const;

export default inventoryItemDomainEntity;

export const pipeline = [
  {
    "id": "inventoryItem__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.defs.ts",
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
