/// <mls fileReference="_102046_/l5/buildFlowFsm/todoFrontend.defs.ts" enhancement="_blank"/>

import type { Ns4L5TodoFrontendArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmTodoFrontend = {
  "schemaVersion": "2026-08-13-ns4-todo-frontend-v1",
  "layer": "frontend",
  "moduleName": "buildFlowFsm",
  "owners": [
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision",
      "workspaceId": "approveChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling",
      "workspaceId": "approveChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.approveChangeOrder.qryClientPicker",
      "workspaceId": "approveChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.approveChangeOrder.qryLocateChangeOrder",
      "workspaceId": "approveChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.assignWorkTask.cmdCreateWorkTask",
      "workspaceId": "assignWorkTask",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker",
      "workspaceId": "assignWorkTask",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.assignWorkTask.qryInspectProjectTimeline",
      "workspaceId": "assignWorkTask",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.assignWorkTask.qryLocateFieldWorker",
      "workspaceId": "assignWorkTask",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.assignWorkTask.qryLocateProject",
      "workspaceId": "assignWorkTask",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder",
      "workspaceId": "changeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder",
      "workspaceId": "changeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
      "workspaceId": "changeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderCatalogue.qryClientPicker",
      "workspaceId": "changeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderCatalogue.qryListChangeOrder",
      "workspaceId": "changeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderCatalogue.qryProjectPicker",
      "workspaceId": "changeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision",
      "workspaceId": "changeOrderDecisionCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision",
      "workspaceId": "changeOrderDecisionCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision",
      "workspaceId": "changeOrderDecisionCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker",
      "workspaceId": "changeOrderDecisionCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision",
      "workspaceId": "changeOrderDecisionCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView",
      "workspaceId": "clientBillingSummaryView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientCatalogue.cmdCreateClient",
      "workspaceId": "clientCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientCatalogue.cmdDeleteClient",
      "workspaceId": "clientCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientCatalogue.cmdUpdateClient",
      "workspaceId": "clientCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientCatalogue.qryListClient",
      "workspaceId": "clientCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess",
      "workspaceId": "clientPortalAccessCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess",
      "workspaceId": "clientPortalAccessCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess",
      "workspaceId": "clientPortalAccessCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker",
      "workspaceId": "clientPortalAccessCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess",
      "workspaceId": "clientPortalAccessCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders",
      "workspaceId": "consultApprovedProjectChangeOrders",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary",
      "workspaceId": "consultApprovedProjectChangeOrders",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject",
      "workspaceId": "consultApprovedProjectChangeOrders",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary",
      "workspaceId": "consultClientProjectUpdates",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport",
      "workspaceId": "consultClientProjectUpdates",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.consultClientProjectUpdates.qryLocateProject",
      "workspaceId": "consultClientProjectUpdates",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision",
      "workspaceId": "declineChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator",
      "workspaceId": "declineChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.declineChangeOrder.qryClientPicker",
      "workspaceId": "declineChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.declineChangeOrder.qryLocateChangeOrder",
      "workspaceId": "declineChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient",
      "workspaceId": "forwardChangeOrderForClientApproval",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder",
      "workspaceId": "forwardChangeOrderForClientApproval",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport",
      "workspaceId": "generateAndPublishProjectStatusReport",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient",
      "workspaceId": "generateAndPublishProjectStatusReport",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport",
      "workspaceId": "generateAndPublishProjectStatusReport",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview",
      "workspaceId": "generateAndPublishProjectStatusReport",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment",
      "workspaceId": "generateAndPublishProjectStatusReport",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject",
      "workspaceId": "generateAndPublishProjectStatusReport",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
      "workspaceId": "inventoryBalanceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
      "workspaceId": "inventoryBalanceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
      "workspaceId": "inventoryBalanceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker",
      "workspaceId": "inventoryBalanceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance",
      "workspaceId": "inventoryBalanceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem",
      "workspaceId": "inventoryItemCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem",
      "workspaceId": "inventoryItemCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "workspaceId": "inventoryItemCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem",
      "workspaceId": "inventoryItemCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceCatalogue.cmdCreateInvoice",
      "workspaceId": "invoiceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice",
      "workspaceId": "invoiceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
      "workspaceId": "invoiceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceCatalogue.qryClientPicker",
      "workspaceId": "invoiceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceCatalogue.qryListInvoice",
      "workspaceId": "invoiceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceCatalogue.qryProjectPicker",
      "workspaceId": "invoiceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder",
      "workspaceId": "invoiceChangeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder",
      "workspaceId": "invoiceChangeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder",
      "workspaceId": "invoiceChangeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker",
      "workspaceId": "invoiceChangeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker",
      "workspaceId": "invoiceChangeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder",
      "workspaceId": "invoiceChangeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.issueProjectInvoice.cmdCreateInvoice",
      "workspaceId": "issueProjectInvoice",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient",
      "workspaceId": "issueProjectInvoice",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary",
      "workspaceId": "issueProjectInvoice",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.issueProjectInvoice.qryLocateClient",
      "workspaceId": "issueProjectInvoice",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.issueProjectInvoice.qryLocateProject",
      "workspaceId": "issueProjectInvoice",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.materialUsageCatalogue.qryProjectPicker",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview",
      "workspaceId": "monitorDailyProjectRecords",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages",
      "workspaceId": "monitorDailyProjectRecords",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs",
      "workspaceId": "monitorDailyProjectRecords",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.monitorDailyProjectRecords.qryLocateProject",
      "workspaceId": "monitorDailyProjectRecords",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "workspaceId": "projectCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCatalogue.cmdDeleteProject",
      "workspaceId": "projectCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "workspaceId": "projectCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCatalogue.qryClientPicker",
      "workspaceId": "projectCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCatalogue.qryListProject",
      "workspaceId": "projectCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment",
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment",
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment",
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment",
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker",
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectDashboardView.qryProjectDashboardView",
      "workspaceId": "projectDashboardView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView",
      "workspaceId": "projectExecutionOverviewView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryClientBillingSummaryView",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryListChangeOrder",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryListInvoice",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryListMaterialUsage",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryListProject",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryListProjectCoordinationAssignment",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryListStatusReport",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryListWorkTask",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryProjectDashboardView",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryProjectExecutionOverviewView",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryProjectTimelineView",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectHub.qryScheduleRiskAssessmentView",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.projectTimelineView.qryProjectTimelineView",
      "workspaceId": "projectTimelineView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage",
      "workspaceId": "recordProjectMaterialUsage",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator",
      "workspaceId": "recordProjectMaterialUsage",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker",
      "workspaceId": "recordProjectMaterialUsage",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem",
      "workspaceId": "recordProjectMaterialUsage",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordProjectMaterialUsage.qryLocateProject",
      "workspaceId": "recordProjectMaterialUsage",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordWorkTime.cmdCreateTimeLog",
      "workspaceId": "recordWorkTime",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator",
      "workspaceId": "recordWorkTime",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordWorkTime.qryLocateFieldWorker",
      "workspaceId": "recordWorkTime",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.recordWorkTime.qryLocateWorkTask",
      "workspaceId": "recordWorkTime",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator",
      "workspaceId": "reviewProjectPortfolio",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard",
      "workspaceId": "reviewProjectPortfolio",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview",
      "workspaceId": "reviewProjectPortfolio",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.reviewProjectPortfolio.qryLocateProject",
      "workspaceId": "reviewProjectPortfolio",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView",
      "workspaceId": "scheduleRiskAssessmentView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport",
      "workspaceId": "statusReportCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport",
      "workspaceId": "statusReportCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport",
      "workspaceId": "statusReportCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.statusReportCatalogue.qryListStatusReport",
      "workspaceId": "statusReportCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.statusReportCatalogue.qryProjectPicker",
      "workspaceId": "statusReportCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder",
      "workspaceId": "submitChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager",
      "workspaceId": "submitChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.submitChangeOrder.qryLocateClient",
      "workspaceId": "submitChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.submitChangeOrder.qryLocateProject",
      "workspaceId": "submitChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog",
      "workspaceId": "timeLogCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog",
      "workspaceId": "timeLogCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog",
      "workspaceId": "timeLogCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.timeLogCatalogue.qryListTimeLog",
      "workspaceId": "timeLogCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker",
      "workspaceId": "timeLogCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator",
      "workspaceId": "updateWorkTaskProgress",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask",
      "workspaceId": "updateWorkTaskProgress",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask",
      "workspaceId": "updateWorkTaskProgress",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask",
      "workspaceId": "workTaskCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask",
      "workspaceId": "workTaskCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask",
      "workspaceId": "workTaskCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "contract",
      "ownerId": "buildFlowFsm.workTaskCatalogue.qryListWorkTask",
      "workspaceId": "workTaskCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "approveChangeOrder",
      "workspaceId": "approveChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "assignWorkTask",
      "workspaceId": "assignWorkTask",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "changeOrderCatalogue",
      "workspaceId": "changeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "changeOrderDecisionCatalogue",
      "workspaceId": "changeOrderDecisionCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "clientBillingSummaryView",
      "workspaceId": "clientBillingSummaryView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "clientCatalogue",
      "workspaceId": "clientCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "clientPortalAccessCatalogue",
      "workspaceId": "clientPortalAccessCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "consultApprovedProjectChangeOrders",
      "workspaceId": "consultApprovedProjectChangeOrders",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "consultClientProjectUpdates",
      "workspaceId": "consultClientProjectUpdates",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "declineChangeOrder",
      "workspaceId": "declineChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "forwardChangeOrderForClientApproval",
      "workspaceId": "forwardChangeOrderForClientApproval",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "generateAndPublishProjectStatusReport",
      "workspaceId": "generateAndPublishProjectStatusReport",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "inventoryBalanceCatalogue",
      "workspaceId": "inventoryBalanceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "inventoryItemCatalogue",
      "workspaceId": "inventoryItemCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "invoiceCatalogue",
      "workspaceId": "invoiceCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "invoiceChangeOrderCatalogue",
      "workspaceId": "invoiceChangeOrderCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "issueProjectInvoice",
      "workspaceId": "issueProjectInvoice",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "materialUsageCatalogue",
      "workspaceId": "materialUsageCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "monitorDailyProjectRecords",
      "workspaceId": "monitorDailyProjectRecords",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "projectCatalogue",
      "workspaceId": "projectCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "projectCoordinationAssignmentCatalogue",
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "projectDashboardView",
      "workspaceId": "projectDashboardView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "projectExecutionOverviewView",
      "workspaceId": "projectExecutionOverviewView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "projectHub",
      "workspaceId": "projectHub",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "projectTimelineView",
      "workspaceId": "projectTimelineView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "recordProjectMaterialUsage",
      "workspaceId": "recordProjectMaterialUsage",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "recordWorkTime",
      "workspaceId": "recordWorkTime",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "reviewProjectPortfolio",
      "workspaceId": "reviewProjectPortfolio",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "scheduleRiskAssessmentView",
      "workspaceId": "scheduleRiskAssessmentView",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "statusReportCatalogue",
      "workspaceId": "statusReportCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "submitChangeOrder",
      "workspaceId": "submitChangeOrder",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "timeLogCatalogue",
      "workspaceId": "timeLogCatalogue",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "updateWorkTaskProgress",
      "workspaceId": "updateWorkTaskProgress",
      "statusFrontend": "done"
    },
    {
      "ownerType": "workspace",
      "ownerId": "workTaskCatalogue",
      "workspaceId": "workTaskCatalogue",
      "statusFrontend": "done"
    }
  ]
} as const satisfies Ns4L5TodoFrontendArtifact;

export type BuildFlowFsmTodoFrontendType = typeof buildFlowFsmTodoFrontend;

export default buildFlowFsmTodoFrontend;
