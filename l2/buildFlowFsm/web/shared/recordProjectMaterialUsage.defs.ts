/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordProjectMaterialUsage",
  "pageName": "Registrar consumo de material da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmRecordProjectMaterialUsageBase",
  "routePattern": "/buildFlowFsm/recordProjectMaterialUsage/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:recordProjectMaterialUsage",
    "contract:buildFlowFsm.recordProjectMaterialUsage.qryLocateProject",
    "contract:buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem",
    "contract:buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage",
    "contract:buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator",
    "contract:buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker"
  ],
  "operationIds": [
    "createMaterialUsage",
    "handoffMaterialUsageToFieldCoordinator",
    "listInventoryBalance",
    "locateInventoryItem",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "recordProjectMaterialUsage",
    "workspaceKind": "operation",
    "actor": "fieldWorker",
    "entity": "MaterialUsage",
    "owners": [
      {
        "kind": "operation",
        "id": "createMaterialUsage",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createMaterialUsage.defs.ts"
      },
      {
        "kind": "operation",
        "id": "handoffMaterialUsageToFieldCoordinator",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffMaterialUsageToFieldCoordinator.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listInventoryBalance",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listInventoryBalance.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateInventoryItem",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateInventoryItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateProject.defs.ts"
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
          "operationId": "handoffMaterialUsageToFieldCoordinator",
          "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
          "steps": [
            "Informar o consumo ao coordenador",
            "O coordenador recebe o consumo para acompanhamento."
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
          "operationId": "locateInventoryItem",
          "commandName": "qryLocateInventoryItem",
          "steps": [
            "Selecionar o material consumido",
            "Um item do catálogo compartilhado de materiais e estoque está selecionado."
          ]
        },
        {
          "operationId": "locateProject",
          "commandName": "qryLocateProject",
          "steps": [
            "Localizar a própria obra",
            "Uma obra associada ao cliente está selecionada."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/recordProjectMaterialUsage.ts",
    "contracts": [
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryLocateInventoryItem",
        "routeConst": "qryLocateInventoryItemRoute"
      },
      {
        "commandName": "cmdCreateMaterialUsage",
        "routeConst": "cmdCreateMaterialUsageRoute"
      },
      {
        "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
        "routeConst": "cmdHandoffMaterialUsageToFieldCoordinatorRoute"
      },
      {
        "commandName": "qryInventoryBalancePicker",
        "routeConst": "qryInventoryBalancePickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/recordProjectMaterialUsage.defs.ts",
    "layoutId": "recordProjectMaterialUsage-pos_workspace"
  },
  "states": [
    {
      "stateKey": "ui.recordProjectMaterialUsage.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.action.qryLocateProject.status",
      "name": "qryLocateProjectState",
      "kind": "actionStatus",
      "actionRef": "qryLocateProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.data.qryLocateProject",
      "name": "qryLocateProjectData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateProject",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status",
      "name": "qryLocateInventoryItemState",
      "kind": "actionStatus",
      "actionRef": "qryLocateInventoryItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.data.qryLocateInventoryItem",
      "name": "qryLocateInventoryItemData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateInventoryItem",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status",
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
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
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
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
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
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId",
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
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity",
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
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription",
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
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn",
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
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis",
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
      "stateKey": "ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage",
      "name": "cmdCreateMaterialUsageOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateMaterialUsage",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error",
      "name": "cmdCreateMaterialUsageError",
      "kind": "actionError",
      "actionRef": "cmdCreateMaterialUsage",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffMaterialUsageToFieldCoordinator",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
        "direction": "input",
        "field": "materialUsageMaterialUsageId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorQuantity",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
        "direction": "input",
        "field": "usageDescription"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
        "direction": "input",
        "field": "consumedOn"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
        "direction": "input",
        "field": "unitCostBasis"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffMaterialUsageToFieldCoordinator",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error",
      "name": "cmdHandoffMaterialUsageToFieldCoordinatorError",
      "kind": "actionError",
      "actionRef": "cmdHandoffMaterialUsageToFieldCoordinator",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status",
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
      "stateKey": "ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker",
      "name": "qryInventoryBalancePickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInventoryBalancePicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.recordProjectMaterialUsage.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.recordProjectMaterialUsage.data.qryLocateProject"
      ],
      "statusStateKey": "ui.recordProjectMaterialUsage.action.qryLocateProject.status"
    },
    {
      "actionId": "qryLocateInventoryItem",
      "kind": "query",
      "commandRef": "qryLocateInventoryItem",
      "routeKey": "buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem",
      "purpose": "Selecionar o material consumido",
      "methodName": "loadQryLocateInventoryItem",
      "handlerName": "handleQryLocateInventoryItemClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.recordProjectMaterialUsage.data.qryLocateInventoryItem"
      ],
      "statusStateKey": "ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status"
    },
    {
      "actionId": "cmdCreateMaterialUsage",
      "kind": "command",
      "commandRef": "cmdCreateMaterialUsage",
      "routeKey": "buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage",
      "purpose": "Registrar o consumo de material",
      "methodName": "cmdCreateMaterialUsage",
      "handlerName": "handleCmdCreateMaterialUsageClick",
      "inputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis"
      ],
      "routeParamInputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId"
      ],
      "outputStateKeys": [
        "ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage"
      ],
      "statusStateKey": "ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status",
      "errorStateKey": "ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateMaterialUsage.success",
        "errorMessageKey": "action.cmdCreateMaterialUsage.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis"
      ],
      "refreshActionIds": [
        "qryLocateProject",
        "qryLocateInventoryItem",
        "qryInventoryBalancePicker"
      ]
    },
    {
      "actionId": "cmdHandoffMaterialUsageToFieldCoordinator",
      "kind": "command",
      "commandRef": "cmdHandoffMaterialUsageToFieldCoordinator",
      "routeKey": "buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator",
      "purpose": "Informar o consumo ao coordenador",
      "methodName": "cmdHandoffMaterialUsageToFieldCoordinator",
      "handlerName": "handleCmdHandoffMaterialUsageToFieldCoordinatorClick",
      "inputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId"
      ],
      "outputStateKeys": [
        "ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator"
      ],
      "statusStateKey": "ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status",
      "errorStateKey": "ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffMaterialUsageToFieldCoordinator.success",
        "errorMessageKey": "action.cmdHandoffMaterialUsageToFieldCoordinator.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis"
      ],
      "refreshActionIds": [
        "qryLocateProject",
        "qryLocateInventoryItem",
        "qryInventoryBalancePicker"
      ]
    },
    {
      "actionId": "qryInventoryBalancePicker",
      "kind": "query",
      "commandRef": "qryInventoryBalancePicker",
      "routeKey": "buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker",
      "purpose": "Listar Saldo de estoque",
      "methodName": "loadQryInventoryBalancePicker",
      "handlerName": "handleQryInventoryBalancePickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker"
      ],
      "statusStateKey": "ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
      "methodName": "setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId",
      "handlerName": "handleCmdCreateMaterialUsageInventoryBalanceInventoryBalanceIdChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageInventoryItemInventoryItemId",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
      "methodName": "setCmdCreateMaterialUsageInventoryItemInventoryItemId",
      "handlerName": "handleCmdCreateMaterialUsageInventoryItemInventoryItemIdChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId",
      "methodName": "setCmdCreateMaterialUsageProjectProjectId",
      "handlerName": "handleCmdCreateMaterialUsageProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity",
      "methodName": "setCmdCreateMaterialUsageQuantity",
      "handlerName": "handleCmdCreateMaterialUsageQuantityChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageUsageDescription",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription",
      "methodName": "setCmdCreateMaterialUsageUsageDescription",
      "handlerName": "handleCmdCreateMaterialUsageUsageDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageConsumedOn",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn",
      "methodName": "setCmdCreateMaterialUsageConsumedOn",
      "handlerName": "handleCmdCreateMaterialUsageConsumedOnChange"
    },
    {
      "actionId": "set.cmdCreateMaterialUsageUnitCostBasis",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis",
      "methodName": "setCmdCreateMaterialUsageUnitCostBasis",
      "handlerName": "handleCmdCreateMaterialUsageUnitCostBasisChange"
    },
    {
      "actionId": "set.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
      "methodName": "setCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId",
      "handlerName": "handleCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageIdChange"
    },
    {
      "actionId": "set.cmdHandoffMaterialUsageToFieldCoordinatorQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity",
      "methodName": "setCmdHandoffMaterialUsageToFieldCoordinatorQuantity",
      "handlerName": "handleCmdHandoffMaterialUsageToFieldCoordinatorQuantityChange"
    },
    {
      "actionId": "set.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription",
      "methodName": "setCmdHandoffMaterialUsageToFieldCoordinatorUsageDescription",
      "handlerName": "handleCmdHandoffMaterialUsageToFieldCoordinatorUsageDescriptionChange"
    },
    {
      "actionId": "set.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn",
      "methodName": "setCmdHandoffMaterialUsageToFieldCoordinatorConsumedOn",
      "handlerName": "handleCmdHandoffMaterialUsageToFieldCoordinatorConsumedOnChange"
    },
    {
      "actionId": "set.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis",
      "kind": "stateSetter",
      "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis",
      "methodName": "setCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis",
      "handlerName": "handleCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasisChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.recordProjectMaterialUsage.data.qryLocateProject"
    },
    {
      "actionId": "qryLocateInventoryItem",
      "stateKey": "ui.recordProjectMaterialUsage.data.qryLocateInventoryItem"
    },
    {
      "actionId": "qryInventoryBalancePicker",
      "stateKey": "ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker"
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
    "section.recordProjectMaterialUsage.locateProject.title": "Project context",
    "organism.recordProjectMaterialUsage.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label": "Name",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.address.label": "Address",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label": "Status",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.recordProjectMaterialUsage.locateInventoryItem.title": "Material context",
    "organism.recordProjectMaterialUsage.qryLocateInventoryItem.title": "Selecionar o material consumido",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title": "Selecionar o material consumido",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty": "Nenhum registro encontrado",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.name.label": "Name",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.description.label": "Description",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label": "Unit Of Measure",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.referenceUnitCost.label": "Reference Unit Cost",
    "intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.status.label": "Status",
    "section.recordProjectMaterialUsage.createMaterialUsage.title": "Record consumption",
    "organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title": "Listar Saldo de estoque",
    "intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title": "Listar Saldo de estoque",
    "intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty": "Nenhum registro encontrado",
    "intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label": "Inventory Balance Id",
    "intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryItemId.label": "Inventory Item Id",
    "intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label": "Physical Quantity",
    "intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label": "Applicable Unit Cost",
    "intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.status.label": "Status",
    "organism.recordProjectMaterialUsage.cmdCreateMaterialUsage.title": "Registrar o consumo de material",
    "intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title": "Registrar o consumo de material",
    "intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage": "Registrar o consumo de material",
    "intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label": "Quantity",
    "intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label": "Usage Description",
    "intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label": "Consumed On",
    "intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label": "Unit Cost Basis",
    "section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title": "Coordinator handoff",
    "organism.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.title": "Informar o consumo ao coordenador",
    "intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title": "Informar o consumo ao coordenador",
    "intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator": "Informar o consumo ao coordenador",
    "intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label": "Quantity",
    "intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label": "Usage Description",
    "intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label": "Consumed On",
    "intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label": "Unit Cost Basis",
    "action.cmdCreateMaterialUsage.success": "Registrar o consumo de material: OK",
    "action.cmdCreateMaterialUsage.error": "Registrar o consumo de material: falhou",
    "action.cmdHandoffMaterialUsageToFieldCoordinator.success": "Informar o consumo ao coordenador: OK",
    "action.cmdHandoffMaterialUsageToFieldCoordinator.error": "Informar o consumo ao coordenador: falhou",
    "section.recordProjectMaterialUsage.usageWorkspace.title": "Registrar consumo",
    "section.recordProjectMaterialUsage.materialUsageWorkspace.title": "Registro e encaminhamento do consumo"
  },
  "automation": {
    "statePrefix": "ui.recordProjectMaterialUsage",
    "stateKeys": [
      "ui.recordProjectMaterialUsage.status",
      "ui.recordProjectMaterialUsage.action.qryLocateProject.status",
      "ui.recordProjectMaterialUsage.data.qryLocateProject",
      "ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status",
      "ui.recordProjectMaterialUsage.data.qryLocateInventoryItem",
      "ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status",
      "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
      "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
      "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId",
      "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity",
      "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription",
      "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn",
      "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis",
      "ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage",
      "ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error",
      "ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status",
      "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
      "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity",
      "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription",
      "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn",
      "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis",
      "ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator",
      "ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error",
      "ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status",
      "ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker"
    ],
    "actionIds": [
      "qryLocateProject",
      "qryLocateInventoryItem",
      "cmdCreateMaterialUsage",
      "cmdHandoffMaterialUsageToFieldCoordinator",
      "qryInventoryBalancePicker",
      "set.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId",
      "set.cmdCreateMaterialUsageInventoryItemInventoryItemId",
      "set.cmdCreateMaterialUsageProjectProjectId",
      "set.cmdCreateMaterialUsageQuantity",
      "set.cmdCreateMaterialUsageUsageDescription",
      "set.cmdCreateMaterialUsageConsumedOn",
      "set.cmdCreateMaterialUsageUnitCostBasis",
      "set.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId",
      "set.cmdHandoffMaterialUsageToFieldCoordinatorQuantity",
      "set.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription",
      "set.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn",
      "set.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis"
    ]
  }
};

export const pipeline = [
  {
    "id": "recordProjectMaterialUsage__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/recordProjectMaterialUsage.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "selectableInventoryItem",
      "materialUsageRequiresActiveProjectAndAvailableInventory"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
