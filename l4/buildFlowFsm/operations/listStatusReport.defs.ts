/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listStatusReport.defs.ts" enhancement="_blank"/>

export const operationListStatusReport = {
  "operationId": "listStatusReport",
  "title": "Listar Relatório de status",
  "actors": [
    "billingStaff",
    "client",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "StatusReport",
  "kind": "query",
  "reads": [
    "StatusReport"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Relatório de status",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Relatório de status",
    "entity": "StatusReport",
    "keyField": "StatusReport.statusReportId",
    "pagination": "none",
    "selection": "single",
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
    "kind": "list",
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
  "inputs": [],
  "pageId": "projectHub",
  "commandName": "qryListStatusReport",
  "bffName": "qryListStatusReport"
} as const;

export default operationListStatusReport;
