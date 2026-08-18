/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ScheduleRiskAssessment.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityScheduleRiskAssessment = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ScheduleRiskAssessment",
  "title": "Avaliação de risco de atraso",
  "description": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status.",
  "kind": "projection",
  "ownership": "derived",
  "sourceRefs": {
    "journeyIds": [
      "generateAndPublishProjectStatusReport"
    ],
    "featureIds": [
      "aiStatusReporting",
      "projectScheduleVisibility"
    ],
    "authorityRefs": [
      "buildflowfsm:statuspublish"
    ]
  },
  "fields": [
    {
      "fieldId": "projectId",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Identidade da obra cujo contexto de execução fundamenta a avaliação derivada de risco.",
      "constraints": []
    },
    {
      "fieldId": "workTaskId",
      "title": "Tarefa",
      "type": "uuid",
      "required": true,
      "description": "Identidade da tarefa não concluída avaliada quanto ao risco de atraso.",
      "constraints": []
    },
    {
      "fieldId": "taskStatus",
      "title": "Status da tarefa",
      "type": "string",
      "required": true,
      "description": "Estado da tarefa considerado na identificação do risco de atraso.",
      "constraints": []
    },
    {
      "fieldId": "dueDate",
      "title": "Prazo da tarefa",
      "type": "date",
      "required": true,
      "description": "Data de prazo da tarefa usada na projeção do risco de atraso.",
      "constraints": []
    },
    {
      "fieldId": "progressPercent",
      "title": "Andamento da tarefa",
      "type": "number",
      "required": false,
      "description": "Percentual de andamento disponível da tarefa no momento da avaliação.",
      "constraints": []
    },
    {
      "fieldId": "riskIndicators",
      "title": "Indicadores de risco",
      "type": "json",
      "required": true,
      "description": "Indicadores derivados de prazo, estado, andamento e contexto de execução que explicam o risco identificado.",
      "constraints": []
    },
    {
      "fieldId": "riskExplanation",
      "title": "Explicação do risco",
      "type": "text",
      "required": true,
      "description": "Síntese profissional dos fatores que tornam a tarefa suscetível a atraso, para consulta na obra e no relatório de status.",
      "constraints": []
    },
    {
      "fieldId": "assessedAt",
      "title": "Data e hora da avaliação",
      "type": "datetime",
      "required": true,
      "description": "Momento em que os dados de execução foram consolidados para gerar esta avaliação derivada.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [
    "statusReportUsesProjectExecutionData"
  ],
  "storage": {
    "target": "derived",
    "scope": "none",
    "notes": "Avaliação derivada de prazo, estado, andamento e contexto de execução das tarefas; não é uma tarefa nem um registro manual de campo."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityScheduleRiskAssessmentType = typeof buildFlowFsmEntityScheduleRiskAssessment;

export default buildFlowFsmEntityScheduleRiskAssessment;
