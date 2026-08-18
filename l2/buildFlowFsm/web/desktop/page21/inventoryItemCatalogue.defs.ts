/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryItemCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Pessoa responsável pelo cadastro e manutenção do catálogo de itens de estoque.",
    "jobToBeDone": "Localizar rapidamente um item de estoque e então criar um novo registro ou corrigir/remover o registro selecionado com segurança.",
    "primaryDecision": "Decidir qual item deve ser mantido e executar a ação contextual adequada — criar, atualizar ou excluir.",
    "decisiveInfo": [
      "inventoryItemId",
      "name",
      "description",
      "unitOfMeasure",
      "referenceUnitCost",
      "status"
    ],
    "usageFrequency": "Ocasional e operacional, durante a manutenção do catálogo e antes de processos que dependem de itens de estoque.",
    "informationHierarchy": [
      "Lista pesquisável e seleção do item",
      "Nome, unidade de medida, custo unitário de referência e status do item selecionado",
      "Ações contextuais de atualizar ou excluir",
      "Formulário de criação para um novo item",
      "Descrição como informação complementar"
    ],
    "successCriteria": "A pessoa encontra um item sem memorizar identificadores, entende seu estado e dados atuais, edita apenas o registro selecionado ou cria um novo item com poucos passos, e não exclui acidentalmente um registro.",
    "antiPatterns": [
      "Expor inventoryItemId como campo digitável",
      "Tratar status como um select livre com todos os valores",
      "Separar exclusão em um formulário independente",
      "Ocultar a lista enquanto a pessoa corrige um registro",
      "Duplicar a mesma operação em várias seções desconectadas",
      "Pedir dados de sistema ou contexto que já podem ser derivados da seleção"
    ],
    "criticalActions": [
      {
        "action": "Encontrar e selecionar um item",
        "presentation": "master-detail-list-selection"
      },
      {
        "action": "Criar item de estoque",
        "presentation": "primary-button-opening-contextual-editor"
      },
      {
        "action": "Atualizar item selecionado",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Excluir item selecionado",
        "presentation": "inline-row-command-with-confirmation"
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
    "id": "inventoryItemCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryItemCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryItemCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "inventoryItemCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
