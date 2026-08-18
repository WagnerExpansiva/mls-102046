/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/StatusReport.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityStatusReport = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "StatusReport",
  "title": "Relatório de status",
  "description": "Comunicação profissional durável da situação da obra, gerada com apoio do proxy LLM a partir da execução e dos riscos, revisada e publicada pelo gerente antes de ser entregue ao cliente.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "generateAndPublishProjectStatusReport",
      "consultClientProjectUpdates"
    ],
    "featureIds": [
      "aiStatusReporting",
      "clientCommunication",
      "jobCostTracking"
    ],
    "authorityRefs": [
      "buildflowfsm:statuspublish",
      "buildflowfsm:clientupdates"
    ]
  },
  "fields": [
    {
      "fieldId": "statusReportId",
      "title": "Identificador do relatório de status",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada.",
      "constraints": [
        {
          "constraintId": "uniqueStatusReportId",
          "kind": "unique",
          "value": "true",
          "description": "Cada relatório de status possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "projectId",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto à obra específica cuja situação é comunicada pelo relatório.",
      "constraints": []
    },
    {
      "fieldId": "status",
      "title": "Status",
      "type": "string",
      "required": true,
      "description": "Estado do ciclo de vida do relatório para revisão, comunicação ao cliente ou retirada.",
      "constraints": [
        {
          "constraintId": "statusReportStatusEnum",
          "kind": "enum",
          "value": "[\"draft\",\"published\",\"withdrawn\"]",
          "description": "O relatório pode estar em rascunho, publicado ou retirado.",
          "source": "journey"
        }
      ],
      "enum": [
        "draft",
        "published",
        "withdrawn"
      ]
    },
    {
      "fieldId": "title",
      "title": "Título",
      "type": "string",
      "required": true,
      "description": "Título profissional que identifica a comunicação de status da obra.",
      "constraints": []
    },
    {
      "fieldId": "content",
      "title": "Conteúdo do relatório",
      "type": "text",
      "required": true,
      "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação.",
      "constraints": []
    },
    {
      "fieldId": "communicatedRisks",
      "title": "Riscos comunicados",
      "type": "json",
      "required": false,
      "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório.",
      "constraints": []
    },
    {
      "fieldId": "generatedAt",
      "title": "Gerado em",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que o relatório foi gerado para revisão.",
      "constraints": []
    },
    {
      "fieldId": "generatedByUserId",
      "title": "Gerado por",
      "type": "uuid",
      "required": true,
      "description": "Identificador do gerente responsável por gerar o relatório para revisão.",
      "constraints": []
    },
    {
      "fieldId": "publishedAt",
      "title": "Publicado em",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que o relatório foi aprovado para comunicação ao cliente.",
      "constraints": []
    },
    {
      "fieldId": "publishedByUserId",
      "title": "Publicado por",
      "type": "uuid",
      "required": false,
      "description": "Identificador do gerente responsável pela publicação observável do relatório.",
      "constraints": []
    },
    {
      "fieldId": "withdrawnAt",
      "title": "Retirado em",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que um relatório publicado foi retirado de circulação.",
      "constraints": []
    }
  ],
  "lifecycleStates": [
    "draft",
    "published",
    "withdrawn"
  ],
  "statusEnum": [
    "draft",
    "published",
    "withdrawn"
  ],
  "initialState": "draft",
  "terminalStates": [
    "withdrawn"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "clientVisibleStatusReport",
      "description": "Um relatório é comunicável e consultável pelo cliente somente quando publicado.",
      "stateIds": [
        "published"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "statusReportUsesProjectExecutionData",
    "onlyProjectManagerPublishesStatusReport",
    "clientSeesOnlyOwnProjectInformation",
    "clientVisibleStatusReport"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "statusReportId",
    "notes": "O conteúdo publicado e sua autoria são registros do módulo; a geração de IA utiliza o proxy LLM fornecido pela plataforma."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityStatusReportType = typeof buildFlowFsmEntityStatusReport;

export default buildFlowFsmEntityStatusReport;
