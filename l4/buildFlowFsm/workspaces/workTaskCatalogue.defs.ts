/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/workTaskCatalogue.defs.ts" enhancement="_blank"/>

export const workTaskCatalogueWorkspace = {
  "workspaceId": "workTaskCatalogue",
  "title": "Tarefa de trabalho",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "kind": "operation",
  "entity": "WorkTask",
  "bffCalls": [
    {
      "bffId": "qryListWorkTask",
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
      "route": "buildFlowFsm.workTaskCatalogue.qryListWorkTask"
    },
    {
      "bffId": "cmdCreateWorkTask",
      "kind": "command",
      "uses": [
        {
          "operationId": "createWorkTask"
        }
      ],
      "input": [
        {
          "name": "projectProjectId",
          "from": "createWorkTask.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "description",
          "from": "createWorkTask.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "dueDate",
          "from": "createWorkTask.dueDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "progressUpdate",
          "from": "createWorkTask.progressUpdate",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "workTaskId",
            "from": "createWorkTask.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "createWorkTask.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "createWorkTask.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "createWorkTask.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "createWorkTask.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createWorkTask.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "createWorkTask.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask"
    },
    {
      "bffId": "cmdUpdateWorkTask",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateWorkTask"
        }
      ],
      "input": [
        {
          "name": "projectProjectId",
          "from": "updateWorkTask.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "workTaskWorkTaskId",
          "from": "updateWorkTask.workTaskWorkTaskId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "description",
          "from": "updateWorkTask.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "dueDate",
          "from": "updateWorkTask.dueDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "progressUpdate",
          "from": "updateWorkTask.progressUpdate",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "workTaskId",
            "from": "updateWorkTask.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "updateWorkTask.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "updateWorkTask.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "updateWorkTask.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "updateWorkTask.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "updateWorkTask.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "updateWorkTask.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask"
    },
    {
      "bffId": "cmdDeleteWorkTask",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteWorkTask"
        }
      ],
      "input": [
        {
          "name": "workTaskId",
          "from": "deleteWorkTask.workTaskId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "workTaskId",
            "from": "deleteWorkTask.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "deleteWorkTask.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "deleteWorkTask.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "deleteWorkTask.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "deleteWorkTask.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteWorkTask.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "deleteWorkTask.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Tarefa de trabalho.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListWorkTask"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteWorkTask"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Tarefa de trabalho.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateWorkTask"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateWorkTask"
        }
      ]
    }
  ],
  "operationIds": [
    "createWorkTask",
    "deleteWorkTask",
    "listWorkTask",
    "updateWorkTask"
  ],
  "purpose": "Cadastro de Tarefa de trabalho.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:25b05abd"
} as const;

export default workTaskCatalogueWorkspace;
