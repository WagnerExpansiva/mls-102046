/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/generateAndPublishProjectStatusReport.defs.ts" enhancement="_blank"/>

export const generateAndPublishProjectStatusReportWorkspace = {
  "workspaceId": "generateAndPublishProjectStatusReport",
  "title": "Gerar e publicar relatório de status",
  "actors": [
    "projectManager"
  ],
  "kind": "workflow",
  "entity": "StatusReport",
  "workflowId": "statusReportLifecycle",
  "bffCalls": [
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject"
    },
    {
      "bffId": "qryInspectProjectExecutionOverview",
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
      "route": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview"
    },
    {
      "bffId": "qryInspectScheduleRiskAssessment",
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
      "route": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment"
    },
    {
      "bffId": "cmdCreateStatusReport",
      "kind": "command",
      "uses": [
        {
          "operationId": "createStatusReport"
        }
      ],
      "input": [
        {
          "name": "projectProjectId",
          "from": "createStatusReport.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "projectExecutionOverviewProjectId",
          "from": "createStatusReport.projectExecutionOverviewProjectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryLocateProject",
          "type": "string"
        },
        {
          "name": "title",
          "from": "createStatusReport.title",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "content",
          "from": "createStatusReport.content",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "communicatedRisks",
          "from": "createStatusReport.communicatedRisks",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "generatedByUserId",
          "from": "createStatusReport.generatedByUserId",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "publishedByUserId",
          "from": "createStatusReport.publishedByUserId",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "statusReportId",
            "from": "createStatusReport.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "createStatusReport.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createStatusReport.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "createStatusReport.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "createStatusReport.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "createStatusReport.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "createStatusReport.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "createStatusReport.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "createStatusReport.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "createStatusReport.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "createStatusReport.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport"
    },
    {
      "bffId": "cmdPublishStatusReport",
      "kind": "command",
      "uses": [
        {
          "operationId": "publishStatusReport"
        }
      ],
      "input": [
        {
          "name": "projectProjectId",
          "from": "publishStatusReport.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "projectExecutionOverviewProjectId",
          "from": "publishStatusReport.projectExecutionOverviewProjectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryLocateProject",
          "type": "string"
        },
        {
          "name": "statusReportStatusReportId",
          "from": "publishStatusReport.statusReportStatusReportId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "status",
          "from": "publishStatusReport.status",
          "required": true,
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "statusReportId",
            "from": "publishStatusReport.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "publishStatusReport.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "publishStatusReport.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "publishStatusReport.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "publishStatusReport.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "publishStatusReport.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "publishStatusReport.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "publishStatusReport.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "publishStatusReport.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "publishStatusReport.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "publishStatusReport.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport"
    },
    {
      "bffId": "cmdHandoffStatusReportToClient",
      "kind": "command",
      "uses": [
        {
          "operationId": "handoffStatusReportToClient"
        }
      ],
      "input": [
        {
          "name": "statusReportStatusReportId",
          "from": "handoffStatusReportToClient.statusReportStatusReportId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "title",
          "from": "handoffStatusReportToClient.title",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "content",
          "from": "handoffStatusReportToClient.content",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "communicatedRisks",
          "from": "handoffStatusReportToClient.communicatedRisks",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "generatedByUserId",
          "from": "handoffStatusReportToClient.generatedByUserId",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "publishedByUserId",
          "from": "handoffStatusReportToClient.publishedByUserId",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "statusReportId",
            "from": "handoffStatusReportToClient.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "handoffStatusReportToClient.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "handoffStatusReportToClient.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "handoffStatusReportToClient.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "handoffStatusReportToClient.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "handoffStatusReportToClient.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "handoffStatusReportToClient.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "handoffStatusReportToClient.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "handoffStatusReportToClient.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "handoffStatusReportToClient.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "handoffStatusReportToClient.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient"
    }
  ],
  "sections": [
    {
      "sectionId": "locateProject",
      "intent": "Uma obra está selecionada para comunicação de status.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "inspectProjectExecutionOverview",
      "intent": "Tarefas, horas e materiais da obra estão consolidados.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectProjectExecutionOverview"
        }
      ]
    },
    {
      "sectionId": "inspectScheduleRiskAssessment",
      "intent": "Tarefas em risco e seus indicadores estão identificados.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectScheduleRiskAssessment"
        }
      ]
    },
    {
      "sectionId": "createStatusReport",
      "intent": "Um relatório baseado nos dados da obra fica gerado para revisão.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateStatusReport"
        }
      ]
    },
    {
      "sectionId": "publishStatusReport",
      "intent": "O relatório fica aprovado para comunicação ao cliente.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdPublishStatusReport"
        }
      ]
    },
    {
      "sectionId": "handoffStatusReportToClient",
      "intent": "O cliente recebe o relatório publicado.",
      "organisms": [
        {
          "role": "contextualAction",
          "action": "cmdHandoffStatusReportToClient"
        }
      ]
    }
  ],
  "operationIds": [
    "createStatusReport",
    "handoffStatusReportToClient",
    "inspectProjectExecutionOverview",
    "inspectScheduleRiskAssessment",
    "locateProject",
    "publishStatusReport"
  ],
  "purpose": "Produzir comunicação profissional sobre a obra, incluindo riscos de atraso, e disponibilizá-la ao cliente.",
  "presentation": {
    "categoryRef": "approvalWorkflow",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:b19034db"
} as const;

export default generateAndPublishProjectStatusReportWorkspace;
