/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/statusReportCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace statusReportCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListStatusReport (query) — Output kind=array; route buildFlowFsm.statusReportCatalogue.qryListStatusReport.
export interface QryListStatusReportInput {}
export interface QryListStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const qryListStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.qryListStatusReport' as const;

// bffCall cmdCreateStatusReport (command) — Output kind=object; route buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport.
export interface CmdCreateStatusReportInput {
  projectProjectId: string;
  projectExecutionOverviewProjectId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}
export interface CmdCreateStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const cmdCreateStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport' as const;

// bffCall cmdUpdateStatusReport (command) — Output kind=object; route buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport.
export interface CmdUpdateStatusReportInput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt?: string;
  publishedByUserId?: string;
  withdrawnAt?: string;
}
export interface CmdUpdateStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const cmdUpdateStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport' as const;

// bffCall cmdDeleteStatusReport (command) — Output kind=object; route buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport.
export interface CmdDeleteStatusReportInput {
  statusReportId: string;
}
export interface CmdDeleteStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const cmdDeleteStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport' as const;

// bffCall qryProjectPicker (query) — Output kind=array; route buildFlowFsm.statusReportCatalogue.qryProjectPicker.
export interface QryProjectPickerInput {}
export interface QryProjectPickerOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryProjectPickerRoute = 'buildFlowFsm.statusReportCatalogue.qryProjectPicker' as const;
