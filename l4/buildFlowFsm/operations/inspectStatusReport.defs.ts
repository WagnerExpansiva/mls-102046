/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectStatusReport.defs.ts" enhancement="_blank"/>

export const operationInspectStatusReport = {
  "operationId": "inspectStatusReport",
  "title": "Consultar o relatório de status publicado",
  "actors": [
    "client"
  ],
  "entity": "StatusReport",
  "kind": "query",
  "reads": [
    "ScheduleRiskAssessment",
    "StatusReport"
  ],
  "writes": [],
  "rulesApplied": [
    "clientVisibleStatusReport"
  ],
  "story": {
    "actor": "client",
    "goal": "Consultar o relatório de status publicado",
    "steps": [
      "Consultar o relatório de status publicado",
      "O relatório publicado, incluindo riscos comunicados, está visível."
    ],
    "outcome": "O relatório publicado, incluindo riscos comunicados, está visível."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar o relatório de status publicado",
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
    }
  ],
  "pageId": "consultClientProjectUpdates",
  "commandName": "qryInspectStatusReport",
  "bffName": "qryInspectStatusReport"
} as const;

export default operationInspectStatusReport;
