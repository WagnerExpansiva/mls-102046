/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectHub.defs.ts" enhancement="_blank"/>

export const projectHubController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectHub",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectHub",
    "controllerName": "ProjectHubController",
    "ownerKind": "workspace",
    "workspaceId": "projectHub",
    "actors": [
      "billingStaff",
      "client",
      "fieldCoordinator",
      "fieldWorker",
      "projectManager"
    ],
    "allowedScopes": [
      "internal",
      "external",
      "internal",
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "projectHubQryListProjectHandler",
        "command": "qryListProject",
        "bffId": "qryListProject",
        "route": "buildFlowFsm.projectHub.qryListProject",
        "kind": "query",
        "usecaseRef": "listProject",
        "usecaseRefs": [
          "listProject"
        ],
        "inputTypeName": "ListProjectInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "listProject",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "listProject",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "listProject",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "address",
              "operationId": "listProject",
              "path": [
                "address"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listProject",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "authorizedBudget",
              "operationId": "listProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": true
            },
            {
              "name": "plannedStartDate",
              "operationId": "listProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": true
            },
            {
              "name": "plannedEndDate",
              "operationId": "listProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryClientBillingSummaryViewHandler",
        "command": "qryClientBillingSummaryView",
        "bffId": "qryClientBillingSummaryView",
        "route": "buildFlowFsm.projectHub.qryClientBillingSummaryView",
        "kind": "query",
        "usecaseRef": "inspectClientBillingSummary",
        "usecaseRefs": [
          "inspectClientBillingSummary"
        ],
        "inputTypeName": "InspectClientBillingSummaryInput",
        "inputContract": [
          {
            "inputId": "clientBillingSummaryClientId",
            "fieldRef": "ClientBillingSummary.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Resumo de faturamento do cliente"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "approvedChangeOrderReferences",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "approvedChangeOrderReferences"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceReferences",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "invoiceReferences"
              ],
              "fromItems": false
            },
            {
              "name": "approvedChangeOrderAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "approvedChangeOrderAmount"
              ],
              "fromItems": false
            },
            {
              "name": "billableAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "billableAmount"
              ],
              "fromItems": false
            },
            {
              "name": "invoicedAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "invoicedAmount"
              ],
              "fromItems": false
            },
            {
              "name": "clientAvailableAmount",
              "operationId": "inspectClientBillingSummary",
              "path": [
                "clientAvailableAmount"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryProjectDashboardViewHandler",
        "command": "qryProjectDashboardView",
        "bffId": "qryProjectDashboardView",
        "route": "buildFlowFsm.projectHub.qryProjectDashboardView",
        "kind": "query",
        "usecaseRef": "inspectProjectDashboard",
        "usecaseRefs": [
          "inspectProjectDashboard"
        ],
        "inputTypeName": "InspectProjectDashboardInput",
        "inputContract": [],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "activeProjects",
              "operationId": "inspectProjectDashboard",
              "path": [
                "activeProjects"
              ],
              "fromItems": false
            },
            {
              "name": "activeProjectCount",
              "operationId": "inspectProjectDashboard",
              "path": [
                "activeProjectCount"
              ],
              "fromItems": false
            },
            {
              "name": "totalBudget",
              "operationId": "inspectProjectDashboard",
              "path": [
                "totalBudget"
              ],
              "fromItems": false
            },
            {
              "name": "totalActualCost",
              "operationId": "inspectProjectDashboard",
              "path": [
                "totalActualCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetVariance",
              "operationId": "inspectProjectDashboard",
              "path": [
                "budgetVariance"
              ],
              "fromItems": false
            },
            {
              "name": "costAttentionProjects",
              "operationId": "inspectProjectDashboard",
              "path": [
                "costAttentionProjects"
              ],
              "fromItems": false
            },
            {
              "name": "upcomingTasks",
              "operationId": "inspectProjectDashboard",
              "path": [
                "upcomingTasks"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryProjectExecutionOverviewViewHandler",
        "command": "qryProjectExecutionOverviewView",
        "bffId": "qryProjectExecutionOverviewView",
        "route": "buildFlowFsm.projectHub.qryProjectExecutionOverviewView",
        "kind": "query",
        "usecaseRef": "inspectProjectExecutionOverview",
        "usecaseRefs": [
          "inspectProjectExecutionOverview"
        ],
        "inputTypeName": "InspectProjectExecutionOverviewInput",
        "inputContract": [
          {
            "inputId": "projectExecutionOverviewProjectId",
            "fieldRef": "ProjectExecutionOverview.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Visão consolidada de execução da obra"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "projectStatus",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectStatus"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "workTaskIds"
              ],
              "fromItems": false
            },
            {
              "name": "taskSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "taskSummary"
              ],
              "fromItems": false
            },
            {
              "name": "upcomingCommitments",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "upcomingCommitments"
              ],
              "fromItems": false
            },
            {
              "name": "timeLogIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "timeLogIds"
              ],
              "fromItems": false
            },
            {
              "name": "totalLoggedHours",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "totalLoggedHours"
              ],
              "fromItems": false
            },
            {
              "name": "materialUsageIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "materialUsageIds"
              ],
              "fromItems": false
            },
            {
              "name": "materialUsageSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "materialUsageSummary"
              ],
              "fromItems": false
            },
            {
              "name": "actualLaborCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualLaborCost"
              ],
              "fromItems": false
            },
            {
              "name": "actualMaterialCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualMaterialCost"
              ],
              "fromItems": false
            },
            {
              "name": "actualCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetAmount",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "budgetAmount"
              ],
              "fromItems": false
            },
            {
              "name": "costVariance",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "costVariance"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "changeOrderIds"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderImpactSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "changeOrderImpactSummary"
              ],
              "fromItems": false
            },
            {
              "name": "calculatedAt",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "calculatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryProjectTimelineViewHandler",
        "command": "qryProjectTimelineView",
        "bffId": "qryProjectTimelineView",
        "route": "buildFlowFsm.projectHub.qryProjectTimelineView",
        "kind": "query",
        "usecaseRef": "inspectProjectTimeline",
        "usecaseRefs": [
          "inspectProjectTimeline"
        ],
        "inputTypeName": "InspectProjectTimelineInput",
        "inputContract": [
          {
            "inputId": "projectTimelineProjectId",
            "fieldRef": "ProjectTimeline.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Cronograma da obra"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectProjectTimeline",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "workTasks",
              "operationId": "inspectProjectTimeline",
              "path": [
                "workTasks"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleEntries",
              "operationId": "inspectProjectTimeline",
              "path": [
                "scheduleEntries"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryScheduleRiskAssessmentViewHandler",
        "command": "qryScheduleRiskAssessmentView",
        "bffId": "qryScheduleRiskAssessmentView",
        "route": "buildFlowFsm.projectHub.qryScheduleRiskAssessmentView",
        "kind": "query",
        "usecaseRef": "inspectScheduleRiskAssessment",
        "usecaseRefs": [
          "inspectScheduleRiskAssessment"
        ],
        "inputTypeName": "InspectScheduleRiskAssessmentInput",
        "inputContract": [
          {
            "inputId": "scheduleRiskAssessmentProjectId",
            "fieldRef": "ScheduleRiskAssessment.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Avaliação de risco de atraso"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "taskStatus",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "taskStatus"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "progressPercent",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "progressPercent"
              ],
              "fromItems": false
            },
            {
              "name": "riskIndicators",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "riskIndicators"
              ],
              "fromItems": false
            },
            {
              "name": "riskExplanation",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "riskExplanation"
              ],
              "fromItems": false
            },
            {
              "name": "assessedAt",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "assessedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryListChangeOrderHandler",
        "command": "qryListChangeOrder",
        "bffId": "qryListChangeOrder",
        "route": "buildFlowFsm.projectHub.qryListChangeOrder",
        "kind": "query",
        "usecaseRef": "listChangeOrder",
        "usecaseRefs": [
          "listChangeOrder"
        ],
        "inputTypeName": "ListChangeOrderInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "changeOrderId",
              "operationId": "listChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": true
            },
            {
              "name": "clientRef",
              "operationId": "listChangeOrder",
              "path": [
                "clientRef"
              ],
              "fromItems": true
            },
            {
              "name": "projectRef",
              "operationId": "listChangeOrder",
              "path": [
                "projectRef"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "listChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "scopeImpact",
              "operationId": "listChangeOrder",
              "path": [
                "scopeImpact"
              ],
              "fromItems": true
            },
            {
              "name": "scheduleImpact",
              "operationId": "listChangeOrder",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": true
            },
            {
              "name": "changeAmount",
              "operationId": "listChangeOrder",
              "path": [
                "changeAmount"
              ],
              "fromItems": true
            },
            {
              "name": "submittedAt",
              "operationId": "listChangeOrder",
              "path": [
                "submittedAt"
              ],
              "fromItems": true
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "listChangeOrder",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryListInvoiceHandler",
        "command": "qryListInvoice",
        "bffId": "qryListInvoice",
        "route": "buildFlowFsm.projectHub.qryListInvoice",
        "kind": "query",
        "usecaseRef": "listInvoice",
        "usecaseRefs": [
          "listInvoice"
        ],
        "inputTypeName": "ListInvoiceInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "invoiceId",
              "operationId": "listInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "listInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "commercialReference",
              "operationId": "listInvoice",
              "path": [
                "commercialReference"
              ],
              "fromItems": true
            },
            {
              "name": "amount",
              "operationId": "listInvoice",
              "path": [
                "amount"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listInvoice",
              "path": [
                "status"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryListMaterialUsageHandler",
        "command": "qryListMaterialUsage",
        "bffId": "qryListMaterialUsage",
        "route": "buildFlowFsm.projectHub.qryListMaterialUsage",
        "kind": "query",
        "usecaseRef": "listMaterialUsage",
        "usecaseRefs": [
          "listMaterialUsage"
        ],
        "inputTypeName": "ListMaterialUsageInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "materialUsageId",
              "operationId": "listMaterialUsage",
              "path": [
                "materialUsageId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listMaterialUsage",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listMaterialUsage",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "inventoryItemId",
              "operationId": "listMaterialUsage",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": true
            },
            {
              "name": "inventoryBalanceId",
              "operationId": "listMaterialUsage",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": true
            },
            {
              "name": "quantity",
              "operationId": "listMaterialUsage",
              "path": [
                "quantity"
              ],
              "fromItems": true
            },
            {
              "name": "usageDescription",
              "operationId": "listMaterialUsage",
              "path": [
                "usageDescription"
              ],
              "fromItems": true
            },
            {
              "name": "consumedOn",
              "operationId": "listMaterialUsage",
              "path": [
                "consumedOn"
              ],
              "fromItems": true
            },
            {
              "name": "unitCostBasis",
              "operationId": "listMaterialUsage",
              "path": [
                "unitCostBasis"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryListProjectCoordinationAssignmentHandler",
        "command": "qryListProjectCoordinationAssignment",
        "bffId": "qryListProjectCoordinationAssignment",
        "route": "buildFlowFsm.projectHub.qryListProjectCoordinationAssignment",
        "kind": "query",
        "usecaseRef": "listProjectCoordinationAssignment",
        "usecaseRefs": [
          "listProjectCoordinationAssignment"
        ],
        "inputTypeName": "ListProjectCoordinationAssignmentInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectCoordinationAssignmentId",
              "operationId": "listProjectCoordinationAssignment",
              "path": [
                "projectCoordinationAssignmentId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listProjectCoordinationAssignment",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "fieldCoordinatorId",
              "operationId": "listProjectCoordinationAssignment",
              "path": [
                "fieldCoordinatorId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listProjectCoordinationAssignment",
              "path": [
                "status"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryListStatusReportHandler",
        "command": "qryListStatusReport",
        "bffId": "qryListStatusReport",
        "route": "buildFlowFsm.projectHub.qryListStatusReport",
        "kind": "query",
        "usecaseRef": "listStatusReport",
        "usecaseRefs": [
          "listStatusReport"
        ],
        "inputTypeName": "ListStatusReportInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "statusReportId",
              "operationId": "listStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listStatusReport",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "title",
              "operationId": "listStatusReport",
              "path": [
                "title"
              ],
              "fromItems": true
            },
            {
              "name": "content",
              "operationId": "listStatusReport",
              "path": [
                "content"
              ],
              "fromItems": true
            },
            {
              "name": "communicatedRisks",
              "operationId": "listStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": true
            },
            {
              "name": "generatedAt",
              "operationId": "listStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": true
            },
            {
              "name": "generatedByUserId",
              "operationId": "listStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": true
            },
            {
              "name": "publishedAt",
              "operationId": "listStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": true
            },
            {
              "name": "publishedByUserId",
              "operationId": "listStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": true
            },
            {
              "name": "withdrawnAt",
              "operationId": "listStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectHubQryListWorkTaskHandler",
        "command": "qryListWorkTask",
        "bffId": "qryListWorkTask",
        "route": "buildFlowFsm.projectHub.qryListWorkTask",
        "kind": "query",
        "usecaseRef": "listWorkTask",
        "usecaseRefs": [
          "listWorkTask"
        ],
        "inputTypeName": "ListWorkTaskInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "workTaskId",
              "operationId": "listWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "assignedFieldWorkerId",
              "operationId": "listWorkTask",
              "path": [
                "assignedFieldWorkerId"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "listWorkTask",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "dueDate",
              "operationId": "listWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listWorkTask",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "progressUpdate",
              "operationId": "listWorkTask",
              "path": [
                "progressUpdate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.projectHub.qryListProject",
        "handlerName": "projectHubQryListProjectHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryClientBillingSummaryView",
        "handlerName": "projectHubQryClientBillingSummaryViewHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryProjectDashboardView",
        "handlerName": "projectHubQryProjectDashboardViewHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryProjectExecutionOverviewView",
        "handlerName": "projectHubQryProjectExecutionOverviewViewHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryProjectTimelineView",
        "handlerName": "projectHubQryProjectTimelineViewHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryScheduleRiskAssessmentView",
        "handlerName": "projectHubQryScheduleRiskAssessmentViewHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryListChangeOrder",
        "handlerName": "projectHubQryListChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryListInvoice",
        "handlerName": "projectHubQryListInvoiceHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryListMaterialUsage",
        "handlerName": "projectHubQryListMaterialUsageHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryListProjectCoordinationAssignment",
        "handlerName": "projectHubQryListProjectCoordinationAssignmentHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryListStatusReport",
        "handlerName": "projectHubQryListStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.projectHub.qryListWorkTask",
        "handlerName": "projectHubQryListWorkTaskHandler"
      }
    ]
  }
} as const;

export default projectHubController;

export const pipeline = [
  {
    "id": "projectHub__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectHub.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectHub.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryListProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryClientBillingSummaryView.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryProjectDashboardView.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryProjectExecutionOverviewView.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryProjectTimelineView.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryScheduleRiskAssessmentView.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryListChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryListInvoice.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryListMaterialUsage.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryListProjectCoordinationAssignment.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryListStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listWorkTask.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectHub.qryListWorkTask.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
