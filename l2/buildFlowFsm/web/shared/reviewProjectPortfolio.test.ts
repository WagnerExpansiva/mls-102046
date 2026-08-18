/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmReviewProjectPortfolioBase } from '/_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.js';
import type { CmdHandoffProjectToFieldCoordinatorInput, CmdHandoffProjectToFieldCoordinatorOutput, QryInspectProjectDashboardOutput, QryInspectProjectExecutionOverviewInput, QryInspectProjectExecutionOverviewOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/reviewProjectPortfolio.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmReviewProjectPortfolioBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryInspectProjectDashboardState = Assert<Assignable<typeof page.qryInspectProjectDashboardState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectProjectDashboardData = Assert<Assignable<typeof page.qryInspectProjectDashboardData, QryInspectProjectDashboardOutput | null>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_qryInspectProjectExecutionOverviewState = Assert<Assignable<typeof page.qryInspectProjectExecutionOverviewState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId, string | QryInspectProjectExecutionOverviewInput["projectExecutionOverviewProjectId"]>>;
type _State_qryInspectProjectExecutionOverviewData = Assert<Assignable<typeof page.qryInspectProjectExecutionOverviewData, QryInspectProjectExecutionOverviewOutput | null>>;
type _State_cmdHandoffProjectToFieldCoordinatorState = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffProjectToFieldCoordinatorProjectProjectId = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorProjectProjectId, string | CmdHandoffProjectToFieldCoordinatorInput["projectProjectId"]>>;
type _State_cmdHandoffProjectToFieldCoordinatorClientId = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorClientId, string | CmdHandoffProjectToFieldCoordinatorInput["clientId"]>>;
type _State_cmdHandoffProjectToFieldCoordinatorName = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorName, string | CmdHandoffProjectToFieldCoordinatorInput["name"]>>;
type _State_cmdHandoffProjectToFieldCoordinatorAddress = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorAddress, string | CmdHandoffProjectToFieldCoordinatorInput["address"]>>;
type _State_cmdHandoffProjectToFieldCoordinatorAuthorizedBudget = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget, string | CmdHandoffProjectToFieldCoordinatorInput["authorizedBudget"]>>;
type _State_cmdHandoffProjectToFieldCoordinatorPlannedStartDate = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorPlannedStartDate, string | CmdHandoffProjectToFieldCoordinatorInput["plannedStartDate"]>>;
type _State_cmdHandoffProjectToFieldCoordinatorPlannedEndDate = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorPlannedEndDate, string | CmdHandoffProjectToFieldCoordinatorInput["plannedEndDate"]>>;
type _State_cmdHandoffProjectToFieldCoordinatorOutput = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorOutput, CmdHandoffProjectToFieldCoordinatorOutput | null>>;
type _State_cmdHandoffProjectToFieldCoordinatorError = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinatorError, string>>;
type _Action_loadQryInspectProjectDashboard = Assert<Assignable<typeof page.loadQryInspectProjectDashboard, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectDashboardClick = Assert<Assignable<typeof page.handleQryInspectProjectDashboardClick, (...args: any[]) => unknown>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectProjectExecutionOverview = Assert<Assignable<typeof page.loadQryInspectProjectExecutionOverview, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectExecutionOverviewClick = Assert<Assignable<typeof page.handleQryInspectProjectExecutionOverviewClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffProjectToFieldCoordinator = Assert<Assignable<typeof page.cmdHandoffProjectToFieldCoordinator, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorClick = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorClick, (...args: any[]) => unknown>>;
type _Action_setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange = Assert<Assignable<typeof page.handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffProjectToFieldCoordinatorProjectProjectId = Assert<Assignable<typeof page.setCmdHandoffProjectToFieldCoordinatorProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffProjectToFieldCoordinatorClientId = Assert<Assignable<typeof page.setCmdHandoffProjectToFieldCoordinatorClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorClientIdChange = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffProjectToFieldCoordinatorName = Assert<Assignable<typeof page.setCmdHandoffProjectToFieldCoordinatorName, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorNameChange = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorNameChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffProjectToFieldCoordinatorAddress = Assert<Assignable<typeof page.setCmdHandoffProjectToFieldCoordinatorAddress, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorAddressChange = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorAddressChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffProjectToFieldCoordinatorAuthorizedBudget = Assert<Assignable<typeof page.setCmdHandoffProjectToFieldCoordinatorAuthorizedBudget, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorAuthorizedBudgetChange = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorAuthorizedBudgetChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffProjectToFieldCoordinatorPlannedStartDate = Assert<Assignable<typeof page.setCmdHandoffProjectToFieldCoordinatorPlannedStartDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorPlannedStartDateChange = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorPlannedStartDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffProjectToFieldCoordinatorPlannedEndDate = Assert<Assignable<typeof page.setCmdHandoffProjectToFieldCoordinatorPlannedEndDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffProjectToFieldCoordinatorPlannedEndDateChange = Assert<Assignable<typeof page.handleCmdHandoffProjectToFieldCoordinatorPlannedEndDateChange, (...args: any[]) => unknown>>;

export {};