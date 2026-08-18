/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/handoffStatusReportToClient.defs.ts" enhancement="_blank"/>

export const operationHandoffStatusReportToClient = {
  "operationId": "handoffStatusReportToClient",
  "title": "Encaminhar o relatório ao cliente",
  "actors": [
    "projectManager"
  ],
  "entity": "StatusReport",
  "kind": "commandInput",
  "reads": [
    "StatusReport"
  ],
  "writes": [
    "StatusReport"
  ],
  "rulesApplied": [
    "clientVisibleStatusReport"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Encaminhar o relatório ao cliente",
    "steps": [
      "Encaminhar o relatório ao cliente",
      "O cliente recebe o relatório publicado."
    ],
    "outcome": "O cliente recebe o relatório publicado."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Encaminhar o relatório ao cliente",
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
      "inputId": "statusReportStatusReportId",
      "fieldRef": "StatusReport.statusReportId",
      "required": true,
      "source": "selectedEntity",
      "description": "Relatório de status"
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
      "inputId": "generatedByUserId",
      "fieldRef": "StatusReport.generatedByUserId",
      "required": true,
      "source": "userInput",
      "description": "Identificador do gerente responsável por gerar o relatório para revisão."
    },
    {
      "inputId": "publishedByUserId",
      "fieldRef": "StatusReport.publishedByUserId",
      "required": false,
      "source": "userInput",
      "description": "Identificador do gerente responsável pela publicação observável do relatório."
    }
  ],
  "pageId": "generateAndPublishProjectStatusReport",
  "commandName": "cmdHandoffStatusReportToClient",
  "bffName": "cmdHandoffStatusReportToClient"
} as const;

export default operationHandoffStatusReportToClient;
