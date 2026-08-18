/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectProjectExecutionOverview.defs.ts" enhancement="_blank"/>

export const operationInspectProjectExecutionOverview = {
  "operationId": "inspectProjectExecutionOverview",
  "title": "Analisar a execução da obra",
  "actors": [
    "projectManager"
  ],
  "entity": "ProjectExecutionOverview",
  "kind": "query",
  "reads": [
    "ProjectExecutionOverview"
  ],
  "writes": [],
  "rulesApplied": [
    "activeProjectCostVisibility"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Analisar a execução da obra",
    "steps": [
      "Acompanhar a execução com os registros diários",
      "Andamento, registros e próximos prazos estão consolidados."
    ],
    "outcome": "Andamento, registros e próximos prazos estão consolidados."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Analisar a execução da obra",
    "entity": "ProjectExecutionOverview",
    "keyField": "ProjectExecutionOverview.projectId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ProjectExecutionOverview.projectId",
      "ProjectExecutionOverview.projectName",
      "ProjectExecutionOverview.projectStatus",
      "ProjectExecutionOverview.workTaskIds",
      "ProjectExecutionOverview.taskSummary",
      "ProjectExecutionOverview.upcomingCommitments",
      "ProjectExecutionOverview.timeLogIds",
      "ProjectExecutionOverview.totalLoggedHours",
      "ProjectExecutionOverview.materialUsageIds",
      "ProjectExecutionOverview.materialUsageSummary",
      "ProjectExecutionOverview.actualLaborCost",
      "ProjectExecutionOverview.actualMaterialCost",
      "ProjectExecutionOverview.actualCost",
      "ProjectExecutionOverview.budgetAmount",
      "ProjectExecutionOverview.costVariance",
      "ProjectExecutionOverview.changeOrderIds",
      "ProjectExecutionOverview.changeOrderImpactSummary",
      "ProjectExecutionOverview.calculatedAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.projectId"
      },
      {
        "name": "projectName",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.projectName"
      },
      {
        "name": "projectStatus",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.projectStatus"
      },
      {
        "name": "workTaskIds",
        "type": "string",
        "required": false,
        "fieldRef": "ProjectExecutionOverview.workTaskIds"
      },
      {
        "name": "taskSummary",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.taskSummary"
      },
      {
        "name": "upcomingCommitments",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.upcomingCommitments"
      },
      {
        "name": "timeLogIds",
        "type": "string",
        "required": false,
        "fieldRef": "ProjectExecutionOverview.timeLogIds"
      },
      {
        "name": "totalLoggedHours",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.totalLoggedHours"
      },
      {
        "name": "materialUsageIds",
        "type": "string",
        "required": false,
        "fieldRef": "ProjectExecutionOverview.materialUsageIds"
      },
      {
        "name": "materialUsageSummary",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.materialUsageSummary"
      },
      {
        "name": "actualLaborCost",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.actualLaborCost"
      },
      {
        "name": "actualMaterialCost",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.actualMaterialCost"
      },
      {
        "name": "actualCost",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.actualCost"
      },
      {
        "name": "budgetAmount",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.budgetAmount"
      },
      {
        "name": "costVariance",
        "type": "number",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.costVariance"
      },
      {
        "name": "changeOrderIds",
        "type": "string",
        "required": false,
        "fieldRef": "ProjectExecutionOverview.changeOrderIds"
      },
      {
        "name": "changeOrderImpactSummary",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.changeOrderImpactSummary"
      },
      {
        "name": "calculatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectExecutionOverview.calculatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectExecutionOverviewProjectId",
      "fieldRef": "ProjectExecutionOverview.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Visão consolidada de execução da obra"
    }
  ],
  "pageId": "generateAndPublishProjectStatusReport",
  "commandName": "qryInspectProjectExecutionOverview",
  "bffName": "qryInspectProjectExecutionOverview"
} as const;

export default operationInspectProjectExecutionOverview;
