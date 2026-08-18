/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.defs.ts" enhancement="_blank"/>

export const projectDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Project",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Project",
    "title": "Obra",
    "fields": [
      {
        "fieldId": "projectId",
        "title": "Identificador da obra",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável da obra, transportado entre etapas e registros relacionados.",
        "constraints": [
          {
            "constraintId": "uniqueProjectId",
            "kind": "unique",
            "value": "true",
            "description": "Cada obra possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "clientId",
        "title": "Cliente",
        "type": "uuid",
        "required": true,
        "description": "Referência ao cliente selecionado ao qual a obra pertence.",
        "constraints": []
      },
      {
        "fieldId": "name",
        "title": "Nome da obra",
        "type": "string",
        "required": true,
        "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente.",
        "constraints": [
          {
            "constraintId": "minLengthProjectName",
            "kind": "minLength",
            "value": "1",
            "description": "O nome da obra deve ser informado.",
            "source": "journey"
          }
        ]
      },
      {
        "fieldId": "address",
        "title": "Endereço da obra",
        "type": "text",
        "required": true,
        "description": "Endereço do local de execução da obra.",
        "constraints": [
          {
            "constraintId": "minLengthProjectAddress",
            "kind": "minLength",
            "value": "1",
            "description": "O endereço da obra deve ser informado.",
            "source": "user"
          }
        ]
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Situação operacional atual da obra.",
        "constraints": [
          {
            "constraintId": "projectStatusEnum",
            "kind": "enum",
            "value": "[\"planned\",\"active\",\"completed\",\"cancelled\"]",
            "description": "O status da obra deve corresponder a um estado previsto em seu ciclo de vida.",
            "source": "journey"
          }
        ],
        "enum": [
          "planned",
          "active",
          "completed",
          "cancelled"
        ]
      },
      {
        "fieldId": "authorizedBudget",
        "title": "Orçamento autorizado",
        "type": "money",
        "required": true,
        "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra.",
        "constraints": []
      },
      {
        "fieldId": "plannedStartDate",
        "title": "Data planejada de início",
        "type": "date",
        "required": true,
        "description": "Data planejada para início da execução da obra.",
        "constraints": []
      },
      {
        "fieldId": "plannedEndDate",
        "title": "Data planejada de término",
        "type": "date",
        "required": true,
        "description": "Data planejada para conclusão da obra.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "planned",
      "active",
      "completed",
      "cancelled"
    ],
    "invariants": [
      "O identificador da obra deve ser único e permanecer estável durante todo o ciclo de vida.",
      "O nome e o endereço da obra não podem ser vazios.",
      "O orçamento autorizado deve ser maior ou igual a zero.",
      "A data planejada de término não pode ser anterior à data planejada de início.",
      "A obra deve iniciar em planned; somente planned pode transicionar para active ou cancelled.",
      "Somente active pode transicionar para completed ou cancelled.",
      "Os estados completed e cancelled são terminais; uma obra nesses estados não pode retornar a outro estado.",
      "Uma obra em completed deve ter sido previamente active.",
      "Uma obra em cancelled não pode ser reativada nem concluída."
    ]
  }
} as const;

export default projectDomainEntity;

export const pipeline = [
  {
    "id": "project__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.defs.ts",
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
