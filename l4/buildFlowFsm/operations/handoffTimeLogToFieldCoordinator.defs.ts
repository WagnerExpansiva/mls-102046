/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/handoffTimeLogToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const operationHandoffTimeLogToFieldCoordinator = {
  "operationId": "handoffTimeLogToFieldCoordinator",
  "title": "Encaminhar o registro diário",
  "actors": [
    "fieldWorker"
  ],
  "entity": "TimeLog",
  "kind": "commandInput",
  "reads": [
    "TimeLog"
  ],
  "writes": [
    "TimeLog"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "fieldWorker",
    "goal": "Encaminhar o registro diário",
    "steps": [
      "Encaminhar o registro diário",
      "O coordenador recebe o registro de horas para acompanhamento."
    ],
    "outcome": "O coordenador recebe o registro de horas para acompanhamento."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Encaminhar o registro diário",
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
  "commandName": "cmdHandoffTimeLogToFieldCoordinator",
  "bffName": "cmdHandoffTimeLogToFieldCoordinator"
} as const;

export default operationHandoffTimeLogToFieldCoordinator;
