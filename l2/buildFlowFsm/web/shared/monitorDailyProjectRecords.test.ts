/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmMonitorDailyProjectRecordsBase } from '/_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.js';
import type { QryInspectProjectExecutionOverviewInput, QryInspectProjectExecutionOverviewOutput, QryInspectProjectMaterialUsagesInput, QryInspectProjectMaterialUsagesOutput, QryInspectProjectTimeLogsInput, QryInspectProjectTimeLogsOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/monitorDailyProjectRecords.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmMonitorDailyProjectRecordsBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_qryInspectProjectTimeLogsState = Assert<Assignable<typeof page.qryInspectProjectTimeLogsState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectProjectTimeLogsTimeLogTimeLogId = Assert<Assignable<typeof page.qryInspectProjectTimeLogsTimeLogTimeLogId, string | QryInspectProjectTimeLogsInput["timeLogTimeLogId"]>>;
type _State_qryInspectProjectTimeLogsData = Assert<Assignable<typeof page.qryInspectProjectTimeLogsData, QryInspectProjectTimeLogsOutput | null>>;
type _State_qryInspectProjectMaterialUsagesState = Assert<Assignable<typeof page.qryInspectProjectMaterialUsagesState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId = Assert<Assignable<typeof page.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId, string | QryInspectProjectMaterialUsagesInput["materialUsageMaterialUsageId"]>>;
type _State_qryInspectProjectMaterialUsagesData = Assert<Assignable<typeof page.qryInspectProjectMaterialUsagesData, QryInspectProjectMaterialUsagesOutput | null>>;
type _State_qryInspectProjectExecutionOverviewState = Assert<Assignable<typeof page.qryInspectProjectExecutionOverviewState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId, string | QryInspectProjectExecutionOverviewInput["projectExecutionOverviewProjectId"]>>;
type _State_qryInspectProjectExecutionOverviewData = Assert<Assignable<typeof page.qryInspectProjectExecutionOverviewData, QryInspectProjectExecutionOverviewOutput | null>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectProjectTimeLogs = Assert<Assignable<typeof page.loadQryInspectProjectTimeLogs, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectTimeLogsClick = Assert<Assignable<typeof page.handleQryInspectProjectTimeLogsClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectProjectMaterialUsages = Assert<Assignable<typeof page.loadQryInspectProjectMaterialUsages, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectMaterialUsagesClick = Assert<Assignable<typeof page.handleQryInspectProjectMaterialUsagesClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectProjectExecutionOverview = Assert<Assignable<typeof page.loadQryInspectProjectExecutionOverview, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectExecutionOverviewClick = Assert<Assignable<typeof page.handleQryInspectProjectExecutionOverviewClick, (...args: any[]) => unknown>>;
type _Action_setQryInspectProjectTimeLogsTimeLogTimeLogId = Assert<Assignable<typeof page.setQryInspectProjectTimeLogsTimeLogTimeLogId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectTimeLogsTimeLogTimeLogIdChange = Assert<Assignable<typeof page.handleQryInspectProjectTimeLogsTimeLogTimeLogIdChange, (...args: any[]) => unknown>>;
type _Action_setQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId = Assert<Assignable<typeof page.setQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageIdChange = Assert<Assignable<typeof page.handleQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageIdChange, (...args: any[]) => unknown>>;
type _Action_setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange = Assert<Assignable<typeof page.handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange, (...args: any[]) => unknown>>;

export {};