/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectProjectTimeline.defs.ts" enhancement="_blank"/>

export const operationInspectProjectTimeline = {
  "operationId": "inspectProjectTimeline",
  "title": "Consultar o cronograma da obra",
  "actors": [
    "fieldCoordinator"
  ],
  "entity": "ProjectTimeline",
  "kind": "query",
  "reads": [
    "Project",
    "ProjectTimeline",
    "WorkTask"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Consultar o cronograma da obra",
    "steps": [
      "Consultar o cronograma da obra",
      "A sequência de tarefas e prazos está visível para planejamento."
    ],
    "outcome": "A sequência de tarefas e prazos está visível para planejamento."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar o cronograma da obra",
    "entity": "ProjectTimeline",
    "keyField": "ProjectTimeline.projectId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ProjectTimeline.projectId",
      "ProjectTimeline.workTasks",
      "ProjectTimeline.scheduleEntries"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "ProjectTimeline.projectId"
      },
      {
        "name": "workTasks",
        "type": "string",
        "required": false,
        "fieldRef": "ProjectTimeline.workTasks"
      },
      {
        "name": "scheduleEntries",
        "type": "string",
        "required": false,
        "fieldRef": "ProjectTimeline.scheduleEntries"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectTimelineProjectId",
      "fieldRef": "ProjectTimeline.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Cronograma da obra"
    }
  ],
  "pageId": "assignWorkTask",
  "commandName": "qryInspectProjectTimeline",
  "bffName": "qryInspectProjectTimeline"
} as const;

export default operationInspectProjectTimeline;
