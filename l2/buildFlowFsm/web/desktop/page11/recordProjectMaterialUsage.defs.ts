/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/recordProjectMaterialUsage.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordProjectMaterialUsage",
  "pageName": "Registrar consumo de material da obra",
  "baseClassName": "BuildFlowFsmRecordProjectMaterialUsageBase",
  "actor": "fieldWorker",
  "purpose": "Rastrear materiais consumidos em uma obra para apoiar execução e custeio.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "dataBindings": [
    {
      "id": "binding.recordProjectMaterialUsage.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.recordProjectMaterialUsage.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.recordProjectMaterialUsage.qryLocateInventoryItem",
      "source": "bff.qryLocateInventoryItem",
      "command": "qryLocateInventoryItem",
      "description": "Selecionar o material consumido",
      "kind": "query",
      "stateKey": "ui.recordProjectMaterialUsage.data.qryLocateInventoryItem",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.recordProjectMaterialUsage.cmdCreateMaterialUsage",
      "source": "bff.cmdCreateMaterialUsage",
      "command": "cmdCreateMaterialUsage",
      "description": "Registrar o consumo de material",
      "kind": "command",
      "stateKey": "ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage",
      "inputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn",
        "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis"
      ],
      "inputs": [
        {
          "name": "inventoryBalanceInventoryBalanceId",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "inventoryItemInventoryItemId",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "quantity",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "usageDescription",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "consumedOn",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "unitCostBasis",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator",
      "source": "bff.cmdHandoffMaterialUsageToFieldCoordinator",
      "command": "cmdHandoffMaterialUsageToFieldCoordinator",
      "description": "Informar o consumo ao coordenador",
      "kind": "command",
      "stateKey": "ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator",
      "inputStateKeys": [
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn",
        "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis"
      ],
      "inputs": [
        {
          "name": "materialUsageMaterialUsageId",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "quantity",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "usageDescription",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "consumedOn",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "unitCostBasis",
          "stateKey": "ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.recordProjectMaterialUsage.qryInventoryBalancePicker",
      "source": "bff.qryInventoryBalancePicker",
      "command": "qryInventoryBalancePicker",
      "description": "Listar Saldo de estoque",
      "kind": "query",
      "stateKey": "ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "recordProjectMaterialUsage__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/recordProjectMaterialUsage.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/recordProjectMaterialUsage.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "recordProjectMaterialUsage__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
