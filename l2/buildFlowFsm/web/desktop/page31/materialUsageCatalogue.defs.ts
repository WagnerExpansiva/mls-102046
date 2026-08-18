/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/materialUsageCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "materialUsageCatalogue",
  "pageName": "Consumo de material",
  "baseClassName": "BuildFlowFsmMaterialUsageCatalogueBase",
  "actor": "fieldCoordinator",
  "purpose": "Cadastro de Consumo de material.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Profissional de obra ou responsável pelo controle de custos e estoque",
    "jobToBeDone": "Registrar, localizar e corrigir consumos de material vinculados a uma obra, mantendo o custo realizado baseado em dados de estoque confiáveis.",
    "primaryDecision": "Confirmar o material e a quantidade consumida e registrar ou corrigir esse consumo na obra correta.",
    "decisiveInfo": [
      "projectId",
      "inventoryItemId",
      "inventoryBalanceId",
      "quantity",
      "consumedOn",
      "unitCostBasis",
      "usageDescription",
      "status"
    ],
    "usageFrequency": "Recorrente durante a execução da obra, especialmente após retiradas ou aplicações de materiais; também ocasionalmente em conferências administrativas.",
    "informationHierarchy": [
      "obra e material associados",
      "quantidade consumida e data",
      "saldo físico e custo unitário de referência",
      "descrição do uso",
      "status do registro",
      "ações de registrar, corrigir ou excluir"
    ],
    "successCriteria": "O usuário identifica o consumo correto sem digitar IDs, vê referências de saldo e custo antes de salvar, registra ou corrige com poucos passos e recebe confirmação clara após a atualização da lista.",
    "antiPatterns": [
      "formulário CRUD expondo IDs técnicos",
      "status como select livre",
      "formulário de exclusão separado",
      "perder a seleção da lista ao editar",
      "permitir consumo sem contexto de obra, item ou saldo",
      "ocultar a quantidade e a data entre campos secundários"
    ],
    "criticalActions": [
      {
        "action": "Registrar consumo",
        "presentation": "primary-button no painel contextual de criação, com lookups de obra, item e saldo integrados"
      },
      {
        "action": "Corrigir consumo selecionado",
        "presentation": "contextual-transition-actions no painel de detalhe, preenchido pela linha selecionada"
      },
      {
        "action": "Excluir consumo selecionado",
        "presentation": "inline-row-command com confirmação explícita para ação destrutiva"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.materialUsageCatalogue.qryListMaterialUsage",
      "source": "bff.qryListMaterialUsage",
      "command": "qryListMaterialUsage",
      "description": "Listar Consumo de material",
      "kind": "query",
      "stateKey": "ui.materialUsageCatalogue.data.qryListMaterialUsage",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.materialUsageCatalogue.cmdCreateMaterialUsage",
      "source": "bff.cmdCreateMaterialUsage",
      "command": "cmdCreateMaterialUsage",
      "description": "Registrar o consumo de material",
      "kind": "command",
      "stateKey": "ui.materialUsageCatalogue.output.cmdCreateMaterialUsage",
      "inputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn",
        "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis"
      ],
      "inputs": [
        {
          "name": "inventoryBalanceInventoryBalanceId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "inventoryItemInventoryItemId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "quantity",
          "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "usageDescription",
          "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "consumedOn",
          "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "unitCostBasis",
          "stateKey": "ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.materialUsageCatalogue.cmdUpdateMaterialUsage",
      "source": "bff.cmdUpdateMaterialUsage",
      "command": "cmdUpdateMaterialUsage",
      "description": "Atualizar Consumo de material",
      "kind": "command",
      "stateKey": "ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage",
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
      "inputs": [
        {
          "name": "materialUsageId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "projectId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "inventoryItemId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "inventoryBalanceId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "quantity",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "usageDescription",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "consumedOn",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "unitCostBasis",
          "stateKey": "ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.materialUsageCatalogue.cmdDeleteMaterialUsage",
      "source": "bff.cmdDeleteMaterialUsage",
      "command": "cmdDeleteMaterialUsage",
      "description": "Excluir Consumo de material",
      "kind": "command",
      "stateKey": "ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage",
      "inputStateKeys": [
        "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId"
      ],
      "inputs": [
        {
          "name": "materialUsageId",
          "stateKey": "ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.materialUsageCatalogue.qryInventoryBalancePicker",
      "source": "bff.qryInventoryBalancePicker",
      "command": "qryInventoryBalancePicker",
      "description": "Listar Saldo de estoque",
      "kind": "query",
      "stateKey": "ui.materialUsageCatalogue.data.qryInventoryBalancePicker",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.materialUsageCatalogue.qryInventoryItemPicker",
      "source": "bff.qryInventoryItemPicker",
      "command": "qryInventoryItemPicker",
      "description": "Listar Item de estoque",
      "kind": "query",
      "stateKey": "ui.materialUsageCatalogue.data.qryInventoryItemPicker",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.materialUsageCatalogue.qryProjectPicker",
      "source": "bff.qryProjectPicker",
      "command": "qryProjectPicker",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.materialUsageCatalogue.data.qryProjectPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "materialUsageCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/materialUsageCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/materialUsageCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "materialUsageCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
