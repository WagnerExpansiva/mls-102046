/// <mls fileReference="_102046_/l5/buildFlowFsm/todoBackend.defs.ts" enhancement="_blank"/>

import type { Ns4L5TodoBackendArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmTodoBackend = {
  "schemaVersion": "2026-08-13-ns4-todo-backend-v1",
  "layer": "backend",
  "moduleName": "buildFlowFsm",
  "owners": [
    {
      "ownerType": "useCase",
      "ownerId": "approveChangeOrderDecision",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createChangeOrderDecision",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createClientPortalAccess",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createInventoryBalance",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createInventoryItem",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createInvoice",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createInvoiceChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createMaterialUsage",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createProject",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createProjectCoordinationAssignment",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createStatusReport",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createTimeLog",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "createWorkTask",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "declineChangeOrderDecision",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteChangeOrderDecision",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteClientPortalAccess",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteInventoryBalance",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteInventoryItem",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteInvoice",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteInvoiceChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteMaterialUsage",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteProject",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteProjectCoordinationAssignment",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteStatusReport",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteTimeLog",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "deleteWorkTask",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffApprovedChangeOrderToBilling",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffChangeOrderToClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffChangeOrderToProjectManager",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffDeclinedChangeOrderToFieldCoordinator",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffInvoiceToClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffMaterialUsageToFieldCoordinator",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffProjectToFieldCoordinator",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffStatusReportToClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffTimeLogToFieldCoordinator",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffWorkTaskProgressToFieldCoordinator",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "handoffWorkTaskToFieldWorker",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectApprovedChangeOrders",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectClientBillingSummary",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectProjectDashboard",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectProjectExecutionOverview",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectProjectMaterialUsages",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectProjectTimeline",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectProjectTimeLogs",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectScheduleRiskAssessment",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "inspectStatusReport",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listChangeOrderDecision",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listClientPortalAccess",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listInventoryBalance",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listInventoryItem",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listInvoice",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listInvoiceChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listMaterialUsage",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listProject",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listProjectCoordinationAssignment",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listStatusReport",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listTimeLog",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "listWorkTask",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "locateChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "locateClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "locateFieldWorker",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "locateInventoryItem",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "locateProject",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "locateWorkTask",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "publishStatusReport",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateChangeOrderDecision",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateClient",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateClientPortalAccess",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateInventoryBalance",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateInventoryItem",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateInvoice",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateInvoiceChangeOrder",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateMaterialUsage",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateProject",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateProjectCoordinationAssignment",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateStatusReport",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateTimeLog",
      "statusBackend": "done"
    },
    {
      "ownerType": "useCase",
      "ownerId": "updateWorkTask",
      "statusBackend": "done"
    }
  ]
} as const satisfies Ns4L5TodoBackendArtifact;

export type BuildFlowFsmTodoBackendType = typeof buildFlowFsmTodoBackend;

export default buildFlowFsmTodoBackend;
