/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryItemCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "inventoryItemCatalogue",
  "pageName": "Item de estoque",
  "baseClassName": "BuildFlowFsmInventoryItemCatalogueBase",
  "actor": "fieldWorker",
  "purpose": "Cadastro de Item de estoque.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Pessoa responsável pelo cadastro e manutenção do estoque.",
    "jobToBeDone": "Localizar um item de estoque e, no mesmo espaço de trabalho, cadastrá-lo, corrigir seus dados ou removê-lo com segurança.",
    "primaryDecision": "Qual item deve ser selecionado para editar ou excluir, ou se é necessário criar um novo item.",
    "decisiveInfo": [
      "inventoryItemId",
      "name",
      "description",
      "unitOfMeasure",
      "referenceUnitCost",
      "status"
    ],
    "usageFrequency": "Uso recorrente de back-office, com consultas e ajustes ocasionais durante a manutenção do catálogo.",
    "informationHierarchy": [
      "Lista escaneável de itens e seus nomes",
      "Status, unidade de medida e custo unitário de referência",
      "Detalhes do item selecionado",
      "Ações contextuais de atualizar e excluir",
      "Ação de criar novo item"
    ],
    "successCriteria": "A pessoa encontra rapidamente o item correto, entende seu estado atual, edita somente os dados necessários e conclui criação, atualização ou exclusão com feedback e atualização da lista.",
    "antiPatterns": [
      "Formulário CRUD sempre aberto ocupando o lugar da lista",
      "Campo de id digitável manualmente",
      "Status exposto como seleção livre de qualquer valor",
      "Exclusão sem confirmação",
      "Duplicar a lista em uma seção separada para cada operação"
    ],
    "criticalActions": [
      {
        "action": "Selecionar item para manutenção",
        "presentation": "master-detail"
      },
      {
        "action": "Atualizar item selecionado",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Excluir item selecionado",
        "presentation": "inline-row-command"
      },
      {
        "action": "Criar item",
        "presentation": "primary-button"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.inventoryItemCatalogue.qryListInventoryItem",
      "source": "bff.qryListInventoryItem",
      "command": "qryListInventoryItem",
      "description": "Listar Item de estoque",
      "kind": "query",
      "stateKey": "ui.inventoryItemCatalogue.data.qryListInventoryItem",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.inventoryItemCatalogue.cmdCreateInventoryItem",
      "source": "bff.cmdCreateInventoryItem",
      "command": "cmdCreateInventoryItem",
      "description": "Criar Item de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryItemCatalogue.output.cmdCreateInventoryItem",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status"
      ],
      "inputs": [
        {
          "name": "name",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "unitOfMeasure",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "referenceUnitCost",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryItemCatalogue.cmdUpdateInventoryItem",
      "source": "bff.cmdUpdateInventoryItem",
      "command": "cmdUpdateInventoryItem",
      "description": "Atualizar Item de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
        "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status"
      ],
      "inputs": [
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "name",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "unitOfMeasure",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "referenceUnitCost",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryItemCatalogue.cmdDeleteInventoryItem",
      "source": "bff.cmdDeleteInventoryItem",
      "command": "cmdDeleteInventoryItem",
      "description": "Excluir Item de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem",
      "inputStateKeys": [
        "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId"
      ],
      "inputs": [
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "inventoryItemCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryItemCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryItemCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "inventoryItemCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
