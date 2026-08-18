/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.defs.ts" enhancement="_blank"/>

export const workTaskDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "WorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "WorkTask",
    "title": "Tarefa de trabalho",
    "fields": [
      {
        "fieldId": "workTaskId",
        "title": "Identificador da tarefa",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável da tarefa, mantido entre as etapas conectadas.",
        "constraints": [
          {
            "constraintId": "uniqueWorkTaskId",
            "kind": "unique",
            "value": "true",
            "description": "Cada tarefa possui um identificador estável e exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "projectId",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Referência à obra selecionada em cujo contexto a tarefa é planejada e executada.",
        "constraints": []
      },
      {
        "fieldId": "assignedFieldWorkerId",
        "title": "Trabalhador responsável",
        "type": "uuid",
        "required": true,
        "description": "Referência ao trabalhador de campo selecionado como responsável pela execução e atualização da tarefa.",
        "constraints": []
      },
      {
        "fieldId": "description",
        "title": "Descrição da tarefa",
        "type": "text",
        "required": true,
        "description": "Descrição do trabalho a ser executado em campo.",
        "constraints": []
      },
      {
        "fieldId": "dueDate",
        "title": "Prazo",
        "type": "date",
        "required": true,
        "description": "Data prevista para conclusão da tarefa no cronograma da obra.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Estado atual da tarefa durante seu planejamento e execução.",
        "constraints": [
          {
            "constraintId": "workTaskStatusEnum",
            "kind": "enum",
            "value": "[\"planned\",\"inProgress\",\"completed\",\"cancelled\"]",
            "description": "O status da tarefa deve corresponder a um estado definido do seu ciclo de vida.",
            "source": "journey"
          }
        ],
        "enum": [
          "planned",
          "inProgress",
          "completed",
          "cancelled"
        ]
      },
      {
        "fieldId": "progressUpdate",
        "title": "Andamento informado",
        "type": "text",
        "required": false,
        "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "planned",
      "inProgress",
      "completed",
      "cancelled"
    ],
    "invariants": [
      "workTaskId must be unique and remain stable throughout the task lifecycle.",
      "Valid status transitions are: planned → inProgress or cancelled; inProgress → completed or cancelled; completed and cancelled are terminal states.",
      "A task may be marked completed only from inProgress.",
      "progressUpdate is required when status is inProgress or completed and must describe the latest execution progress; it is not required for planned or cancelled tasks.",
      "dueDate must be on or after the task planning/creation date.",
      "A cancelled task must not transition back to planned, inProgress, or completed.",
      "A completed task must not transition back to planned, inProgress, or cancelled."
    ]
  }
} as const;

export default workTaskDomainEntity;

export const pipeline = [
  {
    "id": "workTask__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.defs.ts",
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
