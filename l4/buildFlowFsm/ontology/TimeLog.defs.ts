/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/TimeLog.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityTimeLog = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "TimeLog",
  "title": "Registro de horas",
  "description": "Apontamento diário de horas de um trabalhador contra uma tarefa, preservando a base de custo de mão de obra aplicável para compor o realizado da obra.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "recordWorkTime",
      "generateAndPublishProjectStatusReport",
      "monitorDailyProjectRecords"
    ],
    "featureIds": [
      "dailyFieldLogging",
      "jobCostTracking",
      "aiStatusReporting"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldcoord",
      "buildflowfsm:fieldlogs",
      "buildflowfsm:statuspublish"
    ]
  },
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
  "lifecycleStates": [
    "recorded",
    "voided"
  ],
  "statusEnum": [
    "recorded",
    "voided"
  ],
  "initialState": "recorded",
  "terminalStates": [
    "voided"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "costEligibleTimeLog",
      "description": "Somente apontamentos registrados compõem o custo realizado e os indicadores de execução.",
      "stateIds": [
        "recorded"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "timeLogRequiresWorkerTaskAndPositiveHours",
    "costEligibleTimeLog"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "timeLogId",
    "notes": "Fato transacional de execução; mantém a atribuição ao trabalhador e à tarefa e a base de custo histórica necessária ao custeio."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityTimeLogType = typeof buildFlowFsmEntityTimeLog;

export default buildFlowFsmEntityTimeLog;
