/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/recordProjectMaterialUsage.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável pela execução ou apontamento de custos da obra",
    "jobToBeDone": "Registrar rapidamente o material consumido em uma obra e, quando necessário, encaminhar esse registro ao coordenador de campo.",
    "primaryDecision": "Confirmar o registro do consumo com a obra, o material, o saldo disponível e a quantidade corretos.",
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
      "status",
      "quantity",
      "consumedOn",
      "usageDescription",
      "unitCostBasis"
    ],
    "usageFrequency": "Recorrente durante a execução da obra, potencialmente em ambiente operacional e com necessidade de lançamentos rápidos.",
    "informationHierarchy": [
      "Obra ativa selecionada",
      "Material selecionado e sua unidade/custo de referência",
      "Saldo físico disponível e custo aplicável",
      "Quantidade e data do consumo",
      "Descrição e custo-base",
      "Confirmação do registro",
      "Encaminhamento contextual ao coordenador"
    ],
    "successCriteria": "O usuário identifica o contexto e o saldo sem digitar ids, lança somente os dados necessários, recebe confirmação clara e consegue encaminhar o registro ao coordenador sem repetir o lançamento.",
    "antiPatterns": [
      "Campos manuais para projectId, inventoryItemId, inventoryBalanceId ou materialUsageId",
      "Status como select editável",
      "Formulário separado para cada etapa de seleção",
      "Ocultar saldo físico ou custo aplicável durante a decisão",
      "Exigir redigitação dos dados do consumo para encaminhamento",
      "Adicionar urgência artificial ou confirmação excessiva em lançamentos recorrentes"
    ],
    "criticalActions": [
      {
        "action": "Selecionar obra, material e saldo de estoque",
        "presentation": "master-detail com seleções contextualizadas e dados de referência visíveis"
      },
      {
        "action": "Registrar consumo",
        "presentation": "primary-button em painel de resumo, com quantidade e demais decisões do consumo inline"
      },
      {
        "action": "Encaminhar consumo ao coordenador",
        "presentation": "contextual-transition-actions junto ao registro selecionado, após confirmação do registro"
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
    "id": "recordProjectMaterialUsage__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/recordProjectMaterialUsage.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/recordProjectMaterialUsage.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "recordProjectMaterialUsage__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
