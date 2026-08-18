/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listTimeLog.defs.ts" enhancement="_blank"/>

export const operationListTimeLog = {
  "operationId": "listTimeLog",
  "title": "Listar Registro de horas",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "TimeLog",
  "kind": "query",
  "reads": [
    "TimeLog"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Listar Registro de horas",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Registro de horas",
    "entity": "TimeLog",
    "keyField": "TimeLog.timeLogId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "TimeLog.timeLogId",
      "TimeLog.status",
      "TimeLog.workTaskId",
      "TimeLog.fieldWorkerId",
      "TimeLog.workDate",
      "TimeLog.hoursWorked",
      "TimeLog.hourlyLaborCost"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "timeLogId",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.timeLogId"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.status"
      },
      {
        "name": "workTaskId",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.workTaskId"
      },
      {
        "name": "fieldWorkerId",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.fieldWorkerId"
      },
      {
        "name": "workDate",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.workDate"
      },
      {
        "name": "hoursWorked",
        "type": "number",
        "required": true,
        "fieldRef": "TimeLog.hoursWorked"
      },
      {
        "name": "hourlyLaborCost",
        "type": "number",
        "required": true,
        "fieldRef": "TimeLog.hourlyLaborCost"
      }
    ]
  },
  "inputs": [],
  "pageId": "timeLogCatalogue",
  "commandName": "qryListTimeLog",
  "bffName": "qryListTimeLog"
} as const;

export default operationListTimeLog;
