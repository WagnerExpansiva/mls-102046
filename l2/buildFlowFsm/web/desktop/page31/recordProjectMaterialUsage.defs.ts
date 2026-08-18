/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/recordProjectMaterialUsage.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordProjectMaterialUsage",
  "pageName": "Registrar consumo de material da obra",
  "baseClassName": "BuildFlowFsmRecordProjectMaterialUsageBase",
  "actor": "fieldWorker",
  "purpose": "Rastrear materiais consumidos em uma obra para apoiar execução e custeio.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Responsável pela execução ou controle de uma obra",
    "jobToBeDone": "Registrar com rapidez e precisão o material consumido na obra e encaminhar esse registro ao coordenador de campo para acompanhamento.",
    "primaryDecision": "Confirmar o material e o saldo de estoque corretos, informar a quantidade consumida e registrar o consumo.",
    "decisiveInfo": [
      "projectId",
      "name",
      "status",
      "inventoryItemId",
      "name",
      "unitOfMeasure",
      "referenceUnitCost",
      "inventoryBalanceId",
      "physicalQuantity",
      "applicableUnitCost",
      "quantity",
      "usageDescription",
      "consumedOn",
      "unitCostBasis",
      "materialUsageId"
    ],
    "usageFrequency": "Operacional e recorrente durante a execução da obra, potencialmente em sessões repetidas e com necessidade de baixa fricção.",
    "informationHierarchy": [
      "obra selecionada e seu status",
      "material selecionado e unidade de medida",
      "saldo físico disponível e custo unitário aplicável",
      "quantidade consumida e data",
      "descrição do uso e base de custo",
      "confirmação do registro e ação de encaminhamento ao coordenador"
    ],
    "successCriteria": "O usuário consegue reconhecer a obra e o material corretos, comparar o saldo e custo de referência, registrar somente os dados necessários, receber confirmação clara e encaminhar o registro sem redigitar identificadores ou informações já conhecidas.",
    "antiPatterns": [
      "formulário separado para cada etapa de seleção",
      "ids digitados manualmente",
      "campo livre para status",
      "duplicar o mesmo consumo em um segundo formulário de encaminhamento",
      "ocultar saldo ou custo de referência antes da decisão",
      "expor campos derivados ou de rota como entradas editáveis"
    ],
    "criticalActions": [
      {
        "action": "Selecionar obra, material e saldo de estoque",
        "presentation": "master-detail-selection-with-read-only-context"
      },
      {
        "action": "Registrar o consumo",
        "presentation": "primary-button-in-contextual-summary-form"
      },
      {
        "action": "Encaminhar o consumo ao coordenador de campo",
        "presentation": "contextual-transition-actions-on-selected-record"
      }
    ]
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
    "id": "recordProjectMaterialUsage__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/recordProjectMaterialUsage.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/recordProjectMaterialUsage.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "recordProjectMaterialUsage__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
