/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/WorkTask.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityWorkTask = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "WorkTask",
  "title": "Tarefa de trabalho",
  "description": "Unidade planejada de execução vinculada a uma obra, com responsável de campo, descrição, prazo, andamento e informações necessárias para o cronograma e a análise de risco.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "assignWorkTask",
      "updateWorkTaskProgress",
      "recordWorkTime",
      "generateAndPublishProjectStatusReport",
      "monitorDailyProjectRecords"
    ],
    "featureIds": [
      "projectScheduleVisibility",
      "fieldTaskCoordination",
      "dailyFieldLogging",
      "jobCostTracking",
      "aiStatusReporting"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldcoord",
      "buildflowfsm:fieldwork",
      "buildflowfsm:fieldlogs",
      "buildflowfsm:statuspublish"
    ]
  },
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
  "lifecycleStates": [
    "planned",
    "inProgress",
    "completed",
    "cancelled"
  ],
  "statusEnum": [
    "planned",
    "inProgress",
    "completed",
    "cancelled"
  ],
  "initialState": "planned",
  "terminalStates": [
    "completed",
    "cancelled"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "unfinishedWorkTask",
      "description": "Uma tarefa permanece pendente para fins de cronograma e risco enquanto estiver planejada ou em execução.",
      "stateIds": [
        "planned",
        "inProgress"
      ],
      "source": "inferred"
    },
    {
      "predicateId": "activeWorkTask",
      "description": "Uma tarefa pode receber apontamentos de horas enquanto estiver planejada ou em execução.",
      "stateIds": [
        "planned",
        "inProgress"
      ],
      "source": "journey"
    }
  ],
  "useRules": [
    "workTaskRequiresActiveProject",
    "workTaskRequiresAssigneeAndDueDate",
    "onlyAssignedWorkerReportsTaskProgress",
    "unfinishedWorkTask",
    "activeWorkTask"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "workTaskId",
    "notes": "Registro operacional de planejamento e execução; seus custos realizados são formados por apontamentos associados."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityWorkTaskType = typeof buildFlowFsmEntityWorkTask;

export default buildFlowFsmEntityWorkTask;
