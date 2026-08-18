/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/registerRepositories.ts" enhancement="_blank"/>

// Composition root — generated deterministically by agentCbRegister; do not edit by hand.
// The 102034 moduleRegistry imports this file through the persistenceModules[].tableDefsDir
// config link before loading the module controllers, so usecases can resolveRepository().
import { registerRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import { createChangeOrderRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.js';
import { createChangeOrderDecisionRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecisionRepositoryAdapter.js';
import { createClientRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientRepositoryAdapter.js';
import { createClientBillingSummaryRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummaryRepositoryAdapter.js';
import { createClientPortalAccessRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccessRepositoryAdapter.js';
import { createFieldCoordinatorRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinatorRepositoryAdapter.js';
import { createFieldWorkerRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldWorkerRepositoryAdapter.js';
import { createInventoryBalanceRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalanceRepositoryAdapter.js';
import { createInventoryItemRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.js';
import { createInvoiceRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.js';
import { createInvoiceChangeOrderRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrderRepositoryAdapter.js';
import { createMaterialUsageRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.js';
import { createPlatformUserRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUserRepositoryAdapter.js';
import { createProjectRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.js';
import { createProjectCoordinationAssignmentRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignmentRepositoryAdapter.js';
import { createProjectDashboardRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectDashboardRepositoryAdapter.js';
import { createProjectExecutionOverviewRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectExecutionOverviewRepositoryAdapter.js';
import { createProjectTimelineRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimelineRepositoryAdapter.js';
import { createScheduleRiskAssessmentRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessmentRepositoryAdapter.js';
import { createStatusReportRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.js';
import { createTimeLogRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.js';
import { createWorkTaskRepositoryAdapter } from '/_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.js';

registerRepository('ChangeOrder', createChangeOrderRepositoryAdapter);
registerRepository('ChangeOrderDecision', createChangeOrderDecisionRepositoryAdapter);
registerRepository('Client', createClientRepositoryAdapter);
registerRepository('ClientBillingSummary', createClientBillingSummaryRepositoryAdapter);
registerRepository('ClientPortalAccess', createClientPortalAccessRepositoryAdapter);
registerRepository('FieldCoordinator', createFieldCoordinatorRepositoryAdapter);
registerRepository('FieldWorker', createFieldWorkerRepositoryAdapter);
registerRepository('InventoryBalance', createInventoryBalanceRepositoryAdapter);
registerRepository('InventoryItem', createInventoryItemRepositoryAdapter);
registerRepository('Invoice', createInvoiceRepositoryAdapter);
registerRepository('InvoiceChangeOrder', createInvoiceChangeOrderRepositoryAdapter);
registerRepository('MaterialUsage', createMaterialUsageRepositoryAdapter);
registerRepository('PlatformUser', createPlatformUserRepositoryAdapter);
registerRepository('Project', createProjectRepositoryAdapter);
registerRepository('ProjectCoordinationAssignment', createProjectCoordinationAssignmentRepositoryAdapter);
registerRepository('ProjectDashboard', createProjectDashboardRepositoryAdapter);
registerRepository('ProjectExecutionOverview', createProjectExecutionOverviewRepositoryAdapter);
registerRepository('ProjectTimeline', createProjectTimelineRepositoryAdapter);
registerRepository('ScheduleRiskAssessment', createScheduleRiskAssessmentRepositoryAdapter);
registerRepository('StatusReport', createStatusReportRepositoryAdapter);
registerRepository('TimeLog', createTimeLogRepositoryAdapter);
registerRepository('WorkTask', createWorkTaskRepositoryAdapter);
