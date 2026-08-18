/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectProjectTimeLogs.defs.ts" enhancement="_blank"/>

export const operationInspectProjectTimeLogs = {
  "operationId": "inspectProjectTimeLogs",
  "title": "Consultar os registros diários de horas",
  "actors": [
    "fieldCoordinator"
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
    "goal": "Consultar os registros diários de horas",
    "steps": [
      "Consultar os registros diários de horas",
      "Registros de horas da obra estão visíveis."
    ],
    "outcome": "Registros de horas da obra estão visíveis."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar os registros diários de horas",
    "entity": "TimeLog",
    "keyField": "TimeLog.timeLogId",
    "pagination": "none",
    "selection": "none",
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
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "timeLogTimeLogId",
      "fieldRef": "TimeLog.timeLogId",
      "required": true,
      "source": "selectedEntity",
      "description": "Registro de horas"
    }
  ],
  "pageId": "monitorDailyProjectRecords",
  "commandName": "qryInspectProjectTimeLogs",
  "bffName": "qryInspectProjectTimeLogs"
} as const;

export default operationInspectProjectTimeLogs;
