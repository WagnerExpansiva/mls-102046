/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/locateWorkTask.defs.ts" enhancement="_blank"/>

export const operationLocateWorkTask = {
  "operationId": "locateWorkTask",
  "title": "Localizar a tarefa atribuída",
  "actors": [
    "fieldWorker"
  ],
  "entity": "WorkTask",
  "kind": "query",
  "reads": [
    "WorkTask"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "fieldWorker",
    "goal": "Localizar a tarefa atribuída",
    "steps": [
      "Localizar a tarefa executada",
      "Uma tarefa da obra está selecionada para o registro."
    ],
    "outcome": "Uma tarefa da obra está selecionada para o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Localizar a tarefa atribuída",
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
  "pageId": "recordWorkTime",
  "commandName": "qryLocateWorkTask",
  "bffName": "qryLocateWorkTask"
} as const;

export default operationLocateWorkTask;
