/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmRecordProjectMaterialUsageBase } from '/_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.js';
import type { CmdCreateMaterialUsageInput, CmdCreateMaterialUsageOutput, CmdHandoffMaterialUsageToFieldCoordinatorInput, CmdHandoffMaterialUsageToFieldCoordinatorOutput, QryInventoryBalancePickerOutput, QryLocateInventoryItemOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/recordProjectMaterialUsage.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmRecordProjectMaterialUsageBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_qryLocateInventoryItemState = Assert<Assignable<typeof page.qryLocateInventoryItemState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateInventoryItemData = Assert<Assignable<typeof page.qryLocateInventoryItemData, unknown[] | QryLocateInventoryItemOutput>>;
type _State_cmdCreateMaterialUsageState = Assert<Assignable<typeof page.cmdCreateMaterialUsageState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = Assert<Assignable<typeof page.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId, string | CmdCreateMaterialUsageInput["inventoryBalanceInventoryBalanceId"]>>;
type _State_cmdCreateMaterialUsageInventoryItemInventoryItemId = Assert<Assignable<typeof page.cmdCreateMaterialUsageInventoryItemInventoryItemId, string | CmdCreateMaterialUsageInput["inventoryItemInventoryItemId"]>>;
type _State_cmdCreateMaterialUsageProjectProjectId = Assert<Assignable<typeof page.cmdCreateMaterialUsageProjectProjectId, string | CmdCreateMaterialUsageInput["projectProjectId"]>>;
type _State_cmdCreateMaterialUsageQuantity = Assert<Assignable<typeof page.cmdCreateMaterialUsageQuantity, string | CmdCreateMaterialUsageInput["quantity"]>>;
type _State_cmdCreateMaterialUsageUsageDescription = Assert<Assignable<typeof page.cmdCreateMaterialUsageUsageDescription, string | CmdCreateMaterialUsageInput["usageDescription"]>>;
type _State_cmdCreateMaterialUsageConsumedOn = Assert<Assignable<typeof page.cmdCreateMaterialUsageConsumedOn, string | CmdCreateMaterialUsageInput["consumedOn"]>>;
type _State_cmdCreateMaterialUsageUnitCostBasis = Assert<Assignable<typeof page.cmdCreateMaterialUsageUnitCostBasis, string | CmdCreateMaterialUsageInput["unitCostBasis"]>>;
type _State_cmdCreateMaterialUsageOutput = Assert<Assignable<typeof page.cmdCreateMaterialUsageOutput, CmdCreateMaterialUsageOutput | null>>;
type _State_cmdCreateMaterialUsageError = Assert<Assignable<typeof page.cmdCreateMaterialUsageError, string>>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorState = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId, string | CmdHandoffMaterialUsageToFieldCoordinatorInput["materialUsageMaterialUsageId"]>>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorQuantity = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorQuantity, string | CmdHandoffMaterialUsageToFieldCoordinatorInput["quantity"]>>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription, string | CmdHandoffMaterialUsageToFieldCoordinatorInput["usageDescription"]>>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn, string | CmdHandoffMaterialUsageToFieldCoordinatorInput["consumedOn"]>>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis, string | CmdHandoffMaterialUsageToFieldCoordinatorInput["unitCostBasis"]>>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorOutput = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorOutput, CmdHandoffMaterialUsageToFieldCoordinatorOutput | null>>;
type _State_cmdHandoffMaterialUsageToFieldCoordinatorError = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinatorError, string>>;
type _State_qryInventoryBalancePickerState = Assert<Assignable<typeof page.qryInventoryBalancePickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryInventoryBalancePickerData = Assert<Assignable<typeof page.qryInventoryBalancePickerData, unknown[] | QryInventoryBalancePickerOutput>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryLocateInventoryItem = Assert<Assignable<typeof page.loadQryLocateInventoryItem, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateInventoryItemClick = Assert<Assignable<typeof page.handleQryLocateInventoryItemClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateMaterialUsage = Assert<Assignable<typeof page.cmdCreateMaterialUsage, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageClick = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffMaterialUsageToFieldCoordinator = Assert<Assignable<typeof page.cmdHandoffMaterialUsageToFieldCoordinator, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffMaterialUsageToFieldCoordinatorClick = Assert<Assignable<typeof page.handleCmdHandoffMaterialUsageToFieldCoordinatorClick, (...args: any[]) => unknown>>;
type _Action_loadQryInventoryBalancePicker = Assert<Assignable<typeof page.loadQryInventoryBalancePicker, (...args: any[]) => unknown>>;
type _Handler_handleQryInventoryBalancePickerClick = Assert<Assignable<typeof page.handleQryInventoryBalancePickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = Assert<Assignable<typeof page.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageInventoryBalanceInventoryBalanceIdChange = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageInventoryBalanceInventoryBalanceIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateMaterialUsageInventoryItemInventoryItemId = Assert<Assignable<typeof page.setCmdCreateMaterialUsageInventoryItemInventoryItemId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageInventoryItemInventoryItemIdChange = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageInventoryItemInventoryItemIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateMaterialUsageProjectProjectId = Assert<Assignable<typeof page.setCmdCreateMaterialUsageProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateMaterialUsageQuantity = Assert<Assignable<typeof page.setCmdCreateMaterialUsageQuantity, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageQuantityChange = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageQuantityChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateMaterialUsageUsageDescription = Assert<Assignable<typeof page.setCmdCreateMaterialUsageUsageDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageUsageDescriptionChange = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageUsageDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateMaterialUsageConsumedOn = Assert<Assignable<typeof page.setCmdCreateMaterialUsageConsumedOn, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageConsumedOnChange = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageConsumedOnChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateMaterialUsageUnitCostBasis = Assert<Assignable<typeof page.setCmdCreateMaterialUsageUnitCostBasis, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateMaterialUsageUnitCostBasisChange = Assert<Assignable<typeof page.handleCmdCreateMaterialUsageUnitCostBasisChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId = Assert<Assignable<typeof page.setCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageIdChange = Assert<Assignable<typeof page.handleCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffMaterialUsageToFieldCoordinatorQuantity = Assert<Assignable<typeof page.setCmdHandoffMaterialUsageToFieldCoordinatorQuantity, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffMaterialUsageToFieldCoordinatorQuantityChange = Assert<Assignable<typeof page.handleCmdHandoffMaterialUsageToFieldCoordinatorQuantityChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffMaterialUsageToFieldCoordinatorUsageDescription = Assert<Assignable<typeof page.setCmdHandoffMaterialUsageToFieldCoordinatorUsageDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffMaterialUsageToFieldCoordinatorUsageDescriptionChange = Assert<Assignable<typeof page.handleCmdHandoffMaterialUsageToFieldCoordinatorUsageDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffMaterialUsageToFieldCoordinatorConsumedOn = Assert<Assignable<typeof page.setCmdHandoffMaterialUsageToFieldCoordinatorConsumedOn, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffMaterialUsageToFieldCoordinatorConsumedOnChange = Assert<Assignable<typeof page.handleCmdHandoffMaterialUsageToFieldCoordinatorConsumedOnChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis = Assert<Assignable<typeof page.setCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasisChange = Assert<Assignable<typeof page.handleCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasisChange, (...args: any[]) => unknown>>;

export {};