/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/updateWorkTaskProgress.defs.ts" enhancement="_blank"/>

export const updateWorkTaskProgressWorkspace = {
  "workspaceId": "updateWorkTaskProgress",
  "title": "Atualizar andamento da tarefa",
  "actors": [
    "fieldWorker"
  ],
  "kind": "operation",
  "entity": "WorkTask",
  "bffCalls": [
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
      "route": "buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask"
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
      "route": "buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask"
    },
    {
      "bffId": "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffWorkTaskProgressToFieldCoordinator"
        }
      ],
      "input": [
        {
          "name": "workTaskWorkTaskId",
          "from": "handoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "description",
          "from": "handoffWorkTaskProgressToFieldCoordinator.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "dueDate",
          "from": "handoffWorkTaskProgressToFieldCoordinator.dueDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "progressUpdate",
          "from": "handoffWorkTaskProgressToFieldCoordinator.progressUpdate",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "workTaskId",
            "from": "handoffWorkTaskProgressToFieldCoordinator.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "handoffWorkTaskProgressToFieldCoordinator.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "handoffWorkTaskProgressToFieldCoordinator.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "handoffWorkTaskProgressToFieldCoordinator.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "handoffWorkTaskProgressToFieldCoordinator.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "handoffWorkTaskProgressToFieldCoordinator.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "handoffWorkTaskProgressToFieldCoordinator.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator"
    }
  ],
  "sections": [
    {
      "sectionId": "locateWorkTask",
      "intent": "Uma tarefa atribuída ao trabalhador está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateWorkTask",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "updateWorkTask",
      "intent": "O status e o andamento atual ficam registrados.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdUpdateWorkTask"
        }
      ]
    },
    {
      "sectionId": "handoffWorkTaskProgressToFieldCoordinator",
      "intent": "O coordenador recebe a tarefa com andamento atualizado.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffWorkTaskProgressToFieldCoordinator"
        }
      ]
    }
  ],
  "operationIds": [
    "handoffWorkTaskProgressToFieldCoordinator",
    "locateWorkTask",
    "updateWorkTask"
  ],
  "purpose": "Manter o status da tarefa alinhado à execução observada.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:ed555623"
} as const;

export default updateWorkTaskProgressWorkspace;
