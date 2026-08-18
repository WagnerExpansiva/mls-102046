/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/recordWorkTime.defs.ts" enhancement="_blank"/>

export const recordWorkTimeWorkspace = {
  "workspaceId": "recordWorkTime",
  "title": "Registrar horas trabalhadas",
  "actors": [
    "fieldWorker"
  ],
  "kind": "operation",
  "entity": "TimeLog",
  "bffCalls": [
    {
      "bffId": "qryLocateFieldWorker",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateFieldWorker"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "platformUserId",
            "from": "locateFieldWorker.$items.platformUserId",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.recordWorkTime.qryLocateFieldWorker"
    },
    {
      "bffId": "qryLocateWorkTask",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateWorkTask"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "workTaskId",
            "from": "locateWorkTask.$items.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "locateWorkTask.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "locateWorkTask.$items.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "locateWorkTask.$items.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "locateWorkTask.$items.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateWorkTask.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "locateWorkTask.$items.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.recordWorkTime.qryLocateWorkTask"
    },
    {
      "bffId": "cmdCreateTimeLog",
      "kind": "command",
      "uses": [
        {
          "operationId": "createTimeLog"
        }
      ],
      "input": [
        {
          "name": "workTaskWorkTaskId",
          "from": "createTimeLog.workTaskWorkTaskId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryLocateWorkTask",
          "type": "string"
        },
        {
          "name": "workDate",
          "from": "createTimeLog.workDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "hoursWorked",
          "from": "createTimeLog.hoursWorked",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "hourlyLaborCost",
          "from": "createTimeLog.hourlyLaborCost",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "timeLogId",
            "from": "createTimeLog.timeLogId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createTimeLog.status",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskId",
            "from": "createTimeLog.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldWorkerId",
            "from": "createTimeLog.fieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "workDate",
            "from": "createTimeLog.workDate",
            "type": "string",
            "required": true
          },
          {
            "name": "hoursWorked",
            "from": "createTimeLog.hoursWorked",
            "type": "number",
            "required": true
          },
          {
            "name": "hourlyLaborCost",
            "from": "createTimeLog.hourlyLaborCost",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.recordWorkTime.cmdCreateTimeLog"
    },
    {
      "bffId": "cmdHandoffTimeLogToFieldCoordinator",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffTimeLogToFieldCoordinator"
        }
      ],
      "input": [
        {
          "name": "timeLogTimeLogId",
          "from": "handoffTimeLogToFieldCoordinator.timeLogTimeLogId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "workDate",
          "from": "handoffTimeLogToFieldCoordinator.workDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "hoursWorked",
          "from": "handoffTimeLogToFieldCoordinator.hoursWorked",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "hourlyLaborCost",
          "from": "handoffTimeLogToFieldCoordinator.hourlyLaborCost",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "timeLogId",
            "from": "handoffTimeLogToFieldCoordinator.timeLogId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "handoffTimeLogToFieldCoordinator.status",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskId",
            "from": "handoffTimeLogToFieldCoordinator.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldWorkerId",
            "from": "handoffTimeLogToFieldCoordinator.fieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "workDate",
            "from": "handoffTimeLogToFieldCoordinator.workDate",
            "type": "string",
            "required": true
          },
          {
            "name": "hoursWorked",
            "from": "handoffTimeLogToFieldCoordinator.hoursWorked",
            "type": "number",
            "required": true
          },
          {
            "name": "hourlyLaborCost",
            "from": "handoffTimeLogToFieldCoordinator.hourlyLaborCost",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator"
    }
  ],
  "sections": [
    {
      "sectionId": "locateFieldWorker",
      "intent": "O trabalhador que realizou o trabalho está selecionado no diretório da organização.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateFieldWorker",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "locateWorkTask",
      "intent": "Uma tarefa da obra está selecionada para o registro.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateWorkTask",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "createTimeLog",
      "intent": "Um registro diário vinculado ao trabalhador e à tarefa fica armazenado.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateTimeLog"
        }
      ]
    },
    {
      "sectionId": "handoffTimeLogToFieldCoordinator",
      "intent": "O coordenador recebe o registro de horas para acompanhamento.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffTimeLogToFieldCoordinator"
        }
      ]
    }
  ],
  "operationIds": [
    "createTimeLog",
    "handoffTimeLogToFieldCoordinator",
    "locateFieldWorker",
    "locateWorkTask"
  ],
  "purpose": "Registrar horas de execução para apoiar o custo realizado da obra.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:967e739e"
} as const;

export default recordWorkTimeWorkspace;
