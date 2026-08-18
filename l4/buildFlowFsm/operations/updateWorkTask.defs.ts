/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateWorkTask.defs.ts" enhancement="_blank"/>

export const operationUpdateWorkTask = {
  "operationId": "updateWorkTask",
  "title": "Registrar o andamento da tarefa",
  "actors": [
    "fieldWorker"
  ],
  "entity": "WorkTask",
  "kind": "commandInput",
  "reads": [
    "Project",
    "WorkTask"
  ],
  "writes": [
    "WorkTask"
  ],
  "rulesApplied": [
    "onlyAssignedWorkerReportsTaskProgress"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "Registrar o andamento da tarefa",
    "steps": [
      "Registrar o andamento da tarefa",
      "O status e o andamento atual ficam registrados."
    ],
    "outcome": "O status e o andamento atual ficam registrados."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Registrar o andamento da tarefa",
    "entity": "WorkTask",
    "keyField": "WorkTask.workTaskId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "WorkTask.workTaskId",
      "WorkTask.projectId",
      "WorkTask.assignedFieldWorkerId",
      "WorkTask.description",
      "WorkTask.dueDate",
      "WorkTask.status",
      "WorkTask.progressUpdate"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "workTaskId",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.workTaskId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.projectId"
      },
      {
        "name": "assignedFieldWorkerId",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.assignedFieldWorkerId"
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.description"
      },
      {
        "name": "dueDate",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.dueDate"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.status"
      },
      {
        "name": "progressUpdate",
        "type": "string",
        "required": false,
        "fieldRef": "WorkTask.progressUpdate"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectProjectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Obra"
    },
    {
      "inputId": "workTaskWorkTaskId",
      "fieldRef": "WorkTask.workTaskId",
      "required": true,
      "source": "selectedEntity",
      "description": "Tarefa de trabalho"
    },
    {
      "inputId": "description",
      "fieldRef": "WorkTask.description",
      "required": true,
      "source": "userInput",
      "description": "Descrição do trabalho a ser executado em campo."
    },
    {
      "inputId": "dueDate",
      "fieldRef": "WorkTask.dueDate",
      "required": true,
      "source": "userInput",
      "description": "Data prevista para conclusão da tarefa no cronograma da obra."
    },
    {
      "inputId": "progressUpdate",
      "fieldRef": "WorkTask.progressUpdate",
      "required": false,
      "source": "userInput",
      "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa."
    }
  ],
  "pageId": "updateWorkTaskProgress",
  "commandName": "cmdUpdateWorkTask",
  "bffName": "cmdUpdateWorkTask"
} as const;

export default operationUpdateWorkTask;
