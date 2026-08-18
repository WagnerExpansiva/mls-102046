/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateStatusReport.defs.ts" enhancement="_blank"/>

export const operationUpdateStatusReport = {
  "operationId": "updateStatusReport",
  "title": "Atualizar Relatório de status",
  "actors": [
    "client",
    "projectManager"
  ],
  "entity": "StatusReport",
  "kind": "update",
  "reads": [
    "Project",
    "ProjectExecutionOverview",
    "StatusReport"
  ],
  "writes": [
    "StatusReport"
  ],
  "rulesApplied": [
    "statusReportUsesProjectExecutionData",
    "onlyProjectManagerPublishesStatusReport",
    "clientSeesOnlyOwnProjectInformation",
    "clientVisibleStatusReport"
  ],
  "story": {
    "actor": "client",
    "goal": "Atualizar Relatório de status",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Relatório de status",
    "entity": "StatusReport",
    "keyField": "StatusReport.statusReportId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "StatusReport.statusReportId",
      "StatusReport.projectId",
      "StatusReport.status",
      "StatusReport.title",
      "StatusReport.content",
      "StatusReport.communicatedRisks",
      "StatusReport.generatedAt",
      "StatusReport.generatedByUserId",
      "StatusReport.publishedAt",
      "StatusReport.publishedByUserId",
      "StatusReport.withdrawnAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "statusReportId",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.statusReportId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.projectId"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.status"
      },
      {
        "name": "title",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.title"
      },
      {
        "name": "content",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.content"
      },
      {
        "name": "communicatedRisks",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.communicatedRisks"
      },
      {
        "name": "generatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.generatedAt"
      },
      {
        "name": "generatedByUserId",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.generatedByUserId"
      },
      {
        "name": "publishedAt",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.publishedAt"
      },
      {
        "name": "publishedByUserId",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.publishedByUserId"
      },
      {
        "name": "withdrawnAt",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.withdrawnAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "statusReportId",
      "fieldRef": "StatusReport.statusReportId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada."
    },
    {
      "inputId": "projectId",
      "fieldRef": "StatusReport.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto à obra específica cuja situação é comunicada pelo relatório."
    },
    {
      "inputId": "status",
      "fieldRef": "StatusReport.status",
      "required": true,
      "source": "systemDefault",
      "description": "Estado do ciclo de vida do relatório para revisão, comunicação ao cliente ou retirada."
    },
    {
      "inputId": "title",
      "fieldRef": "StatusReport.title",
      "required": true,
      "source": "userInput",
      "description": "Título profissional que identifica a comunicação de status da obra."
    },
    {
      "inputId": "content",
      "fieldRef": "StatusReport.content",
      "required": true,
      "source": "userInput",
      "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação."
    },
    {
      "inputId": "communicatedRisks",
      "fieldRef": "StatusReport.communicatedRisks",
      "required": false,
      "source": "userInput",
      "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório."
    },
    {
      "inputId": "generatedAt",
      "fieldRef": "StatusReport.generatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora em que o relatório foi gerado para revisão."
    },
    {
      "inputId": "generatedByUserId",
      "fieldRef": "StatusReport.generatedByUserId",
      "required": true,
      "source": "userInput",
      "description": "Identificador do gerente responsável por gerar o relatório para revisão."
    },
    {
      "inputId": "publishedAt",
      "fieldRef": "StatusReport.publishedAt",
      "required": false,
      "source": "systemDefault",
      "description": "Data e hora em que o relatório foi aprovado para comunicação ao cliente."
    },
    {
      "inputId": "publishedByUserId",
      "fieldRef": "StatusReport.publishedByUserId",
      "required": false,
      "source": "userInput",
      "description": "Identificador do gerente responsável pela publicação observável do relatório."
    },
    {
      "inputId": "withdrawnAt",
      "fieldRef": "StatusReport.withdrawnAt",
      "required": false,
      "source": "systemDefault",
      "description": "Data e hora em que um relatório publicado foi retirado de circulação."
    }
  ],
  "pageId": "statusReportCatalogue",
  "commandName": "cmdUpdateStatusReport",
  "bffName": "cmdUpdateStatusReport"
} as const;

export default operationUpdateStatusReport;
