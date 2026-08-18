/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectScheduleRiskAssessment.defs.ts" enhancement="_blank"/>

export const operationInspectScheduleRiskAssessment = {
  "operationId": "inspectScheduleRiskAssessment",
  "title": "Consultar tarefas em risco de atraso",
  "actors": [
    "projectManager"
  ],
  "entity": "ScheduleRiskAssessment",
  "kind": "query",
  "reads": [
    "ScheduleRiskAssessment",
    "WorkTask"
  ],
  "writes": [],
  "rulesApplied": [
    "unfinishedWorkTask"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Consultar tarefas em risco de atraso",
    "steps": [
      "Consultar tarefas em risco de atraso",
      "Tarefas em risco e seus indicadores estão identificados."
    ],
    "outcome": "Tarefas em risco e seus indicadores estão identificados."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar tarefas em risco de atraso",
    "entity": "ScheduleRiskAssessment",
    "keyField": "ScheduleRiskAssessment.projectId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ScheduleRiskAssessment.projectId",
      "ScheduleRiskAssessment.workTaskId",
      "ScheduleRiskAssessment.taskStatus",
      "ScheduleRiskAssessment.dueDate",
      "ScheduleRiskAssessment.progressPercent",
      "ScheduleRiskAssessment.riskIndicators",
      "ScheduleRiskAssessment.riskExplanation",
      "ScheduleRiskAssessment.assessedAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "ScheduleRiskAssessment.projectId"
      },
      {
        "name": "workTaskId",
        "type": "string",
        "required": true,
        "fieldRef": "ScheduleRiskAssessment.workTaskId"
      },
      {
        "name": "taskStatus",
        "type": "string",
        "required": true,
        "fieldRef": "ScheduleRiskAssessment.taskStatus"
      },
      {
        "name": "dueDate",
        "type": "string",
        "required": true,
        "fieldRef": "ScheduleRiskAssessment.dueDate"
      },
      {
        "name": "progressPercent",
        "type": "number",
        "required": false,
        "fieldRef": "ScheduleRiskAssessment.progressPercent"
      },
      {
        "name": "riskIndicators",
        "type": "string",
        "required": true,
        "fieldRef": "ScheduleRiskAssessment.riskIndicators"
      },
      {
        "name": "riskExplanation",
        "type": "string",
        "required": true,
        "fieldRef": "ScheduleRiskAssessment.riskExplanation"
      },
      {
        "name": "assessedAt",
        "type": "string",
        "required": true,
        "fieldRef": "ScheduleRiskAssessment.assessedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "scheduleRiskAssessmentProjectId",
      "fieldRef": "ScheduleRiskAssessment.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Avaliação de risco de atraso"
    }
  ],
  "pageId": "generateAndPublishProjectStatusReport",
  "commandName": "qryInspectScheduleRiskAssessment",
  "bffName": "qryInspectScheduleRiskAssessment"
} as const;

export default operationInspectScheduleRiskAssessment;
