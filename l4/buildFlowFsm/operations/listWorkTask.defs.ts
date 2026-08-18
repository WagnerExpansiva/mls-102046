/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listWorkTask.defs.ts" enhancement="_blank"/>

export const operationListWorkTask = {
  "operationId": "listWorkTask",
  "title": "Listar Tarefa de trabalho",
  "actors": [
    "billingStaff",
    "client",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "WorkTask",
  "kind": "query",
  "reads": [
    "WorkTask"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Tarefa de trabalho",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Tarefa de trabalho",
    "entity": "WorkTask",
    "keyField": "WorkTask.workTaskId",
    "pagination": "none",
    "selection": "single",
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
    "kind": "list",
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
  "inputs": [],
  "pageId": "projectHub",
  "commandName": "qryListWorkTask",
  "bffName": "qryListWorkTask"
} as const;

export default operationListWorkTask;
