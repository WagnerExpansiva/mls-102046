/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.defs.ts" enhancement="_blank"/>

export const timeLogDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "TimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TimeLog",
    "title": "Registro de horas",
    "fields": [
      {
        "fieldId": "timeLogId",
        "title": "ID do registro de horas",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do apontamento de horas, transportado entre as etapas conectadas.",
        "constraints": [
          {
            "constraintId": "uniqueTimeLogId",
            "kind": "unique",
            "value": "true",
            "description": "Cada registro de horas possui um identificador estável e exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Estado do apontamento para determinar se suas horas participam do custo e dos indicadores de execução.",
        "constraints": [
          {
            "constraintId": "timeLogStatusEnum",
            "kind": "enum",
            "value": "[\"recorded\",\"voided\"]",
            "description": "O status deve corresponder a um estado previsto para o registro de horas.",
            "source": "inferred"
          }
        ],
        "enum": [
          "recorded",
          "voided"
        ]
      },
      {
        "fieldId": "workTaskId",
        "title": "Tarefa",
        "type": "uuid",
        "required": true,
        "description": "Referência à tarefa selecionada à qual as horas executadas são atribuídas.",
        "constraints": []
      },
      {
        "fieldId": "fieldWorkerId",
        "title": "Trabalhador de campo",
        "type": "uuid",
        "required": true,
        "description": "Referência ao trabalhador selecionado que realizou as horas registradas.",
        "constraints": []
      },
      {
        "fieldId": "workDate",
        "title": "Data de trabalho",
        "type": "date",
        "required": true,
        "description": "Data diária em que as horas foram efetivamente realizadas.",
        "constraints": []
      },
      {
        "fieldId": "hoursWorked",
        "title": "Horas trabalhadas",
        "type": "number",
        "required": true,
        "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa.",
        "constraints": [
          {
            "constraintId": "positiveHoursWorked",
            "kind": "custom",
            "value": "greaterThanZero",
            "description": "As horas trabalhadas devem ser maiores que zero.",
            "source": "journey"
          }
        ]
      },
      {
        "fieldId": "hourlyLaborCost",
        "title": "Custo horário de mão de obra aplicado",
        "type": "money",
        "required": true,
        "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "recorded",
      "voided"
    ],
    "invariants": [
      "status must be either recorded or voided.",
      "A recorded time log may transition to voided, and a voided time log must not transition back to recorded.",
      "hoursWorked must be greater than zero.",
      "hourlyLaborCost must be non-negative and expressed in a valid monetary amount.",
      "The realized labor cost is hoursWorked multiplied by hourlyLaborCost.",
      "timeLogId must be stable and unique for each time log."
    ]
  }
} as const;

export default timeLogDomainEntity;

export const pipeline = [
  {
    "id": "timeLog__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.defs.ts",
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
