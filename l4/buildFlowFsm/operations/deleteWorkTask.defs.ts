/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteWorkTask.defs.ts" enhancement="_blank"/>

export const operationDeleteWorkTask = {
  "operationId": "deleteWorkTask",
  "title": "Excluir Tarefa de trabalho",
  "actors": [
    "fieldCoordinator",
    "fieldWorker"
  ],
  "entity": "WorkTask",
  "kind": "delete",
  "reads": [
    "WorkTask"
  ],
  "writes": [
    "WorkTask"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Excluir Tarefa de trabalho",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Tarefa de trabalho",
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
      "inputId": "workTaskId",
      "fieldRef": "WorkTask.workTaskId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável da tarefa, mantido entre as etapas conectadas."
    }
  ],
  "pageId": "workTaskCatalogue",
  "commandName": "cmdDeleteWorkTask",
  "bffName": "cmdDeleteWorkTask"
} as const;

export default operationDeleteWorkTask;
