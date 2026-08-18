/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/publishStatusReport.defs.ts" enhancement="_blank"/>

export const operationPublishStatusReport = {
  "operationId": "publishStatusReport",
  "title": "Publicar o relatório de status",
  "actors": [
    "projectManager"
  ],
  "entity": "StatusReport",
  "kind": "transition",
  "reads": [
    "Project",
    "ProjectExecutionOverview",
    "StatusReport"
  ],
  "writes": [
    "StatusReport"
  ],
  "rulesApplied": [
    "statusReportUsesProjectExecutionData"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Publicar o relatório de status",
    "steps": [
      "Publicar o relatório de status",
      "O relatório fica aprovado para comunicação ao cliente."
    ],
    "outcome": "O relatório fica aprovado para comunicação ao cliente."
  },
  "accessPattern": {
    "kind": "transition",
    "description": "Publicar o relatório de status",
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
      "inputId": "projectProjectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Obra"
    },
    {
      "inputId": "projectExecutionOverviewProjectId",
      "fieldRef": "ProjectExecutionOverview.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Visão consolidada de execução da obra"
    },
    {
      "inputId": "statusReportStatusReportId",
      "fieldRef": "StatusReport.statusReportId",
      "required": true,
      "source": "selectedEntity",
      "description": "Relatório de status"
    },
    {
      "inputId": "status",
      "fieldRef": "StatusReport.status",
      "required": true,
      "source": "userInput",
      "description": "Decisão tomada."
    }
  ],
  "pageId": "generateAndPublishProjectStatusReport",
  "commandName": "cmdPublishStatusReport",
  "bffName": "cmdPublishStatusReport"
} as const;

export default operationPublishStatusReport;
