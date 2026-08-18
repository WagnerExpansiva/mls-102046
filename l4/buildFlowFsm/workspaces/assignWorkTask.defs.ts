/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/assignWorkTask.defs.ts" enhancement="_blank"/>

export const assignWorkTaskWorkspace = {
  "workspaceId": "assignWorkTask",
  "title": "Planejar e atribuir tarefa de campo",
  "actors": [
    "fieldCoordinator"
  ],
  "kind": "operation",
  "entity": "WorkTask",
  "bffCalls": [
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.assignWorkTask.qryLocateProject"
    },
    {
      "bffId": "qryInspectProjectTimeline",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectTimeline"
        }
      ],
      "input": [
        {
          "name": "projectTimelineProjectId",
          "from": "inspectProjectTimeline.projectTimelineProjectId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "inspectProjectTimeline.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "workTasks",
            "from": "inspectProjectTimeline.workTasks",
            "type": "string",
            "required": false
          },
          {
            "name": "scheduleEntries",
            "from": "inspectProjectTimeline.scheduleEntries",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.assignWorkTask.qryInspectProjectTimeline"
    },
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
      "route": "buildFlowFsm.assignWorkTask.qryLocateFieldWorker"
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
      "route": "buildFlowFsm.assignWorkTask.cmdCreateWorkTask"
    },
    {
      "bffId": "cmdHandoffWorkTaskToFieldWorker",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffWorkTaskToFieldWorker"
        }
      ],
      "input": [
        {
          "name": "workTaskWorkTaskId",
          "from": "handoffWorkTaskToFieldWorker.workTaskWorkTaskId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "description",
          "from": "handoffWorkTaskToFieldWorker.description",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "dueDate",
          "from": "handoffWorkTaskToFieldWorker.dueDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "progressUpdate",
          "from": "handoffWorkTaskToFieldWorker.progressUpdate",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "workTaskId",
            "from": "handoffWorkTaskToFieldWorker.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "handoffWorkTaskToFieldWorker.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "handoffWorkTaskToFieldWorker.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "handoffWorkTaskToFieldWorker.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "handoffWorkTaskToFieldWorker.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "handoffWorkTaskToFieldWorker.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "handoffWorkTaskToFieldWorker.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker"
    }
  ],
  "sections": [
    {
      "sectionId": "locateProject",
      "intent": "Uma obra ativa do catálogo compartilhado de projetos está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "inspectProjectTimeline",
      "intent": "A sequência de tarefas e prazos está visível para planejamento.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectProjectTimeline"
        }
      ]
    },
    {
      "sectionId": "locateFieldWorker",
      "intent": "Um trabalhador do diretório de usuários da organização está selecionado.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateFieldWorker",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "createWorkTask",
      "intent": "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateWorkTask"
        }
      ]
    },
    {
      "sectionId": "handoffWorkTaskToFieldWorker",
      "intent": "O trabalhador recebe a tarefa para execução em campo.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffWorkTaskToFieldWorker"
        }
      ]
    }
  ],
  "operationIds": [
    "createWorkTask",
    "handoffWorkTaskToFieldWorker",
    "inspectProjectTimeline",
    "locateFieldWorker",
    "locateProject"
  ],
  "purpose": "Criar uma tarefa vinculada à obra e encaminhá-la ao trabalhador responsável.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:413c2ce4"
} as const;

export default assignWorkTaskWorkspace;
