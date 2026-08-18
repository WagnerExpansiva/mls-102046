/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createWorkTask.defs.ts" enhancement="_blank"/>

export const operationCreateWorkTask = {
  "operationId": "createWorkTask",
  "title": "Registrar a tarefa atribuída",
  "actors": [
    "fieldCoordinator"
  ],
  "entity": "WorkTask",
  "kind": "commandInput",
  "reads": [
    "FieldWorker",
    "Project",
    "WorkTask"
  ],
  "writes": [
    "WorkTask"
  ],
  "rulesApplied": [
    "workTaskRequiresActiveProject",
    "workTaskRequiresAssigneeAndDueDate"
  ],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Registrar a tarefa atribuída",
    "steps": [
      "Registrar a tarefa atribuída",
      "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra."
    ],
    "outcome": "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Registrar a tarefa atribuída",
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
  "pageId": "assignWorkTask",
  "commandName": "cmdCreateWorkTask",
  "bffName": "cmdCreateWorkTask"
} as const;

export default operationCreateWorkTask;
