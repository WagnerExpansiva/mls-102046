/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmProjectCoordinationAssignmentCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.js';
import type { CmdCreateProjectCoordinationAssignmentInput, CmdCreateProjectCoordinationAssignmentOutput, CmdDeleteProjectCoordinationAssignmentInput, CmdDeleteProjectCoordinationAssignmentOutput, CmdUpdateProjectCoordinationAssignmentInput, CmdUpdateProjectCoordinationAssignmentOutput, QryListProjectCoordinationAssignmentOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/projectCoordinationAssignmentCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmProjectCoordinationAssignmentCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListProjectCoordinationAssignmentState = Assert<Assignable<typeof page.qryListProjectCoordinationAssignmentState, "idle" | "loading" | "success" | "error">>;
type _State_qryListProjectCoordinationAssignmentData = Assert<Assignable<typeof page.qryListProjectCoordinationAssignmentData, unknown[] | QryListProjectCoordinationAssignmentOutput>>;
type _State_cmdCreateProjectCoordinationAssignmentState = Assert<Assignable<typeof page.cmdCreateProjectCoordinationAssignmentState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateProjectCoordinationAssignmentProjectId = Assert<Assignable<typeof page.cmdCreateProjectCoordinationAssignmentProjectId, string | CmdCreateProjectCoordinationAssignmentInput["projectId"]>>;
type _State_cmdCreateProjectCoordinationAssignmentFieldCoordinatorId = Assert<Assignable<typeof page.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId, string | CmdCreateProjectCoordinationAssignmentInput["fieldCoordinatorId"]>>;
type _State_cmdCreateProjectCoordinationAssignmentStatus = Assert<Assignable<typeof page.cmdCreateProjectCoordinationAssignmentStatus, string | CmdCreateProjectCoordinationAssignmentInput["status"]>>;
type _State_cmdCreateProjectCoordinationAssignmentOutput = Assert<Assignable<typeof page.cmdCreateProjectCoordinationAssignmentOutput, CmdCreateProjectCoordinationAssignmentOutput | null>>;
type _State_cmdCreateProjectCoordinationAssignmentError = Assert<Assignable<typeof page.cmdCreateProjectCoordinationAssignmentError, string>>;
type _State_cmdUpdateProjectCoordinationAssignmentState = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignmentState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId, string | CmdUpdateProjectCoordinationAssignmentInput["projectCoordinationAssignmentId"]>>;
type _State_cmdUpdateProjectCoordinationAssignmentProjectId = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignmentProjectId, string | CmdUpdateProjectCoordinationAssignmentInput["projectId"]>>;
type _State_cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId, string | CmdUpdateProjectCoordinationAssignmentInput["fieldCoordinatorId"]>>;
type _State_cmdUpdateProjectCoordinationAssignmentStatus = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignmentStatus, string | CmdUpdateProjectCoordinationAssignmentInput["status"]>>;
type _State_cmdUpdateProjectCoordinationAssignmentOutput = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignmentOutput, CmdUpdateProjectCoordinationAssignmentOutput | null>>;
type _State_cmdUpdateProjectCoordinationAssignmentError = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignmentError, string>>;
type _State_cmdDeleteProjectCoordinationAssignmentState = Assert<Assignable<typeof page.cmdDeleteProjectCoordinationAssignmentState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId = Assert<Assignable<typeof page.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId, string | CmdDeleteProjectCoordinationAssignmentInput["projectCoordinationAssignmentId"]>>;
type _State_cmdDeleteProjectCoordinationAssignmentOutput = Assert<Assignable<typeof page.cmdDeleteProjectCoordinationAssignmentOutput, CmdDeleteProjectCoordinationAssignmentOutput | null>>;
type _State_cmdDeleteProjectCoordinationAssignmentError = Assert<Assignable<typeof page.cmdDeleteProjectCoordinationAssignmentError, string>>;
type _State_qryProjectPickerState = Assert<Assignable<typeof page.qryProjectPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectPickerData = Assert<Assignable<typeof page.qryProjectPickerData, unknown[] | QryProjectPickerOutput>>;
type _Action_loadQryListProjectCoordinationAssignment = Assert<Assignable<typeof page.loadQryListProjectCoordinationAssignment, (...args: any[]) => unknown>>;
type _Handler_handleQryListProjectCoordinationAssignmentClick = Assert<Assignable<typeof page.handleQryListProjectCoordinationAssignmentClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateProjectCoordinationAssignment = Assert<Assignable<typeof page.cmdCreateProjectCoordinationAssignment, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateProjectCoordinationAssignmentClick = Assert<Assignable<typeof page.handleCmdCreateProjectCoordinationAssignmentClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateProjectCoordinationAssignment = Assert<Assignable<typeof page.cmdUpdateProjectCoordinationAssignment, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateProjectCoordinationAssignmentClick = Assert<Assignable<typeof page.handleCmdUpdateProjectCoordinationAssignmentClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteProjectCoordinationAssignment = Assert<Assignable<typeof page.cmdDeleteProjectCoordinationAssignment, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteProjectCoordinationAssignmentClick = Assert<Assignable<typeof page.handleCmdDeleteProjectCoordinationAssignmentClick, (...args: any[]) => unknown>>;
type _Action_loadQryProjectPicker = Assert<Assignable<typeof page.loadQryProjectPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectPickerClick = Assert<Assignable<typeof page.handleQryProjectPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateProjectCoordinationAssignmentProjectId = Assert<Assignable<typeof page.setCmdCreateProjectCoordinationAssignmentProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateProjectCoordinationAssignmentProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateProjectCoordinationAssignmentProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateProjectCoordinationAssignmentFieldCoordinatorId = Assert<Assignable<typeof page.setCmdCreateProjectCoordinationAssignmentFieldCoordinatorId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateProjectCoordinationAssignmentFieldCoordinatorIdChange = Assert<Assignable<typeof page.handleCmdCreateProjectCoordinationAssignmentFieldCoordinatorIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateProjectCoordinationAssignmentStatus = Assert<Assignable<typeof page.setCmdCreateProjectCoordinationAssignmentStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateProjectCoordinationAssignmentStatusChange = Assert<Assignable<typeof page.handleCmdCreateProjectCoordinationAssignmentStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId = Assert<Assignable<typeof page.setCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange = Assert<Assignable<typeof page.handleCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateProjectCoordinationAssignmentProjectId = Assert<Assignable<typeof page.setCmdUpdateProjectCoordinationAssignmentProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateProjectCoordinationAssignmentProjectIdChange = Assert<Assignable<typeof page.handleCmdUpdateProjectCoordinationAssignmentProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = Assert<Assignable<typeof page.setCmdUpdateProjectCoordinationAssignmentFieldCoordinatorId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateProjectCoordinationAssignmentFieldCoordinatorIdChange = Assert<Assignable<typeof page.handleCmdUpdateProjectCoordinationAssignmentFieldCoordinatorIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateProjectCoordinationAssignmentStatus = Assert<Assignable<typeof page.setCmdUpdateProjectCoordinationAssignmentStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateProjectCoordinationAssignmentStatusChange = Assert<Assignable<typeof page.handleCmdUpdateProjectCoordinationAssignmentStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId = Assert<Assignable<typeof page.setCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange = Assert<Assignable<typeof page.handleCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange, (...args: any[]) => unknown>>;

export {};