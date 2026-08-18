/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/locateFieldWorker.defs.ts" enhancement="_blank"/>

export const operationLocateFieldWorker = {
  "operationId": "locateFieldWorker",
  "title": "Selecionar o trabalhador responsável",
  "actors": [
    "fieldCoordinator"
  ],
  "entity": "FieldWorker",
  "kind": "query",
  "reads": [
    "FieldWorker"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Selecionar o trabalhador responsável",
    "steps": [
      "Confirmar o trabalhador",
      "O trabalhador que realizou o trabalho está selecionado no diretório da organização."
    ],
    "outcome": "O trabalhador que realizou o trabalho está selecionado no diretório da organização."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Selecionar o trabalhador responsável",
    "entity": "FieldWorker",
    "keyField": "FieldWorker.platformUserId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "FieldWorker.platformUserId"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "platformUserId",
        "type": "string",
        "required": true,
        "fieldRef": "FieldWorker.platformUserId"
      }
    ]
  },
  "inputs": [],
  "pageId": "assignWorkTask",
  "commandName": "qryLocateFieldWorker",
  "bffName": "qryLocateFieldWorker"
} as const;

export default operationLocateFieldWorker;
