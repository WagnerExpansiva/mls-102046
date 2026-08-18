/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateTimeLog.defs.ts" enhancement="_blank"/>

export const operationUpdateTimeLog = {
  "operationId": "updateTimeLog",
  "title": "Atualizar Registro de horas",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "TimeLog",
  "kind": "update",
  "reads": [
    "FieldWorker",
    "TimeLog",
    "WorkTask"
  ],
  "writes": [
    "TimeLog"
  ],
  "rulesApplied": [
    "timeLogRequiresWorkerTaskAndPositiveHours",
    "costEligibleTimeLog"
  ],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Atualizar Registro de horas",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Registro de horas",
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
    },
    {
      "inputId": "status",
      "fieldRef": "TimeLog.status",
      "required": true,
      "source": "systemDefault",
      "description": "Estado do apontamento para determinar se suas horas participam do custo e dos indicadores de execução."
    },
    {
      "inputId": "workTaskId",
      "fieldRef": "TimeLog.workTaskId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência à tarefa selecionada à qual as horas executadas são atribuídas."
    },
    {
      "inputId": "fieldWorkerId",
      "fieldRef": "TimeLog.fieldWorkerId",
      "required": true,
      "source": "actorSession",
      "description": "Referência ao trabalhador selecionado que realizou as horas registradas."
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
  "pageId": "timeLogCatalogue",
  "commandName": "cmdUpdateTimeLog",
  "bffName": "cmdUpdateTimeLog"
} as const;

export default operationUpdateTimeLog;
