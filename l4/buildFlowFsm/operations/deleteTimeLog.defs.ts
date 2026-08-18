/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteTimeLog.defs.ts" enhancement="_blank"/>

export const operationDeleteTimeLog = {
  "operationId": "deleteTimeLog",
  "title": "Excluir Registro de horas",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "TimeLog",
  "kind": "delete",
  "reads": [
    "TimeLog"
  ],
  "writes": [
    "TimeLog"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Excluir Registro de horas",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Registro de horas",
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
      "inputId": "timeLogId",
      "fieldRef": "TimeLog.timeLogId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do apontamento de horas, transportado entre as etapas conectadas."
    }
  ],
  "pageId": "timeLogCatalogue",
  "commandName": "cmdDeleteTimeLog",
  "bffName": "cmdDeleteTimeLog"
} as const;

export default operationDeleteTimeLog;
