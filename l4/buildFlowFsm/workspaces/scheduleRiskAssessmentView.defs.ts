/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/scheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

export const scheduleRiskAssessmentViewWorkspace = {
  "workspaceId": "scheduleRiskAssessmentView",
  "title": "Avaliação de risco de atraso",
  "actors": [
    "projectManager"
  ],
  "kind": "landing",
  "entity": "ScheduleRiskAssessment",
  "bffCalls": [
    {
      "bffId": "qryScheduleRiskAssessmentView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectScheduleRiskAssessment"
        }
      ],
      "input": [
        {
          "name": "scheduleRiskAssessmentProjectId",
          "from": "inspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId",
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
            "from": "inspectScheduleRiskAssessment.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskId",
            "from": "inspectScheduleRiskAssessment.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "taskStatus",
            "from": "inspectScheduleRiskAssessment.taskStatus",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "inspectScheduleRiskAssessment.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "progressPercent",
            "from": "inspectScheduleRiskAssessment.progressPercent",
            "type": "number",
            "required": false
          },
          {
            "name": "riskIndicators",
            "from": "inspectScheduleRiskAssessment.riskIndicators",
            "type": "string",
            "required": true
          },
          {
            "name": "riskExplanation",
            "from": "inspectScheduleRiskAssessment.riskExplanation",
            "type": "string",
            "required": true
          },
          {
            "name": "assessedAt",
            "from": "inspectScheduleRiskAssessment.assessedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView"
    }
  ],
  "sections": [
    {
      "sectionId": "overview",
      "intent": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryScheduleRiskAssessmentView"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectScheduleRiskAssessment"
  ],
  "purpose": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter",
    "confidence": 10,
    "classificationNote": "Derived from the projection tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:39845517"
} as const;

export default scheduleRiskAssessmentViewWorkspace;
