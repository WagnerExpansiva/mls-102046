/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/Project.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityProject = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "Project",
  "title": "Obra",
  "description": "Registro mestre da obra que concentra cliente, endereço, orçamento autorizado, datas planejadas e contexto de custo, execução, cronograma, alteração e faturamento.",
  "kind": "mdm",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "reviewProjectPortfolio",
      "assignWorkTask",
      "recordProjectMaterialUsage",
      "submitChangeOrder",
      "issueProjectInvoice",
      "generateAndPublishProjectStatusReport",
      "consultClientProjectUpdates",
      "monitorDailyProjectRecords",
      "consultApprovedProjectChangeOrders"
    ],
    "featureIds": [
      "projectPortfolioMonitoring",
      "projectScheduleVisibility",
      "fieldTaskCoordination",
      "projectMaterialTracking",
      "jobCostTracking",
      "changeOrderControl",
      "clientBilling",
      "aiStatusReporting",
      "clientCommunication",
      "dailyFieldLogging"
    ],
    "authorityRefs": [
      "buildflowfsm:portfolio",
      "buildflowfsm:fieldcoord",
      "buildflowfsm:fieldchange",
      "buildflowfsm:fieldlogs",
      "buildflowfsm:changemanage",
      "buildflowfsm:statuspublish",
      "buildflowfsm:billing",
      "buildflowfsm:clientupdates"
    ]
  },
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
  "lifecycleStates": [
    "planned",
    "active",
    "completed",
    "cancelled"
  ],
  "statusEnum": [
    "planned",
    "active",
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
      "predicateId": "activeProject",
      "description": "Uma obra aceita novas tarefas e consumos de material somente enquanto estiver em execução ativa.",
      "stateIds": [
        "active"
      ],
      "source": "journey"
    },
    {
      "predicateId": "ongoingProject",
      "description": "Uma obra integra o acompanhamento operacional enquanto estiver planejada ou ativa.",
      "stateIds": [
        "planned",
        "active"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "activeProject",
    "ongoingProject"
  ],
  "storage": {
    "target": "mdm",
    "scope": "organization",
    "idField": "projectId",
    "mdmType": "buildFlowFsm.Project",
    "notes": "Cadastro mestre organizacional da obra, reutilizado pelos registros transacionais e pelas projeções de acompanhamento."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityProjectType = typeof buildFlowFsmEntityProject;

export default buildFlowFsmEntityProject;
