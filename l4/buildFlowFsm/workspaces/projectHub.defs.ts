/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/projectHub.defs.ts" enhancement="_blank"/>

export const projectHubWorkspace = {
  "workspaceId": "projectHub",
  "title": "Obra",
  "actors": [
    "billingStaff",
    "client",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "kind": "landing",
  "entity": "Project",
  "bffCalls": [
    {
      "bffId": "qryListProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "listProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "listProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "listProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "listProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "listProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "listProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "listProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryListProject"
    },
    {
      "bffId": "qryClientBillingSummaryView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectClientBillingSummary"
        }
      ],
      "input": [
        {
          "name": "clientBillingSummaryClientId",
          "from": "inspectClientBillingSummary.clientBillingSummaryClientId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientId",
            "from": "inspectClientBillingSummary.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "inspectClientBillingSummary.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "approvedChangeOrderReferences",
            "from": "inspectClientBillingSummary.approvedChangeOrderReferences",
            "type": "string",
            "required": false
          },
          {
            "name": "invoiceReferences",
            "from": "inspectClientBillingSummary.invoiceReferences",
            "type": "string",
            "required": false
          },
          {
            "name": "approvedChangeOrderAmount",
            "from": "inspectClientBillingSummary.approvedChangeOrderAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "billableAmount",
            "from": "inspectClientBillingSummary.billableAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "invoicedAmount",
            "from": "inspectClientBillingSummary.invoicedAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "clientAvailableAmount",
            "from": "inspectClientBillingSummary.clientAvailableAmount",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryClientBillingSummaryView"
    },
    {
      "bffId": "qryProjectDashboardView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectDashboard"
        }
      ],
      "input": [],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "activeProjects",
            "from": "inspectProjectDashboard.activeProjects",
            "type": "string",
            "required": true
          },
          {
            "name": "activeProjectCount",
            "from": "inspectProjectDashboard.activeProjectCount",
            "type": "number",
            "required": true
          },
          {
            "name": "totalBudget",
            "from": "inspectProjectDashboard.totalBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "totalActualCost",
            "from": "inspectProjectDashboard.totalActualCost",
            "type": "number",
            "required": true
          },
          {
            "name": "budgetVariance",
            "from": "inspectProjectDashboard.budgetVariance",
            "type": "number",
            "required": true
          },
          {
            "name": "costAttentionProjects",
            "from": "inspectProjectDashboard.costAttentionProjects",
            "type": "string",
            "required": true
          },
          {
            "name": "upcomingTasks",
            "from": "inspectProjectDashboard.upcomingTasks",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryProjectDashboardView"
    },
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
      "route": "buildFlowFsm.projectHub.qryProjectExecutionOverviewView"
    },
    {
      "bffId": "qryProjectTimelineView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectTimeline"
        }
      ],
      "input": [
        {
          "name": "projectTimelineProjectId",
          "from": "inspectProjectTimeline.projectTimelineProjectId",
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
            "from": "inspectProjectTimeline.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "workTasks",
            "from": "inspectProjectTimeline.workTasks",
            "type": "string",
            "required": false
          },
          {
            "name": "scheduleEntries",
            "from": "inspectProjectTimeline.scheduleEntries",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryProjectTimelineView"
    },
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
      "route": "buildFlowFsm.projectHub.qryScheduleRiskAssessmentView"
    },
    {
      "bffId": "qryListChangeOrder",
      "kind": "query",
      "uses": [
        {
          "operationId": "listChangeOrder"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "listChangeOrder.$items.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "listChangeOrder.$items.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "listChangeOrder.$items.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "listChangeOrder.$items.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "listChangeOrder.$items.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "listChangeOrder.$items.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "listChangeOrder.$items.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "listChangeOrder.$items.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "listChangeOrder.$items.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "listChangeOrder.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryListChangeOrder"
    },
    {
      "bffId": "qryListInvoice",
      "kind": "query",
      "uses": [
        {
          "operationId": "listInvoice"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "invoiceId",
            "from": "listInvoice.$items.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listInvoice.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listInvoice.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "listInvoice.$items.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "listInvoice.$items.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "listInvoice.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryListInvoice"
    },
    {
      "bffId": "qryListMaterialUsage",
      "kind": "query",
      "uses": [
        {
          "operationId": "listMaterialUsage"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "materialUsageId",
            "from": "listMaterialUsage.$items.materialUsageId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listMaterialUsage.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listMaterialUsage.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "listMaterialUsage.$items.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryBalanceId",
            "from": "listMaterialUsage.$items.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "quantity",
            "from": "listMaterialUsage.$items.quantity",
            "type": "number",
            "required": true
          },
          {
            "name": "usageDescription",
            "from": "listMaterialUsage.$items.usageDescription",
            "type": "string",
            "required": true
          },
          {
            "name": "consumedOn",
            "from": "listMaterialUsage.$items.consumedOn",
            "type": "string",
            "required": true
          },
          {
            "name": "unitCostBasis",
            "from": "listMaterialUsage.$items.unitCostBasis",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryListMaterialUsage"
    },
    {
      "bffId": "qryListProjectCoordinationAssignment",
      "kind": "query",
      "uses": [
        {
          "operationId": "listProjectCoordinationAssignment"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectCoordinationAssignmentId",
            "from": "listProjectCoordinationAssignment.$items.projectCoordinationAssignmentId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listProjectCoordinationAssignment.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldCoordinatorId",
            "from": "listProjectCoordinationAssignment.$items.fieldCoordinatorId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listProjectCoordinationAssignment.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryListProjectCoordinationAssignment"
    },
    {
      "bffId": "qryListStatusReport",
      "kind": "query",
      "uses": [
        {
          "operationId": "listStatusReport"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "statusReportId",
            "from": "listStatusReport.$items.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listStatusReport.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listStatusReport.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "listStatusReport.$items.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "listStatusReport.$items.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "listStatusReport.$items.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "listStatusReport.$items.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "listStatusReport.$items.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "listStatusReport.$items.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "listStatusReport.$items.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "listStatusReport.$items.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryListStatusReport"
    },
    {
      "bffId": "qryListWorkTask",
      "kind": "query",
      "uses": [
        {
          "operationId": "listWorkTask"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "workTaskId",
            "from": "listWorkTask.$items.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listWorkTask.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "assignedFieldWorkerId",
            "from": "listWorkTask.$items.assignedFieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "listWorkTask.$items.description",
            "type": "string",
            "required": true
          },
          {
            "name": "dueDate",
            "from": "listWorkTask.$items.dueDate",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listWorkTask.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "progressUpdate",
            "from": "listWorkTask.$items.progressUpdate",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.projectHub.qryListWorkTask"
    }
  ],
  "sections": [
    {
      "sectionId": "collection",
      "intent": "Carteira e busca.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListProject"
        }
      ]
    },
    {
      "sectionId": "record",
      "intent": "Registro selecionado e o que gira em volta dele.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryClientBillingSummaryView"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryProjectDashboardView"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryProjectExecutionOverviewView"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryProjectTimelineView"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryScheduleRiskAssessmentView"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryListChangeOrder"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryListInvoice"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryListMaterialUsage"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryListProjectCoordinationAssignment"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryListStatusReport"
        },
        {
          "role": "detailPanel",
          "dataSource": "qryListWorkTask"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectClientBillingSummary",
    "inspectProjectDashboard",
    "inspectProjectExecutionOverview",
    "inspectProjectTimeline",
    "inspectScheduleRiskAssessment",
    "listChangeOrder",
    "listInvoice",
    "listMaterialUsage",
    "listProject",
    "listProjectCoordinationAssignment",
    "listStatusReport",
    "listWorkTask"
  ],
  "purpose": "Painel de Obra.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter",
    "confidence": 10,
    "classificationNote": "Derived from the hub tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:bf1267a1"
} as const;

export default projectHubWorkspace;
