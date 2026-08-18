/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmInventoryBalanceCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.js';
import type { CmdCreateInventoryBalanceInput, CmdCreateInventoryBalanceOutput, CmdDeleteInventoryBalanceInput, CmdDeleteInventoryBalanceOutput, CmdUpdateInventoryBalanceInput, CmdUpdateInventoryBalanceOutput, QryInventoryItemPickerOutput, QryListInventoryBalanceOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryBalanceCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmInventoryBalanceCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListInventoryBalanceState = Assert<Assignable<typeof page.qryListInventoryBalanceState, "idle" | "loading" | "success" | "error">>;
type _State_qryListInventoryBalanceData = Assert<Assignable<typeof page.qryListInventoryBalanceData, unknown[] | QryListInventoryBalanceOutput>>;
type _State_cmdCreateInventoryBalanceState = Assert<Assignable<typeof page.cmdCreateInventoryBalanceState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateInventoryBalanceInventoryItemId = Assert<Assignable<typeof page.cmdCreateInventoryBalanceInventoryItemId, string | CmdCreateInventoryBalanceInput["inventoryItemId"]>>;
type _State_cmdCreateInventoryBalancePhysicalQuantity = Assert<Assignable<typeof page.cmdCreateInventoryBalancePhysicalQuantity, string | CmdCreateInventoryBalanceInput["physicalQuantity"]>>;
type _State_cmdCreateInventoryBalanceApplicableUnitCost = Assert<Assignable<typeof page.cmdCreateInventoryBalanceApplicableUnitCost, string | CmdCreateInventoryBalanceInput["applicableUnitCost"]>>;
type _State_cmdCreateInventoryBalanceStatus = Assert<Assignable<typeof page.cmdCreateInventoryBalanceStatus, string | CmdCreateInventoryBalanceInput["status"]>>;
type _State_cmdCreateInventoryBalanceOutput = Assert<Assignable<typeof page.cmdCreateInventoryBalanceOutput, CmdCreateInventoryBalanceOutput | null>>;
type _State_cmdCreateInventoryBalanceError = Assert<Assignable<typeof page.cmdCreateInventoryBalanceError, string>>;
type _State_cmdUpdateInventoryBalanceState = Assert<Assignable<typeof page.cmdUpdateInventoryBalanceState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateInventoryBalanceInventoryBalanceId = Assert<Assignable<typeof page.cmdUpdateInventoryBalanceInventoryBalanceId, string | CmdUpdateInventoryBalanceInput["inventoryBalanceId"]>>;
type _State_cmdUpdateInventoryBalanceInventoryItemId = Assert<Assignable<typeof page.cmdUpdateInventoryBalanceInventoryItemId, string | CmdUpdateInventoryBalanceInput["inventoryItemId"]>>;
type _State_cmdUpdateInventoryBalancePhysicalQuantity = Assert<Assignable<typeof page.cmdUpdateInventoryBalancePhysicalQuantity, string | CmdUpdateInventoryBalanceInput["physicalQuantity"]>>;
type _State_cmdUpdateInventoryBalanceApplicableUnitCost = Assert<Assignable<typeof page.cmdUpdateInventoryBalanceApplicableUnitCost, string | CmdUpdateInventoryBalanceInput["applicableUnitCost"]>>;
type _State_cmdUpdateInventoryBalanceStatus = Assert<Assignable<typeof page.cmdUpdateInventoryBalanceStatus, string | CmdUpdateInventoryBalanceInput["status"]>>;
type _State_cmdUpdateInventoryBalanceOutput = Assert<Assignable<typeof page.cmdUpdateInventoryBalanceOutput, CmdUpdateInventoryBalanceOutput | null>>;
type _State_cmdUpdateInventoryBalanceError = Assert<Assignable<typeof page.cmdUpdateInventoryBalanceError, string>>;
type _State_cmdDeleteInventoryBalanceState = Assert<Assignable<typeof page.cmdDeleteInventoryBalanceState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteInventoryBalanceInventoryBalanceId = Assert<Assignable<typeof page.cmdDeleteInventoryBalanceInventoryBalanceId, string | CmdDeleteInventoryBalanceInput["inventoryBalanceId"]>>;
type _State_cmdDeleteInventoryBalanceOutput = Assert<Assignable<typeof page.cmdDeleteInventoryBalanceOutput, CmdDeleteInventoryBalanceOutput | null>>;
type _State_cmdDeleteInventoryBalanceError = Assert<Assignable<typeof page.cmdDeleteInventoryBalanceError, string>>;
type _State_qryInventoryItemPickerState = Assert<Assignable<typeof page.qryInventoryItemPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryInventoryItemPickerData = Assert<Assignable<typeof page.qryInventoryItemPickerData, unknown[] | QryInventoryItemPickerOutput>>;
type _Action_loadQryListInventoryBalance = Assert<Assignable<typeof page.loadQryListInventoryBalance, (...args: any[]) => unknown>>;
type _Handler_handleQryListInventoryBalanceClick = Assert<Assignable<typeof page.handleQryListInventoryBalanceClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateInventoryBalance = Assert<Assignable<typeof page.cmdCreateInventoryBalance, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryBalanceClick = Assert<Assignable<typeof page.handleCmdCreateInventoryBalanceClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateInventoryBalance = Assert<Assignable<typeof page.cmdUpdateInventoryBalance, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryBalanceClick = Assert<Assignable<typeof page.handleCmdUpdateInventoryBalanceClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteInventoryBalance = Assert<Assignable<typeof page.cmdDeleteInventoryBalance, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInventoryBalanceClick = Assert<Assignable<typeof page.handleCmdDeleteInventoryBalanceClick, (...args: any[]) => unknown>>;
type _Action_loadQryInventoryItemPicker = Assert<Assignable<typeof page.loadQryInventoryItemPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryInventoryItemPickerClick = Assert<Assignable<typeof page.handleQryInventoryItemPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryBalanceInventoryItemId = Assert<Assignable<typeof page.setCmdCreateInventoryBalanceInventoryItemId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryBalanceInventoryItemIdChange = Assert<Assignable<typeof page.handleCmdCreateInventoryBalanceInventoryItemIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryBalancePhysicalQuantity = Assert<Assignable<typeof page.setCmdCreateInventoryBalancePhysicalQuantity, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryBalancePhysicalQuantityChange = Assert<Assignable<typeof page.handleCmdCreateInventoryBalancePhysicalQuantityChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryBalanceApplicableUnitCost = Assert<Assignable<typeof page.setCmdCreateInventoryBalanceApplicableUnitCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryBalanceApplicableUnitCostChange = Assert<Assignable<typeof page.handleCmdCreateInventoryBalanceApplicableUnitCostChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryBalanceStatus = Assert<Assignable<typeof page.setCmdCreateInventoryBalanceStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryBalanceStatusChange = Assert<Assignable<typeof page.handleCmdCreateInventoryBalanceStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryBalanceInventoryBalanceId = Assert<Assignable<typeof page.setCmdUpdateInventoryBalanceInventoryBalanceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryBalanceInventoryBalanceIdChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryBalanceInventoryBalanceIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryBalanceInventoryItemId = Assert<Assignable<typeof page.setCmdUpdateInventoryBalanceInventoryItemId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryBalanceInventoryItemIdChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryBalanceInventoryItemIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryBalancePhysicalQuantity = Assert<Assignable<typeof page.setCmdUpdateInventoryBalancePhysicalQuantity, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryBalancePhysicalQuantityChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryBalancePhysicalQuantityChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryBalanceApplicableUnitCost = Assert<Assignable<typeof page.setCmdUpdateInventoryBalanceApplicableUnitCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryBalanceApplicableUnitCostChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryBalanceApplicableUnitCostChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryBalanceStatus = Assert<Assignable<typeof page.setCmdUpdateInventoryBalanceStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryBalanceStatusChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryBalanceStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteInventoryBalanceInventoryBalanceId = Assert<Assignable<typeof page.setCmdDeleteInventoryBalanceInventoryBalanceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInventoryBalanceInventoryBalanceIdChange = Assert<Assignable<typeof page.handleCmdDeleteInventoryBalanceInventoryBalanceIdChange, (...args: any[]) => unknown>>;

export {};