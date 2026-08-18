/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "materialUsageCatalogue",
  "pageName": "Consumo de material",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmMaterialUsageCatalogueBase",
  "routePattern": "/buildFlowFsm/materialUsageCatalogue/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:materialUsageCatalogue",
    "contract:buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage",
    "contract:buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage",
    "contract:buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
    "contract:buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage",
    "contract:buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker",
    "contract:buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker",
    "contract:buildFlowFsm.materialUsageCatalogue.qryProjectPicker"
  ],
  "operationIds": [
    "createMaterialUsage",
    "deleteMaterialUsage",
    "listInventoryBalance",
    "listInventoryItem",
    "listMaterialUsage",
    "listProject",
    "updateMaterialUsage"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "materialUsageCatalogue",
    "workspaceKind": "operation",
    "actor": "fieldCoordinator",
    "entity": "MaterialUsage",
    "owners": [
      {
        "kind": "operation",
        "id": "createMaterialUsage",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createMaterialUsage.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteMaterialUsage",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteMaterialUsage.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInventoryBalance",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInventoryBalance.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInventoryItem",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInventoryItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listMaterialUsage",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listMaterialUsage.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateMaterialUsage",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateMaterialUsage.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createMaterialUsage",
          "commandName": "cmdCreateMaterialUsage",
          "steps": [
            "Registrar o consumo de material",
            "O consumo fica vinculado à obra e disponível para o custo realizado."
          ]
        },
        {
          "operationId": "deleteMaterialUsage",
          "commandName": "cmdDeleteMaterialUsage",
          "steps": [
            "Remover o registro escolhido."
          ]
        },
        {
          "operationId": "listInventoryBalance",
          "commandName": "qryListInventoryBalance",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listInventoryItem",
          "commandName": "qryInventoryItemPicker",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listMaterialUsage",
          "commandName": "qryListMaterialUsage",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listProject",
          "commandName": "qryProjectPicker",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "updateMaterialUsage",
          "commandName": "cmdUpdateMaterialUsage",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/materialUsageCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListMaterialUsage",
        "routeConst": "qryListMaterialUsageRoute"
      },
      {
        "commandName": "cmdCreateMaterialUsage",
        "routeConst": "cmdCreateMaterialUsageRoute"
      },
      {
        "commandName": "cmdUpdateMaterialUsage",
        "routeConst": "cmdUpdateMaterialUsageRoute"
      },
      {
        "commandName": "cmdDeleteMaterialUsage",
        "routeConst": "cmdDeleteMaterialUsageRoute"
      },
      {
        "commandName": "qryInventoryBalancePicker",
        "routeConst": "qryInventoryBalancePickerRoute"
      },
      {
        "commandName": "qryInventoryItemPicker",
        "routeConst": "qryInventoryItemPickerRoute"
      },
      {
        "commandName": "qryProjectPicker",
        "routeConst": "qryProjectPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/materialUsageCatalogue.defs.ts",
    "layoutId": "materialUsageCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.materialUsageCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.qryListMaterialUsage.status",
      "name": "qryListMaterialUsageState",
      "kind": "actionStatus",
      "actionRef": "qryListMaterialUsage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.materialUsageCatalogue.data.qryListMaterialUsage",
      "name": "qryListMaterialUsageData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListMaterialUsage",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status",
      "name": "cmdCreateMaterialUsageState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateMaterialUsage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
      "name": "cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "input",
        "field": "inventoryBalanceInventoryBalanceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
      "name": "cmdCreateMaterialUsageInventoryItemInventoryItemId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "input",
        "field": "inventoryItemInventoryItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId",
      "name": "cmdCreateMaterialUsageProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity",
      "name": "cmdCreateMaterialUsageQuantity",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription",
      "name": "cmdCreateMaterialUsageUsageDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "input",
        "field": "usageDescription"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn",
      "name": "cmdCreateMaterialUsageConsumedOn",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "input",
        "field": "consumedOn"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis",
      "name": "cmdCreateMaterialUsageUnitCostBasis",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "input",
        "field": "unitCostBasis"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.output.cmdCreateMaterialUsage",
      "name": "cmdCreateMaterialUsageOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error",
      "name": "cmdCreateMaterialUsageError",
      "kind": "actionError",
      "actionRef": "cmdCreateMaterialUsage",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status",
      "name": "cmdUpdateMaterialUsageState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateMaterialUsage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId",
      "name": "cmdUpdateMaterialUsageMaterialUsageId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "materialUsageId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status",
      "name": "cmdUpdateMaterialUsageStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId",
      "name": "cmdUpdateMaterialUsageProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId",
      "name": "cmdUpdateMaterialUsageInventoryItemId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "inventoryItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId",
      "name": "cmdUpdateMaterialUsageInventoryBalanceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "inventoryBalanceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity",
      "name": "cmdUpdateMaterialUsageQuantity",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription",
      "name": "cmdUpdateMaterialUsageUsageDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "usageDescription"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn",
      "name": "cmdUpdateMaterialUsageConsumedOn",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "consumedOn"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis",
      "name": "cmdUpdateMaterialUsageUnitCostBasis",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "input",
        "field": "unitCostBasis"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage",
      "name": "cmdUpdateMaterialUsageOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateMaterialUsage",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error",
      "name": "cmdUpdateMaterialUsageError",
      "kind": "actionError",
      "actionRef": "cmdUpdateMaterialUsage",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status",
      "name": "cmdDeleteMaterialUsageState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteMaterialUsage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId",
      "name": "cmdDeleteMaterialUsageMaterialUsageId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteMaterialUsage",
        "direction": "input",
        "field": "materialUsageId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage",
      "name": "cmdDeleteMaterialUsageOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteMaterialUsage",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error",
      "name": "cmdDeleteMaterialUsageError",
      "kind": "actionError",
      "actionRef": "cmdDeleteMaterialUsage",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status",
      "name": "qryInventoryBalancePickerState",
      "kind": "actionStatus",
      "actionRef": "qryInventoryBalancePicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.materialUsageCatalogue.data.qryInventoryBalancePicker",
      "name": "qryInventoryBalancePickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInventoryBalancePicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.qryInventoryItemPicker.status",
      "name": "qryInventoryItemPickerState",
      "kind": "actionStatus",
      "actionRef": "qryInventoryItemPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.materialUsageCatalogue.data.qryInventoryItemPicker",
      "name": "qryInventoryItemPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInventoryItemPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.materialUsageCatalogue.action.qryProjectPicker.status",
      "name": "qryProjectPickerState",
      "kind": "actionStatus",
      "actionRef": "qryProjectPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.materialUsageCatalogue.data.qryProjectPicker",
      "name": "qryProjectPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListMaterialUsage",
      "kind": "query",
      "commandRef": "qryListMaterialUsage",
      "routeKey": "buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage",
      "purpose": "Listar Consumo de material",
      "methodName": "loadQryListMaterialUsage",
      "handlerName": "handleQryListMaterialUsageClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.materialUsageCatalogue.data.qryListMaterialUsage"
      ],
      "statusStateKey": "ui.materialUsageCatalogue.action.qryListMaterialUsage.status"
    },
    {
      "actionId": "cmdCreateMaterialUsage",
      "kind": "command",
      "commandRef": "cmdCreateMaterialUsage",
      "routeKey": "buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage",
      "purpose": "Registrar o consumo de material",
      "methodName": "cmdCreateMaterialUsage",
      "handlerName": "handleCmdCreateMaterialUsageClick",
      "inputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis"
      ],
      "routeParamInputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId"
      ],
      "outputStateKeys": [
        "ui.materialUsageCatalogue.output.cmdCreateMaterialUsage"
      ],
      "statusStateKey": "ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status",
      "errorStateKey": "ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateMaterialUsage.success",
        "errorMessageKey": "action.cmdCreateMaterialUsage.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis"
      ],
      "refreshActionIds": [
        "qryListMaterialUsage",
        "qryInventoryBalancePicker",
        "qryInventoryItemPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdUpdateMaterialUsage",
      "kind": "command",
      "commandRef": "cmdUpdateMaterialUsage",
      "routeKey": "buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "purpose": "Atualizar Consumo de material",
      "methodName": "cmdUpdateMaterialUsage",
      "handlerName": "handleCmdUpdateMaterialUsageClick",
      "inputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId"
      ],
      "outputStateKeys": [
        "ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage"
      ],
      "statusStateKey": "ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status",
      "errorStateKey": "ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateMaterialUsage.success",
        "errorMessageKey": "action.cmdUpdateMaterialUsage.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn",
        "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis"
      ],
      "refreshActionIds": [
        "qryListMaterialUsage",
        "qryInventoryBalancePicker",
        "qryInventoryItemPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdDeleteMaterialUsage",
      "kind": "command",
      "commandRef": "cmdDeleteMaterialUsage",
      "routeKey": "buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage",
      "purpose": "Excluir Consumo de material",
      "methodName": "cmdDeleteMaterialUsage",
      "handlerName": "handleCmdDeleteMaterialUsageClick",
      "inputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId"
      ],
      "outputStateKeys": [
        "ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage"
      ],
      "statusStateKey": "ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status",
      "errorStateKey": "ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteMaterialUsage.success",
        "errorMessageKey": "action.cmdDeleteMaterialUsage.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId"
      ],
      "refreshActionIds": [
        "qryListMaterialUsage",
        "qryInventoryBalancePicker",
        "qryInventoryItemPicker",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "qryInventoryBalancePicker",
      "kind": "query",
      "commandRef": "qryInventoryBalancePicker",
      "routeKey": "buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker",
      "purpose": "Listar Saldo de estoque",
      "methodName": "loadQryInventoryBalancePicker",
      "handlerName": "handleQryInventoryBalancePickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.materialUsageCatalogue.data.qryInventoryBalancePicker"
      ],
      "statusStateKey": "ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status"
    },
    {
      "actionId": "qryInventoryItemPicker",
      "kind": "query",
      "commandRef": "qryInventoryItemPicker",
      "routeKey": "buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker",
      "purpose": "Listar Item de estoque",
      "methodName": "loadQryInventoryItemPicker",
      "handlerName": "handleQryInventoryItemPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.materialUsageCatalogue.data.qryInventoryItemPicker"
      ],
      "statusStateKey": "ui.materialUsageCatalogue.action.qryInventoryItemPicker.status"
    },
    {
      "actionId": "qryProjectPicker",
      "kind": "query",
      "commandRef": "qryProjectPicker",
      "routeKey": "buildFlowFsm.materialUsageCatalogue.qryProjectPicker",
      "purpose": "Listar Obra",
      "methodName": "loadQryProjectPicker",
      "handlerName": "handleQryProjectPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.materialUsageCatalogue.data.qryProjectPicker"
      ],
      "statusStateKey": "ui.materialUsageCatalogue.action.qryProjectPicker.status"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
      "methodName": "setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId",
      "handlerName": "handleCmdCreateMaterialUsageInventoryBalanceInventoryBalanceIdChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageInventoryItemInventoryItemId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
      "methodName": "setCmdCreateMaterialUsageInventoryItemInventoryItemId",
      "handlerName": "handleCmdCreateMaterialUsageInventoryItemInventoryItemIdChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId",
      "methodName": "setCmdCreateMaterialUsageProjectProjectId",
      "handlerName": "handleCmdCreateMaterialUsageProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity",
      "methodName": "setCmdCreateMaterialUsageQuantity",
      "handlerName": "handleCmdCreateMaterialUsageQuantityChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageUsageDescription",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription",
      "methodName": "setCmdCreateMaterialUsageUsageDescription",
      "handlerName": "handleCmdCreateMaterialUsageUsageDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageConsumedOn",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn",
      "methodName": "setCmdCreateMaterialUsageConsumedOn",
      "handlerName": "handleCmdCreateMaterialUsageConsumedOnChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageUnitCostBasis",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis",
      "methodName": "setCmdCreateMaterialUsageUnitCostBasis",
      "handlerName": "handleCmdCreateMaterialUsageUnitCostBasisChange"
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageMaterialUsageId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId",
      "methodName": "setCmdUpdateMaterialUsageMaterialUsageId",
      "handlerName": "handleCmdUpdateMaterialUsageMaterialUsageIdChange",
      "prefill": {
        "command": "cmdUpdateMaterialUsage",
        "sourceStateKey": "ui.materialUsageCatalogue.data.qryListMaterialUsage",
        "sourceOutputShape": "array",
        "matchField": "materialUsageId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status"
          },
          {
            "itemField": "quantity",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity"
          },
          {
            "itemField": "usageDescription",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription"
          },
          {
            "itemField": "consumedOn",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn"
          },
          {
            "itemField": "unitCostBasis",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageStatus",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status",
      "methodName": "setCmdUpdateMaterialUsageStatus",
      "handlerName": "handleCmdUpdateMaterialUsageStatusChange"
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId",
      "methodName": "setCmdUpdateMaterialUsageProjectId",
      "handlerName": "handleCmdUpdateMaterialUsageProjectIdChange",
      "prefill": {
        "command": "cmdUpdateMaterialUsage",
        "sourceStateKey": "ui.materialUsageCatalogue.data.qryListMaterialUsage",
        "sourceOutputShape": "array",
        "matchField": "projectId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status"
          },
          {
            "itemField": "quantity",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity"
          },
          {
            "itemField": "usageDescription",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription"
          },
          {
            "itemField": "consumedOn",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn"
          },
          {
            "itemField": "unitCostBasis",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageInventoryItemId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId",
      "methodName": "setCmdUpdateMaterialUsageInventoryItemId",
      "handlerName": "handleCmdUpdateMaterialUsageInventoryItemIdChange",
      "prefill": {
        "command": "cmdUpdateMaterialUsage",
        "sourceStateKey": "ui.materialUsageCatalogue.data.qryListMaterialUsage",
        "sourceOutputShape": "array",
        "matchField": "inventoryItemId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status"
          },
          {
            "itemField": "quantity",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity"
          },
          {
            "itemField": "usageDescription",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription"
          },
          {
            "itemField": "consumedOn",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn"
          },
          {
            "itemField": "unitCostBasis",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageInventoryBalanceId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId",
      "methodName": "setCmdUpdateMaterialUsageInventoryBalanceId",
      "handlerName": "handleCmdUpdateMaterialUsageInventoryBalanceIdChange",
      "prefill": {
        "command": "cmdUpdateMaterialUsage",
        "sourceStateKey": "ui.materialUsageCatalogue.data.qryListMaterialUsage",
        "sourceOutputShape": "array",
        "matchField": "inventoryBalanceId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status"
          },
          {
            "itemField": "quantity",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity"
          },
          {
            "itemField": "usageDescription",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription"
          },
          {
            "itemField": "consumedOn",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn"
          },
          {
            "itemField": "unitCostBasis",
            "targetStateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity",
      "methodName": "setCmdUpdateMaterialUsageQuantity",
      "handlerName": "handleCmdUpdateMaterialUsageQuantityChange"
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageUsageDescription",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription",
      "methodName": "setCmdUpdateMaterialUsageUsageDescription",
      "handlerName": "handleCmdUpdateMaterialUsageUsageDescriptionChange"
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageConsumedOn",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn",
      "methodName": "setCmdUpdateMaterialUsageConsumedOn",
      "handlerName": "handleCmdUpdateMaterialUsageConsumedOnChange"
    },
    {
      "actionId": "set.cmdUpdateMaterialUsageUnitCostBasis",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis",
      "methodName": "setCmdUpdateMaterialUsageUnitCostBasis",
      "handlerName": "handleCmdUpdateMaterialUsageUnitCostBasisChange"
    },
    {
      "actionId": "set.cmdDeleteMaterialUsageMaterialUsageId",
      "kind": "stateSetter",
      "stateKey": "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId",
      "methodName": "setCmdDeleteMaterialUsageMaterialUsageId",
      "handlerName": "handleCmdDeleteMaterialUsageMaterialUsageIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListMaterialUsage",
      "stateKey": "ui.materialUsageCatalogue.data.qryListMaterialUsage"
    },
    {
      "actionId": "qryInventoryBalancePicker",
      "stateKey": "ui.materialUsageCatalogue.data.qryInventoryBalancePicker"
    },
    {
      "actionId": "qryInventoryItemPicker",
      "stateKey": "ui.materialUsageCatalogue.data.qryInventoryItemPicker"
    },
    {
      "actionId": "qryProjectPicker",
      "stateKey": "ui.materialUsageCatalogue.data.qryProjectPicker"
    }
  ],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en",
      "es"
    ],
    "runtimeLocales": [
      "pt-br",
      "en",
      "es"
    ]
  },
  "i18n": {
    "section.materialUsageCatalogue.recordList.title": "Consumos registrados",
    "organism.materialUsageCatalogue.qryListMaterialUsage.title": "Listar Consumo de material",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.title": "Listar Consumo de material",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.empty": "Nenhum registro encontrado",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label": "Material Usage Id",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label": "Status",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label": "Project Id",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label": "Inventory Balance Id",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label": "Quantity",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label": "Usage Description",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label": "Consumed On",
    "intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label": "Unit Cost Basis",
    "organism.materialUsageCatalogue.cmdDeleteMaterialUsage.title": "Excluir Consumo de material",
    "intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.title": "Excluir Consumo de material",
    "intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage": "Excluir Consumo de material",
    "section.materialUsageCatalogue.recordForm.title": "Registrar ou corrigir consumo",
    "organism.materialUsageCatalogue.cmdCreateMaterialUsage.title": "Registrar o consumo de material",
    "intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title": "Registrar o consumo de material",
    "intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage": "Registrar o consumo de material",
    "intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label": "Quantity",
    "intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label": "Usage Description",
    "intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label": "Consumed On",
    "intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label": "Unit Cost Basis",
    "organism.materialUsageCatalogue.qryInventoryBalancePicker.title": "Listar Saldo de estoque",
    "intent.materialUsageCatalogue.qryInventoryBalancePicker.list.title": "Listar Saldo de estoque",
    "intent.materialUsageCatalogue.qryInventoryBalancePicker.list.empty": "Nenhum registro encontrado",
    "intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryBalanceId.label": "Inventory Balance Id",
    "intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.physicalQuantity.label": "Physical Quantity",
    "intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.applicableUnitCost.label": "Applicable Unit Cost",
    "intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.status.label": "Status",
    "organism.materialUsageCatalogue.qryInventoryItemPicker.title": "Listar Item de estoque",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.title": "Listar Item de estoque",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.empty": "Nenhum registro encontrado",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.name.label": "Name",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.description.label": "Description",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label": "Unit Of Measure",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label": "Reference Unit Cost",
    "intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.status.label": "Status",
    "organism.materialUsageCatalogue.qryProjectPicker.title": "Listar Obra",
    "intent.materialUsageCatalogue.qryProjectPicker.list.title": "Listar Obra",
    "intent.materialUsageCatalogue.qryProjectPicker.list.empty": "Nenhum registro encontrado",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.projectId.label": "Project Id",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.clientId.label": "Client Id",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.name.label": "Name",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.address.label": "Address",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.status.label": "Status",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedEndDate.label": "Planned End Date",
    "organism.materialUsageCatalogue.cmdUpdateMaterialUsage.title": "Atualizar Consumo de material",
    "intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title": "Atualizar Consumo de material",
    "intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage": "Atualizar Consumo de material",
    "intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.status.label": "Status",
    "intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label": "Quantity",
    "intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label": "Usage Description",
    "intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label": "Consumed On",
    "intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label": "Unit Cost Basis",
    "action.cmdCreateMaterialUsage.success": "Registrar o consumo de material: OK",
    "action.cmdCreateMaterialUsage.error": "Registrar o consumo de material: falhou",
    "action.cmdUpdateMaterialUsage.success": "Atualizar Consumo de material: OK",
    "action.cmdUpdateMaterialUsage.error": "Atualizar Consumo de material: falhou",
    "action.cmdDeleteMaterialUsage.success": "Excluir Consumo de material: OK",
    "action.cmdDeleteMaterialUsage.error": "Excluir Consumo de material: falhou",
    "section.materialUsageCatalogue.usageWorkbench.title": "Consumos de material"
  },
  "automation": {
    "statePrefix": "ui.materialUsageCatalogue",
    "stateKeys": [
      "ui.materialUsageCatalogue.status",
      "ui.materialUsageCatalogue.action.qryListMaterialUsage.status",
      "ui.materialUsageCatalogue.data.qryListMaterialUsage",
      "ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status",
      "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
      "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
      "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId",
      "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity",
      "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription",
      "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn",
      "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis",
      "ui.materialUsageCatalogue.output.cmdCreateMaterialUsage",
      "ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error",
      "ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn",
      "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis",
      "ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage",
      "ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error",
      "ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status",
      "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId",
      "ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage",
      "ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error",
      "ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status",
      "ui.materialUsageCatalogue.data.qryInventoryBalancePicker",
      "ui.materialUsageCatalogue.action.qryInventoryItemPicker.status",
      "ui.materialUsageCatalogue.data.qryInventoryItemPicker",
      "ui.materialUsageCatalogue.action.qryProjectPicker.status",
      "ui.materialUsageCatalogue.data.qryProjectPicker"
    ],
    "actionIds": [
      "qryListMaterialUsage",
      "cmdCreateMaterialUsage",
      "cmdUpdateMaterialUsage",
      "cmdDeleteMaterialUsage",
      "qryInventoryBalancePicker",
      "qryInventoryItemPicker",
      "qryProjectPicker",
      "set.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId",
      "set.cmdCreateMaterialUsageInventoryItemInventoryItemId",
      "set.cmdCreateMaterialUsageProjectProjectId",
      "set.cmdCreateMaterialUsageQuantity",
      "set.cmdCreateMaterialUsageUsageDescription",
      "set.cmdCreateMaterialUsageConsumedOn",
      "set.cmdCreateMaterialUsageUnitCostBasis",
      "set.cmdUpdateMaterialUsageMaterialUsageId",
      "set.cmdUpdateMaterialUsageStatus",
      "set.cmdUpdateMaterialUsageProjectId",
      "set.cmdUpdateMaterialUsageInventoryItemId",
      "set.cmdUpdateMaterialUsageInventoryBalanceId",
      "set.cmdUpdateMaterialUsageQuantity",
      "set.cmdUpdateMaterialUsageUsageDescription",
      "set.cmdUpdateMaterialUsageConsumedOn",
      "set.cmdUpdateMaterialUsageUnitCostBasis",
      "set.cmdDeleteMaterialUsageMaterialUsageId"
    ]
  }
};

export const pipeline = [
  {
    "id": "materialUsageCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/materialUsageCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "materialUsageRequiresActiveProjectAndAvailableInventory",
      "costEligibleMaterialUsage"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
