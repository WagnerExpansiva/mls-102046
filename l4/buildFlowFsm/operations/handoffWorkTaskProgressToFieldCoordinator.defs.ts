/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/handoffWorkTaskProgressToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const operationHandoffWorkTaskProgressToFieldCoordinator = {
  "operationId": "handoffWorkTaskProgressToFieldCoordinator",
  "title": "Informar o andamento ao coordenador",
  "actors": [
    "fieldWorker"
  ],
  "entity": "WorkTask",
  "kind": "commandInput",
  "reads": [
    "WorkTask"
  ],
  "writes": [
    "WorkTask"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "fieldWorker",
    "goal": "Informar o andamento ao coordenador",
    "steps": [
      "Informar o andamento ao coordenador",
      "O coordenador recebe a tarefa com andamento atualizado."
    ],
    "outcome": "O coordenador recebe a tarefa com andamento atualizado."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Informar o andamento ao coordenador",
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
  "commandName": "cmdHandoffWorkTaskProgressToFieldCoordinator",
  "bffName": "cmdHandoffWorkTaskProgressToFieldCoordinator"
} as const;

export default operationHandoffWorkTaskProgressToFieldCoordinator;
