/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/materialUsageCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável de obra ou operador de estoque que acompanha custos de materiais.",
    "jobToBeDone": "Localizar um consumo de material e registrar ou corrigir sua quantidade, data, custo e descrição mantendo o vínculo correto com a obra e o estoque.",
    "primaryDecision": "Escolher um consumo existente para corrigir/remover ou iniciar o registro de um novo consumo.",
    "decisiveInfo": [
      "status do consumo",
      "obra vinculada",
      "item de estoque",
      "saldo de estoque",
      "quantidade",
      "data de consumo",
      "custo unitário utilizado",
      "descrição do uso"
    ],
    "usageFrequency": "Ocasional e operacional, durante lançamentos e conferências de custos de uma obra.",
    "informationHierarchy": [
      "consumos existentes e seu status",
      "contexto da obra, item e saldo disponíveis",
      "quantidade, data e custo do consumo selecionado",
      "descrição complementar",
      "ações de registrar, corrigir ou remover"
    ],
    "successCriteria": "A pessoa identifica o registro correto sem digitar ids, entende o vínculo e o estado do consumo, conclui lançamentos com poucos campos e corrige ou remove o registro diretamente no contexto selecionado.",
    "antiPatterns": [
      "formulário CRUD expondo ids técnicos como entradas",
      "status como select livre",
      "seção independente para cada picker",
      "formulário de exclusão separado",
      "perder a lista ao editar um registro",
      "permitir consumo sem mostrar o contexto de obra e estoque"
    ],
    "criticalActions": [
      {
        "action": "Selecionar consumo para revisão",
        "presentation": "master-detail"
      },
      {
        "action": "Registrar novo consumo",
        "presentation": "primary-button"
      },
      {
        "action": "Corrigir consumo selecionado",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Excluir consumo selecionado",
        "presentation": "inline-row-command com confirmação destrutiva"
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
    "id": "materialUsageCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/materialUsageCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/materialUsageCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "materialUsageCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
