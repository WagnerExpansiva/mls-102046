/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/projectExecutionOverviewView.defs.ts" enhancement="_blank"/>

export const projectExecutionOverviewViewWorkspace = {
  "workspaceId": "projectExecutionOverviewView",
  "title": "Visão consolidada de execução da obra",
  "actors": [
    "projectManager"
  ],
  "kind": "landing",
  "entity": "ProjectExecutionOverview",
  "bffCalls": [
    {
      "bffId": "qryProjectExecutionOverviewView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectExecutionOverview"
        }
      ],
      "input": [
        {
          "name": "projectExecutionOverviewProjectId",
          "from": "inspectProjectExecutionOverview.projectExecutionOverviewProjectId",
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
            "from": "inspectProjectExecutionOverview.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectName",
            "from": "inspectProjectExecutionOverview.projectName",
            "type": "string",
            "required": true
          },
          {
            "name": "projectStatus",
            "from": "inspectProjectExecutionOverview.projectStatus",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskIds",
            "from": "inspectProjectExecutionOverview.workTaskIds",
            "type": "string",
            "required": false
          },
          {
            "name": "taskSummary",
            "from": "inspectProjectExecutionOverview.taskSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "upcomingCommitments",
            "from": "inspectProjectExecutionOverview.upcomingCommitments",
            "type": "string",
            "required": true
          },
          {
            "name": "timeLogIds",
            "from": "inspectProjectExecutionOverview.timeLogIds",
            "type": "string",
            "required": false
          },
          {
            "name": "totalLoggedHours",
            "from": "inspectProjectExecutionOverview.totalLoggedHours",
            "type": "number",
            "required": true
          },
          {
            "name": "materialUsageIds",
            "from": "inspectProjectExecutionOverview.materialUsageIds",
            "type": "string",
            "required": false
          },
          {
            "name": "materialUsageSummary",
            "from": "inspectProjectExecutionOverview.materialUsageSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "actualLaborCost",
            "from": "inspectProjectExecutionOverview.actualLaborCost",
            "type": "number",
            "required": true
          },
          {
            "name": "actualMaterialCost",
            "from": "inspectProjectExecutionOverview.actualMaterialCost",
            "type": "number",
            "required": true
          },
          {
            "name": "actualCost",
            "from": "inspectProjectExecutionOverview.actualCost",
            "type": "number",
            "required": true
          },
          {
            "name": "budgetAmount",
            "from": "inspectProjectExecutionOverview.budgetAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "costVariance",
            "from": "inspectProjectExecutionOverview.costVariance",
            "type": "number",
            "required": true
          },
          {
            "name": "changeOrderIds",
            "from": "inspectProjectExecutionOverview.changeOrderIds",
            "type": "string",
            "required": false
          },
          {
            "name": "changeOrderImpactSummary",
            "from": "inspectProjectExecutionOverview.changeOrderImpactSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "calculatedAt",
            "from": "inspectProjectExecutionOverview.calculatedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView"
    }
  ],
  "sections": [
    {
      "sectionId": "overview",
      "intent": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryProjectExecutionOverviewView"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectProjectExecutionOverview"
  ],
  "purpose": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter",
    "confidence": 10,
    "classificationNote": "Derived from the projection tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:3c34d70d"
} as const;

export default projectExecutionOverviewViewWorkspace;
