/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/timeLogCatalogue.defs.ts" enhancement="_blank"/>

export const timeLogCatalogueWorkspace = {
  "workspaceId": "timeLogCatalogue",
  "title": "Registro de horas",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "kind": "operation",
  "entity": "TimeLog",
  "bffCalls": [
    {
      "bffId": "qryListTimeLog",
      "kind": "query",
      "uses": [
        {
          "operationId": "listTimeLog"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "timeLogId",
            "from": "listTimeLog.$items.timeLogId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listTimeLog.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskId",
            "from": "listTimeLog.$items.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldWorkerId",
            "from": "listTimeLog.$items.fieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "workDate",
            "from": "listTimeLog.$items.workDate",
            "type": "string",
            "required": true
          },
          {
            "name": "hoursWorked",
            "from": "listTimeLog.$items.hoursWorked",
            "type": "number",
            "required": true
          },
          {
            "name": "hourlyLaborCost",
            "from": "listTimeLog.$items.hourlyLaborCost",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.timeLogCatalogue.qryListTimeLog"
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
          "sourceRef": "qryWorkTaskPicker",
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
      "route": "buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog"
    },
    {
      "bffId": "cmdUpdateTimeLog",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateTimeLog"
        }
      ],
      "input": [
        {
          "name": "timeLogId",
          "from": "updateTimeLog.timeLogId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "status",
          "from": "updateTimeLog.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "workTaskId",
          "from": "updateTimeLog.workTaskId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryWorkTaskPicker",
          "type": "string"
        },
        {
          "name": "fieldWorkerId",
          "from": "updateTimeLog.fieldWorkerId",
          "required": true,
          "source": "actorSession",
          "type": "string"
        },
        {
          "name": "workDate",
          "from": "updateTimeLog.workDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "hoursWorked",
          "from": "updateTimeLog.hoursWorked",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "hourlyLaborCost",
          "from": "updateTimeLog.hourlyLaborCost",
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
            "from": "updateTimeLog.timeLogId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "updateTimeLog.status",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskId",
            "from": "updateTimeLog.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldWorkerId",
            "from": "updateTimeLog.fieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "workDate",
            "from": "updateTimeLog.workDate",
            "type": "string",
            "required": true
          },
          {
            "name": "hoursWorked",
            "from": "updateTimeLog.hoursWorked",
            "type": "number",
            "required": true
          },
          {
            "name": "hourlyLaborCost",
            "from": "updateTimeLog.hourlyLaborCost",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog"
    },
    {
      "bffId": "cmdDeleteTimeLog",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteTimeLog"
        }
      ],
      "input": [
        {
          "name": "timeLogId",
          "from": "deleteTimeLog.timeLogId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "timeLogId",
            "from": "deleteTimeLog.timeLogId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteTimeLog.status",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskId",
            "from": "deleteTimeLog.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldWorkerId",
            "from": "deleteTimeLog.fieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "workDate",
            "from": "deleteTimeLog.workDate",
            "type": "string",
            "required": true
          },
          {
            "name": "hoursWorked",
            "from": "deleteTimeLog.hoursWorked",
            "type": "number",
            "required": true
          },
          {
            "name": "hourlyLaborCost",
            "from": "deleteTimeLog.hourlyLaborCost",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog"
    },
    {
      "bffId": "qryWorkTaskPicker",
      "kind": "query",
      "uses": [
        {
          "operationId": "listWorkTask"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "workTaskId",
            "from": "listWorkTask.$items.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listWorkTask.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "listWorkTask.$items.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "listWorkTask.$items.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "listWorkTask.$items.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listWorkTask.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "listWorkTask.$items.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Registro de horas.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListTimeLog"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteTimeLog"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Registro de horas.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateTimeLog"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateTimeLog"
        },
        {
          "role": "filterControl",
          "dataSource": "qryWorkTaskPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createTimeLog",
    "deleteTimeLog",
    "listTimeLog",
    "listWorkTask",
    "updateTimeLog"
  ],
  "purpose": "Cadastro de Registro de horas.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:71db8574"
} as const;

export default timeLogCatalogueWorkspace;
