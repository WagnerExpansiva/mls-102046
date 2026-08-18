/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmInventoryItemCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.js';
import type { CmdCreateInventoryItemInput, CmdCreateInventoryItemOutput, CmdDeleteInventoryItemInput, CmdDeleteInventoryItemOutput, CmdUpdateInventoryItemInput, CmdUpdateInventoryItemOutput, QryListInventoryItemOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryItemCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmInventoryItemCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListInventoryItemState = Assert<Assignable<typeof page.qryListInventoryItemState, "idle" | "loading" | "success" | "error">>;
type _State_qryListInventoryItemData = Assert<Assignable<typeof page.qryListInventoryItemData, unknown[] | QryListInventoryItemOutput>>;
type _State_cmdCreateInventoryItemState = Assert<Assignable<typeof page.cmdCreateInventoryItemState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateInventoryItemName = Assert<Assignable<typeof page.cmdCreateInventoryItemName, string | CmdCreateInventoryItemInput["name"]>>;
type _State_cmdCreateInventoryItemDescription = Assert<Assignable<typeof page.cmdCreateInventoryItemDescription, string | CmdCreateInventoryItemInput["description"]>>;
type _State_cmdCreateInventoryItemUnitOfMeasure = Assert<Assignable<typeof page.cmdCreateInventoryItemUnitOfMeasure, string | CmdCreateInventoryItemInput["unitOfMeasure"]>>;
type _State_cmdCreateInventoryItemReferenceUnitCost = Assert<Assignable<typeof page.cmdCreateInventoryItemReferenceUnitCost, string | CmdCreateInventoryItemInput["referenceUnitCost"]>>;
type _State_cmdCreateInventoryItemStatus = Assert<Assignable<typeof page.cmdCreateInventoryItemStatus, string | CmdCreateInventoryItemInput["status"]>>;
type _State_cmdCreateInventoryItemOutput = Assert<Assignable<typeof page.cmdCreateInventoryItemOutput, CmdCreateInventoryItemOutput | null>>;
type _State_cmdCreateInventoryItemError = Assert<Assignable<typeof page.cmdCreateInventoryItemError, string>>;
type _State_cmdUpdateInventoryItemState = Assert<Assignable<typeof page.cmdUpdateInventoryItemState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateInventoryItemInventoryItemId = Assert<Assignable<typeof page.cmdUpdateInventoryItemInventoryItemId, string | CmdUpdateInventoryItemInput["inventoryItemId"]>>;
type _State_cmdUpdateInventoryItemName = Assert<Assignable<typeof page.cmdUpdateInventoryItemName, string | CmdUpdateInventoryItemInput["name"]>>;
type _State_cmdUpdateInventoryItemDescription = Assert<Assignable<typeof page.cmdUpdateInventoryItemDescription, string | CmdUpdateInventoryItemInput["description"]>>;
type _State_cmdUpdateInventoryItemUnitOfMeasure = Assert<Assignable<typeof page.cmdUpdateInventoryItemUnitOfMeasure, string | CmdUpdateInventoryItemInput["unitOfMeasure"]>>;
type _State_cmdUpdateInventoryItemReferenceUnitCost = Assert<Assignable<typeof page.cmdUpdateInventoryItemReferenceUnitCost, string | CmdUpdateInventoryItemInput["referenceUnitCost"]>>;
type _State_cmdUpdateInventoryItemStatus = Assert<Assignable<typeof page.cmdUpdateInventoryItemStatus, string | CmdUpdateInventoryItemInput["status"]>>;
type _State_cmdUpdateInventoryItemOutput = Assert<Assignable<typeof page.cmdUpdateInventoryItemOutput, CmdUpdateInventoryItemOutput | null>>;
type _State_cmdUpdateInventoryItemError = Assert<Assignable<typeof page.cmdUpdateInventoryItemError, string>>;
type _State_cmdDeleteInventoryItemState = Assert<Assignable<typeof page.cmdDeleteInventoryItemState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteInventoryItemInventoryItemId = Assert<Assignable<typeof page.cmdDeleteInventoryItemInventoryItemId, string | CmdDeleteInventoryItemInput["inventoryItemId"]>>;
type _State_cmdDeleteInventoryItemOutput = Assert<Assignable<typeof page.cmdDeleteInventoryItemOutput, CmdDeleteInventoryItemOutput | null>>;
type _State_cmdDeleteInventoryItemError = Assert<Assignable<typeof page.cmdDeleteInventoryItemError, string>>;
type _Action_loadQryListInventoryItem = Assert<Assignable<typeof page.loadQryListInventoryItem, (...args: any[]) => unknown>>;
type _Handler_handleQryListInventoryItemClick = Assert<Assignable<typeof page.handleQryListInventoryItemClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateInventoryItem = Assert<Assignable<typeof page.cmdCreateInventoryItem, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryItemClick = Assert<Assignable<typeof page.handleCmdCreateInventoryItemClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateInventoryItem = Assert<Assignable<typeof page.cmdUpdateInventoryItem, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryItemClick = Assert<Assignable<typeof page.handleCmdUpdateInventoryItemClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteInventoryItem = Assert<Assignable<typeof page.cmdDeleteInventoryItem, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInventoryItemClick = Assert<Assignable<typeof page.handleCmdDeleteInventoryItemClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryItemName = Assert<Assignable<typeof page.setCmdCreateInventoryItemName, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryItemNameChange = Assert<Assignable<typeof page.handleCmdCreateInventoryItemNameChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryItemDescription = Assert<Assignable<typeof page.setCmdCreateInventoryItemDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryItemDescriptionChange = Assert<Assignable<typeof page.handleCmdCreateInventoryItemDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryItemUnitOfMeasure = Assert<Assignable<typeof page.setCmdCreateInventoryItemUnitOfMeasure, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryItemUnitOfMeasureChange = Assert<Assignable<typeof page.handleCmdCreateInventoryItemUnitOfMeasureChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryItemReferenceUnitCost = Assert<Assignable<typeof page.setCmdCreateInventoryItemReferenceUnitCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryItemReferenceUnitCostChange = Assert<Assignable<typeof page.handleCmdCreateInventoryItemReferenceUnitCostChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInventoryItemStatus = Assert<Assignable<typeof page.setCmdCreateInventoryItemStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInventoryItemStatusChange = Assert<Assignable<typeof page.handleCmdCreateInventoryItemStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryItemInventoryItemId = Assert<Assignable<typeof page.setCmdUpdateInventoryItemInventoryItemId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryItemInventoryItemIdChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryItemInventoryItemIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryItemName = Assert<Assignable<typeof page.setCmdUpdateInventoryItemName, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryItemNameChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryItemNameChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryItemDescription = Assert<Assignable<typeof page.setCmdUpdateInventoryItemDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryItemDescriptionChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryItemDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryItemUnitOfMeasure = Assert<Assignable<typeof page.setCmdUpdateInventoryItemUnitOfMeasure, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryItemUnitOfMeasureChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryItemUnitOfMeasureChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryItemReferenceUnitCost = Assert<Assignable<typeof page.setCmdUpdateInventoryItemReferenceUnitCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryItemReferenceUnitCostChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryItemReferenceUnitCostChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInventoryItemStatus = Assert<Assignable<typeof page.setCmdUpdateInventoryItemStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInventoryItemStatusChange = Assert<Assignable<typeof page.handleCmdUpdateInventoryItemStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteInventoryItemInventoryItemId = Assert<Assignable<typeof page.setCmdDeleteInventoryItemInventoryItemId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInventoryItemInventoryItemIdChange = Assert<Assignable<typeof page.handleCmdDeleteInventoryItemInventoryItemIdChange, (...args: any[]) => unknown>>;

export {};