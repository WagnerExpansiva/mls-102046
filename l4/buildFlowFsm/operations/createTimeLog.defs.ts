/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createTimeLog.defs.ts" enhancement="_blank"/>

export const operationCreateTimeLog = {
  "operationId": "createTimeLog",
  "title": "Registrar as horas trabalhadas",
  "actors": [
    "fieldWorker"
  ],
  "entity": "TimeLog",
  "kind": "commandInput",
  "reads": [
    "FieldWorker",
    "TimeLog",
    "WorkTask"
  ],
  "writes": [
    "TimeLog"
  ],
  "rulesApplied": [
    "activeWorkTask",
    "timeLogRequiresWorkerTaskAndPositiveHours"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "Registrar as horas trabalhadas",
    "steps": [
      "Registrar as horas trabalhadas",
      "Um registro diário vinculado ao trabalhador e à tarefa fica armazenado."
    ],
    "outcome": "Um registro diário vinculado ao trabalhador e à tarefa fica armazenado."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Registrar as horas trabalhadas",
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
      "inputId": "workTaskWorkTaskId",
      "fieldRef": "WorkTask.workTaskId",
      "required": true,
      "source": "selectedEntity",
      "description": "Tarefa de trabalho"
    },
    {
      "inputId": "workDate",
      "fieldRef": "TimeLog.workDate",
      "required": true,
      "source": "userInput",
      "description": "Data diária em que as horas foram efetivamente realizadas."
    },
    {
      "inputId": "hoursWorked",
      "fieldRef": "TimeLog.hoursWorked",
      "required": true,
      "source": "userInput",
      "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa."
    },
    {
      "inputId": "hourlyLaborCost",
      "fieldRef": "TimeLog.hourlyLaborCost",
      "required": true,
      "source": "userInput",
      "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra."
    }
  ],
  "pageId": "recordWorkTime",
  "commandName": "cmdCreateTimeLog",
  "bffName": "cmdCreateTimeLog"
} as const;

export default operationCreateTimeLog;
